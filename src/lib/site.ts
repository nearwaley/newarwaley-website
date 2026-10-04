/**
 * Single source of truth for brand + contact details.
 * Change a value here and it updates across the whole site.
 */
export const site = {
  name: "Nearwaley",
  tagline: "Never wait for help again.",
  description:
    "Nearwaley connects homes with verified Specialists nearby — electricians, plumbers, AC technicians, home nurses and more. Launching soon in Trivandrum.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.nearwealey.com",
  phoneDisplay: "+91 88488 17833",
  phoneTel: "+918848817833",
  whatsapp: "918848817833",
  address: "Technopark Campus, Thiruvananthapuram, Keralam",
  mapsUrl: "https://maps.google.com/?q=Technopark+Campus+Thiruvananthapuram",
  // TODO: replace with real profile links
  social: {
    instagram: "https://instagram.com/nearwaley",
    facebook: "https://facebook.com/nearwaley",
    linkedin: "https://www.linkedin.com/company/nearwaley",
  },
  freeSpots: 50,
  onboardingFee: "₹2,000",
  cashbackAfterJobs: 7,
} as const;

export const whatsappLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/why-nearwaley", label: "Why Nearwaley" },
  { href: "/become-a-specialist", label: "Become a Specialist" },
  { href: "/investors", label: "Investors" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  { name: "Electrician", line: "Lights out? Sorted.", jobs: ["Switches & sockets", "Fans & lights", "Wiring", "MCB & fuse trips", "Inverter connection"] },
  { name: "Plumber", line: "Leaks, stopped.", jobs: ["Taps & pipes", "Blocked drains", "Tank & motor", "Bathroom fittings"] },
  { name: "AC repair", line: "Cool, again.", jobs: ["Service", "Gas top-up", "Not cooling", "Installation"] },
  { name: "Fridge repair", line: "Save the milk.", jobs: ["Not cooling", "Gas refill", "Thermostat & parts"] },
  { name: "Washing machine", line: "Spinning by evening.", jobs: ["Drum & motor", "Drain problems", "Installation"] },
  { name: "Home nurse", line: "Care, at home.", jobs: ["Elderly care", "Dressings & injections", "Post-hospital support"] },
  { name: "Home cleaning", line: "Guests at six? Done.", jobs: ["Bathroom", "Kitchen", "Full home deep clean"] },
  { name: "Carpenter", line: "Squeaks, sticks, wobbles.", jobs: ["Doors & locks", "Furniture", "Shelves & fittings"] },
] as const;

export const comingNext = ["Coconut climber", "Painter", "CCTV", "RO purifier", "Water tank cleaning", "Driver"] as const;
