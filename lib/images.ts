// IMAGES, SERVICE_IMAGES and BLOG_IMAGES: illustrative stock photography (Unsplash License —
// free for commercial use).
// Use these only for decorative/illustrative spots. Gallery and "our work" slots
// must use real, unedited Spottly job photos — never present these as our own jobs.
export interface SiteImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const IMAGES = {
  heroLivingRoom: {
    src: "/images/hero-living-room.jpg",
    alt: "Bright, freshly cleaned living room with sunlight across the floor",
    width: 1800,
    height: 1350,
  },
  heroCleaner: {
    src: "/images/hero-cleaner.jpg",
    alt: "Cleaner in gloves wiping down a window frame",
    width: 900,
    height: 600,
  },
  whyKitchen: {
    src: "/images/why-kitchen.jpg",
    alt: "Spotless modern kitchen with clear countertops",
    width: 1400,
    height: 930,
  },
} satisfies Record<string, SiteImage>;

export const SERVICE_IMAGES: Record<string, SiteImage> = {
  "standard-cleaning": {
    src: "/images/service-standard-cleaning.jpg",
    alt: "Tidy, plant-filled living room after a standard clean",
    width: 1200,
    height: 893,
  },
  "deep-cleaning": {
    src: "/images/service-deep-cleaning.jpg",
    alt: "Gleaming bathroom with a spotless glass shower and vanity",
    width: 1200,
    height: 800,
  },
  "move-in-move-out-cleaning": {
    src: "/images/service-move-in-move-out-cleaning.jpg",
    alt: "Bright, open living space ready for move-in",
    width: 1200,
    height: 800,
  },
  "recurring-cleaning": {
    src: "/images/service-recurring-cleaning.jpg",
    alt: "Neatly made bed in a calm, clean bedroom",
    width: 1200,
    height: 800,
  },
  "airbnb-cleaning": {
    src: "/images/service-airbnb-cleaning.jpg",
    alt: "Guest-ready bedroom with fresh linens for an Airbnb turnover",
    width: 1200,
    height: 800,
  },
  "commercial-cleaning": {
    src: "/images/service-commercial-cleaning.jpg",
    alt: "Clean, open modern office space",
    width: 1200,
    height: 801,
  },
};

