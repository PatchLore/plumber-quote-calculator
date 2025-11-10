import type { PricingInput, QuotePayload, QuoteSummary } from './types';
export declare function calculatePrice(basePrice: number, { postcode, urgency }: PricingInput): {
    basePrice: number;
    urgencyMultiplier: 1 | 1.2 | 1.4;
    urgencySurcharge: number;
    travelFee: number;
    totalPrice: number;
    breakdown: {
        basePrice: number;
        urgencySurcharge: number;
        travelFee: number;
        total: number;
    };
};
export declare function calculateQuote(input: PricingInput, basePrice: number): {
    basePrice: number;
    urgencyMultiplier: 1 | 1.2 | 1.4;
    urgencySurcharge: number;
    travelFee: number;
    totalPrice: number;
    breakdown: {
        basePrice: number;
        urgencySurcharge: number;
        travelFee: number;
        total: number;
    };
};
export declare function generateQuote(payload: QuotePayload): QuoteSummary;
export declare function formatQuoteMessage(summary: QuoteSummary): string;
export declare function validateUserInput(input: PricingInput): import("zod").ZodSafeParseResult<{
    jobType: string;
    postcode: string;
    urgency: "standard" | "same_day" | "emergency";
    jobDetails?: string | undefined;
}>;
