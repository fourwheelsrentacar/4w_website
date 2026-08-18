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

// COMMERCIAL CONVERSION EVENTS
export function trackCommercialEvent(type: 'book_trip_start' | 'booking_review' | 'booking_whatsapp_click' | 'trip_planner_start' | 'trip_estimate_generated' | 'trip_plan_whatsapp_click', details: Record<string, any> = {}) {
  trackEvent(type, details);
}
