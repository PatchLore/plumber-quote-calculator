import React from 'react'

export type GeneratedSite = {
  business_name: string
  short_tagline: string
  services: string[]
  about_section: string
  pricing: string
  location: string
  contact_preferences: string
  ideal_colour_palette: string[]
  design_style: string
  CTA_text: string
  section_order: string[]
}

type GeneratedSitePreviewProps = {
  data: GeneratedSite
}

function getPaletteClasses(palette: string[] | undefined) {
  // Very simple mapping of colour words to Tailwind utility classes
  const base = (palette?.[0] || '').toLowerCase()

  if (base.includes('blue')) {
    return {
      bg: 'from-sky-900 to-sky-700',
      accent: 'text-sky-400',
      button: 'bg-sky-500 hover:bg-sky-600',
      chip: 'bg-sky-900/40 border-sky-500/40',
    }
  }
  if (base.includes('green')) {
    return {
      bg: 'from-emerald-900 to-emerald-700',
      accent: 'text-emerald-400',
      button: 'bg-emerald-500 hover:bg-emerald-600',
      chip: 'bg-emerald-900/40 border-emerald-500/40',
    }
  }
  if (base.includes('red')) {
    return {
      bg: 'from-rose-900 to-rose-700',
      accent: 'text-rose-400',
      button: 'bg-rose-500 hover:bg-rose-600',
      chip: 'bg-rose-900/40 border-rose-500/40',
    }
  }

  // Fallback: FixBlox brand-ish
  return {
    bg: 'from-slate-950 via-slate-900 to-slate-800',
    accent: 'text-sky-400',
    button: 'bg-sky-500 hover:bg-sky-600',
    chip: 'bg-slate-900/60 border-sky-500/30',
  }
}

