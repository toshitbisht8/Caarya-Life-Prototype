// Camp: the landing page after sign-in and Life's inbox. Not a message box: each card is an update from one of
// the AI manager personas, with the action it asks for. Below them sits the setup checklist.
// Also here: progressive menu unlocks for new users, the signup handoff from profiling.html, and the PGM's
// "where do you stand in your roles" flow (Figma 1299:25773, journey map FigJam 366:1220).

const CAMP_SECTIONS = ["career", "work", "impact", "identity", "knowledge", "network"];
const ALL_UNLOCKED = () => new Set(CAMP_SECTIONS);

state.camp = {
  fresh: false, // true for someone who just signed up: menu sections unlock as they progress
  unlocked: ALL_UNLOCKED(), // returning users see everything
  services: {}, // role id -> business services picked in signup
  priority: "", // career priority picked in signup
  experience: {}, // role id -> 0 none, 1 own / college work, 2 real client or organisation
  expDone: false,
  introShown: false, // the PGM pops up once on the first visit to Camp
  holdIntro: false, // wait for the logging-in loader before popping up
  mentorCall: null, // set when the career goals assessment is done
};

// Which menu section each workspace route belongs to (Camp itself is always open).
const SECTION_OF = {
  growth: "career", explore: "career", "explore-all": "career", "work-order": "career", "domain-affinity": "career", "industry-affinity": "career",
  desk: "work", "session-logs": "work",
  proof: "impact", "proof-asset": "impact", achievements: "impact", competencies: "impact", journal: "impact",
  profile: "identity", assessments: "identity",
  "daily-gains": "knowledge", exchange: "knowledge",
  rolodex: "network", "network-profile": "network",
};
const isUnlocked = (route) => !SECTION_OF[route] || state.camp.unlocked.has(SECTION_OF[route]);
const unlock = (...sections) => sections.forEach((s) => state.camp.unlocked.add(s));

const MANAGERS = {
  pgm: ["Professional Growth Manager", `<span class="camp-avatar camp-avatar--pgm"><img src="${G}growth-manager.png" alt="" /></span>`],
  talent: ["Talent Manager", `<span class="camp-avatar camp-avatar--talent"><img src="${G}talent-star.svg" alt="" /></span>`],
  brand: ["Brand Manager", `<span class="camp-avatar camp-avatar--brand"><img src="${G}brand-star.svg" alt="" /></span>`],
};

// ---------- Experience claims ----------
const EXPERIENCE = [
  ["I haven’t made anything in this role yet", "Even if I’ve read, watched or studied about it", "✨"],
  ["I’ve made things on my own or for college", "Personal projects, coursework, hackathons, practice briefs", "📚"],
  ["I’ve made things for a real client or organisation", "Internships, freelance, startup or company work, paid or unpaid", "💼"],
];
const quoteList = (ids) => {
  const names = ids.map((r) => `‘${roleName(r)}’`);
  return names.length > 1 ? `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}` : names[0];
};
// "informal experience with ‘A’ and ‘B’, and industrial work experience with ‘C’"
function claimText() {
  const roles = myRoles();
  const informal = roles.filter((r) => state.camp.experience[r] === 1);
  const industrial = roles.filter((r) => state.camp.experience[r] === 2);
  const parts = [];
  if (informal.length) parts.push(`informal experience with ${quoteList(informal)}`);
  if (industrial.length) parts.push(`industrial work experience with ${quoteList(industrial)}`);
  return parts.join(", and ");
}
const hasExperience = () => myRoles().some((r) => state.camp.experience[r] > 0);

// ---------- Setup checklist ----------
const redoProfiling = () => startProfiling();
const CAMP_STEPS = [
  ["Set up role preferences", () => state.roles.size > 0, redoProfiling],
  ["Set up industry preferences", () => state.industries.size > 0, redoProfiling],
  ["Set up business service preferences", () => Object.values(state.camp.services).some((s) => s.length), redoProfiling],
  ["Declare your current skill capabilities", () => state.techSkills.length > 0, () => { unlock("impact"); state.compTab = "technical"; go("competencies"); }],
  ["Declare your past work experience", () => state.camp.expDone, () => openPgmFlow()],
  ["Set up your career goals", () => !!state.wep?.result, () => go("wep")],
  ["Map your work personality", () => !!state.riasec?.result, () => go("riasec")],
];

