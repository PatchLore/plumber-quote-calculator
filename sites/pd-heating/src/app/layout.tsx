import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Script from "next/script";
import WhatsAppButton from "@/components/WhatsAppButton";

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
    default: "PD Heating & Plumbing – Fast Quotes & Trusted Local Plumbers",
    template: "%s | PD Heating & Plumbing"
  },
  description: "Instant quotes, WhatsApp support, and a modern website built for PD Heating & Plumbing.",
  keywords: [
    "plumbing services",
    "heating services",
    "local plumbers",
    "plumbing quotes",
    "heating engineers",
    "emergency plumbing",
    "plumbing repairs",
    "boiler services",
    "PD Heating & Plumbing"
  ],
  authors: [{ name: "PD Heating & Plumbing" }],
  creator: "PD Heating & Plumbing",
  publisher: "PD Heating & Plumbing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://pdheating.demo"),
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
    title: "PD Heating & Plumbing – Fast Quotes & Trusted Local Plumbers",
    description: "Instant quotes, WhatsApp support, and a modern website built for PD Heating & Plumbing.",
    url: "https://pdheating.demo",
    siteName: "PD Heating & Plumbing",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "PD Heating & Plumbing",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PD Heating & Plumbing – Fast Quotes & Trusted Local Plumbers",
    description: "Instant quotes, WhatsApp support, and a modern website built for PD Heating & Plumbing.",
    images: ["/icon.png"],
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
