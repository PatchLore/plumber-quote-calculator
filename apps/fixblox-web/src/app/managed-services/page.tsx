import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Managed Services for Trades | FixBlox',
  description: "We manage enquiries, bookings, and follow-ups so trades don't miss work.",
};

export default function ManagedServicesPage() {
  const whatsappHref = "https://wa.me/447375949211";

  return (
    <main className="bg-white text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-100 bg-white fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto flex max-w-6xl items-baseline justify-between px-4 py-4">
          <Link href="/" className="text-lg font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00D9FF]">
            FixBlox
          </Link>
          <div className="text-sm font-semibold text-slate-500">Managed Services</div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="text-white text-center py-16 px-5 sm:py-20 mt-16"
        style={{
          background: 'linear-gradient(135deg, #0066FF 0%, #00D9FF 100%)',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-5">
          <h1 className="text-4xl font-bold mb-6 sm:text-5xl">
            We Don't Just Build Systems — We Run Them
          </h1>
          <p className="text-xl mb-8 opacity-90 sm:text-2xl max-w-3xl mx-auto">
            Missed enquiries, forgotten follow-ups, and double bookings cost trades real money. We make sure enquiries turn into booked, paid jobs.
          </p>
          <div className="flex justify-center mt-8">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-lg rounded-lg cursor-pointer font-semibold no-underline inline-block transition-all duration-200 bg-white text-[#0066FF] hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="bg-[#F0F8FF] py-16 px-5 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-3xl font-bold mb-10 text-center text-slate-900 sm:text-4xl">
            Where Jobs Are Lost
          </h2>
          <ul className="list-none max-w-[700px] mx-auto space-y-4">
            <li className="p-5 bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-red-500 text-2xl font-bold">✗</span>
              Emails left unanswered
            </li>
            <li className="p-5 bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-red-500 text-2xl font-bold">✗</span>
              Quotes sent but never followed up
            </li>
            <li className="p-5 bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-red-500 text-2xl font-bold">✗</span>
              Jobs not added to the calendar
            </li>
            <li className="p-5 bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-red-500 text-2xl font-bold">✗</span>
              Leads paid for but wasted
            </li>
          </ul>
        </div>
      </section>

      {/* What We Manage Section */}
      <section className="bg-white py-16 px-5 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-3xl font-bold mb-10 text-center text-slate-900 sm:text-4xl">
            What We Handle For You
          </h2>
          <ul className="list-none max-w-[700px] mx-auto space-y-4">
            <li className="p-5 bg-[#F0F8FF] rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-green-500 text-2xl font-bold">✓</span>
              Enquiry inbox management
            </li>
            <li className="p-5 bg-[#F0F8FF] rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-green-500 text-2xl font-bold">✓</span>
              Job booking & calendar updates
            </li>
            <li className="p-5 bg-[#F0F8FF] rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-green-500 text-2xl font-bold">✓</span>
              Sending quotes from templates
            </li>
            <li className="p-5 bg-[#F0F8FF] rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-green-500 text-2xl font-bold">✓</span>
              Chasing quote approvals
            </li>
            <li className="p-5 bg-[#F0F8FF] rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-green-500 text-2xl font-bold">✓</span>
              Payment follow-ups
            </li>
          </ul>
        </div>
      </section>

      {/* What We Don't Do Section */}
      <section className="bg-[#F0F8FF] py-16 px-5 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-3xl font-bold mb-10 text-center text-slate-900 sm:text-4xl">
            What This Is Not
          </h2>
          <ul className="list-none max-w-[700px] mx-auto space-y-4 mb-6">
            <li className="p-5 bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-slate-400 text-2xl font-bold">✗</span>
              No personal inbox management
            </li>
            <li className="p-5 bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-slate-400 text-2xl font-bold">✗</span>
              No supplier or staff coordination
            </li>
            <li className="p-5 bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-slate-400 text-2xl font-bold">✗</span>
              No bookkeeping or accounts
            </li>
            <li className="p-5 bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-slate-400 text-2xl font-bold">✗</span>
              No general VA work
            </li>
          </ul>
          <p className="text-center text-slate-600 text-lg max-w-2xl mx-auto">
            This keeps the service focused, reliable, and sustainable.
          </p>
        </div>
      </section>

      {/* How This Fits FixBlox Section */}
      <section className="bg-white py-16 px-5 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-3xl font-bold mb-6 text-center text-slate-900 sm:text-4xl">
            How This Fits With FixBlox
          </h2>
          <div className="max-w-[800px] mx-auto text-lg text-slate-700 leading-relaxed space-y-4">
            <p>
              Websites capture enquiries, AI receptionist handles first contact, and managed services ensure conversion.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-[#F0F8FF] py-16 px-5 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-3xl font-bold mb-6 text-center text-slate-900 sm:text-4xl">
            Simple Monthly Pricing
          </h2>
          <p className="text-center text-lg text-slate-700 mb-12 max-w-2xl mx-auto">
            Choose the level of support you need. Upgrade or downgrade anytime. No contracts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Capture Tier */}
            <div className="bg-white rounded-lg border-2 border-slate-200 p-6 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Capture</h3>
              <div className="text-4xl font-bold text-[#0066FF] mb-1">£199</div>
              <div className="text-slate-600 mb-4">/ month</div>
              <p className="text-slate-700 font-semibold mb-4">Stop missing enquiries.</p>
              <p className="text-sm text-slate-600 mb-6 italic">Solo trades drowning in admin</p>
              <ul className="text-left space-y-2 mb-6 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#0066FF] font-bold">•</span>
                  <span>Inbox monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0066FF] font-bold">•</span>
                  <span>Missed call recovery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0066FF] font-bold">•</span>
                  <span>Basic booking coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0066FF] font-bold">•</span>
                  <span>Quote sending (template or price-list based)</span>
                </li>
              </ul>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-3 text-center rounded-lg font-semibold no-underline transition-all duration-200 bg-[#0066FF] text-white hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
              >
                Get Started
              </a>
            </div>

            {/* Convert Tier */}
            <div className="bg-white rounded-lg border-2 border-[#0066FF] p-6 text-center relative shadow-lg">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0066FF] text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Convert</h3>
              <div className="text-4xl font-bold text-[#0066FF] mb-1">£449</div>
              <div className="text-slate-600 mb-4">/ month</div>
              <p className="text-slate-700 font-semibold mb-4">Turn more enquiries into booked jobs.</p>
              <p className="text-sm text-slate-600 mb-6 italic">Growing trades losing quotes</p>
              <ul className="text-left space-y-2 mb-6 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#0066FF] font-bold">•</span>
                  <span>Everything in Capture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0066FF] font-bold">•</span>
                  <span>Proactive quote chasing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0066FF] font-bold">•</span>
                  <span>Diary management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0066FF] font-bold">•</span>
                  <span>CRM updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0066FF] font-bold">•</span>
                  <span>Missed enquiry follow-up</span>
                </li>
              </ul>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-3 text-center rounded-lg font-semibold no-underline transition-all duration-200 bg-[#0066FF] text-white hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
              >
                Get Started
              </a>
            </div>

            {/* Scale Tier */}
            <div className="bg-white rounded-lg border-2 border-slate-200 p-6 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Scale</h3>
              <div className="text-4xl font-bold text-[#0066FF] mb-1">£899</div>
              <div className="text-slate-600 mb-4">/ month (from)</div>
              <p className="text-slate-700 font-semibold mb-4">Your outsourced office for growing or multi-van trade businesses.</p>
              <p className="text-sm text-slate-600 mb-6 italic">Multi-van businesses needing an office function</p>
              <ul className="text-left space-y-2 mb-6 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#0066FF] font-bold">•</span>
                  <span>Full enquiry handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0066FF] font-bold">•</span>
                  <span>Phone + inbox takeover</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0066FF] font-bold">•</span>
                  <span>Ongoing follow-ups</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0066FF] font-bold">•</span>
                  <span>Priority support</span>
                </li>
              </ul>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-3 text-center rounded-lg font-semibold no-underline transition-all duration-200 bg-white text-[#0066FF] border-2 border-[#0066FF] hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
              >
                Talk to us
              </a>
            </div>
          </div>
          <p className="text-center text-sm text-slate-600 max-w-2xl mx-auto">
            Pricing depends on enquiry volume and complexity. We'll confirm fit before onboarding.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 px-5 sm:py-20">
        <div className="max-w-[800px] mx-auto px-5">
          <h2 className="text-3xl font-bold mb-10 text-center text-slate-900 sm:text-4xl">
            Common Questions
          </h2>
          
          <dl className="space-y-6">
            <div>
              <dt className="text-lg font-semibold text-slate-900 mb-2">
                Who is this service for?
              </dt>
              <dd className="text-slate-700 leading-relaxed">
                This is for busy tradespeople who are already getting enquiries but don't have time to manage replies, bookings, quotes, and follow-ups. If you're missing calls, replying late, or doing admin at night, this is likely a good fit.
              </dd>
            </div>

            <div>
              <dt className="text-lg font-semibold text-slate-900 mb-2">
                Is this available outside the UK?
              </dt>
              <dd className="text-slate-700 leading-relaxed">
                Managed enquiry services are currently available to UK-based businesses only. Websites and AI receptionist services are available internationally.
              </dd>
            </div>

            <div>
              <dt className="text-lg font-semibold text-slate-900 mb-2">
                Do you replace a receptionist or office admin?
              </dt>
              <dd className="text-slate-700 leading-relaxed">
                We don't just answer calls — we manage the enquiry flow end-to-end. That includes inbox management, booking jobs, sending quotes, and following up to secure work.
              </dd>
            </div>

            <div>
              <dt className="text-lg font-semibold text-slate-900 mb-2">
                What systems do you work with?
              </dt>
              <dd className="text-slate-700 leading-relaxed">
                We work with your existing setup where possible, including email, Google Calendar, and popular trade tools like ServiceM8, Fergus, or Jobber.
              </dd>
            </div>

            <div>
              <dt className="text-lg font-semibold text-slate-900 mb-2">
                How quickly can you get started?
              </dt>
              <dd className="text-slate-700 leading-relaxed">
                Most businesses can be onboarded within a few working days once access is confirmed and workflows are agreed.
              </dd>
            </div>

            <div>
              <dt className="text-lg font-semibold text-slate-900 mb-2">
                Is there a long-term contract?
              </dt>
              <dd className="text-slate-700 leading-relaxed">
                No long-term contracts. Managed services are billed monthly, and you can cancel if it's not the right fit.
              </dd>
            </div>

            <div>
              <dt className="text-lg font-semibold text-slate-900 mb-2">
                What if I only want a website or AI receptionist?
              </dt>
              <dd className="text-slate-700 leading-relaxed">
                That's absolutely fine. Some clients only need a website or AI receptionist, while others choose full managed enquiry support.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-white py-16 px-5 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <p className="text-center text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
            If you're too busy to manage enquiries properly, we can handle it for you.
          </p>
          <div className="flex justify-center">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-lg rounded-lg cursor-pointer font-semibold no-underline inline-block transition-all duration-200 bg-[#0066FF] text-white hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
