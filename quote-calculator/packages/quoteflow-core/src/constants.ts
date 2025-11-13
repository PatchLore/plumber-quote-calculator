import type { pricingInputSchema } from './types'

export const URGENCY_MULTIPLIERS = {
  standard: 1.0,
  same_day: 1.2,
  emergency: 1.4,
} as const

export const TRAVEL_FEE_THRESHOLD = 10 // miles
export const TRAVEL_FEE_AMOUNT = 25 // currency units

export type UrgencyOption = keyof typeof URGENCY_MULTIPLIERS

export const DEFAULT_SERVICE_PRICING: Record<string, number> = {
  'emergency leak repair': 120,
  'boiler service/repair': 150,
  'toilet/tap installation': 80,
  'bathroom installation': 800,
  'drain unblocking': 100,
  'central heating work': 200,
}

export const SUPPORTED_URGENCY_OPTIONS: Array<{
  value: UrgencyOption
  label: string
  multiplier: number
}> = [
  { value: 'standard', label: 'Standard (1-3 days)', multiplier: URGENCY_MULTIPLIERS.standard },
  { value: 'same_day', label: 'Same Day (+20%)', multiplier: URGENCY_MULTIPLIERS.same_day },
  { value: 'emergency', label: 'Emergency (+40%)', multiplier: URGENCY_MULTIPLIERS.emergency },
]


