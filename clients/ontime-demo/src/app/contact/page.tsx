"use client";

import { useState } from "react";

import { siteConfig } from "@/lib/siteConfig";

const phoneDigits = siteConfig.phone.replace(/\D/g, "");
const internationalPhone = phoneDigits.startsWith("0")
  ? `+44${phoneDigits.slice(1)}`
  : `+${phoneDigits}`;

const whatsappLink = `https://wa.me/${internationalPhone.replace("+", "")}`;
const telLink = `tel:${internationalPhone}`;
const checkatradeLink = siteConfig.checkatradeUrl;

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Contact form submitted:", form);
    alert("Your message has been sent. We will reply shortly.");
  };

  return (
    <main className="mx-auto max-w-4xl space-y-16 px-6 py-16 text-slate-900">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">Contact {siteConfig.title}</h1>
        <p className="text-lg text-slate-600">
          Whether you need urgent updates, planned changes, or ongoing support, {siteConfig.owner} provides fast, reliable CMS assistance across {siteConfig.address}. Choose the channel that suits you best — we’ll respond quickly with clear next steps.
        </p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm mt-12">
        <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold">Full Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded border px-3 py-2"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Phone Number</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded border px-3 py-2"
              placeholder="07900 000000"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="mt-2 w-full rounded border px-3 py-2"
              placeholder="Optional"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Subject</label>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded border px-3 py-2"
              placeholder="What do you need help with?"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              required
              className="mt-2 w-full rounded border px-3 py-2"
              placeholder="Tell us about your request..."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </section>

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {/* Phone */}
        <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M22 16.92V19a2 2 0 01-2.18 2A19.77 19.77 0 013 5.18 2 2 0 015 3h2.09a2 2 0 012 1.72c.12.81.37 1.6.72 2.33a2 2 0 01-.45 2.23l-.94.94a16 16 0 006.36 6.36l.94-.94a2 2 0 012.23-.45c.73.35 1.52.6 2.33.72A2 2 0 0122 16.92z" />
            </svg>
            <h2 className="text-lg font-semibold">Phone</h2>
          </div>
          <p className="text-slate-600 text-sm">Call for urgent updates or to discuss upcoming work.</p>
          <a href={`tel:${internationalPhone}`} className="font-semibold text-blue-700 hover:text-blue-800">
            {internationalPhone}
          </a>
        </div>

        {/* WhatsApp */}
        <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <svg className="h-6 w-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2A10 10 0 002 12a9.93 9.93 0 001.48 5.28L2 22l4.89-1.43A10 10 0 1012 2zm5.17 14.41c-.23.65-1.34 1.24-2.05 1.4a7.18 7.18 0 01-3.16-.2 11.63 11.63 0 01-1.89-.81A10.43 10.43 0 015.19 13a6.06 6.06 0 01-.8-2.9 3.67 3.67 0 011.14-2.54 1.26 1.26 0 011-.36h.57c.29 0 .46.05.58.18s.44.56.6.8.33.52.49.78.19.34.12.54-1 2.42-1.33 2.92-.67.63-.91.72-.43.07-.6.05a9.44 9.44 0 002.45 1.83 8 8 0 003.6 1.1c.88 0 1.31-.11 1.65-.29s.8-.55 1-.9.36-.67.49-.75.26-.12.43-.07 1.36.65 1.59.77.38.18.44.28.32.59.09 1.24z" />
            </svg>
            <h2 className="text-lg font-semibold">WhatsApp</h2>
          </div>
          <p className="text-slate-600 text-sm">Fast replies 7 days a week.</p>
          <a href={whatsappLink} className="font-semibold text-green-600 hover:text-green-700">
            WhatsApp {siteConfig.owner}
          </a>
        </div>

        {/* Email */}
        <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <svg className="h-6 w-6 text-slate-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 4h16v16H4z" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
            <h2 className="text-lg font-semibold">Email</h2>
          </div>
          <p className="text-slate-600 text-sm">Share project details, assets, or timelines for a tailored response.</p>
          <a href={`mailto:${siteConfig.email}`} className="font-semibold text-blue-700 hover:text-blue-800">
            {siteConfig.email}
          </a>
        </div>
      </section>

      <section className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Service area</h2>
        <p className="mt-3 text-slate-600">
          Based in {siteConfig.address}, {siteConfig.title} supports local businesses with remote collaboration and on-site visits when required.
        </p>
      </section>

      <section className="rounded-2xl bg-slate-900 px-6 py-10 text-white">
        <h2 className="text-2xl font-semibold">Prefer to check our credentials?</h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          Review testimonials and service history to see how {siteConfig.title} keeps websites running smoothly and professionally.
        </p>
        {checkatradeLink ? (
          <a
            href={checkatradeLink}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            View Checkatrade profile
          </a>
        ) : null}
      </section>
    </main>
  );
}

