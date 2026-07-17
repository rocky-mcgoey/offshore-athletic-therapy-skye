import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteContent } from "@/data/site";
import "./globals.css";

// Base font for body copy and UI text.
const bodyFont = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

// Display font used for large headings and brand moments.
const displayFont = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// App Router metadata applied to the whole site unless a page overrides it.
export const metadata: Metadata = {
  title:
    "Offshore Athletic Therapy | Athletic Therapy & Kinesiology in Kimberley, BC",
  description:
    "Offshore Athletic Therapy provides athletic therapy, kinesiology, injury rehabilitation, and ICBC recovery services in Kimberley, BC.",
  keywords: [
    "athletic therapy Kimberley BC",
    "kinesiology Kimberley",
    "ICBC rehabilitation Kimberley",
    "injury rehabilitation BC",
    "Offshore Athletic Therapy",
  ],
  openGraph: {
    title:
      "Offshore Athletic Therapy | Athletic Therapy & Kinesiology in Kimberley, BC",
    description:
      "Offshore Athletic Therapy provides athletic therapy, kinesiology, injury rehabilitation, and ICBC recovery services in Kimberley, BC.",
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Offshore Athletic Therapy | Athletic Therapy & Kinesiology in Kimberley, BC",
    description:
      "Offshore Athletic Therapy provides athletic therapy, kinesiology, injury rehabilitation, and ICBC recovery services in Kimberley, BC.",
  },
};

// Structured data helps search engines understand the business details.
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: siteContent.businessName,
  description: siteContent.metadata.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteContent.location.address.street,
    addressLocality: siteContent.location.address.city,
    addressRegion: siteContent.location.address.region,
    postalCode: siteContent.location.address.postalCode,
    addressCountry: "CA",
  },
  areaServed: "Kimberley, BC",
  email: siteContent.contact.email,
  url: siteContent.bookingUrl,
};

/**
 * Root layout shared by every route.
 * It loads global fonts/styles, wraps pages with the shared shell, and injects
 * structured business data for SEO.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-CA"
      className={`${bodyFont.variable} ${displayFont.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <div className="site-shell">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
