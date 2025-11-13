# ✅ Cursor Checklist — Pre-Deployment Verification for Demo Sites

This checklist must be completed **automatically by Cursor** before allowing any new demo site to be deployed.

Use this checklist every time a new plumber demo site is created.

---

## ✅ Checklist Items

### 1. Root package.json Verification

- [ ] Root `package.json` contains **ONLY** `{"private": true}`
- [ ] No `dependencies` field
- [ ] No `devDependencies` field
- [ ] No `scripts` field
- [ ] No `workspaces` field
- [ ] No `packageManager` field
- [ ] No `turbo` field

**Command to verify:**
```bash
cat package.json
# Should output: {"private": true}
```

---

### 2. .gitignore Verification

- [ ] `.gitignore` exists at root
- [ ] Contains `node_modules/`
- [ ] Contains `.next/`
- [ ] Contains `.vercel/`
- [ ] Contains `.turbo/`
- [ ] Contains `*.tsbuildinfo`
- [ ] Contains `sites/*/.next/`
- [ ] Contains `sites/*/node_modules/`
- [ ] Contains `sites/*/.vercel/`

**Command to verify:**
```bash
grep -E "node_modules|\.next|\.vercel|\.turbo" .gitignore
```

---

### 3. Turbo/Workspace Removal Verification

- [ ] No `turbo.json` files exist in repository
- [ ] No `.turbo/` directories exist
- [ ] No `pnpm-workspace.yaml` files exist
- [ ] No `workspaces` fields in any `package.json`
- [ ] No `packageManager` fields in root `package.json`
- [ ] No `turbo` dependencies in any `package.json`

**Commands to verify:**
```bash
find . -name "turbo.json" 2>/dev/null | grep -v node_modules
# Should return nothing

find . -type d -name ".turbo" 2>/dev/null | grep -v node_modules
# Should return nothing

grep -r "\"workspaces\"" --include="package.json" . 2>/dev/null | grep -v node_modules
# Should return nothing

grep -r "\"packageManager\"" --include="package.json" . 2>/dev/null | grep -v node_modules
# Should return nothing
```

---

### 4. Root-Level Next.js Triggers Removal

- [ ] No `app/` directory at root
- [ ] No `pages/` directory at root
- [ ] No `src/` directory at root
- [ ] No `next.config.js` at root
- [ ] No `next.config.ts` at root
- [ ] No `tsconfig.json` at root
- [ ] No `.next/` at root
- [ ] No `node_modules/` at root

**Commands to verify:**
```bash
test -d app && echo "❌ app/ exists" || echo "✅ No app/"
test -d pages && echo "❌ pages/ exists" || echo "✅ No pages/"
test -d src && echo "❌ src/ exists" || echo "✅ No src/"
test -f next.config.js && echo "❌ next.config.js exists" || echo "✅ No next.config.js"
test -f next.config.ts && echo "❌ next.config.ts exists" || echo "✅ No next.config.ts"
test -f tsconfig.json && echo "❌ tsconfig.json exists" || echo "✅ No tsconfig.json"
```

---

### 5. New Site Structure Verification

For the new demo site (e.g., `sites/newclient`):

- [ ] Site folder exists inside `sites/` directory
- [ ] `package.json` exists
- [ ] `next.config.ts` exists
- [ ] `tsconfig.json` exists
- [ ] `postcss.config.mjs` exists
- [ ] `public/` directory exists
- [ ] `src/app/` directory exists
- [ ] No `.git/` directory inside site folder (not a submodule)
- [ ] No `.next/` directory (cleaned before commit)
- [ ] No `node_modules/` directory (cleaned before commit)
- [ ] No `.vercel/` directory (cleaned before commit)

