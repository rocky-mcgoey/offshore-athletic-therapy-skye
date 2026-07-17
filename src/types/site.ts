/**
 * Shared content types for the marketing site.
 *
 * Keeping these shapes in one place makes it easier for newer developers to
 * see what data each section expects before they dig into the rendering code.
 */
export interface NavigationItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  summary: string;
  description: string;
  learnMore: string[];
  highlights: string[];
}

export interface EducationItem {
  years: string;
  degree: string;
  institution: string;
}

export interface SocialLink {
  label: string;
  href: string;
  placeholder?: boolean;
}

/**
 * Payload shape used by both the client form and the API route.
 * Sharing the type helps keep validation logic aligned on both sides.
 */
export interface ContactFormSubmission {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

/**
 * Top-level content contract for the whole website.
 * Most sections read from this object instead of hard-coding copy locally.
 */
export interface SiteContent {
  businessName: string;
  locationLabel: string;
  bookingUrl: string;
  metadata: {
    title: string;
    description: string;
  };
  navigation: NavigationItem[];
  hero: {
    headline: string;
    subheadline: string;
    detailCards: string[];
  };
  services: ServiceItem[];
  about: {
    name: string;
    credentials: string[];
    bio: string[];
    education: EducationItem[];
  };
  mission: {
    title: string;
    text: string;
  };
  location: {
    name: string;
    address: {
      street: string;
      city: string;
      region: string;
      postalCode: string;
    };
    directionsUrl: string;
    mapEmbedUrl: string;
  };
  contact: {
    email: string;
    socials: SocialLink[];
  };
}
