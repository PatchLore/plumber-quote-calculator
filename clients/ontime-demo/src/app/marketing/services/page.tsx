const services = [
  {
    title: "Website Content Updates",
    description: "New pages, case studies, and seasonal promos published fast with clean formatting and QA.",
  },
  {
    title: "Landing Page Production",
    description: "Conversion-focused landing pages built with tracking, forms, and automation hooks.",
  },
  {
    title: "Technical CMS Support",
    description: "Plugin maintenance, uptime monitoring, and fixes handled proactively.",
  },
  {
    title: "SEO Housekeeping",
    description: "Schema, metadata, and structured content updates aligned with your marketing roadmap.",
  },
  {
    title: "Analytics & Tracking",
    description: "GA4, pixels, and tag manager configuration so every lead source is accounted for.",
  },
  {
    title: "Campaign Collateral",
    description: "Email templates, blog posts, and asset updates to support your in-flight campaigns.",
  },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900">OnTime CMS Services</h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          From routine updates to campaign launches, OnTime CMS runs your website so you can stay focused on operations.
          Pick a service below or build a retainer around the outcomes you need.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">{service.title}</h2>
            <p className="mt-3 text-sm text-slate-600">{service.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
