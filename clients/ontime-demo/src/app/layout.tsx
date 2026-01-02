import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";
import { WhatsAppButton } from "@fixblox/ui";
import { siteConfig } from "../lib/siteConfig";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.title} — Professional Services`,
    template: `%s | ${siteConfig.title}`,
  },
  description: `${siteConfig.title} provides reliable, professional service across ${siteConfig.address}. Led by ${siteConfig.owner}.`,
  openGraph: {
    title: `${siteConfig.title} — Professional Services`,
    description: `${siteConfig.title} provides reliable, professional service across ${siteConfig.address}. Led by ${siteConfig.owner}.`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-white shadow-sm">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-slate-900">
            <a href="/" className="flex items-center" aria-label={siteConfig.title}>
              <Image
                src="/logo.png"
                alt={siteConfig.title}
                width={220}
                height={66}
                className="h-12 w-auto md:h-16"
                style={{ objectFit: "contain" }}
                priority
              />
            </a>
            <div className="flex gap-6 text-sm font-semibold">
              <a href="/about" className="hover:text-blue-600">
                About
              </a>
              <a href="/services" className="hover:text-blue-600">
                Services
              </a>
              <a href="/reviews" className="hover:text-blue-600">
                Reviews
              </a>
              <a href="/quote" className="hover:text-blue-600">
                Quote
              </a>
              <a href="/contact" className="hover:text-blue-600">
                Contact
              </a>
            </div>
          </nav>
        </header>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
