# Plumber Demo Site Workflow
## EcoFlame → New Client Template

This document outlines the standard process for creating new plumber demo websites by cloning the EcoFlame template.

---

## ✅ 1. Global Setup Rules

### Repository Structure
- **The repository is NOT a Turborepo**
- **Do NOT use workspace features or turbo.json**
- Root `package.json` should contain only:
  ```json
  {
    "name": "plumber-demos",
    "private": true,
    "scripts": {},
    "packageManager": "npm@10.0.0"
  }
  ```
- All dependencies belong inside each site folder, **never at the repo root**

### Vercel Build Requirements
Vercel must only run:
- `npm install`
- `npm run build`

**Do NOT use:**
- `turbo run build`
- `--turbopack` flags in build scripts
- Workspace dependencies

### Build Artifacts to Exclude
Always delete build folders before committing:
- `.next/`
- `node_modules/`
- `.vercel/`
- Cache or temp folders
- Large video or asset files (`.mp4`, `.mov`, etc.)

---

## ✅ 2. Creating a New Plumber Demo

### Step A — Clone EcoFlame

1. **Duplicate the EcoFlame website into a new folder:**
   ```
   /sites/<business-name>
   ```

2. **Use a clean, lowercase, hyphenated folder name:**
   - ✅ Good: `/sites/pd-heating`
   - ✅ Good: `/sites/ontime-cms`
   - ❌ Bad: `/sites/PD_Heating`
   - ❌ Bad: `/sites/new client`

3. **Copy the entire EcoFlame structure:**
   - `src/` folder (all components, pages, layouts)
   - `public/` folder (images, icons, assets)
   - `package.json` (with dependencies)
   - `next.config.ts`
   - `tsconfig.json`
   - `tailwind.config.ts` (if exists)
   - `.env.local.example` (if exists)
   - Any other config files

### Step B — Replace Branding

Update all relevant areas in the new site:

#### Business Identity
- [ ] Business name (replace "EcoFlame" → new company name)
- [ ] Email addresses (info@, contact@, etc.)
- [ ] Phone numbers
- [ ] WhatsApp numbers
- [ ] Checkatrade profile links

#### Visual Branding
- [ ] Logo (create placeholder `/public/logo.svg` or `/public/logo.png`)
- [ ] Colour scheme (update Tailwind config and component styles)
- [ ] Favicon (`/public/icon.png`)

#### Content Updates
- [ ] Homepage hero text (title and subtitle)
- [ ] Service descriptions (adjust if needed for the business)
- [ ] Footer contact details
- [ ] Footer "Powered by FixBlox" attribution

#### Meta Tags & SEO
- [ ] Page titles (`src/app/layout.tsx`)
- [ ] Meta descriptions
- [ ] OpenGraph tags
- [ ] Twitter card tags
- [ ] Sitemap base URL

### Step C — Keep Core Systems Intact

**DO NOT modify or remove:**
- ✅ QuoteFlow calculator (`/quoteflow/calculator`)
- ✅ QuoteFlow embed script (`/quoteflow/embed`)
- ✅ Admin dashboard (`/admin/dashboard`)
- ✅ Admin sign-in (`/admin/sign-in`)
- ✅ WhatsApp integration (components and links)
- ✅ Contact forms (`/contact`)
- ✅ Lead capture API (`/api/leads`)
- ✅ Checkatrade review integration
- ✅ Supabase integration (if used)

### Step D — Remove Unneeded Systems

#### Delete Blog System Entirely
Remove these folders and files:
- [ ] `/src/app/blog/` (entire folder)
- [ ] `/src/app/blog/[slug]/` (entire folder)
- [ ] `/src/app/api/og/blog/` (entire folder)
- [ ] `/src/data/blogPosts.ts` (blog data file)

#### Remove Industry Pages (EcoFlame leftover)
- [ ] `/src/app/industries/` (entire folder)
- [ ] `/src/app/api/og/industry/` (entire folder)
- [ ] `/src/data/industries.ts` (industry data file)

#### Clean Up References
- [ ] Remove blog imports from `sitemap.ts`
- [ ] Remove industry imports from `sitemap.ts`
- [ ] Update `sitemap.ts` with correct static routes
- [ ] Remove any blog/industry links from navigation
- [ ] Remove any blog/industry links from footer

---

## ✅ 3. Cleanup Before Deployment

### Inside the new site folder, remove:
- [ ] `.next/` folder (build output)
- [ ] `node_modules/` folder (dependencies - will be reinstalled)
- [ ] `.vercel/` folder (deployment config)
- [ ] `.turbo/` folder (if exists)
- [ ] `tsconfig.tsbuildinfo` files
- [ ] Large video files (`.mp4`, `.mov`, `.avi`)
- [ ] Large HTML documentation files

### Verify EcoFlame References Removed
Search the entire site folder for:
- [ ] "EcoFlame" text (should be replaced with new business name)
- [ ] "eco-flame" slugs
- [ ] Old email addresses
- [ ] Old phone numbers
- [ ] Old logo references

### Update `.gitignore`
Ensure `.gitignore` at repo root excludes:
```
node_modules/
.next/
.vercel/
.turbo/
*.tsbuildinfo
*.mp4
*.mov
.env*.local
```

---

## ✅ 4. Build Verification

### Inside the site folder, run locally:

```bash
cd sites/<business-name>
npm install
npm run build
```

### Confirm:
- [ ] ✅ No TypeScript errors
- [ ] ✅ No Turbo errors
- [ ] ✅ No missing imports
- [ ] ✅ No broken routes
- [ ] ✅ Build completes successfully
- [ ] ✅ All pages generate correctly
- [ ] ✅ Sitemap generates correctly

