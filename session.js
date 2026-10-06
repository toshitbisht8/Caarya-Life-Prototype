// Focus session (Figma section 903:17976). Started from "Work On This" on a desk VC card.
// Everything is in-memory: the timer, notes, moments, artefact links, mentor slot and session logs.

const S = "assets/session/";

state.session = null; // { woId, vcId, start, view: "main" | "resources" | "logs", notes, moments: [{ type, fields }] }

function startSession(woId, vcId) {
  const s = state.session;
  // Resume the running session for this construct, otherwise start a fresh one.
  if (!s || s.woId !== woId || s.vcId !== vcId) {
    state.session = { woId, vcId, start: Date.now(), view: "main", notes: "", moments: [] };
  } else {
    s.view = "main";
  }
  deskProgress(woId).lastVc = vcId;
  go("session");
}

// ---------- Moment templates ----------
// [type, subtitle on the capture card, template]. Template parts: [lead-in, field key, hint, text after the field].
const MOMENTS = [
  ["Judgment & Decision-Making", "I had to make a call between multiple options", [
    ["In this session I had to make a call about", "call", "what you were deciding - e.g., which direction to take the layout, whether to keep going or scrap what I had", "."],
    ["I was weighing", "options", "the options - e.g., sticking with the safer version vs. trying the riskier one", "."],
    ["For now I've gone with", "choice", "what you chose"],
    ["because", "reason", "quick reason", "."],
    ["Still unsure about", "unsure", "optional - anything you want to revisit later", "."],
  ]],
  ["Failure & Setbacks", "Something went wrong or got blocked", [
    ["This session didn't fully go to plan —", "wrong", "what went wrong or got blocked - e.g., the approach I tried broke halfway, I realised I'd been building on a wrong assumption", "."],
    ["I think it happened because", "why", "quick read on why", "."],
    ["For now I've", "action", "what you did about it, or parked for later - e.g., reverted to the last working version, left a note to fix it tomorrow", "."],
    ["Note to self:", "note", "anything to remember - e.g., check this assumption before going further next time", "."],
  ]],
  ["Working in Ambiguity", "I kept moving without full clarity", [
    ["Went into this session without full clarity on", "unclear", "what was unclear - e.g., what the client actually wants, how this connects to the bigger picture", "."],
    ["To keep moving, I assumed", "assumption", "the assumption you ran with"],
    ["— mainly because", "reason", "quick reason", "."],
    ["Flagging this so I remember to", "confirm", "what to confirm later - e.g., check this with the team before locking it in", "."],
  ]],
  ["Learning", "I had to pick up something new to get unstuck", [
    ["Had to pick up", "learned", "what you learned this session - e.g., how to use a feature I hadn't touched before, a concept I needed to understand"],
    ["to get unstuck. I figured it out by", "how", "how - e.g., digging through docs, trial and error, asking someone", "."],
    ["Used it for", "applied", "where it applied - e.g., getting the component working", "."],
    ["Still want to understand", "fuzzy", "optional - anything still fuzzy", "."],
  ]],
  ["Context Switching", "I was pulled between different modes of work", [
    ["This session pulled me between", "modeA", "mode one - e.g., heads-down detail work"],
    ["and", "modeB", "mode two - e.g., zooming out to think about the overall direction"],
    [", mostly because", "cause", "what caused it - e.g., a message that needed a strategic answer mid-task", "."],
    ["The tricky part was", "tricky", "what made it hard to switch cleanly", "."],
    ["Managed it by", "managed", "quick note on how you held it together", "."],
  ]],
  ["Process & Framework", "I used a process or framework to tackle something", [
    ["Used", "process", "the process or framework - e.g., a structured checklist, a specific method"],
    ["this session to tackle", "target", "what you applied it to", "."],
    ["Went with it because", "reason", "quick reason", "."],
    ["Adapted it by", "adapted", "optional - anything you tweaked to fit", "."],
    ["It helped me", "helped", "what it got you - e.g., get through the messy part faster", "."],
  ]],
  ["Insights", "I noticed something worth acting on", [
    ["Noticed something this session:", "insight", "the insight or finding - e.g., the data points to a different problem than I thought, users seem to drop off earlier than expected", "."],
    ["It came up while", "where", "where it surfaced", "."],
    ["Worth acting on because", "why", "why it matters / what it could change", "."],
    ["Next move:", "next", "what you plan to do with it", "."],
  ]],
  ["Stakeholder Navigation", "I worked through something with another person", [
    ["This session involved working through something with", "who", "who - e.g., a teammate, my manager, the client", "."],
    ["The friction was", "friction", "what made it tricky - e.g., we didn't agree on the direction, I needed a sign-off that wasn't easy to get", "."],
    ["I handled it by", "handled", "what you did", "."],
    ["Where it landed:", "outcome", "outcome, or what's still open", "."],
  ]],
  ["Generation", "My thinking shifted to a new idea or approach", [
    ["Had a shift in thinking this session — instead of", "old", "the old approach"],
    [", I started seeing it as", "reframe", "the new idea or reframe", "."],
    ["It came from", "spark", "what sparked it", "."],
    ["If it holds up, it could mean", "changes", "what it changes", "."],
    ["Next step is to", "test", "how you'll test or build on it", "."],
  ]],
];
const MOMENT_TYPES = MOMENTS.map(([type]) => type);
const momentInfo = (type) => MOMENTS.find(([t]) => t === type);
const templateFor = (type) => momentInfo(type)[2];

