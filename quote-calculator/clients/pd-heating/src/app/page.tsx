const clientName = process.env.NEXT_PUBLIC_CLIENT_NAME || "PD Heating & Gas Services";
const clientEmail = process.env.NEXT_PUBLIC_CLIENT_EMAIL || "hello@pdheating.uk";

const highlights = [
  "Gas Safe boiler installs with manufacturer warranties",
  "Emergency call-outs within 2 hours",
  "Annual servicing reminders & maintenance plans",
  "Lead capture synced to QuoteFlow + Supabase",
];

export default function MarketingHome() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[#EEF2FF] via-white to-[#E0F7FF] py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center">
          <span className="rounded-full bg-white/80 px-4 py-1 text-sm font-semibold text-blue-600 shadow-sm">
            QuoteFlow by FixBlox
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            {clientName}: Book more jobs with AI-powered quotes
          </h1>
          <p className="max-w-3xl text-lg text-slate-600">
            Give customers a 30-second quote experience and convert enquiries instantly. This
            template ships with QuoteFlow automation, pricing logic, and WhatsApp comms ready to
            customise.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/marketing/quoteflow"
              className="rounded-full bg-blue-600 px-6 py-3 text-white shadow-lg transition hover:bg-blue-700"
            >
              Try QuoteFlow Demo
            </a>
            <a
              href="/marketing/services"
              className="rounded-full border border-blue-200 px-6 py-3 text-blue-700 transition hover:border-blue-400"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold text-slate-900">Why tradies love QuoteFlow</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-slate-900">{item}</h3>
              <p className="mt-2 text-sm text-slate-600">
                Plug-and-play content that you can customise per trade, including service breakdowns
                and CTA blocks that sync with QuoteFlow leads.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-semibold">Need this live for your trade in 48 hours?</h2>
          <p className="mt-4 text-slate-300">
            Duplicate the template, drop in branding, update pricing in QuoteFlow core, and deploy
            to Vercel with one command.
          </p>
          <a
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-200"
            href={`mailto:${clientEmail}`}
          >
            Request Onboarding Pack
          </a>
        </div>
      </section>
    </main>
  );
}
