import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | FixBlox',
  description:
    'Read the FixBlox privacy policy. Learn how we collect, use, and protect your data when using our trade business web applications and website.',
  alternates: {
    canonical: '/privacy',
  },
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}


