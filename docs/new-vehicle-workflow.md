# 4WHEELS Rent a Car — New Vehicle Launch & Verification Workflow

## 1. Purpose & Overview
Pakistan's automotive market evolves rapidly with local assembly updates, new brand entries (BYD, Deepal, Haval, MG, Changan), and electric/hybrid model introductions.

This document defines the official 15-step operational workflow for adding new vehicle models to 4WHEELS Rent a Car's catalog (`src/data/pakistanVehicles.ts`) and core fleet (`src/data/fleet.ts`).

---

## 2. Mandatory 15-Step Vehicle Launch Checklist

When a new vehicle model or variant is launched in Pakistan, execute the following steps in sequence:

1. **Verify Official Pakistan Launch**: Confirm the model is officially launched in Pakistan by an authorized manufacturer or distributor (e.g. Indus Motor Company, Honda Atlas, Pak Suzuki, Hyundai Nishat, BYD Pakistan, Deepal Pakistan, MG Pakistan, Haval Pakistan, Changan Pakistan).
2. **Verify Official Distributor & Local Assembly Status**: Record manufacturer parent company and local assembly / CBU import status.
3. **Record Model Name**: Standardize model naming (e.g., `Corolla Cross`, `Seal`, `S07`, `H6`).
4. **Record Model Variants**: Document all available local variants (e.g., `HEV High Grade`, `AWD Performance`, `RS Turbo`).
5. **Record Engine & Battery Capacity**: Detail exact displacement (cc) for ICE models or battery kWh capacity for EV/PHEV models (e.g., `1,798 cc Dual VVT-i`, `60.48 kWh Blade Battery`).
6. **Record Transmission Type**: Specify exact transmission (`Automatic`, `Manual`, `Dual / CVT`, `Single Speed AT`).
7. **Record Fuel Type**: Categorize fuel type (`Petrol`, `Diesel`, `Hybrid`, `PHEV`, `Electric`).
8. **Record Fuel Tank Capacity & EV Electric Range**: Record fuel tank litres (e.g., `55 Litres`) or WLTP/CLTC electric driving range (e.g., `420 km`).
9. **Record Passenger & Seating Capacity**: Confirm physical seat count (e.g., 4, 5, 7, 13, 22 seats).
10. **Record Official Exterior Colors**: List official manufacturer paint colors available in Pakistan.
11. **Record Official Manufacturer URL**: Attach valid HTTPS link to official Pakistan manufacturer page (e.g., `https://toyota-indus.com/corolla/`).
12. **Add Model Illustration / Image Asset**: Ensure 2D SVG fallback illustration exists in `/public/vehicles/illustrations/` or real vehicle photo is placed in `/public/images/fleet/`.
13. **Set Availability & Verification Status**: Set appropriate status (`Available Through 4WHEELS`, `Check Current Availability`, `Request This Model`, `Currently Unconfirmed`).
14. **Update Vehicle Filters**: Confirm model appears correctly under category filters (`sedan`, `suv`, `hatchback`, `hybrid`, `ev`, `luxury`, `coaster`).
15. **Verify Sitemap & Canonical URL**: Confirm vehicle detail pages (`/vehicles/[brand]/[model]/` or `/fleet/[vehicle]/`) build cleanly and are included in `sitemap-index.xml`.

---

## 3. Fleet Photo Upgrade & Upgrade Priority Workflow

As real 4WHEELS photographic assets become available, replace SVG illustrations progressively.

### Photo Collection Checklist
For every real vehicle photo update, attempt to collect:
1. Front 3/4 View
2. Side Profile View
3. Rear 3/4 View
4. Executive Dashboard / Cockpit
5. Front Passenger Seating
6. Rear Passenger Seating & Legroom
7. Boot / Luggage Cargo Capacity View
8. Instrument Cluster / Battery & Fuel Display
9. Exterior Color Verification

*Note: Do not delay listing a vehicle if only partial photos are available. The 4-tier SVG illustration fallback system automatically handles missing real photos.*

### Progressive Upgrade Priority Sequence
1. **Most-Booked Fleet Vehicles**: Toyota Corolla, Honda Civic, Suzuki Alto.
2. **Featured Vehicles**: Toyota Fortuner, Hilux Revo.
3. **Group Transport Units**: Toyota HiAce Grand Cabin, Toyota Coaster Executive 22-Seater.
4. **Luxury & VIP Vehicles**: Audi A6.
5. **New EV / Hybrid Launches**: BYD Atto 3, Deepal S07, Haval H6 HEV.

---

## 4. Vehicle Availability & Verification Timestamping

Every vehicle record in `src/data/fleet.ts` and `src/data/pakistanVehicles.ts` must maintain:
- `lastVerified`: ISO date string (e.g. `2026-08-18`).
- `status`: Standardized status flag distinguishing Pakistan market availability from 4WHEELS physical fleet availability.

### Approved Status Categories
- **Available Through 4WHEELS**: Physical fleet unit confirmed in 4WHEELS inventory in Johar Town, Lahore.
- **Check Current Availability**: Available unit subject to driver schedule and booking queue.
- **Request This Model**: Catalog model available upon advance reservation or special fleet sourcing.
- **Currently Unconfirmed**: Newly announced Pakistan market model under evaluation.
