import type { Metadata } from "next";
import "./globals.css";
import { WhatsAppButton } from "@fixblox/ui";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `${siteConfig.title} — Heating & Gas Services`,
  description:
    `${siteConfig.title} provides reliable boiler installs, servicing, and safety certificates across South East London & Kent.`,
  openGraph: {
    title: siteConfig.title,
    description: `${siteConfig.title} — trusted, punctual, fully insured heating & gas services.`,
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
