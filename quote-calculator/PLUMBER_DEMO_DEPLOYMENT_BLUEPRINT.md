# ✅ Plumber Demo Deployment Blueprint — Clean Process for All Future Demo Sites

This document standardises how to create, organise, deploy, and manage multiple plumber demo websites inside a single repository (like `plumber-demos`).

**Use this workflow every time you clone EcoFlame to make a new demo.**

---

## ✅ 1. Repo Structure (Always Use This)

Your repo should look exactly like this:

```
plumber-demos/
│
├── package.json        ✅ minimal root file
├── .gitignore          ✅ required
├── PLUMBER_DEMO_DEPLOYMENT_BLUEPRINT.md
├── docs/
│   └── CURSOR_CHECKLIST.md
│
└── sites/
    ├── pd-heating/
    │   ├── package.json
    │   ├── next.config.ts
    │   ├── tsconfig.json
    │   ├── postcss.config.mjs
    │   ├── public/
    │   └── src/app/
    │
    └── ontime-cms/
        ├── package.json
        ├── next.config.ts
        ├── tsconfig.json
        ├── postcss.config.mjs
        ├── public/
        └── src/app/
```

**Key Rules:**
- ✅ Everything exists inside `/sites/.../`
- ✅ Root is **NOT** a Next.js project
- ✅ Each site is **100% standalone**

---

## ✅ 2. Root package.json — Must Always Be This:

```json
{
  "private": true
}
```

**Critical Requirements:**
- ❌ No dependencies
- ❌ No scripts
- ❌ No workspaces
- ❌ No packageManager
- ❌ No Next.js config

This prevents Vercel from thinking the repo is a Turborepo.

---

## ✅ 3. Root .gitignore (Required for All Demos)

```gitignore
# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/
.nyc_output

# Next.js
.next/
out/
build/
dist/

# Production
.vercel/
.turbo/

# Misc
.DS_Store
*.pem
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*

# Local env files
.env*.local
.env
.env.local

# Vercel
.vercel

# TypeScript
*.tsbuildinfo
next-env.d.ts

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

# Prevent accidental large commits
sites/*/.next/
sites/*/node_modules/
sites/*/.vercel/
sites/*/tsconfig.tsbuildinfo
```

This stops broken Vercel builds caused by cached folders being added to Git.

---

## ✅ 4. Creating a New Demo Site (Standard Procedure)

When a new plumber requests a demo:

### ✅ A. Create a new branch

```bash
git checkout -b demo-newclient
```

### ✅ B. Duplicate an existing working site

Inside `/sites/`, duplicate a clean working project, e.g.:

```bash
cp -r sites/pd-heating sites/newclient
```

Or copy from `ecoflame` if you have it as a template:

```bash
cp -r sites/ecoflame sites/newclient
```

### ✅ C. Update branding inside the new folder

Update the following files:

1. **`package.json`**
   - Change `"name"` field to match client (e.g., `"newclient"`)

2. **`src/app/layout.tsx`**
   - Update `metadata.title`
   - Update `metadata.description`
   - Update OpenGraph tags
   - Update Twitter card tags

3. **`src/components/[Client]Layout.tsx`** (rename from template)
   - Update company name
   - Update colors (primary, secondary)
   - Update logo path
   - Update navigation links
   - Update footer content
   - Update contact information

4. **`src/app/page.tsx`**
   - Update hero title
   - Update hero subtitle
   - Update CTA buttons
   - Update trust indicators

5. **`src/components/ReviewsSection.tsx`**
   - Update Checkatrade link

6. **`src/app/contact/page.tsx`**
   - Update WhatsApp number
   - Update email addresses
   - Update form colors to match brand

7. **`public/logo.svg` or `public/logo.png`**
   - Replace with client logo (or placeholder)

8. **`src/app/sitemap.ts`**
   - Update `baseUrl` if needed

9. **Any other branding elements**
   - Service descriptions
   - Footer links
   - Privacy policy references
   - Terms of service references

---

## ✅ 5. Before Committing — Always Clean the Site

Inside the new demo folder:

### ❌ DELETE:

```bash
cd sites/newclient
rm -rf .next/
rm -rf node_modules/
rm -rf .vercel/
rm -f tsconfig.tsbuildinfo
rm -f package-lock.json  # Optional, but recommended for consistency
```

### ✅ KEEP:

- `package.json`
- `next.config.ts`
- `tsconfig.json`
- `postcss.config.mjs`
- `public/` (all contents)
- `src/app/` (all contents)
- Any other source files

---

## ✅ 6. Committing Cleanly

At repo root:

```bash
git add .
git commit -m "✅ Add new demo site: NewClient

- Cloned from pd-heating template
- Updated branding and colors
- Configured contact information
- Cleaned build artifacts"
git push -u origin demo-newclient
```

**Always verify before committing:**
```bash
# Check what will be committed
git status

# Ensure no build artifacts
git status | grep -E "\.next|node_modules|\.vercel"
```

---

## ✅ 7. Deploying to Vercel — ALWAYS SET ROOT DIRECTORY

