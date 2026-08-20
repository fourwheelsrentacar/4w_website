# 4WHEELS Rent a Car — Call, WhatsApp & Commercial CTA Audit

## Summary
This document provides a comprehensive audit of all Call (tel:), WhatsApp (wa.me:), and commercial inquiry CTAs across the 4WHEELS platform.

## CTA Verification Matrix

| Page | CTA Text | Target Purpose | Href / Intent | Mobile Action | Desktop Action | Message Context | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Global Header** | Call 0321 6616644 | Voice Phone Call | `tel:+923216616644` | Opens Phone Dialer | Opens Softphone / Tel Protocol | Voice Call | ✅ PASS |
| **Global Header** | WhatsApp | Support Chat | `https://wa.me/923216616644` | Opens WhatsApp App | Opens WhatsApp Web | "Hi 4WHEELS, I need some assistance." | ✅ PASS |
| **Global Header** | BOOK YOUR TRIP | Configurator | `/build-your-rental/` | Navigates to Configurator | Navigates to Configurator | Direct Booking Start | ✅ PASS |
| **Homepage Hero** | 🚗 BOOK YOUR TRIP | Configurator | `/build-your-rental/` | Navigates to Configurator | Navigates to Configurator | Direct Booking Start | ✅ PASS |
| **Homepage Hero** | 🧭 PLAN MY TRIP | Trip Planner | `/trip-planner/` | Navigates to Trip Planner | Navigates to Trip Planner | Trip Planning | ✅ PASS |
| **Fleet Catalog** | BOOK YOUR TRIP | Vehicle Configurator | `/build-your-rental/?vehicle=...` | Pre-fills Selected Vehicle | Pre-fills Selected Vehicle | Selected Model Prefill | ✅ PASS |
| **Fleet Catalog** | 📞 CALL: 0321 6616644 | Voice Call | `tel:+923216616644` | Opens Phone Dialer | Opens Softphone / Tel Protocol | Voice Call | ✅ PASS |
| **Vehicle Detail** | Book Your Trip | Configurator | `/build-your-rental/?vehicle=...` | Pre-fills Selected Vehicle | Pre-fills Selected Vehicle | Selected Model Prefill | ✅ PASS |
| **Vehicle Detail** | 📞 Call: 0321 6616644 | Voice Call | `tel:+923216616644` | Opens Phone Dialer | Opens Softphone / Tel Protocol | Voice Call | ✅ PASS |
| **Configurator (Review)** | 💬 SEND INQUIRY ON WHATSAPP | WhatsApp Inquiry | `https://wa.me/923216616644` | Opens WhatsApp App | Opens WhatsApp Web | Complete Structured Booking Inquiry (Vehicle, Route, Distance, Dates, Passengers, Contact) | ✅ PASS |
| **Configurator (Summary)** | 📞 Call Customer Care | Voice Call | `tel:+923216616644` | Opens Phone Dialer | Opens Softphone / Tel Protocol | Voice Call | ✅ PASS |
| **Trip Planner** | 🗺️ View Route on Google Maps | External Directions | `https://www.google.com/maps/dir/...` | Opens Google Maps | Opens Google Maps | Travel Mode Driving | ✅ PASS |
| **Trip Planner** | 💬 Send Trip Plan to 4WHEELS | WhatsApp Inquiry | `https://wa.me/923216616644` | Opens WhatsApp App | Opens WhatsApp Web | Complete Structured Trip Plan Inquiry | ✅ PASS |
| **Trip Planner** | 📞 Call Trip Planner | Voice Call | `tel:+923216616644` | Opens Phone Dialer | Opens Softphone / Tel Protocol | Voice Call | ✅ PASS |
| **Find My Vehicle** | Select & Book | Configurator | `/book/` | Navigates to Configurator | Navigates to Configurator | Booking Flow | ✅ PASS |
| **Compare Vehicles** | Choose & Configure | Configurator | `/build-your-rental/?brand=...` | Pre-fills Selected Model | Pre-fills Selected Model | Configurator Prefill | ✅ PASS |
| **Compare Vehicles** | Ask 4WHEELS Which One Is Better | WhatsApp Inquiry | `https://wa.me/923216616644` | Opens WhatsApp App | Opens WhatsApp Web | "Hi 4WHEELS, I am comparing vehicles..." | ✅ PASS |
| **Global Footer** | 📞 Customer Care Line | Voice Call | `tel:+923216616644` | Opens Phone Dialer | Opens Softphone / Tel Protocol | Voice Call | ✅ PASS |
| **Global Footer** | 💬 Official WhatsApp | Support Chat | `https://wa.me/923216616644` | Opens WhatsApp App | Opens WhatsApp Web | "Hi 4WHEELS, I need some assistance." | ✅ PASS |
