// Camp: the landing page after sign-in and Life's inbox (Figma 1326:53131). Not a message box: each card is an
// update from one of the AI manager personas, with the action it asks for. Below them sits the Road To Career
// Acceleration checklist.
// Also here: progressive menu unlocks for new users, the signup handoff from profiling.html, and the PGM's flows:
// where you stand in your roles (1299:25773), transferable skills (1326:55276) and tool stack (1326:58143).

// Menu items a new user unlocks one by one; returning users see them all.
const CAMP_ITEMS = ["growth", "domain-affinity", "industry-affinity", "desk", "session-logs", "achievements", "competencies", "proof", "journal", "profile", "assessments", "daily-gains", "exchange", "rolodex", "network-profile"];
const ALL_UNLOCKED = () => new Set(CAMP_ITEMS);

state.camp = {
  fresh: false, // true for someone who just signed up: menu items unlock as they progress
  unlocked: ALL_UNLOCKED(),
  services: {}, // role id -> business services picked in signup
  priority: "", // career priority picked in signup
  experience: {}, // role id -> 0 none, 1 own / college work, 2 real client or organisation
  expDone: false,
  introShown: false, // the PGM pops up once on the first visit to Camp
  holdIntro: false, // wait for the logging-in loader before popping up
  profileSeen: false, // the Talent Manager's "Measured Excellence" message stays until it's opened
};

// Pages that live under a menu item (Camp itself is always open).
const ITEM_OF = { explore: "growth", "explore-all": "growth", "work-order": "growth", "proof-asset": "proof" };
const isUnlocked = (route) => {
  const item = ITEM_OF[route] || route;
  return !CAMP_ITEMS.includes(item) || state.camp.unlocked.has(item);
};
const unlock = (...items) => items.forEach((i) => state.camp.unlocked.add(i));

// Shows only unlocked menu items, and only the section headers that still have one.
function syncMenuLocks() {
  document.querySelectorAll("[data-menu-section]").forEach((sec) => {
    let any = false;
    sec.querySelectorAll(".menu-item[data-route]").forEach((item) => {
      item.hidden = !isUnlocked(item.dataset.route);
      any ||= !item.hidden;
    });
    sec.hidden = !any;
  });
}

