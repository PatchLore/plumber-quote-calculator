'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { Calculator, CheckCircle } from 'lucide-react'

// Import shared QuoteFlow functionality
import { 
  quoteFormSchema, 
  leadFormSchema,
  useQuoteFlow,
  formatPrice,
  getUrgencyLabel,
  type QuoteFormData,
  type LeadFormData
} from '@trade-websites/quoteflow-core'

// Import database functions
import { submitLead } from '@trade-websites/database'

// Import client configuration
import { quoteflowConfig } from '../../quoteflow.config'

const urgencyOptions = [
  { value: 'standard', label: 'Standard (1-3 days)' },
  { value: 'same_day', label: 'Same Day (+20%)' },
  { value: 'emergency', label: 'Emergency (+40%)' }
]

export default function CalculatorPage() {
  const [showLeadCapture, setShowLeadCapture] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  // Quote form
  const quoteForm = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      jobType: '',
      postcode: '',
      urgency: 'standard',
      jobDetails: '',
      propertyType: undefined,
      bathrooms: undefined
    }
  })

  // Lead capture form
  const leadForm = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema)
  })

  // Watch quote form values
  const quoteFormData = quoteForm.watch()

  // Use QuoteFlow hook to calculate pricing
  const { pricingResult, hasQuote } = useQuoteFlow({
    config: quoteflowConfig.pricing,
    formData: quoteFormData
  })

  const onQuoteSubmit = () => {
    if (hasQuote) {
      setShowLeadCapture(true)
    }
  }

  const onLeadSubmit = async (leadData: LeadFormData) => {
    if (!pricingResult) return

    setIsSubmitting(true)

    try {
      const result = await submitLead(quoteflowConfig.clientId, {
        customer_name: leadData.name,
        customer_email: leadData.email,
        customer_phone: leadData.phone,
        service_type: quoteFormData.jobType!,
        urgency: quoteFormData.urgency!,
        postcode: quoteFormData.postcode!,
        property_type: quoteFormData.propertyType,
        bathrooms: quoteFormData.bathrooms,
        job_details: quoteFormData.jobDetails,
        quote_amount: pricingResult.totalPrice,
        status: 'new'
      })

      if (result.success) {
        setSubmitSuccess(true)
      } else {
        alert('Error submitting lead. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting lead:', error)
      alert('Error submitting lead. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const { branding } = quoteflowConfig

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full text-center">
          <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: `${branding.primaryColor}20` }}>
            <CheckCircle className="w-12 h-12" style={{ color: branding.primaryColor }} />
          </div>
          <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-8">
            We've received your quote request and will be in touch shortly with your personalized quote.
          </p>
          <Link 
            href="/" 
            className="inline-block px-8 py-4 rounded-full font-semibold text-white transition-all hover:-translate-y-0.5 shadow-lg"
            style={{ backgroundColor: branding.primaryColor }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-block mb-6">
            <div className="text-3xl font-bold" style={{ color: branding.primaryColor }}>
              {branding.companyName}
            </div>
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            <Calculator className="inline-block mr-3 mb-2" size={40} />
            Instant Quote Calculator
          </h1>
          <p className="text-xl text-gray-600">Get a transparent quote in seconds</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quote Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Your Job Details</h2>
            
            <form onSubmit={quoteForm.handleSubmit(onQuoteSubmit)} className="space-y-6">
              {/* Service Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What service do you need?
                </label>
                <select
                  {...quoteForm.register('jobType')}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                >
                  <option value="">Select a service...</option>
                  {Object.entries(quoteflowConfig.pricing.basePrices).map(([key, price]) => (
                    <option key={key} value={key}>
                      {key.split('/').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('/')} - from £{price}
                    </option>
                  ))}
                </select>
                {quoteForm.formState.errors.jobType && (
                  <p className="text-red-500 text-sm mt-1">{quoteForm.formState.errors.jobType.message}</p>
                )}
              </div>

              {/* Postcode */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Postcode</label>
                <input
                  {...quoteForm.register('postcode')}
                  placeholder="e.g. SW1A 1AA"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none uppercase"
                />
                {quoteForm.formState.errors.postcode && (
                  <p className="text-red-500 text-sm mt-1">{quoteForm.formState.errors.postcode.message}</p>
                )}
              </div>

              {/* Urgency */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">When do you need it?</label>
                <div className="space-y-2">
                  {urgencyOptions.map((option) => (
                    <label key={option.value} className="flex items-center p-3 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-blue-300 transition-all">
                      <input
                        type="radio"
                        value={option.value}
                        {...quoteForm.register('urgency')}
                        className="mr-3"
                      />
                      <span className="font-medium">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Property Type (optional) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Property Type (Optional)</label>
                <select
                  {...quoteForm.register('propertyType')}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                >
                  <option value="">Select...</option>
                  <option value="house">House</option>
                  <option value="flat">Flat</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>

              {/* Job Details (optional) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Details (Optional)</label>
                <textarea
                  {...quoteForm.register('jobDetails')}
                  rows={3}
                  placeholder="Tell us more about your plumbing issue..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none resize-none"
                />
              </div>
            </form>
          </div>

          {/* Quote Result / Lead Capture */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            {!showLeadCapture ? (
              <>
                <h2 className="text-2xl font-bold mb-6">Your Quote</h2>
                
                {hasQuote && pricingResult ? (
                  <div className="space-y-6">
                    {/* Quote Breakdown */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
                      <div className="text-center mb-6">
                        <div className="text-sm text-gray-600 mb-2">Estimated Total</div>
                        <div className="text-5xl font-extrabold" style={{ color: branding.primaryColor }}>
                          {formatPrice(pricingResult.totalPrice)}
                        </div>
                      </div>

                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between py-2 border-b border-gray-200">
                          <span className="text-gray-600">Base price</span>
                          <span className="font-semibold">{formatPrice(pricingResult.basePrice)}</span>
                        </div>
                        {pricingResult.urgencySurcharge > 0 && (
                          <div className="flex justify-between py-2 border-b border-gray-200">
                            <span className="text-gray-600">Urgency surcharge</span>
                            <span className="font-semibold">{formatPrice(pricingResult.urgencySurcharge)}</span>
                          </div>
                        )}
                        {pricingResult.travelFee > 0 && (
                          <div className="flex justify-between py-2 border-b border-gray-200">
                            <span className="text-gray-600">Travel fee</span>
                            <span className="font-semibold">{formatPrice(pricingResult.travelFee)}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={onQuoteSubmit}
                      className="w-full py-4 rounded-xl font-semibold text-white transition-all hover:-translate-y-0.5 shadow-lg text-lg"
                      style={{ backgroundColor: branding.primaryColor }}
                    >
                      Get This Quote →
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      No payment required. We'll contact you to confirm details.
                    </p>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">💡</div>
                    <p className="text-gray-600">
                      Fill in the form to see your instant quote
                    </p>
                  </div>
                )}
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-6">Almost Done!</h2>
                <p className="text-gray-600 mb-6">
                  Enter your contact details to receive your quote
                </p>

                <form onSubmit={leadForm.handleSubmit(onLeadSubmit)} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      {...leadForm.register('name')}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                    />
                    {leadForm.formState.errors.name && (
                      <p className="text-red-500 text-sm mt-1">{leadForm.formState.errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      {...leadForm.register('email')}
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                    />
                    {leadForm.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">{leadForm.formState.errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      {...leadForm.register('phone')}
                      type="tel"
                      placeholder="07925990923"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                    />
                    {leadForm.formState.errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{leadForm.formState.errors.phone.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-semibold text-white transition-all hover:-translate-y-0.5 shadow-lg disabled:opacity-50"
                    style={{ backgroundColor: branding.primaryColor }}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit & Get Quote'}
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowLeadCapture(false)}
                    className="w-full py-2 text-gray-600 hover:text-gray-900"
                  >
                    ← Back to quote
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}


