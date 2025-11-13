import { siteConfig } from "@/lib/siteConfig";

const phoneDigits = siteConfig.phone.replace(/\D/g, "");
const internationalPhone = phoneDigits.startsWith("0")
  ? `+44${phoneDigits.slice(1)}`
  : `+${phoneDigits}`;

const whatsappLink = `https://wa.me/${internationalPhone.replace("+", "")}`;
const telLink = `tel:${internationalPhone}`;

const checkatradeLink = siteConfig.checkatradeUrl;
const services = [
  {
    title: "Gas Boiler Installation",
    description:
      "Efficient installation of modern, energy-saving gas boilers complete with full system configuration, safety checks, and optimal performance setup.",
  },
  {
    title: "Gas Central Heating Installation",
    description:
      "Professional installation of full central heating systems, radiators, pipework and smart control integration, ensuring comfort and reliability.",
  },
  {
    title: "Gas Safety Checks (CP12)",
    description:
      "Certified CP12 inspections for landlords and homeowners, covering compliance, safety verification, and transparent reporting.",
  },
  {
    title: "Gas Boiler Servicing & Repair",
    description:
      "Annual servicing, diagnostics, and professional repair work to maintain safety, efficiency, and long-term reliability of your boiler system.",
  },
  {
    title: "Smart Thermostat Installation",
    description:
      "Expert setup and integration of Hive, Nest, Tado and other smart heating systems for intelligent control and improved energy efficiency.",
  },
  {
    title: "Emergency Central Heating Repair",
    description:
      "Fast-response call-out service for breakdowns, leaks, pressure loss and system failures. Urgent support when you need it most.",
  },
  {
    title: "Gas Central Heating Servicing / Repair",
    description:
      "Comprehensive servicing and repair of all heating systems. Gas registered engineers delivering safe, compliant, long-lasting results.",
  },
  {
    title: "General Plumbing",
    description:
      "Dependable plumbing work covering taps, pipes, leaks, installations and day-to-day household issues resolved quickly and professionally.",
  },
  {
    title: "Power Flushing",
    description:
      "High-pressure cleaning of heating systems to remove sludge buildup, improve circulation, and restore heating efficiency.",
  },
  {
    title: "Underfloor Heating Services",
    description:
      "Installation, servicing and repair of underfloor heating systems, ensuring even heat distribution and year-round comfort.",
  },
  {
    title: "Hot Water Cylinders",
    description:
      "Repair, installation and maintenance of vented and unvented cylinders with full compliance and safe operation guaranteed.",
  },
  {
    title: "Radiator Installation",
    description:
      "Professional fitting, balancing and replacement of radiators to enhance heating performance and energy efficiency.",
  },
  {
    title: "Leak Diagnostics & Repair",
    description:
      "Accurate leak detection and repair using non-destructive techniques to prevent water damage and maintain system integrity.",
  },
  {
    title: "Water Softeners",
    description:
      "Installation, servicing and maintenance of water softening systems designed to protect your plumbing, improve appliance longevity, and reduce limescale throughout your property.",
  },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-5xl space-y-16 px-4 py-16 text-slate-900 sm:px-6">
      <section className="space-y-6 text-center">
        <h1 className="text-4xl font-bold">{siteConfig.title} Services</h1>
        <p className="mx-auto max-w-3xl text-lg text-slate-600">
          Professional website support delivered by {siteConfig.owner}, covering {siteConfig.address} and surrounding
          areas. Flexible services tailored to keep your online presence fast, current, and dependable.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={telLink}
            className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Call {siteConfig.owner}
          </a>
          <a
            href={whatsappLink}
            className="rounded-full border border-blue-200 px-6 py-3 font-semibold text-blue-700 transition hover:border-blue-400"
          >
            WhatsApp {siteConfig.owner}
          </a>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-xl border border-blue-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold">{service.title}</h2>
            <p className="mt-3 text-sm text-slate-600">{service.description}</p>
          </div>
        ))}
      </section>

      <section className="rounded-2xl bg-slate-900 px-6 py-10 text-white">
        <h2 className="text-2xl font-semibold">Need something specific?</h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          {siteConfig.title} offers tailored retainers, one-off projects, and urgent support to keep your digital experience
          consistent. Every engagement includes clear communication, fast turnaround, and dependable quality.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="/quote"
            className="rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            Request a Quote
          </a>
          {checkatradeLink ? (
            <a
              href={checkatradeLink}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View Checkatrade profile
            </a>
          ) : null}
        </div>
      </section>
    </main>
  );
}

