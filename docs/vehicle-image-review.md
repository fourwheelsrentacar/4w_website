# 4WHEELS Rent a Car — Vehicle Image Accuracy & Generation Verification Matrix

This document provides human-verified model accuracy, generation details, official manufacturer references, image sources, and review statuses for all vehicles in the 4WHEELS fleet and Pakistan catalog.

## Verification Matrix

| Vehicle | Confirmed Year | Confirmed Generation & Trim | Official Manufacturer Reference | Selected Image Asset | Provider / Source | Match Status | Reviewer |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Toyota Corolla** | 2024 | E170 Facelift (Altis X / Grande 1.8) | [Toyota Indus Corolla](https://toyota-indus.com/corolla/) | `/vehicles/fleet/toyota-corolla/hero.jpg` | Local Licensed (Wikimedia CC0) | **APPROVED** | 4WHEELS QA |
| **Honda Civic** | 2024 | FE 11th Generation (RS / Oriel 1.5 Turbo) | [Honda Atlas Civic](https://honda.com.pk/civic/) | `/vehicles/fleet/honda-civic/hero.jpg` | Local Licensed (Wikimedia Public Domain) | **APPROVED** | 4WHEELS QA |
| **Toyota Fortuner** | 2024 | AN160 2nd Gen Facelift (Sigma 4 / Legender) | [Toyota Indus Fortuner](https://toyota-indus.com/fortuner/) | `/vehicles/fleet/toyota-fortuner/hero.jpg` | Local Licensed (Wikimedia CC BY-SA 4.0) | **APPROVED** | 4WHEELS QA |
| **Toyota Hilux Revo** | 2024 | VIII Generation Rocco (2.8L 4x4) | [Toyota Indus Hilux Revo](https://toyota-indus.com/hilux-revo/) | `/vehicles/fleet/toyota-revo/hero.jpg` | Local Licensed (Wikimedia CC BY-SA 4.0) | **APPROVED** | 4WHEELS QA |
| **Suzuki Alto** | 2024 | HA36 8th Generation (VXL AGS 660cc) | [Pak Suzuki Alto](https://suzukipakistan.com/alto/) | `/vehicles/fleet/suzuki-alto/hero.jpg` | Local Licensed (Wikimedia CC0) | **APPROVED** | 4WHEELS QA |
| **Toyota Yaris** | 2024 | XP150 Ativ Sedan (Ativ X 1.5L) | [Toyota Indus Yaris](https://toyota-indus.com/yaris/) | `/vehicles/fleet/toyota-yaris/hero.jpg` | Local Licensed (Wikimedia CC BY-SA 4.0) | **APPROVED** | 4WHEELS QA |
| **Toyota HiAce** | 2024 | H200 High-Roof Grand Cabin (Commuter 13-Seater) | [Toyota Indus HiAce](https://toyota-indus.com/hiace/) | `/vehicles/fleet/toyota-hiace/hero.jpg` | Local Licensed (Wikimedia Public Domain) | **APPROVED** | 4WHEELS QA |
| **Toyota Coaster** | 2024 | XZB70 Executive Body (Saloon 22-Seater) | [Toyota Indus Coaster](https://toyota-indus.com/coaster/) | `/vehicles/fleet/toyota-coaster/hero.jpg` | Local Licensed (Wikimedia CC0) | **APPROVED** | 4WHEELS QA |
| **Audi A6** | 2022 | C7 Executive Sedan (1.8 TFSI) | [Audi Pakistan](https://audi.com.pk) | `/vehicles/fleet/audi-a6/hero.jpg` | Local Licensed (Wikimedia CC BY-SA 3.0 DE) | **APPROVED** | 4WHEELS QA |

---

## Strategy & Fallback Rules Summary

1. **Priority 1**: Actual 4WHEELS Fleet Photograph (`actual-fleet`).
2. **Priority 2**: Automotive Image API integration (IMAGIN.studio / CarsXE) using verified fields: Make, Model, Year, Generation, Trim, Body Type, Powertrain.
3. **Priority 3**: Exact-generation local licensed photograph (`local-licensed`) with public domain / Creative Commons licensing.
4. **Priority 4**: Original Model-Accurate 2D Illustration (`illustration`).
5. **Emergency Fallback**: Generic Body Silhouette (`fallback`) used ONLY during network load failure or unverified model matches. Never displayed as normal customer-facing fleet artwork.
