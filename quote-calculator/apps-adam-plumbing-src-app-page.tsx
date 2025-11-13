import Link from 'next/link'
import { quoteflowConfig } from '../quoteflow.config'

export default function HomePage() {
  const { branding, contact } = quoteflowConfig

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md px-[5%] py-6 flex justify-between items-center z-50 shadow-sm">
        <div className="text-2xl font-bold" style={{ color: branding.primaryColor }}>
          {branding.companyName}
        </div>
        <ul className="hidden md:flex gap-10 list-none">
          <li><a href="#services" className="text-gray-700 hover:opacity-70">Services</a></li>
          <li><a href="#about" className="text-gray-700 hover:opacity-70">About</a></li>
          <li><a href="#contact" className="text-gray-700 hover:opacity-70">Contact</a></li>
        </ul>
        <Link 
          href="/calculator" 
          className="px-8 py-3 rounded-full font-semibold text-white transition-all hover:-translate-y-0.5 shadow-lg"
          style={{ backgroundColor: branding.primaryColor }}
        >
          Get Instant Quote
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="mt-20 min-h-[90vh] flex items-center px-[5%] py-16 bg-gradient-to-br from-slate-900 to-slate-700 text-white relative overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(30,64,175,0.3)_0%,transparent_70%)] top-[-300px] right-[-300px] opacity-50"></div>
        
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
          <div>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Professional Plumbing Services in <span style={{ color: branding.secondaryColor }}>London</span>
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Fast, reliable, and affordable plumbing solutions. Get an instant quote for your plumbing job in seconds.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link 
                href="/calculator" 
                className="px-12 py-5 rounded-full font-semibold text-lg text-white transition-all hover:-translate-y-1 shadow-lg text-center"
                style={{ backgroundColor: branding.primaryColor }}
              >
                Get Instant Quote
              </Link>
              <a 
                href={`tel:${contact.phone}`}
                className="px-12 py-5 rounded-full border-2 border-white font-semibold text-lg transition-all hover:bg-white hover:text-slate-900 text-center"
              >
                Call Now
              </a>
            </div>

            <div className="flex gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>24/7 Emergency Service</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Fixed Prices</span>
              </div>
            </div>
          </div>

          {/* Quick Quote Preview */}
          <div className="bg-white text-gray-900 p-8 rounded-3xl shadow-2xl">
            <div className="text-sm font-medium mb-4" style={{ color: branding.primaryColor }}>
              Instant Quote Calculator
            </div>
            <div className="bg-gradient-to-b from-slate-50 to-white rounded-2xl p-6 border border-gray-100">
              <div className="text-center mb-6">
                <div className="text-4xl font-extrabold mb-2" style={{ color: branding.primaryColor }}>
                  £120
                </div>
                <div className="text-sm text-gray-600">Starting from</div>
              </div>
              <Link 
                href="/calculator"
                className="block w-full py-4 rounded-xl text-center font-semibold text-white transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: branding.primaryColor }}
              >
                Calculate Your Quote →
              </Link>
              <p className="text-xs text-gray-500 mt-4 text-center">
                Transparent pricing • No hidden fees • Instant results
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-[5%] bg-gray-50">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Professional plumbing solutions for every need</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quoteflowConfig.services.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-1 transition-all">
                <h3 className="text-2xl font-bold mb-3" style={{ color: branding.primaryColor }}>
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-sm text-gray-500">
                  From <span className="text-2xl font-bold text-gray-900">£{service.basePrice}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-[5%] bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-600 mb-10">
            Need urgent plumbing help? Contact us now for fast, reliable service.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <a 
              href={`tel:${contact.phone}`}
              className="p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all"
            >
              <div className="text-3xl mb-2">📞</div>
              <div className="font-semibold mb-1">Phone</div>
              <div className="text-sm text-gray-600">{contact.phone}</div>
            </a>
            <a 
              href={`mailto:${contact.email}`}
              className="p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all"
            >
              <div className="text-3xl mb-2">✉️</div>
              <div className="font-semibold mb-1">Email</div>
              <div className="text-sm text-gray-600">{contact.email}</div>
            </a>
            {contact.whatsapp && (
              <a 
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all"
              >
                <div className="text-3xl mb-2">💬</div>
                <div className="font-semibold mb-1">WhatsApp</div>
                <div className="text-sm text-gray-600">Chat with us</div>
              </a>
            )}
          </div>

          <Link 
            href="/calculator"
            className="inline-block px-14 py-5 rounded-full font-semibold text-lg text-white transition-all hover:-translate-y-1 shadow-lg"
            style={{ backgroundColor: branding.primaryColor }}
          >
            Get Your Instant Quote
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-[5%]">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="text-2xl font-bold mb-4" style={{ color: branding.primaryColor }}>
            {branding.companyName}
          </div>
          <p className="opacity-70 mb-6">
            Professional plumbing services you can trust
          </p>
          <div className="text-sm opacity-50">
            © 2025 {branding.companyName}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}


