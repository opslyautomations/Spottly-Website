import { SITE } from "./site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    telephone: SITE.phoneRaw,
    email: SITE.email,
    founder: {
      "@type": "Person",
      name: SITE.founder,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Los Angeles County, CA",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    publisher: {
      "@id": `${SITE.url}/#organization`,
    },
  };
}

const AREA_SERVED_LIST = [
  "Santa Monica",
  "Culver City",
  "Beverly Hills",
  "West Hollywood",
  "Marina del Rey",
  "Venice",
  "Sawtelle",
  "Brentwood",
  "Westchester",
  "Mid-City West",
  "Koreatown",
];

export function localBusinessSchema(areaName: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}${path}#localbusiness`,
    name: `${SITE.name} — ${areaName}`,
    parentOrganization: { "@id": `${SITE.url}/#organization` },
    telephone: SITE.phoneRaw,
    email: SITE.email,
    url: `${SITE.url}${path}`,
    priceRange: "$$",
    areaServed: {
      "@type": "Place",
      name: areaName,
    },
  };
}

export function serviceSchema(serviceName: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceName,
    name: serviceName,
    description,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: AREA_SERVED_LIST.map((name) => ({ "@type": "Place", name })),
    url: `${SITE.url}${path}`,
  };
}

export function faqSchema(faqs: { question: string; answerHtml: string }[]) {
  if (!faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answerHtml.replace(/<[^>]+>/g, ""),
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

export function blogPostingSchema(opts: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    url: `${SITE.url}/blog/${opts.slug}`,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    image: opts.image,
    author: {
      "@id": `${SITE.url}/#organization`,
    },
    publisher: {
      "@id": `${SITE.url}/#organization`,
    },
    mainEntityOfPage: `${SITE.url}/blog/${opts.slug}`,
  };
}
