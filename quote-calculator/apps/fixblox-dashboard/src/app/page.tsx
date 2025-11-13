import Link from "next/link";

const cards = [
  {
    title: "Client Overview",
    description: "View active clients, subscription status, and deployment health.",
    href: "/clients",
  },
  {
    title: "QuoteFlow Engine",
    description: "Monitor AI quote generation performance and pricing models.",
    href: "/quoteflow",
  },
  {
    title: "Supabase",
    description: "Manage multi-tenant data access, RLS policies, and migrations.",
    href: "/supabase",
  },
] as const;

export default function DashboardLanding() {
  return (
    <main className="max-w-5xl mx-auto py-16 px-6">
      <header className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight">FixBlox Operations Dashboard</h1>
        <p className="text-slate-300 mt-3 max-w-2xl">
          Centralise client onboarding, QuoteFlow automation, and deployment workflows in a
          single control centre. This workspace is the starting point for the admin dashboard
          build-out.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.href as any}
            className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/10"
          >
            <h2 className="text-xl font-semibold text-white">{card.title}</h2>
            <p className="mt-2 text-sm text-slate-300">{card.description}</p>
            <span className="mt-4 inline-block text-sm text-blue-400">Coming soon →</span>
          </Link>
        ))}
      </section>
    </main>
  );
}
