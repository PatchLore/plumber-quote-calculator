import { WhatsAppButton } from "@fixblox/ui";
import { siteConfig } from "../../../lib/siteConfig";

const phoneDigits = siteConfig.phone.replace(/\D/g, "");
const internationalPhone = phoneDigits.startsWith("0") ? `+44${phoneDigits.slice(1)}` : `+${phoneDigits}`;
const whatsappNumber = internationalPhone.replace("+", "");

export default function ContactPage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-16">
      <header>
        <p className="text-sm uppercase tracking-wide text-blue-600">Contact</p>
        <h1 className="mt-2 text-4xl font-bold text-slate-900">Partner with {siteConfig.title}</h1>
        <p className="mt-4 text-slate-600">
          Kemal Mustafa personally oversees every engagement. Share your website priorities and we’ll map out the first
          sprint together.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Contact Options</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>
              <strong>Email:</strong> <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li>
              <strong>Phone:</strong> <a href={`tel:${internationalPhone}`}>{siteConfig.phone}</a>
            </li>
            <li>
              <strong>WhatsApp:</strong> <a href={`https://wa.me/${whatsappNumber}`}>{siteConfig.phone}</a>
            </li>
            <li>
              <strong>Address:</strong> <span>{siteConfig.address}</span>
            </li>
            <li>
              <strong>Checkatrade:</strong>{" "}
              <a href={siteConfig.checkatrade} className="underline">
                View profile
              </a>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-6 text-blue-900">
          <h2 className="text-xl font-semibold">What’s included</h2>
          <p className="mt-3 text-sm">
            Monthly updates, landing pages, tracking fixes, and proactive optimisation. OnTime CMS keeps your site
            current without adding to your to-do list.
          </p>
        </div>
      </section>

      <WhatsAppButton phoneNumber={internationalPhone} />
    </main>
  );
}
