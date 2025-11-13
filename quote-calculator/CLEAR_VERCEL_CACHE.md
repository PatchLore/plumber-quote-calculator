# 🔥 How to Clear Vercel Build Cache

## Why This Is Needed
Vercel has cached the previous Turborepo build configuration. Even though the repository is now completely clean, Vercel will continue using the cached configuration until you clear it.

## Step-by-Step Instructions

### For PD Heating Project:

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Find your "PD Heating" project

2. **Clear Build Cache**
   - Click on the project
   - Go to **Settings** tab
   - Click **Build & Output Settings**
   - Scroll down to **Build Cache** section
   - Click **"Clear Build Cache"** button
   - Confirm the action

3. **Verify Settings**
   - **Root Directory**: `sites/pd-heating`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Framework**: Next.js
   - **Install Command**: `npm install`

4. **Redeploy**
   - Click **"Redeploy"** or trigger a new deployment
   - Watch the build logs to confirm it uses `npm run build` (NOT `turbo run build`)

### For OnTime CMS Project:

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Find your "OnTime CMS" project

2. **Clear Build Cache**
   - Click on the project
   - Go to **Settings** tab
   - Click **Build & Output Settings**
   - Scroll down to **Build Cache** section
   - Click **"Clear Build Cache"** button
   - Confirm the action

3. **Verify Settings**
   - **Root Directory**: `sites/ontime-cms`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Framework**: Next.js
   - **Install Command**: `npm install`

4. **Redeploy**
   - Click **"Redeploy"** or trigger a new deployment
   - Watch the build logs to confirm it uses `npm run build` (NOT `turbo run build`)

## What to Look For in Build Logs

### ✅ CORRECT (What you should see):
```
Installing dependencies...
Detected Next.js version: 15.5.4
Running "npm run build"
> pd-heating-plumbing-demo@0.1.0 build
> next build
✓ Compiled successfully
```

### ❌ INCORRECT (What you should NOT see):
```
Detected Turbo. Adjusting default settings...
Running "turbo run build"
Error: Could not resolve workspaces
```

## If Build Still Fails

1. **Double-check Root Directory**
   - It MUST be exactly: `sites/pd-heating` or `sites/ontime-cms`
   - Not just `sites/` or root `/`

2. **Check Build Command**
   - Must be: `npm run build`
   - NOT: `turbo run build` or any Turbo command

3. **Clear Cache Again**
   - Sometimes cache persists, clear it multiple times if needed

4. **Check Recent Commits**
   - Ensure latest commits are deployed
   - Force a new deployment if needed

## Verification Checklist

After clearing cache and redeploying:

- [ ] Build logs show "Running npm run build"
- [ ] Build logs do NOT show "turbo run build"
- [ ] Build completes successfully
- [ ] Site deploys and is accessible
- [ ] No workspace resolution errors

## Support

If issues persist after clearing cache:
1. Check Vercel build logs for specific errors
2. Verify Root Directory is set correctly
3. Ensure latest code is pushed to GitHub
4. Contact Vercel support if needed