// ---------- Messages ----------
// One current message per manager, following each one's sequence; then activity updates from the work itself.
function campMessages() {
  const msgs = [];
  const first = displayName().split(" ")[0];

  // Professional Growth Manager: experience -> proof of work -> achievements
  if (!state.camp.expDone) {
    msgs.push(["pgm", "Good job adding your role preferences. Now let’s understand where you stand in those roles.", "Let’s go", "pgm-flow"]);
  } else if (!state.assets.length) {
    msgs.push(hasExperience()
      ? ["pgm", `You claimed ${claimText()}. Verify that by adding proof of your work.`, "Add proof of work", "add-proof"]
      : ["pgm", `Once you gain your first experience, I’ll help you add its proof of work, ${first}. Until then, explore your proof of work section.`, "Explore proof of work", "proof"]);
  } else if (!state.achievements.length) {
    msgs.push(["pgm", "Your proof of work is coming together. You can convert your assets into achievements from here.", "Create an achievement", "achievement"]);
  } else {
    msgs.push(["pgm", "Get your assets verified by an industry expert for more credibility with recruiters, or keep adding proof of your work.", "Add more proof", "proof"]);
  }

  // Talent Manager: career goals -> mentor call -> work opportunities
  if (!state.wep?.result) {
    msgs.push(["talent", "You’re almost done. Help us understand your goals so I can recommend work opportunities that suit you.", "Take the brief assessment", "goals"]);
  } else if (state.camp.mentorCall && state.camp.mentorCall > Date.now()) {
    msgs.push(["talent", `Your mentor call is scheduled for ${fmtCall(state.camp.mentorCall)}. You’ll get your career report from your mentor. Explore available work opportunities in the meantime.`, "Explore work", "explore"]);
  } else {
    const fresh = myRoles().flatMap(catalogFor).filter((id) => !myRoles().some((r) => trackFor(r).includes(id))).length;
    msgs.push(["talent", fresh
      ? `There ${fresh === 1 ? "is 1 work order" : `are ${fresh} work orders`} recommended for your roles that you haven’t picked up yet.`
      : "You’ve picked up every work order recommended for your roles so far. Explore all work to find more.", "Explore work", "explore"]);
  }

  // Brand Manager: appears once the career goals are in (after the mentor call is booked)
  if (state.wep?.result) {
    const pct = Math.round((CAMP_STEPS.filter(([, done]) => done()).length / CAMP_STEPS.length) * 100);
    msgs.push(["brand", pct < 100
      ? `Your career report is ${pct}% done. You can check out how things add up on your profile here.`
      : "Your career report is complete. See how your work, skills and preferences add up on your profile.", "View your profile", "profile"]);
  }

  // Activity updates from the desk
  const vcs = Object.entries(state.deskData).flatMap(([wo, p]) => Object.entries(p.vcs).map(([vc, v]) => ({ wo: Number(wo), vc: Number(vc), v })));
  const pending = vcs.flatMap(({ v }) => v.artefacts).filter((a) => !a.level).length;
  if (pending) msgs.push(["pgm", `${pending} of your submissions ${pending === 1 ? "is" : "are"} waiting for a community mentor’s review. I’ll let you know when ${pending === 1 ? "it’s" : "they’re"} graded.`, "Open desk", "desk"]);
  const booked = vcs.find(({ wo, v }) => v.mentor && state.growth.desk.has(wo)); // the work order in focus
  if (booked) msgs.push(["pgm", `Your mentor session for ‘${vcInfo(booked.wo, booked.vc).name}’ is booked for ${booked.v.mentor}.`, "Open desk", "desk"]);
  return msgs;
}
// "Friday, 30 Oct at 6 pm"
const fmtCall = (t) => {
  const d = new Date(t);
  const h = d.getHours(), m = d.getMinutes();
  const time = `${h % 12 || 12}${m ? `:${String(m).padStart(2, "0")}` : ""} ${h < 12 ? "am" : "pm"}`;
  return `${d.toLocaleDateString("en-GB", { weekday: "long" })}, ${d.getDate()} ${d.toLocaleDateString("en-GB", { month: "short" })} at ${time}`;
};

const CAMP_ACTIONS = {
  "pgm-flow": () => openPgmFlow(),
  "add-proof": () => { unlock("impact"); go("proof"); setTimeout(() => openAssetModal(), 50); },
  proof: () => { unlock("impact"); go("proof"); },
  achievement: () => { unlock("impact"); startWizard(state.assets[0].id); },
  goals: () => go("wep"),
  explore: () => go("explore"),
  profile: () => go("profile"),
  desk: () => go("desk"),
};

