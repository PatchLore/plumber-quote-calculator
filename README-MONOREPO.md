# 🏗️ Trade Websites Monorepo

> **Scalable QuoteFlow architecture for multiple client websites**

## What This Is

A monorepo system that lets you create branded websites for tradesman clients in **5 minutes**, all using the same core QuoteFlow calculator. Update the calculator once, and all client sites get the update.

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Turborepo Monorepo                   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  📦 Shared Packages                                     │
│  ├── quoteflow-core     → Calculator logic & types     │
│  └── database           → Supabase client & operations │
│                                                         │
│  🌐 Client Sites (Apps)                                 │
│  ├── adam-plumbing      → www.adamplumbing.co.uk       │
│  ├── fixblox-platform   → www.fixblox.com              │
│  └── [your-next-client] → www.yourclient.co.uk         │
│                                                         │
└─────────────────────────────────────────────────────────┘
                          ↓
              ┌────────────────────┐
              │  Supabase Database │
              │  (Multi-tenant)    │
              └────────────────────┘
```

## Why Monorepo?

### ✅ Benefits

| Feature | Monorepo | Multiple Repos |
|---------|----------|---------------|
| Update calculator once | ✅ Yes | ❌ Update N times |
| New client setup | ⚡ 5 minutes | 🐌 30+ minutes |
| Bug fixes apply to all | ✅ Auto | ❌ Manual |
| Type safety across projects | ✅ Shared types | ❌ Duplicate types |
| Maintenance | ✅ Easy | ❌ Nightmare |

### 🎯 Perfect For

- Building multiple branded websites with same core features
- White-label SaaS products
- Agency managing multiple client sites
- Feature parity across client sites

### ❌ NOT For

- Completely different products
- Sites needing independent tech stacks
- When clients need source code ownership

## Quick Start

### Prerequisites

```bash
node --version  # Should be v20+
npm --version   # Should be v10+
```

### Installation

```bash
# Clone the repo
git clone <your-repo>
cd trade-websites

# Install all dependencies
npm install

# Start development
npm run dev
```

## Project Structure

```
trade-websites/
├── apps/
│   ├── adam-plumbing/              # Example client site
│   │   ├── src/
│   │   │   └── app/
│   │   │       ├── page.tsx        # Homepage
│   │   │       └── calculator/
│   │   │           └── page.tsx    # Quote calculator
│   │   ├── quoteflow.config.ts     # 🎨 Branding & pricing
│   │   ├── package.json
│   │   └── .env.local
│   │
│   └── fixblox-platform/           # Your main platform
│
├── packages/
│   ├── quoteflow-core/             # 🧮 Core calculator logic
│   │   ├── src/
│   │   │   ├── lib/
│   │   │   │   ├── types.ts        # TypeScript types
│   │   │   │   └── pricing.ts      # Pricing calculations
│   │   │   └── hooks/
│   │   │       └── useQuoteFlow.ts # React hook
│   │   └── package.json
│   │
│   └── database/                   # 💾 Supabase integration
│       ├── src/
│       │   ├── client.ts           # Supabase client
│       │   ├── types.ts            # Database types
│       │   └── leads.ts            # Lead operations
│       ├── migrations/
│       │   └── 001_multi_tenant.sql
│       └── package.json
│
├── package.json                    # Root workspace config
├── turbo.json                      # Build pipeline
└── README.md
```

## Usage

### Development

```bash
# Run all apps
npm run dev

# Run specific app
npm run dev --filter=adam-plumbing

# Build all apps
npm run build

# Lint all apps
npm run lint
```

### Adding a New Client (5 minutes)

```bash
# 1. Copy the template
cd apps
cp -r adam-plumbing new-client-name

# 2. Update branding
cd new-client-name
nano quoteflow.config.ts
# Edit: clientId, colors, company name, pricing

# 3. Update package name
nano package.json
# Change: "name": "new-client-name"

# 4. Set environment variables
nano .env.local
# Change: NEXT_PUBLIC_CLIENT_ID=new-client-name

# 5. Test locally
npm run dev

