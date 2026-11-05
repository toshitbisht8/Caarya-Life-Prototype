// Camp: the landing page after sign-in and Life's inbox (Figma 1326:53131). Not a message box: each card is an
// update from one of the AI manager personas, with the action it asks for. Below them sits the Road To Career
// Acceleration checklist.
// Also here: progressive menu unlocks for new users, the signup handoff from profiling.html, and the PGM's flows:
// where you stand in your roles (1299:25773), transferable skills (1326:55276) and tool stack (1326:58143).

// Menu items a new user unlocks one by one; returning users see them all.
const CAMP_ITEMS = ["growth", "domain-affinity", "industry-affinity", "desk", "session-logs", "achievements", "competencies", "proof", "journal", "profile", "assessments", "daily-gains", "exchange", "rolodex", "network-profile"];
const ALL_UNLOCKED = () => new Set(CAMP_ITEMS);
// A new user starts with Growth Track (the Road To Career Acceleration) and ends set-up with these (Figma 1365:42807).
const FRESH_START = () => new Set(["growth"]);

state.camp = {
  fresh: false, // true for someone who just signed up: menu items unlock as they progress
  unlocked: ALL_UNLOCKED(),
  services: {}, // role id -> business services picked in signup
  priority: "", // career priority picked in signup
  experience: {}, // role id -> 0 none, 1 own / college work, 2 real client or organisation
  expDone: false,
  introShown: false, // the PGM pops up once on the first visit to Camp
  toured: false, // the guided tour of Camp and Growth Track, once
  proofPrompted: false, // the PGM's "add your first proof of work" on the first visit to Proof
  holdIntro: false, // wait for the logging-in loader before popping up
  profileSeen: false, // has opened Measured Excellence since the Talent Manager unlocked it
};

// Pages that live under a menu item (Camp itself is always open).
const ITEM_OF = { programs: "growth", explore: "growth", "explore-all": "growth", "work-order": "growth", "proof-asset": "proof" };
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
  talent: ["Talent Manager", `<span class="camp-avatar camp-avatar--talent"><img src="assets/camp/talent-manager.svg" alt="" /></span>`],
};