// ---------- Page ----------
const campPage = document.getElementById("camp-page");
function renderCamp() {
  closeAllOverlays();
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
  const first = displayName().split(" ")[0];
  const steps = CAMP_STEPS.map(([title, done], i) => ({ title, done: done(), i }));
  const current = steps.find((s) => !s.done);
  const doneCount = steps.filter((s) => s.done).length;
  const stepRow = (s) => {
    const mark = s.done ? `<span class="camp-step__mark is-done" aria-label="Done">✓</span>`
      : `<span class="camp-step__mark${s === current ? " is-current" : ""}">${s.i + 1}</span>`;
    return s.done
      ? `<li class="camp-step is-done">${mark}<span class="camp-step__title">${s.title}</span></li>`
      : `<li><button type="button" class="camp-step${s === current ? " is-current" : ""}" data-camp-step="${s.i}">${mark}<span class="camp-step__title">${s.title}</span><span class="camp-step__go">${s === current ? "Start" : "Go"} <img src="${G}arrow-back.svg" alt="" /></span></button></li>`;
  };
  campPage.innerHTML = `
    <div class="camp-head">
      <h1>${greeting}, ${esc(first)}</h1>
      <p>Here’s what you need to catch up with</p>
    </div>
    <section class="camp-block">
      <p class="camp-kicker">Your Messages</p>
      <div class="camp-msgs">${campMessages().map(([who, text, cta, action]) => `
        <article class="camp-msg">
          <p class="camp-msg__from">${MANAGERS[who][1]}${MANAGERS[who][0]}</p>
          <p class="camp-msg__text">${esc(text)}</p>
          <button type="button" class="camp-msg__cta" data-camp-action="${action}">${esc(cta)} <span aria-hidden="true">→</span></button>
        </article>`).join("")}</div>
    </section>
    <section class="camp-block">
      <p class="camp-kicker">${doneCount === steps.length ? "You’re all set up" : `Getting set up · ${doneCount} of ${steps.length} done`}</p>
      ${doneCount === steps.length
        ? `<details class="camp-setup-done"><summary>All ${steps.length} setup steps done. Show them</summary><ol class="camp-steps">${steps.map(stepRow).join("")}</ol></details>`
        : `<ol class="camp-steps">${steps.map(stepRow).join("")}</ol>`}
    </section>`;
  // First visit after signing up: the PGM pops up (FigJam 339:990).
  if (state.camp.fresh && !state.camp.expDone && !state.camp.introShown && !state.camp.holdIntro) {
    state.camp.introShown = true;
    setTimeout(() => currentBase() === "camp" && openPgmFlow(), 350);
  }
}

campPage.addEventListener("click", (e) => {
  const a = e.target.closest("[data-camp-action]");
  if (a) return CAMP_ACTIONS[a.dataset.campAction]();
  const s = e.target.closest("[data-camp-step]");
  if (s) CAMP_STEPS[Number(s.dataset.campStep)][2]();
});

// Menu inbox widget: how many updates are waiting in Camp.
function syncInbox() {
  const n = campMessages().length;
  document.querySelector(".inbox__sub").textContent = n ? `${n} New Message${n === 1 ? "" : "s"}` : "All caught up";
  document.querySelector(".inbox__dot").hidden = !n;
}
document.querySelector(".inbox").addEventListener("click", () => go("camp"));

