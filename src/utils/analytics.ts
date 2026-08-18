export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  if (typeof window !== 'undefined') {
    if ((window as any).gtag) {
      (window as any).gtag('event', eventName, params);
    }
    // Debug log for QA environment
    console.log(`[Analytics Event] ${eventName}:`, params);
  }
}

// GENERAL CONTACT EVENTS
export function trackGeneralContact(channel: 'whatsapp' | 'call' | 'email' | 'directions' | 'google_reviews', details: Record<string, any> = {}) {
  const eventName = channel === 'whatsapp' ? 'general_whatsapp_click' :
                    channel === 'call' ? 'call_click' :
                    channel === 'email' ? 'email_click' :
                    channel === 'directions' ? 'directions_click' :
                    'google_reviews_click';
  trackEvent(eventName, details);
}

// BRAND VERIFICATION EVENTS
export function trackBrandEvent(type: 'official_page_view' | 'verify_official_click' | 'press_release_view', details: Record<string, any> = {}) {
  trackEvent(type, details);
}

// COMMERCIAL CONVERSION EVENTS (PHASE 6 EXTENDED)
export type CommercialEventType =
  | 'book_trip_start'
  | 'vehicle_selected'
  | 'booking_dates_selected'
  | 'booking_trip_completed'
  | 'booking_review'
  | 'booking_whatsapp_click'
  | 'trip_planner_start'
  | 'trip_estimate_generated'
  | 'trip_plan_whatsapp_click'
  | 'call_click'
  | 'corporate_inquiry'
  | 'bus_inquiry'
  | 'wedding_inquiry'
  | 'general_whatsapp_click';

export function trackCommercialEvent(type: CommercialEventType, details: Record<string, any> = {}) {
  trackEvent(type, details);
}

// CONTENT & NAVIGATION EVENTS (PHASE 5)
export function trackNavigationEvent(
  type: 'nav_rent_vehicle' | 'nav_plan_trip' | 'nav_business_groups' | 'nav_explore' | 'nav_book_trip' | 'mobile_menu_open' | 'site_search' | 'site_search_open' | 'site_search_query' | 'guide_view' | 'route_view' | 'location_view' | 'plan_this_trip' | 'content_to_booking',
  details: Record<string, any> = {}
) {
  trackEvent(type, details);
}
