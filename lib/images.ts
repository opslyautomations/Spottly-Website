// Illustrative stock photography (Unsplash License — free for commercial use).
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
