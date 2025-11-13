import type { Metadata } from "next";
import "./globals.css";
import { WhatsAppButton } from "@fixblox/ui";

export const metadata: Metadata = {
  title: {
    default: "PD Heating & Gas | QuoteFlow",
    template: "%s | PD Heating",
  },
  description:
    "PD Heating & Gas Services delivers same-day boiler repairs, servicing, and installations across London supported by FixBlox QuoteFlow.",
  openGraph: {
    title: "PD Heating & Gas",
    description:
      "Instant heating quotes, WhatsApp booking, and automated lead capture powered by FixBlox QuoteFlow.",
    url: "https://pd-heating.fixblox.dev",
    siteName: "PD Heating & Gas",
    images: [
      {
        url: "https://placehold.co/1200x630/png?text=PD+Heating",
        width: 1200,
        height: 630,
        alt: "PD Heating QuoteFlow Landing",
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
