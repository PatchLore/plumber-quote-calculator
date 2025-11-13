import { z } from 'zod'

export const pricingInputSchema = z.object({
  jobType: z.string().min(1, 'jobType is required'),
  postcode: z
    .string()
    .min(1, 'postcode is required')
    .regex(/^[A-Z]{1,2}[0-9][A-Z0-9]?\s?[0-9][A-Z]{2}$/i, 'invalid postcode'),
  urgency: z.enum(['standard', 'same_day', 'emergency']),
  jobDetails: z.string().optional(),
})

export type PricingInput = z.infer<typeof pricingInputSchema>

export interface PricingBreakdown {
  basePrice: number
  urgencySurcharge: number
  travelFee: number
  total: number
}

export interface PricingResult {
  basePrice: number
  urgencyMultiplier: number
  urgencySurcharge: number
  travelFee: number
  totalPrice: number
  breakdown: PricingBreakdown
}

export interface QuotePayload extends PricingInput {
  basePrice: number
}

export interface QuoteSummary {
  jobType: string
  totalPrice: number
  breakdown: PricingBreakdown
  postcode: string
  urgency: string
  details?: string
}


