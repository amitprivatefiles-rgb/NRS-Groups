// All site copy lives here so it can be updated after the client meeting
// without touching layout code.
//
// `confirmed: false` marks facts that came from third-party sources (registry
// aggregators, OTA listings) and still need sign-off from NRS Group. Anything
// unconfirmed is hidden from the public site until it is flipped to true.

export const FOUNDED_YEAR = 2014;

const NUMBER_WORDS = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"];
export const numberWord = (n: number) => NUMBER_WORDS[n] ?? String(n);

export type ArtKind = "palace" | "glass" | "lantern" | "tower" | "mangrove" | "skyline" | "compass";

export const group = {
  name: "NRS Group",
  legalLine: "NRS Hospitality Pvt. Ltd. · GSTIN 21AAHCN2872F1ZQ",
  tagline: "Hospitality · Food & Dining · Real Estate · Manufacturing · Leisure",
  intro:
    "A Kolkata-born group that has grown since 2014 from a single business centre into hotels, restaurants, construction, real estate, manufacturing and leisure, with quality service as the first priority.",
  description:
    "A highly reputed corporate group that has made a strong footprint in various sectors.",
  vision:
    "To be accredited as one of the esteemed organizations whose hunger for excellence is proven by the quality of their service.",
  mission:
    "To act collectively as a group so that all the business wings can have maximum benefits from our passionate effort.",
  philosophy: "Zindagi Mein Khush Raho",
  philosophyMeaning: "Be happy in life.",
  // Group founding year shown in the top bar (client note). Company dates elsewhere stay as dated facts.
  established: "2008",
  story: [
    "NRS Group began in 2014 with NRS Business Centre Pvt. Ltd. in Kolkata's Salt Lake Sector V. It became the corporate backbone for everything that followed.",
    "Since then the group has grown into hotel and hospitality services, restaurants, construction, real estate management and leisure. Its flagship, NRS Royal Palace, is a sea-facing hotel on Puri's New Marine Drive.",
    "Every business works to the same standard: state-of-the-art service for the client, with quality first. The group's own construction arm builds its new hotels, and its management team runs them once they open.",
  ],
  values: [
    {
      title: "Quality first",
      body: "Every guest, diner and partner should get state-of-the-art service. Quality is the first priority in every business.",
    },
    {
      title: "Quality people",
      body: "Quality services demand quality people. We hire, train and keep teams who take pride in hospitality.",
    },
    {
      title: "One group",
      body: "Each business wing supports the others. The construction arm builds, hospitality operates and food & dining serves.",
    },
    {
      title: "Built to last",
      body: "We build on land the group holds and grow one property at a time, for the long term.",
    },
  ],
};

export const contact = {
  // TODO(client): full street address and PIN code for Shaila Tower.
  addressLines: ["Shaila Tower", "Salt Lake", "Kolkata, West Bengal"],
  phone: "+91 70444 70888",
  phoneHref: "tel:+917044470888",
  email: "info@nrsgroups.in",
  hours: "Monday – Saturday, 10:00 AM – 7:00 PM",
  mapUrl: "https://maps.google.com/?q=Shaila+Tower+Salt+Lake+Kolkata",
  // WhatsApp chat with the director (client note).
  whatsappHref: "https://wa.me/917044470888?text=" + encodeURIComponent("Hello, I would like to speak with the director of NRS Group."),
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/nrsgroup" },
    { label: "Facebook", href: "https://www.facebook.com/nrsgroupkolkata" },
    { label: "YouTube", href: "https://www.youtube.com/@nrsgroup2024" },
  ],
};

export type VerticalKey = "hospitality" | "food" | "realestate" | "construction" | "manufacturing" | "leisure" | "business";

export type Vertical = {
  key: VerticalKey;
  slug: string;
  title: string;
  company: string;
  body: string;
  headline: string;
  long: string[];
  points: { title: string; body: string }[];
  brandSlugs: string[];
  art: ArtKind;
  image: string;
};

