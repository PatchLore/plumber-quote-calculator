# QuoteFlow Monorepo - Complete Implementation Guide

## 🎯 Overview

This guide will walk you through implementing the monorepo structure for your QuoteFlow multi-client system.

## 📋 Prerequisites

- Node.js 20+ installed
- npm 10+ installed
- Git repository
- Vercel account
- Supabase project

## 🚀 Step-by-Step Implementation

### Phase 1: Create Monorepo Structure

#### 1.1 Create Directory Structure

```bash
cd /Users/allendunn/Documents/Trade

# Create monorepo root
mkdir trade-websites
cd trade-websites

# Create main directories
mkdir -p apps packages

# Create package directories
mkdir -p packages/quoteflow-core/src/lib
mkdir -p packages/quoteflow-core/src/hooks
mkdir -p packages/database/src
mkdir -p packages/database/migrations

# Create Adam Plumbing app
mkdir -p apps/adam-plumbing/src/app/calculator
mkdir -p apps/adam-plumbing/public
```

#### 1.2 Copy Configuration Files

I've generated all the configuration files with the prefix showing their location:
- `trade-websites-package.json` → `trade-websites/package.json`
- `turbo.json` → `trade-websites/turbo.json`
- `packages-quoteflow-core-package.json` → `trade-websites/packages/quoteflow-core/package.json`
- `apps-adam-plumbing-package.json` → `trade-websites/apps/adam-plumbing/package.json`
- etc.

Move each file to its correct location based on the prefix.

#### 1.3 Initialize Monorepo

```bash
cd /Users/allendunn/Documents/Trade/trade-websites

# Install dependencies
npm install

# This will install Turborepo and set up workspaces
```

### Phase 2: Set Up Packages

#### 2.1 Copy QuoteFlow Core Package Files

Copy all files prefixed with `packages-quoteflow-core-` to the correct locations:

```bash
# Example structure:
packages/quoteflow-core/
├── package.json
├── tsconfig.json
└── src/
    ├── index.ts
    ├── lib/
    │   ├── types.ts
    │   └── pricing.ts
    └── hooks/
        └── useQuoteFlow.ts
```

#### 2.2 Copy Database Package Files

Copy all files prefixed with `packages-database-` to:

```bash
packages/database/
├── package.json
├── src/
│   ├── index.ts
│   ├── client.ts
│   ├── types.ts
│   └── leads.ts
└── migrations/
    └── 001_multi_tenant_setup.sql
```

### Phase 3: Set Up Supabase Multi-Tenancy

#### 3.1 Run Database Migration

1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Copy the contents of `packages/database/migrations/001_multi_tenant_setup.sql`
4. Paste and run the SQL

This will:
- Create `leads` table with `client_id` column
- Set up Row Level Security
- Create indexes for performance
- Set up `client_admins` table

#### 3.2 Add Your Admin User

After running the migration, add yourself as admin:

```sql
-- First, find your user_id
SELECT id, email FROM auth.users WHERE email = 'your@email.com';

-- Then insert admin record (replace YOUR_USER_ID with the actual ID)
INSERT INTO client_admins (user_id, client_id, role) VALUES 
  ('YOUR_USER_ID', 'fixblox', 'admin'),
  ('YOUR_USER_ID', 'adam-plumbing', 'admin');
```

### Phase 4: Set Up Adam Plumbing Website

#### 4.1 Copy Adam Plumbing Files

Copy all files prefixed with `apps-adam-plumbing-` to:

```bash
apps/adam-plumbing/
├── package.json
├── next.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── quoteflow.config.ts
├── .env.local.example
└── src/
    └── app/
        ├── layout.tsx
        ├── page.tsx
        ├── globals.css
        └── calculator/
            └── page.tsx
```

#### 4.2 Configure Environment Variables

```bash
cd apps/adam-plumbing
cp .env.local.example .env.local

# Edit .env.local with your actual values
nano .env.local
```

Add:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
NEXT_PUBLIC_CLIENT_ID=adam-plumbing
```

### Phase 5: Move Existing FixBlox Platform (Optional)

If you want to keep your existing QuoteFlow platform in the monorepo:

```bash
cd /Users/allendunn/Documents/Trade

# Move existing project into monorepo
mv quote-calculator trade-websites/apps/fixblox-platform

# Update its package.json name
cd trade-websites/apps/fixblox-platform
# Change "name" to "fixblox-platform" in package.json
```

### Phase 6: Install Dependencies

```bash
cd /Users/allendunn/Documents/Trade/trade-websites

# Install all dependencies across all workspaces
npm install
```

This will:
- Install root dependencies (Turborepo, etc.)
- Install dependencies for all apps and packages
- Link workspace packages together

### Phase 7: Test Locally

#### 7.1 Test Individual Apps

```bash
# Test Adam Plumbing
cd apps/adam-plumbing
npm run dev
# Opens on http://localhost:3001

# Test FixBlox (if moved)
cd apps/fixblox-platform
npm run dev
# Opens on http://localhost:3000
```

#### 7.2 Test with Turborepo

```bash
# From monorepo root
cd /Users/allendunn/Documents/Trade/trade-websites

# Run all apps in dev mode
npm run dev

