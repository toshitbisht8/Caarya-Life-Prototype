// Card-only work orders: fill the Recommended stack and the Explore grid around the functional ones
// (work-orders.js). Content is generated from the role's mapped business services (role-services.js)
// and a set of made-up ventures, so every role sees plausible cards. Their Details button does nothing.

// [name, industry, stage, what it does]
const DUMMY_VENTURES = [
  ["Nestaway Labs", "Smart Cities & Built Environment", "Seed-stage startup", "helps students find verified rental rooms near campus"],
  ["Ghar Ka Khana", "FoodTech", "Pre-seed startup", "connects office-goers with home cooks for daily meals"],
  ["Upskill Adda", "EduTech & Talent", "Seed-stage startup", "runs weekend skill bootcamps in tier-2 cities"],
  ["Khata Pro", "FinTech & DeFi", "Series A startup", "gives small shops a digital ledger and payment reminders"],
  ["Saathi Health", "HealthTech", "Seed-stage startup", "offers teleconsults in regional languages"],
  ["GreenLoop", "ClimateTech", "Pre-seed startup", "collects and recycles campus e-waste"],
  ["RideMitra", "Mobility & Smart Transport", "Seed-stage startup", "runs shared autos on fixed routes in small cities"],
  ["KhetiBuddy", "AgriTech & Food Security", "Seed-stage startup", "sends farmers weather and price alerts on WhatsApp"],
  ["PlayGround", "SportsTech & Wellness", "Pre-seed startup", "books turfs and courts for pickup games"],
  ["Tails & Co", "PetTech & Animal Care", "Bootstrapped business", "runs pet grooming at home"],
  ["Rangmanch", "Entertainment & MediaTech", "Community-led venture", "streams regional theatre performances"],
  ["Suraksha Cloud", "Cybersecurity & Privacy", "Seed-stage startup", "monitors small business websites for threats"],
  ["Silver Sathi", "GeronTech & Silver Economy", "Pre-seed startup", "helps elderly people manage medicines and bills"],
  ["Sunroof Energy", "Clean Energy & Storage", "Series A startup", "installs rooftop solar for housing societies"],
  ["Rewear", "FashionTech & Sustainable Apparel", "Seed-stage startup", "rents occasion wear for weddings and festivals"],
  ["Orbit Data", "SpaceTech & Downstream Data", "Seed-stage startup", "turns satellite images into crop and flood maps"],
  ["Inclusio", "Neurodiversity & Inclusive Tech", "Pre-seed startup", "builds learning tools for neurodivergent students"],
  ["MetaMuseum", "XR, Metaverse & Spatial Computing", "Pre-seed startup", "creates virtual tours of heritage sites"],
  ["BioBloom", "BioTech & Synthetic Biology", "Seed-stage startup", "makes plant-based packaging from crop waste"],
  ["QubitWorks", "Quantum & Advanced Computing", "Seed-stage startup", "offers optimisation tools for logistics firms"],
];

// What the card's "Value Constructs:" line shows, by domain of the business service.
const DUMMY_CONSTRUCTS = {
  "Design": ["User Research Synthesis", "Concept Sketching", "Wireframing", "Visual Design", "Usability Review", "Design Critique", "Design Handoff", "Accessibility Check"],
  "Marketing & Communications": ["Audience Research", "Message Development", "Content Calendar Planning", "Copy Writing", "Channel Planning", "Creative Testing", "Performance Review"],
  "Technology & Engineering": ["Requirements Analysis", "Technical Design", "Implementation", "Code Review", "Automated Testing", "Deployment", "Documentation"],
  "AI & Data Science": ["Data Collection & Cleaning", "Exploratory Analysis", "Feature Engineering", "Model Training", "Model Evaluation", "Model Deployment", "Monitoring Setup"],
  "Product": ["Problem Framing", "User Interviews", "Opportunity Mapping", "Prioritisation", "Roadmap Drafting", "Stakeholder Review", "Success Metrics"],
  "Business, Sales & Growth": ["Market Research", "Prospect Mapping", "Outreach Planning", "Pitch Development", "Deal Review", "Pipeline Reporting"],
};

// "a"/"an" by sound ("a UX…", "a user…", "an MLOps…"), nothing for plurals ("UX research findings").
const article = (w) => {
  if (/[^s]s$/.test(w)) return "";
  const vowelSound = /^([aeio]|u(?![sx]|ni))/i.test(w) || /^[FHLMNRSX][A-Z]/.test(w); // acronyms like "SEO", "MLOps"
  return vowelSound ? "an " : "a ";
};
const possessive = (v) => (/s$/.test(v) ? `${v}'` : `${v}'s`);
const DUMMY_TITLES = [
  (d, v) => `Create the ${d} ${v} needs before its next launch`,
  (d, v) => `Build ${article(d)}${d} for ${v}`,
  (d, v) => `Rework the ${d} behind ${v}`,
  (d, v) => `Give ${v} ${article(d)}${d} its team can act on`,
  (d, v) => `Deliver ${possessive(v)} first ${d}`,
  (d, v) => `Shape ${possessive(v)} ${d} for its next stage of growth`,
];

// "Deployed Web Application" -> "web application"; keeps acronyms like MLOps, SEO, UX.
const deliverableNoun = (d) => d
  .replace(/ \/ (Tool|Service)$/, "").replace(/^Migrated \/ /, "").replace(/ ?\/ ?/g, " and ")
  .replace(/^(Deployed|Published|Trained|Migrated|Modernised|Implemented)\s+/, "")
  .split(" ").map((w) => (/^[A-Z][a-z]+$/.test(w) ? w.toLowerCase() : w)).join(" ");

const strHash = (s) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);
const lowerFirst = (s) => s.charAt(0).toLowerCase() + s.slice(1);

// Card content for dummy work order `n` (1-based) of a role, shaped like woContent() for the card.
function dummyContent(roleId, n) {
  const role = roleId ? roleName(roleId) : "";
  const services = ROLE_SERVICES[role] || Object.values(ROLE_SERVICES)[0];
  const seed = strHash(role) + n * 7;
  const [service, deliverable, desc, domain] = services[(n - 1) % services.length];
  const [venture, industry, stage, does] = DUMMY_VENTURES[seed % DUMMY_VENTURES.length];
  const d = deliverableNoun(deliverable);
  const constructs = DUMMY_CONSTRUCTS[domain] || DUMMY_CONSTRUCTS["Technology & Engineering"];
  const count = 6 + (seed % 4);
  const hours = 12 + (seed % 5) * 4;
  return {
    real: false,
    service: `${service} for ‘${venture}’`,
    title: DUMMY_TITLES[seed % DUMMY_TITLES.length](d, venture),
    desc: `${venture} ${does}. You'll work on ${lowerFirst(desc.replace(/\.$/, ""))}, from first draft to something the team can use.`,
    tags: [industry, stage, domain, `${hours}-${hours + 4} hrs (recommended time)`],
    vcs: Object.fromEntries(Array.from({ length: count }, (_, i) => [i + 1, { name: constructs[(seed + i) % constructs.length] }])),
    resume: `“Delivered ${article(d)}${d} for ${venture}, ${article(stage).trim() || "a"} ${/^Series/.test(stage) ? stage : lowerFirst(stage)} in ${industry}.”`,
    progression: WORK_ORDER.progression, // growth.js
  };
}
