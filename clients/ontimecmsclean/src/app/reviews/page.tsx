import { siteConfig } from "@/lib/siteConfig";

const phoneDigits = siteConfig.phone.replace(/\D/g, "");
const internationalPhone = phoneDigits.startsWith("0")
  ? `+44${phoneDigits.slice(1)}`
  : `+${phoneDigits}`;

const whatsappLink = `https://wa.me/${internationalPhone.replace("+", "")}`;
const checkatradeLink = siteConfig.checkatradeUrl;

const testimonials = [
  {
    author: "Local business owner",
    quote:
      "OnTime CMS keep our promotions live and on-brand week after week. Communication is fast and everything just gets handled.",
  },
  {
    author: "Home services team",
    quote:
      "Kemal is proactive and reliable. He spots issues before they become problems and keeps our site performing at its best.",
  },
  {
    author: "Campaign manager",
    quote:
      "From landing pages to analytics tracking, OnTime CMS makes launches straightforward with clear updates and quality work.",
  },
];

export default function ReviewsPage() {
  return (
    <main className="mx-auto max-w-5xl space-y-16 px-4 py-16 text-slate-900 sm:px-6">
      <section className="space-y-6 text-center">
        <h1 className="text-4xl font-bold">{siteConfig.title} Reviews</h1>
        <p className="mx-auto max-w-3xl text-lg text-slate-600">
          Clients across {siteConfig.address} choose {siteConfig.title} for dependable, well-communicated website support.
          Every project is led by {siteConfig.owner} to keep your digital presence running smoothly.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={checkatradeLink ?? "#"}
            className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Read Checkatrade Feedback
          </a>
          <a
            href={whatsappLink}
            className="rounded-full border border-blue-200 px-6 py-3 font-semibold text-blue-700 transition hover:border-blue-400"
          >
            WhatsApp {siteConfig.owner}
          </a>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <figure
            key={item.author}
            className="flex flex-col justify-between rounded-xl border border-blue-200 bg-white p-6 shadow-sm"
          >
            <blockquote className="text-sm text-slate-600">“{item.quote}”</blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-slate-900">{item.author}</figcaption>
          </figure>
        ))}
      </section>

      <section className="rounded-2xl bg-slate-900 px-6 py-10 text-white">
        <h2 className="text-2xl font-semibold">Ready to experience the same service?</h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          {siteConfig.title} provides clear communication, fast responses, and quality execution for every update or campaign.
          Get in touch to plan your next project.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-200"
        >
          Request a Quote
        </a>
      </section>
    </main>
  );
}

