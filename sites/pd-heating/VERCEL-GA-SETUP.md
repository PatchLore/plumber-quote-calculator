# Add Google Analytics to Vercel - FixBlox

## Your Google Analytics Measurement ID
```
G-YL8E7Q9VWY
```

---

## Add to Vercel (Required for Production)

### Option 1: Via Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard:**
   - Visit: https://vercel.com/dashboard
   - Log in if needed

2. **Select Your Project:**
   - Find and click on your **fixblox** or **quote-calculator** project

3. **Navigate to Settings:**
   - Click **"Settings"** tab at the top
   - Click **"Environment Variables"** in the left sidebar

4. **Add New Variable:**
   - Click **"Add New"** button
   - Fill in:
     - **Name:** `NEXT_PUBLIC_GA_MEASUREMENT_ID`
     - **Value:** `G-YL8E7Q9VWY`
     - **Environment:** Check all boxes (Production, Preview, Development)
   - Click **"Save"**

5. **Redeploy Your Site:**
   - Go to **"Deployments"** tab
   - Click the "..." menu on the latest deployment
   - Click **"Redeploy"**
   - OR just push a new commit to trigger deployment

### Option 2: Via Vercel CLI

```bash
cd /Users/allendunn/Documents/Trade/quote-calculator

# Add environment variable
vercel env add NEXT_PUBLIC_GA_MEASUREMENT_ID

# When prompted:
# - Enter value: G-YL8E7Q9VWY
# - Select environments: All (Production, Preview, Development)

# Deploy to production
vercel --prod
```

---

## Verify It's Working

### 1. Check Real-Time Reports (Immediate)
1. Go to Google Analytics: https://analytics.google.com/
2. Click **"Reports"** → **"Realtime"**
3. Open your website in a new tab: https://www.fixblox.com
4. You should see **1 active user** in the Real-time report

### 2. Check in Browser (After Deployment)
1. Visit: https://www.fixblox.com
2. Right-click → **"Inspect"** (or press F12)
3. Go to **"Console"** tab
4. Type: `window.dataLayer`
5. Press Enter
6. You should see an array with Google Analytics data

### 3. Check Page Source
1. Visit: https://www.fixblox.com
2. Right-click → **"View Page Source"**
3. Search (Ctrl+F) for: `G-YL8E7Q9VWY`
4. You should see the Google Analytics script

---

## Timeline

- **Immediate:** After redeployment, GA tracking starts working
- **Real-time data:** Visible in 30 seconds
- **Full reports:** Available after 24-48 hours

---

## Your GA Setup Summary

✅ **Measurement ID:** G-YL8E7Q9VWY  
✅ **Code:** Already integrated in your site  
✅ **Environment Variable:** NEXT_PUBLIC_GA_MEASUREMENT_ID  
⏳ **Waiting for:** Adding to Vercel and redeploying  

---

## Need Help?

If you see an error or it's not working:
1. Make sure variable name is exactly: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
2. Make sure the value is: `G-YL8E7Q9VWY`
3. Make sure you've redeployed after adding the variable
4. Wait 2-3 minutes after deployment for changes to take effect
5. Check Real-time reports in Google Analytics

---

**Status:** Ready to add to Vercel! Follow Option 1 above.