export const verticals: Vertical[] = [
  {
    key: "hospitality",
    slug: "hospitality",
    title: "Hospitality",
    company: "NRS Hospitality Pvt. Ltd. · Verma Holiday Hotel & Resorts",
    body: "Hotels and resorts in pilgrimage and leisure destinations, led by the flagship NRS Royal Palace in Puri.",
    headline: "Hotels where the setting is memorable and the service more so",
    long: [
      "Hospitality is the heart of NRS Group. NRS Hospitality Pvt. Ltd. was set up in 2020 and opened the group's flagship, NRS Royal Palace, on Puri's New Marine Drive the same year.",
      "In 2023 the group added a second hospitality brand, Verma Holiday Hotel & Resorts. Our hotels are in places people already travel to, such as temple towns, beaches and nature reserves, so every property starts with steady demand.",
      "Next comes the group's largest project yet, a tower-style hotel at Tarapith, followed by an eco-luxury resort in the Sundarban.",
    ],
    points: [
      { title: "Destination-led", body: "Properties in Puri, Tarapith and the Sundarban, where travellers already go." },
      { title: "Full-service", body: "Rooms, restaurants, banquets and lawns under one roof." },
      { title: "Events & weddings", body: "Halls and lawns for family functions, weddings and corporate meetings." },
      { title: "In-house delivery", body: "Built by our construction arm and run by our own hospitality team." },
    ],
    brandSlugs: ["nrs-royal-palace"],
    art: "palace",
    image: "/images/verticals/hospitality.jpg",
  },
  {
    key: "food",
    slug: "food-and-dining",
    title: "Food & Dining",
    company: "Bistro-Y Foods · Buono Gusto Foods",
    body: "Restaurants, bars and hotel dining: Bistro Y in Salt Lake, HakkaLand in Madhyamgram, and the restaurants at Royal Palace.",
    headline: "Restaurants and bars Kolkata keeps coming back to",
    long: [
      "Food was the group's first business. Bistro-Y Foods started in 2013, and Buono Gusto Foods followed in 2020.",
      "Today the group runs Bistro Y, a live-music restro pub in Salt Lake Sector V, and HakkaLand, a Chinese, Thai and tandoori restaurant and bar in Madhyamgram. It also runs the restaurants inside NRS Royal Palace: Shradha, Bistro Y and the rooftop Terrace.",
    ],
    points: [
      { title: "Restro-bars", body: "Cocktails, live music and food designed for evenings out." },
      { title: "Family dining", body: "Multi-cuisine menus for families, friends and celebrations." },
      { title: "Hotel F&B", body: "All-day dining, rooftop restaurants and banquet catering." },
      { title: "Loved by guests", body: "Bistro Y is rated 4.6 from over 2,751 reviews." },
    ],
    brandSlugs: ["bistro-y", "hakkaland"],
    art: "glass",
    image: "/images/verticals/food.jpg",
  },
  {
    key: "construction",
    slug: "construction",
    title: "Construction",
    company: "Realtiven Construction Pvt. Ltd.",
    body: "The in-house construction arm, now building the group's tower hotel at Tarapith.",
    headline: "We build what we run",
    long: [
      "Realtiven Construction Pvt. Ltd. was founded in 2019 as the group's own construction company.",
      "Because construction is in-house, NRS controls quality, cost and timelines from the foundation to the finishing. Realtiven is now building the group's tower-style hotel at Tarapith.",
    ],
    points: [
      { title: "Quality control", body: "One team accountable from design to handover." },
      { title: "Cost discipline", body: "No external contractor margin on group projects." },
      { title: "Speed", body: "Decisions made inside the group, not across companies." },
      { title: "Now building", body: "The Tarapith tower hotel on 20 bighas." },
    ],
    brandSlugs: [],
    art: "tower",
    image: "/images/verticals/construction.jpg",
  },
  {
    key: "realestate",
    slug: "real-estate",
    title: "Real Estate",
    company: "Shaila Realty Management",
    body: "Manages the group's property and land holdings, the base for every new development.",
    headline: "The land beneath every project",
    long: [
      "Shaila Realty Management, founded in 2012, is the oldest business in the group. It manages NRS Group's property and land holdings.",
      "Holding land for the long term is central to how NRS grows. The Tarapith hotel, for example, is being built on 20 bighas the family has held for about ten years.",
    ],
    points: [
      { title: "Long-term holdings", body: "Land held for years before it is developed." },
      { title: "Lower risk", body: "Projects start without land-acquisition uncertainty." },
      { title: "Asset management", body: "Professional management of group property." },
      { title: "Since 2012", body: "The group's first business." },
    ],
    brandSlugs: [],
    art: "skyline",
    image: "/images/verticals/real-estate.jpg",
  },
  {
    key: "manufacturing",
    slug: "manufacturing",
    title: "Manufacturing",
    company: "NRS Manufacturing",
    body: "NRS Manufacturing, the group's newest company, takes NRS into manufacturing.",
    headline: "The group's newest venture",
    long: [
      "NRS Manufacturing is the newest company in NRS Group, extending the group from services into manufacturing.",
      // TODO(client): what NRS Manufacturing makes, where, and since when.
      "More about the products and facilities will be shared here soon.",
    ],
    points: [
      { title: "Newest company", body: "The latest addition to the NRS family of companies." },
      { title: "One group", body: "Backed by the experience of the group's other businesses." },
      { title: "Same standard", body: "Run to the same quality-first standard as every NRS company." },
      { title: "More soon", body: "Details of products and facilities will be announced." },
    ],
    brandSlugs: [],
    art: "skyline",
    image: "/images/verticals/manufacturing.jpg",
  },
  {
    key: "leisure",
    slug: "leisure",
    title: "Leisure",
    company: "Eco Amusement Dam Park Pvt. Ltd.",
    body: "Leisure and amusement experiences for families and travellers.",
    headline: "Experiences for families and travellers",
    long: [
      "Eco Amusement Dam Park Pvt. Ltd. was founded in 2019 as the group's leisure and amusement venture.",
      "Leisure works alongside hospitality: places where families spend the day add to the reasons to stay the night.",
    ],
    points: [
      { title: "Family leisure", body: "Experiences designed for all ages." },
      { title: "Eco focus", body: "Built around the natural landscape." },
      { title: "Tourism synergy", body: "Adds to the group's hospitality destinations." },
      { title: "Since 2019", body: "Part of the group's diversification." },
    ],
    brandSlugs: [],
    art: "mangrove",
    image: "/images/verticals/leisure.jpg",
  },
  {
    key: "business",
    slug: "business-services",
    title: "Business Services",
    company: "NRS Business Centre Pvt. Ltd.",
    body: "Business-centre solutions in Kolkata's Salt Lake Sector V, the group's corporate backbone since 2014.",
    headline: "The corporate backbone of the group",
    long: [
      "NRS Business Centre Pvt. Ltd. was incorporated in 2014 in Salt Lake Sector V, Kolkata's IT and business district.",
      "It offers business-centre solutions to companies and serves as the corporate home of NRS Group, where the group's finance, administration and strategy are run.",
    ],
    points: [
      { title: "Prime location", body: "Salt Lake Sector V, Kolkata's business district." },
      { title: "Business-centre solutions", body: "Workspace and support services for companies." },
      { title: "Group HQ", body: "Finance, administration and strategy for every vertical." },
      { title: "Since 2014", body: "The company the group grew from." },
    ],
    brandSlugs: [],
    art: "compass",
    image: "/images/verticals/business.jpg",
  },
];