function momentCard(m, i, scope) {
  const parts = templateFor(m.type).map(([lead, key, hint, after = ""]) => `
    <b>${esc(lead)}</b>
    <input class="moment__field" data-${scope}-moment="${i}" data-field="${key}" placeholder="${esc(hint)}"
      value="${esc(m.fields[key] || "")}" style="width:${Math.min(hint.length + 3, 64)}ch" aria-label="${esc(lead)}" />${after ? `<b>${after}</b>` : ""}`).join("");
  return `
    <div class="moment">
      <div class="moment__head">
        <span><img src="${S}groups-purple.svg" alt="" />${esc(m.type)}</span>
        <button type="button" data-${scope}-remove="${i}" aria-label="Remove moment"><img src="${S}delete.svg" alt="" /></button>
      </div>
      <div class="moment__body">${parts}</div>
    </div>`;
}

const captureCards = (scope) => MOMENT_TYPES.map((t) => `
  <button type="button" class="capture" data-${scope}-add="${esc(t)}">
    <span><i>${esc(t)}</i>${esc(momentInfo(t)[1])}</span>
    <span class="capture__icon"><img src="${S}add-soft.svg" alt="" /><img src="${S}add-circle-hover.svg" alt="" /></span>
  </button>`).join("");

// ---------- Views ----------
const sessionScreen = document.getElementById("session-screen");

// Built once: the gradient, particles and top bar stay put while .fs-scroll scrolls the view.
function sessionChrome() {
  sessionScreen.innerHTML = `
    <div class="fs-bg"><canvas class="fs-bg__particles" aria-hidden="true"></canvas></div>
    <div class="fs-scroll">
      <main class="fs-main">
        <div class="fs-view" data-fs-view></div>
        <div class="fs-actions">
          <button type="button" class="btn btn--primary fs-end" data-fs="end">End Session <img src="${S}close-light.svg" alt="" /></button>
        </div>
      </main>
    </div>
    <header class="fs-top">
      <button type="button" class="fs-menu" data-fs="menu" aria-label="Session menu"><img src="${S}menu.svg" alt="" /></button>
      <div class="fs-status">
        <p>Session in Progress</p>
        <p class="fs-status__timer"><img src="${S}timer.svg" alt="" /><span data-timer>00 : 00 : 00</span></p>
      </div>
    </header>`;
  initParticles(sessionScreen.querySelector(".fs-bg__particles"), "255, 255, 255"); // particles.js
  document.fonts.load('24px "Mr De Haviland"'); // ready before the sign-off signature animates
}

