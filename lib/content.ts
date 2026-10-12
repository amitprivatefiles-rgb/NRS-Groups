// All site copy lives here so it can be updated after the client meeting
// without touching layout code.
//
// `confirmed: false` marks facts that came from third-party sources (registry
// aggregators, OTA listings) and still need sign-off from NRS Group. Anything
// unconfirmed is hidden from the public site until it is flipped to true.

export const FOUNDED_YEAR = 2014;

export const group = {
  name: "NRS Group",
  tagline: "Hospitality · Food & Dining · Real Estate · Leisure",
  intro:
    "A Kolkata-born group that has grown since 2014 from a single business centre into hotels, restaurants, construction, real estate and leisure, with quality service as the first priority.",
  vision:
    "To be accredited as one of the esteemed organizations whose hunger for excellence is proven by the quality of their service.",
  mission:
    "To act collectively as a group so that all the business wings can have maximum benefits from our passionate effort.",
  philosophy: "Quality services demand quality people.",
  story: [
    "NRS Group began in 2014 with NRS Business Centre Pvt. Ltd. in Kolkata's Salt Lake Sector V, which became the corporate backbone for everything that followed.",
    "Since then the group has grown into hotel and hospitality services, restaurants, construction, real estate management and leisure. Its flagship, NRS Royal Palace, is a sea-facing hotel on Puri's New Marine Drive.",
    "Every business works to the same standard: state-of-the-art service for the client, with quality first.",
  ],
};

export const contact = {
  // TODO(meeting): confirm current head office: Godrej Genesis 1308 or Shaila Tower.
  address:
    "Godrej Genesis Building, 13th Floor, Unit 1308, EP & GP Block, Sector V, Salt Lake, Kolkata 700091",
  phone: "+91 70444 70888",
  phoneHref: "tel:+917044470888",
  email: "info@nrsgroups.in",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/nrsgroup" },
    { label: "Facebook", href: "https://www.facebook.com/nrsgroupkolkata" },
    { label: "YouTube", href: "https://www.youtube.com/@nrsgroup2024" },
  ],
};

export type Business = {
  name: string;
  vertical: "Hospitality" | "Food & Dining";
  location: string;
  description: string;
  highlights: string[];
  url?: string;
  confirmed: boolean;
};

export const businesses: Business[] = [
  {
    name: "NRS Royal Palace",
    vertical: "Hospitality",
    location: "New Marine Drive, Puri, Odisha",
    description:
      "The group's flagship: a sea-facing palace hotel with a hand-carved cream facade and three gilded domes on Puri's New Marine Drive.",
    highlights: [
      "About 52 sea-facing rooms",
      "Shradha, Bistro Y & The Terrace rooftop",
      "Lawn for 200 guests · pool",
    ],
    url: "https://nrsroyalpalace.com",
    confirmed: true,
  },
  {
    name: "Bistro Y",
    vertical: "Food & Dining",
    location: "Sector V, Salt Lake, Kolkata",
    description:
      "A wood-panelled restro pub serving cocktails and Mughlai- and Bengali-inspired food, with live jazz, acoustic and DJ nights.",
    highlights: ["Open 12 PM – 12 AM", "Rated 4.6 · 2,751+ reviews", "Live music"],
    url: "https://bistrobars.com",
    confirmed: true,
  },
  {
    name: "HakkaLand",
    vertical: "Food & Dining",
    location: "Star Mall, Madhyamgram",
    description:
      "A restaurant and bar serving Chinese, Thai and tandoori food and sizzlers.",
    highlights: ["Open 12 noon – 11 PM", "Full bar", "₹1,000 for two"],
    url: "https://hakkaland.vercel.app",
    confirmed: true,
  },
  // TODO(meeting): confirm these are still NRS properties before publishing.
  {
    name: "NRS Norling Retreat",
    vertical: "Hospitality",
    location: "Darjeeling, West Bengal",
    description: "A 3-star retreat near Circuit House with valley and mountain views.",
    highlights: ["Valley & mountain views", "4/5 on Tripadvisor"],
    confirmed: false,
  },
  {
    name: "NRS Royal Grand",
    vertical: "Hospitality",
    location: "Sector 104, Noida",
    description: "A 4-star business hotel with a banquet hall and a multi-cuisine restaurant.",
    highlights: ["139 rooms", "Banquet hall"],
    url: "https://nrsroyalgrand.com",
    confirmed: false,
  },
  {
    name: "NRS Kingston",
    vertical: "Hospitality",
    location: "Gangtok, Sikkim",
    description: "A hotel in Sikkimese architecture five minutes from MG Marg.",
    highlights: ["About 39 rooms"],
    confirmed: false,
  },
];

