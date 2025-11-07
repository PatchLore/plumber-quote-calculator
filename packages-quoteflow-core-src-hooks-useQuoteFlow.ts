import { useState, useEffect } from 'react'
import { calculateQuote } from '../lib/pricing'
import { PricingResult, QuoteFormData, QuoteFlowPricingConfig } from '../lib/types'

interface UseQuoteFlowProps {
  config: QuoteFlowPricingConfig
  formData: Partial<QuoteFormData>
}

export function useQuoteFlow({ config, formData }: UseQuoteFlowProps) {
  const [pricingResult, setPricingResult] = useState<PricingResult | null>(null)

  useEffect(() => {
    // Check if required fields are filled
    const hasRequired = Boolean(
      formData.jobType && 
      formData.postcode && 
      formData.urgency
    )

    if (!hasRequired) {
      setPricingResult(null)
      return
    }

    // Calculate quote
    const result = calculateQuote(
      {
        jobType: formData.jobType!,
        postcode: formData.postcode!,
        urgency: formData.urgency!,
        jobDetails: formData.jobDetails,
        propertyType: formData.propertyType,
        bathrooms: formData.bathrooms
      },
      config
    )

    setPricingResult(result)
  }, [
    formData.jobType,
    formData.postcode,
    formData.urgency,
    formData.jobDetails,
    formData.propertyType,
    formData.bathrooms,
    config
  ])

  return {
    pricingResult,
    hasQuote: pricingResult !== null
  }
}


