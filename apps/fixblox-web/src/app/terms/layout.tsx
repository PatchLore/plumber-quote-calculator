import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | FixBlox',
  description:
    'Read the FixBlox terms of service to understand the terms and conditions for using our trade business web applications and white-label solutions.',
  alternates: {
    canonical: '/terms',
  },
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}


