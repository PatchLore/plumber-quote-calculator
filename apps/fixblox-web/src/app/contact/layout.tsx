import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact FixBlox - Get in Touch',
  description: 'Get in touch with FixBlox. Whether you\'re ready to set up QuoteFlow, need a custom solution, or want to chat about your trade business — we\'re here to help.',
  keywords: [
    'contact FixBlox',
    'get quote',
    'tradespeople support',
    'QuoteFlow setup',
    'custom solution'
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact FixBlox - Get in Touch',
    description: 'Get in touch with FixBlox. Whether you\'re ready to set up QuoteFlow, need a custom solution, or want to chat about your trade business.',
    url: 'https://www.fixblox.com/contact',
    type: 'website',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

