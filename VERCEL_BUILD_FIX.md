# Vercel Build Fix - Critical Steps

## The Issue
Vercel is still detecting Turborepo even though the repo is clean.

## Root Cause
Vercel is using CACHED build configuration from previous deployments.

## The Fix

### 1. Clear Vercel Build Cache
Go to each Vercel project:
- Settings → Build & Output Settings
- Click "Clear Build Cache"
- Click "Redeploy"

### 2. Verify Vercel Project Settings

**For PD Heating:**
- Root Directory: `sites/pd-heating`
- Build Command: `npm run build`
- Output Directory: `.next`
- Framework: Next.js
- Install Command: `npm install`

**For OnTime CMS:**
- Root Directory: `sites/ontime-cms`
- Build Command: `npm run build`
- Output Directory: `.next`
- Framework: Next.js
- Install Command: `npm install`

### 3. Disable Automatic Framework Detection
In Vercel Settings → Build & Output Settings:
- UNCHECK "Automatically detect Framework"
- Manually set Framework to "Next.js"

### 4. If Still Failing
Check Vercel build logs. If you see "turbo run build", it means:
- Vercel cache needs to be cleared
- OR Vercel project settings are incorrect

The repository is CLEAN - no Turbo files exist.
