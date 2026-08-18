# 4WHEELS Rent a Car — Continuous Growth, Search Performance, AI Visibility & CRO Dashboard

## 1. Executive Purpose & Optimization Framework
This document defines the continuous operational, measurement, and optimization system for 4WHEELS Rent a Car (`https://4wheelsrentacar.pk`).

Phase 6 transitions the platform into a data-driven **Measure → Learn → Improve → Refresh → Grow** cycle.

### Core Metrics Tracked Across Channels
- **Organic Search Traffic**: Google & Bing organic clicks, impressions, CTR, and average position.
- **AI Visibility**: Google Generative AI (AI Overviews & AI Mode) impressions and Bing/Copilot AI citations.
- **Booking Conversions**: Booking starts, review screen completions, and structured WhatsApp rental inquiries.
- **Direct Contact & Inquiries**: Phone call clicks (`tel:+923216616644`), corporate inquiries, wedding rental inquiries, coaster/bus group inquiries.
- **User Engagement**: Fleet views, vehicle-detail spec views, Trip Planner starts, and trip cost estimates generated.
- **Content Performance**: Guide article conversions, route page queries, location landing traffic, and content-assisted bookings.
- **Technical & Database Health**: Core Web Vitals (LCP, INP, CLS), indexing status, brand consistency, and vehicle spec freshness (`lastVerified`).

---

## 2. Growth Dashboard Core Metrics Matrix

| Metric Category | Key Indicator | Data Source | Tracking Frequency |
| :--- | :--- | :--- | :--- |
| **Google Search** | Clicks, Impressions, CTR, Position | Google Search Console | Weekly / Monthly |
| **Bing Search** | Clicks, Impressions, CTR | Bing Webmaster Tools | Monthly |
| **Google AI Visibility** | AI Overview Impressions & Mode Exposure | Search Console Generative AI | Monthly |
| **Bing/Copilot AI** | Total Citations, Cited URLs, Top Pages | Bing AI Performance | Monthly |
| **Fleet Engagement** | Fleet Views, Vehicle Specs Views | GA4 (`vehicle_selected`) | Weekly |
| **Trip Planner** | Planner Starts, Estimates Generated | GA4 (`trip_planner_start`, `trip_estimate_generated`) | Weekly |
| **Commercial Funnel** | Booking Starts, Review Reached, WA Clicks | GA4 (`book_trip_start`, `booking_review`, `booking_whatsapp_click`) | Daily / Weekly |
| **Direct Contact** | Call Button Clicks (`tel:+923216616644`) | GA4 (`call_click`) | Daily |
| **Commercial Segments** | Corporate, Bus/Coaster, Wedding | GA4 (`corporate_inquiry`, `bus_inquiry`, `wedding_inquiry`) | Weekly |
| **Content Assisted** | Bookings originating from Guides/Routes | GA4 (`content_to_booking`) | Monthly |

---

## 3. Google Search Console & Search Performance Monitoring

### Performance Monitoring Framework
Performance data is evaluated across 7 days, 28 days, 3 months, previous period, and year-over-year:
- **Queries & Intent**: Track primary high-intent commercial keywords (`rent a car in lahore`, `car rental johartown`, `coaster rental lahore`, `wedding car rental lahore`) and informational queries (`lahore to islamabad toll cost`, `fortuner seating capacity`).
- **Pages Performance**: Identify top landing pages vs underperforming URLs.
- **Device Segmentation**: Mobile vs Desktop performance split (Mobile expected to drive >70% of WhatsApp inquiry handoffs).
- **Country & Location**: Pakistan local search vs overseas Pakistani travel inquiries (UK, UAE, KSA, USA).

---

## 4. Generative AI Search Reporting (Google & Bing)

### Google Generative AI Visibility Tracking
- **AI Overviews & AI Mode**: Monitor pages featured in Google's Generative AI search experiences.
- **Generative AI Discovery**: Track topics and conversational queries where 4WHEELS is cited as a authoritative local rental provider in Lahore/Pakistan.
- **Content Policy**: Never publish artificial, thin, or deceptive content purely for AI manipulation. Focus on factual, verified vehicle specifications, real photo citations, and official service details.

### Bing & Microsoft Copilot AI Performance
- **Total Citations & Cited URLs**: Track which site pages (Fleet, Routes, Guides, Official verification) are cited in Copilot responses.
- **Citation Growth & Loss**: Identify pages gaining or losing visibility in Microsoft Copilot travel recommendations.

---

## 5. Commercial Conversion Funnel & Event Separation

### Primary Rental Conversion Funnel Stages
```
Website Visit
   ↓
Fleet / Guide / Route Landing Page
   ↓
Vehicle / Route Selected (`vehicle_selected` / `plan_this_trip`)
   ↓
Booking Started (`book_trip_start` / `trip_planner_start`)
   ↓
Dates & Trip Details Configured (`booking_dates_selected` / `trip_estimate_generated`)
   ↓
Review Screen Reached (`booking_review`)
   ↓
Structured WhatsApp Inquiry Sent (`booking_whatsapp_click` / `trip_plan_whatsapp_click`)
```

