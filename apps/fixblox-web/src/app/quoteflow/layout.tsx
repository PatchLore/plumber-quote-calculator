import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'QuoteFlow - Instant Quote Calculator for Tradespeople',
  description: 'Turn website visitors into paying customers with instant, transparent quotes. Capture qualified leads automatically and manage everything from your dashboard. Built specifically for tradespeople.',
  keywords: [
    'QuoteFlow',
    'instant quote calculator',
    'tradespeople quote tool',
    'plumber quote system',
    'electrician quote calculator',
    'lead generation for trades',
    'quote form for tradespeople',
    'instant quote tool'
  ],
  alternates: {
    canonical: '/quoteflow',
  },
  openGraph: {
    title: 'QuoteFlow - Instant Quote Calculator for Tradespeople',
    description: 'Turn website visitors into paying customers with instant, transparent quotes. Capture qualified leads automatically.',
    url: 'https://www.fixblox.com/quoteflow',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuoteFlow - Instant Quote Calculator for Tradespeople',
    description: 'Turn website visitors into paying customers with instant, transparent quotes.',
  },
}

export default function QuoteFlowLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