const CA = "assets/camp/";
const MANAGERS = {
  pgm: ["Professional Growth Manager", `<span class="camp-avatar camp-avatar--pgm"><img src="${CA}pgm.png" alt="" /></span>`],
  talent: ["Talent Manager", `<span class="camp-avatar camp-avatar--talent"><img src="${G}talent-star.svg" alt="" /></span>`],
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

// ---------- Road To Career Acceleration ----------
const added = (n, word = "added") => (n ? `${n} ${word}` : "");
const addProof = () => {
  if (!isUnlocked("proof")) return openPgmFlow(); // proof of work opens after the experience questions
  go("proof");
  setTimeout(() => openAssetModal(), 50); // impact.js
};
// A Competencies tab once it's unlocked, otherwise the wizard that sets it up.
const compTabOr = (tab, wizard) => () => {
  if (!isUnlocked("competencies")) return wizard();
  state.compTab = tab;
  state.tDraft = null;
  go("competencies");
};
// [title, status label ("" = not done yet), start action, edit action (once done)]
const CAMP_STEPS = [
  ["Set up role preferences", () => added(state.roles.size, "selected"), () => openManageRoles()], // growth.js
  ["Set up industry preferences", () => added(state.industries.size), () => openManageIndustries()],
  ["Set Up Business Service Preferences", () => added(Object.values(state.camp.services).flat().length), () => openManageServices()],
  ["Set up technical skills", () => added(state.techSkills.length), () => openManageTech(), compTabOr("technical", () => openManageTech())], // competencies.js
  ["Declare past work experience", () => (state.camp.expDone ? "Complete" : ""), () => openPgmFlow()],
  ["Add proof of work", () => added(state.assets.length), addProof, () => go("proof")],
  ["Set up transferable skills", () => added(Object.keys(state.tSkills).length, "rated"), () => openTransferableFlow(), compTabOr("transferable", () => openTransferableFlow())],
  ["Set up tool stack", () => added(state.tools.length), () => openToolsFlow(), compTabOr("tools", () => openToolsFlow())],
];

// Edit industries: the signup industry picker in a modal (same pattern as Manage Roles in growth.js).
function openManageIndustries() {
  const el = document.getElementById("industries");
  const home = el.parentElement;
  const snapshot = new Set(state.industries);
  let saved = false;
  const sync = () => el.querySelectorAll(".industry").forEach((card) => {
    const on = state.industries.has(card.textContent.trim());
    card.classList.toggle("is-selected", on);
    card.setAttribute("aria-pressed", String(on));
  });
  const ov = openOverlay(`
    <div class="modal modal--roles" role="dialog" aria-modal="true" aria-labelledby="ind-title">
      <button type="button" class="modal__close" data-close aria-label="Close"><img src="${G}close-dark.svg" alt="" /></button>
      <div class="heading">
        <p class="heading__title" id="ind-title">Which industries would you like to work in?</p>
        <p class="heading__sub">Think of where you’d like to make an impact</p>
      </div>
      <div class="modal__body" data-ind-slot></div>
      <p class="error" data-step-error></p>
      <div class="modal__footer">
        <button type="button" class="btn btn--secondary" data-close>Cancel</button>
        <button type="button" class="btn btn--primary" data-save>Save industries</button>
      </div>
    </div>`, "modal", () => {
      if (!saved) { state.industries = snapshot; sync(); }
      home.append(el);
      if (saved) render();
    });
  ov.querySelector("[data-ind-slot]").append(el);
  ov.querySelector("[data-save]").addEventListener("click", () => {
    if (!state.industries.size) return (ov.querySelector("[data-step-error]").textContent = "Pick at least one industry.");
    saved = true;
    closeOverlay();
  });
}

// Edit business services: per role, pick from that role's services (role-services.js).
function openManageServices() {
  const roles = myRoles();
  const picked = Object.fromEntries(roles.map((r) => [r, new Set(state.camp.services[r] || [])]));
  const ov = openOverlay(`<div class="cp-modal" role="dialog" aria-modal="true" aria-label="Manage Business Services"></div>`, "modal");
  const box = ov.querySelector(".cp-modal");
  function draw() {
    box.innerHTML = `
      <header class="im-modal__head"><h2>Manage Business Services</h2><button type="button" data-close aria-label="Close"><img src="${IM}close.svg" alt="" /></button></header>
      <div class="cp-modal__body camp-services">${roles.map((r) => `
        <section><p class="camp-services__role">${esc(roleName(r))}</p>
          <div class="pick-chips">${(ROLE_SERVICES[roleName(r)] || []).map(([s]) => `
            <button type="button" class="pick-chip${picked[r].has(s) ? " is-on" : ""}" data-svc="${esc(s)}" data-role="${esc(r)}" aria-pressed="${picked[r].has(s)}"><img src="${IM}${picked[r].has(s) ? "chip-done" : "chip-add"}.svg" alt="" />${esc(s)}</button>`).join("")}</div>
        </section>`).join("")}</div>
      <footer class="im-modal__foot">
        <button type="button" class="btn btn--secondary im-back-btn" data-close>Cancel</button>
        <button type="button" class="btn btn--primary im-next" data-svc-save>Save<img src="${CP}done-white.svg" alt="" /></button>
      </footer>`;
  }
  ov.addEventListener("click", (e) => {
    const chip = e.target.closest("[data-svc]");
    if (chip) {
      const set = picked[chip.dataset.role];
      set.has(chip.dataset.svc) ? set.delete(chip.dataset.svc) : set.add(chip.dataset.svc);
      return draw();
    }
    if (!e.target.closest("[data-svc-save]")) return;
    state.camp.services = Object.fromEntries(roles.map((r) => [r, [...picked[r]]]));
    closeOverlay();
    render();
  });
  draw();
}
const setupDone = () => CAMP_STEPS.every(([, status]) => status());

// ---------- Messages ----------
// The PGM walks a new user through setup; once it's all done, the Talent Manager opens Measured Excellence.
// Then activity updates from the work itself.
function campMessages() {
  const msgs = [];
  if (!state.camp.expDone) {
    msgs.push(["pgm", "Good job setting up your role preferences. Now, let’s understand where you currently stand with those roles.", "Start now", "pgm-flow"]);
  } else {
    if (!state.assets.length) msgs.push(["pgm", "I’ve unlocked the proof of work section for you. You can validate your work experience and track your growth here by adding proof of the work you do.", "Start now", "add-proof"]);
    if (!Object.keys(state.tSkills).length) msgs.push(["pgm", "Set up how you interact with transferable skills.", "Start now", "transferable"]);
    if (!state.tools.length) msgs.push(["pgm", "Add your tool stack and let recruiters know which tools you’re proficient with.", "Start now", "tools"]);
  }
  if (setupDone()) {
    if (!state.camp.profileSeen) {
      msgs.push(["talent", `You’re all set up, ${displayName().split(" ")[0]}. I’ve unlocked your Measured Excellence profile. See how your work, skills and preferences add up for recruiters.`, "View now", "profile"]);
    } else {
      const fresh = myRoles().flatMap(catalogFor).filter((id) => !myRoles().some((r) => trackFor(r).includes(id))).length;
      const started = myRoles().some((r) => trackFor(r).length);
      msgs.push(["talent", !started && !fresh
        ? "Your Growth Track is open. Explore work opportunities for your roles and pick up your first work order."
        : fresh
        ? `There ${fresh === 1 ? "is 1 work order" : `are ${fresh} work orders`} recommended for your roles that you haven’t picked up yet.`
        : "You’ve picked up every work order recommended for your roles so far. Explore all work to find more.", "Explore work", "explore"]);
    }
  }

  // Activity updates from the desk
  const vcs = Object.entries(state.deskData).flatMap(([wo, p]) => Object.entries(p.vcs).map(([vc, v]) => ({ wo: Number(wo), vc: Number(vc), v })));
  const pending = vcs.flatMap(({ v }) => v.artefacts).filter((a) => !a.level).length;
  if (pending) msgs.push(["pgm", `${pending} of your submissions ${pending === 1 ? "is" : "are"} waiting for a community mentor’s review. I’ll let you know when ${pending === 1 ? "it’s" : "they’re"} graded.`, "Open desk", "desk"]);
  const booked = vcs.find(({ wo, v }) => v.mentor && state.growth.desk.has(wo)); // the work order in focus
  if (booked) msgs.push(["pgm", `Your mentor session for ‘${vcInfo(booked.wo, booked.vc).name}’ is booked for ${booked.v.mentor}.`, "Open desk", "desk"]);
  return msgs;
}

const CAMP_ACTIONS = {
  "pgm-flow": () => openPgmFlow(),
  "add-proof": addProof,
  transferable: () => openTransferableFlow(),
  tools: () => openToolsFlow(),
  profile: () => { state.camp.profileSeen = true; go("profile"); },
  explore: () => go("explore"),
  desk: () => go("desk"),
};

// Once setup is done, the Talent Manager opens Measured Excellence; once that's been seen, the rest of Life opens.
function syncCampUnlocks() {
  if (setupDone()) unlock("profile");
  if (state.camp.profileSeen) unlock(...CAMP_ITEMS);
}

// ---------- Page ----------
const CAMP_SHOWN = 3; // message cards on the page; View All lists the rest
const msgCard = ([who, text, cta, action]) => `
  <article class="camp-msg">
    <p class="camp-msg__from">${MANAGERS[who][1]}${MANAGERS[who][0]}</p>
    <p class="camp-msg__text">${esc(text)}</p>
    <button type="button" class="camp-msg__cta" data-camp-action="${action}">${esc(cta)}<img src="${CA}navigate-next.svg" alt="" /></button>
  </article>`;

const campPage = document.getElementById("camp-page");
function renderCamp() {
  closeAllOverlays();
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good Morning" : hour < 17 ? "Good Afternoon" : "Good Evening";
  const first = displayName().split(" ")[0];
  const msgs = campMessages();
  const steps = CAMP_STEPS.map(([title, status], i) => ({ title, status: status(), i }));
  campPage.innerHTML = `
    <div class="camp-head">
      <h1>${greeting}, ${esc(first)}</h1>
      <p>Here’s what you need to catch up with</p>
    </div>
    <section class="camp-block camp-block--msgs">
      <div class="camp-block__head"><p class="camp-kicker">Your Messages</p>${msgs.length > 1 ? `<button type="button" class="camp-all" data-camp-all>View All</button>` : ""}</div>
      ${msgs.length ? `<div class="camp-msgs">${msgs.slice(0, CAMP_SHOWN).map(msgCard).join("")}</div>` : `<p class="camp-empty">You’re all caught up.</p>`}
    </section>
    <section class="camp-block">
      <p class="camp-kicker">Road To Career Acceleration</p>
      <ol class="camp-steps">${steps.map((s) => `
        <li><button type="button" class="camp-step${s.status ? " is-done" : ""}" data-camp-step="${s.i}">
          <span class="camp-step__mark" aria-label="${s.status ? "Done" : "Not done"}">${s.status ? `<img src="${CA}done.svg" alt="" />` : ""}</span>
          <span class="camp-step__text"><span class="camp-step__title">${s.title}</span><span class="camp-step__sub">${s.status || "! Not Added"}</span></span>
          ${s.status ? `<img class="camp-step__edit" src="${CA}edit.svg" alt="Edit" />` : `<span class="camp-step__go">Start <img src="${CA}navigate-next.svg" alt="" /></span>`}
        </button></li>`).join("")}</ol>
    </section>`;
  // First visit after signing up: the PGM pops up (FigJam 339:990).
  if (state.camp.fresh && !state.camp.expDone && !state.camp.introShown && !state.camp.holdIntro) {
    state.camp.introShown = true;
    setTimeout(() => currentBase() === "camp" && openPgmFlow(), 350);
  }
}

function openAllMessages() {
  const ov = openOverlay(`
    <aside class="drawer" role="dialog" aria-modal="true" aria-label="Your Messages">
      <header class="drawer__head"><button type="button" data-close aria-label="Close"><img src="${G}drawer-close.svg" alt="" /></button><h2>Your Messages</h2></header>
      <div class="drawer__body camp-drawer">${campMessages().map(msgCard).join("")}</div>
    </aside>`, "drawer");
  ov.addEventListener("click", (e) => {
    const a = e.target.closest("[data-camp-action]");
    if (!a) return;
    closeOverlay();
    CAMP_ACTIONS[a.dataset.campAction]();
  });
}

campPage.addEventListener("click", (e) => {
  const a = e.target.closest("[data-camp-action]");
  if (a) return CAMP_ACTIONS[a.dataset.campAction]();
  if (e.target.closest("[data-camp-all]")) return openAllMessages();
  const s = e.target.closest("[data-camp-step]");
  if (s) {
    const [, status, start, edit] = CAMP_STEPS[Number(s.dataset.campStep)];
    (status() && edit ? edit : start)();
  }
});

// Menu inbox widget: how many updates are waiting in Camp.
function syncInbox() {
  const n = campMessages().length;
  document.querySelector(".inbox__sub").textContent = n ? `${n} New Message${n === 1 ? "" : "s"}` : "All caught up";
  document.querySelector(".inbox__dot").hidden = !n;
}
document.querySelector(".inbox").addEventListener("click", () => go("camp"));

// ---------- PGM modals ----------
const ICON_SKIP = `<svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true"><path d="M6 18l8.5-6L6 6v12zm10-12v12h2V6h-2z" fill="currentColor"/></svg>`;
const pgmHead = (right) => `
  <header class="pgm-modal__head">
    <span class="pgm-modal__from">${MANAGERS.pgm[1]}Professional Growth Manager</span>
    ${right === "skip" ? `<button type="button" class="pgm-modal__skip" data-pgm="skip">Skip for now ${ICON_SKIP}</button>`
      : right === "close" ? `<button type="button" class="pgm-modal__close" data-pgm="skip" aria-label="Close"><img src="${G}close-dark.svg" alt="" /></button>` : ""}
  </header>`;
// Intro card shared by the PGM's flows.
const pgmIntro = (title, text) => `${pgmHead("skip")}
  <div class="pgm-modal__body"><h2>${title}</h2><p>${text}</p></div>
  <footer class="pgm-modal__foot pgm-modal__foot--center"><button type="button" class="pgm-btn" data-pgm="next">Start now <span aria-hidden="true">→</span></button></footer>`;
const pgmFoot = (first, last) => `
  <footer class="pgm-modal__foot">
    <button type="button" class="pgm-prev" data-pgm="prev" ${first ? "disabled" : ""}><span aria-hidden="true">←</span> Previous</button>
    <button type="button" class="pgm-btn" data-pgm="next">${last ? "Finish <span aria-hidden=\"true\">✓</span>" : "Next <span aria-hidden=\"true\">→</span>"}</button>
  </footer>`;
const pgmProgress = (step, total) => `<div class="pgm-progress" aria-hidden="true"><i style="width:${(step / total) * 100}%"></i></div>`;

// ---------- Where do you stand in your roles? (Figma 1299:25773) ----------
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
      box.innerHTML = pgmIntro("Good job setting up your role preferences. Now, let’s understand where you currently stand with those roles",
        "In the upcoming screens, answer a few questions to help us understand where you stand with the roles of your choice. We’ll go through each of them one at a time.");
    } else {
      const role = roles[step - 1];
      const name = roleName(role);
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
        ${pgmFoot(step === 1, step === roles.length)}`;
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
      // Finish: the PGM unlocks Proof of Work (with Achievements and Journal) and takes the user there (FigJam 339:1035).
      const first = !state.camp.expDone;
      state.camp.experience = choices;
      state.camp.expDone = true;
      unlock("proof", "achievements", "journal");
      closeOverlay();
      if (!first) return render();
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

// After the first proof of work, the PGM points to achievements and back to Camp (FigJam 342:1267).
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
        <button type="button" class="pgm-ghost" data-pgm="camp">Back to Camp</button>
        <button type="button" class="pgm-btn" data-pgm="card">Create achievement card <span aria-hidden="true">→</span></button>
      </footer>
    </div>`, "modal");
  ov.addEventListener("click", (e) => {
    const act = e.target.closest("[data-pgm]")?.dataset.pgm;
    if (act === "camp") { closeOverlay(); go("camp"); }
    if (act === "card") { closeOverlay(); startWizard(asset.id); } // impact.js
  });
  return true;
}