For each demo site:

### In Vercel Dashboard:

1. **Go to Project → Settings → Build & Output Settings**

2. **Set Root Directory:**
   ```
   sites/newclient
   ```

3. **Verify Build Command:**
   ```
   npm run build
   ```

4. **Verify Install Command:**
   ```
   npm install
   ```

5. **Verify Framework Preset:**
   ```
   Next.js
   ```

6. **Verify Output Directory:**
   ```
   .next
   ```

### What Vercel Will Run:

```bash
cd sites/newclient
npm install
npm run build
```

**This is exactly what we want — native Next.js build, NO Turbo.**

---

## ✅ 8. Clear Vercel Cache IF Something Is Weird

If builds fail or behave unexpectedly:

1. Go to **Vercel → Project → Settings → Build & Output Settings**
2. Click **"Clear Build Cache"**
3. Click **"Redeploy"**

This clears any cached Turborepo detection or old build artifacts.

---

## ✅ 9. What You Should Never Allow Again

### ❌ Never Allow:

- ❌ No Turbo configuration files (`turbo.json`)
- ❌ No root-level Next.js triggers (`app/`, `pages/`, `src/`, `next.config.*`)
- ❌ No nested `.git` folders inside `sites/`
- ❌ No `node_modules/` committed to Git
- ❌ No `.next/` committed to Git
- ❌ No multi-site Turborepo setups
- ❌ No workspace configs in `package.json`
- ❌ No `packageManager` fields in root `package.json`
- ❌ No `workspaces` fields in any `package.json`
- ❌ No root-level dependencies or scripts

This avoids **100% of the problems** you just encountered.

---

## ✅ 10. Cursor Checklist (Automated Verification)

Before allowing any new demo site to be deployed, perform this checklist:

See `docs/CURSOR_CHECKLIST.md` for the automated checklist.

---

## ✅ 11. Testing Local Builds

Before deploying, always test locally:

```bash
cd sites/newclient
rm -rf .next node_modules
npm install
npm run build
```

**Expected output:**
```
✓ Compiled successfully
```

If the build fails, fix the errors before committing.

---

## ✅ 12. Branch Naming Convention

Always use this format for branches:

```
demo-{client-name}
```

Examples:
- `demo-pd-heating`
- `demo-ontime-cms`
- `demo-newclient`
- `demo-john-plumbing`

---

## ✅ 13. Git Workflow

1. **Create feature branch:**
   ```bash
   git checkout -b demo-newclient
   ```

2. **Make changes:**
   - Clone template site
   - Update branding
   - Clean build artifacts

3. **Verify changes:**
   ```bash
   git status
   git diff
   ```

4. **Commit:**
   ```bash
   git add .
   git commit -m "✅ Add new demo site: NewClient"
   ```

5. **Push:**
   ```bash
   git push -u origin demo-newclient
   ```

6. **Deploy on Vercel:**
   - Create new Vercel project
   - Connect to `demo-newclient` branch
   - Set Root Directory to `sites/newclient`

---

## ✅ 14. Common Issues and Solutions

### Issue: Vercel detects Turborepo

**Solution:**
- Verify root `package.json` contains **ONLY** `{"private": true}`
- Verify no `turbo.json` files exist
- Verify no `workspaces` or `packageManager` fields
- Clear Vercel build cache

### Issue: Build fails with "Couldn't find pages or app directory"

**Solution:**
- Verify Root Directory is set to `sites/newclient` (not root)
- Verify `src/app/` exists in the site folder
- Verify `next.config.ts` exists in the site folder

### Issue: Large Git commits

**Solution:**
- Verify `.gitignore` excludes `.next/`, `node_modules/`, `.vercel/`
- Remove these folders before committing:
  ```bash
  rm -rf sites/newclient/.next
  rm -rf sites/newclient/node_modules
  rm -rf sites/newclient/.vercel
  ```

### Issue: Submodule errors

**Solution:**
- Verify no nested `.git` folders in `sites/`
- Remove if found:
  ```bash
  rm -rf sites/newclient/.git
  ```

---

## ✅ 15. Final Notes

With this process:

✅ You can create unlimited demo plumber websites  
✅ Each gets its own Vercel deployment  
✅ No more broken builds  
✅ No more Turbo problems  
✅ No more root-level conflicts  
✅ No more massive Git commits  
✅ No submodule issues  
✅ Clean, scalable system for FixBlox demos  

---

## 📋 Quick Reference

### Create New Demo:
```bash
git checkout -b demo-newclient
cp -r sites/pd-heating sites/newclient
cd sites/newclient
# Update branding
rm -rf .next node_modules .vercel
cd ../..
git add .
git commit -m "✅ Add new demo site: NewClient"
git push -u origin demo-newclient
```

### Deploy on Vercel:
1. Create new project
2. Connect to `demo-newclient` branch
3. Set Root Directory: `sites/newclient`
4. Build Command: `npm run build`
5. Framework: Next.js

---

**Last Updated:** November 2024  
**Version:** 1.0

