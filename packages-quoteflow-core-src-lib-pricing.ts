import { PricingInput, PricingResult, QuoteFlowPricingConfig } from './types'

/**
 * Mock postcode distance calculation
 * In production, replace with real geocoding service (Google Maps API, etc.)
 */
function calculateDistance(postcode: string): number {
  // Simple hash-based mock: generates consistent distance for same postcode
  const hash = postcode.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0)
    return a & a
  }, 0)
  return Math.abs(hash) % 20 + 5
}

/**
 * Calculate quote based on input and pricing config
 * @param input - Quote input data (service, postcode, urgency)
 * @param config - Client-specific pricing configuration
 * @returns Detailed pricing breakdown
 */
export function calculateQuote(
  input: PricingInput,
  config: QuoteFlowPricingConfig
): PricingResult {
  // Get base price for selected service
  const basePrice = config.basePrices[input.jobType] || 0
  
  // Calculate urgency surcharge
  const urgencyMultiplier = config.urgencyMultipliers[input.urgency]
  const urgencySurcharge = basePrice * (urgencyMultiplier - 1)
  
  // Calculate travel fee based on distance
  const distance = calculateDistance(input.postcode)
  const travelFee = distance > config.travelFeeThreshold ? config.travelFee : 0
  
  // Calculate total
  const totalPrice = basePrice + urgencySurcharge + travelFee
  
  return {
    basePrice,
    urgencyMultiplier,
    urgencySurcharge,
    travelFee,
    totalPrice,
    breakdown: {
      basePrice,
      urgencySurcharge,
      travelFee,
      total: totalPrice
    }
  }
}

/**
 * Format price for display
 */
export function formatPrice(amount: number): string {
  return `£${amount.toFixed(0)}`
}

/**
 * Get urgency label for display
 */
export function getUrgencyLabel(urgency: string): string {
  const labels: Record<string, string> = {
    standard: 'Standard (1-3 days)',
    same_day: 'Same Day',
    emergency: 'Emergency'
  }
  return labels[urgency] || urgency
}


