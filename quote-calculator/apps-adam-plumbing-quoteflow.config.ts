import { QuoteFlowConfig } from '@trade-websites/quoteflow-core'

/**
 * QuoteFlow Configuration for Adam Plumbing
 * 
 * This file contains all the branding, pricing, and service configuration
 * for Adam Plumbing's website and quote calculator.
 */
export const quoteflowConfig: QuoteFlowConfig = {
  // Client ID - must match database client_id
  clientId: 'adam-plumbing',

  // Branding customization
  branding: {
    primaryColor: '#1E40AF',      // Blue
    secondaryColor: '#DC2626',    // Red accent
    logo: '/logo.png',
    companyName: 'Adam Plumbing',
    favicon: '/favicon.ico'
  },

  // Contact information
  contact: {
    phone: '07925990923',
    email: 'adam@adamplumbing.co.uk',
    whatsapp: '447925990923'
  },

  // Pricing configuration
  pricing: {
    // Base prices for services (in GBP)
    basePrices: {
      'emergency leak repair': 120,
      'boiler service/repair': 150,
      'toilet/tap installation': 80,
      'bathroom installation': 800,
      'drain unblocking': 100,
      'central heating work': 200,
      'radiator installation': 120,
      'water heater repair': 130,
      'pipe repair': 90,
      'shower installation': 300
    },

    // Travel fee configuration
    travelFee: 50,              // Fee amount in GBP
    travelFeeThreshold: 10,     // Distance in miles before fee applies

    // Urgency multipliers
    urgencyMultipliers: {
      standard: 1.0,    // No surcharge
      same_day: 1.2,    // +20%
      emergency: 1.4    // +40%
    }
  },

  // Available services
  services: [
    {
      id: 'emergency-leak',
      name: 'Emergency Leak Repair',
      description: 'Fast response for burst pipes and leaking fixtures',
      basePrice: 120,
      category: 'emergency'
    },
    {
      id: 'boiler',
      name: 'Boiler Service/Repair',
      description: 'Annual servicing and repairs for all boiler types',
      basePrice: 150,
      category: 'heating'
    },
    {
      id: 'toilet-tap',
      name: 'Toilet/Tap Installation',
      description: 'Professional installation of toilets, taps, and fixtures',
      basePrice: 80,
      category: 'installation'
    },
    {
      id: 'bathroom',
      name: 'Bathroom Installation',
      description: 'Complete bathroom renovation and installation',
      basePrice: 800,
      category: 'installation'
    },
    {
      id: 'drain',
      name: 'Drain Unblocking',
      description: 'Clear blocked drains and pipes',
      basePrice: 100,
      category: 'maintenance'
    },
    {
      id: 'heating',
      name: 'Central Heating Work',
      description: 'Installation and repair of central heating systems',
      basePrice: 200,
      category: 'heating'
    }
  ]
}

export default quoteflowConfig


