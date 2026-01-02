import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const phoneDigits = siteConfig.phone.replace(/\D/g, "");
const internationalPhone = phoneDigits.startsWith("0")
  ? `+44${phoneDigits.slice(1)}`
  : `+${phoneDigits}`;
const whatsappLink = `https://wa.me/${internationalPhone.replace("+", "")}`;

export const metadata: Metadata = {
  title: {
    default: "OnTime CMS 🔵🔥 Heating Experts",
    template: "%s"
  },
  description:
    "Trusted, punctual, and fully insured heating & gas services covering South East London & Kent.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative bg-slate-50 text-slate-900 overflow-x-hidden`}>
        <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between border-b border-slate-200 bg-white px-4 py-4 shadow-sm">
          <Link href="/" className="flex items-center gap-2" aria-label="OnTime CMS">
            <img src="/logo.png" alt="OnTime CMS logo" className="h-12 w-auto md:h-14" />
            <span className="hidden font-semibold text-lg text-slate-900 md:inline">OnTime CMS</span>
          </Link>
          <nav className="flex items-center gap-4 overflow-x-auto text-sm font-semibold text-slate-800 no-scrollbar">
            <Link href="/" className="transition hover:text-blue-600">
              Home
            </Link>
            <Link href="/services" className="transition hover:text-blue-600">
              Services
            </Link>
            <Link href="/reviews" className="transition hover:text-blue-600">
              Reviews
            </Link>
            <Link href="/about" className="transition hover:text-blue-600">
              About
            </Link>
            <Link href="/quote" className="transition hover:text-blue-600">
              Quote
            </Link>
            <Link href="/contact" className="transition hover:text-blue-600">
              Contact
            </Link>
          </nav>
        </header>
        <main className="pt-20">{children}</main>
        <a
          href={whatsappLink}
          className="fixed bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:bg-green-600 sm:h-auto sm:w-auto sm:px-6 sm:py-3"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`WhatsApp ${siteConfig.owner}`}
        >
          <span className="text-xl sm:hidden" aria-hidden="true">
            💬
          </span>
          <span className="hidden font-semibold sm:inline">WhatsApp {siteConfig.owner}</span>
        </a>
      </body>
    </html>
  );
}