// ---------- PGM flow: where do you stand in your roles? (Figma 1299:25773) ----------
const pgmHead = (right) => `
  <header class="pgm-modal__head">
    <span class="pgm-modal__from">${MANAGERS.pgm[1]}Professional Growth Manager</span>
    ${right === "skip" ? `<button type="button" class="pgm-modal__skip" data-pgm="skip">Skip for now <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true"><path d="M6 18l8.5-6L6 6v12zm10-12v12h2V6h-2z" fill="currentColor"/></svg></button>`
      : right === "close" ? `<button type="button" class="pgm-modal__close" data-pgm="skip" aria-label="Close"><img src="${G}close-dark.svg" alt="" /></button>` : ""}
  </header>`;

function openPgmFlow() {
  const roles = myRoles();
  if (!roles.length) return startProfiling();
  const choices = { ...state.camp.experience };
  let step = 0; // 0 = intro, 1..n = roles
  let error = "";
  const ov = openOverlay(`<div class="pgm-modal" role="dialog" aria-modal="true" aria-label="Professional Growth Manager"></div>`, "modal");
  const box = ov.querySelector(".pgm-modal");
  function draw() {
    if (step === 0) {
      box.className = "pgm-modal pgm-modal--intro";
      box.innerHTML = `${pgmHead("skip")}
        <div class="pgm-modal__body">
          <h2>Good job setting up your role preferences. Now, let’s understand where you currently stand with those roles</h2>
          <p>In the upcoming screens, answer a few questions to help us understand where you stand with the roles of your choice. We’ll go through each of them one at a time.</p>
        </div>
        <footer class="pgm-modal__foot pgm-modal__foot--center"><button type="button" class="pgm-btn" data-pgm="next">Start now <span aria-hidden="true">→</span></button></footer>`;
    } else {
      const role = roles[step - 1];
      const name = roleName(role);
      const last = step === roles.length;
      box.className = "pgm-modal";
      box.innerHTML = `${pgmHead("close")}
        <div class="pgm-modal__body">
          <p class="pgm-modal__kicker">Role ${step}: ${esc(name)}</p>
          <h2 class="pgm-modal__q">What kind of output have you produced as ${/^[AEIOU]/i.test(name) ? "an" : "a"} <b>${esc(name)}</b> so far?</h2>
          <div class="pgm-options" role="radiogroup">${EXPERIENCE.map(([t, d, emoji], i) => `
            <button type="button" role="radio" aria-checked="${choices[role] === i}" class="pgm-option${choices[role] === i ? " is-on" : ""}" data-pgm-pick="${i}">
              <span><b>${t}</b><small>${d}</small></span><span class="pgm-option__emoji" aria-hidden="true">${emoji}</span>
            </button>`).join("")}</div>
          <p class="pgm-modal__error" role="alert">${error}</p>
        </div>
        <footer class="pgm-modal__foot">
          <button type="button" class="pgm-prev" data-pgm="prev" ${step === 1 ? "disabled" : ""}><span aria-hidden="true">←</span> Previous</button>
          <button type="button" class="pgm-btn" data-pgm="next">${last ? "Finish <span aria-hidden=\"true\">✓</span>" : "Next <span aria-hidden=\"true\">→</span>"}</button>
        </footer>`;
    }
  }
  ov.addEventListener("click", (e) => {
    const pick = e.target.closest("[data-pgm-pick]");
    if (pick) { choices[roles[step - 1]] = Number(pick.dataset.pgmPick); error = ""; return draw(); }
    const act = e.target.closest("[data-pgm]")?.dataset.pgm;
    if (act === "skip") return closeOverlay(); // the PGM's message stays in Camp
    if (act === "prev") { step--; error = ""; return draw(); }
    if (act === "next") {
      if (step > 0 && choices[roles[step - 1]] === undefined) { error = "Pick the option that fits you best to continue."; return draw(); }
      if (step < roles.length) { step++; return draw(); }
      // Finish: the PGM unlocks Proof of Work and takes the user there (FigJam 339:1035).
      state.camp.experience = choices;
      state.camp.expDone = true;
      unlock("impact");
      closeOverlay();
      go("proof");
      setTimeout(openProofUnlocked, 300);
    }
  });
  draw();
}

// "I've unlocked the proof of work section for you." Two versions: no experience / some experience.
function openProofUnlocked() {
  const first = displayName().split(" ")[0];
  const exp = hasExperience();
  const ov = openOverlay(`
    <div class="pgm-modal pgm-modal--note" role="dialog" aria-modal="true" aria-labelledby="pgm-unlocked">
      ${pgmHead(exp ? "skip" : "")}
      <div class="pgm-modal__body">
        <h2 id="pgm-unlocked">I’ve unlocked the proof of work section for you.</h2>
        <p>You can validate your work experience and track your growth here by adding proof of the work you do.</p>
        ${exp
          ? `<p>You claimed to have ${esc(claimText())}.</p>
             <p>Let’s verify those claims by adding proof of your work. Claims backed by evidence always work better with recruiters. Let’s start adding your first proof of work.</p>`
          : `<p>You claimed to have no experience with any of your roles. That is perfectly fine, ${esc(first)}. Once you gain your first experience, I’ll help you add its proof of work here.</p>
             <p>For now, you can explore this section or go back to Camp.</p>`}
      </div>
      <footer class="pgm-modal__foot pgm-modal__foot--center">
        ${exp ? `<button type="button" class="pgm-btn" data-pgm="add">Add proof of work <span aria-hidden="true">→</span></button>`
          : `<button type="button" class="pgm-btn" data-pgm="skip">Finish <span aria-hidden="true">→</span></button>`}
      </footer>
    </div>`, "modal");
  ov.addEventListener("click", (e) => {
    const act = e.target.closest("[data-pgm]")?.dataset.pgm;
    if (act === "skip") closeOverlay();
    if (act === "add") { closeOverlay(); openAssetModal(); } // impact.js
  });
}

// After the first proof of work, the PGM points to verification and achievements (FigJam 342:1267).
// Returns true when it took over from the usual "asset added" toast.
function campFirstAsset(asset) {
  if (state.assets.length !== 1) return false;
  const ov = openOverlay(`
    <div class="pgm-modal pgm-modal--note" role="dialog" aria-modal="true" aria-labelledby="pgm-first-proof">
      ${pgmHead("")}
      <div class="pgm-modal__body">
        <h2 id="pgm-first-proof">Your first proof of work is in.</h2>
        <p>You can get your assets verified by an industry expert for more credibility with recruiters, or keep adding proof of your work.</p>
        <p>You can also turn this asset into an achievement card that shows the skills and impact behind it.</p>
      </div>
      <footer class="pgm-modal__foot pgm-modal__foot--center">
        <button type="button" class="pgm-ghost" data-pgm="skip">Keep adding proof</button>
        <button type="button" class="pgm-btn" data-pgm="card">Create achievement card <span aria-hidden="true">→</span></button>
      </footer>
    </div>`, "modal");
  ov.addEventListener("click", (e) => {
    const act = e.target.closest("[data-pgm]")?.dataset.pgm;
    if (act === "skip") closeOverlay();
    if (act === "card") { closeOverlay(); startWizard(asset.id); } // impact.js
  });
  return true;
}

// Career goals done (Work Environment Preferences): growth track and the rest of Life open up, and the
// Talent Manager books a mentor call (two days out, 6 pm).
function campGoalsDone() {
  unlock(...CAMP_SECTIONS);
  if (!state.camp.mentorCall) {
    const t = new Date(Date.now() + 2 * 86400000);
    t.setHours(18, 0, 0, 0);
    state.camp.mentorCall = t.getTime();
  }
}

// ---------- Signup handoff (profiling.html) ----------
// Signup collects the profile in the skills version of the profiling flow, then comes back here.
function startProfiling() {
  try { sessionStorage.setItem("caarya-life-signup", JSON.stringify({ name: state.name, email: state.email })); } catch {}
  location.href = "profiling.html";
}

// Turn a profiling submission into a Life profile.
function applyProfile(p, fresh) {
  state.name = p.about?.name || state.name;
  state.email = p.contact?.email || state.email;
  const about = document.getElementById("about-form");
  if (p.college && ![...about.college.options].some((o) => o.value === p.college)) about.college.add(new Option(p.college, p.college));
  about.college.value = p.college || "";
  about.field.value = p.about?.fieldOfStudy || "";
  if (p.about?.graduationYear) {
    const y = String(p.about.graduationYear);
    if (![...about.year.options].some((o) => o.value === y)) about.year.add(new Option(y, y));
    about.year.value = y;
  }
  if (p.contact?.mobile) about.mobile.value = p.contact.mobile.replace(/^\+91\s*/, "").replace(/(\d{5})(\d{5})/, "$1 $2");
  const idFor = (role) => { const g = ROLE_GROUPS.find((x) => x.roles.includes(role)); return g ? `${g.name}::${role}` : null; };
  const roles = (p.roles || []).map((r) => [idFor(r.role), r]).filter(([id]) => id);
  state.roles = new Set(roles.map(([id]) => id));
  state.industries = new Set(p.industries || []);
  state.camp.services = Object.fromEntries(roles.map(([id, r]) => [id, (r.businessServices || []).map((s) => s.title)]));
  state.camp.priority = p.careerPriority || "";
  const skills = [...new Set(roles.flatMap(([, r]) => r.skills || []))];
  state.techSkills = skills.map((name) => ({ name, status: "new" })); // declared, not yet verified
  state.growth.activeRole = roles[0]?.[0] || null;
  state.camp.fresh = !!fresh;
  state.camp.unlocked = fresh ? new Set() : ALL_UNLOCKED();
  syncRoleChips(); // app.js
  document.querySelectorAll("#industries .industry").forEach((card) => {
    const on = state.industries.has(card.textContent.trim());
    card.classList.toggle("is-selected", on);
    card.setAttribute("aria-pressed", String(on));
  });
}
const savedProfile = () => { try { return JSON.parse(localStorage.getItem("caarya-profiling-last") || "null"); } catch { return null; } };

// Coming back from signup: sign in as the new user and land in Camp.
(function handoff() {
  let flag = null;
  try { flag = sessionStorage.getItem("caarya-life-handoff"); sessionStorage.removeItem("caarya-life-handoff"); } catch {}
  const p = flag && savedProfile();
  if (!p) return;
  applyProfile(p, flag === "new");
  state.camp.holdIntro = true;
  history.replaceState(null, "", "#camp");
  document.addEventListener("DOMContentLoaded", () => loggingIn(() => { state.camp.holdIntro = false; go("camp"); })); // app.js
})();
