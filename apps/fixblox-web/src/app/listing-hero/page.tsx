export default function ListingHeroPage() {
  const whatsappHref = "https://wa.me/447925990923";

  return (
    <main className="bg-white text-slate-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0066FF] to-[#00D9FF]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Make Your Property Listings Look £50k More Expensive — In 24 Hours
            </h1>
            <p className="mt-5 text-lg text-white/90 sm:text-xl">
              Professional photo polish for estate agents. Faster sales. Better enquiries.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-[#0066FF] shadow-sm transition hover:bg-white/95"
              >
                WhatsApp us
              </a>
              <div className="text-sm text-white/80">
                24-hour turnaround • Portal-ready edits
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#0A0E27] sm:text-4xl">
              Before / After
            </h2>
            <p className="mt-3 text-base text-slate-600 sm:text-lg">
              (Placeholder images — replace with real examples)
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-200">
                {/* TODO: Replace with real BEFORE image */}
                <div className="flex h-full w-full items-center justify-center text-sm font-medium text-slate-600">
                  BEFORE (replace image)
                </div>
              </div>
              <div className="mt-4 text-center text-sm font-semibold text-slate-700">Before</div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-200">
                {/* TODO: Replace with real AFTER image */}
                <div className="flex h-full w-full items-center justify-center text-sm font-medium text-slate-600">
                  AFTER (replace image)
                </div>
              </div>
              <div className="mt-4 text-center text-sm font-semibold text-slate-700">After</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Improve */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#0A0E27] sm:text-4xl">
              What We Improve
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Exposure & colour", desc: "Balanced, bright, clean and consistent." },
              { title: "Sky replacement (blue / dusk)", desc: "Professional skies that lift the whole listing." },
              { title: "Window pull-through", desc: "Clearer interiors with natural-looking windows." },
              { title: "Portal-ready images", desc: "Optimised, aligned, and ready to upload." },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="inline-flex items-center rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D9FF] px-3 py-1 text-xs font-semibold text-white">
                  Included
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#0A0E27]">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#0A0E27] sm:text-4xl">
              How It Works
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { n: "1", title: "Upload photos (Drive / WhatsApp)", desc: "Send your listing photos over in minutes." },
              { n: "2", title: "We edit within 24 hours", desc: "Fast turnaround, consistent results." },
              { n: "3", title: "You upload to Rightmove / Zoopla", desc: "Post polished images and win better enquiries." },
            ].map((step) => (
              <div key={step.n} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#0066FF] to-[#00D9FF] text-base font-extrabold text-white">
                    {step.n}
                  </div>
                  <h3 className="text-lg font-bold text-[#0A0E27]">{step.title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#0A0E27] sm:text-4xl">
              Pricing
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="text-center">
              <div className="text-sm font-semibold text-slate-600">Per listing</div>
              <div className="mt-2 text-5xl font-extrabold tracking-tight text-[#0A0E27]">£49</div>
              <div className="mt-3 text-sm text-slate-600">One-time payment</div>
              <div className="mt-1 text-sm text-slate-600">No contracts</div>
            </div>

            <div className="mt-8">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#0066FF] to-[#00D9FF] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:opacity-95"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#0A0E27] sm:text-4xl">
              Ready to upgrade your next listing?
            </h2>
            <p className="mt-3 text-base text-slate-600 sm:text-lg">
              Message us on WhatsApp and send your photos — we’ll take it from there.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-xl">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-[#0066FF] shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50"
            >
              WhatsApp us
            </a>
          </div>

          {/* Optional: simple contact form placeholder if you want it on-page (no backend) */}
          <div className="mx-auto mt-6 max-w-xl rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="text-sm font-semibold text-slate-700">Contact form (placeholder)</div>
            <div className="mt-2 text-sm text-slate-600">
              If you want a form here, we can wire it to your existing contact flow (or a simple mail provider)
              without changing your backend.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
