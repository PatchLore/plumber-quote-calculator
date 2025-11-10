import type { PricingInput, PricingResult, QuotePayload, QuoteSummary } from './types';
import { pricingInputSchema } from './types';
import { TRAVEL_FEE_AMOUNT, TRAVEL_FEE_THRESHOLD, URGENCY_MULTIPLIERS } from './constants';

function calculateDistance(postcode: string): number {
  const hash = postcode
    .replace(/\s+/g, '')
    .toUpperCase()
    .split('')
    .reduce((acc, char) => {
      acc = (acc << 5) - acc + char.charCodeAt(0);
      return acc & acc;
    }, 0);

  return Math.abs(hash) % 20 + 5;
}

export function calculatePrice(basePrice: number, { postcode, urgency }: PricingInput) {
  const urgencyMultiplier = URGENCY_MULTIPLIERS[urgency];
  const urgencySurcharge = basePrice * (urgencyMultiplier - 1);

  const distance = calculateDistance(postcode);
  const travelFee = distance > TRAVEL_FEE_THRESHOLD ? TRAVEL_FEE_AMOUNT : 0;

  const totalPrice = basePrice + urgencySurcharge + travelFee;

  return {
    basePrice,
    urgencyMultiplier,
    urgencySurcharge,
    travelFee,
    totalPrice,
    breakdown: {
      basePrice,
      urgencySurcharge,
      travelFee,
      total: totalPrice,
    },
  } satisfies PricingResult;
}

export function calculateQuote(input: PricingInput, basePrice: number) {
  return calculatePrice(basePrice, input);
}

export function generateQuote(payload: QuotePayload): QuoteSummary {
  const input: PricingInput = {
    jobType: payload.jobType,
    postcode: payload.postcode,
    urgency: payload.urgency,
    jobDetails: payload.jobDetails,
  };

  const pricing = calculatePrice(payload.basePrice, input);

  return {
    jobType: payload.jobType,
    totalPrice: pricing.totalPrice,
    breakdown: pricing.breakdown,
    postcode: payload.postcode,
    urgency: payload.urgency,
    details: payload.jobDetails,
  };
}

export function formatQuoteMessage(summary: QuoteSummary): string {
  return [
    `Quote Summary for ${summary.jobType}`,
    `Total: £${summary.breakdown.total.toFixed(0)}`,
    `Base Price: £${summary.breakdown.basePrice.toFixed(0)}`,
    summary.breakdown.urgencySurcharge
      ? `Urgency Surcharge: £${summary.breakdown.urgencySurcharge.toFixed(0)}`
      : null,
    summary.breakdown.travelFee
      ? `Travel Fee: £${summary.breakdown.travelFee.toFixed(0)}`
      : null,
    `Postcode: ${summary.postcode.toUpperCase()}`,
    `Urgency: ${summary.urgency}`,
    summary.details ? `Details: ${summary.details}` : null,
  ]
    .filter(Boolean)
    .join('\n');
}

export function validateUserInput(input: PricingInput) {
  return pricingInputSchema.safeParse(input);
}