function viewMain(s) {
  const v = vcProgress(s.woId, s.vcId);
  const vc = vcInfo(s.woId, s.vcId); // work-orders.js
  const mentor = v.mentor
    ? `<p class="fs-help__booked-label">Booked for:</p>
       <p class="fs-help__booked">${esc(v.mentor)}<button type="button" data-fs="mentor" aria-label="Change slot">✎</button></p>`
    : `<button type="button" class="fs-link" data-fs="mentor">Request Mentor <img src="${S}arrow-forward.svg" alt="" /></button>`;
  return `
    <section class="fs-card fs-card--vc">
      <div class="fs-vc__head">
        <p class="fs-vc__title">${esc(vc.name)} <span class="fs-chip">${esc(vc.time)} approx.</span></p>
        <button type="button" class="fs-link" data-fs="judged">See how this is Judged</button>
      </div>
      <p class="fs-vc__desc">${esc(vc.desc)}</p>
      <div class="fs-vc__row">
        <div class="fs-vc__leaves">
          <i>What this leaves behind:</i>
          <span class="fs-chip fs-chip--strong">${esc(vc.leaves)} ${helpDot()}</span>
        </div>
        <div class="fs-vc__submit">
          <button type="button" class="btn btn--primary" data-fs="artefact">${v.artefacts.length ? "Update Artefact" : "Submit Artefact"}</button>
          <i>${v.artefacts.length ? `${v.artefacts.length} link${v.artefacts.length > 1 ? "s" : ""} attached · ` : ""}You can replace or improve it at any time</i>
        </div>
      </div>
      <div class="fs-pgm">${pgmBadge(false)}<p>Since you’re currently ${CAREER_STAGES[state.careerStage - 1][1].toLowerCase()}, I suggest you aim to submit this artefact at L${Math.min(vc.rubric.length, targetLevel(vc))}</p></div>
    </section>

    <section class="fs-card">
      <h2 class="fs-card__title">Explore Community Resources</h2>
      <div class="fs-group"><p class="fs-label">Recommended Reads</p>
        <div class="fs-reads">${vc.reads.map(([t, d]) => `<div class="fs-read"><b>${esc(t)}</b><span>${esc(d)}</span></div>`).join("")}</div>
      </div>
      <div class="fs-group"><p class="fs-label">Where to Use AI</p>
        <ul class="fs-ai">${vc.ai.map((q) => `<li>${esc(q)}</li>`).join("")}</ul>
      </div>
      <div class="fs-group"><p class="fs-label">Need assistance with this work?</p>
        <div class="fs-help">
          <div class="fs-help__card">
            <span class="fs-help__icon"><img src="${S}groups.svg" alt="" /></span>
            <div><b>Use Community Resources</b><p>See how others in the community have done similar work in the past</p></div>
            <button type="button" class="fs-link" data-fs="resources">Explore Resources now <img src="${S}arrow-forward.svg" alt="" /></button>
          </div>
          <div class="fs-help__card">
            <span class="fs-help__icon"><span class="gt-star" style="width:20px;height:20px"><span style="inset:2.4% 2.59% 2.55% 2.63%"><img src="${S}mentor.svg" alt="" /></span></span></span>
            <div><b>Get A Mentor</b><p>Get on a 1-on-1 call with a community expert to guide you</p></div>
            ${mentor}
          </div>
        </div>
      </div>
    </section>

    <section class="fs-card">
      <div class="fs-card__row">
        <h2 class="fs-card__title">Capture your Session Details</h2>
        <button type="button" class="fs-link" data-fs="logs">View Session Log</button>
      </div>
      <label class="fs-field"><span>Notes</span>
        <textarea data-fs-notes placeholder="Note down whatever you do in this session">${esc(s.notes)}</textarea>
      </label>
      ${s.moments.length ? `<div class="fs-field"><span>Moments</span><div class="moments">${s.moments.map((m, i) => momentCard(m, i, "s")).join("")}</div></div>` : ""}
      <div class="fs-field"><span>Anything worth Capturing this Session?</span>
        <div class="captures">${captureCards("s")}</div>
      </div>
    </section>`;
}

// Level the growth manager suggests aiming for, by stage: contribute at L1, go a level deeper at C2,
// meet the quality bar at C3, then push to L4 / L5 (capped at the construct's top band by the caller).
const targetLevel = (vc) => [1, 2, Math.max(2, vc.bar ? vc.floorLevel : 2), 4, 5][state.careerStage - 1];

function viewResources(s) {
  const items = vcInfo(s.woId, s.vcId).community; // work-orders.js
  return `
    <section class="fs-card fs-card--sub">
      <button type="button" class="gt-back" data-fs="back"><img src="${G}arrow-back.svg" alt="" /><span>Back</span></button>
      <h2 class="fs-card__title fs-card__title--icon"><img src="${S}community-dot.png" alt="" />Exploring community resoures for: ‘${esc(vcName(s.woId, s.vcId))}’</h2>
      <div class="gt-search"><img src="${G}search.svg" alt="" /><input type="search" placeholder="Search for resources" aria-label="Search for resources" data-fs-search /></div>
      <div class="fs-resources">
        ${items.map(([icon, t]) => `<div class="fs-resource"><span class="fs-resource__icon"><img src="${S}${icon}.svg" alt="" /></span><b>${t}</b></div>`).join("")}
        <button type="button" class="fs-more">Load More <img src="${S}add-dark.svg" alt="" /></button>
      </div>
    </section>`;
}