// Finishing either flow lands on Competencies; the first time, the PGM says it's open (Figma 1326:55276).
function landOnCompetencies(tab, toast) {
  const first = !isUnlocked("competencies");
  unlock("competencies");
  state.compTab = tab;
  state.tDraft = null;
  closeOverlay();
  go("competencies");
  if (!first) return showToast(toast);
  setTimeout(() => {
    const ov = openOverlay(`
      <div class="pgm-modal pgm-modal--note" role="dialog" aria-modal="true" aria-labelledby="pgm-comp">
        ${pgmHead("")}
        <div class="pgm-modal__body">
          <h2 id="pgm-comp">I’ve unlocked the competencies section for you.</h2>
          <p>You can manage your technical skills, transferable skills and tools from here.</p>
        </div>
        <footer class="pgm-modal__foot pgm-modal__foot--center"><button type="button" class="pgm-btn" data-close>Done <span aria-hidden="true">✓</span></button></footer>
      </div>`, "modal");
  }, 300);
}

// ---------- Transferable skills (Figma 1326:55276) ----------
// One screen per category, every skill on a 1–7 comfort slider.
function openTransferableFlow() {
  const draft = Object.fromEntries(TRANSFERABLE.flatMap(([, skills]) => skills.map((s) => [s, state.tSkills[s] || 1])));
  let step = 0; // 0 = intro, 1..6 = categories
  const total = TRANSFERABLE.length;
  const ov = openOverlay(`<div class="pgm-modal" role="dialog" aria-modal="true" aria-label="Transferable skills"></div>`, "modal");
  const box = ov.querySelector(".pgm-modal");
  function draw() {
    if (step === 0) {
      box.className = "pgm-modal pgm-modal--intro";
      box.innerHTML = pgmIntro("Set up how you interact with transferable skills.", "In the upcoming screens, talk about your level of comfort with different transferable skills.");
      return;
    }
    const [cat, skills, line] = TRANSFERABLE[step - 1];
    box.className = "pgm-modal pgm-modal--flow";
    box.innerHTML = `${pgmHead("close")}
      <div class="pgm-modal__body pgm-modal__scroll">
        <h2 class="pgm-modal__q">Rate each skill on your level of comfort with using it</h2>
        <section class="pgm-cat" style="--cat-line:${line};--cat-text:${CAT_TEXT[step - 1]}">
          <p class="pgm-cat__head">${esc(cat)}</p>
          ${skills.map((s) => `<div class="pgm-cat__skill"><h3>${esc(s)}</h3>${scale(s, 7, draft[s], "comfort", 2)}</div>`).join("")}
        </section>
      </div>
      ${pgmProgress(step, total)}
      ${pgmFoot(step === 1, step === total)}`;
    box.querySelectorAll("[data-scale]").forEach(paintScale);
  }
  const onInput = (e) => {
    if (!e.target.matches("[data-scale]")) return;
    draft[e.target.dataset.scale] = Number(e.target.value);
    paintScale(e.target);
  };
  ov.addEventListener("input", onInput);
  ov.addEventListener("click", (e) => {
    const act = e.target.closest("[data-pgm]")?.dataset.pgm;
    if (act === "skip") return closeOverlay();
    if (act === "prev") { step--; return draw(); }
    if (act !== "next") return;
    if (step < total) { step++; return draw(); }
    state.tSkills = draft;
    landOnCompetencies("transferable", "Transferable skill ratings saved");
  });
  draw();
}

