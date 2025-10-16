import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
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
    "tradespeople web apps",
    "trade business software",
    "instant quote calculator",
    "job management software",
    "tradespeople software",
    "electrician software",
    "builder software",
    "trade quote system",
    "QuoteFlow",
    "job tracker",
    "trade hub",
    "trade business solutions",
    "custom trade websites",
    "plumbing quote calculator",
    "electrical quote software",
    "building quote system",
    "trade business automation",
    "mobile trade apps"
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

  return (
    <html lang="en">
      <head>
        {/* Keep head minimal; GA loads in body via Next Script */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {GA_MEASUREMENT_ID && <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />}
        {children}
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
          src="https://www.chatbase.co/embed.min.js"
          strategy="afterInteractive"
          // @ts-expect-error custom attributes used by Chatbase
          chatbot-id="b49ebYilvzFBCqUyLLCAi"
          // @ts-expect-error custom attributes used by Chatbase
          domain="www.chatbase.co"
        />
      </body>
    </html>
  );
}
