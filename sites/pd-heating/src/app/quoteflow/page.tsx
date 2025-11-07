'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function QuoteFlowLandingPage() {
  // Set document title and meta description
  useEffect(() => {
    document.title = "Get an Instant Quote | PD Heating & Plumbing"
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Turn website visitors into paying customers with instant, transparent quotes. Capture qualified leads automatically and manage everything from your dashboard. Built specifically for tradespeople.')
    }
  }, [])
  return (
    <div className="overflow-x-hidden bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md px-[5%] py-6 flex justify-between items-center z-[1000] shadow-[0_2px_20px_rgba(0,0,0,0.05)]">
        <Link href="/" className="text-[1.8rem] font-extrabold text-[#1E3A8A]">
          PD Heating & Plumbing
        </Link>
        <ul className="hidden md:flex gap-10 list-none">
          <li><Link href="/" className="text-[#0A0E27] no-underline font-medium hover:after:w-full relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-[#1E3A8A] after:transition-all">Home</Link></li>
          <li><Link href="/quoteflow" className="text-[#1E3A8A] no-underline font-semibold">Get a Quote</Link></li>
          <li><Link href="https://wa.me/447739120349" target="_blank" rel="noopener noreferrer" className="text-[#0A0E27] no-underline font-medium hover:after:w-full relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-[#1E3A8A] after:transition-all">Contact</Link></li>
        </ul>
        <Link href="/quoteflow/calculator" className="bg-[#1E3A8A] text-white px-8 py-3 rounded-full font-semibold transition-all hover:-translate-y-0.5 hover:bg-[#1e40af] shadow-[0_4px_15px_rgba(30,58,138,0.3)] hover:shadow-[0_6px_25px_rgba(30,58,138,0.4)]">
          Get Instant Quote
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="mt-20 min-h-[90vh] flex items-center px-[5%] py-16 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] relative overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(59,130,246,0.3)_0%,transparent_70%)] top-[-300px] right-[-300px] animate-[pulse_4s_ease-in-out_infinite]"></div>
        
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-tight text-white mb-6">
              Get an Instant Quote for Your <span className="bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent">Heating & Plumbing Needs</span>
            </h1>
            <p className="text-xl text-white/85 mb-8">
              Fast, transparent pricing for all your heating and plumbing requirements. Get an instant quote in seconds, no hidden fees.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/quoteflow/calculator" className="bg-white text-[#1E3A8A] px-10 py-4 rounded-full font-semibold text-lg transition-all hover:-translate-y-1 shadow-[0_10px_30px_rgba(255,255,255,0.3)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.4)] text-center">
                Get an Instant Quote
            </Link>
              <Link href="https://wa.me/447739120349" target="_blank" rel="noopener noreferrer" className="bg-transparent text-white px-10 py-4 rounded-full border-2 border-white font-semibold text-lg transition-all hover:bg-white hover:text-[#1E3A8A] text-center">
                Message on WhatsApp
            </Link>
          </div>

              </div>

          {/* Demo Preview */}
          <div className="bg-white/95 backdrop-blur-xl p-8 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            <div className="text-sm text-[#8B92A7] mb-4 font-medium">Live Demo Preview</div>
            <div className="bg-gradient-to-b from-slate-50 to-white rounded-2xl p-6 border border-gray-100">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-xs text-[#8B92A7] mb-1">Service Selected</div>
                  <div className="text-lg font-bold text-[#0A0E27]">Emergency Leak Repair</div>
                  <div className="text-xs text-[#8B92A7]">SW1A 1AA • Same Day</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-[#8B92A7] mb-1">Estimated Total</div>
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] bg-clip-text text-transparent">£194</div>
                </div>
              </div>

              <div className="space-y-2 text-sm mb-6">
                <div className="flex justify-between"><span className="text-[#8B92A7]">Base price</span><span className="font-medium">£120</span></div>
                <div className="flex justify-between"><span className="text-[#8B92A7]">Same day (+20%)</span><span className="font-medium">£24</span></div>
                <div className="flex justify-between"><span className="text-[#8B92A7]">Travel fee</span><span className="font-medium">£50</span></div>
              </div>

              <div className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white py-3 px-4 rounded-xl text-center font-semibold">
                Send My Details →
              </div>
            </div>
            <p className="text-xs text-[#8B92A7] mt-4 text-center">This lead is sent to your admin dashboard</p>
          </div>
        </div>
      </section>

      {/* How It Works for Tradespeople */}
      <section className="py-24 px-[5%] bg-[#F5F7FA]">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#0A0E27]">How QuoteFlow Works for You</h2>
          <p className="text-xl text-[#8B92A7]">Simple lead generation system that works while you sleep</p>
                </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1400px] mx-auto">
          {[
            { num: '1', title: 'Customer Gets Quote', desc: 'Your potential customer visits your website (or our hosted page), fills out the calculator, and sees an instant transparent quote for their plumbing job.' },
            { num: '2', title: 'You Get the Lead', desc: 'When they submit their details, you receive an instant notification with all job details, their contact info, and the quote amount. Everything you need to close the deal.' },
            { num: '3', title: 'Manage from Dashboard', desc: 'Track all your leads in the admin dashboard. Update job status, export to CSV, and keep everything organized. No more spreadsheets or missed opportunities.' }
          ].map((step, index) => (
            <div key={index} className="text-center bg-white p-8 rounded-2xl">
              <div className="w-[90px] h-[90px] bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] rounded-full flex items-center justify-center text-[2.5rem] font-extrabold text-white mx-auto mb-6 shadow-[0_10px_30px_rgba(30,58,138,0.3)]">
                {step.num}
              </div>
              <h3 className="text-2xl mb-4 text-[#0A0E27] font-bold">{step.title}</h3>
              <p className="text-[#8B92A7] leading-[1.7]">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-[5%] bg-white">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#0A0E27]">Everything You Need to Close More Jobs</h2>
          <p className="text-xl text-[#8B92A7]">QuoteFlow handles the hard work so you can focus on plumbing</p>
              </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
          {[
            { icon: '⚡', title: 'Instant Calculations', desc: 'Base prices, urgency multipliers, and travel fees calculated in real-time. Your customers see transparent pricing immediately.' },
            { icon: '📧', title: 'Auto Lead Notifications', desc: 'Get email alerts the moment a customer submits their details. Never miss a hot lead again.' },
            { icon: '📊', title: 'Built-in Dashboard', desc: 'Manage all your leads from one central dashboard. Filter, search, update status, and export to CSV.' },
            { icon: '🎨', title: 'Customizable Pricing', desc: 'Set your own base prices, urgency rates, and service areas. QuoteFlow adapts to your business model.' },
            { icon: '📱', title: 'Mobile Optimized', desc: '70% of quotes happen on mobile. QuoteFlow looks perfect on every device and screen size.' },
            { icon: '🔒', title: 'Secure & Reliable', desc: 'Built on enterprise-grade infrastructure. Your data is secure, and the platform is always available 24/7.' }
          ].map((feature, index) => (
            <div key={index} className="flex gap-4 p-6 bg-[#F5F7FA] rounded-2xl hover:-translate-y-1 transition-all">
              <div className="text-4xl">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-[#0A0E27] mb-2">{feature.title}</h3>
                <p className="text-[#8B92A7] leading-[1.6]">{feature.desc}</p>
              </div>
            </div>
          ))}
          </div>
      </section>

      {/* Plumber Testimonials */}
      <section className="py-24 px-[5%] bg-[#F5F7FA]">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#0A0E27]">Trusted by Professional Tradespeople</h2>
          <p className="text-xl text-[#8B92A7]">See what tradespeople are saying about QuoteFlow</p>
                  </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
          {[
            { name: 'James Mitchell', role: 'Licensed Plumber', location: 'Birmingham', initial: 'J', quote: 'QuoteFlow has transformed my business. I get quality leads instantly and customers love the transparent pricing. Booking rate has doubled since I started using it.' },
            { name: 'Sarah Thompson', role: 'Master Plumber', location: 'Manchester', initial: 'S', quote: 'The platform handles all the admin work - instant quotes, booking confirmations, everything. I can focus on what I do best: plumbing. Highly recommend to fellow tradespeople.' },
            { name: 'David Patel', role: 'Heating Engineer', location: 'London', initial: 'D', quote: 'No more back-and-forth emails or missed calls. QuoteFlow brings me customers who are ready to book. The quote calculator is spot-on and saves me hours every week.' }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-10 rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <div className="text-[#FFD700] mb-4 text-xl">★★★★★</div>
              <p className="text-lg leading-[1.8] text-[#0A0E27] mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="w-[55px] h-[55px] bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.initial}
                </div>
                <div>
                  <h4 className="text-[#0A0E27] font-semibold">{testimonial.name}</h4>
                  <p className="text-[#8B92A7] text-sm">{testimonial.role} • {testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-[5%] bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] text-center text-white relative overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(59,130,246,0.2)_0%,transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[pulse_3s_ease-in-out_infinite]"></div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Ready to Get Started?</h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-[700px] mx-auto">
            Get an instant quote for your heating and plumbing needs, or message us on WhatsApp
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quoteflow/calculator" className="inline-block bg-white text-[#1E3A8A] px-12 py-5 rounded-full font-semibold text-lg transition-all hover:-translate-y-1 shadow-[0_10px_30px_rgba(255,255,255,0.3)]">
              Get an Instant Quote
            </Link>
            <Link href="https://wa.me/447739120349" target="_blank" rel="noopener noreferrer" className="inline-block bg-transparent text-white px-12 py-5 rounded-full border-2 border-white font-semibold text-lg transition-all hover:bg-white hover:text-[#1E3A8A]">
              Message on WhatsApp
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0E27] text-white py-16 px-[5%]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
          <div>
            <h3 className="text-[1.8rem] font-extrabold text-white mb-4">
              PD Heating & Plumbing
            </h3>
            <p className="opacity-70 leading-[1.7]">
              Professional heating and plumbing services with instant quotes and WhatsApp support.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Services</h4>
            <ul className="space-y-2 list-none">
              <li><Link href="/quoteflow/calculator" className="text-white/70 no-underline block transition-all hover:text-white hover:pl-1">Get a Quote</Link></li>
              <li><a href="https://www.checkatrade.com/trades/pdheatingandplumbing" target="_blank" rel="noopener noreferrer" className="text-white/70 no-underline block transition-all hover:text-white hover:pl-1">Reviews</a></li>
              <li><Link href="https://wa.me/447739120349" target="_blank" rel="noopener noreferrer" className="text-white/70 no-underline block transition-all hover:text-white hover:pl-1">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact</h4>
            <ul className="space-y-2 list-none">
              <li><Link href="https://wa.me/447739120349" target="_blank" rel="noopener noreferrer" className="text-white/70 no-underline block transition-all hover:text-white hover:pl-1">WhatsApp: 07739 120349</Link></li>
              <li><a href="https://www.checkatrade.com/trades/pdheatingandplumbing" target="_blank" rel="noopener noreferrer" className="text-white/70 no-underline block transition-all hover:text-white hover:pl-1">Checkatrade</a></li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a href="https://www.facebook.com/pdheating" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/pdheating" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://twitter.com/pdheating" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/pdheating" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center opacity-70">
          <p>&copy; 2025 PD Heating & Plumbing. All rights reserved.</p>
          <p className="mt-2">Powered by <a href="https://www.fixblox.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white underline">FixBlox</a></p>
      </div>
      </footer>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
      `}</style>
    </div>
  )
}