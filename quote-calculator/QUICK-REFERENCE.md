# QuoteFlow Monorepo - Quick Reference Card

## 🚀 Common Commands

```bash
# Development
npm run dev                          # Run all apps
npm run dev --filter=adam-plumbing   # Run specific app

# Building
npm run build                        # Build all
npm run build --filter=adam-plumbing # Build specific

# Maintenance
npm run lint                         # Lint all
npm run clean                        # Clean all builds
```

## 📁 File Locations

### Where to edit what:

| What to Change | File Location |
|---------------|---------------|
| Calculator logic | `packages/quoteflow-core/src/lib/pricing.ts` |
| Client branding | `apps/[client]/quoteflow.config.ts` |
| Homepage | `apps/[client]/src/app/page.tsx` |
| Calculator UI | `apps/[client]/src/app/calculator/page.tsx` |
| Database schema | `packages/database/migrations/*.sql` |
| Lead operations | `packages/database/src/leads.ts` |

## 🎨 New Client Setup (Copy-Paste)

```bash
# 1. Copy template
cp -r apps/adam-plumbing apps/new-client

# 2. Update config
cd apps/new-client
nano quoteflow.config.ts
# Change: clientId, companyName, colors, pricing

# 3. Update package.json
nano package.json
# Change: "name": "new-client"

# 4. Set environment
nano .env.local
# Add:
# NEXT_PUBLIC_SUPABASE_URL=your_url
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
# NEXT_PUBLIC_CLIENT_ID=new-client

# 5. Test
npm run dev

# 6. Deploy to Vercel
# Root Dir: apps/new-client
# Build: cd ../.. && npx turbo run build --filter=new-client
```

## 🗄️ Database Queries

```sql
-- View all leads for a client
SELECT * FROM leads 
WHERE client_id = 'adam-plumbing' 
ORDER BY created_at DESC;

-- Get lead counts
SELECT client_id, COUNT(*) as total 
FROM leads 
GROUP BY client_id;

-- Recent leads across all clients
SELECT * FROM leads 
ORDER BY created_at DESC 
LIMIT 20;
```

## 🔧 Troubleshooting

| Problem | Solution |
|---------|----------|
| Can't find module | `npm install` from root |
| Build fails | `npm run clean && npm install && npm run build` |
| Vercel build fails | Check build command includes `cd ../..` |
| TypeScript errors | Check `transpilePackages` in `next.config.ts` |
| Database access denied | Check RLS policies and `client_admins` table |

## 📦 Package Imports

```typescript
// In any client app:

// QuoteFlow core
import { 
  useQuoteFlow,
  calculateQuote,
  formatPrice,
  type QuoteFlowConfig 
} from '@trade-websites/quoteflow-core'

// Database
import { 
  submitLead,
  getLeadsByClient,
  updateLeadStatus 
} from '@trade-websites/database'

// Client config
import { quoteflowConfig } from '../quoteflow.config'
```

## 🎯 Customization Checklist

For each new client:

- [ ] `quoteflow.config.ts` - Update all branding & pricing
- [ ] `package.json` - Update name
- [ ] `.env.local` - Set CLIENT_ID and Supabase vars
- [ ] `src/app/layout.tsx` - Update metadata URL
- [ ] `public/logo.png` - Add client logo
- [ ] `public/favicon.ico` - Add favicon
- [ ] Test locally with `npm run dev`
- [ ] Deploy to Vercel
- [ ] Add custom domain

## 🚢 Deployment Checklist

Per client in Vercel:

1. Import Git repository
2. Root Directory: `apps/[client-name]`
3. Framework: Next.js
4. Build Command: `cd ../.. && npx turbo run build --filter=[client-name]`
5. Output: `.next`
6. Environment Variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_CLIENT_ID`
7. Deploy!
8. Add custom domain in settings

## 📊 Pricing Configuration

```typescript
// In apps/[client]/quoteflow.config.ts
pricing: {
  basePrices: {
    'service-name': price_in_gbp,
  },
  travelFee: 50,              // Fee in GBP
  travelFeeThreshold: 10,     // Distance in miles
  urgencyMultipliers: {
    standard: 1.0,    // No charge
    same_day: 1.2,    // +20%
    emergency: 1.4    // +40%
  }
}
```

## 🎨 Branding Configuration

```typescript
// In apps/[client]/quoteflow.config.ts
branding: {
  primaryColor: '#1E40AF',     // Main brand color
  secondaryColor: '#DC2626',   // Accent color
  logo: '/logo.png',
  companyName: 'Client Name'
}
```

## 🔐 Environment Variables

### All Apps Need:
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx
NEXT_PUBLIC_CLIENT_ID=your-client-id
```

### Optional (for email notifications):
```env
EMAIL_FROM=noreply@client.com
EMAIL_TO=admin@client.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@email.com
SMTP_PASS=your_app_password
```

## 🆘 Quick Support

**Documentation:**
- Full setup: `IMPLEMENTATION-GUIDE.md`
- Architecture: `MONOREPO-SETUP-GUIDE.md`
- Overview: `README-MONOREPO.md`

**Common Issues:**
1. Module not found → `npm install`
2. Build errors → `npm run clean && npm install`
3. Database errors → Check Supabase migration ran
4. Vercel errors → Check build command syntax

**File Structure:**
```
trade-websites/
├── apps/           → Client websites
├── packages/       → Shared code
├── turbo.json      → Build config
└── package.json    → Workspace config
```

---

**Need help?** Check the full guides or contact support.


