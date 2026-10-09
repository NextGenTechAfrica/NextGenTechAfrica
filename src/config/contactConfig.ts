import { ContactConfig } from '../types';

/**
 * NextGen Technologies Contact Configuration
 * 
 * Replace these placeholder values with your official links, numbers,
 * and handles when ready.
 */
export const contactConfig: ContactConfig = {
  // Primary email contact
  email: 'contact@nextgentechnologies.org', // Configure: your primary contact email
  supportEmail: 'support@nextgentechnologies.org', // Configure: support or platform inquiries
  
  // WhatsApp Configuration (To be configured later)
  // Format for WhatsApp number: International format without '+' or spaces, e.g. '2348012345678'
  whatsappNumber: 'YOUR_WHATSAPP_NUMBER',
  whatsappDisplay: '+ (WhatsApp To Be Configured)',
  
  // Professional & Social Channels (Placeholders to be filled in)
  linkedinUrl: 'https://linkedin.com/company/nextgen-technologies', // Configure: LinkedIn company page URL
  instagramUrl: 'https://instagram.com/nextgentech', // Configure: Instagram handle URL
  githubUrl: 'https://github.com/NextGenTechAfrica', // Official GitHub organization URL
  twitterUrl: 'https://x.com/nextgentech', // Optional: X / Twitter handle URL
  
  // Physical or operational presence note
  address: 'Digital Venture Builder — Active Globally & Across Africa'
};

// Helpful helper to get active WhatsApp link or trigger modal if not configured
export function getWhatsAppLink(customMessage?: string): string {
  if (!contactConfig.whatsappNumber || contactConfig.whatsappNumber === 'YOUR_WHATSAPP_NUMBER') {
    return '#contact-form';
  }
  const text = encodeURIComponent(customMessage || "Hello NextGen Technologies! I'd like to get in touch.");
  return `https://wa.me/${contactConfig.whatsappNumber}?text=${text}`;
}

export function isWhatsAppConfigured(): boolean {
  return contactConfig.whatsappNumber !== '' && contactConfig.whatsappNumber !== 'YOUR_WHATSAPP_NUMBER';
}
