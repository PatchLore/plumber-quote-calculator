import { z } from 'zod'

// ============= Configuration Types =============

export interface QuoteFlowBranding {
  primaryColor: string
  secondaryColor: string
  logo: string
  companyName: string
  favicon?: string
}

export interface QuoteFlowContact {
  phone: string
  email: string
  whatsapp?: string
}

export interface QuoteFlowPricingConfig {
  basePrices: Record<string, number>
  travelFee: number
  travelFeeThreshold: number
  urgencyMultipliers: {
    standard: number
    same_day: number
    emergency: number
  }
}

export interface QuoteFlowConfig {
  clientId: string
  branding: QuoteFlowBranding
  contact: QuoteFlowContact
  pricing: QuoteFlowPricingConfig
  services: ServiceOption[]
}

// ============= Service Types =============

export interface ServiceOption {
  id: string
  name: string
  description?: string
  basePrice: number
  category?: string
}

// ============= Pricing Types =============

export type UrgencyType = 'standard' | 'same_day' | 'emergency'

export interface PricingInput {
  jobType: string
  postcode: string
  urgency: UrgencyType
  jobDetails?: string
  propertyType?: string
  bathrooms?: string
}

export interface PricingResult {
  basePrice: number
  urgencyMultiplier: number
  urgencySurcharge: number
  travelFee: number
  totalPrice: number
  breakdown: {
    basePrice: number
    urgencySurcharge: number
    travelFee: number
    total: number
  }
}

// ============= Lead Types =============

export interface LeadData {
  clientId: string
  customerName: string
  customerEmail: string
  customerPhone: string
  serviceType: string
  urgency: UrgencyType
  postcode: string
  propertyType?: string
  jobDetails?: string
  quoteAmount: number
  status: 'new' | 'contacted' | 'quoted' | 'won' | 'lost'
  createdAt?: string
}

// ============= Form Validation =============

export const quoteFormSchema = z.object({
  jobType: z.string().min(1, 'Please select a service'),
  postcode: z.string()
    .min(1, 'Please enter a postcode')
    .regex(/^[A-Z]{1,2}[0-9][A-Z0-9]?\s?[0-9][A-Z]{2}$/i, 'Please enter a valid UK postcode'),
  urgency: z.enum(['standard', 'same_day', 'emergency']),
  jobDetails: z.string().optional(),
  propertyType: z.enum(['house', 'flat', 'commercial']).optional(),
  bathrooms: z.enum(['1', '2', '3+']).optional()
})

export const leadFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().regex(/^(\+44|0)[0-9]{10}$/, 'Please enter a valid UK phone number')
})

export type QuoteFormData = z.infer<typeof quoteFormSchema>
export type LeadFormData = z.infer<typeof leadFormSchema>


