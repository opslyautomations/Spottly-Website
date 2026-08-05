export interface ServiceFAQ {
  question: string;
  answerHtml: string;
}

export interface ServiceData {
  slug: string;
  navLabel: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  introHtml: string;
  bodyHtml: string;
  ctaHeading: string;
  ctaHtml: string;
  faqs: ServiceFAQ[];
  relatedServiceSlugs: string[];
}

export const SERVICES: ServiceData[] = [
  {
    slug: "standard-cleaning",
    navLabel: "Standard Cleaning",
    h1: "House Cleaning in Los Angeles",
    metaTitle: "House Cleaning in Los Angeles | Spottly",
    metaDescription:
      "Spottly's standard house cleaning keeps your LA home consistently fresh — kitchens, baths, floors, and dusting on a schedule that fits. Get a fast quote today.",
    primaryKeyword: "house cleaning Los Angeles",
    introHtml: `<p>A standard clean is maintenance, not rescue. It's the visit that keeps an already-livable home from sliding — kitchens wiped down, bathrooms sanitized, floors vacuumed and mopped, surfaces dusted — so dirt never gets the chance to settle in and become a project. If your place is generally in good shape and you just want it to stay that way without giving up your weekend, this is the service. If it's been a while and things have gotten away from you, start with a deep clean first and let standard cleaning hold the line afterward.</p>`,
    bodyHtml: `
<h2>What's included (room by room)</h2>
<ul>
  <li><strong>Kitchen:</strong> counters, stovetop, exterior of appliances, sink, and backsplash wiped and sanitized; trash emptied; floor mopped.</li>
  <li><strong>Bathrooms:</strong> toilet, tub/shower, sink, counters, and mirrors scrubbed and disinfected; floor cleaned.</li>
  <li><strong>Bedrooms &amp; living areas:</strong> dusting of reachable surfaces, vacuuming carpets, mopping hard floors, tidying, beds made on request.</li>
  <li><strong>Whole home:</strong> high-touch points (switches, handles, remotes) wiped; floors finished throughout.</li>
</ul>
<h2>What's not included (and what you can add on)</h2>
<p>A standard clean covers what's visible and reachable. It does <strong>not</strong> include heavy scrubbing of built-up grime, cleaning inside the oven or fridge, interior windows, or moving heavy furniture to clean underneath — those are deep-clean tasks and take dedicated time and products. Laundry and dishwashing aren't part of standard service either. Any of these can be added when you book — just tell us up front so we schedule the extra time.</p>
<h2>How the visit works</h2>
<p>Tell us your home's size and rough condition and we'll quote and schedule. A typical 3-bed / 2-bath takes a team roughly <strong>2–4 hours</strong> for a standard clean, depending on layout and how lived-in it is. You don't need to be home; many clients leave access instructions and come back to a finished house.</p>
<h2>Products</h2>
<p>We use professional-grade supplies and can clean with <strong>EPA Safer Choice–certified</strong> products on request — safer for kids, pets, and indoor air without giving up cleaning power. Just note the preference when you book.</p>
<h2>Who it's for</h2>
<p>Busy households, apartments and condos across the Westside, and anyone who wants a reliably tidy home without the weekend cleaning marathon. If you find yourself wanting this every couple of weeks, ask about <a href="/services/recurring-cleaning">recurring cleaning</a> — the per-visit rate drops on a schedule.</p>
<h2>Related services</h2>
<p>First clean in a while, or things have built up? A <a href="/services/deep-cleaning">deep cleaning</a> resets the home first. Want it handled on a set rhythm? See <a href="/services/recurring-cleaning">recurring cleaning</a>.</p>
`,
    ctaHeading: "Get your LA home back to effortless.",
    ctaHtml: `<p><strong>Request a quote for a standard clean</strong> and pick a time that fits your week.</p>`,
    faqs: [
      {
        question: "What's included in a standard house cleaning?",
        answerHtml:
          "Routine upkeep across the rooms you use most: dusting reachable surfaces, vacuuming and mopping floors, wiping and sanitizing kitchen surfaces and appliance exteriors, and fully cleaning bathrooms — toilet, tub or shower, sink, and mirrors. Trash is emptied and beds made on request. It keeps your home's current level of clean; it isn't the heavy scrubbing of a deep clean.",
      },
      {
        question: "How is standard cleaning different from a deep clean?",
        answerHtml:
          'Standard cleaning maintains a home that\'s already in decent shape. Deep cleaning restores one when grime has built up — it adds inside the oven and fridge, behind and under appliances, baseboards, grout, and detail work a standard visit skips. Most new clients start with a <a href="/services/deep-cleaning">deep clean</a>, then keep it up with standard visits.',
      },
      {
        question: "Do you bring your own supplies and equipment?",
        answerHtml:
          "Yes. Our teams arrive with everything needed. If you'd prefer we use EPA Safer Choice–certified products, or you have specific products you'd like us to use on certain surfaces, just tell us when you book.",
      },
      {
        question: "How long does a standard clean take?",
        answerHtml:
          "For a typical 3-bedroom, 2-bathroom home, a professional team usually needs about 2 to 4 hours. Time scales with square footage, number of bathrooms, and how lived-in the space is. We'll give you an estimate when we quote.",
      },
      {
        question: "Do I need to be home during the cleaning?",
        answerHtml:
          "No. Many clients provide entry instructions — a lockbox code, a key, or a callback number — and return to a finished home. If you'd rather be there, that's fine too.",
      },
      {
        question: "Do you do laundry and dishes?",
        answerHtml:
          "Those aren't part of a standard clean — they're personal chores that eat into cleaning time. We can wash dishes or start laundry as an add-on if you arrange it ahead, but by default the team focuses on cleaning your home's surfaces.",
      },
      {
        question: "Will you move furniture to clean underneath?",
        answerHtml:
          "We clean around and under furniture we can safely reach, but we don't move heavy pieces during a standard visit — it adds time and risks damage or injury. Pulling out sofas and appliances to clean behind them is a deep-clean task.",
      },
      {
        question: "How often should I book a standard clean?",
        answerHtml:
          'It depends on household size, pets, and how you live. Many homes do well every one to two weeks; lighter-use homes stretch to monthly. If you want a set schedule, <a href="/services/recurring-cleaning">recurring service</a> locks in your slot and lowers the per-visit price.',
      },
      {
        question: "Can I add oven, fridge, or interior windows to a standard clean?",
        answerHtml:
          "Yes — those are popular add-ons. Because they need extra time and specific products, just request them when booking so we schedule accordingly rather than springing them on the team day-of.",
      },
      {
        question: "Are your cleaning products safe for pets and kids?",
        answerHtml:
          'They can be. We\'re happy to clean with EPA Safer Choice–certified products, which the EPA reviews ingredient-by-ingredient for health and environmental safety while still requiring they perform. Learn more about the label here: <a href="https://www.epa.gov/saferchoice/learn-about-safer-choice-label" target="_blank" rel="noopener noreferrer">EPA Safer Choice label</a>.',
      },
    ],
    relatedServiceSlugs: ["deep-cleaning", "recurring-cleaning"],
  },
  {
    slug: "deep-cleaning",
    navLabel: "Deep Cleaning",
    h1: "Deep Cleaning Services in Los Angeles",
    metaTitle: "Deep Cleaning Services Los Angeles | Spottly",
    metaDescription:
      "A Spottly deep clean tackles the buildup a routine visit skips — inside appliances, baseboards, grout, and behind furniture, all in your lived-in LA home. Book now.",
    primaryKeyword: "deep cleaning services Los Angeles",
    introHtml: `<p>A deep clean is what you book when "wiped down" stops being enough. Over months, a lived-in home collects grime in the places a routine visit never reaches — grease film above the stove, soap scum baked into shower grout, dust on top of the fan blades, buildup behind the fridge you forgot was there. This service goes after exactly that, top to bottom, while you're still living in the space. It's the reset that makes everything after it easier to maintain.</p>`,
    bodyHtml: `
<h2>Deep vs standard — the honest difference</h2>
<p>A standard clean maintains; a deep clean <strong>restores</strong>. It includes everything in a standard visit and then adds the detail work: inside the oven and refrigerator, behind and beneath appliances, baseboards and door frames, window tracks, blinds, light fixtures, switch plates, and hand-scrubbed grout. It takes longer and costs more because it's more labor — and that's the point. Most homes need it once or twice a year, or as the first visit before switching to lighter maintenance.</p>
<h2>What a deep clean covers</h2>
<ul>
  <li><strong>Kitchen:</strong> inside the oven and fridge, degreased stovetop and hood, behind/under movable appliances, cabinet fronts, backsplash.</li>
  <li><strong>Bathrooms:</strong> descaled shower glass and fixtures, scrubbed grout and tile, disinfected every surface, exhaust fan wiped.</li>
  <li><strong>Whole home:</strong> baseboards, crown molding within reach, door frames, blinds, ceiling fans, light fixtures, vents, switch plates, and detailed floor work into corners and edges.</li>
</ul>
<h2>Working around a lived-in home</h2>
<p>Because you still live here, we clean around your furniture, belongings, and the food in your fridge — nothing gets emptied or thrown out without your say-so. Tell the team about anything delicate or off-limits and we'll work with it. (Emptied-out, top-to-bottom detailing of a space with the furniture gone is a different service — that's <a href="/services/move-in-move-out-cleaning">move-in / move-out cleaning</a>.)</p>
<h2>When a deep clean is worth it</h2>
<p>Before hosting, after a renovation, at a seasonal reset, when allergies flare, or simply when the house has drifted past what a quick clean fixes. The EPA notes indoor air can carry more dust and pollutants than outdoor air; clearing built-up dust from the surfaces a routine clean skips is part of what a deep clean actually does for the home, not just how it looks.</p>
<h2>Related services</h2>
<p>Want to keep this result instead of repeating it yearly? Pair it with <a href="/services/recurring-cleaning">recurring cleaning</a> and the home never drifts this far again. Just need routine upkeep? <a href="/services/standard-cleaning">Standard cleaning</a> is the lighter, faster visit.</p>
`,
    ctaHeading: "Give your home the reset it's overdue for.",
    ctaHtml: `<p><strong>Request a deep-cleaning quote</strong> and tell us the trouble spots — we'll bring the time and products to handle them.</p>`,
    faqs: [
      {
        question: "What's the difference between a deep clean and a standard clean?",
        answerHtml:
          "A standard clean keeps an already-tidy home maintained. A deep clean restores a home that's accumulated grime — it includes all standard tasks plus inside appliances, behind and under them, baseboards, grout, blinds, and fixtures. It takes longer and costs more because there's genuinely more labor and detail involved.",
      },
      {
        question: "What exactly is included in a deep cleaning?",
        answerHtml:
          "On top of a full standard clean: inside the oven and refrigerator, degreasing the stovetop and range hood, cleaning behind and beneath movable appliances, scrubbing grout and descaling shower glass, wiping baseboards, door frames, blinds, ceiling fans, light fixtures, vents, and switch plates, plus detailed edge-and-corner floor work.",
      },
      {
        question: "Why does my first clean have to be a deep clean?",
        answerHtml:
          "When a home hasn't had professional attention in a while, there's built-up grime a maintenance visit can't address in the time booked. Starting with a deep clean gets everything to a true baseline; after that, lighter standard or recurring visits can actually keep it there.",
      },
      {
        question: "Do you clean around my furniture and belongings?",
        answerHtml:
          'Yes — a deep clean happens in your occupied home, so we work around your things and never move or discard anything without asking. Point out anything fragile or off-limits and we\'ll plan around it. Deep detailing of a fully emptied home is our <a href="/services/move-in-move-out-cleaning">move-out service</a> instead.',
      },
      {
        question: "How long does a deep clean take?",
        answerHtml:
          "Longer than a standard visit — often several hours, and larger or more neglected homes can run most of a day, sometimes with a two-person team. The exact time depends on square footage, number of bathrooms, and current condition. We'll estimate when we quote.",
      },
      {
        question: "How much does a deep cleaning cost?",
        answerHtml:
          "It's priced on home size and condition rather than a flat rate, because a lightly-lived-in two-bedroom and a long-overdue four-bedroom are very different jobs. Tell us the size and the trouble spots and we'll give you a clear quote before anything's booked.",
      },
      {
        question: "How often should I get a deep clean?",
        answerHtml:
          "For most homes, once or twice a year is enough — often a seasonal reset — provided routine cleaning happens in between. Homes with pets, kids, or heavy use may want it quarterly. If you're on recurring service, you'll rarely need a full deep clean again.",
      },
      {
        question: "Does a deep clean help with allergies or air quality?",
        answerHtml:
          "It can help. Deep cleaning removes accumulated dust and allergens from surfaces a routine clean skips — tops of fixtures, vents, blinds, baseboards, behind furniture. Since indoor air can hold more dust and pollutants than outdoor air, clearing those reservoirs is part of the benefit.",
      },
      {
        question: "Can I get a deep clean before hosting or after a renovation?",
        answerHtml:
          "Absolutely — those are two of the most common reasons people book one. Renovation dust travels everywhere and settles into every crevice, and pre-event cleans put the whole home at its best. Book a few days ahead so we can reserve the longer window it needs.",
      },
      {
        question: "What products do you use for a deep clean?",
        answerHtml:
          'Professional-grade cleaners matched to each surface — degreasers for the kitchen, scale and grout treatments for baths. We can use EPA Safer Choice–certified products on request; the EPA vets each ingredient for health and environmental safety while still requiring real performance: <a href="https://www.epa.gov/saferchoice/learn-about-safer-choice-label" target="_blank" rel="noopener noreferrer">EPA Safer Choice label</a>.',
      },
    ],
    relatedServiceSlugs: ["move-in-move-out-cleaning", "recurring-cleaning", "standard-cleaning"],
  },
  {
    slug: "move-in-move-out-cleaning",
    navLabel: "Move-In / Move-Out Cleaning",
    h1: "Move-In / Move-Out Cleaning in Los Angeles",
    metaTitle: "Move-Out Cleaning in Los Angeles | Spottly",
    metaDescription:
      "Spottly's move-out cleaning readies an empty LA home for inspection — inside every cabinet, closet, and appliance — to protect your deposit. Book before your walkthrough.",
    primaryKeyword: "move out cleaning Los Angeles",
    introHtml: `<p>This is the clean that happens when the home is <strong>empty</strong> — you're handing keys back, or picking them up for a place someone else just left. With the furniture gone, everything is exposed: the dust behind where the fridge stood, the scuffs the dresser was hiding, the grime in the closet corners. A move-out clean reaches all of it, because on the way out you're being graded by whoever holds your deposit, and on the way in you're inheriting whatever the last tenant left behind. Different stakes than a normal clean — and a different standard.</p>`,
    bodyHtml: `
<h2>What's included (empty-home standard)</h2>
<p>Because nothing's in the way, we clean <strong>inside everything</strong>:</p>
<ul>
  <li><strong>Kitchen:</strong> inside and outside of every cabinet and drawer, inside the oven and refrigerator, degreased stovetop and hood, sink, and backsplash.</li>
  <li><strong>Bathrooms:</strong> descaled and disinfected tub, shower, toilet, sink, mirrors; scrubbed grout; wiped exhaust fans.</li>
  <li><strong>Every room:</strong> inside closets and shelving, baseboards, window tracks and sills, blinds, ceiling fans, light fixtures, switch plates, doors and frames.</li>
  <li><strong>Floors:</strong> vacuumed and mopped throughout, into every corner the furniture used to cover; all remaining trash hauled out.</li>
</ul>
<h2>Moving in instead of out?</h2>
<p>Same empty-home, top-to-bottom clean — just aimed at a fresh start rather than a deposit. We sanitize the kitchen and baths, wipe inside all cabinets and closets, and clear out the dust and residue the previous occupant left, so you unpack into a genuinely clean space instead of someone else's leftovers.</p>
<h2>Protecting your deposit</h2>
<p>Most deposit disputes come down to the same short list property managers know to check: greasy ovens, hard-water stains on shower glass, dusty blinds, scuffed baseboards, and marks behind where furniture sat. We work that exact list. In California, <strong>AB 12 (effective July 1, 2024) caps most residential security deposits at one month's rent</strong> — which makes the amount on the line real money worth protecting. On request, we can note the finished condition so you have a record for your walkthrough.</p>
<h2>When to schedule</h2>
<p>Book the clean for <strong>after all belongings are out</strong> (or before yours go in) — an empty unit cleans faster and more completely with nothing to work around. Give us your move date and lease-end timing and we'll slot the clean so it lands before your inspection, not after.</p>
<h2>Value</h2>
<p>A professional move-out clean typically runs a few hundred dollars — reliably less than the deposit deductions a failed walkthrough triggers. The receipt itself is also useful: it shows a good-faith cleaning effort if the condition is ever disputed.</p>
<h2>Related services</h2>
<p>Still living in the home and it just needs a heavy reset (furniture staying)? That's <a href="/services/deep-cleaning">deep cleaning</a>, not this. Managing a rental you turn over between guests? See <a href="/services/airbnb-cleaning">Airbnb &amp; vacation-rental cleaning</a>.</p>
`,
    ctaHeading: "Hand back a spotless unit and keep your deposit.",
    ctaHtml: `<p><strong>Book a move-out clean</strong> for the day after you're packed — tell us your walkthrough date and we'll beat it.</p>`,
    faqs: [
      {
        question: "What's included in a move-out cleaning?",
        answerHtml:
          "A top-to-bottom clean of an empty home: inside every cabinet, drawer, and closet; inside the oven and refrigerator; degreased kitchen; descaled and disinfected bathrooms; baseboards, window tracks, blinds, fixtures, doors, and switch plates wiped; floors vacuumed and mopped throughout; and trash removed. It targets exactly what landlords inspect.",
      },
      {
        question: "Will a move-out clean get my security deposit back?",
        answerHtml:
          "It removes the most common reasons deposits get docked — greasy ovens, soap scum, dusty blinds, dirty baseboards, marks behind furniture. It can't fix actual damage beyond normal wear, but for cleanliness-based deductions, a thorough move-out clean is what protects the deposit.",
      },
      {
        question: "How is this different from a deep clean?",
        answerHtml:
          'A <a href="/services/deep-cleaning">deep clean</a> is done in an occupied home, working around your furniture and belongings. A move-out clean assumes the home is empty, so we reach everything — inside all cabinets and closets, behind where appliances stood — and the result is graded by a landlord, not just enjoyed by you.',
      },
      {
        question: "Should the home be empty before you clean?",
        answerHtml:
          "Yes, ideally completely empty. Cleaning is faster and far more thorough with no boxes or furniture to work around, and an empty unit is the only way to reach inside closets and behind appliances. Schedule the clean for after your movers are done.",
      },
      {
        question: "Do you clean inside cabinets, closets, and appliances?",
        answerHtml:
          "Yes — that's the core of a move-out clean and where it differs most from routine cleaning. With everything emptied out, we clean the insides of cabinets and drawers, closet shelves, and the oven and refrigerator, which is exactly where inspectors look.",
      },
      {
        question: "Can you do a move-in clean before I move in?",
        answerHtml:
          "Yes. It's the same empty-home clean, aimed at giving you a fresh, sanitized start — kitchen and baths disinfected, inside all cabinets and closets wiped, and the prior occupant's dust and residue cleared before your things arrive.",
      },
      {
        question: "How much does move-out cleaning cost?",
        answerHtml:
          "It's based on the home's size and condition rather than a flat fee. For most rentals it's a few hundred dollars — generally less than the deductions a failed cleaning inspection causes. Send us the size and we'll quote before you commit.",
      },
      {
        question: "How much is a security deposit in California now?",
        answerHtml:
          'Under AB 12, effective July 1, 2024, most residential landlords can charge no more than one month\'s rent as a security deposit (a limited exception exists for certain small landlords). Details are on the state\'s official bill page: <a href="https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202320240AB12" target="_blank" rel="noopener noreferrer">CA AB 12, Legislative Information</a>.',
      },
      {
        question: "When should I schedule the cleaning around my move?",
        answerHtml:
          "After all your belongings are out and before your final walkthrough. Give us your lease-end date and inspection time and we'll place the clean so the unit is spotless when the landlord arrives — not scrambled the morning of.",
      },
      {
        question: "Do you provide proof of the cleaning for a deposit dispute?",
        answerHtml:
          "On request we can note the finished condition so you have a record alongside your own photos. It's smart to take timestamped photos of each room after cleaning and keep the service receipt — together they document good-faith effort if the deposit is ever contested.",
      },
    ],
    relatedServiceSlugs: ["deep-cleaning", "airbnb-cleaning"],
  },
  {
    slug: "recurring-cleaning",
    navLabel: "Recurring Cleaning",
    h1: "Recurring House Cleaning in Los Angeles",
    metaTitle: "Recurring Cleaning in Los Angeles | Spottly",
    metaDescription:
      "Weekly, biweekly, or monthly — Spottly's recurring cleaning keeps your LA home effortlessly clean, with a lower per-visit rate the more often we come. Start today.",
    primaryKeyword: "recurring cleaning service Los Angeles",
    introHtml: `<p>The point of recurring service isn't a single spotless day — it's never having a dirty week again. Instead of cleaning reactively when the place gets bad, you set a rhythm and your home simply stays clean between visits, with less buildup for us to fight each time. The only real decision is frequency, and that's less about your budget than about how fast your home actually gets messy. Below is how to pick.</p>`,
    bodyHtml: `
<h2>Weekly vs biweekly vs monthly</h2>
<ul>
  <li><strong>Weekly</strong> — the tightest control. Dust and grime never get a foothold, so each visit is lighter and the home stays consistently spotless. Best for larger families, pets, frequent entertaining, or allergy-sensitive households.</li>
  <li><strong>Biweekly</strong> — the most popular balance. Two weeks isn't long enough for heavy grease or soap scum to set in, so upkeep stays easy and cost stays reasonable. The default sweet spot for most homes.</li>
  <li><strong>Monthly</strong> — the lowest monthly spend. Good for smaller or lightly-used homes that stay tidy on their own, though more builds up between visits so each one runs longer. Many monthly clients pair it with an occasional deep clean.</li>
</ul>
<p>Not sure? Start biweekly and adjust — most people land there anyway.</p>
<h2>How recurring pricing works</h2>
<p>Here's the part people miss: <strong>the more often we come, the less each visit costs.</strong> Frequent visits mean less buildup and less time per clean, so weekly service carries the lowest per-visit rate, biweekly the next, and monthly the highest per visit (even though it's the smallest monthly total). You're not penalized for committing to a schedule — you're rewarded for it.</p>
<h2>Same team, flexible schedule</h2>
<p>Recurring clients tend to get the same crew, who learn your home and your preferences over time. Life still happens — give us 24–48 hours' notice and we'll reschedule or skip a visit, and you can move up or down in frequency whenever your needs change. No rigid lock-in.</p>
<h2>Start with a reset</h2>
<p>If your home has visible buildup, jumping straight into maintenance won't deliver the result you're picturing — a maintenance visit isn't built to undo months of grime in one shot. Many clients begin with a one-time <a href="/services/deep-cleaning">deep clean</a> to establish a true baseline, then recurring service keeps it there for a fraction of the effort.</p>
<h2>What you actually get back</h2>
<p>Beyond a clean house: your weekends, and the mental load of one more thing you're behind on. A consistent schedule means the home never cycles between "just cleaned" and "embarrassing" — it just stays ready.</p>
<h2>Related services</h2>
<p>Prefer a single visit with no schedule? <a href="/services/standard-cleaning">Standard cleaning</a> is the one-off version. Starting from a home that's drifted? Begin with a <a href="/services/deep-cleaning">deep clean</a>, then maintain.</p>
`,
    ctaHeading: "Stop cleaning on the weekends.",
    ctaHtml: `<p><strong>Set up a recurring plan</strong> — pick weekly, biweekly, or monthly, and we'll help you land on the right rhythm.</p>`,
    faqs: [
      {
        question: "How often should I have my house cleaned?",
        answerHtml:
          "Match the frequency to how fast your home feels dirty again, not to a rule. Larger, busy, or pet-and-kid households usually want weekly; most homes do well biweekly; smaller or lightly-used homes can stretch to monthly. Biweekly is the most common starting point, and you can adjust anytime.",
      },
      {
        question: "What's the difference between weekly, biweekly, and monthly service?",
        answerHtml:
          "Weekly keeps the home the most consistently clean with the least buildup between visits. Biweekly balances cost and cleanliness and suits most households. Monthly has the lowest monthly cost but the most buildup per visit, so each clean takes longer — many monthly clients add an occasional deep clean.",
      },
      {
        question: "Do you offer a discount for more frequent cleaning?",
        answerHtml:
          "Yes. The per-visit price drops as frequency rises, because frequent visits mean less buildup and less time per clean. Weekly has the lowest cost per visit, biweekly next, and monthly the highest per visit. More often literally costs less each time we come.",
      },
      {
        question: "Is biweekly cleaning enough?",
        answerHtml:
          "For most homes, yes — two weeks isn't long enough for heavy grease, soap scum, or mildew to set in, so the home stays consistently comfortable without paying for weekly visits. If you find it's drifting between cleans, moving to weekly is a simple switch.",
      },
      {
        question: "Can I change my cleaning frequency after I start?",
        answerHtml:
          "Anytime. Many clients begin biweekly, then move up or down based on how the home feels between visits. Just let us know and we'll update your schedule — there's no penalty for adjusting.",
      },
      {
        question: "Will I get the same cleaner each time?",
        answerHtml:
          "We aim to send the same crew to recurring clients so they get to know your home, your layout, and your preferences. Consistency is one of the real advantages of a recurring plan over one-off bookings.",
      },
      {
        question: "What if I need to skip or reschedule a visit?",
        answerHtml:
          "Life happens — give us 24 to 48 hours' notice and we'll reschedule or skip that visit. Recurring service is meant to reduce stress, not add a rigid obligation to your calendar.",
      },
      {
        question: "Do I need a deep clean before starting recurring service?",
        answerHtml:
          'If your home already stays fairly tidy, no. If there\'s visible buildup, we recommend starting with a one-time <a href="/services/deep-cleaning">deep clean</a> so recurring visits begin from a real baseline — otherwise the first few maintenance cleans are fighting months of grime they aren\'t scoped for.',
      },
      {
        question: "Is there a contract or long-term commitment?",
        answerHtml:
          "Recurring service is an ongoing plan you can adjust or pause, not a locked contract. The value comes from the rhythm and the lower per-visit pricing, not from tying you down.",
      },
      {
        question: "How does recurring cleaning save money if I'm paying regularly?",
        answerHtml:
          "Two ways: the per-visit rate is lower than one-off cleans, and consistent upkeep prevents the buildup that forces expensive deep resets later. Factor in the weekend hours you get back, and a steady schedule is usually the best overall value.",
      },
    ],
    relatedServiceSlugs: ["deep-cleaning", "standard-cleaning"],
  },
  {
    slug: "airbnb-cleaning",
    navLabel: "Airbnb Cleaning",
    h1: "Airbnb & Vacation-Rental Turnover Cleaning in Los Angeles",
    metaTitle: "Airbnb Cleaning Service in Los Angeles | Spottly",
    metaDescription:
      "Spottly resets your LA short-term rental between guests — linens, restock, staging, and photo proof — with same-day turnovers that protect your reviews. Book today.",
    primaryKeyword: "airbnb cleaning service Los Angeles",
    introHtml: `<p>A guest walks into your listing with hotel expectations and a review form. That's a different job than cleaning a home someone lives in — a resident stops seeing the crumbs in the toaster and the hair on the bathroom floor; a stranger notices them in the first thirty seconds and mentions them in the review. Turnover cleaning also runs on a clock: the window between checkout and check-in is often just a few hours, and everything has to be reset, restocked, and inspected inside it. We clean to that standard, on that clock.</p>`,
    bodyHtml: `
<h2>The turnover, step by step</h2>
<p>Every reset covers four things, done in order:</p>
<ol>
  <li><strong>Linens &amp; beds</strong> — strip and replace sheets and towels, remake beds hotel-style, fresh bath linens folded and staged.</li>
  <li><strong>Full sanitize</strong> — kitchen and bathrooms cleaned and disinfected, dishes handled, appliance surfaces and high-touch points wiped, floors done.</li>
  <li><strong>Restock</strong> — verify and refill the consumables guests expect: toilet paper, paper towels, hand and dish soap, shampoo/conditioner/body wash, coffee, tea, and trash bags (from your on-site supply).</li>
  <li><strong>Guest-eye inspection</strong> — a final walkthrough for anything a stranger would catch: smells, streaks, a missed hair, staging out of place.</li>
</ol>
<h2>Same-day turnovers</h2>
<p>Same-day checkouts and check-ins are the single biggest operational headache in short-term rentals — one late clean cascades into a bad review or a refund. We handle same-day windows as standard, bringing a two-person team when the timing is tight so the unit is guest-ready before the next arrival, not after.</p>
<h2>Photo proof &amp; calendar sync</h2>
<p>You shouldn't have to drive over to know the place is ready. We send before/after photo verification of the finished, staged unit after each turnover, and can sync to your booking calendar so cleans schedule against real checkouts — useful when a same-day turn leaves no time to inspect in person.</p>
<h2>Damage &amp; supply reporting</h2>
<p>Because we're in the unit between every guest, we're your eyes on it: we flag damage, missing items, or anything that needs attention, and tell you when a consumable is running low so you're never caught mid-stay with an empty supply closet.</p>
<h2>Revenue protection, not just cleaning</h2>
<p>Cleanliness is the most common theme in negative short-term-rental reviews, and reviews drive your ranking and your rate. A reliable turnover crew isn't an expense line — it's what protects the income the listing generates.</p>
<h2>Related services</h2>
<p>Property sitting empty between long-term tenants instead of guests? That's <a href="/services/move-in-move-out-cleaning">move-in / move-out cleaning</a>. Want a periodic deep reset of the rental beyond guest turnovers? Add a <a href="/services/deep-cleaning">deep clean</a> on a quarterly cadence.</p>
`,
    ctaHeading: "Never sweat a same-day turnover again.",
    ctaHtml: `<p><strong>Set up turnover cleaning for your LA rental</strong> — send your calendar and supply setup and we'll keep every guest walking into a five-star space.</p>`,
    faqs: [
      {
        question: "Do you offer same-day Airbnb turnovers?",
        answerHtml:
          "Yes — same-day checkouts and check-ins are the core of short-term-rental work, and we schedule for them directly. When the window between guests is tight, we bring a two-person team so the unit is fully reset and guest-ready before the next arrival.",
      },
      {
        question: "How is turnover cleaning different from regular house cleaning?",
        answerHtml:
          "A regular clean maintains a lived-in home for the people in it. A turnover resets a hospitality product to hotel standard for a stranger, against a checkout-to-check-in clock, and includes linens, restocking, and staging. The standards, timing, and stakes are all different — a single miss can cost a review.",
      },
      {
        question: "Do you restock supplies and toiletries?",
        answerHtml:
          "Yes, from your on-site supply closet. Standard restock covers toilet paper, paper towels, hand and dish soap, shampoo, conditioner, body wash, coffee, tea, and trash bags. Keep the closet stocked and we verify and refill every turnover so guests never run short mid-stay.",
      },
      {
        question: "Do you change linens and make the beds?",
        answerHtml:
          "Yes — we strip and replace sheets and towels, remake beds hotel-style, and stage fresh bath linens. If you keep par-level linen sets on-site, we swap soiled sets for clean ones each turnover so nothing waits on laundry between guests.",
      },
      {
        question: "Will I get photos after each turnover?",
        answerHtml:
          "Yes. We send before/after photo verification of the finished, staged unit so you can confirm it's guest-ready from anywhere — especially valuable on same-day turns when you can't get there to inspect it yourself.",
      },
      {
        question: "Can you sync to my booking calendar?",
        answerHtml:
          "We can schedule turnovers against your booking calendar so cleans line up with actual checkouts rather than guesswork. That keeps back-to-back bookings covered and prevents the scheduling gaps that lead to a unit not being ready.",
      },
      {
        question: "What platforms do you support — Airbnb, VRBO, Booking.com?",
        answerHtml:
          "All of them. The turnover process is the same regardless of where the booking comes from; we work to your checkout/check-in windows whether the listing is on Airbnb, VRBO, Booking.com, or a mix, including multi-unit setups.",
      },
      {
        question: "How much does an Airbnb turnover cost?",
        answerHtml:
          "Turnovers are usually priced by the property and its guest-ready result rather than strictly by the hour, since a studio and a four-bedroom with multiple baths and heavy linens are very different jobs. Send your property size, layout, and whether restock and photos are included, and we'll quote it.",
      },
      {
        question: "How long does a turnover take?",
        answerHtml:
          "A one-to-two-bedroom reset generally runs about 1.5 to 2.5 hours for an experienced cleaner, including linens; three-to-four-bedroom properties take longer. Tight same-day windows are handled with a larger team so the clean still fits the gap between guests.",
      },
      {
        question: "Do you report damage or missing items?",
        answerHtml:
          "Yes. Since we're in the unit after every guest, we flag damage, missing items, and low supplies so you can act before the next check-in. Think of the turnover team as ongoing eyes on the property, not just cleaners.",
      },
    ],
    relatedServiceSlugs: ["move-in-move-out-cleaning", "deep-cleaning"],
  },
  {
    slug: "commercial-cleaning",
    navLabel: "Commercial Cleaning",
    h1: "Commercial & Office Cleaning in Los Angeles",
    metaTitle: "Commercial Cleaning in Los Angeles | Spottly",
    metaDescription:
      "Spottly's commercial cleaning keeps LA offices presentable and healthy — flexible after-hours janitorial on a schedule built around your space. Request a walkthrough.",
    primaryKeyword: "commercial cleaning Los Angeles",
    introHtml: `<p>An office is judged by clients the second they walk in and lived in by employees more waking hours than their own homes — so its cleanliness is a business decision, not a housekeeping one. Commercial cleaning keeps that environment consistently professional and healthy: the reception that sets a first impression, the restrooms and break rooms that turn into complaints when they slip, the desks and shared surfaces that quietly spread whatever's going around. We build a program around your space and your hours so the building is always ready for the next workday.</p>`,
    bodyHtml: `
<h2>What's included</h2>
<p>Core office janitorial covers the recurring work most facilities need:</p>
<ul>
  <li>Emptying trash and recycling</li>
  <li>Vacuuming carpet and dust-mopping / mopping hard floors</li>
  <li>Cleaning and disinfecting restrooms; restocking paper products and soap</li>
  <li>Wiping desks, shared surfaces, and high-touch points (door handles, switches, shared equipment)</li>
  <li>Break room and kitchen surfaces, appliance exteriors, sinks</li>
  <li>Spot-cleaning glass, mirrors, and entry doors</li>
</ul>
<p>Periodic add-ons — carpet cleaning, floor waxing, interior windows, post-construction cleanup — are scheduled as needed.</p>
<h2>How often — and day porters</h2>
<p>Frequency follows foot traffic. Higher-traffic offices commonly run <strong>nightly service five nights a week</strong>, medium spaces three to five times weekly, and smaller or lower-traffic offices weekly. High-use zones — restrooms, break rooms, lobbies — need the most frequent attention regardless of the overall schedule. For buildings that need daytime coverage, a <strong>day porter</strong> keeps restrooms stocked, lobbies tidy, and spills handled while the building is occupied. We recommend a schedule after walking your space.</p>
<h2>After-hours, and who's in your building</h2>
<p>Most commercial cleaning happens after hours, when the team can work without disrupting your people. That means trust matters: you want cleaners who are properly vetted and who follow secure-access protocols for a building full of equipment and sensitive information after everyone's gone home. Ask us about vetting, insurance, and access procedures — a professional program treats your keys and alarm codes as seriously as your surfaces.</p>
<h2>How pricing works</h2>
<p>Commercial cleaning is typically priced on square footage, foot traffic, number of restrooms, scope, and frequency rather than a flat rate — nightly janitorial for a busy floor and a weekly clean for a small suite aren't comparable jobs. The most accurate quote comes from a quick walkthrough; we'll assess the space and recommend a frequency that avoids both under-cleaning (complaints, premature wear) and over-cleaning (wasted spend).</p>
<h2>Green products</h2>
<p>For occupant health and indoor air, we can run the program on EPA Safer Choice–certified products — reviewed ingredient-by-ingredient by the EPA and common in offices, schools, and hotels. Worth doing where employees spend full days in the space.</p>
<h2>Value</h2>
<p>Outsourcing the cleaning removes the need for in-house staff, equipment, and supply management, and consistent service is what keeps tenants and employees satisfied. Property managers who cut nightly service usually see complaints climb within a few weeks — clean is cheaper than the fallout from not-clean.</p>
<h2>Related services</h2>
<p>Cleaning a residential space rather than a workplace? Start with <a href="/services/standard-cleaning">standard</a> or <a href="/services/deep-cleaning">deep cleaning</a>. Turning over a rental unit between occupants? See <a href="/services/move-in-move-out-cleaning">move-in / move-out cleaning</a>.</p>
`,
    ctaHeading: "Give your team and your clients a space that looks the part.",
    ctaHtml: `<p><strong>Request a commercial walkthrough</strong> and we'll design a cleaning schedule around your building and hours.</p>`,
    faqs: [
      {
        question: "What's included in commercial office cleaning?",
        answerHtml:
          "Recurring janitorial work: emptying trash and recycling, vacuuming and mopping floors, cleaning and disinfecting restrooms with paper and soap restocked, wiping desks, shared surfaces, and high-touch points, and cleaning break rooms. Periodic services like carpet cleaning, floor waxing, and window cleaning are scheduled as add-ons.",
      },
      {
        question: "How often should my office be cleaned?",
        answerHtml:
          "It depends on foot traffic. High-traffic offices commonly need nightly service five nights a week; medium spaces three to five times weekly; smaller or lower-traffic offices weekly. Restrooms, break rooms, and lobbies need the most frequent attention. We'll recommend a schedule after seeing the space.",
      },
      {
        question: "Do you clean after business hours?",
        answerHtml:
          "Yes — most commercial cleaning is done after hours so the team works without disrupting employees, though early-morning, evening, or weekend windows all work. For occupied-hour needs, a day porter provides on-site coverage during the workday.",
      },
      {
        question: "What is a day porter?",
        answerHtml:
          "A day porter provides cleaning and facility support during business hours — restocking restrooms, tidying lobbies and common areas, and handling spills in real time while the building is occupied. It pairs well with after-hours janitorial for buildings that need visible upkeep throughout the day.",
      },
      {
        question: "Are your cleaners insured, bonded, and background-checked?",
        answerHtml:
          "Trustworthy access is central to after-hours commercial work, so vetting, insurance, and secure-access protocols matter as much as the cleaning itself. Ask us about our specific vetting and coverage for your building — a professional program treats your keys and codes with the same care as your surfaces.",
      },
      {
        question: "How is commercial cleaning priced?",
        answerHtml:
          "Usually on square footage, foot traffic, number of restrooms, scope, and frequency rather than a flat rate, because a busy nightly-serviced floor and a small weekly suite are very different jobs. The most accurate quote comes from a short walkthrough of your space.",
      },
      {
        question: "Can you customize a cleaning schedule for our business?",
        answerHtml:
          "Yes. We build the program around your building, hours, and traffic — nightly, several times a week, weekly, day-porter coverage, or a hybrid. The goal is a schedule that avoids both under-cleaning, which brings complaints and wear, and over-cleaning, which wastes money.",
      },
      {
        question: "Do you use green or EPA-certified cleaning products?",
        answerHtml:
          'We can run your program on EPA Safer Choice–certified products, which the EPA reviews ingredient-by-ingredient for health and environmental safety while still requiring real performance — a sensible choice where staff spend full days in the space: <a href="https://www.epa.gov/saferchoice/learn-about-safer-choice-label" target="_blank" rel="noopener noreferrer">EPA Safer Choice label</a>.',
      },
      {
        question: "Do you handle restroom restocking?",
        answerHtml:
          "Yes — restroom cleaning and disinfection plus restocking paper products and soap is standard in a commercial program. For high-use buildings, mid-day touch-ups or a day porter keep restrooms stocked and presentable between nightly cleans.",
      },
      {
        question: "Do you offer post-construction or one-time commercial cleans?",
        answerHtml:
          "Yes. Beyond recurring janitorial, we handle post-construction cleanup — the dust, debris, and residue that make a finished build actually usable — and one-time cleans for events or move-ins. Tell us the scope and we'll quote it separately from any ongoing schedule.",
      },
    ],
    relatedServiceSlugs: ["standard-cleaning", "deep-cleaning", "move-in-move-out-cleaning"],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
