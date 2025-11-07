# QuoteFlow Monorepo Setup Guide

## Architecture Overview

This monorepo uses **Turborepo** to manage multiple client websites that all share the core QuoteFlow functionality.

### Structure

```
trade-websites/                          # New root monorepo directory
├── apps/
│   ├── fixblox-platform/               # Your existing standalone QuoteFlow platform
│   ├── adam-plumbing/                  # First client website
│   └── [future-client-sites]/          # Future client sites
│
├── packages/
│   ├── quoteflow-core/                 # Core QuoteFlow calculator logic
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Calculator.tsx     # Main calculator component
│   │   │   │   ├── QuoteResult.tsx    # Quote display component
│   │   │   │   └── LeadForm.tsx       # Lead capture form
│   │   │   ├── hooks/
│   │   │   │   ├── useQuoteFlow.ts    # Main calculator logic
│   │   │   │   └── useLeadSubmit.ts   # Lead submission logic
│   │   │   ├── lib/
│   │   │   │   ├── pricing.ts         # Pricing calculations
│   │   │   │   └── types.ts           # TypeScript types
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── database/                       # Shared Supabase client and types
│   │   ├── src/
│   │   │   ├── client.ts              # Supabase client
│   │   │   ├── types.ts               # Database types
│   │   │   ├── leads.ts               # Lead operations
│   │   │   └── index.ts
│   │   ├── migrations/                # SQL migrations
│   │   │   └── 001_multi_tenant.sql
│   │   └── package.json
│   │
│   ├── ui/                             # Shared UI components
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Input.tsx
│   │   │   │   ├── Card.tsx
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   └── package.json
│   │
│   └── config/                         # Shared configs (TypeScript, ESLint, etc.)
│       ├── tsconfig.json
│       └── eslint.config.js
│
├── package.json                        # Root package.json (workspaces)
├── turbo.json                          # Turborepo configuration
├── .gitignore
└── README.md

```

## How It Works

### 1. **Shared QuoteFlow Core**
- All calculator logic lives in `packages/quoteflow-core`
- Each client site imports this package
- Updates to core = all sites get the update on next deploy

### 2. **Client Branding**
Each client site has a `quoteflow.config.ts`:

```typescript
// apps/adam-plumbing/quoteflow.config.ts
export const quoteflowConfig = {
  clientId: 'adam-plumbing',
  branding: {
    primaryColor: '#FF6B35',
    secondaryColor: '#004E89',
    logo: '/logo.png',
    companyName: 'Adam Plumbing',
  },
  contact: {
    phone: '07925990923',
    email: 'adam@adampleumbing.co.uk',
    whatsapp: '447925990923',
  },
  pricing: {
    basePrices: {
      emergency_leak: 120,
      boiler_service: 80,
      // ... custom pricing
    },
    travelFee: 50,
    urgencyMultipliers: {
      same_day: 1.2,
      next_day: 1.1,
    }
  }
}
```

### 3. **Database Multi-Tenancy**

All leads go to one Supabase database with client isolation:

```sql
-- Leads table structure
CREATE TABLE leads (
  id UUID PRIMARY KEY,
  client_id TEXT NOT NULL,        -- 'adam-plumbing', 'fixblox', etc.
  customer_name TEXT,
  customer_email TEXT,
  customer_phone TEXT,
  service_type TEXT,
  quote_amount DECIMAL,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Index for fast filtering by client
CREATE INDEX idx_leads_client_id ON leads(client_id);

-- Row Level Security (RLS) for admin access
CREATE POLICY "Admins see only their leads"
  ON leads
  FOR SELECT
  USING (client_id = current_setting('app.client_id', true));
```

### 4. **Deployment Strategy**

Each app deploys independently to Vercel:
- `fixblox-platform` → www.fixblox.com
- `adam-plumbing` → www.adampleumbing.co.uk

**Environment Variables per app:**
```bash
# apps/adam-plumbing/.env.local
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
NEXT_PUBLIC_CLIENT_ID=adam-plumbing
```

## Setup Instructions

### Step 1: Initialize Monorepo

```bash
# Navigate to your Trade directory
cd /Users/allendunn/Documents/Trade

# Create new monorepo root
mkdir trade-websites
cd trade-websites

# Initialize with npm workspaces
npm init -y

# Install Turborepo
npm install turbo --save-dev

# Create structure
mkdir -p apps packages
```

### Step 2: Move Existing Project

```bash
# Move current quote-calculator to apps
mv ../quote-calculator apps/fixblox-platform
```

### Step 3: Extract QuoteFlow Core

Extract calculator logic from `fixblox-platform` into `packages/quoteflow-core`

### Step 4: Create First Client Site

```bash
# Scaffold new client site
npx create-next-app@latest apps/adam-plumbing
```

### Step 5: Configure Turborepo

Create `turbo.json` to define build pipeline

### Step 6: Update Supabase

Run multi-tenancy migration SQL

### Step 7: Deploy

Connect each app folder to Vercel as separate projects

## Adding New Clients (5 minutes)

```bash
# 1. Copy template
cp -r apps/adam-plumbing apps/new-client

# 2. Update branding config
# Edit apps/new-client/quoteflow.config.ts

# 3. Update package.json name
# Edit apps/new-client/package.json

# 4. Deploy to Vercel
# Connect apps/new-client to new Vercel project

# 5. Done! 🎉
```

## Benefits

✅ **One update, all clients** - Fix a bug once, redeploy all sites  
✅ **Fast client onboarding** - 5 minutes to new branded site  
✅ **Type safety** - Shared TypeScript types prevent bugs  
✅ **Easy maintenance** - All code in one repo  
✅ **Independent deploys** - Each client site deploys separately  
✅ **Centralized data** - One Supabase, filtered by client_id  

## Next Steps

I'll now generate:
1. Complete file structure with code
2. QuoteFlow core package extraction
3. Adam Plumbing website template
4. Supabase migration scripts
5. Deployment configuration




