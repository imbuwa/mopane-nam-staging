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
  { label: "Technical Partner", href: "/technical-partner/", target: "technical-partner" },
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
    detailHref: "#technical-partner",
  },
  {
    route: "technical-partner",
    image: "assets/optimized/technical-partner.jpg",
    imageWidth: 1280,
    imageHeight: 720,
    title: "Technical Partner",
    body: "Fairtree Asset Management brings technical depth to support disciplined portfolio thinking.",
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
  { target: "technical-partner", image: "assets/optimized/technical-partner.jpg", width: 1280, height: 720 },
  { target: "why", image: "assets/optimized/brand-guideline-cover.jpg", width: 1200, height: 675 },
  { target: "blog", image: "assets/optimized/team-screenshot.jpg", width: 1400, height: 1181 },
  { target: "contacts", image: "assets/optimized/menu-corporate.jpg", width: 1800, height: 1200 },
] as const;

export const detailPages = {
  technicalPartner: {
    pageNumber: "01 / 04",
    eyebrow: "Technical Partner",
    title: "Depth beyond the local desk",
    summary:
      "Mopane pairs Namibian proximity with the institutional research depth of Fairtree Asset Management, giving clients a broader investment lens while keeping the relationship local and accountable.",
    image: "assets/optimized/technical-partner.jpg",
    imageWidth: 1280,
    imageHeight: 720,
    intro:
      "The right technical partner should make the investment process quieter, sharper, and more resilient. Fairtree brings established portfolio management capability, research discipline, and market infrastructure, while Mopane remains close to the client relationship, local context, and practical investment needs in Namibia.",
    pillars: [
      {
        label: "Research depth",
        text: "A wider research lens helps test investment ideas, interrogate risk, and separate durable opportunity from short-term market noise.",
      },
      {
        label: "Portfolio discipline",
        text: "Technical portfolio input supports asset allocation, manager oversight, and risk awareness across changing market conditions.",
      },
      {
        label: "Local accountability",
        text: "Mopane keeps the experience personal and locally grounded, translating technical work into clear client conversations.",
      },
    ],
    featureTitle: "A partnership designed to feel invisible",
    featureText:
      "Clients should feel the benefit of depth, not the burden of complexity. The technical partnership strengthens the work behind the scenes while Mopane keeps the experience clear, human, and accountable.",
    ctaLabel: "Start a conversation",
    ctaHref: "/contact-us/",
    nextLabel: "Why Us",
    nextHref: "/why-us/",
  },
  whyUs: {
    pageNumber: "02 / 04",
    eyebrow: "Why Us",
    title: "Stewardship with local conviction",
    summary:
      "Mopane is built for investors who want considered advice, long-term discipline, and a relationship anchored in trust rather than noise.",
    image: "assets/optimized/mopane-texture.jpg",
    imageWidth: 1600,
    imageHeight: 1066,
    intro:
      "A premium investment experience is not louder. It is calmer, more legible, and more deliberate. Mopane's role is to help clients make better decisions through patient capital, clear communication, local market awareness, and a process that respects risk.",
    pillars: [
      {
        label: "Namibian context",
        text: "Advice is shaped by an understanding of local families, institutions, regulation, currency considerations, and long-term opportunity.",
      },
      {
        label: "Patient capital",
        text: "Portfolios should be shaped around purpose, time horizon, and resilience rather than short-term theatre.",
      },
      {
        label: "Human clarity",
        text: "Clients deserve precise explanations, plain tradeoffs, and decisions they can understand before capital is committed.",
      },
    ],
    featureTitle: "The experience should lower the temperature",
    featureText:
      "Markets move constantly. A considered advisor helps clients separate signal from noise, stay aligned to their objectives, and act only when action is warranted.",
    ctaLabel: "Explore insights",
    ctaHref: "/insights/",
    nextLabel: "Insights",
    nextHref: "/insights/",
  },
  insights: {
    pageNumber: "03 / 04",
    eyebrow: "Insights",
    title: "Thinking shaped for long-term capital",
    summary:
      "Market notes, investment observations, and practical perspective for Namibian investors who value discipline over drama.",
    image: "assets/optimized/team-screenshot.jpg",
    imageWidth: 1400,
    imageHeight: 1181,
    intro:
      "The insights page is Mopane's editorial room: concise market thinking, client education, and investment notes designed to build trust through clarity rather than volume.",
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
    nextLabel: "Contact Us",
    nextHref: "/contact-us/",
    insights: [
      {
        date: "Market Perspective",
        title: "Reading markets without reacting to every movement",
        text: "A note on separating useful market signals from short-term noise when portfolios are built for long-term capital.",
      },
      {
        date: "Client Education",
        title: "Why time horizon should lead the investment conversation",
        text: "A practical look at how purpose, liquidity, and patience shape a more resilient investment plan.",
      },
      {
        date: "Namibia Lens",
        title: "Local context matters when global markets shift",
        text: "Perspective on translating global conditions into decisions that make sense for Namibian investors.",
      },
    ],
  },
  contact: {
    pageNumber: "04 / 04",
    eyebrow: "Contact Us",
    title: "Begin with a considered conversation",
    summary:
      "Reach Mopane in Windhoek to discuss investment management, client needs, and the right next step.",
    image: "assets/optimized/mopane-texture.jpg",
    imageWidth: 1600,
    imageHeight: 1066,
    intro:
      "The first interaction should feel calm and direct. Share your details, the nature of your enquiry, and the team can follow up with the appropriate next step.",
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
      "After an enquiry is received, Mopane can respond with the most appropriate next step, whether that is a short clarification, a scheduled conversation, or a more detailed discussion about investment needs.",
    ctaLabel: "E-mail Mopane",
    ctaHref: contactDetails.emailHref,
    nextLabel: "Return Home",
    nextHref: "/",
  },
} as const;