export const companies = [
  { name: "Shaila Realty Management", year: "2012", sector: "Real estate management" },
  { name: "Bistro-Y Foods", year: "2013", sector: "Food & dining" },
  { name: "NRS Business Centre Pvt. Ltd.", year: "2014", sector: "Business services" },
  { name: "Realtiven Construction Pvt. Ltd.", year: "2019", sector: "Construction" },
  { name: "Eco Amusement Dam Park Pvt. Ltd.", year: "2019", sector: "Leisure" },
  { name: "NRS Hospitality Pvt. Ltd.", year: "2020", sector: "Hotels & hospitality" },
  { name: "Buono Gusto Foods", year: "2020", sector: "Food & dining" },
  { name: "Verma Holiday Hotel & Resorts", year: "2023", sector: "Hotels & resorts" },
  // TODO(client): founding year of NRS Manufacturing.
  { name: "NRS Manufacturing", year: "New", sector: "Manufacturing" },
];

export type BrandSection = { title: string; items: { name: string; detail: string }[] };

export type Brand = {
  slug: string;
  name: string;
  vertical: "Hospitality" | "Food & Dining";
  art: ArtKind;
  location: string;
  address?: string;
  since?: string;
  summary: string;
  description: string[];
  facts: { value: string; label: string }[];
  highlights: string[];
  sections: BrandSection[];
  phone?: string;
  hours?: string;
  url?: string;
  gallery?: string[];
  photoNote?: string;
  confirmed: boolean;
};