**Commands to verify:**
```bash
SITE_NAME="newclient"  # Replace with actual site name

test -d "sites/$SITE_NAME" && echo "✅ Site folder exists" || echo "❌ Site folder missing"
test -f "sites/$SITE_NAME/package.json" && echo "✅ package.json exists" || echo "❌ package.json missing"
test -f "sites/$SITE_NAME/next.config.ts" && echo "✅ next.config.ts exists" || echo "❌ next.config.ts missing"
test -f "sites/$SITE_NAME/tsconfig.json" && echo "✅ tsconfig.json exists" || echo "❌ tsconfig.json missing"
test -f "sites/$SITE_NAME/postcss.config.mjs" && echo "✅ postcss.config.mjs exists" || echo "❌ postcss.config.mjs missing"
test -d "sites/$SITE_NAME/public" && echo "✅ public/ exists" || echo "❌ public/ missing"
test -d "sites/$SITE_NAME/src/app" && echo "✅ src/app/ exists" || echo "❌ src/app/ missing"
test -d "sites/$SITE_NAME/.git" && echo "❌ .git/ exists (submodule!)" || echo "✅ No .git/ (not submodule)"
test -d "sites/$SITE_NAME/.next" && echo "❌ .next/ exists (should be cleaned)" || echo "✅ No .next/"
test -d "sites/$SITE_NAME/node_modules" && echo "❌ node_modules/ exists (should be cleaned)" || echo "✅ No node_modules/"
test -d "sites/$SITE_NAME/.vercel" && echo "❌ .vercel/ exists (should be cleaned)" || echo "✅ No .vercel/"
```

---

### 6. Site package.json Verification

- [ ] `package.json` contains `"name"` field matching site name
- [ ] `package.json` contains `"next"` in dependencies (version 15+)
- [ ] `package.json` contains correct build scripts:
  - `"dev": "next dev"`
  - `"build": "next build"`
  - `"start": "next start"`
- [ ] `package.json` does **NOT** contain `"workspaces"` field
- [ ] `package.json` does **NOT** contain `"packageManager"` field

**Command to verify:**
```bash
cat sites/$SITE_NAME/package.json | grep -E '"name"|"next"|"build"|"workspaces"|"packageManager"'
```

---

### 7. Build Artifacts Cleanup Verification

- [ ] `.next/` directory removed from site folder
- [ ] `node_modules/` directory removed from site folder
- [ ] `.vercel/` directory removed from site folder
- [ ] `tsconfig.tsbuildinfo` file removed (if exists)
- [ ] `package-lock.json` can be removed (optional, but recommended)

**Command to verify:**
```bash
cd sites/$SITE_NAME
test -d .next && echo "❌ .next/ still exists" || echo "✅ .next/ cleaned"
test -d node_modules && echo "❌ node_modules/ still exists" || echo "✅ node_modules/ cleaned"
test -d .vercel && echo "❌ .vercel/ still exists" || echo "✅ .vercel/ cleaned"
test -f tsconfig.tsbuildinfo && echo "❌ tsconfig.tsbuildinfo still exists" || echo "✅ tsconfig.tsbuildinfo cleaned"
```

---

### 8. Git Status Verification

- [ ] Branch is clean (no uncommitted changes)
- [ ] No build artifacts staged for commit
- [ ] Site files are properly tracked
- [ ] Branch name follows convention: `demo-{site-name}`

**Commands to verify:**
```bash
# Check git status
git status

# Ensure no build artifacts in staging
git status | grep -E "\.next|node_modules|\.vercel"
# Should return nothing

# Verify branch name
git branch --show-current
# Should match: demo-{site-name}
```

---

### 9. Local Build Test Verification

- [ ] Site builds successfully locally
- [ ] No TypeScript errors
- [ ] No missing dependencies
- [ ] Build output shows successful compilation

**Commands to verify:**
```bash
cd sites/$SITE_NAME
rm -rf .next node_modules
npm install
npm run build
# Should output: ✓ Compiled successfully
```

---

### 10. Vercel Configuration Verification

Before deploying, verify Vercel settings:

- [ ] **Root Directory** is set to `sites/{site-name}`
- [ ] **Build Command** is set to `npm run build`
- [ ] **Install Command** is set to `npm install`
- [ ] **Framework Preset** is set to `Next.js`
- [ ] **Output Directory** is set to `.next`

**Vercel Dashboard:**
- Project → Settings → Build & Output Settings

---

## ✅ Automated Verification Script

Run this script to verify all checklist items:

