"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Contact form submitted:", form);
    alert("Your message has been sent. We will reply shortly.");
  };

  return (
    <main className="mx-auto max-w-4xl space-y-16 px-4 py-16 text-slate-900 sm:px-6">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">Contact {siteConfig.title}</h1>
        <p className="text-lg text-slate-600">
          Whether you need urgent updates, planned changes, or ongoing support, {siteConfig.owner} provides fast, reliable
          assistance across {siteConfig.address}. Choose the channel that suits you best — we’ll respond quickly with clear
          next steps.
        </p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
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

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              📞
            </span>
            <h2 className="text-lg font-semibold">Phone</h2>
          </div>
          <p className="text-slate-600 text-sm">Call for urgent updates or to discuss upcoming work.</p>
          <a href={telLink} className="font-semibold text-blue-700 hover:text-blue-800">
            {internationalPhone}
          </a>
        </div>

        <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
              💬
            </span>
            <h2 className="text-lg font-semibold">WhatsApp</h2>
          </div>
          <p className="text-slate-600 text-sm">Fast replies 7 days a week.</p>
          <a
            href={whatsappLink}
            className="inline-block rounded-full bg-green-500 px-4 py-2 font-semibold text-white shadow-sm transition hover:bg-green-600"
          >
            Message on WhatsApp
          </a>
        </div>

        <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-slate-900">
              ✉️
            </span>
            <h2 className="text-lg font-semibold">Email</h2>
          </div>
          <p className="text-slate-600 text-sm">Share project details, assets, or timelines for a tailored response.</p>
          {siteConfig.email ? (
            <a href={`mailto:${siteConfig.email}`} className="font-semibold text-blue-700 hover:text-blue-800">
              {siteConfig.email}
            </a>
          ) : (
            <span className="text-sm text-slate-500">Email unavailable</span>
          )}
        </div>
      </section>

      <section className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Service area</h2>
        <p className="mt-3 text-slate-600">
          Based in {siteConfig.address}, {siteConfig.title} supports local businesses with remote collaboration and on-site
          visits when required.
        </p>
      </section>

      <section className="rounded-2xl bg-slate-900 px-6 py-10 text-white">
        <h2 className="text-2xl font-semibold">Prefer to check our credentials?</h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          Review testimonials and service history to see how {siteConfig.title} keeps websites running smoothly and
          professionally.
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