export const brands: Brand[] = [
  {
    slug: "nrs-royal-palace",
    name: "NRS Royal Palace",
    vertical: "Hospitality",
    art: "palace",
    location: "Puri, Odisha",
    address: "New Marine Drive Road, Baliapanda, Puri, Odisha 752001",
    since: "2020",
    summary:
      "The group's flagship: a sea-facing palace hotel with a hand-carved cream facade and three gilded domes on Puri's New Marine Drive.",
    description: [
      "NRS Royal Palace faces the Bay of Bengal on Puri's New Marine Drive. Its four storeys sit behind a hand-carved cream facade topped with three gilded domes.",
      "Guests come for the sea, the Jagannath Temple and the beach. They stay for the service, the three restaurants and the event spaces, which host weddings, family functions and corporate meetings.",
    ],
    facts: [
      { value: "≈52", label: "Rooms" },
      { value: "4", label: "Storeys" },
      { value: "3", label: "Restaurants" },
      { value: "200", label: "Guests on the lawn" },
    ],
    highlights: ["Sea-facing rooms", "Rooftop dining", "Swimming pool", "Banquet & lawn"],
    sections: [
      {
        title: "Dining",
        items: [
          { name: "Shradha", detail: "The hotel's all-day restaurant" },
          { name: "Bistro Y", detail: "The group's signature restro-bar concept" },
          { name: "The Terrace", detail: "Rooftop dining overlooking the sea" },
        ],
      },
      {
        title: "Events & meetings",
        items: [
          { name: "Aamantran Hall", detail: "Banquet hall for up to 120 guests" },
          { name: "Darbar Hall", detail: "Board room for meetings" },
          { name: "The Lawn", detail: "6,700 sq ft of open lawn for up to 200 guests" },
        ],
      },
    ],
    phone: "+91 70444 70888",
    url: "https://nrsroyalpalace.com",
    gallery: ["The palace by night", "Sea-facing rooms", "The Terrace", "Weddings on the lawn", "The pool"],
    confirmed: true,
  },
  {
    slug: "bistro-y",
    name: "Bistro Y",
    vertical: "Food & Dining",
    art: "glass",
    location: "Salt Lake, Kolkata",
    address: "J1/16, EP & GP Block, Sector V, Salt Lake, Kolkata",
    since: "2013",
    summary:
      "A wood-panelled restro pub serving cocktails and Mughlai- and Bengali-inspired food, with live jazz, acoustic and DJ nights.",
    description: [
      "Bistro Y is the group's first food brand. Bistro-Y Foods was founded in 2013, a year before NRS Business Centre.",
      "In the middle of Sector V, its wood-panelled room serves the office crowd at lunch and turns into a live-music venue at night, with jazz, acoustic sets and DJs.",
    ],
    facts: [
      { value: "4.6★", label: "Guest rating" },
      { value: "2,751+", label: "Reviews" },
      { value: "12", label: "Hours open daily" },
      { value: "Live", label: "Music nights" },
    ],
    highlights: ["Craft cocktails", "Mughlai & Bengali-inspired food", "Live music", "Wood-panelled interiors"],
    sections: [
      {
        title: "The experience",
        items: [
          { name: "Bar", detail: "Signature cocktails and a full bar" },
          { name: "Kitchen", detail: "Mughlai and Bengali-inspired plates" },
          { name: "Stage", detail: "Jazz, acoustic and DJ nights" },
        ],
      },
    ],
    hours: "12 PM – 12 AM, daily",
    url: "https://bistrobars.com",
    gallery: ["The lounge", "The bar", "Bar seating", "The spirits shelf"],
    photoNote: "Photographed at Bistro Y inside NRS Royal Palace, Puri.",
    confirmed: true,
  },
  {
    slug: "hakkaland",
    name: "HakkaLand",
    vertical: "Food & Dining",
    art: "lantern",
    location: "Madhyamgram, Kolkata",
    address: "5th Floor, Star Mall, Jessore Road, Madhyamgram, Kolkata 700129",
    summary: "A restaurant and bar serving Chinese, Thai and tandoori food and sizzlers.",
    description: [
      "HakkaLand brings Indo-Chinese, Thai and tandoori food to North Kolkata, with sizzlers as the house speciality and a full bar.",
      "It is on the fifth floor of Star Mall on Jessore Road, a regular stop for families, friends and celebrations.",
    ],
    facts: [
      { value: "4.2★", label: "Rating on District" },
      { value: "₹1,000", label: "For two (approx.)" },
      { value: "3", label: "Cuisines" },
      { value: "Full", label: "Bar" },
    ],
    highlights: ["Chinese & Thai", "Tandoor", "Sizzlers", "Full bar"],
    sections: [
      {
        title: "On the menu",
        items: [
          { name: "Chinese & Thai", detail: "Indo-Chinese favourites and Thai curries" },
          { name: "Tandoor", detail: "Kebabs and tandoori from the clay oven" },
          { name: "Sizzlers", detail: "The house speciality" },
        ],
      },
    ],
    phone: "+91 74399 91345",
    hours: "12 noon – 11 PM, daily",
    url: "https://hakkaland.vercel.app",
    gallery: ["The dining room", "Sizzlers", "The bar", "Chinese & Thai"],
    confirmed: true,
  },
  // TODO(meeting): confirm these are still NRS properties before publishing.
  {
    slug: "nrs-norling-retreat",
    name: "NRS Norling Retreat",
    vertical: "Hospitality",
    art: "skyline",
    location: "Darjeeling, West Bengal",
    summary: "A 3-star retreat near Circuit House with valley and mountain views.",
    description: [],
    facts: [],
    highlights: [],
    sections: [],
    confirmed: false,
  },
  {
    slug: "nrs-royal-grand",
    name: "NRS Royal Grand",
    vertical: "Hospitality",
    art: "skyline",
    location: "Noida, Uttar Pradesh",
    summary: "A 4-star business hotel with 139 rooms, a banquet hall and a multi-cuisine restaurant.",
    description: [],
    facts: [],
    highlights: [],
    sections: [],
    url: "https://nrsroyalgrand.com",
    confirmed: false,
  },
];

