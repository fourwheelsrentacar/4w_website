import { BUSINESS_INFO } from '../data/business';

export interface WhatsAppContextOptions {
  pageType?: 'vehicle' | 'route' | 'location' | 'service' | 'guide' | 'corporate' | 'support' | 'general';
  pageTitle?: string;
  canonicalUrl?: string;
  vehicleName?: string;
  destinationRoute?: string;
  rentalType?: string;
}

export function getContextualWhatsAppUrl(options: WhatsAppContextOptions = {}): string {
  const { pageType = 'general', pageTitle = '', canonicalUrl = BUSINESS_INFO.siteUrl, vehicleName = '', destinationRoute = '', rentalType = '' } = options;

  let message = '';

  switch (pageType) {
    case 'vehicle':
      message = `Hi 4WHEELS, I am interested in renting ${vehicleName || 'a vehicle'}.\n\nPage: ${canonicalUrl}\n\nPlease share current availability, rental options, and pricing details.`;
      break;

    case 'route':
      message = `Hi 4WHEELS, I am viewing your ${destinationRoute || 'intercity route'} travel guide and would like to inquire about rental cars for this trip.\n\nRoute: ${destinationRoute}\nPage: ${canonicalUrl}\n\nPlease share vehicle options and rate details.`;
      break;

    case 'location':
      message = `Hi 4WHEELS, I am viewing travel information for ${pageTitle || 'Lahore'} and would like to arrange car rental transport.\n\nLocation: ${pageTitle}\nPage: ${canonicalUrl}\n\nPlease guide me with available vehicles.`;
      break;

    case 'service':
      message = `Hi 4WHEELS, I am viewing your ${pageTitle || 'car rental'} service and would like to inquire about availability and rates.\n\nService: ${pageTitle}\nPage: ${canonicalUrl}\n\nPlease share options.`;
      break;

    case 'guide':
      message = `Hi 4WHEELS, I am reading your guide on "${pageTitle || 'Car Rental'}" and would like assistance with booking a car.\n\nGuide: ${pageTitle}\nPage: ${canonicalUrl}`;
      break;

    case 'corporate':
      message = `Hi 4WHEELS, I am interested in your Corporate / Executive Car Rental service (${pageTitle || 'Corporate Fleet'}).\n\nPage: ${canonicalUrl}\n\nPlease share details for business vehicle requirements.`;
      break;

    case 'support':
      message = `Hi 4WHEELS, I have a query regarding rental policies, requirements, or active reservations.\n\nPage: ${canonicalUrl}`;
      break;

    default:
      if (pageTitle) {
        message = `Hi 4WHEELS, I am visiting your website (${pageTitle}) and would like assistance regarding rental car booking.\n\nPage: ${canonicalUrl}`;
      } else {
        message = `Hi 4WHEELS, I would like to inquire about renting a car in Lahore. Please guide me with vehicle options and rates.`;
      }
      break;
  }

  return `https://wa.me/923216616644?text=${encodeURIComponent(message)}`;
}
