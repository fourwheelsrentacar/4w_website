# 2D VEHICLE SEATING + LUGGAGE VISUAL SYSTEM QA AUDIT REPORT

This document contains the visual QA audit results for the 2D Vehicle Seating and Luggage Capacity visual system across all major 4WHEELS core fleet vehicles.

---

## 1. FLEET VEHICLE CAPACITY QA REPORT

| Vehicle | Exterior Visual | Seat Diagram | Luggage Diagram | Desktop View | Mobile View | Configuration Verified | Source / Classification |
|---|---|---|---|---|---|---|---|
| **Toyota Corolla** | PASS | PASS | PASS | PASS | PASS | YES | Indus Motor Co. Spec & 4WHEELS Active Fleet |
| **Honda Civic** | PASS | PASS | PASS | PASS | PASS | YES | Honda Atlas Cars Spec & 4WHEELS Active Fleet |
| **Toyota Fortuner** | PASS | PASS | PASS | PASS | PASS | YES | Indus Motor Co. 7-Seat SUV Spec & 4WHEELS Fleet |
| **Toyota Hilux Revo** | PASS | PASS | PASS | PASS | PASS | YES | Indus Motor Co. Double Cab Pickup Spec |
| **Suzuki Alto** | PASS | PASS | PASS | PASS | PASS | YES | Pak Suzuki 4-Seat City Hatchback Spec |
| **Toyota Yaris** | PASS | PASS | PASS | PASS | PASS | YES | Indus Motor Co. Ativ Sedan Spec |
| **Toyota HiAce Grand Cabin**| PASS | PASS | PASS | PASS | PASS | YES | 13-Seat High-Roof Executive Van Spec |
| **Toyota Coaster Saloon** | PASS | PASS | PASS | PASS | PASS | YES | **4WHEELS Custom 22-Seat Executive Configuration** |
| **Audi A6** | PASS | PASS | PASS | PASS | PASS | YES | Audi Pakistan Executive Sedan Spec |

---

## 2. DIAGRAM DESIGN & TECHNICAL STANDARDS VERIFICATION

- **Part A (Exterior Visual)**: Rendered on `/fleet/[vehicle].astro` and `/vehicles/[brand]/[model].astro` using model-specific 2D SVG illustrations or verified photography fallback.
- **Part B (Top-Down Cabin Diagram)**: Clean automotive outline, individual seat positions, front road direction clearly marked, RHD driver position indicated, rows separated, and boot/cargo zone distinguished.
- **Luggage SVG Assets**: Custom original SVG icons (`large-bag.svg`, `cabin-bag.svg`, `backpack.svg`) styled consistently in brand red, slate, and emerald color tokens.
- **Third-Row SUV Behavior**: Dynamic visual guidance for Toyota Fortuner showing both 7-seat (seats up) lower luggage capacity and 5-seat (3rd row folded) expanded boot space with note: *"Approximate luggage fit may vary depending on third-row use."*
- **Interactive Coaster Map**: Interactive seat inspection on `/fleet/toyota-coaster/` displaying seat numbers, single executive recliners, double seats, guide seat, and rear lounge row without fake seat assignment.
- **Accessibility & Contrast**: Accessible SVG titles, `role="img"`, and readable text fallbacks (`Passenger Capacity: X`, `Luggage: Y`) beneath every diagram.

---

*Report Verified by Jules for 4WHEELS Rent a Car Lahore.*
