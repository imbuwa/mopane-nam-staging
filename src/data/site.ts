export const contactDetails = {
  phone: "+264 61 248 029",
  phoneHref: "tel:+26461248029",
  email: "info@mopane-nam.com",
  emailHref: "mailto:info@mopane-nam.com",
  company: "Mopane Asset Management (Pty) Ltd",
  address: "1 Ardeco Offices, Nelson Mandela Avenue, Klein Windhoek, Windhoek, Namibia",
};

export const menuItems = [
  { label: "Home", href: "#home", target: "home" },
  { label: "Services", href: "#services", target: "services" },
  { label: "Why Us", href: "#why", target: "why" },
  { label: "Blog", href: "#blog", target: "blog" },
  { label: "Contacts", href: "#contacts", target: "contacts" },
] as const;

export const slides = [
  {
    route: "home",
    image: "assets/optimized/brand-guideline-cover.jpg",
    imageWidth: 1200,
    imageHeight: 675,
    title: "Welcome",
    body: "Welcome to Mopane Asset Management. Nurturing prosperity through disciplined stewardship.",
  },
  {
    route: "services",
    image: "assets/optimized/menu-corporate.jpg",
    imageWidth: 1800,
    imageHeight: 1200,
    title: "Technical Partner",
    body: "Get to know more about our technical partner: Fairtree Asset Management.",
  },
  {
    route: "why",
    image: "assets/optimized/mopane-texture.jpg",
    imageWidth: 1600,
    imageHeight: 1066,
    title: "Why Us",
    body: "Local perspective, disciplined process, and patient capital built around long-term prosperity.",
  },
  {
    route: "blog",
    image: "assets/optimized/team-screenshot.jpg",
    imageWidth: 1400,
    imageHeight: 1181,
    title: "Insights",
    body: "Market notes and investment thinking shaped for Namibian families, institutions, and advisors.",
  },
  {
    route: "contacts",
    image: "assets/optimized/mopane-texture.jpg",
    imageWidth: 1600,
    imageHeight: 1066,
    title: "Contact Us",
    body: "More information about where to find us, and how to start a conversation.",
  },
] as const;

export const menuVisuals = [
  { target: "home", image: "assets/optimized/menu-corporate.jpg", width: 1800, height: 1200 },
  { target: "services", image: "assets/optimized/mopane-texture.jpg", width: 1600, height: 1066 },
  { target: "why", image: "assets/optimized/brand-guideline-cover.jpg", width: 1200, height: 675 },
  { target: "blog", image: "assets/optimized/team-screenshot.jpg", width: 1400, height: 1181 },
  { target: "contacts", image: "assets/optimized/menu-corporate.jpg", width: 1800, height: 1200 },
] as const;
