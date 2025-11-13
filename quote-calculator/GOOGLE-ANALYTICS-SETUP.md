# Google Analytics Setup Guide for www.fixblox.com ✅

## Overview
Google Analytics 4 (GA4) has been integrated into your FixBlox website. This guide will help you complete the setup and start tracking your website traffic.

---

## What Has Been Implemented

### ✅ 1. Google Analytics Component
**Location:** `/src/components/GoogleAnalytics.tsx`

A reusable Next.js component that:
- Loads Google Analytics script asynchronously
- Doesn't block page rendering
- Tracks page views automatically
- Uses environment variables for security

### ✅ 2. Root Layout Integration
**Location:** `/src/app/layout.tsx`

- Google Analytics component added to root layout
- Only loads if GA_MEASUREMENT_ID is provided
- Applies to all pages automatically

### ✅ 3. Environment Variable Setup
**Location:** `env-template.txt`

Added support for `NEXT_PUBLIC_GA_MEASUREMENT_ID` environment variable.

---

## How to Complete Setup

### Step 1: Create Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click **"Start measuring"** or **"Admin"** (if you have an account)
3. Create a new **Property**:
   - **Property name:** FixBlox
   - **Time zone:** United Kingdom
   - **Currency:** GBP (Pound Sterling)
4. Click **"Next"**

### Step 2: Set Up Data Stream

1. Select **"Web"** as the platform
2. Enter your website details:
   - **Website URL:** `https://www.fixblox.com`
   - **Stream name:** FixBlox Main Site
3. Click **"Create stream"**

### Step 3: Get Your Measurement ID

After creating the stream, you'll see your **Measurement ID** at the top right.

It will look like: `G-XXXXXXXXXX` (e.g., `G-1A2B3C4D5E`)

**Copy this ID** - you'll need it in the next step.

### Step 4: Add Measurement ID to Environment Variables

#### For Local Development:
1. Create a `.env.local` file in your project root:
   ```bash
   cd /Users/allendunn/Documents/Trade/quote-calculator
   cp env-template.txt .env.local
   ```

2. Open `.env.local` and update the Google Analytics section:
   ```env
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
   (Replace `G-XXXXXXXXXX` with your actual Measurement ID)

#### For Production (Vercel):
1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your **fixblox** project
3. Go to **Settings** → **Environment Variables**
4. Add a new variable:
   - **Name:** `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - **Value:** `G-XXXXXXXXXX` (your Measurement ID)
   - **Environment:** Select **Production**, **Preview**, and **Development**
5. Click **"Save"**

### Step 5: Deploy to Production

After adding the environment variable to Vercel:

```bash
cd /Users/allendunn/Documents/Trade/quote-calculator
vercel --prod
```

Or trigger a redeploy from the Vercel dashboard.

---

## Verify Google Analytics is Working

### Method 1: Real-Time Reports
1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your **FixBlox** property
3. Navigate to **Reports** → **Realtime**
4. Open your website in a new tab: `https://www.fixblox.com`
5. You should see **1 active user** in the Real-time report

### Method 2: Browser Console
1. Open your website: `https://www.fixblox.com`
2. Open browser DevTools (F12 or Right-click → Inspect)
3. Go to the **Console** tab
4. Type: `window.dataLayer`
5. You should see an array with tracking data

