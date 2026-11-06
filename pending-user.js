// Second demo account: sign in as "priya.sharma" (or priya.sharma@example.com), any password.
// Priya Sharma has finished profiling and every set-up step, and is waiting on a pod mentor to approve her for a pass:
// Growth Track shows the review card (Figma 1446:12606). Shift+L (mentor-sim.js) approves her for the Learner Pass.
// Seeded in memory like the rest of the prototype; a page reload starts fresh.

const PENDING_LOGINS = ["priya.sharma", "priya.sharma@example.com"]; // usernames that open this account (app.js)

function loadPendingUser() {
  const services = (role, n) => (ROLE_SERVICES[role] || []).slice(0, n).map(([title]) => ({ title }));
  applyProfile({
    about: { name: "Priya Sharma", fieldOfStudy: "BA (Hons), Journalism & Mass Communication", graduationYear: 2027 },
    college: "Delhi University",
    contact: { email: "priya.sharma@example.com", mobile: "+91 9876501234" },
    roles: [
      { role: "Content Creator", businessServices: services("Content Creator", 2), skills: ["Short-form video editing", "Copywriting", "Canva design"] },
      { role: "Brand Strategist", businessServices: services("Brand Strategist", 1), skills: ["Brand positioning", "Audience research"] },
    ],
    industries: ["EduTech & Talent", "ClimateTech"],
    careerPriority: "Industrial work",
  }, true); // camp.js: a new user, sections unlocking as she goes

  const [content, brand] = myRoles();
  const DAY = 86400000;
  const ago = (days, hours = 0) => Date.now() - days * DAY - hours * 3600000;

  // ---------- Every Road step done ----------
  Object.assign(state.camp, {
    toured: true, introShown: true, expDone: true, proofPrompted: true,
    experience: { [content]: 1, [brand]: 0 },
  });
  state.assets = [
    { id: 8001, title: "‘Chai pe charcha’: campus food-stall reel series", domain: "Marketing & Communications", deliverable: "Campaign Content Pack", type: "personal", company: "", cover: "", link: "https://www.instagram.com/demo-chaipecharcha" },
    { id: 8002, title: "College fest social media takeover", domain: "Marketing & Communications", deliverable: "Social Media Content Calendar", type: "academic", company: "", cover: "", link: "https://drive.google.com/drive/folders/demo-festtakeover" },
  ];
  state.tSkills = {
    "Effective Listening": 5, "Intentional Learning": 6, "Giving Feedback": 4,
    "Research & Analysis": 4, "Problem Solving": 5, "Critical Thinking": 4,
    "Written Communication": 6, "Verbal Communication": 5,
  };
  state.tools = ["Canva", "Photoshop", "Google Analytics", "Microsoft Office"];
  unlock("proof", "competencies", "profile", "assessments"); // what set-up opens (Figma 1365:42807)
  state.camp.setupAt = ago(1, 3); // camp.js: so the messages that follow set-up have already arrived

  // ---------- Camp: the set-up history, then what's current ----------
  state.camp.inbox = [];
  syncMessages(true); // posts everything due so far, as read
  const when = { exp: ago(9), proof: ago(8), transferable: ago(8, 2), tools: ago(8, 1), "first-asset": ago(6), "tm-done": ago(1, 3), assessments: ago(1, 2), community: ago(0, 5), brand: ago(0, 4), synergy: ago(0, 3) }; // Community, then the brand gig, then Synergy
  state.camp.inbox.forEach((m) => { m.at = when[m.id] ?? m.at; });
  ["assessments", "synergy", "brand", "community"].forEach((id) => { const m = state.camp.inbox.find((x) => x.id === id); if (m) m.read = false; });
  tmShown = true; // camp.js: the Talent Manager's congratulations has been seen

  // Nothing new to announce on sign-in: steps and sections are all accounted for.
  state.camp.stepsSeen = new Set(CAMP_STEPS.map((_, i) => i));
  state.camp.spotSeen = new Set(state.camp.unlocked);
}