export const liveBrands = () => brands.filter((b) => b.confirmed);

export type Project = {
  slug: string;
  name: string;
  art: ArtKind;
  location: string;
  status: string;
  summary: string;
  description: string[];
  facts: { value: string; label: string }[];
  milestones?: { label: string; state: "done" | "current" | "next" }[];
  why?: { title: string; body: string }[];
  featured?: boolean;
  comingSoon?: boolean;
};

export const projects: Project[] = [
  {
    slug: "tarapith",
    name: "Tarapith Tower Hotel",
    art: "tower",
    location: "Tarapith, Birbhum, West Bengal",
    status: "Under construction",
    summary:
      "The group's largest project yet: a tower-style hotel on 20 bighas of land, built for the pilgrims and travellers who come to Tarapith all year.",
    description: [
      "Tarapith in Birbhum district is one of West Bengal's most visited temple towns, and pilgrims arrive there throughout the year. NRS Group is building a landmark tower-style hotel there to give them the standard of stay they find in the country's best city hotels.",
      "The hotel stands on 20 bighas of land the family has held for about ten years. Construction is under way through the group's own construction arm, Realtiven Construction.",
      "NRS Group is inviting investors and partners to join this project. Room count, floors, opening date and investment terms will be shared with interested investors.",
    ],
    facts: [
      { value: "20", label: "Bighas of land" },
      { value: "≈10 yrs", label: "Land held by the family" },
      { value: "Tower", label: "Hotel format" },
      { value: "Now", label: "Under construction" },
    ],
    milestones: [
      { label: "Land held", state: "done" },
      { label: "Construction begins", state: "done" },
      { label: "Structure in progress", state: "current" },
      { label: "Interiors & fit-out", state: "next" },
      { label: "Opening", state: "next" },
    ],
    why: [
      { title: "Year-round demand", body: "Tarapith is one of Bengal's most visited temple towns, and pilgrims arrive in every season." },
      { title: "Land in hand", body: "The hotel stands on 20 bighas the family has held for about a decade, so there is no acquisition risk." },
      { title: "Built in-house", body: "Realtiven Construction, the group's own construction arm, is building the hotel." },
      { title: "Temple-town experience", body: "NRS already runs NRS Royal Palace in Puri, home of the Jagannath Temple." },
    ],
    featured: true,
  },
  {
    slug: "sundarban",
    name: "NRS Royal Classic, Sundarban",
    art: "mangrove",
    location: "Near Gosaba, Sundarban, West Bengal",
    status: "In planning",
    summary:
      "An eco-luxury resort of rooms and suites in a vast mangrove area of the Sundarban, a few kilometres from Gosaba.",
    description: [
      "NRS Royal Classic is planned as an eco-luxury retreat a few kilometres from Gosaba, in a vast mangrove area of the Sundarban, the world's largest mangrove forest.",
      "The resort will offer rooms and suites designed around the landscape, for travellers who want comfort at the edge of the wild.",
    ],
    facts: [
      { value: "Eco", label: "Luxury resort" },
      { value: "Rooms", label: "& suites" },
      { value: "Mangrove", label: "Setting" },
      { value: "Gosaba", label: "Gateway" },
    ],
    why: [
      { title: "A world-famous landscape", body: "The Sundarban is the world's largest mangrove forest and a UNESCO World Heritage Site." },
      { title: "Growing eco-tourism", body: "More travellers want nature, wildlife and quiet, and they want to stay well while they do." },
      { title: "Eco-luxury positioning", body: "Rooms and suites designed around the mangroves, for travellers who expect comfort." },
      { title: "Close to Kolkata", body: "Gosaba is the gateway to the Sundarban, within reach of the city." },
    ],
  },
  {
    slug: "coming-soon-1",
    name: "Coming Soon",
    art: "compass",
    location: "To be announced",
    status: "Coming soon",
    summary: "A new NRS hospitality destination. Details will be announced shortly.",
    description: [],
    facts: [],
    comingSoon: true,
  },
  {
    slug: "coming-soon-2",
    name: "Coming Soon",
    art: "compass",
    location: "To be announced",
    status: "Coming soon",
    summary: "Another project in the NRS pipeline. Register your interest to hear first.",
    description: [],
    facts: [],
    comingSoon: true,
  },
];

