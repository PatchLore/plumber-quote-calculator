# 🧰 FixBlox 2.0 — AI-Assisted QuoteFlow Automation Roadmap (Technical Document for Cursor)

---

## ✅ Project Summary

FixBlox 2.0 transforms QuoteFlow into a fully automated, AI-driven B2B SaaS platform for trade professionals (plumbers, electricians, builders, roofers, heating engineers). The system automates client communication, schedules jobs, generates quotes, integrates supplier pricing, and provides a WhatsApp-based communication and booking pipeline.

---

# ✅ Core Objectives

* Automate manual quoting and job scheduling for tradespeople.
* Reduce communication friction between customers and businesses.
* Integrate supplier pricing APIs for real-time material cost calculations.
* Build a WhatsApp chatbot to handle enquiries, booking flows, and FAQs.
* Provide an admin dashboard for trades to manage leads, quotes, jobs, invoices.
* Deliver recurring revenue via subscription (SaaS) model.

---

# ✅ Milestones & Phases

## **Phase 1 — Core Rebuild & Data Structure (Backend Foundation)**

### Tasks

* Set up Next.js 15 + Supabase project (auth + database).
* Create DB schema for:

  * users (tradespeople)
  * clients (customers)
  * quotes
  * materials
  * jobs
  * suppliers
  * chat_history
  * ai_logs

* Implement RLS + secure access per trade account.
* Add Supabase storage for job photos/documents.

---

## **Phase 2 — AI Quoting Engine (Smart Quote Generator)**

### Tasks

* Build input form for: job description, location, photos.
* Implement AI estimation pipeline using OpenAI API (ChatCompletion + Function Calling):

  * Extract job type
  * Estimate labour time
  * Estimate cost range
  * Suggest materials

* Map AI-generated materials list to local supplier database.
* Output structured quote JSON.

### Output Format Example

```
{
  "job_type": "boiler replacement",
  "labour_hours": 6,
  "materials": [
    {"name": "Combi Boiler 30kW", "price": 880},
    {"name": "Copper pipe 15mm", "price": 25}
  ],
  "total_cost": 1460,
  "estimated_duration": "1 day"
}
```

---

## **Phase 3 — Supplier Pricing Integration (Live Pricing)**

### Tasks

* Create supplier pricing model (for MVP: manually seeded CSV or JSON).
* Add Supplier module in dashboard:

  * Add/edit/remove suppliers
  * Update material pricing

* Later phase: integrate real supplier APIs (e.g., Wolseley, Screwfix scraping endpoints).

---

## **Phase 4 — AI Scheduling Engine (Automated Job Booking)**

### Tasks

* Build calendar UI for trades.
* Build availability model (working hours, days off).
* AI determines best slot based on:

  * job duration
  * geolocation distance (client address vs previous booking)
  * workload

* Auto-create job entry + send confirmation.

### Logic Example

```
if calendar.available_slots >= job_hours:
    assign_slot()
else:
    propose_alternative_slots()
```

---

## **Phase 5 — WhatsApp Bot Automation (Customer Interaction)**

### Tasks

* Integrate WhatsApp Business API.
* Build chatbot flow:

  * Capture enquiry details
  * Ask for photos/videos
  * Trigger AI quoting engine
  * Send estimate
  * Offer available booking slots
  * Confirm booking

* Store chat history in Supabase.

---

## **Phase 6 — Customer Comms Automation (Email + SMS)**

### Tasks

* Add automated reminders for:

  * upcoming appointments
  * quotes not accepted
  * job completion follow-up

* Build message templates.
* Add notification system.

---

## **Phase 7 — Admin Dashboard & Analytics**

### Dashboard Views

* Leads
* Quotes
* Jobs calendar
* Supplier pricing
* Revenue stats
* Conversion funnels

### Features

* Export quotes/invoices as PDF
* Edit job progress
* Add team members
* Staff scheduling

---

## **Phase 8 — Branding & Launch Strategy**

### Tasks

* Build landing page with pricing tiers
* Tiers:

  * Starter — £49/mo
  * Pro — £99/mo
  * Enterprise — £199/mo

* Onboarding emails + tutorial videos
* Demo video automation

---

# ✅ Technical Stack Overview

* **Frontend:** Next.js 15, Tailwind, Shadcn UI
* **Backend/Auth/DB:** Supabase (Postgres + RLS)
* **AI Engine:** OpenAI GPT-5 + function calling
* **Messaging:** WhatsApp Business API, Twilio, Supabase Edge Functions
* **Payments:** Stripe
* **Deployment:** Vercel
* **Versioning:** GitHub + Vercel CI/CD

---

# ✅ Cursor Implementation Instructions (Copy/Paste)

```
Create a new Next.js 15 + Supabase project.
Add database schema for users, clients, quotes, jobs, materials, suppliers.
Implement authentication + role-based access.
Build quoting engine UI (description input, photo upload).
Implement AI quoting function with OpenAI function calling.
Create calendar component + scheduling logic.
Integrate WhatsApp Business API webhook endpoint.
Create admin dashboard with "Quotes", "Jobs", "Suppliers" tabs.
Add Stripe subscription flow.
Deploy to Vercel.
```

---

# ✅ Success Criteria

* Users can send enquiries via WhatsApp.
* AI generates quotes automatically.
* Supplier pricing adjusts total cost.
* Jobs auto-schedule into calendar.
* Admin dashboard updates in real-time.
* Stripe subscriptions active.

---

# ✅ Next Steps

* Build MVP quote generator
* Build WhatsApp pipeline
* Add AI scheduling
* Release to first beta tradesperson