# Build all apps
npm run build
```

### Phase 8: Deploy to Vercel

#### 8.1 Deploy Adam Plumbing

1. Go to vercel.com/new
2. Import your Git repository
3. Configure project:
   - **Root Directory**: `apps/adam-plumbing`
   - **Framework**: Next.js
   - **Build Command**: `cd ../.. && npx turbo run build --filter=adam-plumbing`
   - **Output Directory**: `.next`

4. Add Environment Variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
   NEXT_PUBLIC_CLIENT_ID=adam-plumbing
   ```

5. Deploy!

#### 8.2 Deploy FixBlox Platform (if needed)

Repeat same process but with:
- **Root Directory**: `apps/fixblox-platform`
- **Build Command**: `cd ../.. && npx turbo run build --filter=fixblox-platform`
- **CLIENT_ID**: `fixblox`

### Phase 9: Connect Custom Domains

1. In Vercel project settings
2. Add custom domain (e.g., www.adamplumbing.co.uk)
3. Update DNS records as instructed by Vercel

## 🎨 Customizing for New Clients

### Quick Setup (5 minutes)

```bash
cd /Users/allendunn/Documents/Trade/trade-websites/apps

# 1. Copy template
cp -r adam-plumbing new-client-name

# 2. Update configuration
cd new-client-name
nano quoteflow.config.ts
# Change: clientId, branding colors, company name, pricing, etc.

# 3. Update package.json
nano package.json
# Change: "name": "new-client-name"

# 4. Update .env.local
nano .env.local
# Change: NEXT_PUBLIC_CLIENT_ID=new-client-name

# 5. Test locally
npm run dev

# 6. Deploy to Vercel
# Follow Phase 8 instructions
```

### Customization Checklist

- [ ] `quoteflow.config.ts` - All branding and pricing
- [ ] `package.json` - Project name
- [ ] `.env.local` - CLIENT_ID
- [ ] `src/app/layout.tsx` - Metadata (title, description, URL)
- [ ] `public/logo.png` - Company logo
- [ ] `public/favicon.ico` - Favicon

## 🔧 Updating QuoteFlow Core

When you need to update the calculator logic for ALL clients:

```bash
cd packages/quoteflow-core

# Edit files (e.g., src/lib/pricing.ts)
nano src/lib/pricing.ts

# Commit changes
git add .
git commit -m "Update pricing calculation logic"
git push

# All client sites will rebuild with new logic automatically
```

## 📊 Database Queries

### View All Leads for Adam Plumbing

```sql
SELECT * FROM leads 
WHERE client_id = 'adam-plumbing' 
ORDER BY created_at DESC;
```

### Get Lead Counts by Client

```sql
SELECT 
  client_id, 
  COUNT(*) as total_leads,
  COUNT(CASE WHEN status = 'won' THEN 1 END) as won_leads
FROM leads 
GROUP BY client_id;
```

### Get Recent Leads Across All Clients

```sql
SELECT 
  client_id,
  customer_name,
  service_type,
  quote_amount,
  status,
  created_at
FROM leads 
ORDER BY created_at DESC 
LIMIT 20;
```

## 🐛 Troubleshooting

### "Cannot find module @trade-websites/quoteflow-core"

```bash
# From monorepo root
npm install
# Or rebuild
npx turbo run build
```

### "Module not found" in Vercel Build

Check that your Vercel build command includes the root:
```bash
cd ../.. && npx turbo run build --filter=your-app-name
```

### TypeScript Errors in Apps

Make sure `next.config.ts` has:
```typescript
transpilePackages: ['@trade-websites/quoteflow-core', '@trade-websites/database']
```

### RLS Policy Errors in Supabase

Make sure you've:
1. Run the migration SQL
2. Added your user to `client_admins` table
3. Set correct `client_id` in your env variables

## 📚 Project Structure Reference

```
trade-websites/
├── apps/
│   ├── adam-plumbing/          # Client site 1
│   ├── fixblox-platform/       # Your main platform
│   └── [future-clients]/       # Future client sites
│
├── packages/
│   ├── quoteflow-core/         # Shared calculator logic
│   ├── database/               # Supabase integration
│   └── ui/                     # (Future) Shared UI components
│
├── package.json                # Root workspace config
├── turbo.json                  # Turborepo pipeline
└── README.md
```

## ✅ Success Checklist

Phase 1: Setup
- [ ] Created monorepo structure
- [ ] Installed Turborepo
- [ ] Set up npm workspaces

Phase 2: Packages
- [ ] QuoteFlow core package created
- [ ] Database package created
- [ ] Packages building successfully

Phase 3: Database
- [ ] Ran Supabase migration
- [ ] Multi-tenancy set up
- [ ] Admin access configured

Phase 4: Adam Plumbing
- [ ] App created and configured
- [ ] Environment variables set
- [ ] Runs locally
- [ ] Deployed to Vercel
- [ ] Custom domain connected

## 🎉 You're Done!

You now have:
- ✅ Scalable monorepo architecture
- ✅ Shared QuoteFlow core (update once, applies to all)
- ✅ Multi-tenant database
- ✅ Template for new clients (5-min setup)
- ✅ Independent deployments per client

**Add new clients in 5 minutes. Update core logic once for all clients. Win!**