export const founder = {
  name: "Mr. Ravinandan Prasad Verma",
  short: "R. P. Verma",
  title: "Founder, Chairman & Managing Director",
  quote:
    "The target is always to provide state-of-the-art services to the clients where quality is the first priority.",
  bio: [
    "R. P. Verma began his career as an ordinary employee at a small organisation. The experience taught him how businesses really run, and he soon moved into small ventures of his own.",
    "Over the following decade he built NRS Group one business at a time: real estate management in 2012, the group's first food venture in 2013, and NRS Business Centre in Kolkata in 2014, which became the corporate backbone.",
    "Construction and leisure followed in 2019. In 2020 he launched NRS Hospitality and opened the flagship NRS Royal Palace in Puri. In 2023 he added a new hospitality brand, Verma Holiday Hotel & Resorts. Today he leads the group's largest project yet, a tower hotel at Tarapith.",
  ],
  principles: [
    "Quality is the first priority in every business.",
    "Quality services demand quality people.",
    "Each business wing should benefit the others.",
  ],
  timeline: [
    { year: "Early years", text: "Starts as an employee at a small organisation, then moves into small business ventures" },
    { year: "2012", text: "Shaila Realty Management, real estate management" },
    { year: "2013", text: "Bistro-Y Foods, the group's first food venture" },
    { year: "2014", text: "NRS Business Centre Pvt. Ltd., Kolkata, the corporate backbone" },
    { year: "2019", text: "Realtiven Construction and Eco Amusement Dam Park" },
    { year: "2020", text: "NRS Hospitality, Buono Gusto Foods and the flagship NRS Royal Palace, Puri" },
    { year: "2023", text: "Verma Holiday Hotel & Resorts, a new hospitality brand" },
    { year: "Today", text: "Building the Tarapith tower hotel on 20 bighas" },
  ],
};

// Only figures confirmed from NRS's own sources. Add rooms/guests/staff after the meeting.
export function stats() {
  const years = new Date().getFullYear() - FOUNDED_YEAR;
  return [
    { value: `${years}+`, label: "Years of growth" },
    { value: `${verticals.length}`, label: "Business verticals" },
    { value: `${companies.length}`, label: "Group companies" },
    { value: `${liveBrands().length}`, label: "Operating brands" },
  ];
}