// ---------- Experience claims ----------
const EXPERIENCE = [
  ["I haven’t made anything in this role yet", "Even if I’ve read, watched or studied about it", "exp-none.svg"],
  ["I’ve made things on my own or for college", "Personal projects, coursework, hackathons, practice briefs", "exp-own.svg"],
  ["I’ve made things for a real client or organisation", "Internships, freelance, startup or company work, paid or unpaid", "exp-client.svg"],
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
  if (currentBase() === "camp") return openAssetModal(); // impact.js: over Camp, which the user comes back to
  go("proof");
  setTimeout(() => openAssetModal(), 50);
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

// ---------- Step toasts ----------
// Finishing a Road step for the first time shows a step toast: what's done and how many steps are left before Career
// Acceleration (in place of the action's own toast). The last step gets the usual toast, then the Talent Manager's
// congratulations.
const STEP_DONE = ["Role preferences set up", "Industry preferences set up", "Business service preferences set up", "Technical skills set up",
  "Past work experience declared", "First proof of work added", "Transferable skills set up", "Tool stack set up"];
state.camp.stepsSeen = null; // steps already counted as done; null until the first look
function syncSteps() {
  if (!isFresh()) return;
  const done = CAMP_STEPS.map(([, status]) => !!status());
  if (!state.camp.stepsSeen) return void (state.camp.stepsSeen = new Set(done.flatMap((d, i) => (d ? [i] : []))));
  const now = done.flatMap((d, i) => (d && !state.camp.stepsSeen.has(i) ? [i] : []));
  if (!now.length) return;
  now.forEach((i) => state.camp.stepsSeen.add(i));
  const left = done.filter((d) => !d).length;
  if (!left) return;
  showToast(`${STEP_DONE[now[now.length - 1]]}\n${left} step${left > 1 ? "s" : ""} left to start Career Acceleration`,
    currentBase() === "camp" ? undefined : { label: "Go to Camp", onClick: () => go("camp") }, POPUP_DELAY_MS, "step");
}

// What the Talent Manager's and PGM's "Unlock" messages open (Your Network, Your Knowledge Space).
const SYNERGY = ["rolodex", "network-profile"];
const COMMUNITY = ["daily-gains", "exchange"];

// ---------- Spotlight: the guided tour, and each section as it unlocks (reference: Figma 1426:31062) ----------
// The screen dims except one menu item, and a card beside it says what it is. One new section: Later / Take me there.
// Several (the tour, or what opens when set-up is done): Previous / Next / Done.
const menuItem = (route) => document.querySelector(`.menu-item[data-route="${route}"]`);
const TOUR = [
  { target: () => document.querySelector(".inbox"), title: "This is Camp, your home base",
    text: "Your Growth Manager and Talent Manager post updates here, each with the next thing to do. A red badge tells you when something new arrives." },
  { target: () => menuItem("growth"), title: "This is your Growth Track",
    text: "Your Road to Career Acceleration lives here: the steps to finish before you can start picking up work." },
];
// Keyed by the menu item whose unlock shows it; `items` when it covers a whole section.
const SPOTS = {
  proof: { title: "I’ve unlocked Proof of Work for you", text: "Validate your experience and track your growth by adding proof of the work you do." },
  competencies: { title: "I’ve unlocked Competencies for you", text: "Manage your technical skills, transferable skills and tool stack from here." },
  achievements: { title: "I’ve unlocked Achievements for you", text: "Your achievement cards live here: your assets, with the skills and impact behind them." },
  profile: { who: "talent", title: "Your Measured Excellence profile is open", text: "It shows recruiters how your work, skills and preferences add up. Keep it current as you add proof of your work." },
  assessments: { title: "Assessments are open", text: "Optional assessments that help enhance your ME profile while your career report is being generated." },
  synergy: { items: SYNERGY, who: "talent", section: true, title: "Synergy Intelligence is unlocked",
    text: "Your Network: the people you’ve worked with, how you work together and who can open doors for you." },
  work: { items: ["desk", "session-logs"], section: true, title: "Your Work is unlocked",
    text: "Your Desk is where you work on the work orders you pick up. Session Logs keeps a record of every session." },
  credits: { items: ["credits"], who: "talent", target: () => document.querySelector("[data-user-chip]"), title: "You’ve got 200 free credits",
    text: "Spend them as you choose on work orders now, and on Your Knowledge Space and Your Network when they open. The ring around your picture shows your balance. Click it to top up." },
  community: { items: COMMUNITY, section: true, title: "Community Intelligence is unlocked",
    text: "Your Knowledge Space: daily knowledge gains and an exchange of ideas with your peers." },
};
const spotStop = (key) => {
  const s = SPOTS[key];
  const route = (s.items || [key])[0];
  return { ...s,
    target: s.target || (() => (s.section ? menuItem(route)?.closest("[data-menu-section]") : menuItem(route))),
    go: s.target ? null : () => go(route) };
};

// Menu items unlocked since the last look each get a spotlight (after any toast and modal, e.g. the Talent Manager's).
state.camp.spotSeen = null;
function syncSpotlights() {
  if (!isFresh()) return;
  const un = state.camp.unlocked;
  if (!state.camp.spotSeen) return void (state.camp.spotSeen = new Set(un));
  const now = [...un].filter((i) => !state.camp.spotSeen.has(i));
  if (!now.length) return;
  now.forEach((i) => state.camp.spotSeen.add(i));
  const order = [...Object.keys(SPOTS).filter((k) => k !== "credits"), "credits"]; // credits come last
  const stops = order.filter((k) => (SPOTS[k].items || [k]).some((i) => now.includes(i))).map(spotStop);
  if (stops.length) whenClear(() => spotlight(stops));
}

function spotlight(all, onDone) {
  const stops = all.filter((s) => s.target());
  if (!stops.length) return onDone?.();
  let i = 0;
  const ov = openOverlay(`<div class="spot__hole"></div>
    <div class="spot" role="dialog" aria-modal="true" aria-labelledby="spot-title"><span class="spot__arrow" aria-hidden="true"></span><div class="spot__card"></div></div>`,
    "spot", () => { removeEventListener("resize", place); onDone?.(); });
  const hole = ov.querySelector(".spot__hole");
  const box = ov.querySelector(".spot");
  const arrow = ov.querySelector(".spot__arrow");
  const single = stops.length === 1;
  function draw() {
    const s = stops[i];
    const who = s.who || "pgm";
    ov.querySelector(".spot__card").innerHTML = `
      <header class="spot__head">
        <span class="spot__avatar camp-msg__avatar--${who}">${MSG_AVATAR[who]}</span>
        <button type="button" class="pgm-modal__close" data-close aria-label="Close"><img src="${G}close-dark.svg" alt="" /></button>
      </header>
      <div class="spot__body">
        ${single ? "" : `<p class="spot__count">${i + 1} of ${stops.length}</p>`}
        <h2 id="spot-title">${s.title}</h2>
        <p>${s.text}</p>
      </div>
      <footer class="spot__foot">
        ${single
          ? s.go ? `<button type="button" class="pgm-prev" data-close>Later</button>
                    <button type="button" class="pgm-btn" data-spot="go">Take me there <span aria-hidden="true">→</span></button>`
            : `<span></span><button type="button" class="pgm-btn" data-close>Got it <span aria-hidden="true">✓</span></button>`
          : `<button type="button" class="pgm-prev" data-spot="prev" ${i ? "" : "disabled"}><span aria-hidden="true">←</span> Previous</button>
             <button type="button" class="pgm-btn" data-spot="next">${i < stops.length - 1 ? "Next <span aria-hidden=\"true\">→</span>" : "Done <span aria-hidden=\"true\">✓</span>"}</button>`}
      </footer>`;
    place();
    ov.querySelector(".pgm-btn").focus();
  }
  // The hole sits on the item; the card beside it (right of the menu, or below things on the right of the screen).
  function place() {
    const t = stops[i].target();
    if (!t) return;
    t.scrollIntoView({ block: "nearest" });
    const r = t.getBoundingClientRect();
    const pad = 4, gap = 16, m = 16;
    Object.assign(hole.style, { left: `${r.left - pad}px`, top: `${r.top - pad}px`, width: `${r.width + pad * 2}px`, height: `${r.height + pad * 2}px` });
    const w = box.offsetWidth, h = box.offsetHeight;
    const clamp = (v, lo, hi) => Math.max(lo, Math.min(v, hi));
    if (r.left < innerWidth / 2) {
      box.dataset.side = "left";
      const top = clamp(r.top + r.height / 2 - 40, m, innerHeight - h - m);
      Object.assign(box.style, { left: `${r.right + pad + gap}px`, top: `${top}px` });
      arrow.style.cssText = `top:${clamp(r.top + r.height / 2 - top, 24, h - 24)}px`;
    } else {
      box.dataset.side = "top";
      const left = clamp(r.right - w, m, innerWidth - w - m);
      Object.assign(box.style, { left: `${left}px`, top: `${r.bottom + pad + gap}px` });
      arrow.style.cssText = `left:${clamp(r.left + r.width / 2 - left, 24, w - 24)}px`;
    }
  }
  addEventListener("resize", place);
  ov.addEventListener("click", (e) => {
    const act = e.target.closest("[data-spot]")?.dataset.spot;
    if (act === "prev" && i) { i--; draw(); }
    if (act === "next") i < stops.length - 1 ? (i++, draw()) : closeOverlay();
    if (act === "go") { const to = stops[i].go; closeOverlay(); to(); }
  });
  draw();
}

// ---------- Messages ----------
// Camp is an inbox: each message is posted once, when its moment comes, and stays there. New ones are unread
// (highlighted) until opened; posting one lights the dot by CAMP and shows a toast pointing to Camp.
// { id, who, text, cta, action, at, read }
state.camp.inbox = [];

const firstName = () => displayName().split(" ")[0];
const isFresh = () => state.camp.fresh;

// [id, when to post, manager, text, CTA label, action, done (CTA replaced by a tick), on post]
const MESSAGE_DEFS = [
  ["exp", () => isFresh(), "pgm", () => "Good job setting up your role preferences. Now, let’s understand where you currently stand with those roles.", "Start now", "pgm-flow", () => state.camp.expDone],
  ["proof", () => isFresh() && state.camp.expDone, "pgm", () => "I’ve unlocked the proof of work section for you. You can validate your work experience and track your growth here by adding proof of the work you do.", "Add proof", "add-proof", () => state.assets.length > 0],
  ["transferable", () => isFresh() && state.camp.expDone, "pgm", () => "Set up how you interact with transferable skills.", "Start now", "transferable", () => Object.keys(state.tSkills).length > 0],
  ["tools", () => isFresh() && state.camp.expDone, "pgm", () => "Add your tool stack and let recruiters know which tools you’re proficient with.", "Start now", "tools", () => state.tools.length > 0],
  ["first-asset", () => isFresh() && state.assets.length > 0, "pgm", () => `Congratulations on adding your first proof of work, ${firstName()}! If you want to, you can also turn your assets into achievement cards that show the skills and impact behind them.`, "Create achievement card", "achievement", () => state.achievements.length > 0],
  ["tm-done", () => isFresh() && setupDone(), "talent", () => TM_DONE[0], "Details", "talent-details"],
  ["assessments", () => isFresh() && setupDone(), "pgm", () => "While your career report is being generated, you can take a few basic assessments if you like. They’re optional, and they help enhance your ME profile.", "Explore assessments", "assessments", null, () => unlock("assessments")],
  // Coming soon: each leads to its one-pager and waitlist (space.js)
  ["synergy", () => isFresh() && setupDone(), "talent", () => "Synergy Intelligence is coming to Your Network: the people you’ve worked with, how you work together and who can open doors for you. Learn more and join the waitlist.", "Learn more", "synergy", () => onWaitlist("synergy")],
  ["community", () => isFresh() && setupDone(), "pgm", () => "Community Intelligence is coming to Your Knowledge Space: daily knowledge gains and an exchange of ideas with your peers. Learn more and join the waitlist.", "Learn more", "community", () => onWaitlist("community")],
  // Passes (passes.js): a pod mentor's review, then graded Desk work
  ["pass-learner", () => passesOpen(), "talent", () => `Good news, ${firstName()}! A pod mentor has reviewed your profile, and you’re eligible for our learner programs. Enroll in a program to unlock your Growth Track: Experience Studio work, your Desk and credits to get started.`, "View programs", "passes", () => hasPass()],
  ["pass-worker", () => isFresh() && workerEligible(), "talent", () => owns("integrated")
    ? `A pod mentor has graded your Desk submission, ${firstName()}. Paid gigs and jobs are now open on your Integrated Pass.`
    : `A pod mentor has graded your Desk submission, ${firstName()}. You’re now eligible for Fusion Work Study, which opens paid gigs and jobs.`,
    "See paid work", "paid-work", () => canWork()],
  // Returning users: the Talent Manager's pointer to work
  ["explore", () => !isFresh(), "talent", () => {
    const open = myRoles().flatMap(catalogFor).filter((id) => !myRoles().some((r) => trackFor(r).includes(id))).length;
    return open ? `There ${open === 1 ? "is 1 work order" : `are ${open} work orders`} recommended for your roles that you haven’t picked up yet.`
      : "You’ve picked up every work order recommended for your roles so far. Explore all work to find more.";
  }, "Explore work", "explore"],
];

// Activity from the desk becomes a message each time something new happens.
function deskEvents() {
  const vcs = Object.entries(state.deskData).flatMap(([wo, p]) => Object.entries(p.vcs).map(([vc, v]) => ({ wo: Number(wo), vc: Number(vc), v })));
  const events = [];
  const pending = vcs.flatMap(({ v }) => v.artefacts).filter((a) => !a.level).length;
  if (pending) events.push([`pending-${pending}`, "pgm", `${pending} of your submissions ${pending === 1 ? "is" : "are"} waiting for a community mentor’s review. I’ll let you know when ${pending === 1 ? "it’s" : "they’re"} graded.`, "Open desk", "desk"]);
  vcs.filter(({ wo, v }) => v.mentor && state.growth.desk.has(wo)).forEach(({ wo, vc, v }) =>
    events.push([`mentor-${wo}-${vc}`, "pgm", `Your mentor session for ‘${vcInfo(wo, vc).name}’ is booked for ${v.mentor}.`, "Open desk", "desk"]));
  return events;
}

function postMessage(id, who, text, cta, action, quiet) {
  if (state.camp.inbox.some((m) => m.id === id)) return false;
  state.camp.inbox.push({ id, who, text, cta, action, at: Date.now(), read: !!quiet });
  return true;
}

// Posts whatever is now due. `quiet` posts as already read, with no toast (used when seeding the demo's history).
function syncMessages(quiet = false) {
  let posted = 0;
  MESSAGE_DEFS.forEach(([id, when, who, text, cta, action, , onPost]) => {
    if (!when() || !postMessage(id, who, text(), cta, action, quiet)) return;
    posted++;
    onPost?.();
  });
  deskEvents().forEach(([id, who, text, cta, action]) => postMessage(id, who, text, cta, action, quiet) && posted++);
  state.camp.inbox.forEach((m) => !m.read && msgDone(m) && (m.read = true)); // nothing left to do there
  if (!posted || quiet) return;
  // Profiling complete: the Talent Manager's congratulations opens by itself, instead of a toast.
  const tm = state.camp.inbox.find((m) => m.id === "tm-done" && !m.read);
  if (tm && !tmShown) {
    tmShown = true;
    tm.read = true;
    return whenClear(() => { openMessage(tm); syncInbox(); });
  }
  notifyNew(posted);
}
let tmShown = false;
const unreadCount = () => state.camp.inbox.filter((m) => !m.read).length;
const msgDone = (m) => MESSAGE_DEFS.find(([id]) => id === m.id)?.[6]?.() || false;

// A toast with a way into Camp (not while Camp is open: the new rows are highlighted there already).
function notifyNew(n) {
  if (currentBase() === "camp") return;
  const latest = state.camp.inbox.reduce((a, b) => (b.at >= a.at ? b : a));
  showToast(n > 1 ? `${n} new messages in Camp` : `New message from your ${MANAGERS[latest.who][0]}`, { label: "Go to Camp", onClick: () => go("camp") });
}

// [summary shown in Camp, the rest shown under Details]
const TM_DONE = [
  "Congratulations on completing the second phase of profiling. We’ll go through your submissions and a ‘pod member role’ will soon reach out to you.",
  "In the meantime, I’ve unlocked your Measured Excellence profile. It shows recruiters how your work, skills and preferences add up, so keep it current as you add proof of your work.",
];
// A message in full, with its action (Figma pattern of the PGM notes). The Talent Manager's "second phase" message
// carries more than fits a row, and its action is Measured Excellence.
function openMessage(m) {
  const tm = m.id === "tm-done";
  const done = msgDone(m);
  const ov = openOverlay(`
    <div class="pgm-modal pgm-modal--note" role="dialog" aria-modal="true" aria-label="Message from your ${MANAGERS[m.who][0]}">
      <header class="pgm-modal__head">
        <span class="pgm-modal__from">${MANAGERS[m.who][1]}${MANAGERS[m.who][0]}<span class="camp-msg__time">${msgTime(m.at)}</span></span>
        <button type="button" class="pgm-modal__close" data-close aria-label="Close"><img src="${G}close-dark.svg" alt="" /></button>
      </header>
      <div class="pgm-modal__body">${(tm ? TM_DONE : [m.text]).map((p) => `<p>${esc(p)}</p>`).join("")}</div>
      <footer class="pgm-modal__foot pgm-modal__foot--center">
        ${done ? `<span class="camp-msg__done"><img src="${CA}done.svg" alt="" />Done</span>`
          : `<button type="button" class="pgm-btn" data-msg-go>${tm ? "View Measured Excellence" : esc(m.cta)} <span aria-hidden="true">→</span></button>`}
      </footer>
    </div>`, "modal");
  ov.querySelector("[data-msg-go]")?.addEventListener("click", () => {
    closeOverlay();
    tm ? go("profile") : CAMP_ACTIONS[m.action]();
  });
}

const CAMP_ACTIONS = {
  "pgm-flow": () => openPgmFlow(),
  "add-proof": addProof,
  transferable: () => openTransferableFlow(),
  tools: () => openToolsFlow(),
  achievement: () => openAssetPicker(startWizard), // impact.js: "Adding New Achievement", pick the asset first
  "talent-details": () => openMessage(state.camp.inbox.find((m) => m.id === "tm-done")),
  passes: () => openPasses(),
  "paid-work": () => (canWork() ? (state.growth.exploreTab = "paid", go("explore-all")) : openPasses()),
  assessments: () => go("assessments"),
  synergy: () => go("synergy-intelligence"), // space.js
  community: () => go("community-intelligence"),
  explore: () => go("explore"),
  desk: () => go("desk"),
};

// Measured Excellence opens once set-up is done; Achievements once the first card exists.
function syncCampUnlocks() {
  if (setupDone()) unlock("profile");
  if (state.achievements.length) unlock("achievements");
}

// ---------- Page (Figma 1353:12201) ----------
// "Just now", "5 min ago", "3 h ago", "Yesterday", "28 Oct"
function msgTime(t) {
  const mins = Math.round((Date.now() - t) / 60000);
  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins}m ago`;
  if (mins < 24 * 60) return `${Math.round(mins / 60)}h ago`;
  if (mins < 48 * 60) return "Yesterday";
  return new Date(t).toLocaleDateString("en-GB", { day: "numeric", month: "short" });
}
// Row (Figma 1408:19407): the manager's avatar, "Manager • time", the message on one line, the action.
const MSG_AVATAR = { pgm: `<img src="${CA}pgm.png" alt="" />`, talent: `<img src="${CA}talent-manager.svg" alt="" />` };
const msgRow = (m) => `
  <article class="camp-msg${m.read ? "" : " is-new"}" data-msg="${m.id}" tabindex="0" aria-label="Open message from your ${MANAGERS[m.who][0]}">
    <span class="camp-msg__avatar camp-msg__avatar--${m.who}">${MSG_AVATAR[m.who]}</span>
    <div class="camp-msg__body">
      <p class="camp-msg__from">${MANAGERS[m.who][0]}<span class="camp-msg__time">${msgTime(m.at)}</span>${m.read ? "" : `<span class="camp-msg__new">New</span>`}</p>
      <p class="camp-msg__text">${esc(m.text)}</p>
    </div>
    ${msgDone(m)
      ? `<span class="camp-msg__done"><img src="${CA}done.svg" alt="" />Done</span>`
      : `<button type="button" class="camp-msg__cta" data-camp-action="${m.action}">${esc(m.cta)}<img src="${CA}navigate-next.svg" alt="" /></button>`}
  </article>`;

const campPage = document.getElementById("camp-page");
function renderCamp() {
  closeAllOverlays();
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good Morning" : hour < 17 ? "Good Afternoon" : "Good Evening";
  const first = displayName().split(" ")[0];
  const msgs = [...state.camp.inbox].sort((a, b) => b.at - a.at); // newest first
  campPage.innerHTML = `
    <div class="camp-head">
      <h1>${greeting}, ${esc(first)}</h1>
      <p>Here’s what you need to catch up with</p>
    </div>
    ${msgs.length ? `<div class="camp-msgs">${msgs.map(msgRow).join("")}</div>` : `<p class="camp-empty">You’re all caught up.</p>`}`;
  // First visit after signing up: a short tour of Camp and Growth Track, then the PGM pops up (FigJam 339:990).
  if (state.camp.fresh && !state.camp.holdIntro) {
    if (!state.camp.toured) {
      state.camp.toured = true;
      whenClear(() => currentBase() === "camp" && spotlight(TOUR));
    }
    if (!state.camp.expDone && !state.camp.introShown) {
      state.camp.introShown = true;
      whenClear(() => currentBase() === "camp" && openPgmFlow());
    }
  }
}
// Opening a message marks it read. Its CTA acts straight away; anywhere else on the row opens it in full.
function openRow(row, e) {
  const m = state.camp.inbox.find((x) => x.id === row.dataset.msg);
  if (!m.read) {
    m.read = true;
    row.classList.remove("is-new");
    row.querySelector(".camp-msg__new")?.remove();
    syncInbox();
  }
  const a = e.target.closest("[data-camp-action]");
  if (a || (FLOW_ACTIONS.includes(m.action) && !msgDone(m))) return CAMP_ACTIONS[m.action]();
  openMessage(m);
}
// Messages whose flow starts with its own intro (the PGM's): no extra modal before it. The others (proof of work,
// achievement cards) open in full first, with the CTA to start.
const FLOW_ACTIONS = ["pgm-flow", "transferable", "tools"];
campPage.addEventListener("click", (e) => {
  const row = e.target.closest("[data-msg]");
  if (row) openRow(row, e);
});
campPage.addEventListener("keydown", (e) => {
  const row = e.target.closest("[data-msg]");
  if (row && e.target === row && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openRow(row, e); }
});

// ---------- Growth Track for new users: Road To Career Acceleration (Figma 1353:12726) ----------
const roadPage = document.getElementById("road-page");
let roadStepsOpen = false;
const stepList = () => `<ol class="camp-steps">${CAMP_STEPS.map(([title, status], i) => ({ title, status: status(), i })).map((s) => `
  <li><button type="button" class="camp-step${s.status ? " is-done" : ""}" data-camp-step="${s.i}">
    <span class="camp-step__mark" aria-label="${s.status ? "Done" : "Not done"}">${s.status ? `<img src="${CA}done.svg" alt="" />` : ""}</span>
    <span class="camp-step__text"><span class="camp-step__title">${s.title}</span><span class="camp-step__sub">${s.status || "! Not Added"}</span></span>
    ${s.status ? `<img class="camp-step__edit" src="${CA}edit.svg" alt="Edit" />` : `<span class="camp-step__go">Start <img src="${CA}navigate-next.svg" alt="" /></span>`}
  </button></li>`).join("")}</ol>`;
// Growth Track before a pass: the Road steps; once they're done, the review card (Figma 1446:12606) and, when a pod
// mentor has approved the user, the way to a pass (passes.js).
function renderRoad(route = "growth") {
  closeAllOverlays();
  if (route !== "programs" && !setupDone()) {
    roadPage.innerHTML = `
      <section class="road">
        <div class="road__head">
          <h1>Growth Track</h1>
          <p>Choose how you want your career to grow here. Enroll in a program to get started with your career acceleration.</p>
          <p>We’ll reach out to you with appropriate programs once your career report is complete</p>
        </div>
        ${stepList()}
      </section>`;
    return;
  }
  // Eligible for a program and no pass yet: Growth Track is the Programs page (passes.js).
  if (route === "programs" || passesOpen()) {
    roadPage.innerHTML = programsPage();
    return;
  }
  roadPage.innerHTML = `
    <section class="road">
      <div class="road__head">
        <h1>Growth Track</h1>
        <p>Choose how you want your career to grow here. Enroll in a program to get started with your career acceleration.</p>
        <p>We’ll reach out to you with appropriate programs once your career report is complete</p>
      </div>
      <div class="road-card">
        <div class="road-card__top">
          <img class="road-card__icon" src="${P}confetti.svg" alt="" />
          <h2>Congratulations on completing the second phase of profiling.</h2>
          <p>We are going through your submissions to assess your eligibility for our programs. A pod mentor will soon reach out to you with your career report and recommended programs</p>
        </div>
        <div class="road-card__rule">
          <button type="button" class="road-card__toggle${roadStepsOpen ? " is-open" : ""}" data-road="steps" aria-expanded="${roadStepsOpen}">
            ${roadStepsOpen ? "Hide steps" : "View steps"} <img src="${P}expand-more.svg" alt="" />
          </button>
        </div>
        ${roadStepsOpen ? stepList() : ""}
      </div>
    </section>`;
}
roadPage.addEventListener("click", (e) => {
  const act = e.target.closest("[data-road]")?.dataset.road;
  if (act === "steps") { roadStepsOpen = !roadStepsOpen; return renderRoad(); }
  const en = e.target.closest("[data-enroll]");
  if (en) return openCheckout(`program-${en.dataset.enroll}`); // passes.js: the checkout page
  const s = e.target.closest("[data-camp-step]");
  if (!s) return;
  const [, status, start, edit] = CAMP_STEPS[Number(s.dataset.campStep)];
  (status() && edit ? edit : start)();
});

// CAMP card in the menu: unread count, the dot on its icon and the badge beside it.
function syncInbox() {
  const n = unreadCount();
  document.querySelector(".inbox__sub").textContent = n ? `${n} New Message${n === 1 ? "" : "s"}` : "All caught up";
  document.querySelector(".inbox__dot").hidden = !n;
  const badge = document.querySelector(".inbox__badge");
  badge.hidden = !n;
  badge.textContent = n > 9 ? "9+" : n;
}

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
// Moving between roles is staged so each role reads as a new question (Figma 1391:19035): the options fade out, the
// next role's question pushes in from the right, then its options rise in. The first role slides in the same way.
const ROLE_ANIM = { optionsOut: 300, textOut: 250 }; // ms; the entrances are CSS animations (camp.css)
const reduceMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

function openPgmFlow() {
  const roles = myRoles();
  if (!roles.length) return startProfiling();
  const choices = { ...state.camp.experience };
  let step = 0; // 0 = intro, 1..n = roles
  let busy = false; // mid-transition: ignore clicks
  const ov = openOverlay(`<div class="pgm-modal" role="dialog" aria-modal="true" aria-label="Professional Growth Manager"></div>`, "modal");
  const box = ov.querySelector(".pgm-modal");
  // enter: "up" (first role) | "right" (Next) | "left" (Previous) | undefined (the intro, reduced motion)
  function draw(enter) {
    if (step === 0) {
      box.className = "pgm-modal pgm-modal--intro";
      box.innerHTML = pgmIntro("Good job setting up your role preferences. Now, let’s understand where you currently stand with those roles",
        "In the upcoming screens, answer a few questions to help us understand where you stand with the roles of your choice. We’ll go through each of them one at a time.");
      return;
    }
    const role = roles[step - 1];
    const name = roleName(role);
    box.className = "pgm-modal pgm-modal--flow pgm-modal--roles";
    // Which role we're on, at a glance: done roles ticked, the current one filled, the rest waiting.
    const chips = roles.map((r, i) => {
      const n = i + 1;
      const cls = n < step ? "is-done" : n === step ? "is-current" : "";
      return `<li class="pgm-role-chip ${cls}" ${n === step ? 'aria-current="step"' : ""}><span class="pgm-role-chip__mark">${n < step ? "✓" : n}</span>${esc(roleName(r))}</li>`;
    }).join("");
    box.innerHTML = `${pgmHead("close")}
      <div class="pgm-modal__body pgm-modal__scroll">
        <ol class="pgm-role-steps" aria-label="Your roles">${chips}</ol>
        <div class="pgm-modal__text${enter ? ` pgm-enter-${enter}` : ""}">
          <p class="pgm-modal__kicker">Role ${step} of ${roles.length}</p>
          <h2 class="pgm-modal__q">What kind of output have you produced as ${/^[AEIOU]/i.test(name) ? "an" : "a"} <b class="pgm-role-name${enter ? " pgm-mark-in" : ""}">${esc(name)}</b> so far?</h2>
        </div>
        <div class="pgm-options${enter ? ` pgm-enter-rise${enter === "up" ? " is-first" : ""}` : ""}" role="radiogroup">${EXPERIENCE.map(([t, d, icon], i) => `
          <button type="button" role="radio" aria-checked="${choices[role] === i}" class="pgm-option${choices[role] === i ? " is-on" : ""}" data-pgm-pick="${i}">
            <span><b>${t}</b><small>${d}</small></span><img class="pgm-option__icon" src="${CA}${icon}" alt="" />
          </button>`).join("")}</div>
        <p class="pgm-modal__error" role="alert"></p>
      </div>
      ${pgmFoot(step === 1, step === roles.length)}`;
  }
  // Leave the current role (options fade, then the question slides away), then draw the new one.
  function moveTo(nextStep) {
    const dir = nextStep > step ? "right" : "left";
    if (reduceMotion()) { step = nextStep; return draw(); }
    if (step === 0) { step = nextStep; return draw("up"); }
    busy = true;
    box.querySelector(".pgm-options").classList.replace("pgm-enter-rise", "pgm-leave-fade") || box.querySelector(".pgm-options").classList.add("pgm-leave-fade");
    setTimeout(() => {
      const text = box.querySelector(".pgm-modal__text");
      text.classList.remove("pgm-enter-up", "pgm-enter-right", "pgm-enter-left");
      text.classList.add(`pgm-leave-${dir === "right" ? "left" : "right"}`);
      setTimeout(() => { step = nextStep; draw(dir); busy = false; }, ROLE_ANIM.textOut);
    }, ROLE_ANIM.optionsOut);
  }
  const setError = (msg) => (box.querySelector(".pgm-modal__error").textContent = msg);
  ov.addEventListener("click", (e) => {
    if (busy) return;
    const pick = e.target.closest("[data-pgm-pick]");
    if (pick) {
      // Update in place, so picking doesn't replay the entrance.
      choices[roles[step - 1]] = Number(pick.dataset.pgmPick);
      box.querySelectorAll("[data-pgm-pick]").forEach((b) => {
        const on = b === pick;
        b.classList.toggle("is-on", on);
        b.setAttribute("aria-checked", String(on));
      });
      return setError("");
    }
    const act = e.target.closest("[data-pgm]")?.dataset.pgm;
    if (act === "skip") return closeOverlay(); // the PGM's message stays in Camp
    if (act === "prev") return moveTo(step - 1);
    if (act === "next") {
      if (step > 0 && choices[roles[step - 1]] === undefined) return setError("Pick the option that fits you best to continue.");
      if (step < roles.length) return moveTo(step + 1);
      // Finish: the PGM unlocks Proof of Work and takes the user there (FigJam 339:1035).
      const first = !state.camp.expDone;
      state.camp.experience = choices;
      state.camp.expDone = true;
      unlock("proof");
      closeOverlay();
      if (!first) return render();
      go("camp"); // the step toast, then the Proof of Work spotlight
    }
  });
  draw();
}

// On the first visit to Proof (the spotlight said it's unlocked): the PGM asks for the first proof of work.
// Two versions: some experience claimed / none.
function openProofPrompt() {
  const exp = hasExperience();
  openOverlay(`
    <div class="pgm-modal pgm-modal--note" role="dialog" aria-modal="true" aria-labelledby="pgm-proof">
      ${pgmHead(exp ? "skip" : "")}
      <div class="pgm-modal__body">
        ${exp
          ? `<h2 id="pgm-proof">Let’s back your experience with proof</h2>
             <p>You claimed to have ${esc(claimText())}.</p>
             <p>Claims backed by evidence always work better with recruiters. Let’s start by adding your first proof of work.</p>`
          : `<h2 id="pgm-proof">No experience yet? That’s perfectly fine</h2>
             <p>Once you gain your first experience, I’ll help you add its proof of work here. For now, you can explore this section or go back to Camp.</p>`}
      </div>
      <footer class="pgm-modal__foot pgm-modal__foot--center">
        ${exp ? `<button type="button" class="pgm-btn" data-pgm="add">Add proof of work <span aria-hidden="true">→</span></button>`
          : `<button type="button" class="pgm-btn" data-pgm="skip">Got it <span aria-hidden="true">✓</span></button>`}
      </footer>
    </div>`, "modal").addEventListener("click", (e) => {
    const act = e.target.closest("[data-pgm]")?.dataset.pgm;
    if (act === "skip") {
      closeOverlay();
      // Experience claimed but no proof yet: a nudge on why it's worth adding.
      if (exp) showToast("Proof of work backs up your past experience\nIt improves your chances of landing a pass and a job");
    }
    if (act === "add") { closeOverlay(); openAssetModal(); } // impact.js
  });
}
// Called on every workspace page (workspace.js).
function campOnRoute(route) {
  if (route !== "proof" || !isFresh() || !state.camp.expDone || state.camp.proofPrompted) return;
  state.camp.proofPrompted = true;
  if (!state.assets.length) whenClear(() => currentBase() === "proof" && openProofPrompt());
}

// After the first proof of work the PGM sends a message (see MESSAGE_DEFS); nothing pops up.
// Returns true when that message takes over from the usual "asset added" toast.
function campFirstAsset() {
  if (!isFresh() || state.assets.length !== 1) return false;
  syncMessages(); // posts it and shows the "new message" toast
  return true;
}

// Finishing a flow for the first time goes back to Camp (the step toast, then the Competencies spotlight if it's new);
// editing later stays on Competencies.
function landOnCompetencies(tab, toast, firstTime) {
  unlock("competencies");
  state.compTab = tab;
  state.tDraft = null;
  closeOverlay();
  go(isFresh() && firstTime ? "camp" : "competencies");
  showToast(toast); // the step toast stands in for it when a step is done
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
      box.className = "pgm-modal pgm-modal--intro pgm-modal--sm";
      box.innerHTML = pgmIntro("Set up how you interact with transferable skills.", "In the upcoming screens, talk about your level of comfort with different transferable skills.");
      return;
    }
    const [cat, skills, line, bg] = TRANSFERABLE[step - 1];
    box.className = "pgm-modal pgm-modal--flow";
    box.innerHTML = `${pgmHead("close")}
      <div class="pgm-modal__body pgm-modal__scroll">
        <h2 class="pgm-modal__q">Rate each skill on your level of comfort with using it</h2>
        <section class="pgm-cat" style="--cat-line:${line};--cat-bg:${bg};--cat-text:${CAT_TEXT[step - 1]}">
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
    const firstTime = !Object.keys(state.tSkills).length;
    state.tSkills = draft;
    landOnCompetencies("transferable", "Transferable skill ratings saved", firstTime);
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
      box.className = "pgm-modal pgm-modal--intro pgm-modal--sm";
      box.innerHTML = pgmIntro("Add your tool stack and let recruiters know which tools you’re proficient with", "In the upcoming screen, add all the tools that you’re proficient with.");
      return;
    }
    box.className = "pgm-modal pgm-modal--flow";
    box.innerHTML = `${pgmHead("close")}
      <div class="pgm-modal__body pgm-modal__scroll">
        <h2 class="pgm-modal__q">Add all the tools you’re proficient in</h2>
        <div class="pgm-picks">${pickList(options, picked, "Add new tool...")}</div>
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
    if (!picked.size) return showToast("Pick at least one tool to finish", undefined, 0); // a hint, not a result
    const firstTime = !state.tools.length;
    state.tools = [...picked];
    landOnCompetencies("tools", "Tool stack saved", firstTime);
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
  if (fresh) {
    Object.assign(state, { coins: 0, coinsMax: 0 }); // credits come with a pass or when they unlock (passes.js)
    state.pass = { eligible: new Set(), owned: new Set(), programs: new Set() };
    state.waitlist = new Set();
  }
  state.camp.stepsSeen = null;
  state.camp.spotSeen = null;
  state.camp.unlocked = fresh ? FRESH_START() : ALL_UNLOCKED();
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
  // New users go through onboarding first (onboarding.js); returning ones land in Camp.
  if (flag === "new") return history.replaceState(null, "", "#welcome");
  state.camp.holdIntro = true;
  history.replaceState(null, "", "#camp");
  document.addEventListener("DOMContentLoaded", () => loggingIn(() => { state.camp.holdIntro = false; go("camp"); })); // app.js
})();
