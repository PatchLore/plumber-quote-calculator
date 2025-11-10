import type { Metadata } from "next";
import "./globals.css";
import { WhatsAppButton } from "@fixblox/ui";

export const metadata: Metadata = {
  title: {
    default: "Client Template | FixBlox QuoteFlow",
    template: "%s | FixBlox Client",
  },
  description:
    "Template starter for FixBlox QuoteFlow clients. Includes hero, services, contact, and QuoteFlow embed pages.",
  openGraph: {
    title: "FixBlox Client Template",
    description:
      "Launch trade-specific landing pages with QuoteFlow automation, WhatsApp contact, and SEO-friendly structure.",
    url: "https://client-template.fixblox.dev",
    siteName: "FixBlox Client Template",
    images: [
      {
        url: "https://placehold.co/1200x630/png",
        width: 1200,
        height: 630,
        alt: "FixBlox Client Template",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