/** Per-post cover photo plus one supporting photo shown mid-article. */
export const BLOG_IMAGES: Record<string, { hero: SiteImage; inline: SiteImage }> = {
  "what-is-included-standard-house-cleaning": {
    hero: {
      src: "/images/blog-what-is-included-standard-house-cleaning.jpg",
      alt: "Gloved hand wiping down a countertop with spray cleaner",
      width: 1600,
      height: 900,
    },
    inline: {
      src: "/images/blog-what-is-included-standard-house-cleaning-2.jpg",
      alt: "Bright, tidy living room with herringbone floors",
      width: 1100,
      height: 733,
    },
  },
  "deep-clean-vs-standard-clean": {
    hero: {
      src: "/images/blog-deep-clean-vs-standard-clean.jpg",
      alt: "Spotless white kitchen with a marble island",
      width: 1600,
      height: 900,
    },
    inline: {
      src: "/images/blog-deep-clean-vs-standard-clean-2.jpg",
      alt: "Amber glass spray bottles and a scrub brush by a sink",
      width: 1100,
      height: 733,
    },
  },
  "move-out-cleaning-security-deposit": {
    hero: {
      src: "/images/blog-move-out-cleaning-security-deposit.jpg",
      alt: "Tenant signing a lease document at a table",
      width: 1600,
      height: 900,
    },
    inline: {
      src: "/images/blog-move-out-cleaning-security-deposit-2.jpg",
      alt: "Clean, minimal room with white walls ready for inspection",
      width: 1100,
      height: 733,
    },
  },
  "weekly-vs-biweekly-vs-monthly-cleaning": {
    hero: {
      src: "/images/blog-weekly-vs-biweekly-vs-monthly-cleaning.jpg",
      alt: "Warm, well-kept living room with plants and a leather sofa",
      width: 1600,
      height: 900,
    },
    inline: {
      src: "/images/blog-weekly-vs-biweekly-vs-monthly-cleaning-2.jpg",
      alt: "Natural lemon cleaning solution in a spray bottle",
      width: 1100,
      height: 733,
    },
  },
  "airbnb-turnover-cleaning-guide": {
    hero: {
      src: "/images/blog-airbnb-turnover-cleaning-guide.jpg",
      alt: "Guest-ready living room styled for a short-term rental",
      width: 1600,
      height: 900,
    },
    inline: {
      src: "/images/blog-airbnb-turnover-cleaning-guide-2.jpg",
      alt: "Freshly made guest bed with crisp linens",
      width: 1100,
      height: 733,
    },
  },
  "how-often-office-cleaning": {
    hero: {
      src: "/images/blog-how-often-office-cleaning.jpg",
      alt: "Bright office workspace with plants and floor-to-ceiling windows",
      width: 1600,
      height: 900,
    },
    inline: {
      src: "/images/blog-how-often-office-cleaning-2.jpg",
      alt: "Clean, modern office lounge area",
      width: 1099,
      height: 733,
    },
  },
  "house-cleaning-santa-monica-renters": {
    hero: {
      src: "/images/blog-house-cleaning-santa-monica-renters.jpg",
      alt: "Modern apartment building against a blue sky",
      width: 1600,
      height: 900,
    },
    inline: {
      src: "/images/blog-house-cleaning-santa-monica-renters-2.jpg",
      alt: "Open-plan apartment living room with a leather sofa",
      width: 1099,
      height: 733,
    },
  },
  "beverly-hills-home-cleaning-guide": {
    hero: {
      src: "/images/blog-beverly-hills-home-cleaning-guide.jpg",
      alt: "Luxury modern home with a pool",
      width: 1600,
      height: 900,
    },
    inline: {
      src: "/images/blog-beverly-hills-home-cleaning-guide-2.jpg",
      alt: "Elegant dining room with green velvet chairs",
      width: 928,
      height: 619,
    },
  },
  "brentwood-wildfire-ash-cleaning": {
    hero: {
      src: "/images/blog-brentwood-wildfire-ash-cleaning.jpg",
      alt: "Modern home exterior with a landscaped front yard",
      width: 1600,
      height: 900,
    },
    inline: {
      src: "/images/blog-brentwood-wildfire-ash-cleaning-2.jpg",
      alt: "Gloved hand holding a spray bottle for surface cleaning",
      width: 1099,
      height: 733,
    },
  },
  "koreatown-apartment-cleaning": {
    hero: {
      src: "/images/blog-koreatown-apartment-cleaning.jpg",
      alt: "Sunlit apartment with a compact living and dining area",
      width: 1600,
      height: 900,
    },
    inline: {
      src: "/images/blog-koreatown-apartment-cleaning-2.jpg",
      alt: "Compact apartment kitchen with dark cabinets",
      width: 1100,
      height: 733,
    },
  },
  "venice-marina-beach-home-cleaning": {
    hero: {
      src: "/images/blog-venice-marina-beach-home-cleaning.jpg",
      alt: "White coastal home with a pool",
      width: 1600,
      height: 900,
    },
    inline: {
      src: "/images/blog-venice-marina-beach-home-cleaning-2.jpg",
      alt: "Indoor-outdoor living space with wood floors",
      width: 1099,
      height: 733,
    },
  },
  "park-la-brea-apartment-cleaning": {
    hero: {
      src: "/images/blog-park-la-brea-apartment-cleaning.jpg",
      alt: "Cozy, neutral-toned apartment living room",
      width: 1600,
      height: 900,
    },
    inline: {
      src: "/images/blog-park-la-brea-apartment-cleaning-2.jpg",
      alt: "Clean bedroom corner with a round mirror and plant",
      width: 1100,
      height: 733,
    },
  },
  "move-out-cleaning-west-hollywood": {
    hero: {
      src: "/images/blog-move-out-cleaning-west-hollywood.jpg",
      alt: "Clean, staged living room with gray sofas",
      width: 1600,
      height: 900,
    },
    inline: {
      src: "/images/blog-move-out-cleaning-west-hollywood-2.jpg",
      alt: "Minimal room with a yellow accent chair",
      width: 1100,
      height: 733,
    },
  },
  "airbnb-cleaning-venice-guide": {
    hero: {
      src: "/images/blog-airbnb-cleaning-venice-guide.jpg",
      alt: "Vacation rental home with a pool and palm trees",
      width: 1600,
      height: 900,
    },
    inline: {
      src: "/images/blog-airbnb-cleaning-venice-guide-2.jpg",
      alt: "Styled guest bedroom with a tufted bed",
      width: 1100,
      height: 733,
    },
  },
  "recurring-cleaning-westchester-families": {
    hero: {
      src: "/images/blog-recurring-cleaning-westchester-families.jpg",
      alt: "Family home with a wraparound porch and green lawn",
      width: 1600,
      height: 900,
    },
    inline: {
      src: "/images/blog-recurring-cleaning-westchester-families-2.jpg",
      alt: "Clean family kitchen with an island and bar stools",
      width: 1099,
      height: 733,
    },
  },
  "commercial-cleaning-culver-city": {
    hero: {
      src: "/images/blog-commercial-cleaning-culver-city.jpg",
      alt: "Cleaner mopping an office floor at dusk",
      width: 1600,
      height: 900,
    },
    inline: {
      src: "/images/blog-commercial-cleaning-culver-city-2.jpg",
      alt: "Team meeting in a clean, organized office",
      width: 1099,
      height: 733,
    },
  },
  "deep-cleaning-move-in-sawtelle": {
    hero: {
      src: "/images/blog-deep-cleaning-move-in-sawtelle.jpg",
      alt: "Bright white home exterior on a sunny day",
      width: 1600,
      height: 900,
    },
    inline: {
      src: "/images/blog-deep-cleaning-move-in-sawtelle-2.jpg",
      alt: "Modern open living room ready for move-in",
      width: 1100,
      height: 733,
    },
  },
  "santa-monica-move-out-inspection": {
    hero: {
      src: "/images/blog-santa-monica-move-out-inspection.jpg",
      alt: "Modern white home with palm trees in Southern California",
      width: 1600,
      height: 900,
    },
    inline: {
      src: "/images/blog-santa-monica-move-out-inspection-2.jpg",
      alt: "Contemporary home exterior with a clean driveway",
      width: 1099,
      height: 733,
    },
  },
};

