import { SITE, FOUNDER, SOCIAL } from "@/content/site";
import { SERVICES } from "@/content/services";

/**
 * Schema.org JSON-LD for a financial advisory practice.
 * Improves rich-result eligibility and local/financial SEO.
 */
export function buildStructuredData() {
  const financialService = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phone,
    image: `${SITE.url}/og.svg`,
    priceRange: "Consultation",
    areaServed: "IN",
    sameAs: [SOCIAL.instagram, SOCIAL.linkedin],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${SITE.address.line1}, ${SITE.address.line2}`,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.pin,
      addressCountry: "IN",
    },
    founder: {
      "@type": "Person",
      name: FOUNDER.name,
      jobTitle: FOUNDER.position,
      hasCredential: FOUNDER.credentials,
    },
    makesOffer: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.tagline },
    })),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": `${SITE.url}/#organization` },
    inLanguage: "en-IN",
  };

  return [financialService, website];
}
