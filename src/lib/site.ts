/**
 * Single source of truth for brand + contact details.
 * Change a value here and it updates across the whole site.
 */
export const site = {
  name: "Nearwaley",
  tagline: "Never wait for help again.",
  description:
    "Need an electrician, plumber, or AC technician in Trivandrum? Get verified local Specialists at your doorstep in 60 minutes — or get 20% off your bill.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.nearwaley.com",
  phoneDisplay: "+91 88488 17833",
  phoneTel: "+918848817833",
  whatsapp: "918848817833",
  address: "Technopark, Thiruvananthapuram, Kerala",
  mapsUrl: "https://maps.google.com/?q=Technopark+Campus+Thiruvananthapuram",
  social: {
    instagram: "https://www.instagram.com/nearwaley/?hl=en",
    facebook: "https://www.facebook.com/profile.php?id=61595174489628",
    linkedin: "https://www.linkedin.com/company/nearwaley",
  },
  freeSpots: 50,
  onboardingFee: "₹1,500",
  cashbackAfterJobs: 7,
} as const;

export const whatsappLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

/** Main nav – anchor links for the one-page site */
export const nav = [
  { href: "/#services", label: "Services" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#why-nearwaley", label: "Why Nearwaley" },
  { href: "/#specialists", label: "For Specialists" },
  { href: "/#journey", label: "Our Journey" },
] as const;

/** Launch services shown with full cards */
export const launchServices = [
  {
    name: "Electricians",
    icon: "electric",
    tagline: "Faults, wiring, fittings, monsoon power cuts",
    live: true,
  },
  {
    name: "Plumbers",
    icon: "plumber",
    tagline: "Leaks, blockages, fittings",
    live: true,
  },
  {
    name: "AC & Appliance Repair",
    icon: "ac",
    tagline: "Servicing, gas, breakdowns in the summer heat",
    live: true,
  },
  {
    name: "House Cleaning",
    icon: "cleaning",
    tagline: "Deep cleans, festival cleans",
    live: false,
  },
  {
    name: "Carpenters",
    icon: "carpenter",
    tagline: "Repairs, fittings, furniture",
    live: false,
  },
] as const;

/** Legacy services array for backwards compat */
export const services = [
  { name: "Electrician", line: "Lights out? Sorted.", jobs: ["Switches & sockets", "Fans & lights", "Wiring", "MCB & fuse trips", "Inverter connection"] },
  { name: "Plumber", line: "Leaks, stopped.", jobs: ["Taps & pipes", "Blocked drains", "Tank & motor", "Bathroom fittings"] },
  { name: "AC repair", line: "Cool, again.", jobs: ["Service", "Gas top-up", "Not cooling", "Installation"] },
] as const;

export const comingNext = ["House Cleaning", "Carpenters", "Painter", "CCTV", "RO purifier"] as const;
