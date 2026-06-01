import type { SiteContent } from "@/types/site";

export const siteContent: SiteContent = {
  businessName: "Offshore Athletic Therapy",
  locationLabel: "Kimberley, BC",
  bookingUrl: "https://skyemcgoey-athletictherapy.janeapp.com/",
  metadata: {
    title:
      "Offshore Athletic Therapy | Athletic Therapy & Kinesiology in Kimberley, BC",
    description:
      "Offshore Athletic Therapy provides athletic therapy, kinesiology, injury rehabilitation, and ICBC recovery services in Kimberley, BC.",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Location", href: "/location" },
    { label: "Contact", href: "/contact" },
  ],
  hero: {
    headline: "Move Better. Recover Stronger.",
    subheadline:
      "Athletic Therapy, Kinesiology, and ICBC Rehabilitation in Kimberley, BC.",
    detailCards: [
      "One-on-one assessments and personalized rehab plans.",
      "Movement-based care for injury recovery, resilience, and return to activity.",
      "Direct-billing support for ICBC rehabilitation clients.",
    ],
  },
  services: [
    {
      title: "Athletic Therapy",
      summary:
        "Athletic Therapists deliver expert care through advanced injury prevention, precise assessment, and personalized rehabilitation tailored to your unique needs.",
      description:
        "Care is built around a clear understanding of how your injury affects movement, performance, and day-to-day life.",
      learnMore: [
        "Appointments focus on assessment, hands-on treatment, movement retraining, and a rehabilitation plan you can realistically follow between visits.",
        "Whether you are managing a new injury or trying to solve a recurring issue, treatment is designed to help you return to activity with more confidence and control.",
      ],
      highlights: [
        "Injury assessment",
        "Rehabilitation plans",
        "Return-to-sport support",
      ],
    },
    {
      title: "Kinesiology",
      summary:
        "Kinesiology is the science of how and why we move, and what that movement does to the body over time.",
      description:
        "Movement analysis and exercise prescription are used to support better mechanics, capacity, and long-term physical health.",
      learnMore: [
        "Kinesiology sessions can help improve strength, mobility, posture, and movement quality for work, sport, or everyday life.",
        "Plans are tailored to your goals so that exercise feels relevant, approachable, and progressive instead of generic.",
      ],
      highlights: [
        "Exercise prescription",
        "Movement analysis",
        "Strength and mobility",
      ],
    },
    {
      title: "ICBC Rehabilitation",
      summary:
        "We offer specialized direct-billing ICBC services for recovery and rehabilitation in Kimberley.",
      description:
        "Recovery after a motor vehicle accident deserves clear guidance, measured progress, and coordinated care.",
      learnMore: [
        "Treatment supports pain reduction, mobility restoration, and gradual rebuilding of physical capacity after an accident.",
        "Direct billing helps simplify the process so you can focus more on recovery and less on paperwork.",
      ],
      highlights: [
        "Direct billing",
        "Motor vehicle recovery",
        "Progressive rehab",
      ],
    },
  ],
  about: {
    name: "Skye McGoey",
    credentials: [
      "Certified Athletic Therapist",
      "Practicing Kinesiologist",
      "4th Year Student of Osteopathic Manual Therapy",
    ],
    bio: [
      "Skye McGoey provides thoughtful, movement-focused care for active adults, athletes, and clients navigating injury recovery in Kimberley, BC.",
      "Her approach combines detailed assessment, hands-on support, and personalized rehabilitation so clients understand what is happening in their body and what the next step forward should look like.",
      "Ongoing education in osteopathic manual therapy continues to shape a treatment style that values precision, whole-body awareness, and practical results that last beyond a single appointment.",
    ],
    education: [
      {
        years: "2017-2022",
        degree: "Bachelor of Athletic Therapy and Exercise Physiology",
        institution: "Camosun College",
      },
      {
        years: "2022-Present",
        degree: "4th Year Student in Osteopathic Manual Therapy",
        institution: "Sutherland-Chan School of Osteopathy",
      },
    ],
  },
  mission: {
    title: "Our Mission",
    text: "To give you the tools, knowledge, and physical capacity to live a full, healthy, and mobile life.",
  },
  location: {
    name: "UNWIND",
    address: {
      street: "179 Wallinger Ave",
      city: "Kimberley",
      region: "BC",
      postalCode: "V1A 1Y7",
    },
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=179+Wallinger+Ave+Kimberley+BC+V1A+1Y7",
    mapEmbedUrl:
      "https://www.google.com/maps?q=179%20Wallinger%20Ave%2C%20Kimberley%2C%20BC%20V1A%201Y7&z=15&output=embed",
  },
  contact: {
    email: "skye.mcgoey@gmail.com",
    socials: [
      { label: "Instagram", href: "#", placeholder: true },
      { label: "Facebook", href: "#", placeholder: true },
    ],
  },
};
