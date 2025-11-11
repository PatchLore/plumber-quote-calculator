"use client";

import { useState } from "react";

import { siteConfig } from "@/lib/siteConfig";

export default function QuotePage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    property: "",
    details: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("QuoteFlow form submitted:", form);
    alert("Your quote request was received. We will contact you shortly!");
  };

  const phoneDigits = siteConfig.phone.replace(/\D/g, "");
  const internationalPhone = phoneDigits.startsWith("0") ? `+44${phoneDigits.slice(1)}` : `+${phoneDigits}`;
  const whatsappLink = `https://wa.me/${internationalPhone.replace("+", "")}`;

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 text-slate-900">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Get a Quote from {siteConfig.title}</h1>
        <p className="text-lg text-slate-600">Quick, accurate quotes with fast response times from {siteConfig.owner}.</p>
      </section>

      <form
        onSubmit={handleSubmit}
        className="mt-12 rounded-xl border border-slate-200 bg-white p-8 shadow-sm space-y-6"
      >
        <div>
          <label className="block text-sm font-semibold">Full Name</label>
          <input
            name="name"
            onChange={handleChange}
            value={form.name}
            className="mt-2 w-full rounded border px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">Phone Number</label>
          <input
            name="phone"
            onChange={handleChange}
            value={form.phone}
            className="mt-2 w-full rounded border px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">Email (optional)</label>
          <input
            name="email"
            onChange={handleChange}
            value={form.email}
            className="mt-2 w-full rounded border px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">Service Type</label>
          <select
            name="service"
            onChange={handleChange}
            value={form.service}
            className="mt-2 w-full rounded border px-3 py-2"
            required
          >
            <option value="">Select a service</option>
            <option>Gas Boiler Installation</option>
            <option>Central Heating Repair</option>
            <option>Gas Safety CP12</option>
            <option>Boiler Servicing</option>
            <option>Emergency Heating Repair</option>
            <option>Smart Thermostats</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold">Property Type</label>
          <select
            name="property"
            onChange={handleChange}
            value={form.property}
            className="mt-2 w-full rounded border px-3 py-2"
            required
          >
            <option value="">Select</option>
            <option>House</option>
            <option>Flat</option>
            <option>Commercial</option>
            <option>Landlord / Multi-property</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold">Describe the Issue</label>
          <textarea
            name="details"
            onChange={handleChange}
            value={form.details}
            className="mt-2 w-full rounded border px-3 py-2"
            rows={4}
          />
        </div>

        <button type="submit" className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
          Submit Quote Request
        </button>
      </form>

      <section className="mt-10 flex flex-col md:flex-row justify-center gap-4">
        <a
          href={whatsappLink}
          className="rounded-full border border-green-500 px-6 py-3 font-semibold text-green-700 hover:bg-green-50"
        >
          WhatsApp {siteConfig.owner}
        </a>
        <a
          href={`tel:${internationalPhone}`}
          className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Call {siteConfig.owner}
        </a>
      </section>
    </main>
  );
}

