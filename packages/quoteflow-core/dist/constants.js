export const URGENCY_MULTIPLIERS = {
    standard: 1.0,
    same_day: 1.2,
    emergency: 1.4,
};
export const TRAVEL_FEE_THRESHOLD = 10; // miles
export const TRAVEL_FEE_AMOUNT = 25; // currency units
export const DEFAULT_SERVICE_PRICING = {
    'emergency leak repair': 120,
    'boiler service/repair': 150,
    'toilet/tap installation': 80,
    'bathroom installation': 800,
    'drain unblocking': 100,
    'central heating work': 200,
};
export const SUPPORTED_URGENCY_OPTIONS = [
    { value: 'standard', label: 'Standard (1-3 days)', multiplier: URGENCY_MULTIPLIERS.standard },
    { value: 'same_day', label: 'Same Day (+20%)', multiplier: URGENCY_MULTIPLIERS.same_day },
    { value: 'emergency', label: 'Emergency (+40%)', multiplier: URGENCY_MULTIPLIERS.emergency },
];