function viewLogs(s) {
  const logs = [...vcProgress(s.woId, s.vcId).logs].sort((a, b) => b.end - a.end);
  const byDay = {};
  logs.forEach((l) => {
    const day = new Date(l.end).toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" });
    (byDay[day] ||= []).push(l);
  });
  const time = (t) => new Date(t).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }).toLowerCase();
  const body = logs.length
    ? Object.entries(byDay).map(([day, list]) => `
        <p class="fs-log-day">${day}</p>
        ${list.map((l) => `
          <article class="fs-log">
            <div class="fs-log__head"><b>${fmtHm(l.durationMs).replace(/^00h /, "").replace(" ", "")}</b><span aria-hidden="true">${l.journal ? "😄" : "🙂"}</span></div>
            <p>Worked on :</p>
            <p class="fs-log__notes">${l.notes ? esc(l.notes).replace(/\n/g, "<br />") : "<i>No notes added</i>"}</p>
            ${l.moments.length ? `<p class="fs-log__moments">${l.moments.map((m) => esc(m.type)).join(" · ")}</p>` : ""}
            <p class="fs-log__time">${time(l.start)} - ${time(l.end)}</p>
          </article>`).join("")}`).join("")
    : `<p class="fs-empty">No sessions logged for this construct yet. They'll appear here once you end a session.</p>`;
  return `
    <section class="fs-card fs-card--sub">
      <button type="button" class="gt-back" data-fs="back"><img src="${G}arrow-back.svg" alt="" /><span>Back</span></button>
      <h2 class="fs-card__title">Session Logs For ‘${esc(vcName(s.woId, s.vcId))}’</h2>
      <div class="gt-search"><img src="${G}search.svg" alt="" /><input type="search" placeholder="Search session logs" aria-label="Search session logs" data-fs-search /></div>
      <div class="fs-logs">${body}</div>
    </section>`;
}

function renderSession() {
  closeAllOverlays();
  const s = state.session;
  if (!s) return go("desk");
  const view = s.view === "resources" ? viewResources(s) : s.view === "logs" ? viewLogs(s) : viewMain(s);
  if (!sessionScreen.querySelector(".fs-scroll")) sessionChrome();
  const scroller = sessionScreen.querySelector(".fs-scroll");
  const key = `${s.vcId}/${s.view || "main"}`;
  const top = scroller.dataset.view === key ? scroller.scrollTop : 0; // keep position on in-view re-renders
  scroller.dataset.view = key;
  sessionScreen.querySelector("[data-fs-view]").innerHTML = view;
  scroller.scrollTop = top;
  tickTimer();
}

// Timer
const elapsed = () => (state.session ? Date.now() - state.session.start : 0);
function tickTimer() {
  const el = sessionScreen.querySelector("[data-timer]");
  if (!el || !state.session) return;
  const secs = Math.floor(elapsed() / 1000);
  el.textContent = `${pad2(Math.floor(secs / 3600))} : ${pad2(Math.floor(secs / 60) % 60)} : ${pad2(secs % 60)}`;
}
setInterval(tickTimer, 1000);

// ---------- Interactions ----------
sessionScreen.addEventListener("input", (e) => {
  const s = state.session;
  if (e.target.matches("[data-fs-notes]")) s.notes = e.target.value;
  if (e.target.matches("[data-s-moment]")) s.moments[e.target.dataset.sMoment].fields[e.target.dataset.field] = e.target.value;
  if (e.target.matches("[data-fs-search]")) {
    const q = e.target.value.trim().toLowerCase();
    sessionScreen.querySelectorAll(".fs-resource, .fs-log").forEach((el) => (el.hidden = q && !el.textContent.toLowerCase().includes(q)));
  }
});

