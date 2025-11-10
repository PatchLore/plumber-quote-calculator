import type { Metadata } from "next";
import "./globals.css";
import { WhatsAppButton } from "@fixblox/ui";

export const metadata: Metadata = {
  title: {
    default: "EcoFlame Heating & Plumbing",
    template: "%s | EcoFlame",
  },
  description:
    "EcoFlame delivers Gas Safe boiler installs, repairs, and servicing across London & Surrey powered by FixBlox QuoteFlow.",
  openGraph: {
    title: "EcoFlame Heating & Plumbing",
    description:
      "Instant heating quotes, WhatsApp booking, and managed lead workflows for EcoFlame clients.",
    url: "https://ecoflame.fixblox.dev",
    siteName: "EcoFlame Heating",
    images: [
      {
        url: "https://placehold.co/1200x630/png?text=EcoFlame",
        width: 1200,
        height: 630,
        alt: "EcoFlame QuoteFlow Landing",
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
