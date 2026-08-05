export interface LocationFAQ {
  question: string;
  answerHtml: string;
}

export interface LocationResource {
  label: string;
  url: string;
}

export interface ServiceAvailable {
  slug: string;
  blurb: string;
}

export interface LocationData {
  slug: string;
  navLabel: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  leadHtml: string;
  angleHeading: string;
  angleHtml: string;
  areasServedIntro: string;
  servicesAvailable: ServiceAvailable[];
  proofPlaceholder: string;
  faqs: LocationFAQ[];
  localResources: LocationResource[];
  nearbyAreaSlugs: string[];
}

export const LOCATIONS: LocationData[] = [
  {
    slug: "santa-monica",
    navLabel: "Santa Monica",
    h1: "House Cleaning in Santa Monica, CA",
    metaTitle: "House Cleaning in Santa Monica | Spottly",
    metaDescription:
      "Spottly cleans apartments, condos, and homes across Santa Monica — Ocean Park to North of Montana — with beach-air-ready detail. Book a Santa Monica clean today.",
    leadHtml: `<p>Santa Monica is a renter's city as much as a homeowner's — a large share of its housing is rent-controlled apartments and condos, which means turnover, and turnover means cleaning that has to meet a landlord's standard, not just a resident's. Spottly cleans the full range here: the older courtyard buildings off Pico and Wilshire, the single-family homes North of Montana, and the beach-adjacent condos that see short-term guests.</p>`,
    angleHeading: "Salt air and rental density",
    angleHtml: `<p>Two things shape cleaning in Santa Monica specifically. First, the ocean: salt air and marine-layer humidity settle a fine film on glass, fixtures, and sills that inland homes don't deal with, so beach-close units need glass and hardware wiped more often. Second, the rent-controlled apartment stock and renter-heavy population drive steady move-in/move-out and recurring demand — the deposit stakes are real, and California now caps most deposits at one month's rent, so a clean walkthrough matters.</p>`,
    areasServedIntro:
      "Ocean Park, Sunset Park, the Pico neighborhood, Downtown, the Montana Avenue district, Wilmont, and North of Montana.",
    servicesAvailable: [
      { slug: "standard-cleaning", blurb: "keep an apartment or home consistently fresh against the coastal film." },
      { slug: "move-in-move-out-cleaning", blurb: "for the city's steady rental turnover and deposit walkthroughs." },
      { slug: "deep-cleaning", blurb: "reset for a lived-in beach-close home." },
      { slug: "recurring-cleaning", blurb: "weekly to monthly upkeep." },
      { slug: "airbnb-cleaning", blurb: "turnovers for beach-adjacent short-term rentals." },
      { slug: "commercial-cleaning", blurb: "offices along the Wilshire and Santa Monica Blvd corridors." },
    ],
    proofPlaceholder: "Needs one — insert a real Santa Monica customer review (name + neighborhood) when available. Do not fabricate.",
    faqs: [
      {
        question: "Do you serve Ocean Park and Sunset Park?",
        answerHtml:
          "Yes — we cover Ocean Park, Sunset Park, the Pico neighborhood, Downtown, Montana Avenue, and North of Montana, plus the rest of Santa Monica.",
      },
      {
        question: "Do you handle move-out cleans for rent-controlled apartments here?",
        answerHtml:
          "Yes. Santa Monica's large rental stock means frequent turnovers; our move-out clean targets exactly what landlords inspect so your deposit is protected under California's one-month-rent cap.",
      },
      {
        question: "Does the ocean air really affect cleaning?",
        answerHtml:
          "For beach-close units, yes — salt and marine-layer moisture leave a film on glass, fixtures, and metal. We wipe those surfaces as part of the routine so it doesn't build up.",
      },
      {
        question: "Can you reach me quickly in Santa Monica?",
        answerHtml: "We're active across the Westside daily, so Santa Monica is a short reach from our other Westside routes.",
      },
    ],
    localResources: [{ label: "Santa Monica Chamber of Commerce", url: "https://smchamber.com/" }],
    nearbyAreaSlugs: ["venice", "brentwood", "sawtelle"],
  },
  {
    slug: "culver-city",
    navLabel: "Culver City",
    h1: "House Cleaning in Culver City, CA",
    metaTitle: "House Cleaning in Culver City, LA | Spottly",
    metaDescription:
      "Spottly cleans homes, condos, and offices across Culver City — Carlson Park to the Arts District — for a studio-and-tech town that runs on a schedule. Book today.",
    leadHtml: `<p>Culver City punches above its size: the historic "Heart of Screenland" now anchors a dense cluster of studios and tech offices, and that mix shapes the cleaning demand. Spottly works both sides of it here — the 1920s–40s single-family homes around Carlson Park and Sunkist Park, the newer downtown condos and apartments, and the offices that fill the Hayden Tract and the studio campuses.</p>`,
    angleHeading: "Media/tech offices and downtown density",
    angleHtml: `<p>Culver City's economy is unusually office-heavy for its footprint: Sony Pictures is headquartered here, and Amazon, Apple, and HBO Max took major space at and around Culver Studios and the Hayden Tract. That concentration drives real <strong>commercial and office cleaning</strong> demand alongside the residential work — and the downtown apartment boom means recurring and turnover cleaning for renters within walking distance of those jobs.</p>`,
    areasServedIntro:
      "Downtown Culver City, Carlson Park, Sunkist Park, Fox Hills, Blair Hills, Culver Crest, and the Arts District / Hayden Tract.",
    servicesAvailable: [
      { slug: "commercial-cleaning", blurb: "offices around the studios and the Hayden Tract, after-hours or day-porter." },
      { slug: "standard-cleaning", blurb: "upkeep for homes and downtown apartments." },
      { slug: "recurring-cleaning", blurb: "set schedules for busy studio/tech households." },
      { slug: "move-in-move-out-cleaning", blurb: "for downtown rental turnover." },
      { slug: "deep-cleaning", blurb: "reset for older Carlson Park–era homes." },
      { slug: "airbnb-cleaning", blurb: "short-term rental turnovers." },
    ],
    proofPlaceholder: "Needs one — insert a real Culver City customer review when available. Do not fabricate.",
    faqs: [
      {
        question: "Do you clean offices near the studios and Hayden Tract?",
        answerHtml:
          "Yes — Culver City's office density is one reason we serve it. We handle after-hours janitorial and day-porter coverage for offices around the studio campuses and the Arts District.",
      },
      {
        question: "Do you serve Carlson Park and Fox Hills?",
        answerHtml: "Yes, plus Downtown, Sunkist Park, Blair Hills, Culver Crest, and the Arts District.",
      },
      {
        question: "Can you do turnover cleans for downtown apartments?",
        answerHtml:
          "Yes — the downtown residential growth means frequent move-in/move-out work, and we clean to the landlord standard for deposit protection.",
      },
      {
        question: "Are you available around Culver City work schedules?",
        answerHtml: "Yes — recurring and commercial cleaning can be scheduled evenings or off-hours to fit studio and office routines.",
      },
    ],
    localResources: [{ label: "Culver City Chamber of Commerce", url: "https://www.culvercitychamber.com/" }],
    nearbyAreaSlugs: ["marina-del-rey", "westchester", "venice"],
  },
  {
    slug: "beverly-hills",
    navLabel: "Beverly Hills",
    h1: "House Cleaning in Beverly Hills, CA",
    metaTitle: "House Cleaning in Beverly Hills | Spottly",
    metaDescription:
      "Spottly cleans Beverly Hills estates and condos — the Flats, Trousdale, and the hills — with the discretion and detail large homes require. Book a Beverly Hills clean.",
    leadHtml: `<p>Beverly Hills is a large-home market, and large homes are a different cleaning job — more square footage, more delicate finishes, and owners who expect discretion and consistency. Spottly cleans the range here: the estates of the Flats between Santa Monica and Sunset, the mid-century homes of Trousdale, the hillside properties of the Beverly Hills Post Office area, and the condos along the Wilshire corridor.</p>`,
    angleHeading: "Luxury estate stock",
    angleHtml: `<p>The defining fact about cleaning in Beverly Hills is scale and finish: this is one of LA's densest concentrations of large single-family estates, with fine surfaces — stone, hardwood, custom fixtures — that reward regular, careful maintenance over occasional heavy resets. That's why <strong>recurring service and periodic deep cleans</strong> carry most of the demand here, keeping a big home consistently presentable rather than letting it drift.</p>`,
    areasServedIntro:
      "The Flats, Trousdale Estates, the Beverly Hills Post Office (hillside) area, the Golden Triangle business district, and the Wilshire condo corridor.",
    servicesAvailable: [
      { slug: "recurring-cleaning", blurb: "the core service for large homes; a set rhythm keeps a big house effortless." },
      { slug: "deep-cleaning", blurb: "periodic top-to-bottom reset for estates." },
      { slug: "standard-cleaning", blurb: "maintenance for condos and smaller homes." },
      { slug: "move-in-move-out-cleaning", blurb: "empty-home cleans between owners or tenants." },
      { slug: "commercial-cleaning", blurb: "offices in the Golden Triangle." },
      { slug: "airbnb-cleaning", blurb: "turnovers for luxury short-term rentals." },
    ],
    proofPlaceholder: "Needs one — insert a real Beverly Hills customer review when available. Do not fabricate.",
    faqs: [
      {
        question: "Do you clean large estates in the Flats and Trousdale?",
        answerHtml: "Yes — large single-family homes are our most common Beverly Hills job. We scale the team and time to the square footage and finish.",
      },
      {
        question: "Do you offer recurring service for big homes?",
        answerHtml:
          "Yes, and it's usually the best fit here — regular visits keep a large home consistently maintained, and the per-visit rate is lower on a set schedule.",
      },
      {
        question: "Do you serve the hillside (Post Office) area?",
        answerHtml: "Yes, along with the Flats, Trousdale, the Golden Triangle, and the Wilshire condos.",
      },
      {
        question: "Can you clean around fine finishes?",
        answerHtml: "Yes — we match products to each surface (stone, hardwood, custom fixtures). Point out anything specialized and we'll plan for it.",
      },
    ],
    localResources: [{ label: "Beverly Hills Chamber of Commerce", url: "https://www.beverlyhillschamber.com/" }],
    nearbyAreaSlugs: ["west-hollywood", "mid-city", "brentwood"],
  },
  {
    slug: "west-hollywood",
    navLabel: "West Hollywood",
    h1: "House Cleaning in West Hollywood, CA",
    metaTitle: "House Cleaning in West Hollywood | Spottly",
    metaDescription:
      "Spottly cleans West Hollywood's dense apartments and condos — Sunset Strip to the Design District — with fast turnovers for a renter's city. Book a WeHo clean today.",
    leadHtml: `<p>West Hollywood is one of the most densely populated cities in LA County, and it's overwhelmingly a renter's city — which makes it apartment-and-condo territory first. Spottly's work here skews to exactly that: the 1920s–30s courtyard buildings, the mid-rise condos, and the constant tenant turnover that comes with a young, mobile, renter-majority population.</p>`,
    angleHeading: "Density and renter turnover",
    angleHtml: `<p>The cleaning reality in West Hollywood is volume and turnover. High rental density means frequent move-in/move-out cleans and steady recurring demand in smaller footprints, where efficient, thorough apartment cleaning matters more than estate-scale work. And with California capping most deposits at one month's rent, a landlord-standard move-out clean is worth doing right. Commercial demand runs along the Sunset Strip and Santa Monica Boulevard corridors.</p>`,
    areasServedIntro:
      "The Sunset Strip, the West Hollywood Design District, the Santa Monica Boulevard corridor, the Norma Triangle, and the Eastside near Plummer Park.",
    servicesAvailable: [
      { slug: "move-in-move-out-cleaning", blurb: "for the city's constant rental turnover and deposit walkthroughs." },
      { slug: "recurring-cleaning", blurb: "biweekly upkeep sized for apartments and condos." },
      { slug: "standard-cleaning", blurb: "one-off apartment cleans." },
      { slug: "deep-cleaning", blurb: "reset for a lived-in unit." },
      { slug: "airbnb-cleaning", blurb: "turnovers for short-term rentals." },
      { slug: "commercial-cleaning", blurb: "offices and storefronts along Sunset and Santa Monica Blvd." },
    ],
    proofPlaceholder: "Needs one — insert a real West Hollywood customer review when available. Do not fabricate.",
    faqs: [
      {
        question: "Do you do apartment move-out cleans in WeHo?",
        answerHtml: "Yes — it's one of our most common jobs here given the rental density. We target the landlord's inspection list so your deposit is protected.",
      },
      {
        question: "Do you serve the Design District and Norma Triangle?",
        answerHtml: "Yes, along with the Sunset Strip, the Santa Monica Blvd corridor, and the Eastside near Plummer Park.",
      },
      {
        question: "Is biweekly cleaning a good fit for a WeHo apartment?",
        answerHtml:
          "For most renters here, yes — it keeps a smaller unit consistently clean at a lower per-visit rate than weekly, and you can adjust anytime.",
      },
      {
        question: "How fast can you reach West Hollywood?",
        answerHtml: "We run Westside and central routes daily, so WeHo is an easy reach.",
      },
    ],
    localResources: [{ label: "West Hollywood Chamber of Commerce", url: "https://www.wehochamber.com/" }],
    nearbyAreaSlugs: ["beverly-hills", "mid-city", "koreatown"],
  },
  {
    slug: "marina-del-rey",
    navLabel: "Marina del Rey",
    h1: "House Cleaning in Marina del Rey, CA",
    metaTitle: "House Cleaning in Marina del Rey | Spottly",
    metaDescription:
      "Spottly cleans Marina del Rey's waterfront condos and apartments — from the harbor to the Peninsula — with salt-air detail and quick turnovers. Book a Marina clean.",
    leadHtml: `<p>Marina del Rey is built around the largest man-made small-craft harbor in the country, and its housing follows the water: dense condo and apartment complexes ringing the basins, luxury waterfront rentals, and a steady stream of corporate and short-term tenants who come for the boating lifestyle. Spottly cleans across that mix — the harbor-side high-rises, the Peninsula units, and the rentals that turn over between guests.</p>`,
    angleHeading: "Waterfront rentals and salt air",
    angleHtml: `<p>Marina del Rey is an unincorporated pocket of LA County defined by the harbor, and that drives two cleaning realities. The salt air and dockside humidity leave film and corrosion risk on glass, railings, and fixtures that need regular attention. And the high concentration of corporate, furnished, and short-term waterfront rentals means frequent turnover cleaning — units reset to a guest-ready or move-in-ready standard between occupants.</p>`,
    areasServedIntro: "The harbor basins and waterfront high-rises, Fisherman's Village, the Marina Peninsula, and the Silver Strand edge.",
    servicesAvailable: [
      { slug: "airbnb-cleaning", blurb: "turnovers for waterfront short-term and corporate rentals." },
      { slug: "move-in-move-out-cleaning", blurb: "resets for furnished-rental churn." },
      { slug: "recurring-cleaning", blurb: "upkeep for harbor-side condos." },
      { slug: "standard-cleaning", blurb: "routine apartment and condo cleans." },
      { slug: "deep-cleaning", blurb: "reset against salt-air buildup." },
      { slug: "commercial-cleaning", blurb: "marina-area offices." },
    ],
    proofPlaceholder: "Needs one — insert a real Marina del Rey customer review when available. Do not fabricate.",
    faqs: [
      {
        question: "Do you clean waterfront condos and high-rises here?",
        answerHtml: "Yes — the harbor-side condo and apartment stock is the core of our Marina del Rey work, including the Peninsula and Fisherman's Village area.",
      },
      {
        question: "Do you handle short-term and corporate rental turnovers?",
        answerHtml:
          "Yes. Marina del Rey has a high share of furnished and short-term waterfront rentals; we reset them to a guest- or move-in-ready standard between occupants.",
      },
      {
        question: "Does salt air need special attention?",
        answerHtml: "Near the water, yes — we wipe glass, railings, and fixtures that catch salt film and dockside moisture so it doesn't build up or corrode.",
      },
      {
        question: "Do you cover the surrounding LAX-coastal area?",
        answerHtml: "Yes — Marina del Rey, Westchester, Playa del Rey, and Playa Vista are all within our coastal route.",
      },
    ],
    localResources: [{ label: "LAX Coastal Chamber of Commerce (serves Marina del Rey & Westchester)", url: "https://laxcoastal.com/" }],
    nearbyAreaSlugs: ["venice", "westchester", "culver-city"],
  },
  {
    slug: "venice",
    navLabel: "Venice",
    h1: "House Cleaning in Venice, CA",
    metaTitle: "House Cleaning in Venice, CA | Spottly",
    metaDescription:
      "Spottly cleans Venice homes, canal houses, and short-term rentals — Abbot Kinney to the boardwalk — with turnover speed and coastal detail. Book a Venice clean today.",
    leadHtml: `<p>Venice runs on two engines: tourism and tech. The short-term rental market near the boardwalk and Abbot Kinney is one of the busiest on the Westside, and the "Silicon Beach" office cluster brought a wave of tech workers and creative offices inland of the sand. Spottly cleans across it — the Craftsman bungalows and canal houses, the beach-block short-term rentals, and the offices along the tech corridor.</p>`,
    angleHeading: "Airbnb/STR density and Silicon Beach",
    angleHtml: `<p>Venice is defined for cleaning by its short-term rental volume. Between Ocean Front Walk, Windward Avenue, and the Venice Canals, a large share of housing turns over between guests on a hospitality clock — so <strong>Airbnb / vacation-rental turnover</strong> is a signature service here, not an afterthought. Add the Silicon Beach offices for commercial demand, and the constant sand-and-salt intrusion that beach-block units fight daily.</p>`,
    areasServedIntro: "Abbot Kinney, Ocean Front Walk (the boardwalk), the Venice Canals, Windward Avenue, the Rose Avenue corridor, and Oakwood.",
    servicesAvailable: [
      { slug: "airbnb-cleaning", blurb: "the signature Venice service: fast turnovers with restock, linens, and photo proof for beach-area rentals." },
      { slug: "move-in-move-out-cleaning", blurb: "resets for the rental churn." },
      { slug: "standard-cleaning", blurb: "upkeep for bungalows and canal homes." },
      { slug: "recurring-cleaning", blurb: "set schedules against sand-and-salt buildup." },
      { slug: "deep-cleaning", blurb: "periodic reset for lived-in beach homes." },
      { slug: "commercial-cleaning", blurb: "Silicon Beach offices." },
    ],
    proofPlaceholder: "Needs one — insert a real Venice customer review when available. Do not fabricate.",
    faqs: [
      {
        question: "Do you do same-day Airbnb turnovers in Venice?",
        answerHtml:
          "Yes — Venice's short-term rental density is exactly why we prioritize it. We handle same-day checkout-to-check-in windows with linens, restock, and before/after photos.",
      },
      {
        question: "Do you serve the Canals and Abbot Kinney?",
        answerHtml: "Yes, plus Ocean Front Walk, Windward Avenue, the Rose Avenue corridor, and Oakwood.",
      },
      {
        question: "Do beach-block homes need more frequent cleaning?",
        answerHtml: "Often, yes — sand and salt intrude constantly near the boardwalk, so recurring service keeps floors, glass, and fixtures ahead of it.",
      },
      {
        question: "Can you clean Silicon Beach offices in Venice?",
        answerHtml: "Yes — we handle commercial and office cleaning along the tech corridor, after-hours if needed.",
      },
    ],
    localResources: [{ label: "Venice Chamber of Commerce", url: "https://venicechamber.net/" }],
    nearbyAreaSlugs: ["santa-monica", "marina-del-rey", "culver-city"],
  },
  {
    slug: "sawtelle",
    navLabel: "Sawtelle",
    h1: "House Cleaning in Sawtelle / West LA",
    metaTitle: "House Cleaning in Sawtelle / West LA | Spottly",
    metaDescription:
      "Spottly cleans Sawtelle and West LA — Japantown's apartments to UCLA-adjacent rentals — with turnover speed and detail. Book a Sawtelle / West LA clean today.",
    leadHtml: `<p>Sawtelle — West LA's Japantown — was its own city until 1922, and it still reads as a distinct district: the restaurant-and-retail spine of Sawtelle Boulevard, wrapped by a dense mix of older bungalows and apartment buildings just south of UCLA and Westwood. Spottly cleans the whole footprint, bounded roughly by Wilshire, the 10, the 405, and Centinela.</p>`,
    angleHeading: "Dense apartments and UCLA-adjacent turnover",
    angleHtml: `<p>Sawtelle's cleaning profile is set by density and proximity to UCLA. It's apartment-heavy, with a student- and young-professional-adjacent population that turns over on the academic and job calendar — driving move-in/move-out and recurring demand in compact units. The Sawtelle Boulevard business district adds a steady layer of commercial and restaurant-area cleaning that a purely residential neighborhood wouldn't have.</p>`,
    areasServedIntro:
      "The Sawtelle Boulevard / Japantown district, the residential blocks between Olympic and Santa Monica Blvd, and the West LA corridor toward Westwood.",
    servicesAvailable: [
      { slug: "move-in-move-out-cleaning", blurb: "for UCLA-calendar and job-driven apartment turnover." },
      { slug: "recurring-cleaning", blurb: "biweekly upkeep for compact units." },
      { slug: "standard-cleaning", blurb: "one-off apartment and bungalow cleans." },
      { slug: "deep-cleaning", blurb: "reset for older bungalow stock." },
      { slug: "commercial-cleaning", blurb: "Sawtelle Blvd storefronts and offices." },
      { slug: "airbnb-cleaning", blurb: "short-term rental turnovers." },
    ],
    proofPlaceholder: "Needs one — insert a real Sawtelle / West LA customer review when available. Do not fabricate.",
    faqs: [
      {
        question: "Do you serve the Sawtelle Japantown area and around UCLA?",
        answerHtml: "Yes — we cover the Sawtelle Boulevard district and the residential blocks toward West LA and Westwood.",
      },
      {
        question: "Do you handle student and rental turnover cleans?",
        answerHtml:
          "Yes. Sawtelle's UCLA-adjacent, apartment-heavy stock turns over on the academic and job calendar, and we clean to the landlord standard for deposits.",
      },
      {
        question: "Can you clean older bungalows here?",
        answerHtml: "Yes — the neighborhood has a lot of older bungalow stock; a deep clean resets one, and recurring service keeps it up.",
      },
      {
        question: "Do you clean Sawtelle Boulevard businesses?",
        answerHtml: "Yes — we handle commercial and restaurant-area cleaning along the Sawtelle Blvd district.",
      },
    ],
    localResources: [
      { label: "Sawtelle Japantown Association", url: "https://sawtelleja.org/" },
      { label: "West Los Angeles–Sawtelle Neighborhood Council", url: "https://www.westlasawtelle.org/" },
    ],
    nearbyAreaSlugs: ["brentwood", "santa-monica", "culver-city"],
  },
  {
    slug: "brentwood",
    navLabel: "Brentwood",
    h1: "House Cleaning in Brentwood, CA",
    metaTitle: "House Cleaning in Brentwood, LA | Spottly",
    metaDescription:
      "Spottly cleans Brentwood estates and canyon homes — San Vicente to Mandeville Canyon — with deep-clean detail for fire-zone dust. Book a Brentwood clean today.",
    leadHtml: `<p>Brentwood is one of LA's wealthiest neighborhoods and among its largest-home markets — roughly 42,000 residents spread across estates near San Vicente Boulevard and hillside properties climbing into Mandeville Canyon. Spottly cleans the range: the flatland estates, the canyon and hillside homes, and the condos and smaller homes along the commercial spines of Wilshire, San Vicente, and Sunset.</p>`,
    angleHeading: "Estates in a Very High Fire Hazard Zone",
    angleHtml: `<p>Brentwood has a cleaning problem most neighborhoods don't: from Mulholland down to Sunset, it's a state-designated <strong>Very High Fire Hazard Severity Zone</strong>, a long urban-wildland interface that has burned repeatedly. That means hillside and canyon homes here contend with wildfire ash, soot, and Santa Ana–driven dust that settle on every surface — which pushes real <strong>deep cleaning</strong> demand on top of the recurring maintenance large estates already need.</p>`,
    areasServedIntro:
      "The estates near San Vicente Boulevard (with its landmark coral-tree median), Brentwood Village, the Sunset Boulevard corridor, and the hillside homes up toward Mandeville Canyon.",
    servicesAvailable: [
      { slug: "deep-cleaning", blurb: "reset for ash, soot, and Santa Ana dust in hillside and canyon homes." },
      { slug: "recurring-cleaning", blurb: "the core service for keeping a large estate effortless." },
      { slug: "standard-cleaning", blurb: "upkeep for condos and smaller homes." },
      { slug: "move-in-move-out-cleaning", blurb: "empty-home cleans between owners or tenants." },
      { slug: "commercial-cleaning", blurb: "offices along San Vicente and Wilshire." },
      { slug: "airbnb-cleaning", blurb: "turnovers for high-end short-term rentals." },
    ],
    proofPlaceholder: "Needs one — insert a real Brentwood customer review when available. Do not fabricate.",
    faqs: [
      {
        question: "Do you clean hillside and canyon homes toward Mandeville Canyon?",
        answerHtml: "Yes — the hillside and canyon estates are a core part of our Brentwood work, including the properties most exposed to dust and ash.",
      },
      {
        question: "Does the fire-hazard zone affect cleaning here?",
        answerHtml:
          "It does — Brentwood is a designated Very High Fire Hazard Severity Zone, so hillside homes accumulate wildfire ash, soot, and Santa Ana dust. A deep clean clears it from the surfaces routine cleaning skips.",
      },
      {
        question: "Do you offer recurring service for large estates?",
        answerHtml: "Yes — it's usually the best fit for a big home, keeping it consistently maintained at a lower per-visit rate than one-off cleans.",
      },
      {
        question: "Do you serve Brentwood Village and the San Vicente area?",
        answerHtml: "Yes, along with the Sunset corridor and the hillside neighborhoods.",
      },
    ],
    localResources: [{ label: "Brentwood Community Council", url: "https://www.bcc90049.org/" }],
    nearbyAreaSlugs: ["sawtelle", "santa-monica"],
  },
  {
    slug: "westchester",
    navLabel: "Westchester",
    h1: "House Cleaning in Westchester, CA",
    metaTitle: "House Cleaning in Westchester, LA | Spottly",
    metaDescription:
      "Spottly cleans Westchester — Kentwood homes, LMU rentals, and Playa-adjacent condos near LAX — with recurring and turnover detail. Book a Westchester clean today.",
    leadHtml: `<p>Westchester sits right by LAX, and it's the most suburban-feeling area Spottly serves on this side of town: block after block of post-war single-family tract homes, anchored by Loyola Marymount University and edged by the newer density of Playa Vista and Playa del Rey. Spottly cleans across it — the Kentwood and Westchester Bluffs homes, the LMU-adjacent rentals, and the Playa-side condos.</p>`,
    angleHeading: "Post-war tracts, LMU, and LAX/Silicon Beach",
    angleHtml: `<p>Westchester's cleaning demand comes from a specific blend: a large stock of mid-century single-family tract homes that suit <strong>recurring family cleaning</strong>, a Loyola Marymount student-rental layer that drives <strong>move-in/move-out</strong> turnover on the academic calendar, and a wave of LAX-area and Playa Vista (Silicon Beach) workers keeping recurring apartment demand steady. Proximity to the airport also means more airborne grit settling on surfaces.</p>`,
    areasServedIntro:
      "Kentwood, the Westchester Bluffs, the Loyola Marymount–adjacent blocks, and the Sepulveda and Manchester corridors, extending toward Playa del Rey and Playa Vista.",
    servicesAvailable: [
      { slug: "recurring-cleaning", blurb: "the core service for Westchester's family tract homes." },
      { slug: "move-in-move-out-cleaning", blurb: "for LMU-calendar rental turnover." },
      { slug: "standard-cleaning", blurb: "routine single-family upkeep." },
      { slug: "deep-cleaning", blurb: "reset for older tract homes." },
      { slug: "commercial-cleaning", blurb: "offices along the LAX and Playa Vista corridors." },
      { slug: "airbnb-cleaning", blurb: "turnovers for airport-area short-term rentals." },
    ],
    proofPlaceholder: "Needs one — insert a real Westchester customer review when available. Do not fabricate.",
    faqs: [
      {
        question: "Do you serve Kentwood and the areas near LMU?",
        answerHtml: "Yes — we cover Kentwood, the Westchester Bluffs, and the Loyola Marymount–adjacent blocks, out toward Playa del Rey and Playa Vista.",
      },
      {
        question: "Do you handle student rental turnovers near LMU?",
        answerHtml: "Yes. The LMU rental layer turns over on the academic calendar, and our move-out clean targets the landlord's inspection list for deposit protection.",
      },
      {
        question: "Is recurring cleaning common for Westchester homes?",
        answerHtml: "Yes — the mid-century family tract homes here are a natural fit for a set weekly or biweekly schedule.",
      },
      {
        question: "Do you cover the wider LAX-coastal area?",
        answerHtml: "Yes — Westchester, Playa Vista, Playa del Rey, and Marina del Rey are all on our coastal route.",
      },
    ],
    localResources: [{ label: "LAX Coastal Chamber of Commerce (serves Westchester & Marina del Rey)", url: "https://laxcoastal.com/" }],
    nearbyAreaSlugs: ["marina-del-rey", "culver-city"],
  },
  {
    slug: "mid-city",
    navLabel: "Mid-City",
    h1: "House Cleaning in Mid-City West — Miracle Mile & Fairfax",
    metaTitle: "House Cleaning in Mid-City / Miracle Mile | Spottly",
    metaDescription:
      "Spottly cleans Mid-City West — Miracle Mile, Fairfax, and Park La Brea's apartments and condos — with turnover speed and detail. Book a Mid-City clean today.",
    leadHtml: `<p>Mid-City West is apartment country. It stretches across Miracle Mile, Fairfax, Beverly Grove, and Park La Brea — and Park La Brea alone is one of the largest apartment communities in the western United States, thousands of units in a single development. Add the mid-rise condos along Wilshire's Museum Row and the older courtyard buildings around Fairfax, and Spottly's work here is dense-residential first.</p>`,
    angleHeading: "Park La Brea density and Museum Row",
    angleHtml: `<p>The cleaning profile is set by concentration of renters. Park La Brea and the Miracle Mile mid-rises pack a huge rental population into a small area, which drives constant <strong>move-in/move-out and recurring apartment cleaning</strong> — high volume, compact units, landlord-standard turnovers. The Museum Row and Wilshire commercial strip (LACMA, the La Brea Tar Pits, offices) adds a commercial layer alongside the residential work.</p>`,
    areasServedIntro: "Miracle Mile, the Fairfax District, Beverly Grove, Carthay Circle, the Melrose District, and Park La Brea.",
    servicesAvailable: [
      { slug: "recurring-cleaning", blurb: "biweekly upkeep for Park La Brea and Miracle Mile apartments." },
      { slug: "move-in-move-out-cleaning", blurb: "high-volume turnover for the dense rental stock." },
      { slug: "standard-cleaning", blurb: "one-off apartment and condo cleans." },
      { slug: "deep-cleaning", blurb: "reset for older Fairfax courtyard units." },
      { slug: "commercial-cleaning", blurb: "Museum Row and Wilshire offices." },
      { slug: "airbnb-cleaning", blurb: "short-term rental turnovers." },
    ],
    proofPlaceholder: "Needs one — insert a real Mid-City West customer review when available. Do not fabricate.",
    faqs: [
      {
        question: "Do you clean apartments in Park La Brea?",
        answerHtml: "Yes — Park La Brea's scale makes it a core part of our Mid-City work, along with the Miracle Mile mid-rises and the Fairfax courtyard buildings.",
      },
      {
        question: "Do you serve Miracle Mile and the Fairfax District?",
        answerHtml: "Yes, plus Beverly Grove, Carthay Circle, the Melrose District, and Park La Brea.",
      },
      {
        question: "Do you handle high-volume apartment turnovers?",
        answerHtml: "Yes. The rental density here means frequent move-in/move-out work; we clean to the landlord standard so deposits are protected.",
      },
      {
        question: "Can you clean offices along Museum Row?",
        answerHtml: "Yes — we handle commercial and office cleaning along the Wilshire / Miracle Mile corridor.",
      },
    ],
    localResources: [{ label: "Mid City West Neighborhood Council", url: "https://www.midcitywest.org/" }],
    nearbyAreaSlugs: ["west-hollywood", "beverly-hills", "koreatown"],
  },
  {
    slug: "koreatown",
    navLabel: "Koreatown",
    h1: "House Cleaning in Koreatown, CA",
    metaTitle: "House Cleaning in Koreatown, LA | Spottly",
    metaDescription:
      "Spottly cleans Koreatown's dense pre-war apartments and condos along the Wilshire corridor — with fast turnovers for a high-churn area. Book a Koreatown clean today.",
    leadHtml: `<p>Koreatown is one of the densest neighborhoods in Los Angeles — a walkable, around-the-clock district of pre-war and mid-rise apartment buildings and condos stacked along the Wilshire, Western, and Vermont corridors. That density defines Spottly's work here: compact units, a huge renter population, and turnover that rarely slows.</p>`,
    angleHeading: "Extreme density and high turnover",
    angleHtml: `<p>Koreatown's cleaning demand is a function of sheer density and churn: tens of thousands of residents in a small footprint, most of them renters in older mid-rise apartments and condos, with a walkability that keeps the population mobile. That drives constant <strong>move-in/move-out and recurring apartment cleaning</strong> — landlord-standard turnovers in tight units — plus a heavy layer of restaurant and office <strong>commercial cleaning</strong> along the Wilshire nightlife-and-business corridor.</p>`,
    areasServedIntro:
      "The Wilshire Center corridor, the Western Avenue and Vermont Avenue spines, the blocks around the Wiltern, and the residential streets toward Hancock Park and Larchmont.",
    servicesAvailable: [
      { slug: "move-in-move-out-cleaning", blurb: "high-volume turnover for the dense rental stock." },
      { slug: "recurring-cleaning", blurb: "biweekly upkeep sized for compact apartments." },
      { slug: "standard-cleaning", blurb: "one-off apartment and condo cleans." },
      { slug: "deep-cleaning", blurb: "reset for older pre-war units." },
      { slug: "commercial-cleaning", blurb: "restaurants and offices along Wilshire." },
      { slug: "airbnb-cleaning", blurb: "short-term rental turnovers." },
    ],
    proofPlaceholder: "Needs one — insert a real Koreatown customer review when available. Do not fabricate.",
    faqs: [
      {
        question: "Do you clean apartments and condos along the Wilshire corridor?",
        answerHtml: "Yes — Koreatown's dense mid-rise apartment and condo stock is the core of our work here, from Wilshire Center to Western and Vermont.",
      },
      {
        question: "Do you handle frequent apartment turnovers?",
        answerHtml: "Yes. Koreatown's density and renter churn mean constant move-in/move-out work, and we clean to the landlord standard for deposit protection.",
      },
      {
        question: "Is biweekly cleaning a good fit for a K-town unit?",
        answerHtml:
          "For most compact apartments here, yes — it keeps a small, busy unit consistently clean at a lower per-visit rate, and you can adjust anytime.",
      },
      {
        question: "Do you clean Koreatown restaurants and offices?",
        answerHtml: "Yes — we handle commercial cleaning along the Wilshire business-and-nightlife corridor, after-hours where needed.",
      },
    ],
    localResources: [
      { label: "Wilshire Center – Koreatown Neighborhood Council", url: "https://www.wcknc.com/" },
      { label: "Wilshire Center Business Improvement District", url: "http://www.wilshirecenter.com/" },
    ],
    nearbyAreaSlugs: ["mid-city", "west-hollywood"],
  },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}