### Expected Build Output:
```
✓ Compiled successfully
✓ Generating static pages (X/X)
✓ Build completed successfully
```

---

## ✅ 5. Deployment Instructions

### When deploying to Vercel:

#### Project Settings:
- **Project Name:** Use the business name (e.g., `pd-heating-demo`)
- **Root Directory:** `sites/<business-folder>`
- **Framework:** Next.js
- **Node Version:** 20.x (or latest LTS)

#### Build Settings:
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install` (default)

#### Environment Variables:
Add any required environment variables:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_WHATSAPP`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` (if using Google Analytics)

#### After Deployment:
- [ ] Verify the live URL works correctly
- [ ] Test QuoteFlow calculator
- [ ] Test contact form
- [ ] Test WhatsApp links
- [ ] Verify admin dashboard access
- [ ] Check mobile responsiveness

---

## ✅ 6. Final Output to Provide

For each demo site, prepare:

### Documentation:
- [ ] Summary of what was cloned and customised
- [ ] List of branding changes made
- [ ] List of files/folders removed
- [ ] Confirmed build success report

### Deployment Info:
- [ ] Live Vercel preview link
- [ ] Production URL (if custom domain configured)
- [ ] Admin dashboard URL
- [ ] Environment variables list

### Branding Assets:
- [ ] Logo files (SVG, PNG versions)
- [ ] Colour palette (hex codes)
- [ ] Font choices (if custom)
- [ ] Brand guidelines (if provided)

### Notes:
- [ ] Client feedback or edit requests
- [ ] Known issues or limitations
- [ ] Future enhancement suggestions
- [ ] Integration requirements (if any)

---

## ✅ 7. Git Workflow

### Branch Strategy:
1. Create a new branch for each demo: `demo-<business-name>`
2. Commit all changes to that branch
3. Push to GitHub
4. Create Vercel project from that branch

### Commit Message Format:
```
Create <Business Name> demo site

- Clone EcoFlame template
- Update branding and content
- Remove blog system
- Verify build passes
- Ready for Vercel deployment
```

### Files to Commit:
- ✅ All source code (`src/`)
- ✅ Configuration files (`package.json`, `next.config.ts`, etc.)
- ✅ Public assets (`public/`)
- ✅ Documentation files

### Files to NOT Commit:
- ❌ `.next/` folder
- ❌ `node_modules/` folder
- ❌ `.vercel/` folder
- ❌ `.env.local` files
- ❌ Build artifacts

---

## ✅ 8. Common Issues & Solutions

### Issue: "No Next.js version detected" in Vercel
**Solution:**
- Verify Root Directory is set to `sites/<business-name>`
- Ensure `package.json` exists in that folder
- Check that `package.json` has `"next"` in dependencies

### Issue: "Turborepo detected" in Vercel
**Solution:**
- Remove `turbo.json` from repo root
- Ensure root `package.json` has `"packageManager": "npm@10.0.0"`
- Verify no workspace configuration exists

### Issue: Build fails with missing imports
**Solution:**
- Check that all blog/industry imports are removed
- Verify `sitemap.ts` doesn't import deleted data files
- Run `npm install` to ensure all dependencies are installed

### Issue: TypeScript errors after cloning
**Solution:**
- Remove blog-related files completely
- Update imports in remaining files
- Verify all data files are present or removed

---

## ✅ 9. Checklist Summary

### Pre-Deployment Checklist:
- [ ] Site cloned from EcoFlame
- [ ] All branding updated
- [ ] Blog system removed
- [ ] Industry pages removed
- [ ] Build artifacts deleted
- [ ] EcoFlame references removed
- [ ] Build passes locally
- [ ] Git branch created and pushed
- [ ] Vercel project configured
- [ ] Environment variables set
- [ ] Live site verified

---

## 📝 Example: PD Heating Demo

### What was done:
1. ✅ Cloned EcoFlame to `/sites/pd-heating`
2. ✅ Updated branding (name, colours, logo)
3. ✅ Removed blog system
4. ✅ Removed industry pages
5. ✅ Updated sitemap
6. ✅ Verified build passes
7. ✅ Deployed to Vercel

### Branding changes:
- Business name: "PD Heating & Plumbing"
- Colours: Deep blue (#1E3A8A), Light blue (#3B82F6)
- WhatsApp: +447000000000
- Checkatrade: https://www.checkatrade.com/pdheating

### Files removed:
- `src/app/blog/`
- `src/app/api/og/blog/`
- `src/app/industries/`
- `src/data/blogPosts.ts`
- `src/data/industries.ts`

### Build status:
- ✅ TypeScript: Passed
- ✅ Build: Successful
- ✅ Deployment: Live

---

## 🎯 Quick Reference

### Folder Structure:
```
/sites/
  ├── ecoflame/          (template)
  ├── pd-heating/        (demo 1)
  └── ontime-cms/        (demo 2)
```

### Key Files to Update:
- `src/app/layout.tsx` (metadata, title)
- `src/app/page.tsx` (homepage content)
- `src/components/*Layout.tsx` (navigation, footer)
- `src/app/sitemap.ts` (routes)
- `public/logo.svg` (logo)

### Key Files to Delete:
- `src/app/blog/`
- `src/app/api/og/blog/`
- `src/app/industries/`
- `src/data/blogPosts.ts`
- `src/data/industries.ts`

---

**Last Updated:** 2025-01-07  
**Maintained by:** Development Team

