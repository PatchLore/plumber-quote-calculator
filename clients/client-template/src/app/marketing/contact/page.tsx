import { WhatsAppButton } from "@fixblox/ui";

const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+447000000000";
const email = process.env.NEXT_PUBLIC_CLIENT_EMAIL || "contact@example.com";

export default function ContactPage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-16">
      <header>
        <p className="text-sm uppercase tracking-wide text-blue-600">Contact</p>
        <h1 className="mt-2 text-4xl font-bold text-slate-900">Book a job in minutes</h1>
        <p className="mt-4 text-slate-600">
          Leads from QuoteFlow land directly in Supabase and send alerts via email + WhatsApp.
          Replace the copy below with trade-specific FAQs.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Contact Options</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>
              <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
            </li>
            <li>
              <strong>WhatsApp:</strong> <a href={`https://wa.me/${phone}`}>{phone}</a>
            </li>
            <li>
              <strong>Phone:</strong> 0800 000 0000 (replace with client number)
            </li>
            <li>
              <strong>Hours:</strong> Mon–Sun, 7am–7pm
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-dashed border-blue-200 bg-blue-50/60 p-6 text-blue-900">
          <h2 className="text-xl font-semibold">Pro tip</h2>
          <p className="mt-3 text-sm">
            Use Supabase edge functions to send confirmations, and connect Chatbase or other bots
            for automated FAQs. The template surface keeps embed scripts isolated in layout.
          </p>
        </div>
      </section>

      <WhatsAppButton phoneNumber={phone} />
    </main>
  );
}
