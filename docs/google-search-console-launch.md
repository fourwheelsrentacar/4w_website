# Google Search Console Launch & Brand Protection Protocol

## Executive Summary
This document provides the exact 15-step Search Console launch protocol for **4WHEELS Rent a Car** on the official production domain (`https://4wheelsrentacar.pk`).

---

## 15-Step Launch Protocol

### Step 1: Confirm Official Production Domain
- Confirm `https://4wheelsrentacar.pk` as the single authoritative production domain.
- Verify that no staging URLs or lookalike domains are configured as production targets.

### Step 2: Verify Domain Property
- Add `4wheelsrentacar.pk` as a Domain Property in Google Search Console via DNS TXT record verification.
- Alternatively, verify URL-prefix property `https://4wheelsrentacar.pk/`.

### Step 3: Submit Official Sitemap
- Submit primary sitemap index: `https://4wheelsrentacar.pk/sitemap-index.xml` (or `sitemap-0.xml`).
- Confirm GSC returns `Success` status with zero parsing errors.

### Step 4: Inspect Homepage
- Perform URL Inspection on `https://4wheelsrentacar.pk/`.
- Verify mobile usability, indexing status, and canonical alignment.

### Step 5: Inspect `/official/` Page
- Inspect `https://4wheelsrentacar.pk/official/`.
- Confirm rich results for Organization and AutoRental structured data.

### Step 6: Inspect `/fleet/` Page
- Inspect `https://4wheelsrentacar.pk/fleet/` and key vehicle detail pages (`/fleet/toyota-corolla/`, `/fleet/honda-civic/`).

### Step 7: Inspect Trip Planner
- Inspect `https://4wheelsrentacar.pk/trip-planner/` to verify interactive estimator tool crawlability.

### Step 8: Inspect Major Service Pages
- Inspect core commercial landing pages:
  - `https://4wheelsrentacar.pk/self-drive-car-rental-lahore/`
  - `https://4wheelsrentacar.pk/car-with-driver-lahore/`
  - `https://4wheelsrentacar.pk/daily-car-rental-lahore/`
  - `https://4wheelsrentacar.pk/monthly-car-rental-lahore/`
  - `https://4wheelsrentacar.pk/lahore-airport-car-rental/`

### Step 9: Inspect Press Releases
- Inspect `/press/` and individual press releases (`/press/official-brand-verification-notice/`, `/press/official-digital-channels-and-website-identity/`).

### Step 10: Inspect Important Guides
- Inspect Knowledge Hub guides (`https://4wheelsrentacar.pk/guides/`).

### Step 11: Check Google-Selected Canonical
- Verify under URL Inspection that `Google-selected canonical` matches `User-declared canonical` (`https://4wheelsrentacar.pk/...`).
- Ensure lookalike domains (e.g. `4wheels.pk`) are never selected as canonical.

### Step 12: Check Indexing Coverage
- Monitor Page Indexing report for any `404`, `noindex`, or canonical redirect errors.

### Step 13: Monitor Structured Data Problems
- Review Unparsable Structured Data & Enhancements report for Organization, AutoRental, LocalBusiness, BreadcrumbList, and NewsArticle schemas.

### Step 14: Monitor Branded Queries
- Track performance for: `4WHEELS Rent a Car`, `4 Wheels Rent a Car Lahore`, `4WHEELS Lahore`, `4wheelrentacar`, `4 Wheels Johar Town`, `4WHEELS official`, `4WHEELS phone`, `4WHEELS WhatsApp`.

### Step 15: Monitor Organic Landing Pages
- Track impressions, clicks, CTR, and positions across core landing pages to ensure search conversion flow.
