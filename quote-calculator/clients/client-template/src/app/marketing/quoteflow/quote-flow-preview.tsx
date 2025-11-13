'use client'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  calculateQuote,
  DEFAULT_SERVICE_PRICING,
  SUPPORTED_URGENCY_OPTIONS,
  type PricingInput,
  type PricingResult,
} from '@fixblox/quoteflow-core'

const formSchema = z.object({
  jobType: z.string().min(1),
  postcode: z
    .string()
    .min(1)
    .regex(/^[A-Z]{1,2}[0-9][A-Z0-9]?\s?[0-9][A-Z]{2}$/i, 'Enter a valid UK postcode'),
  urgency: z.enum(['standard', 'same_day', 'emergency']),
  jobDetails: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

export default function QuoteFlowPreview() {
  const [quote, setQuote] = useState<PricingResult | null>(null)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobType: '',
      postcode: '',
      urgency: 'standard',
      jobDetails: '',
    },
  })

  const jobType = watch('jobType')
  const postcode = watch('postcode')
  const urgency = watch('urgency')
  const jobDetails = watch('jobDetails')

  useEffect(() => {
    if (!jobType || !postcode || !urgency) {
      setQuote(null)
      return
    }

    const basePrice = DEFAULT_SERVICE_PRICING[jobType]
    if (!basePrice) {
      setQuote(null)
      return
    }

    const input: PricingInput = { jobType, postcode, urgency, jobDetails }
    const result = calculateQuote(input, basePrice)
    setQuote(result)
  }, [jobType, postcode, urgency, jobDetails])

  const onSubmit = () => {}

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Service details</h2>
        <p className="mt-2 text-sm text-slate-600">Update the defaults in `DEFAULT_SERVICE_PRICING` to match the client's pricing model.</p>

        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">Service</label>
            <select
              {...register('jobType')}
              className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
            >
              <option value="">Select service</option>
              {Object.entries(DEFAULT_SERVICE_PRICING).map(([service, price]) => (
                <option key={service} value={service}>
                  {service} — £{price}
                </option>
              ))}
            </select>
            {errors.jobType && <p className="mt-1 text-xs text-red-600">{errors.jobType.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Postcode</label>
            <input
              {...register('postcode')}
              className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
              placeholder="SW1A 1AA"
            />
            {errors.postcode && <p className="mt-1 text-xs text-red-600">{errors.postcode.message}</p>}
          </div>

          <div>
            <span className="block text-sm font-medium text-slate-700">Urgency</span>
            <div className="mt-2 space-y-2">
              {SUPPORTED_URGENCY_OPTIONS.map((option) => (
                <label key={option.value} className="flex items-center gap-2 text-sm text-slate-700">
                  <input
                    type="radio"
                    value={option.value}
                    {...register('urgency')}
                    className="h-4 w-4"
                  />
                  <span>
                    {option.label} <span className="text-slate-400">×{option.multiplier}</span>
                  </span>
                </label>
              ))}
            </div>
            {errors.urgency && <p className="mt-1 text-xs text-red-600">{errors.urgency.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Job details</label>
            <textarea
              {...register('jobDetails')}
              placeholder="Optional extra info"
              rows={4}
              className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
            />
          </div>
        </div>
      </form>

      <aside className="rounded-2xl border border-blue-200 bg-blue-50/80 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Quote output</h2>
        <p className="mt-2 text-sm text-slate-600">
          Swap this for a bespoke summary or pipe it into Supabase through the shared API route.
        </p>

        {quote ? (
          <div className="mt-6 space-y-4 rounded-xl bg-white p-5 shadow-sm">
            <div>
              <p className="text-sm text-slate-500">Estimated total</p>
              <p className="text-3xl font-bold text-blue-600">£{quote.totalPrice.toFixed(0)}</p>
            </div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex justify-between"><span>Base price</span><span>£{quote.breakdown.basePrice.toFixed(0)}</span></li>
              {quote.breakdown.urgencySurcharge > 0 && (
                <li className="flex justify-between"><span>Urgency</span><span>£{quote.breakdown.urgencySurcharge.toFixed(0)}</span></li>
              )}
              {quote.breakdown.travelFee > 0 && (
                <li className="flex justify-between"><span>Travel</span><span>£{quote.breakdown.travelFee.toFixed(0)}</span></li>
              )}
            </ul>
            <button className="w-full rounded-lg bg-blue-600 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700">
              Continue to Lead Form
            </button>
          </div>
        ) : (
          <div className="mt-6 rounded-xl border border-dashed border-blue-200 bg-white/70 p-5 text-sm text-slate-500">
            Select a service and postcode to generate pricing.
          </div>
        )}
      </aside>
    </div>
  )
}