sessionScreen.addEventListener("click", (e) => {
  const s = state.session;
  const add = e.target.closest("[data-s-add]");
  if (add) {
    s.moments.push({ type: add.dataset.sAdd, fields: {} });
    render();
    sessionScreen.querySelectorAll(".moment")[s.moments.length - 1]?.scrollIntoView({ block: "center", behavior: "smooth" });
    return;
  }
  const rm = e.target.closest("[data-s-remove]");
  if (rm) {
    s.moments.splice(Number(rm.dataset.sRemove), 1);
    render();
    return;
  }
  const el = e.target.closest("[data-fs]");
  if (!el) return;
  switch (el.dataset.fs) {
    case "menu": openSessionMenu(); break;
    case "end": openJournal(); break;
    case "judged": openJudgedDrawer(s.woId, s.vcId); break;
    case "artefact": openArtefactDrawer(); break;
    case "mentor": openMentorModal(); break;
    case "resources": s.view = "resources"; render(); break;
    case "logs": s.view = "logs"; render(); break;
    case "back": s.view = "main"; render(); break;
  }
});

// In-session menu (not designed: prompts per chat)
function openSessionMenu() {
  const ov = openOverlay(`
    <nav class="fs-panel" aria-label="Session menu">
      <header class="drawer__head"><button type="button" data-close aria-label="Close"><img src="${G}drawer-close.svg" alt="" /></button><h2>In This Session</h2></header>
      <div class="fs-panel__items">
        <button type="button" data-menu="details"><b>Work Order Details</b><span>The brief, why this work is needed and who it's for</span></button>
        <button type="button" data-menu="criteria"><b>Progression Criteria</b><span>What moves this role forward</span></button>
        <button type="button" data-menu="logs"><b>Session Log</b><span>Past sessions on ${esc(vcName(state.session.woId, state.session.vcId))}</span></button>
        <button type="button" data-menu="end" class="is-end"><b>End Session</b><span>Wrap up and add a journal entry</span></button>
      </div>
    </nav>`, "panel");
  ov.addEventListener("click", (e) => {
    const b = e.target.closest("[data-menu]");
    if (!b) return;
    closeOverlay();
    const what = b.dataset.menu;
    const c = woContent(state.session.woId); // work-orders.js
    if (what === "details") openInfoDrawer("Work Order Details", `
      <div class="bg-block"><p class="kicker">Brief</p><p>${esc(c.brief)}</p></div>
      <div class="bg-block"><p class="kicker">Why this work is needed</p><p>${esc(c.why)}</p></div>
      <div class="bg-block"><p class="kicker">About ‘${esc(c.venture)}’</p><p>${esc(c.about)}</p></div>`);
    if (what === "criteria") openInfoDrawer("Progression Criteria", `
      <div class="bg-block"><p class="kicker">To unlock paid work</p>
        <div class="unlock__items unlock__items--stack">${unlockItems("desk").map(([t, d]) => `<div class="unlock__item"><img src="${G}progress-pending.png" alt="" /><span><b>${t}</b><span>${d}</span></span></div>`).join("")}</div>
      </div>
      <div class="bg-block"><p class="kicker">Career progression (${stageRange()})</p>
        ${c.progression.map(([t, pts]) => `<p class="milestone"><b>${esc(pts)}</b><span>${esc(t)}</span></p>`).join("")}
      </div>`);
    if (what === "logs") { state.session.view = "logs"; render(); }
    if (what === "end") openJournal();
  });
}

function openInfoDrawer(title, body) {
  openOverlay(`
    <aside class="drawer" role="dialog" aria-modal="true" aria-label="${esc(title)}">
      <header class="drawer__head"><button type="button" data-close aria-label="Close"><img src="${G}drawer-close.svg" alt="" /></button><h2>${esc(title)}</h2></header>
      <div class="drawer__body">${body}</div>
    </aside>`, "drawer");
}

