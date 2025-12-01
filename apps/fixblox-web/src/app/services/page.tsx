import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services - Trades Digital Solutions',
  description: 'FixBlox offers comprehensive digital solutions for tradespeople including website builders, instant quote tools, WhatsApp lead capture, Google Business optimisation, and AI assistants.',
  keywords: [
    'trades digital solutions',
    'website builder for tradespeople',
    'WhatsApp lead capture',
    'Google Business optimisation',
    'AI assistant for trades',
    'tradespeople services',
    'digital marketing for trades'
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Services - Trades Digital Solutions | FixBlox',
    description: 'Comprehensive digital solutions for tradespeople including websites, quote tools, and lead generation.',
    url: 'https://www.fixblox.com/services',
    type: 'website',
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Trades Digital Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital tools designed specifically for tradespeople to grow their business, capture more leads, and streamline operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-4xl mb-4">🌐</div>
            <h2 className="text-2xl font-bold mb-4">Websites & SEO for Trades</h2>
            <p className="text-gray-600 mb-4">
              Modern, mobile-friendly websites built specifically for trade businesses. Boost visibility, improve search rankings, and convert more enquiries with fully optimised local SEO and service pages.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>SEO-optimised website build</li>
              <li>Google Business optimisation</li>
              <li>Service area pages</li>
              <li>Local keyword targeting</li>
            </ul>
            <Link href="/contact" className="inline-block bg-gradient-to-r from-[#0066FF] to-[#00D9FF] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
              Learn More →
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-4xl mb-4">📊</div>
            <h2 className="text-2xl font-bold mb-4">QuoteFlow</h2>
            <p className="text-gray-600 mb-4">
              Instant quote calculator for tradespeople. Generate accurate pricing in seconds, capture high-quality enquiries, and manage all jobs from one simple dashboard.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Instant quote calculator</li>
              <li>Lead capture & notifications</li>
              <li>Admin dashboard included</li>
              <li>Mobile responsive</li>
            </ul>
            <Link href="/quoteflow" className="inline-block bg-gradient-to-r from-[#0066FF] to-[#00D9FF] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
              Learn More →
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-4xl mb-4">💬</div>
            <h2 className="text-2xl font-bold mb-4">WhatsApp Lead Capture</h2>
            <p className="text-gray-600 mb-4">
              Direct customer communication through WhatsApp. Send quotes, share updates, and collect enquiries instantly from your website or QuoteFlow page.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Direct messaging</li>
              <li>Quote delivery</li>
              <li>Status updates</li>
              <li>Lead capture tools</li>
            </ul>
            <Link href="/contact" className="inline-block bg-gradient-to-r from-[#0066FF] to-[#00D9FF] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
              Contact Us →
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-4xl mb-4">🤖</div>
            <h2 className="text-2xl font-bold mb-4">AI Customer Assistant</h2>
            <p className="text-gray-600 mb-4">
              24/7 AI chatbot designed to handle customer questions, bookings, and automatic follow-ups even while you&apos;re busy on the job.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>24/7 customer support</li>
              <li>Appointment booking</li>
              <li>Instant responses</li>
              <li>FAQ automation</li>
            </ul>
            <Link href="/contact" className="inline-block bg-gradient-to-r from-[#0066FF] to-[#00D9FF] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
              Contact Us →
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#0066FF] to-[#00D9FF] rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today to discuss how FixBlox can help grow your trade business.
          </p>
          <Link href="/contact" className="inline-block bg-white text-[#0066FF] px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
