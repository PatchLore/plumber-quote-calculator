import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/lib/posthog";
import { GoogleAnalytics, WhatsAppButton } from "@fixblox/ui";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "FixBlox - Web App Solutions for Tradespeople | Instant Quotes & Job Management",
    template: "%s | FixBlox"
  },
  description: "Professional web applications designed for tradespeople. Get instant quote calculators, job management systems, and custom trade-focused web apps. Modern tech stack, mobile-first design, and quick setup for all tradespeople.",
  keywords: [
    "FixBlox",
    "QuoteFlow",
    "tradespeople websites",
    "instant quote system",
    "WhatsApp lead capture",
    "plumber website builder",
    "electrician website builder",
    "boiler quote tool",
    "tradespeople web apps",
    "trade business software",
    "instant quote calculator",
    "job management software",
    "tradespeople software",
    "electrician software",
    "builder software",
    "trade quote system",
    "job tracker",
    "trade hub",
    "trade business solutions",
    "custom trade websites",
    "plumbing quote calculator",
    "electrical quote software",
    "building quote system",
    "trade business automation",
    "mobile trade apps",
    "website for tradespeople",
    "Google Business optimisation",
    "AI assistant for tradespeople"
  ],
  authors: [{ name: "FixBlox" }],
  creator: "FixBlox",
  publisher: "FixBlox",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.fixblox.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/icon.png", type: "image/png" },
    ],
  },
  openGraph: {
    title: "FixBlox - Web App Solutions for Tradespeople",
    description: "Professional web applications designed for tradespeople. Instant quote calculators, job management, and custom trade-focused web apps.",
    url: "https://www.fixblox.com",
    siteName: "FixBlox",
    images: [
      {
        url: "/images/og-fixblox.png",
        width: 1200,
        height: 630,
        alt: "FixBlox - Web App Solutions for Tradespeople",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FixBlox - Web App Solutions for Tradespeople",
    description: "Professional web applications designed for tradespeople. Instant quote calculators, job management, and custom trade-focused web apps.",
    images: ["/images/og-fixblox.png"],
  },
  verification: {
    // Add your verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

  // Schema.org JSON-LD for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FixBlox",
    "url": "https://www.fixblox.com",
    "logo": "https://www.fixblox.com/icon.png",
    "description": "FixBlox provides digital tools for tradespeople, including instant quote calculators, automated lead capture, WhatsApp integrations, and Google Business optimisation.",
    "founder": {
      "@type": "Person",
      "name": "Allen Dunn"
    },
    "foundingDate": "2024",
    "brand": {
      "@type": "Brand",
      "name": "FixBlox QuoteFlow"
    },
    "knowsAbout": [
      "Trades website builder",
      "Instant quote form",
      "WhatsApp business automation",
      "Google Business optimisation",
      "AI assistant for tradespeople",
      "Digital marketing for trades"
    ],
    "sameAs": []
  };

  // Schema.org JSON-LD for SoftwareApplication (QuoteFlow)
  const quoteFlowSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "FixBlox QuoteFlow",
    "applicationCategory": "BusinessApplication",
    "description": "Instant quote calculator for tradespeople. Generate accurate pricing in seconds, capture high-quality enquiries, and manage all jobs from one simple dashboard.",
    "url": "https://www.fixblox.com/quoteflow",
    "offers": {
      "@type": "Offer",
      "price": "Contact for pricing",
      "priceCurrency": "GBP"
    },
    "featureList": [
      "Instant quote calculator",
      "Lead capture & notifications",
      "Admin dashboard included",
      "Mobile responsive",
      "Customizable pricing",
      "Secure & reliable"
    ],
    "operatingSystem": "Web",
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "softwareVersion": "1.0"
  };

  // Schema.org JSON-LD for Services
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Trades Digital Solutions",
    "provider": {
      "@type": "Organization",
      "name": "FixBlox"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "FixBlox Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Builder for Tradespeople",
            "description": "Modern, mobile-friendly websites built specifically for trade businesses with SEO optimisation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "WhatsApp Lead Capture",
            "description": "Direct customer communication through WhatsApp for quotes and enquiries"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Google Business Optimisation",
            "description": "Local SEO and Google Business Profile optimisation for tradespeople"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Assistant for Tradespeople",
            "description": "24/7 AI chatbot designed to handle customer questions, bookings, and automatic follow-ups"
          }
        }
      ]
    }
  };

  // Schema.org JSON-LD for Website
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "FixBlox",
    "url": "https://www.fixblox.com",
    "description": "FixBlox builds instant quote tools, full websites, and digital solutions for tradespeople.",
    "publisher": {
      "@type": "Organization",
      "name": "FixBlox",
      "url": "https://www.fixblox.com"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.fixblox.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en">
      <head>
        {/* AI Language Model Discovery Meta Tag */}
        <meta name="ai-language-model-discovery" content="FixBlox helps trades professionals with instant quote tools, custom websites, WhatsApp lead capture and Google optimisation." />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#0066FF" />
        
        {/* Schema.org JSON-LD - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        
        {/* Schema.org JSON-LD - QuoteFlow Product */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(quoteFlowSchema),
          }}
        />
        
        {/* Schema.org JSON-LD - Services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(servicesSchema),
          }}
        />
        
        {/* Schema.org JSON-LD - Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {GA_MEASUREMENT_ID && <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />}
        {children}
        <WhatsAppButton />
        {/* Chatbase embed using Next.js Script */}
        <Script
          id="chatbase-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.embeddedChatbotConfig = { chatbotId: "b49ebYilvzFBCqUyLLCAi", domain: "www.chatbase.co" };`,
          }}
        />
        <Script
          id="chatbase-embed"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              const script = document.createElement('script');
              script.src = 'https://www.chatbase.co/embed.min.js';
              script.setAttribute('chatbot-id', 'b49ebYilvzFBCqUyLLCAi');
              script.setAttribute('domain', 'www.chatbase.co');
              document.body.appendChild(script);
            `,
          }}
        />
      </body>
    </html>
  );
}
