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

export interface ContactFormSubmission {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

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