### Method 3: Google Tag Assistant
1. Install [Google Tag Assistant Chrome Extension](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
2. Visit your website
3. Click the Tag Assistant icon
4. You should see your GA4 tag firing

---

## What Google Analytics Will Track

### Automatically Tracked:
- ✅ **Page Views** - Every page visit
- ✅ **User Sessions** - Individual user visits
- ✅ **Traffic Sources** - Where visitors come from (Google, Direct, Social, etc.)
- ✅ **Device Types** - Desktop, Mobile, Tablet
- ✅ **Locations** - Countries and cities of visitors
- ✅ **Browsers** - Chrome, Safari, Firefox, etc.
- ✅ **New vs Returning Users**
- ✅ **Bounce Rate** - Single-page sessions
- ✅ **Average Session Duration**
- ✅ **Page Performance** - Load times

### Pages Tracked:
- `/` - Homepage
- `/quoteflow` - QuoteFlow landing page
- `/quoteflow/calculator` - Quote calculator
- `/contact` - Contact page
- `/privacy` - Privacy policy
- `/terms` - Terms of service
- And all other pages automatically

---

## Custom Event Tracking (Optional Enhancement)

Want to track specific actions? Add custom events:

### Track Button Clicks

Add this to any button you want to track:

```tsx
onClick={() => {
  // Track with Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'button_click', {
      event_category: 'engagement',
      event_label: 'Get Quote Button',
      value: 1
    });
  }
  // Your existing onClick logic
}}
```

### Track Form Submissions

In your lead capture form:

```tsx
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  
  // Track form submission
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', {
      event_category: 'conversion',
      event_label: 'Quote Form Submitted',
      value: 1
    });
  }
  
  // Your existing submit logic
};
```

### Track Specific Pages

For custom page view tracking:

```tsx
useEffect(() => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: 'Calculator Page',
      page_path: window.location.pathname,
      page_location: window.location.href
    });
  }
}, []);
```

---

## TypeScript Support (Optional)

Add TypeScript definitions for gtag:

Create `/src/types/gtag.d.ts`:

```typescript
interface Window {
  gtag: (
    command: 'config' | 'event' | 'js' | 'set',
    targetId: string | Date,
    config?: Record<string, any>
  ) => void;
  dataLayer: any[];
}
```

---

## Key Metrics to Monitor

### Traffic Metrics
- **Users** - Total unique visitors
- **Sessions** - Total visits
- **Page Views** - Total pages viewed
- **Bounce Rate** - Percentage leaving after one page
- **Average Session Duration** - Time spent on site

### Acquisition Metrics
- **Traffic Sources** - Organic, Direct, Referral, Social
- **Top Channels** - Which channels bring most traffic
- **Campaign Performance** - If running ads

### Engagement Metrics
- **Most Viewed Pages** - Your top-performing pages
- **User Flow** - How users navigate your site
- **Exit Pages** - Where users leave

### Conversion Metrics (Custom Events)
- **Quote Requests** - Calculator submissions
- **Contact Form Submissions**
- **Button Clicks** - CTA engagement

---

## Important Notes

### Privacy Compliance

Google Analytics is GDPR compliant when configured correctly. Consider:

1. **Cookie Consent Banner** (Optional but recommended):
   - Let users opt-in/out of tracking
   - Use a consent management tool

2. **Privacy Policy** (Already done ✅):
   - Your privacy policy at `/privacy` mentions data collection
   - No additional changes needed

3. **IP Anonymization** (GA4 does this by default):
   - User IP addresses are anonymized automatically

### Data Retention

By default, GA4 keeps data for **14 months**. You can change this:

1. Go to **Admin** → **Data Settings** → **Data Retention**
2. Choose retention period (2 months to 14 months)

---

## Common Issues & Solutions

### Issue: "No data showing in GA"

**Solutions:**
1. Wait 24-48 hours for data to appear in main reports (Real-time should be instant)
2. Check that `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set correctly
3. Verify the Measurement ID is correct (starts with `G-`)
4. Check browser console for errors
5. Ensure you've deployed to production with the environment variable

### Issue: "Tracking script not loading"

**Solutions:**
1. Check that environment variable starts with `NEXT_PUBLIC_`
2. Restart your development server: `vercel dev`
3. Clear browser cache
4. Check ad blockers aren't blocking GA scripts

### Issue: "Can't see my own visits"

**Solutions:**
1. Google Analytics automatically filters out bot traffic
2. Your IP might be filtered - check Real-time reports
3. Use incognito/private browsing mode for testing

---

## Next Steps After Setup

### 1. Set Up Conversions (Goals)
Track important actions:
- Quote form submissions
- Contact form submissions
- Phone number clicks

Go to **Admin** → **Events** → **Create Event**

### 2. Link to Google Search Console
Get search query data:
1. Go to **Admin** → **Product Links**
2. Click **Search Console** → **Link**

### 3. Set Up Alerts
Get notified of traffic spikes/drops:
1. Go to **Admin** → **Custom Alerts**
2. Create alerts for important metrics

### 4. Create Custom Reports
Build reports specific to your business:
- Lead generation performance
- Traffic by trade type
- Calculator completion rates

### 5. Enable Enhanced Measurement
Already enabled by default, but verify:
- Scroll tracking
- Outbound clicks
- Site search
- Video engagement
- File downloads

---

## Monthly Analytics Checklist

Track these metrics monthly:

- [ ] Total users and sessions
- [ ] Top traffic sources
- [ ] Most viewed pages
- [ ] Conversion rates (if events set up)
- [ ] Mobile vs desktop traffic
- [ ] Bounce rate trends
- [ ] Average session duration
- [ ] Geographic distribution
- [ ] New vs returning visitors
- [ ] Traffic growth month-over-month

---

## Resources

- [Google Analytics Documentation](https://support.google.com/analytics/)
- [GA4 Academy](https://analytics.google.com/analytics/academy/)
- [Next.js Analytics Docs](https://nextjs.org/docs/app/building-your-application/optimizing/analytics)
- [GA4 Event Reference](https://developers.google.com/analytics/devguides/collection/ga4/reference/events)

---

## Files Modified

| File | Changes |
|------|---------|
| `/src/components/GoogleAnalytics.tsx` | Created - GA4 tracking component |
| `/src/app/layout.tsx` | Updated - Added GA component |
| `env-template.txt` | Updated - Added GA_MEASUREMENT_ID |

---

## Quick Reference

### Your Setup:
- **Website:** www.fixblox.com
- **Environment Variable:** `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- **Value Format:** `G-XXXXXXXXXX`
- **Production:** Set in Vercel Dashboard
- **Local:** Set in `.env.local`

### Verification:
- **Real-time Reports:** [analytics.google.com](https://analytics.google.com/)
- **Browser Console:** `window.dataLayer`
- **View Source:** Look for `gtag/js?id=G-`

---

## Support

If you need help:
1. Check Google Analytics Real-time reports
2. Inspect browser console for errors
3. Verify environment variable is set
4. Test in incognito mode
5. Wait 24-48 hours for full data

**Status:** ✅ Google Analytics code is ready - just add your Measurement ID!

---

**Last Updated:** October 13, 2025  
**Google Analytics Status:** ✅ READY FOR MEASUREMENT ID