// ---------- Tool stack (Figma 1326:58143) ----------
function openToolsFlow() {
  const picked = new Set(state.tools);
  const options = toolOptions(); // competencies.js
  let step = 0;
  const ov = openOverlay(`<div class="pgm-modal" role="dialog" aria-modal="true" aria-label="Tool stack"></div>`, "modal");
  const box = ov.querySelector(".pgm-modal");
  function draw() {
    if (step === 0) {
      box.className = "pgm-modal pgm-modal--intro";
      box.innerHTML = pgmIntro("Add your tool stack and let recruiters know which tools you’re proficient with", "In the upcoming screen, add all the tools that you’re proficient with.");
      return;
    }
    box.className = "pgm-modal pgm-modal--flow";
    box.innerHTML = `${pgmHead("close")}
      <div class="pgm-modal__body pgm-modal__scroll">
        <h2 class="pgm-modal__q">Add all the tools you’re proficient in</h2>
        ${pickList(options, picked, "Add new tool...")}
      </div>
      ${pgmFoot(false, true)}`;
  }
  ov.addEventListener("click", (e) => {
    const chip = e.target.closest("[data-mt]");
    if (chip) { picked.has(chip.dataset.mt) ? picked.delete(chip.dataset.mt) : picked.add(chip.dataset.mt); return draw(); }
    const act = e.target.closest("[data-pgm]")?.dataset.pgm;
    if (act === "skip") return closeOverlay();
    if (act === "prev") { step = 0; return draw(); }
    if (act !== "next") return;
    if (step === 0) { step = 1; return draw(); }
    if (!picked.size) return showToast("Pick at least one tool to finish");
    state.tools = [...picked];
    landOnCompetencies("tools", "Tool stack saved");
  });
  ov.addEventListener("submit", (e) => {
    e.preventDefault();
    addToPicks(ov, options, picked);
    draw();
    ov.querySelector("[data-mt-add] input").focus();
  });
  draw();
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
