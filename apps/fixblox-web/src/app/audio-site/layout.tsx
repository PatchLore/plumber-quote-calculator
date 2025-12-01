import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Full Website Builder – Audio Website Generator for Trades | FixBlox',
  description:
    'Create a complete business website from a 30-second voice note. Record or upload audio describing your trade services and branding, and FixBlox generates a full website for you.',
  keywords: [
    'audio website generator',
    'full website builder',
    'voice to website',
    'trades website builder',
    'AI website builder for trades',
    'FixBlox Full Website Builder',
  ],
  alternates: {
    canonical: '/audio-site',
  },
  openGraph: {
    title: 'Full Website Builder – Turn a Voice Note into a Complete Website | FixBlox',
    description:
      'Record or upload a short audio about your trade business and let FixBlox build a complete website with hero, services, about and contact sections.',
    url: 'https://www.fixblox.com/audio-site',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full Website Builder – Audio Website Generator for Trades | FixBlox',
    description:
      'Turn a 30-second voice note into a complete website. FixBlox analyses your audio and generates a full site for your trade business.',
  },
}

export default function AudioSiteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}


