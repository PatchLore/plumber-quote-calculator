import { WhatsAppButton } from "@fixblox/ui";
import { siteConfig } from "../../../lib/siteConfig";

const cleanedPhone = siteConfig.phone.replace(/\D/g, "");
const whatsappPhone = cleanedPhone || siteConfig.phone;

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-2xl font-bold">Contact {siteConfig.title}</h1>
      <div className="mt-4 space-y-2 text-slate-300">
        {siteConfig.email && <p>Email: {siteConfig.email}</p>}
        <p>Phone: {siteConfig.phone}</p>
        <p>Address: {siteConfig.address}</p>
        <p>
          Reviews: <a href={siteConfig.checkatradeUrl} className="underline">Checkatrade</a>
        </p>
      </div>

      <div className="mt-6">
        <WhatsAppButton phoneNumber={whatsappPhone} />
      </div>
    </main>
  );
}
