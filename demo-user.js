// Demo account: sign in as "arjun.mehta" (or arjun.mehta@example.com), any password, to land in a seasoned profile.
// Everything is seeded in memory, like the rest of the prototype; a page reload starts fresh.
//
// Arjun Mehta, Interaction Designer (C4), Content Creator (C3), Campaign Manager (C2): two work orders
// delivered and graded, one more delivered for content, one in progress on the desk, one started
// for campaigns, plus proof of work, achievements, rated skills and both assessments taken.

const DEMO_LOGINS = ["arjun.mehta", "arjun.mehta@example.com"]; // usernames that open the demo account (app.js)
const DEMO_ROLES = {
  interaction: "Design::Interaction Designer",
  content: "Marketing & Communications::Content Creator",
  campaign: "Marketing & Communications::Campaign Manager",
};
const DAY = 86400000;
const daysAgo = (d, h = 18) => { const t = new Date(Date.now() - d * DAY); t.setHours(h, 0, 0, 0); return t.getTime(); };

// A finished session on a construct: { start, end, durationMs, journal, notes, moments }.
const demoLog = (day, mins, notes, moments = []) => {
  const end = daysAgo(day, 20);
  return { start: end - mins * 60000, end, durationMs: mins * 60000, journal: true, notes, moments: moments.map((type) => ({ type, fields: {} })) };
};
const graded = (title, link, level, primary = true) => ({ title, link, status: "graded", level, primary });
const pending = (title, link, primary = false) => ({ title, link, status: "pending", primary });

