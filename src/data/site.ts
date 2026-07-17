import type { SiteContent } from "@/types/site";

/**
 * Central content source for the site.
 *
 * A junior developer should be able to update most text, links, and business
 * details here without needing to touch the rendering components.
 */
export const siteContent: SiteContent = {
  // Shared brand and booking data used across layout, metadata, and CTAs.
  businessName: "Offshore Athletic Therapy",
  locationLabel: "Kimberley, BC",
  bookingUrl: "https://skyemcgoey-athletictherapy.janeapp.com/#staff_member/1",
  metadata: {
    title:
      "Offshore Athletic Therapy | Athletic Therapy & Kinesiology in Kimberley, BC",
    description:
      "Offshore Athletic Therapy provides athletic therapy, kinesiology, injury rehabilitation, and ICBC recovery services in Kimberley, BC.",
  },
  // Primary navigation shown in both the header and footer.
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Location", href: "/location" },
    { label: "Contact", href: "/contact" },
  ],
  // Homepage hero messaging and the short supporting cards below it.
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
  // Service cards used on the homepage and the dedicated services page.
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
  // Practitioner profile information for the about section/page.
  about: {
    name: "Skye McGoey",
    credentials: [
      "Certified Athletic Therapist",
      "Practicing Kinesiologist",
      "4th Year Student of Osteopathic Manual Therapy",
    ],
    bio: [
      "I was born and raised in Canmore, AB where I grew up participating in  competitive gymnastics, rock climbing and volleyball, and of course enjoyed many other recreational mountain activities. ",
      "Being surrounded by extreme sports enthusiasts, athletes, and injury, I developed a passion for movement and health and understanding how to use the body and what could make it better. While pursuing a degree in Athletic Therapy at Camosun College in Victoria, I was introduced to Manual Osteopathy. The practice was gentle, mindful, systemically comprehensive and profoundly intriguing. And so once I completed my undergrad I decided to continue my studies and am currently a 4th year student of Osteopathy Manual Therapy at Sutherland-Chan School of Osteopathy in Vancouver. Needless to say, I have been beyond fascinated by the benefits and it has added a lot of tools within my practice and approach to patient care. What I love most about Manual Osteopathy is its appreciation for the interconnectedness and complexity of the human body and it has allowed me to gain a deeper level of understanding of human movement and function.",
      "I use a combination of manual therapy techniques and exercise rehabilitation to encourage mobility within the body systems to help address each individual on a physical, psychological, emotional, and spiritual level to restore harmony between body systems and promote overall well being.",
      "When I'm not working, you can find me spending time with friends and family, hiking, biking, skiing, running, and spending time with my pup. I look forward to helping you along your health and wellness journey.",
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
  // Mission content used for the short brand values section on the homepage.
  mission: {
    title: "Our Mission",
    text: "To give you the tools, knowledge, and physical capacity to live a full, healthy, and mobile life.",
  },
  // Physical clinic information for directions and embedded maps.
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
  // Contact details and placeholder socials for future launch updates.
  contact: {
    email: "skye.mcgoey@gmail.com",
    socials: [
      { label: "Instagram", href: "#", placeholder: true },
      { label: "Facebook", href: "#", placeholder: true },
    ],
  },
};