# 🧰 FixBlox 2.0 — AI-Assisted QuoteFlow Automation Roadmap (Technical Document for Cursor)

---

## ✅ Project Summary

FixBlox 2.0 transforms QuoteFlow into a fully automated, AI-driven B2B SaaS platform for trade professionals (plumbers, electricians, builders, roofers, heating engineers). The system automates client communication, schedules jobs, generates quotes, integrates supplier pricing, and provides a WhatsApp-based communication and booking pipeline.

---

# ✅ Core Objectives

* Automate manual quoting and job scheduling for tradespeople.
* Reduce communication friction between customers and businesses.
* Integrate supplier pricing APIs for real-time material cost calculations.
* Build a WhatsApp chatbot to handle enquiries, booking flows, and FAQs.
* Provide an admin dashboard for trades to manage leads, quotes, jobs, invoices.
* Deliver recurring revenue via subscription (SaaS) model.

---

# ✅ Milestones & Phases

## **Phase 1 — Core Rebuild & Data Structure (Backend Foundation)**

### Tasks

* Set up Next.js 15 + Supabase project (auth + database).
* Create DB schema for:

  * users (tradespeople)
  * clients (customers)
  * quotes
  * materials
  * jobs
  * suppliers
  * chat_history
  * ai_logs

* Implement RLS + secure access per trade account.
* Add Supabase storage for job photos/documents.

---

## **Phase 2 — AI Quoting Engine (Smart Quote Generator)**

### Tasks

* Build input form for: job description, location, photos.
* Implement AI estimation pipeline using OpenAI API (ChatCompletion + Function Calling):

  * Extract job type
  * Estimate labour time
  * Estimate cost range
  * Suggest materials

* Map AI-generated materials list to local supplier database.
* Output structured quote JSON.

### Output Format Example

```
{
  "job_type": "boiler replacement",
  "labour_hours": 6,
  "materials": [
    {"name": "Combi Boiler 30kW", "price": 880},
    {"name": "Copper pipe 15mm", "price": 25}
  ],
  "total_cost": 1460,
  "estimated_duration": "1 day"
}
```

---

## **Phase 3 — Supplier Pricing Integration (Live Pricing)**

### Tasks

* Create supplier pricing model (for MVP: manually seeded CSV or JSON).
* Add Supplier module in dashboard:

  * Add/edit/remove suppliers
  * Update material pricing

* Later phase: integrate real supplier APIs (e.g., Wolseley, Screwfix scraping endpoints).

---

## **Phase 4 — AI Scheduling Engine (Automated Job Booking)**

### Tasks

* Build calendar UI for trades.
* Build availability model (working hours, days off).
* AI determines best slot based on:

  * job duration
  * geolocation distance (client address vs previous booking)
  * workload

* Auto-create job entry + send confirmation.

### Logic Example

```
if calendar.available_slots >= job_hours:
    assign_slot()
else:
    propose_alternative_slots()
```

---

## **Phase 5 — WhatsApp Bot Automation (Customer Interaction)**

### Tasks

* Integrate WhatsApp Business API.
* Build chatbot flow:

  * Capture enquiry details
  * Ask for photos/videos
  * Trigger AI quoting engine
  * Send estimate
  * Offer available booking slots
  * Confirm booking

* Store chat history in Supabase.

---

## **Phase 6 — Customer Comms Automation (Email + SMS)**

### Tasks

* Add automated reminders for:

  * upcoming appointments
  * quotes not accepted
  * job completion follow-up

* Build message templates.
* Add notification system.

---

## **Phase 7 — Admin Dashboard & Analytics**

### Dashboard Views

* Leads
* Quotes
* Jobs calendar
* Supplier pricing
* Revenue stats
* Conversion funnels

### Features

* Export quotes/invoices as PDF
* Edit job progress
* Add team members
* Staff scheduling

---

## **Phase 8 — Branding & Launch Strategy**

### Tasks

* Build landing page with pricing tiers
* Tiers:

  * Starter — £49/mo
  * Pro — £99/mo
  * Enterprise — £199/mo

* Onboarding emails + tutorial videos
* Demo video automation

---

# ✅ Technical Stack Overview

* **Frontend:** Next.js 15, Tailwind, Shadcn UI
* **Backend/Auth/DB:** Supabase (Postgres + RLS)
* **AI Engine:** OpenAI GPT-5 + function calling
* **Messaging:** WhatsApp Business API, Twilio, Supabase Edge Functions
* **Payments:** Stripe
* **Deployment:** Vercel
* **Versioning:** GitHub + Vercel CI/CD

---

# ✅ Cursor Implementation Instructions (Copy/Paste)

```
Create a new Next.js 15 + Supabase project.
Add database schema for users, clients, quotes, jobs, materials, suppliers.
Implement authentication + role-based access.
Build quoting engine UI (description input, photo upload).
Implement AI quoting function with OpenAI function calling.
Create calendar component + scheduling logic.
Integrate WhatsApp Business API webhook endpoint.
Create admin dashboard with "Quotes", "Jobs", "Suppliers" tabs.
Add Stripe subscription flow.
Deploy to Vercel.
```

---

# ✅ Success Criteria

* Users can send enquiries via WhatsApp.
* AI generates quotes automatically.
* Supplier pricing adjusts total cost.
* Jobs auto-schedule into calendar.
* Admin dashboard updates in real-time.
* Stripe subscriptions active.

---

# ✅ Next Steps

* Build MVP quote generator
* Build WhatsApp pipeline
* Add AI scheduling
* Release to first beta tradesperson