// ---------- Artefacts ----------
// "Submitting Artefact" drawer (903:16154, review states 1080:32086). Each submission goes to a
// community mentor: "Verification Pending" until they grade it, then a verified level badge.
function openArtefactDrawer() {
  const { woId, vcId } = state.session;
  const v = vcProgress(woId, vcId);
  const vc = vcInfo(woId, vcId); // work-orders.js
  const levels = critLevels(vc); // growth.js
  const list = () => v.artefacts.map((a, i) => `
    <div class="artefact">
      <a class="artefact__link${a.primary ? " is-primary" : ""}" href="${esc(a.link)}" target="_blank" rel="noopener noreferrer">
        ${a.primary ? `<span class="artefact__tag">Primary Link <img src="${S}star.svg" alt="" /></span>` : ""}
        <img src="${S}link.svg" alt="" /><span>${esc(a.title)}</span>${reviewBadge(a)}
      </a>
      <div class="artefact__more">
        <button type="button" data-art-menu="${i}" aria-label="More options"><img src="${S}more-vert.svg" alt="" /></button>
        <div class="gt-menu" hidden>
          ${a.primary ? "" : `<button type="button" data-art-primary="${i}">Make primary</button>`}
          <button type="button" data-art-remove="${i}">Remove</button>
        </div>
      </div>
    </div>`).join("");
  const ov = openOverlay(`
    <aside class="drawer" role="dialog" aria-modal="true" aria-labelledby="art-title">
      <header class="drawer__head"><button type="button" data-close aria-label="Close"><img src="${S}close-dark.svg" alt="" /></button><h2 id="art-title">Submitting Artefact</h2></header>
      <div class="drawer__body">
        <div class="drawer__vc"><h3>${esc(vc.leaves)}</h3><p>${esc(vc.desc)}</p></div>
        <div class="artefacts">
          <p class="artefacts__label">Submissions</p>
          <div class="artefacts__list" data-art-list>${list()}</div>
          <button type="button" class="artefacts__add" data-art-add><img src="${S}add-purple-fill.svg" alt="" />Add New</button>
        </div>
        <div class="judged">
          <button type="button" class="judged__toggle" aria-expanded="false">See How This Is Judged <img src="${S}expand-less.svg" alt="" /></button>
          <div class="judged__levels" hidden>${levels}</div>
        </div>
      </div>
    </aside>`, "drawer", () => render());
  const refresh = () => (ov.querySelector("[data-art-list]").innerHTML = list());
  ov.addEventListener("click", (e) => {
    const t = e.target;
    if (t.closest("[data-art-add]")) {
      openArtefactModal("New Artefact Submission", (item) => {
        v.artefacts.push({ ...item, status: "pending", primary: v.artefacts.length === 0 });
        refresh();
        showToast("A community mentor will review & grade your submission");
      });
    }
    const m = t.closest("[data-art-menu]");
    if (m) m.nextElementSibling.hidden = !m.nextElementSibling.hidden;
    const p = t.closest("[data-art-primary]");
    if (p) { v.artefacts.forEach((a, i) => (a.primary = i === Number(p.dataset.artPrimary))); refresh(); }
    const r = t.closest("[data-art-remove]");
    if (r) {
      const [gone] = v.artefacts.splice(Number(r.dataset.artRemove), 1);
      if (gone.primary && v.artefacts[0]) v.artefacts[0].primary = true;
      refresh();
    }
    const tog = t.closest(".judged__toggle");
    if (tog) {
      const open = tog.getAttribute("aria-expanded") !== "true";
      tog.setAttribute("aria-expanded", String(open));
      ov.querySelector(".judged__levels").hidden = !open;
    }
  });
}

// Mentor review status on a submission: pending, or the level it was graded at (1080:31868).
const reviewBadge = (item) => item.level
  ? `<span class="review-badge review-badge--done"><img src="${S}verified.svg" alt="Verified" />L${item.level}</span>`
  : `<span class="review-badge">Verification Pending</span>`;

// "New Artefact Submission" modal (1080:30433) — also used for the final deliverable. Saving sends it for review.
function openArtefactModal(title, onSave) {
  const ov = openOverlay(`
    <form class="art-modal" role="dialog" aria-modal="true" aria-labelledby="art-modal-title" novalidate>
      <header><h2 id="art-modal-title">${esc(title)}</h2><button type="button" data-close aria-label="Close"><img src="${S}close-dark.svg" alt="" /></button></header>
      <div class="art-modal__body">
        <label class="field"><span class="field__label">Title</span><input class="input" name="title" placeholder="Add a title to remember this submission by" autofocus /></label>
        <label class="field"><span class="field__label">Link</span>
          <span class="input input--prefixed"><img src="${S}link-grey.svg" alt="" /><input name="link" type="url" placeholder="Add link to submission here" /></span>
        </label>
        <p class="error" data-art-error></p>
      </div>
      <footer>
        <button type="button" class="btn btn--secondary" data-close>Cancel</button>
        <button type="submit" class="btn btn--primary">Submit For Verification</button>
      </footer>
    </form>`, "modal");
  const form = ov.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const t = form.title.value.trim();
    let link = form.link.value.trim();
    if (link && !/^https?:\/\//i.test(link)) link = "https://" + link;
    const err = !t ? "Add a title for this submission." : !/^https?:\/\/[^\s.]+\.[^\s]+/i.test(link) ? "Add a valid link, e.g. docs.google.com/…" : "";
    if (err) return (ov.querySelector("[data-art-error]").textContent = err);
    closeOverlay();
    onSave({ title: t, link });
  });
}

