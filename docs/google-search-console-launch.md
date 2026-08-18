# Google Search Console Launch & Brand Protection Guide

## Overview
This document outlines the protocol for setting up and managing Google Search Console (GSC) for **4WHEELS Rent a Car**, focusing on brand protection, canonical verification, and indexing monitoring on the official domain `https://4wheelsrentacar.pk`.

---

## 1. Property Verification
1. Verify the Domain property or URL-prefix property for `https://4wheelsrentacar.pk` in Google Search Console.
2. Confirm HTTPS and trailing slash protocol consistency (`site: https://4wheelsrentacar.pk`).
3. Ensure no unrelated domain (e.g. `4wheels.pk`) or staging URL is linked or verified as an official property.

---

## 2. Sitemap Submission
1. Submit the official sitemap URL:
   `https://4wheelsrentacar.pk/sitemap-index.xml`
2. Verify that GSC successfully fetches the sitemap with `Success` status.
3. Confirm that all sitemap URLs match the `https://4wheelsrentacar.pk` domain with trailing slashes.

---

## 3. Immediate URL Inspections
Perform URL Inspection in GSC for key brand pages to verify Google-selected canonicals:
1. `https://4wheelsrentacar.pk/` (Homepage)
2. `https://4wheelsrentacar.pk/official/` (Official Verification)
3. `https://4wheelsrentacar.pk/contact/` (Contact)
4. `https://4wheelsrentacar.pk/about/` (About)
5. `https://4wheelsrentacar.pk/locations/official/` (Official Locations)
6. Primary commercial pages (`/self-drive-car-rental-lahore/`, `/car-with-driver-lahore/`, `/fleet/`).

---

## 4. Canonical Inspection & Anomaly Monitoring
- **Google-selected Canonical Check**: Use URL Inspection -> Coverage to verify that `Google-selected canonical` matches `User-declared canonical`.
- **Lookalike Safeguard**: Ensure Google NEVER selects an unrelated lookalike site (such as `4wheels.pk`) as canonical for any official 4WHEELS page.
- **Reporting**: Record any canonical or indexing anomalies immediately.

---

## 5. Branded Query Performance Monitoring
Set up Search Console Performance filter to monitor branded query impressions and clicks:
- `4WHEELS Rent a Car`
- `4WHEELS Lahore`
- `4 Wheels Rent a Car Lahore`
- `4wheelrentacar`
- `4 Wheels Johar Town`
- `4WHEELS 0321 6616644`

Monitor search queries for unexpected branded landing pages or identity confusion.
