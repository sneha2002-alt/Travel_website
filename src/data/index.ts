// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  {
    href: "#",
    key: "how_CampHaven_work",
    label: "How CampHaven Work?",
    items: [
      { href: "/introduction", label: "Introduction" },
      { href: "/features", label: "Features" },
      { href: "/guide", label: "User Guide" },
      { href: "/testimonials", label: "Testimonials" },
      { href: "/faqs", label: "FAQs" },
    ],
  },
  {
    href: "#",
    key: "services",
    label: "Services",
    items: [
      { href: "/camping-packages", label: "Camping Packages" },
      { href: "/event-planning", label: "Event Planning" },
      { href: "/equipment-rental", label: "Equipment Rental" },
      { href: "/guided-tours", label: "Guided Tours" },
      { href: "/workshops", label: "Workshops" },
    ],
  },
  {
    href: "#",
    key: "pricing",
    label: "Pricing",
    items: [
      { href: "/camping-pricing", label: "Camping Packages Pricing" },
      { href: "/event-pricing", label: "Event Planning Pricing" },
      { href: "/rental-pricing", label: "Equipment Rental Pricing" },
      { href: "/membership-plans", label: "Membership Plans" },
      { href: "/discounts-offers", label: "Discounts & Offers" },
    ],
  },
  {
    href: "#",
    key: "contact_us",
    label: "Contact Us",
    items: [
      { href: "/inquiries", label: "General Inquiries" },
      { href: "/support", label: "Support" },
      { href: "/partnerships", label: "Partnership Opportunities" },
      { href: "/careers", label: "Careers" },
      { href: "/location", label: "Location & Hours" },
    ],
  },
];

// Hero Section
export const heroData = {
  title: "Truno Haven Camp",
  description:
    "Embark on a journey with us to discover the untouched beauty of nature. Your adventure around the world starts here, with just one app. Explore the world's natural beauty. One app, endless adventures.",
  reviews: {
    count: "284",
    text: "Excellent Reviews",
  },
  locationInfo: {
    location: "Zermatt",
    distance: "112.47 mi",
    elevation: "1.620 km",
  },

  images: {
    camp: "/camp.svg",
    star: "/star.svg",
    close: "/close.svg",
  },
};

// CAMP SECTION
export const PEOPLE_URL = [
  "/person-1.png",
  "/person-2.png",
  "/person-3.png",
  "/person-4.png",
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: "Real maps can be offline",
    icon: "/map.svg",
    variant: "green",
    description:
      "We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location",
  },
  {
    title: "Set an adventure schedule",
    icon: "/calendar.svg",
    variant: "green",
    description:
      "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
  },
  {
    title: "Technology using augment reality",
    icon: "/tech.svg",
    variant: "green",
    description:
      "Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection",
  },
  {
    title: "Many new locations every month",
    icon: "/location.svg",
    variant: "orange",
    description:
      "Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing",
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      "About Hilink",
      "Press Releases",
      "Environment",
      "Jobs",
      "Privacy Policy",
      "Contact Us",
    ],
  },
  {
    title: "Our Community",
    links: ["Climbing xixixi", "Hiking hilink", "Hilink kinthill"],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Admin Officer", value: "123-456-7890" },
    { label: "Email Officer", value: "hilink@akinthil.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    "/facebook.svg",
    "/instagram.svg",
    "/twitter.svg",
    "/youtube.svg",
    "/wordpress.svg",
  ],
};
