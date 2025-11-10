import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "FixBlox Dashboard",
    template: "%s | FixBlox Dashboard",
  },
  description: "Internal dashboard for managing QuoteFlow clients, leads, and deployment status.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
