import { WhatsAppButton } from "@fixblox/ui";
import { siteConfig } from "@/lib/siteConfig";

const cleanedPhone = siteConfig.phone.replace(/\D/g, "");
const whatsappPhone = cleanedPhone || siteConfig.phone;

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <header>
        <p className="text-sm uppercase tracking-wide text-blue-600">Contact</p>
        <h1 className="mt-2 text-4xl font-bold text-slate-900">Contact {siteConfig.title}</h1>
        <p className="mt-4 text-slate-600">
          {siteConfig.owner} handles every enquiry personally—whether it is a boiler swap, heating upgrade, or emergency repair. Use the details below to book a visit or request a quote.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Contact Options</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {siteConfig.email && (
              <li>
                <strong>Email:</strong> <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
            )}
            <li>
              <strong>Phone:</strong> <span>{siteConfig.phone}</span>
            </li>
            <li>
              <strong>WhatsApp:</strong> <a href={`https://wa.me/${whatsappPhone}`}>{siteConfig.phone}</a>
            </li>
            <li>
              <strong>Address:</strong> <span>{siteConfig.address}</span>
            </li>
            <li>
              <strong>Reviews:</strong> <a href={siteConfig.checkatradeUrl} className="underline">Checkatrade</a>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-6 text-blue-900">
          <h2 className="text-xl font-semibold">Verified on Checkatrade</h2>
          <p className="mt-3 text-sm">
            View verified reviews and workmanship photos on the OnTime CMS Checkatrade profile. Every project is managed by {siteConfig.owner}, ensuring honest advice and neat finishes.
          </p>
        </div>
      </section>

      <WhatsAppButton phoneNumber={whatsappPhone} />
    </main>
  );
}
