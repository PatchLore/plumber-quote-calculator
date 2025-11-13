import { siteConfig } from "../lib/siteConfig";

const highlights = [
  {
    title: "Punctual & Reliable",
    desc: "Transparent pricing, tidy work, and clear communication from the first quote to the final handover.",
  },
  {
    title: "Boilers & Heating",
    desc: "High-efficiency installs, diagnostics, and servicing to keep your heating running smoothly.",
  },
  {
    title: "Landlord Safety (CP12)",
    desc: "Gas safety certificates, compliance checks, and reminders for renewal.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">{siteConfig.title} — Your Local Heating Experts</h1>
      <p className="mt-2 text-slate-300">
        Trusted across South East London & Kent for boiler installs, servicing, and emergency repairs — led personally by {siteConfig.owner}.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {highlights.map((item) => (
          <div key={item.title} className="rounded-lg border border-slate-800 p-4">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-slate-300">{item.desc}</p>
          </div>
        ))}
      </div>

      <a
        href={siteConfig.checkatradeUrl}
        className="mt-8 inline-block rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        View Checkatrade Reviews
      </a>
    </main>
  );
}