function loadDemoUser() {
  // ---------- Identity & signup answers ----------
  Object.assign(state, { name: "Arjun Mehta", email: "arjun.mehta@example.com", avatar: "assets/demo/avatar.jpg" });
  state.roles = new Set(Object.values(DEMO_ROLES));
  state.industries = new Set(["Mobility & Smart Transport", "EduTech & Talent", "ClimateTech"]);
  const about = document.getElementById("about-form");
  about.mobile.value = "98765 43210";
  about.college.value = "Symbiosis International University, Pune";
  about.field.value = "B.Des, Interaction Design";
  about.year.value = "2027";
  syncRoleChips(); // app.js
  document.querySelectorAll("#industries .industry").forEach((card) => {
    const on = state.industries.has(card.textContent.trim());
    card.classList.toggle("is-selected", on);
    card.setAttribute("aria-pressed", String(on));
  });

  // ---------- Career stage per role, coins ----------
  state.roleStages = { [DEMO_ROLES.interaction]: 4, [DEMO_ROLES.content]: 3, [DEMO_ROLES.campaign]: 2 };
  Object.assign(state, { coins: 3850, coinsMax: 5000 });

  // ---------- Growth tracks and the desk ----------
  Object.assign(state.growth, {
    activeRole: DEMO_ROLES.interaction,
    tracks: { [DEMO_ROLES.interaction]: [104, 101], [DEMO_ROLES.content]: [109, 102, 103], [DEMO_ROLES.campaign]: [108] },
    desk: new Set([104]),
    deskRole: DEMO_ROLES.interaction,
  });

  state.deskData = {
    // Tiffinly prototype: delivered, graded L3.
    101: {
      tab: "brief", lastVc: 8, since: daysAgo(62),
      final: { title: "Tiffinly first-week prototype (v3, post-testing)", link: "https://www.figma.com/proto/demo-tiffinly", status: "graded", level: 3 },
      vcs: {
        1: { mentor: null, artefacts: [graded("Onboarding teardown: 3 food apps", "https://www.notion.so/demo-teardown", 3)], logs: [demoLog(60, 95, "Tore down three first-order flows, annotated where each asks for commitment.", ["Insights"])] },
        3: { mentor: "Tuesday, 2nd Sep · 5:00 PM", artefacts: [graded("First-week flow map with error branches", "https://www.figma.com/board/demo-flow", 4)], logs: [demoLog(57, 120, "Mapped plan, chef and scheduling paths, including sold-out chefs.", ["Judgment & Decision-Making"]), demoLog(55, 70, "Cut the flow from 31 screens to 22 after the mentor call.", ["Generation"])] },
        5: { mentor: null, artefacts: [graded("Screen-state inventory (24 screens)", "https://www.figma.com/file/demo-states", 3)], logs: [demoLog(50, 140, "Designed empty, loading and error states for every key screen.", ["Process & Framework"])] },
        7: { mentor: null, artefacts: [graded("Clickable first-week prototype", "https://www.figma.com/proto/demo-tiffinly", 3)], logs: [demoLog(46, 160, "Wired variables so the chosen plan carries to checkout.", ["Learning"]), demoLog(44, 90, "Faked chef availability with conditional logic.", ["Failure & Setbacks"])] },
        8: { mentor: null, artefacts: [graded("Usability test record: 5 participants", "https://docs.google.com/document/d/demo-usability", 3)], logs: [demoLog(40, 180, "Ran five moderated sessions in the hostel common room.", ["Stakeholder Navigation", "Insights"])] },
      },
    },
    // Second Shelf campaign: delivered, graded L4.
    102: {
      tab: "brief", lastVc: 6, since: daysAgo(48),
      final: { title: "'Pass it on' campaign content pack", link: "https://drive.google.com/drive/folders/demo-secondshelf", status: "graded", level: 4 },
      vcs: {
        1: { mentor: null, artefacts: [graded("'Pass it on' concept brief", "https://docs.google.com/document/d/demo-concept", 4)], logs: [demoLog(47, 80, "Landed the 'pass it on' idea after testing three angles with juniors.", ["Judgment & Decision-Making"])] },
        5: { mentor: null, artefacts: [graded("Three edited reels", "https://www.instagram.com/demo-secondshelf", 3)], logs: [demoLog(38, 150, "Cut three reels; captioned everything for sound-off.", ["Learning"])] },
        6: { mentor: null, artefacts: [graded("Caption and WhatsApp copy set", "https://docs.google.com/document/d/demo-copy", 4)], logs: [demoLog(36, 75, "Rewrote hooks so they read like a senior's tip.", ["Generation"])] },
      },
    },
    // Tapri Talk feature: delivered, graded L3.
    103: {
      tab: "brief", lastVc: 7, since: daysAgo(30),
      final: { title: "The tea stall that runs the night shift", link: "https://medium.com/@demo/tapri-feature", status: "graded", level: 3 },
      vcs: {
        3: { mentor: null, artefacts: [graded("Field log: two visits to the canteen tapri", "https://docs.google.com/document/d/demo-fieldlog", 3)], logs: [demoLog(28, 110, "Second visit after 11pm. The regulars only show up then.", ["Insights"])] },
        5: { mentor: null, artefacts: [graded("Interview record: 4 regulars", "https://docs.google.com/document/d/demo-interviews", 3)], logs: [demoLog(26, 95, "The chaiwala finally told the story about the 2019 floods.", ["Stakeholder Navigation"])] },
        7: { mentor: null, artefacts: [graded("Feature draft, 940 words", "https://docs.google.com/document/d/demo-draft", 3)], logs: [demoLog(22, 170, "Wrote the draft around the night-shift regulars.", ["Working in Ambiguity"])] },
      },
    },
    // Hopon interaction spec: in progress on the desk.
    104: {
      tab: "brief", lastVc: 6, since: daysAgo(9),
      final: null,
      vcs: {
        1: { mentor: null, artefacts: [graded("Hopon booking flow: interaction audit", "https://www.notion.so/demo-hopon-audit", 3)], logs: [demoLog(8, 85, "Logged 14 silent moments in the current booking flow.", ["Insights"])] },
        2: { mentor: null, artefacts: [graded("Edge-case map: sold out, lost signal, cancelled", "https://www.figma.com/board/demo-hopon-flow", 4)], logs: [demoLog(6, 130, "Mapped recovery paths for the five worst edge cases.", ["Judgment & Decision-Making"])] },
        3: { mentor: null, artefacts: [pending("Component state model v1", "https://www.figma.com/file/demo-hopon-states", true)], logs: [demoLog(3, 110, "Modelled seat picker and booking button states; seat collisions are tricky.", ["Working in Ambiguity"])] },
        6: { mentor: "Thursday, 9th Oct · 6:00 PM", artefacts: [], logs: [demoLog(1, 60, "Started the prototype: smart animate on the bottom sheet.", ["Learning"])] },
      },
    },
    // Refillo campaign: started.
    108: {
      tab: "brief", lastVc: 2, since: daysAgo(5),
      final: null,
      vcs: {
        1: { mentor: null, artefacts: [graded("Refillo launch targets", "https://docs.google.com/spreadsheets/d/demo-targets", 2)], logs: [demoLog(5, 50, "Set targets around passes sold, not reach.", ["Process & Framework"])] },
        2: { mentor: null, artefacts: [pending("Audience segments: hostellers vs day scholars", "https://docs.google.com/document/d/demo-segments", true)], logs: [demoLog(2, 65, "Split the campus into three segments by water habits.", [])] },
      },
    },
  };

  // ---------- Competencies ----------
  state.techSkills = [
    { name: "Interaction design", status: "verified", level: 4 },
    { name: "Figma prototyping", status: "verified", level: 4 },
    { name: "User flow mapping", status: "verified", level: 4 },
    { name: "Usability testing", status: "verified", level: 3 },
    { name: "Short-form video editing", status: "verified", level: 3 },
    { name: "Feature writing", status: "verified", level: 3 },
    { name: "Motion specification", status: "pending" },
    { name: "Campaign planning", status: "pending" },
    { name: "Google Analytics", status: "new" },
  ];
  state.tSkills = {
    "Effective Listening": 6, "Giving Feedback": 5, "Intentional Learning": 6,
    "Research & Analysis": 5, "Problem Solving": 6, "Critical Thinking": 5,
    "Written Communication": 6, "Verbal Communication": 4,
  };

  // ---------- Proof of work & achievements ----------
  const asset = (id, title, domain, deliverable, type, company, link) => ({ id, title, domain, deliverable, type, company, cover: "", link });
  state.assets = [
    asset(9001, "Tiffinly: first-week ordering prototype", "Design", "Interactive Prototype", "work", "Tiffinly", "https://www.figma.com/proto/demo-tiffinly"),
    asset(9002, "'Pass it on': Second Shelf semester campaign", "Marketing & Communications", "Campaign Content Pack", "work", "Second Shelf", "https://drive.google.com/drive/folders/demo-secondshelf"),
    asset(9003, "Campus library wayfinding redesign", "Design", "Interaction Design Specification", "academic", "", "https://www.behance.net/gallery/demo-wayfinding"),
    asset(9004, "Hostel mess menu app (concept)", "Design", "High-Fidelity UI Design", "personal", "", "https://dribbble.com/shots/demo-mess-menu"),
  ];
  state.achievements = [
    { id: 9101, assetId: 9001, transferable: ["Problem Solving", "Effective Listening", "Written Communication"], technical: ["Prototyping", "Interaction Design", "UX Research & Testing"], tools: ["Figma"],
      indices: { "Usability & Task Success": "First-order completion in testing went from 2 of 5 to 5 of 5 after round two", "Design-to-Build Fidelity": "" }, env: ["Small team (2–5)", "Direct founder access", "Iterative environment"] },
    { id: 9102, assetId: 9002, transferable: ["Written Communication", "Critical Thinking"], technical: ["Content Creation & Strategy", "Campaign Planning & Execution"], tools: ["Google Analytics"],
      indices: { "Audience Growth & Reach": "Reels reached 18k students across three colleges", "Brand Salience": "" }, env: ["High autonomy", "High creative freedom"] },
    { id: 9103, assetId: 9003, transferable: ["Research & Analysis", "Problem Solving"], technical: ["Interaction Design", "Service Design"], tools: ["Figma", "PowerPoint"],
      indices: { "Usability & Task Success": "Students found the right shelf 40% faster in a hallway test" }, env: ["Solo contributor", "Self-directed work"] },
  ];

  // ---------- Assessments ----------
  // Occupational Synergy: strongest on Artistic, Investigative and Enterprising.
  const lean = { R: 2, I: 4, A: 5, S: 3, E: 4, C: 2 };
  state.riasec.answers = {};
  RIASEC_ORDER.forEach((t) => RIASEC_OPTIONS[t].forEach((_, i) => (state.riasec.answers[`${t}${i}`] = Math.max(1, Math.min(5, lean[t] - (i % 3 === 2 ? 1 : 0))))));
  state.riasec.result = { ...scoreRiasec(state.riasec.answers), completedAt: new Date(daysAgo(70)) }; // riasec.js
  // Work Environment Preferences: one answer per question (option index per question, in order).
  const picks = [2, 0, 1, 0, 1, 1, 1, 0, 1, 2, 2, 1, 1];
  state.wep.answers = Object.fromEntries(WEP_QUESTIONS.map((q, i) => [q[0], q[5][Math.min(picks[i] ?? 0, q[5].length - 1)][0]]));
  state.wep.result = { answers: { ...state.wep.answers }, completedAt: new Date(daysAgo(68)) }; // wep.js
}
