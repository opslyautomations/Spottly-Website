export const SITE = {
  name: "Spottly",
  domain: "www.spottly.co",
  url: "https://www.spottly.co",
  tagline: "Detail-obsessed cleaning across Los Angeles",
  phone: "(213) 277-8247",
  phoneRaw: "+12132778247",
  email: "info@spottly.co",
  founder: "Miguel Flores",
  hours: "By appointment — contact us for availability",
  locale: "en_US",
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const COMPANY_LINKS: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Reviews", href: "/reviews" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Book Online", href: "/book" },
  { label: "Contact", href: "/contact" },
];

export const LEGAL_LINKS: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];
