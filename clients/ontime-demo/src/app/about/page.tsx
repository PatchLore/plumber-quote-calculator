import { FaCheckCircle, FaPhone, FaTools, FaWhatsapp } from "react-icons/fa";

import { siteConfig } from "@/lib/siteConfig";

const numericPhone = siteConfig.phone.replace(/\D/g, "");
const internationalPhone = numericPhone.startsWith("0") ? `44${numericPhone.slice(1)}` : numericPhone;

export default function AboutPage() {
  return (
    <main className="text-slate-900">
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl space-y-6 px-6">
          <h1 className="text-4xl font-bold">OnTime CMS — About Us</h1>
          <p className="text-lg text-slate-600">
            We’re committed to offering the highest quality plumbing and heating services at affordable prices. With
            experience, reliability and a customer-focused approach, we deliver exceptional workmanship with punctuality,
            transparency, and safety-first standards.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-6 px-6 py-16">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <FaTools className="text-blue-600" /> Our Approach
        </h2>
        <p className="text-slate-600">
          At OnTime CMS, we pride ourselves on delivering exceptional service to every client—no matter the size or
          urgency of the job. We guarantee dependable results with a friendly, approachable team who value long-term
          relationships. Many of our clients return year after year because they appreciate our personal, reliable and
          transparent service.
        </p>
      </section>

      <section className="mx-auto mb-16 max-w-4xl space-y-6 px-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <FaCheckCircle className="text-blue-600" /> What We Offer
        </h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-4 text-slate-700 md:grid-cols-2">
          <span>✅ 24-Hour call out</span>
          <span>✅ Boiler breakdown</span>
          <span>✅ Landlord gas safety certificate</span>
          <span>✅ Boiler installation</span>
          <span>✅ Boiler servicing</span>
          <span>✅ General plumbing</span>
          <span>✅ Power flushing</span>
          <span>✅ Water softeners</span>
          <span>✅ Underfloor heating services</span>
          <span>✅ Radiator installation</span>
          <span>✅ Unvented systems</span>
          <span>✅ Hot water cylinders</span>
          <span>✅ Leak diagnostics &amp; repair</span>
          <span>✅ Dripping taps</span>
        </div>
      </section>

      <section className="bg-slate-900 py-14 text-white">
        <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
          <h2 className="text-2xl font-semibold">Ready to speak with an engineer?</h2>
          <p className="text-slate-300">
            Contact {siteConfig.owner} today for fast response, clear communication, and reliable professional service
            covering {siteConfig.address} and surrounding areas.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${numericPhone}`}
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              <FaPhone /> Call {siteConfig.owner}
            </a>
            <a
              href={`https://wa.me/${internationalPhone}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              <FaWhatsapp /> WhatsApp {siteConfig.owner}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

