// Database types for Supabase
export interface Database {
  public: {
    Tables: {
      leads: {
        Row: Lead
        Insert: LeadInsert
        Update: LeadUpdate
      }
    }
  }
}

export interface Lead {
  id: string
  client_id: string
  customer_name: string
  customer_email: string
  customer_phone: string
  service_type: string
  urgency: 'standard' | 'same_day' | 'emergency'
  postcode: string
  property_type?: string
  bathrooms?: string
  job_details?: string
  quote_amount: number
  status: 'new' | 'contacted' | 'quoted' | 'won' | 'lost'
  created_at: string
  updated_at: string
}

export type LeadInsert = Omit<Lead, 'id' | 'created_at' | 'updated_at'>
export type LeadUpdate = Partial<LeadInsert>


