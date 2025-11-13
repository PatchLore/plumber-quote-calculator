-- ============================================
-- QuoteFlow Multi-Tenant Database Setup
-- ============================================
-- This migration adds client_id to enable multi-tenancy
-- Run this in your Supabase SQL editor

-- 1. Create or update leads table with client_id
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id TEXT NOT NULL,
  
  -- Customer information
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  
  -- Job details
  service_type TEXT NOT NULL,
  urgency TEXT NOT NULL CHECK (urgency IN ('standard', 'same_day', 'emergency')),
  postcode TEXT NOT NULL,
  property_type TEXT,
  bathrooms TEXT,
  job_details TEXT,
  
  -- Quote information
  quote_amount DECIMAL(10, 2) NOT NULL,
  
  -- Status tracking
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'quoted', 'won', 'lost')),
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Create index for fast client_id filtering
CREATE INDEX IF NOT EXISTS idx_leads_client_id ON leads(client_id);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);

-- 3. Create composite index for common queries
CREATE INDEX IF NOT EXISTS idx_leads_client_status ON leads(client_id, status, created_at DESC);

-- 4. Enable Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- 5. Create RLS policy for public insert (anyone can submit a lead)
CREATE POLICY "Anyone can insert leads"
  ON leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- 6. Create RLS policy for client-specific read access
-- Admins must be authenticated and can only see their own client's leads
CREATE POLICY "Clients can read own leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (
    client_id = current_setting('request.headers', true)::json->>'x-client-id'
    OR
    auth.uid() IN (
      SELECT user_id FROM client_admins WHERE client_id = leads.client_id
    )
  );

-- 7. Create RLS policy for client-specific updates
CREATE POLICY "Clients can update own leads"
  ON leads
  FOR UPDATE
  TO authenticated
  USING (
    client_id = current_setting('request.headers', true)::json->>'x-client-id'
    OR
    auth.uid() IN (
      SELECT user_id FROM client_admins WHERE client_id = leads.client_id
    )
  );

-- 8. Create client_admins table for admin access control
CREATE TABLE IF NOT EXISTS client_admins (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  client_id TEXT NOT NULL,
  role TEXT DEFAULT 'admin' CHECK (role IN ('admin', 'viewer')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  UNIQUE(user_id, client_id)
);

-- 9. Create index for client_admins
CREATE INDEX IF NOT EXISTS idx_client_admins_user ON client_admins(user_id);
CREATE INDEX IF NOT EXISTS idx_client_admins_client ON client_admins(client_id);

-- 10. Enable RLS for client_admins
ALTER TABLE client_admins ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own admin records"
  ON client_admins
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- 11. Create function to automatically update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 12. Create trigger for auto-updating updated_at
DROP TRIGGER IF EXISTS update_leads_updated_at ON leads;
CREATE TRIGGER update_leads_updated_at
  BEFORE UPDATE ON leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- Sample Data for Testing
-- ============================================

-- Insert sample client admin (replace with your actual user_id)
-- You can find your user_id by running: SELECT id FROM auth.users WHERE email = 'your@email.com';
-- INSERT INTO client_admins (user_id, client_id, role) VALUES 
--   ('your-user-id-here', 'fixblox', 'admin'),
--   ('your-user-id-here', 'adam-plumbing', 'admin');

-- Insert sample lead for testing
INSERT INTO leads (
  client_id,
  customer_name,
  customer_email,
  customer_phone,
  service_type,
  urgency,
  postcode,
  property_type,
  job_details,
  quote_amount,
  status
) VALUES (
  'adam-plumbing',
  'Test Customer',
  'test@example.com',
  '07925990923',
  'Emergency Leak Repair',
  'same_day',
  'SW1A 1AA',
  'house',
  'Kitchen sink leaking badly',
  194.00,
  'new'
);

-- ============================================
-- Verification Queries
-- ============================================

-- Check leads by client
-- SELECT * FROM leads WHERE client_id = 'adam-plumbing';

-- Check total leads per client
-- SELECT client_id, COUNT(*) as lead_count FROM leads GROUP BY client_id;

-- Check admin access
-- SELECT * FROM client_admins;


