const services = [
  {
    name: "Boiler Installation",
    summary: "Supply and fit with manufacturer warranties and QuoteFlow pricing rules.",
  },
  {
    name: "Emergency Repairs",
    summary: "24/7 call-outs with automated urgency surcharges baked into QuoteFlow.",
  },
  {
    name: "Annual Servicing",
    summary: "Recurring revenue workflows, reminders, and Supabase lead tracking.",
  },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900">Services Overview</h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          Swap these placeholders with trade-specific copy. Service cards display pricing and CTA
          links that can point to QuoteFlow or WhatsApp contact flows.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">{service.name}</h2>
            <p className="mt-3 text-sm text-slate-600">{service.summary}</p>
            <a
              href="/marketing/quoteflow"
              className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600"
            >
              Get Instant Quote →
            </a>
          </article>
        ))}
      </div>
    </main>
  );
}