### Strict Event Separation: General vs Commercial Inquiry
To maintain precise CRO analytics, generic support questions are strictly separated from high-intent commercial inquiries:
- **General Support**: `general_whatsapp_click` (Triggered from header, footer, contact page general chat button: "Hi 4WHEELS, I need some assistance.").
- **Commercial Booking**: `booking_whatsapp_click` (Triggered strictly from `/build-your-rental/` review screen with structured vehicle/dates payload).
- **Trip Plan Booking**: `trip_plan_whatsapp_click` (Triggered from `/trip-planner/` with calculated route, fuel, and toll estimate breakdown).

---

## 6. Conversion Rate Optimization (CRO) & Controlled A/B Testing

### Pragmatic CRO Strategy
Targeted tests are conducted without disturbing user clarity or core brand design tokens:
- **Mobile Sticky CTA**: Test primary bottom bar CTA wording (`Book Your Trip` vs `Plan & Book Your Trip`).
- **Fleet Card Actions**: Ensure fleet cards strictly feature `Book Your Trip` and `Call` (`tel:+923216616644`).
- **Trip Planner Position**: Test embedding trip planner estimate widgets directly on popular route pages.
- **Review Page Clarity**: Ensure zero auto-sending; display full summary before handoff to WhatsApp.

---

## 7. Trip Planner & Popular Route Data Utilization

### Demand Identification via Aggregate Anonymous Data
Anonymous, aggregate search and trip planning selections are analyzed monthly to identify genuine traveler demand:
- **Top Planned Routes**: e.g. Lahore → Murree / Galiyat, Lahore → Islamabad, Lahore → Swat.
- **Vehicle Category Demand**: Track ratio of Sedan vs SUV vs Coaster/Bus interest.
- **Actionable Optimization**: Strengthen top-demanded route pages with updated toll data, recommended fleet links, detailed FAQs, and fuel assumptions.

---

## 8. Content Freshness & Classification Framework

Every guide article (`src/data/guides.ts`), route (`src/data/routes.ts`), and location page is classified with a freshness status and `lastReviewed` timestamp:

1. **Fresh**: Fully accurate, recent statistics, verified sources, strong user conversion.
2. **Review Soon**: Nearing 6 months since last data check; fuel/toll assumptions need validation.
3. **Needs Update**: Outdated pricing or superseded vehicle model references present; priority update required.
4. **Outdated**: Outdated information that requires immediate revision or merging.
5. **Archive Candidate**: Consistently low value, zero search impressions, or redundant; candidate for 301 redirect or removal.

---

## 9. Dynamic Petroleum & Toll Rates Refresh Cycle

- **Petroleum Rates (`src/data/rates.ts`)**: Updated following official OGRA bi-monthly notifications.
- **Motorway Tolls (`src/data/rates.ts`)**: Updated following NHA motorway tariff revisions.
- **Hotel & Food Cost Bands**: Periodically reviewed for multi-category planning estimates.
- **Mandatory Disclaimers**: Displayed prominently on `/trip-planner/`: *"Planning estimate only. Final rental prices, fuel usage, tolls, hotel prices and other expenses may vary."*

---

## 10. Brand Protection & Official Identity Consistency

- **Official Domain**: Strictly `https://4wheelsrentacar.pk`. `4wheels.pk` is explicitly prohibited across code, canonicals, and metadata.
- **Brand Confusion Register (`/docs/brand-confusion-register.md`)**: Maintained internally to track lookalike domain registrations, unauthorized showroom listings, or third-party confusion.
- **Automated QA Script (`npm run qa`)**: Runs `scripts/verify-entity-qa.js` to prevent prohibited domain injection, outdated phone numbers, or invalid canonical tags.

---

## 11. Core Web Vitals & Technical Health Standards

- **Largest Contentful Paint (LCP)**: ≤ 2.5 seconds (75th percentile).
- **Interaction to Next Paint (INP)**: ≤ 200 ms.
- **Cumulative Layout Shift (CLS)**: ≤ 0.1.
- **Performance Budget**: Documented in `/docs/performance-budget.md`.

---

## 12. Phase 6 Internal Growth Dashboard Summary

```
====================================================================
4WHEELS RENT A CAR — PHASE 6 INTERNAL DASHBOARD SUMMARY
====================================================================

ORGANIC TRAFFIC      : Tracking Google Search Console & Bing Webmaster Tools
AI VISIBILITY        : Google Generative AI + Bing Copilot Citations Monitored
BOOKINGS             : Funnel active (Start → Dates → Specs → Review → WA Handoff)
TRIP PLANNER         : Interactive Engine Active with OGRA Fuel & NHA Toll Data
FLEET                : 100% Verified Specs (`lastVerified` dates active)
CONTENT              : Classified Freshness Framework Active (`src/data/guides.ts`)
ROUTES               : Data-Driven Expansion Active (`src/data/routes.ts`)
LOCATIONS            : Classified Location System Active (`src/data/locations.ts`)
PERFORMANCE          : LCP ≤ 2.5s | INP ≤ 200ms | CLS ≤ 0.1 Targets Enforced
TECHNICAL HEALTH     : 100% Static Build Pass | Zero Entity QA Errors (`npm run qa`)
====================================================================
```