export interface CreditedImage extends SiteImage {
  credit: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
}

// Real photos of each neighborhood from Wikimedia Commons. Most licenses (CC BY / BY-SA)
// require visible attribution — keep the credit caption wherever these are shown.
export const LOCATION_IMAGES: Record<string, CreditedImage> = {
  "santa-monica": {
    src: "/images/area-santa-monica.jpg",
    alt: "Santa Monica Pier and Pacific Park at sunset",
    width: 1600,
    height: 900,
    credit: "CucombreLibre from New York, NY, USA",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Santa_Monica_Pier_(22944807230).jpg",
  },
  "culver-city": {
    src: "/images/area-culver-city.jpg",
    alt: "The historic Culver Hotel in downtown Culver City at night",
    width: 1600,
    height: 900,
    credit: "Seiichi Niitsuma / Culver Hotel",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Culver_by_Night_-_Seiichi_Niitsuma.jpg",
  },
  "beverly-hills": {
    src: "/images/area-beverly-hills.jpg",
    alt: "Storefronts along Rodeo Drive in Beverly Hills",
    width: 1600,
    height: 900,
    credit: "DXR",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Buildings_at_North_Rodeo_Drive,_Beverly_Hills,_West_view_20110806_1.jpg",
  },
  "west-hollywood": {
    src: "/images/area-west-hollywood.jpg",
    alt: "The blue Pacific Design Center in West Hollywood",
    width: 1600,
    height: 900,
    credit: "Benoît Prieur",
    license: "CC0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pacific_Design_Center-(West_Hollywood)_July_2023.jpg",
  },
  "marina-del-rey": {
    src: "/images/area-marina-del-rey.jpg",
    alt: "Boats docked in the Marina del Rey harbor",
    width: 1600,
    height: 900,
    credit: "P. Hughes",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Marina_del_Rey.jpg",
  },
  "venice": {
    src: "/images/area-venice.jpg",
    alt: "Footbridge over the Venice Canals",
    width: 1600,
    height: 900,
    credit: "Américo Toledano",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Los_Angeles_-_Venice_Canal_Historic_District_05.jpg",
  },
  "sawtelle": {
    src: "/images/area-sawtelle.jpg",
    alt: "Tree-lined residential street in Sawtelle, West LA",
    width: 1600,
    height: 900,
    credit: "peter boy12qq12",
    license: "CC BY 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Sawtelle,_Los_Angeles,_CA,_USA_-_panoramio_-_peter_boy12qq12_(31).jpg",
  },
  "brentwood": {
    src: "/images/area-brentwood.jpg",
    alt: "Brentwood neighborhood sign on San Vicente Boulevard",
    width: 1600,
    height: 900,
    credit: "Jengod",
    license: "CC0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Brentwood_sign_on_San_Vicente.jpg",
  },
  "westchester": {
    src: "/images/area-westchester.jpg",
    alt: "View over Westchester toward the Los Angeles skyline",
    width: 1600,
    height: 900,
    credit: "Bill Abbott",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:0746_Westchester_parking_lots_1_block_East_from_Sepulveda_Boulevard_DSC_0746_(2)_(49103669418).jpg",
  },
  "mid-city": {
    src: "/images/area-mid-city.jpg",
    alt: "The Saban Building, the former May Company, on the Miracle Mile",
    width: 1600,
    height: 900,
    credit: "Downtowngal",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:The_May_Company_Building_2021.jpg",
  },
  "koreatown": {
    src: "/images/area-koreatown.jpg",
    alt: "Wilshire Boulevard in Koreatown",
    width: 1541,
    height: 867,
    credit: "Downtowngal",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Wilshire_Blvd_in_Koreatown.jpg",
  },
};
