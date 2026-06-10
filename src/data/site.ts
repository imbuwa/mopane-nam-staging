export const contactDetails = {
  phone: "+264 61 248 029",
  phoneHref: "tel:+26461248029",
  email: "info@mopane-nam.com",
  emailHref: "mailto:info@mopane-nam.com",
  company: "Mopane Asset Management (Pty) Ltd",
  address: "1 Ardeco Offices, Nelson Mandela Avenue, Klein Windhoek, Windhoek, Namibia",
};

export const menuItems = [
  { label: "Home", href: "/", target: "home" },
  { label: "Services", href: "/technical-partner/", target: "services" },
  { label: "Why Us", href: "/why-us/", target: "why" },
  { label: "Insights", href: "/insights/", target: "blog" },
  { label: "Contact", href: "/contact-us/", target: "contacts" },
] as const;

export const slides = [
  {
    route: "home",
    image: "assets/optimized/brand-guideline-cover.jpg",
    imageWidth: 1200,
    imageHeight: 675,
    title: "Welcome",
    body: "Welcome to Mopane Asset Management. Nurturing prosperity through disciplined stewardship.",
    detailHref: "#services",
  },
  {
    route: "services",
    image: "assets/optimized/menu-corporate.jpg",
    imageWidth: 1800,
    imageHeight: 1200,
    title: "Technical Partner",
    body: "Get to know more about our technical partner: Fairtree Asset Management.",
    detailHref: "/technical-partner/",
  },
  {
    route: "why",
    image: "assets/optimized/mopane-texture.jpg",
    imageWidth: 1600,
    imageHeight: 1066,
    title: "Why Us",
    body: "Local perspective, disciplined process, and patient capital built around long-term prosperity.",
    detailHref: "/why-us/",
  },
  {
    route: "blog",
    image: "assets/optimized/team-screenshot.jpg",
    imageWidth: 1400,
    imageHeight: 1181,
    title: "Insights",
    body: "Market notes and investment thinking shaped for Namibian families, institutions, and advisors.",
    detailHref: "/insights/",
  },
  {
    route: "contacts",
    image: "assets/optimized/mopane-texture.jpg",
    imageWidth: 1600,
    imageHeight: 1066,
    title: "Contact Us",
    body: "More information about where to find us, and how to start a conversation.",
    detailHref: "/contact-us/",
  },
] as const;

export const menuVisuals = [
  { target: "home", image: "assets/optimized/menu-corporate.jpg", width: 1800, height: 1200 },
  { target: "services", image: "assets/optimized/mopane-texture.jpg", width: 1600, height: 1066 },
  { target: "why", image: "assets/optimized/brand-guideline-cover.jpg", width: 1200, height: 675 },
  { target: "blog", image: "assets/optimized/team-screenshot.jpg", width: 1400, height: 1181 },
  { target: "contacts", image: "assets/optimized/menu-corporate.jpg", width: 1800, height: 1200 },
] as const;

export const detailPages = {
  technicalPartner: {
    eyebrow: "Technical Partner",
    title: "Depth beyond the local desk",
    summary:
      "Mopane pairs Namibian proximity with the institutional research depth of Fairtree Asset Management, giving clients a broader investment lens without losing local accountability.",
    image: "assets/optimized/menu-corporate.jpg",
    imageWidth: 1800,
    imageHeight: 1200,
    intro:
      "The right technical partner should make the investment process quieter, sharper, and more resilient. Fairtree brings established portfolio management capability, research discipline, and market infrastructure that complements Mopane's client-facing presence in Namibia.",
    pillars: [
      {
        label: "Research depth",
        text: "Access to a broader investment team and process designed to test ideas before capital is committed.",
      },
      {
        label: "Portfolio discipline",
        text: "A measured approach to asset allocation, risk, and manager oversight, built for long-term compounding.",
      },
      {
        label: "Local accountability",
        text: "Mopane remains close to the client relationship, context, and practical realities of Namibian investors.",
      },
    ],
    featureTitle: "A partnership designed to feel invisible",
    featureText:
      "Clients should feel the benefit of depth, not the complexity behind it. The technical partnership supports the work in the background while Mopane keeps the experience personal, clear, and accountable.",
    ctaLabel: "Start a conversation",
    ctaHref: "/contact-us/",
  },
  whyUs: {
    eyebrow: "Why Us",
    title: "Stewardship with local conviction",
    summary:
      "Mopane is built for investors who want considered advice, long-term discipline, and a relationship anchored in trust rather than noise.",
    image: "assets/optimized/mopane-texture.jpg",
    imageWidth: 1600,
    imageHeight: 1066,
    intro:
      "A premium investment experience is not louder. It is calmer, more legible, and more deliberate. Mopane's role is to help clients make better decisions through patient capital, clear communication, and a process that respects risk.",
    pillars: [
      {
        label: "Namibian context",
        text: "Decisions are made with an understanding of local families, institutions, regulation, and opportunity.",
      },
      {
        label: "Patient capital",
        text: "The work favours durable outcomes over short-term theatre, with portfolios shaped around time and purpose.",
      },
      {
        label: "Human clarity",
        text: "Clients deserve explanations that are precise, useful, and free from unnecessary complexity.",
      },
    ],
    featureTitle: "The experience should lower the temperature",
    featureText:
      "Markets move. A considered advisor helps clients separate signal from noise, stay aligned to their objectives, and act only when action is warranted.",
    ctaLabel: "Explore insights",
    ctaHref: "/insights/",
  },
  insights: {
    eyebrow: "Insights",
    title: "Thinking shaped for long-term capital",
    summary:
      "Market notes, investment observations, and practical perspective for Namibian investors who value discipline over drama.",
    image: "assets/optimized/team-screenshot.jpg",
    imageWidth: 1400,
    imageHeight: 1181,
    intro:
      "The insights page should eventually become Mopane's living editorial room: concise market thinking, client education, and investment notes that build trust over time.",
    pillars: [
      {
        label: "Market notes",
        text: "Short commentary on market conditions, risk, and portfolio positioning.",
      },
      {
        label: "Client education",
        text: "Plain-language explainers that help investors understand process, tradeoffs, and time horizons.",
      },
      {
        label: "Perspective",
        text: "Local and global context translated into decisions clients can understand.",
      },
    ],
    featureTitle: "Editorial, not promotional",
    featureText:
      "The strongest insights pages do not chase volume. They publish fewer, sharper pieces that make the firm feel thoughtful and trusted.",
    ctaLabel: "Contact Mopane",
    ctaHref: "/contact-us/",
  },
  contact: {
    eyebrow: "Contact Us",
    title: "Begin with a considered conversation",
    summary:
      "Reach Mopane in Windhoek to discuss investment management, client needs, and the right next step.",
    image: "assets/optimized/mopane-texture.jpg",
    imageWidth: 1600,
    imageHeight: 1066,
    intro:
      "The first interaction should feel calm and direct. Share your details and the team can follow up with the appropriate next step.",
    pillars: [
      {
        label: "Phone",
        text: contactDetails.phone,
      },
      {
        label: "E-mail",
        text: contactDetails.email,
      },
      {
        label: "Address",
        text: contactDetails.address,
      },
    ],
    featureTitle: contactDetails.company,
    featureText:
      "Located at 1 Ardeco Offices, Nelson Mandela Avenue, Klein Windhoek, Windhoek, Namibia.",
    ctaLabel: "E-mail Mopane",
    ctaHref: contactDetails.emailHref,
  },
} as const;