```bash
#!/bin/bash

SITE_NAME="${1:-newclient}"

echo "═══════════════════════════════════════════════════════════════"
echo "✅ Cursor Checklist — Pre-Deployment Verification"
echo "═══════════════════════════════════════════════════════════════"
echo ""

# 1. Root package.json
echo "1. Checking root package.json..."
ROOT_PKG=$(cat package.json)
if [[ "$ROOT_PKG" == '{"private": true}'* ]] || [[ "$ROOT_PKG" == *'"private": true'* ]]; then
  echo "   ✅ Root package.json is minimal"
else
  echo "   ❌ Root package.json contains extra fields"
  exit 1
fi

# 2. Turbo files
echo "2. Checking for Turbo files..."
TURBO_FILES=$(find . -name "turbo.json" 2>/dev/null | grep -v node_modules | wc -l)
if [ "$TURBO_FILES" -eq 0 ]; then
  echo "   ✅ No turbo.json files found"
else
  echo "   ❌ Found $TURBO_FILES turbo.json files"
  exit 1
fi

# 3. Workspace fields
echo "3. Checking for workspace fields..."
WORKSPACE_FIELDS=$(grep -r "\"workspaces\"" --include="package.json" . 2>/dev/null | grep -v node_modules | wc -l)
if [ "$WORKSPACE_FIELDS" -eq 0 ]; then
  echo "   ✅ No workspaces fields found"
else
  echo "   ❌ Found $WORKSPACE_FIELDS workspaces fields"
  exit 1
fi

# 4. Root Next.js triggers
echo "4. Checking root Next.js triggers..."
if [ ! -d "app" ] && [ ! -d "pages" ] && [ ! -d "src" ] && [ ! -f "next.config.js" ] && [ ! -f "next.config.ts" ]; then
  echo "   ✅ No root Next.js triggers"
else
  echo "   ❌ Root Next.js triggers found"
  exit 1
fi

# 5. Site structure
echo "5. Checking site structure for: $SITE_NAME"
if [ -d "sites/$SITE_NAME" ]; then
  echo "   ✅ Site folder exists"
  
  if [ -f "sites/$SITE_NAME/package.json" ]; then
    echo "   ✅ package.json exists"
  else
    echo "   ❌ package.json missing"
    exit 1
  fi
  
  if [ -f "sites/$SITE_NAME/next.config.ts" ]; then
    echo "   ✅ next.config.ts exists"
  else
    echo "   ❌ next.config.ts missing"
    exit 1
  fi
  
  if [ -d "sites/$SITE_NAME/src/app" ]; then
    echo "   ✅ src/app/ exists"
  else
    echo "   ❌ src/app/ missing"
    exit 1
  fi
  
  if [ ! -d "sites/$SITE_NAME/.git" ]; then
    echo "   ✅ No .git/ (not a submodule)"
  else
    echo "   ❌ .git/ exists (is a submodule!)"
    exit 1
  fi
  
  if [ ! -d "sites/$SITE_NAME/.next" ]; then
    echo "   ✅ No .next/ (cleaned)"
  else
    echo "   ⚠️  .next/ exists (should be cleaned)"
  fi
  
  if [ ! -d "sites/$SITE_NAME/node_modules" ]; then
    echo "   ✅ No node_modules/ (cleaned)"
  else
    echo "   ⚠️  node_modules/ exists (should be cleaned)"
  fi
else
  echo "   ❌ Site folder missing"
  exit 1
fi

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "✅ All checks passed! Site is ready for deployment."
echo "═══════════════════════════════════════════════════════════════"
```

---

## 📋 Quick Checklist Summary

Before deploying, ensure:

1. ✅ Root `package.json` = `{"private": true}` only
2. ✅ `.gitignore` excludes build artifacts
3. ✅ No Turbo/workspace configs
4. ✅ No root Next.js triggers
5. ✅ Site has complete Next.js structure
6. ✅ Build artifacts cleaned
7. ✅ Git status clean
8. ✅ Local build succeeds
9. ✅ Vercel Root Directory set correctly

---

**Last Updated:** November 2024  
**Version:** 1.0