export const otherVerticals = [
  {
    title: "Construction",
    body: "Realtiven Construction Pvt. Ltd. (2019) builds the group's own projects, including the Tarapith hotel now under construction.",
  },
  {
    title: "Real estate",
    body: "Shaila Realty Management (2012) manages the group's property and land holdings.",
  },
  {
    title: "Leisure",
    body: "Eco Amusement Dam Park Pvt. Ltd. (2019) is the group's leisure and amusement venture.",
  },
  {
    title: "Business services",
    body: "NRS Business Centre Pvt. Ltd. (2014) provides business-centre solutions in Salt Lake Sector V.",
  },
];

export type Project = {
  slug: string;
  name: string;
  location: string;
  status: string;
  description: string;
  featured?: boolean;
  comingSoon?: boolean;
};

export const projects: Project[] = [
  {
    slug: "tarapith",
    name: "Tarapith Tower Hotel",
    location: "Tarapith, Birbhum, West Bengal",
    status: "Under construction",
    description:
      "The group's largest project yet: a tower-style hotel on 20 bighas of land the family has held for about ten years, built for the pilgrims and travellers who come to Tarapith all year.",
    featured: true,
  },
  {
    slug: "sundarban",
    name: "NRS Royal Classic",
    location: "Near Gosaba, Sundarban",
    status: "In planning",
    description:
      "An eco-luxury resort of rooms and suites in a vast mangrove area of the Sundarban, a few kilometres from Gosaba.",
  },
  {
    slug: "coming-soon-1",
    name: "Coming Soon",
    location: "To be announced",
    status: "Coming soon",
    description: "A new NRS hospitality destination. Details will be announced shortly.",
    comingSoon: true,
  },
  {
    slug: "coming-soon-2",
    name: "Coming Soon",
    location: "To be announced",
    status: "Coming soon",
    description: "Another project in the NRS pipeline. Register your interest to hear first.",
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
    "R. P. Verma began his career as an ordinary employee at a small organisation before moving into small business ventures of his own.",
    "Over the next decade he built NRS Group one business at a time: real estate management, food, a business centre, construction, leisure and hospitality. The flagship NRS Royal Palace opened in Puri in 2020.",
  ],
  timeline: [
    { year: "2012", text: "Shaila Realty Management, real estate management" },
    { year: "2013", text: "Bistro-Y Foods, the group's first food venture" },
    { year: "2014", text: "NRS Business Centre Pvt. Ltd., Kolkata, the corporate backbone" },
    { year: "2019", text: "Realtiven Construction and Eco Amusement Dam Park" },
    { year: "2020", text: "NRS Hospitality, Buono Gusto Foods and the flagship NRS Royal Palace, Puri" },
    { year: "2023", text: "Verma Holiday Hotel & Resorts, a new hospitality brand" },
  ],
};

// Only figures confirmed from NRS's own sources. Add rooms/guests/staff after the meeting.
export function stats() {
  const years = new Date().getFullYear() - FOUNDED_YEAR;
  return [
    { value: `${years}+`, label: "Years since 2014" },
    { value: "6", label: "Business verticals" },
    { value: `${businesses.filter((b) => b.confirmed).length}`, label: "Live brands" },
    { value: "2", label: "Projects in the pipeline" },
  ];
}

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
  sector: ["Hospitality", "Food & Dining", "Real Estate", "Leisure", "Other"],
  structure: ["Equity %", "Fixed return / interest", "Partnership", "Open to discuss"],
  timeline: ["Immediately", "Within 3 months", "3 – 6 months", "6 – 12 months", "Just exploring"],
  stage: ["Idea", "Prototype", "Running business"],
} as const;
