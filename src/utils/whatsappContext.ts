import { BUSINESS_INFO } from '../data/business';

export interface WhatsAppContextOptions {
  pageType?: 'vehicle' | 'route' | 'location' | 'service' | 'guide' | 'corporate' | 'general';
  pageTitle?: string;
  canonicalUrl?: string;
  vehicleName?: string;
  destinationRoute?: string;
}

export function getContextualWhatsAppUrl(options: WhatsAppContextOptions = {}): string {
  const { pageType = 'general', pageTitle = '', canonicalUrl = BUSINESS_INFO.siteUrl, vehicleName = '', destinationRoute = '' } = options;

  let message = '';

  switch (pageType) {
    case 'vehicle':
      message = `Hi 4WHEELS, I'm viewing the ${vehicleName || 'vehicle'} page and would like some help with this vehicle.\n\nVehicle: ${vehicleName}\nPage: ${canonicalUrl}\n\nPlease guide me about current availability and rental options.`;
      break;

    case 'route':
      message = `Hi 4WHEELS, I'm viewing your ${destinationRoute || 'intercity'} route guide and would like help planning this trip.\n\nRoute: ${destinationRoute}\nPage: ${canonicalUrl}\n\nPlease share details and vehicle availability.`;
      break;

    case 'location':
      message = `Hi 4WHEELS, I'm viewing your ${pageTitle || 'travel location'} information and would like help arranging transport.\n\nDestination: ${pageTitle}\nPage: ${canonicalUrl}`;
      break;

    case 'service':
      message = `Hi 4WHEELS, I'm viewing your ${pageTitle || 'rental service'} and would like more information.\n\nService: ${pageTitle}\nPage: ${canonicalUrl}`;
      break;

    case 'guide':
      message = `Hi 4WHEELS, I'm reading your ${pageTitle || 'guide'} and would like help choosing the right vehicle.\n\nGuide: ${pageTitle}\nPage: ${canonicalUrl}`;
      break;

    case 'corporate':
      message = `Hi 4WHEELS, I'm viewing your ${pageTitle || 'Corporate Rental'} service and would like to discuss a business transport requirement.\n\nPage: ${canonicalUrl}`;
      break;

    default:
      message = `Hi 4WHEELS, I need some assistance.`;
      break;
  }

  return `https://wa.me/923216616644?text=${encodeURIComponent(message)}`;
}
