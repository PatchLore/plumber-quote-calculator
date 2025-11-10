import { z } from 'zod';
export declare const pricingInputSchema: z.ZodObject<{
    jobType: z.ZodString;
    postcode: z.ZodString;
    urgency: z.ZodEnum<{
        standard: "standard";
        same_day: "same_day";
        emergency: "emergency";
    }>;
    jobDetails: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type PricingInput = z.infer<typeof pricingInputSchema>;
export interface PricingBreakdown {
    basePrice: number;
    urgencySurcharge: number;
    travelFee: number;
    total: number;
}
export interface PricingResult {
    basePrice: number;
    urgencyMultiplier: number;
    urgencySurcharge: number;
    travelFee: number;
    totalPrice: number;
    breakdown: PricingBreakdown;
}
export interface QuotePayload extends PricingInput {
    basePrice: number;
}
export interface QuoteSummary {
    jobType: string;
    totalPrice: number;
    breakdown: PricingBreakdown;
    postcode: string;
    urgency: string;
    details?: string;
}