export function GeneratedSitePreview({ data }: GeneratedSitePreviewProps) {
  const palette = getPaletteClasses(data.ideal_colour_palette)

  const sectionsInOrder =
    data.section_order && data.section_order.length > 0
      ? data.section_order
      : ['hero', 'services', 'about', 'pricing', 'contact']

  const hasServices = Array.isArray(data.services) && data.services.length > 0

  const Section = {
    hero: (
      <section
        key="hero"
        className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${palette.bg} text-white px-6 py-12 sm:px-10 sm:py-16 shadow-lg`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_55%)]" />
        <div className="relative z-10 space-y-6 max-w-3xl">
          <p className={`text-sm font-semibold tracking-wide uppercase ${palette.accent}`}>
            {data.location || 'Local trade business'}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            {data.business_name || 'Your Trade Business Name'}
          </h1>
          <p className="text-base sm:text-lg text-slate-100/90">
            {data.short_tagline ||
              'Professional services delivered with care, reliability and transparent pricing.'}
          </p>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/10 px-4 py-1 text-xs sm:text-sm text-slate-50/90 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {data.design_style ? `${data.design_style} design` : 'Clean, modern design preview'}
          </p>
          {hasServices && (
            <div className="flex flex-wrap gap-2 pt-2">
              {data.services.slice(0, 4).map((service) => (
                <span
                  key={service}
                  className={`inline-flex items-center rounded-full border px-3 py-1 text-xs sm:text-sm ${palette.chip}`}
                >
                  {service}
                </span>
              ))}
            </div>
          )}
          <div className="flex flex-wrap gap-3 pt-4">
            <button
              type="button"
              className={`inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-md transition ${palette.button}`}
            >
              {data.CTA_text || 'Request a Quote'}
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-semibold text-slate-50/90 backdrop-blur hover:bg-white/10"
            >
              View Services
            </button>
          </div>
        </div>
      </section>
    ),

    services: (
      <section key="services" className="rounded-3xl bg-white px-6 py-10 sm:px-10 sm:py-12 shadow-sm">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Services we provide
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Clear, straightforward work with honest pricing and tidy workmanship.
            </p>
          </div>
          {data.pricing && (
            <div className="rounded-2xl bg-slate-900 px-4 py-3 text-sm text-slate-100 shadow-sm">
              <p className="font-semibold">Pricing overview</p>
              <p className="text-slate-300 mt-1">{data.pricing}</p>
            </div>
          )}
        </div>

        {hasServices ? (
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {data.services.map((service) => (
              <div
                key={service}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/60 p-5 transition hover:-translate-y-0.5 hover:border-sky-200 hover:bg-white hover:shadow-md"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/0 via-sky-500/0 to-sky-500/5 opacity-0 transition group-hover:opacity-100" />
                <h3 className="relative z-10 text-base sm:text-lg font-semibold text-slate-900">
                  {service}
                </h3>
                <p className="relative z-10 mt-1 text-sm text-slate-600">
                  Tailored to {data.location || 'your local area'} with fast communication and
                  reliable time windows.
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-6 text-sm text-slate-500">
            Services will appear here once described in your audio recording.
          </p>
        )}
      </section>
    ),

    about: (
      <section key="about" className="rounded-3xl bg-slate-50 px-6 py-10 sm:px-10 sm:py-12">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              About {data.business_name || 'our business'}
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-700 whitespace-pre-line">
              {data.about_section ||
                'We specialise in high-quality work, clear communication and a tidy finish on every job.'}
            </p>
          </div>
          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-100 text-xs font-semibold text-sky-700">
                1
              </span>
              <div>
                <p className="font-semibold text-slate-900">Location focused</p>
                <p className="text-slate-600">
                  Serving {data.location || 'your local area'} with flexible appointments and
                  responsive communication.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-100 text-xs font-semibold text-sky-700">
                2
              </span>
              <div>
                <p className="font-semibold text-slate-900">How to contact us</p>
                <p className="text-slate-600">
                  {data.contact_preferences ||
                    'Call, text or email — whatever is easiest for you. We aim to respond within one working day.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    ),

    pricing: (
      <section key="pricing" className="rounded-3xl bg-slate-950 px-6 py-10 sm:px-10 sm:py-12">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Simple, transparent pricing
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              No surprises. Clear quotes before work starts, and honest advice on the best approach
              for your job.
            </p>
            {data.pricing && (
              <p className="mt-4 rounded-xl bg-slate-900/60 px-4 py-3 text-sm text-slate-100">
                {data.pricing}
              </p>
            )}
          </div>
          <div className="space-y-3 rounded-2xl bg-slate-900 px-5 py-4 text-sm text-slate-100 shadow">
            <p className="font-semibold">Typical next steps</p>
            <ul className="mt-1 space-y-1 text-slate-300">
              <li>• Share a few details about the job</li>
              <li>• Receive an estimated price range</li>
              <li>• Confirm a time that works for you</li>
            </ul>
          </div>
        </div>
      </section>
    ),

    contact: (
      <section key="contact" className="rounded-3xl bg-white px-6 py-10 sm:px-10 sm:py-12 shadow-sm">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              {data.CTA_text || 'Ready to get started?'}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Tell us a little about the work you need doing and how you prefer to be contacted. We
              use this section to customise your enquiry form on the final site.
            </p>
            <p className="mt-3 text-xs text-slate-500">
              Contact preferences from audio:{' '}
              <span className="font-medium text-slate-700">
                {data.contact_preferences || 'not specified yet'}
              </span>
            </p>
          </div>
          <form
            className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-700"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-sky-500/30 focus:border-sky-400 focus:ring-2"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Best contact
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-sky-500/30 focus:border-sky-400 focus:ring-2"
                  placeholder="Phone, email or WhatsApp"
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-600">
                Job details
              </label>
              <textarea
                rows={3}
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-sky-500/30 focus:border-sky-400 focus:ring-2"
                placeholder="Tell us briefly what you need help with..."
              />
            </div>
            <button
              type="submit"
              className={`mt-1 inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold text-white shadow-sm ${palette.button}`}
            >
              {data.CTA_text || 'Send enquiry'}
            </button>
          </form>
        </div>
      </section>
    ),
  } as const

  return (
    <div className="space-y-6">
      {sectionsInOrder.map((key) => {
        const sectionKey = key.toLowerCase()
        if (sectionKey in Section) {
          // @ts-expect-error - indexed access based on validated section_order
          return Section[sectionKey]
        }
        return null
      })}
    </div>
  )
}