export const investReasons = [
  {
    title: "A track record since 2014",
    body: "Over a decade of building and running businesses across hospitality, food, construction and real estate.",
  },
  {
    title: "Land already in hand",
    body: "The Tarapith hotel stands on 20 bighas the family has held for about ten years, so there is no land-acquisition risk.",
  },
  {
    title: "Built in-house",
    body: "Realtiven Construction, the group's own construction arm, builds the projects, giving direct control over quality and timelines.",
  },
  {
    title: "Proven operators",
    body: "The team that runs NRS Royal Palace, Bistro Y and HakkaLand will run the new properties.",
  },
];

export const investSteps = [
  { title: "Enquire", body: "Share your details and interests through the form." },
  { title: "Introductory call", body: "Our team calls you within two working days to understand your goals." },
  { title: "Meeting & site visit", body: "Meet the leadership and visit the project site." },
  { title: "Terms & agreement", body: "Agree the structure, then sign a formal agreement." },
];

export const investFaq = [
  {
    q: "Who can invest?",
    a: "Individuals and companies. We discuss each enquiry personally to find the right project and structure.",
  },
  {
    q: "What structures are possible?",
    a: "Depending on the project, we can discuss equity participation, fixed-return arrangements or partnerships. Final terms are agreed in writing.",
  },
  {
    q: "Is there a minimum investment?",
    a: "Ticket sizes vary by project and structure. Choose the range that suits you on the form, and our team will share the options.",
  },
  {
    q: "I have a business idea, not capital. Can I still reach out?",
    a: "Yes. Use the \"I have an idea\" form to pitch a venture in hospitality, food, real estate or leisure, especially one that could work alongside our existing businesses.",
  },
];

export const approach = [
  { step: "Hold", title: "Land & real estate", body: "Shaila Realty holds and manages land for the long term." },
  { step: "Build", title: "In-house construction", body: "Realtiven Construction builds every new property." },
  { step: "Operate", title: "Hospitality", body: "NRS Hospitality runs the hotels to one standard of service." },
  { step: "Serve", title: "Food & dining", body: "Our restaurants and bars feed guests in the hotels and in the city." },
];

export const destinations = [
  { name: "Kolkata", region: "West Bengal", role: "Head office · Bistro Y · HakkaLand", status: "Operating" },
  { name: "Puri", region: "Odisha", role: "NRS Royal Palace", status: "Operating" },
  { name: "Tarapith", region: "Birbhum, West Bengal", role: "Tower hotel on 20 bighas", status: "Under construction" },
  { name: "Sundarban", region: "West Bengal", role: "NRS Royal Classic eco-resort", status: "In planning" },
];

export const structures = [
  {
    title: "Equity participation",
    body: "Take a share in a project and benefit from its long-term value and income.",
  },
  {
    title: "Fixed return",
    body: "A defined return over an agreed period, documented in a formal agreement.",
  },
  {
    title: "Strategic partnership",
    body: "Bring capital, land or expertise and build a venture alongside the group.",
  },
];

export const careers = {
  intro:
    "Quality services demand quality people. We look for people who take pride in service, in hotels, kitchens, construction sites and our corporate office.",
  areas: [
    { title: "Hotel operations", body: "Front office, housekeeping, guest relations and hotel management." },
    { title: "Food & beverage", body: "Chefs, bartenders, service staff and restaurant management." },
    { title: "Construction & projects", body: "Site engineers, project managers and supervisors." },
    { title: "Corporate", body: "Finance, administration, sales, marketing and HR." },
  ],
  why: [
    { title: "Grow with the group", body: "New hotels and projects mean new roles and promotions." },
    { title: "Move across businesses", body: "Experience in hospitality, food, construction and real estate." },
    { title: "A founder-led culture", body: "Close to the leadership, with real ownership of your work." },
  ],
};

// Form option lists, shared by the form UI and server-side validation.
export const options = {
  investorType: ["Individual", "Company"],
  amountRange: [
    "Under ₹10 lakh",
    "₹10 – 50 lakh",
    "₹50 lakh – 1 crore",
    "₹1 – 5 crore",
    "Above ₹5 crore",
  ],
  preferredProject: ["Tarapith", "Sundarban", "Any project"],
  sector: ["Hospitality", "Food & Dining", "Real Estate", "Manufacturing", "Leisure", "Other"],
  structure: ["Equity %", "Fixed return / interest", "Partnership", "Open to discuss"],
  timeline: ["Immediately", "Within 3 months", "3 – 6 months", "6 – 12 months", "Just exploring"],
  stage: ["Idea", "Prototype", "Running business"],
} as const;