# 6. Deploy to Vercel
# See IMPLEMENTATION-GUIDE.md
```

### Customization Points

Each client site has ONE config file for all customization:

```typescript
// apps/your-client/quoteflow.config.ts
export const quoteflowConfig = {
  clientId: 'your-client',
  
  branding: {
    primaryColor: '#1E40AF',    // Main brand color
    secondaryColor: '#DC2626',  // Accent color
    logo: '/logo.png',
    companyName: 'Your Client Ltd'
  },
  
  contact: {
    phone: '07925990923',
    email: 'info@yourclient.com',
    whatsapp: '447925990923'
  },
  
  pricing: {
    basePrices: {
      'emergency leak repair': 120,
      'boiler service/repair': 150,
      // ... your services
    },
    travelFee: 50,
    urgencyMultipliers: {
      standard: 1.0,
      same_day: 1.2,
      emergency: 1.4
    }
  }
}
```

That's it! Everything else stays the same.

## Database Setup

### Multi-Tenancy Strategy

All clients share ONE Supabase database with Row Level Security:

```sql
-- Leads table
CREATE TABLE leads (
  id UUID PRIMARY KEY,
  client_id TEXT NOT NULL,  -- 'adam-plumbing', 'fixblox', etc.
  customer_name TEXT,
  customer_email TEXT,
  service_type TEXT,
  quote_amount DECIMAL,
  created_at TIMESTAMP
);

-- Index for fast filtering
CREATE INDEX ON leads(client_id);
```

### Setup

1. Go to your Supabase dashboard
2. Run `packages/database/migrations/001_multi_tenant_setup.sql`
3. Done!

### Querying Data

```typescript
// In any client site
import { submitLead, getLeadsByClient } from '@trade-websites/database'

// Submit a lead
const result = await submitLead('adam-plumbing', {
  customer_name: 'John Doe',
  customer_email: 'john@example.com',
  // ...
})

// Get all leads for this client
const leads = await getLeadsByClient('adam-plumbing')
```

## Deployment

### Vercel Setup (Per Client)

Each client site deploys independently:

1. **Import Project**
   - Connect your Git repo
   - Select root directory: `apps/adam-plumbing`

2. **Build Settings**
   - Framework: Next.js
   - Build Command: `cd ../.. && npx turbo run build --filter=adam-plumbing`
   - Output: `.next`

3. **Environment Variables**
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
   NEXT_PUBLIC_CLIENT_ID=adam-plumbing
   ```

4. **Deploy!**

### Custom Domains

In Vercel project settings:
- Add domain: `www.adamplumbing.co.uk`
- Update DNS records as instructed

## Updating Core Logic

When you fix a bug or add a feature to QuoteFlow:

```bash
# Edit the core package
cd packages/quoteflow-core/src/lib
nano pricing.ts

# Commit and push
git add .
git commit -m "Fix pricing calculation bug"
git push

# All client sites rebuild automatically with the fix! 🎉
```

## Common Tasks

### Add a New Service Type

```typescript
// In packages/quoteflow-core/src/lib/types.ts
export const SERVICE_TYPES = [
  'emergency leak repair',
  'boiler service/repair',
  'new-service-type',  // Add here
] as const
```

Then update each client's pricing in their `quoteflow.config.ts`.

### Update Calculator UI

```typescript
// In packages/quoteflow-core/src/components/ (if you add components)
// Or directly in apps/[client]/src/app/calculator/page.tsx for client-specific changes
```

### Change Database Schema

```sql
-- Create new migration file
-- packages/database/migrations/002_your_change.sql

ALTER TABLE leads ADD COLUMN new_field TEXT;
```

Then run in Supabase dashboard.

## Troubleshooting

### Build Errors

```bash
# Clean and rebuild
npm run clean
npm install
npm run build
```

### Can't Find Packages

```bash
# From root
npm install

# If still broken, try:
rm -rf node_modules apps/*/node_modules packages/*/node_modules
npm install
```

### TypeScript Errors

Make sure each app's `next.config.ts` has:
```typescript
transpilePackages: ['@trade-websites/quoteflow-core', '@trade-websites/database']
```

## Documentation

- **[MONOREPO-SETUP-GUIDE.md](./MONOREPO-SETUP-GUIDE.md)** - Architecture overview
- **[IMPLEMENTATION-GUIDE.md](./IMPLEMENTATION-GUIDE.md)** - Step-by-step setup
- **packages/quoteflow-core/README.md** - Core package API
- **packages/database/README.md** - Database operations

## Tech Stack

- **[Turborepo](https://turbo.build/repo)** - Monorepo build system
- **[Next.js 15](https://nextjs.org/)** - React framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling
- **[Supabase](https://supabase.com/)** - Database & auth
- **[React Hook Form](https://react-hook-form.com/)** - Forms
- **[Zod](https://zod.dev/)** - Validation
- **[Vercel](https://vercel.com/)** - Hosting

## Benefits Summary

| Metric | Value |
|--------|-------|
| New client setup time | ⚡ 5 minutes |
| Update one calculator for N sites | ✅ Yes |
| Shared TypeScript types | ✅ Yes |
| Independent deployments | ✅ Yes |
| Single database, multi-tenant | ✅ Yes |
| Template for new clients | ✅ Yes |

## License

Private - All Rights Reserved

## Support

For questions or issues, contact: your@email.com

---

**Built with ❤️ for tradesman businesses**


