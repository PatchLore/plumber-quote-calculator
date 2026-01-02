import { siteConfig } from "../lib/siteConfig";

const highlights = [
  {
    title: "Fast response",
    description: `Immediate support from ${siteConfig.owner} and the OnTime team when you need it most.`,
    icon: "⚡",
  },
  {
    title: "Reliable service",
    description: `${siteConfig.title} delivers consistent, professional workmanship across every project.`,
    icon: "🛠",
  },
  {
    title: "Trusted locally",
    description: `Serving ${siteConfig.address} and nearby communities with dependable solutions.`,
    icon: "📍",
  },
  {
    title: "Clear communication",
    description: `Stay informed with transparent updates and direct access to ${siteConfig.owner}.`,
    icon: "💬",
  },
];

const phoneDigits = siteConfig.phone.replace(/\D/g, "");
const internationalPhone = phoneDigits.startsWith("0") ? `+44${phoneDigits.slice(1)}` : `+${phoneDigits}`;
const whatsappPhone = internationalPhone.replace("+", "");

export default function MarketingHome() {
  return (
    <main className="bg-slate-950/5">
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-28 text-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/3 top-10 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>
          <div className="absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl"></div>
        </div>
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center md:items-start md:text-left">
          <span className="rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-blue-200 shadow-sm backdrop-blur">
            Managed CMS & Heating Specialists
          </span>
          <h1 className="text-5xl font-bold leading-tight drop-shadow-xl md:text-6xl">
            OnTime CMS — Heating & Gas Services You Can Trust
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-200 md:text-xl">
            Professional, punctual and reliable service by <strong>{siteConfig.owner}</strong>. Covering{" "}
            <strong>{siteConfig.address}</strong> and surrounding areas with clear communication, tidy workmanship and
            safety-first expertise.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-blue-200">
            <span className="rounded-full bg-white/10 px-3 py-1">✔ Gas Safe Registered</span>
            <span className="rounded-full bg-white/10 px-3 py-1">✔ Local Expert</span>
            <span className="rounded-full bg-white/10 px-3 py-1">✔ Fast Response</span>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-xl shadow-blue-900/40 transition hover:bg-blue-500"
            >
              📞 Contact {siteConfig.title}
            </a>
            <a
              href={`https://wa.me/${whatsappPhone}`}
              className="rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-blue-200 backdrop-blur-md transition hover:bg-white/20"
            >
              💬 WhatsApp {siteConfig.owner}
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto h-0.5 w-2/3 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent mt-16 mb-10 animate-pulse"></div>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mt-20 text-center text-4xl font-bold text-slate-900 md:text-5xl">
          Why Choose {siteConfig.title}?
        </h2>
        <div className="grid gap-8 py-10 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl shadow-md shadow-black/30 transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 hover:bg-slate-900/80 hover:border-blue-500/40"
            >
              <div className="mb-4 text-3xl">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold">Ready to get started?</h2>
          <p className="mt-6 text-lg text-slate-300">
            Contact {siteConfig.title} today – fast response, clear communication, and quality you can depend on.
          </p>
          <a
            className="mt-10 inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-xl shadow-blue-900/40 transition hover:bg-blue-500"
            href="/quote"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </main>
  );
}