// ---------- Mentor (903:17115) ----------
function openMentorModal() {
  const v = vcProgress(state.session.woId, state.session.vcId);
  const fmtDay = (d) => {
    const n = d.getDate();
    const suf = [11, 12, 13].includes(n % 100) ? "th" : ["th", "st", "nd", "rd"][n % 10] || "th";
    return `${d.toLocaleDateString("en-GB", { weekday: "long" })}, ${n}${suf} ${d.toLocaleDateString("en-GB", { month: "short" })}`;
  };
  const day = (plus) => fmtDay(new Date(Date.now() + plus * 86400000));
  const slots = [[day(1), ["12:00 PM", "04:00 PM"]], [day(3), ["10:00 AM", "06:00 PM"]], [day(5), ["04:00 PM"]]];
  let picked = v.mentor;
  const ov = openOverlay(`
    <div class="mentor" role="dialog" aria-modal="true" aria-labelledby="mentor-title">
      <header class="mentor__head">
        <span class="fs-help__icon"><span class="gt-star" style="width:20px;height:20px"><span style="inset:2.4% 2.59% 2.55% 2.63%"><img src="${S}mentor-drawer.svg" alt="" /></span></span></span>
        <h2 id="mentor-title">Request Mentor</h2>
        <button type="button" data-close aria-label="Close"><img src="${S}close-dark.svg" alt="" /></button>
      </header>
      <div class="mentor__body">
        <p>Mentors are provided to you on request and are available in limited slots</p>
        <div class="mentor__slots">
          <h3>Choose a slot</h3>
          ${slots.map(([d, times]) => `<div class="mentor__day"><p>${d}</p><div>${times.map((t) => {
            const label = `${d} - ${t}`;
            return `<button type="button" class="slot${picked === label ? " is-picked" : ""}" data-slot="${esc(label)}">${t}</button>`;
          }).join("")}</div></div>`).join("")}
        </div>
        <button type="button" class="btn btn--primary mentor__book" data-book ${picked ? "" : "disabled"}>
          Book Slot <span class="add-track__cost"><img src="${G}coins-light.svg" alt="" /><s>00</s> 0</span>
        </button>
      </div>
    </div>`, "modal");
  ov.addEventListener("click", (e) => {
    const s = e.target.closest("[data-slot]");
    if (s) {
      picked = s.dataset.slot;
      ov.querySelectorAll(".slot").forEach((b) => b.classList.toggle("is-picked", b === s));
      ov.querySelector("[data-book]").disabled = false;
    }
    if (e.target.closest("[data-book]") && picked) {
      v.mentor = picked;
      closeOverlay();
      render();
      showToast(`Mentor booked for ${picked}`);
    }
  });
}

