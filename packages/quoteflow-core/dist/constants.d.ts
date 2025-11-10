export declare const URGENCY_MULTIPLIERS: {
    readonly standard: 1;
    readonly same_day: 1.2;
    readonly emergency: 1.4;
};
export declare const TRAVEL_FEE_THRESHOLD = 10;
export declare const TRAVEL_FEE_AMOUNT = 25;
export type UrgencyOption = keyof typeof URGENCY_MULTIPLIERS;
export declare const DEFAULT_SERVICE_PRICING: Record<string, number>;
export declare const SUPPORTED_URGENCY_OPTIONS: Array<{
    value: UrgencyOption;
    label: string;
    multiplier: number;
}>;
