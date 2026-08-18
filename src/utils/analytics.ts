export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  if (typeof window !== 'undefined') {
    if ((window as any).gtag) {
      (window as any).gtag('event', eventName, params);
    }
    // Debug log for QA environment
    console.log(`[Analytics Event] ${eventName}:`, params);
  }
}