// ---------- End Session → journal (903:17157) ----------
function openJournal() {
  const s = state.session;
  const draft = { vcId: s.vcId, notes: s.notes, moments: s.moments.map((m) => ({ type: m.type, fields: { ...m.fields } })) };
  const mins = Math.max(1, Math.round(elapsed() / 60000));
  const hoursOpts = Array.from({ length: 13 }, (_, h) => `<option value="${h}"${h === Math.min(12, Math.floor(mins / 60)) ? " selected" : ""}>${pad2(h)}</option>`).join("");
  const minOpts = Array.from({ length: 60 }, (_, m) => `<option value="${m}"${m === mins % 60 ? " selected" : ""}>${pad2(m)}</option>`).join("");
  const moments = () => draft.moments.length
    ? `<div class="fs-field"><span>Moments</span><div class="moments">${draft.moments.map((m, i) => momentCard(m, i, "j")).join("")}</div></div>` : "";
  const ov = openOverlay(`
    <div class="journal" role="dialog" aria-modal="true" aria-labelledby="journal-title">
      <header class="journal__head">
        <span class="fs-help__icon"><img src="${S}journal-purple.svg" alt="" /></span>
        <h2 id="journal-title">Adding Journal Entry</h2>
        <button type="button" data-close aria-label="Close"><img src="${S}close-dark.svg" alt="" /></button>
      </header>
      <div class="journal__body">
        <label class="fs-field"><span>Worked On</span>
          <span class="select"><select data-j-vc>${Object.entries(woContent(s.woId).vcs).map(([id, vc]) => `<option value="${id}"${Number(id) === draft.vcId ? " selected" : ""}>${esc(vc.name)}</option>`).join("")}</select><img src="${S}sort-down.svg" alt="" /></span>
        </label>
        <div class="fs-field"><span>Time Spent Working</span>
          <div class="journal__time">
            <label><span class="select select--sm"><select data-j-h>${hoursOpts}</select><img src="${S}expand-more.svg" alt="" /></span>Hours</label>
            <label><span class="select select--sm"><select data-j-m>${minOpts}</select><img src="${S}expand-more.svg" alt="" /></span>Minutes</label>
          </div>
        </div>
        <label class="fs-field"><span>What did you do?</span>
          <textarea data-j-notes placeholder="Note down whatever you do in this session">${esc(draft.notes)}</textarea>
        </label>
        <div data-j-moments>${moments()}</div>
        <div class="fs-field"><span>Anything worth Capturing this Session?</span><div class="captures captures--list">${captureCards("j")}</div></div>
      </div>
      <footer class="journal__foot">
        <button type="button" data-j-skip>Skip &amp; End Session</button>
        <button type="button" class="is-primary" data-j-sign><img src="${S}pen-nib.svg" alt="" />Sign Off on Session Report</button>
      </footer>
    </div>`, "modal");
  const refreshMoments = () => (ov.querySelector("[data-j-moments]").innerHTML = moments());
  ov.addEventListener("input", (e) => {
    const t = e.target;
    if (t.matches("[data-j-notes]")) draft.notes = t.value;
    if (t.matches("[data-j-moment]")) draft.moments[t.dataset.jMoment].fields[t.dataset.field] = t.value;
  });
  ov.addEventListener("click", (e) => {
    const add = e.target.closest("[data-j-add]");
    if (add) { draft.moments.push({ type: add.dataset.jAdd, fields: {} }); refreshMoments(); }
    const rm = e.target.closest("[data-j-remove]");
    if (rm) { draft.moments.splice(Number(rm.dataset.jRemove), 1); refreshMoments(); }
    const sign = e.target.closest("[data-j-sign]");
    const skip = e.target.closest("[data-j-skip]");
    if (!sign && !skip) return;
    const vcId = Number(ov.querySelector("[data-j-vc]").value);
    const durationMs = (Number(ov.querySelector("[data-j-h]").value) * 60 + Number(ov.querySelector("[data-j-m]").value)) * 60000;
    const finish = () => finishSession({ vcId, durationMs, journal: !!sign, notes: sign ? draft.notes : s.notes, moments: sign ? draft.moments : [] });
    if (!sign || sign.classList.contains("is-signing")) return sign ? undefined : finish();
    signOff(sign, finish);
  });
}

// Sign-off button (Figma 1028:14188): the label gives way to the user's name being written, then a double tick.
const SIGN_MS = 1500;
function signOff(btn, done) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return done();
  const name = displayName().trim() || "Signed";
  btn.classList.add("is-signing");
  btn.closest(".journal__foot").querySelector("[data-j-skip]").disabled = true;
  btn.innerHTML = `<span class="signature" style="--sign-ms:${SIGN_MS}ms">${esc(name)}</span><img class="sign-tick" src="${S}done.svg" alt="" />`;
  setTimeout(() => {
    const tick = btn.querySelector(".sign-tick");
    tick.src = `${S}done-all.svg`;
    tick.classList.add("is-done");
  }, SIGN_MS);
  setTimeout(done, SIGN_MS + 700);
}

function finishSession({ vcId, durationMs, journal, notes, moments }) {
  const s = state.session;
  vcProgress(s.woId, vcId).logs.push({ start: s.start, end: Date.now(), durationMs, journal, notes, moments });
  deskProgress(s.woId).lastVc = vcId;
  state.session = null;
  closeAllOverlays();
  go("desk");
  showToast(journal ? "Session report signed off" : "Session ended");
}
