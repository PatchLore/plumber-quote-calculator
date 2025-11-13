"use client";
import dynamic from "next/dynamic";

const QuoteFlowPreview = dynamic(() => import("./quote-flow-preview"), {
  ssr: false,
});

export default function QuoteFlowPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900">QuoteFlow Calculator Demo</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          This client template bundles a ready-made calculator using the shared QuoteFlow core
          package. Adjust base prices, urgency multipliers, or messaging centrally and redeploy
          across clients.
        </p>
      </header>
      <QuoteFlowPreview />
    </main>
  );
}
