// Work Environment Preferences assessment — web layout from Figma 1065:23152, flow from the mobile set 1065:23991.
// Questions are the "Assessment 4 – Work Preferences" spec: pick one option per category.
const WE = "assets/wep/";
const WP_ICON = (n) => `assets/profile/pref-${n}.svg`; // the 14px category icons already used on the Profile page

// [key, group, label, icon, question, options as [label, description]]
const WEP_QUESTIONS = [
  ["workload", "General", "Workload management", WP_ICON(1), "How many hours would you like to work per week?", [["<10 Hours"], ["10-20 Hours"], ["20-30 Hours"], ["30-40 Hours"]]],
  ["weekend", "General", "Weekend Work", WP_ICON(2), "Are you open to work on the weekends?", [["Sometimes"], ["Definitely"], ["Prefer Not To"]]],
  ["experience", "General", "Work Experience", WP_ICON(3), "How much prior work experience would you consider yourself to have?", [["Fresher"], ["0 - 1 Year"], ["1 - 2 Years"], ["2 - 3 Years"], ["3+ Years"]]],
  ["innovation", "Workplace", "Innovation Culture", WP_ICON(4), "How much experimentation & innovation do you prefer at work?", [
    ["Highly experimental", "You enjoy constant brainstorming, creative freedom, and messy but exciting innovation cycles."],
    ["Moderately innovative", "You like structure but still want room to pitch ideas and improve things meaningfully."],
    ["Process-focused / Low innovation", "You prefer predictable tasks and executing tried-and-tested systems."]]],
  ["peer", "Workplace", "Peer Culture", WP_ICON(6), "What kind of team interactions do you vibe with?", [
    ["Collaborative & social", "You enjoy team interactions, bonding, and a lively work culture with lots of shared energy."],
    ["Independent but supportive", "You prefer focused solo work but still want the comfort of occasional check-ins and help."],
    ["Competitive / High-performance", "You’re driven by goals and want to challenge yourself in a fast-moving, ambitious environment."]]],
  ["execution", "Workplace", "Execution Style", WP_ICON(7), "What kind of workflow do you prefer?", [
    ["Agile / Sprint-based", "This is for you if you like fast turnarounds, weekly check-ins, and responsive change in project direction."],
    ["Structured / Waterfall", "This is for you if you prefer clarity up front, predefined timelines, and sticking to a fixed plan."],
    ["Reactive / As-needed", "This is for you if you can handle ambiguity and want to learn by responding to real-time startup needs."]]],
  ["pace", "Workplace", "Pace of Delivery", WP_ICON(5), "What would be your preferred pace of work & deliverables?", [
    ["Fast-paced", "You thrive on urgency, tight deadlines, and pushing output consistently."],
    ["Moderate", "You like a steady rhythm where quality and progress are balanced."],
    ["Slow / Flexible pace", "You need breathing room between tasks, especially during college exams or breaks."]]],
  ["stage", "Employer", "Startup Stage", WP_ICON(8), "What maturity level of companies would you prefer to work with?", [
    ["Early-stage", "You're excited by chaos, building from scratch, and taking on multiple hats in a startup just starting out."],
    ["Growth-stage", "You want structured innovation, growing teams, and a clear vision but evolving systems."],
    ["Mature-stage", "You prefer stable workflows, specialized roles, and a more established startup vibe."]]],
  ["funding", "Employer", "Funding Type", WP_ICON(9), "Which types of company would you prefer to work with?", [
    ["Bootstrapped", "You want to learn resourcefulness, frugality, and real hustle from a founder-led journey."],
    ["Angel-funded", "You like early innovation with some backing and want to observe strategic pivots and planning."],
    ["VC-funded", "You’re looking for exposure to scale-up operations, investor relations, and fast execution cycles."]]],
  ["mode", "Employer", "Work Mode", WP_ICON(10), "Where would you generally prefer to work from?", [
    ["Remote", "You need location flexibility, prefer working from home or hostel, and are self-managed."],
    ["Hybrid", "You enjoy the mix of online freedom and occasional in-person collaboration."],
    ["On-site", "You learn best face-to-face and want hands-on mentorship and team presence."]]],
  ["hours", "Employer", "Work Hours Flexibility", WP_ICON(11), "How flexible would you prefer your work timings to be?", [
    ["Fully flexible", "Your college routine varies and you want to choose your working hours freely."],
    ["Fixed schedule", "You like predictability and don’t mind allocating set time slots for work every week."],
    ["Output-based", "You're confident in your time management and prefer to be judged on deliverables, not hours."]]],
  ["exposure", "Autonomy", "Exposure Level", WP_ICON(12), "What is your preferred level of visibility?", [
    ["High (client meetings, demos, strategy)", "You're ambitious and want to understand the big picture from early on."],
    ["Medium (team meetings, internal updates)", "You're interested in learning the ropes gradually through internal visibility."],
    ["Low (task execution only)", "You want to focus on doing your part well without needing broader business context."]]],
  ["autonomy", "Autonomy", "Level of Autonomy", WP_ICON(13), "How independent do you prefer to be with your work?", [
    ["High (own projects)", "You like owning and leading initiatives with minimal supervision."],
    ["Medium (co-own tasks)", "You enjoy collaboration and shared ownership with guidance."],
    ["Low (support tasks)", "You’re still building confidence and prefer step-by-step instructions."]]],
];
const WEP_GROUPS = ["General", "Workplace", "Employer", "Autonomy"];
const WEP_IMPLICATIONS = "For startups, knowing your work preferences is critical for aligning individual strengths with the company’s fast-paced, evolving environment. This insight ensures new hires are placed in situations where they can perform at their best, adapt quickly, and remain engaged despite the uncertainties of early-stage growth. By understanding these preferences, startups can build balanced, complementary teams that combine creativity with stability, ensuring smoother collaboration and higher retention. This alignment not only improves day-to-day performance but also supports long-term resilience, enabling the startup to pivot, innovate, and scale more effectively.";

state.wep = { answers: {}, result: null, open: null, missing: false };

const wepQuestion = (key) => WEP_QUESTIONS.find((q) => q[0] === key);
const wepDesc = (key, label) => wepQuestion(key)[5].find((o) => o[0] === label)?.[1] || "";
const wepScreen = document.getElementById("wep-screen");

// ---------- Intro (1065:23431) ----------
const wepIntro = () => `
  <div class="ri-intro">
    <div class="ri-bar"><button type="button" class="ri-back" data-wp="exit"><img src="${RA}arrow-back.svg" alt="" />Back</button></div>
    <div class="ri-intro__body">
      <div class="ri-intro__art ri-intro__art--green"><img src="${WE}cover.png" alt="" /></div>
      <h1>Work Environment Preferences</h1>
      <p>To understand your work personality and culture preferences</p>
    </div>
    <button type="button" class="ri-start" data-wp="start">Start Now<img src="${RA}play-circle.svg" alt="" /></button>
  </div>`;

// ---------- Question pages (1065:23153) ----------
function wepPage(n) {
  const q = WEP_QUESTIONS[n - 1];
  const [key, , label, icon, question, options] = q;
  const picked = state.wep.answers[key];
  const missing = state.wep.missing;
  return `
    <div class="rq rq--green">
      <header class="rq-head">
        <button type="button" class="rq-head__back" data-wp="exit" aria-label="Leave assessment"><img src="${RA}arrow-back-dark.svg" alt="" /></button>
        <p class="rq-head__title"><img class="wq-head__icon" src="${WE}preference.svg" alt="" />Work Environment Preferences</p>
        <p class="rq-head__count">${n}/${WEP_QUESTIONS.length}</p>
      </header>
      <div class="rq-progress"><span style="width:${(n / WEP_QUESTIONS.length) * 100}%"></span></div>
      <main class="rq-body wq-body">
        <div class="wq-q">
          <p class="wq-q__label"><img src="${icon}" alt="" />${esc(label)}</p>
          <h1>${esc(question)}</h1>
        </div>
        <div class="wq-options" role="radiogroup" aria-label="${esc(label)}">${options.map(([opt]) => `
          <button type="button" role="radio" aria-checked="${picked === opt}" class="wq-option${picked === opt ? " is-on" : ""}" data-wp-pick="${esc(opt)}">${esc(opt)}</button>`).join("")}</div>
        <p class="error rq-error">${missing ? "Pick an option to continue." : ""}</p>
        <div class="wz-nav">
          <button type="button" class="btn btn--secondary im-back-btn" data-wp="prev">Back</button>
          <button type="button" class="btn btn--primary im-next" data-wp="next">${n === WEP_QUESTIONS.length ? "Submit" : "Next"}<img src="${IM}next-link.svg" alt="" /></button>
        </div>
      </main>
    </div>`;
}

// ---------- Result (1065:23323) ----------
function wepResult() {
  const { answers, completedAt } = state.wep.result;
  const open = state.wep.open;
  const rows = (group) => WEP_QUESTIONS.filter((q) => q[1] === group).map(([key, , label, icon]) => {
    const desc = wepDesc(key, answers[key]);
    const isOpen = open === key;
    return `
      <div class="wr-row${isOpen ? " is-open" : ""}">
        <${desc ? `button type="button" data-wp-open="${key}" aria-expanded="${isOpen}"` : "div"} class="wr-row__head">
          <span class="wr-row__label"><img src="${icon}" alt="" />${esc(label)}</span>
          <span class="wr-row__value">${esc(answers[key])}${desc ? `<img src="${WE}expand-${isOpen ? "less" : "more"}.svg" alt="" />` : ""}</span>
        </${desc ? "button" : "div"}>
        ${isOpen ? `<p class="wr-row__desc">${esc(desc)}</p>` : ""}
      </div>`;
  }).join("");
  return `
    <div class="rr rr--green">
      <section class="rr-hero">
        <button type="button" class="rr-back" data-wp="exit"><img src="${WE}arrow-back-result.svg" alt="" /><span>Back To Assessments</span></button>
        <div class="rr-hero__row">
          <p class="wr-saved">Your work preferences have been saved!</p>
          <div class="rr-actions">
            <a href="#profile" class="rr-btn rr-btn--light"><img src="${WE}north-east.svg" alt="" />View on Profile</a>
            <button type="button" class="rr-btn rr-btn--dark" data-wp="retake"><img src="${WE}restart.svg" alt="" />Retake assessment</button>
          </div>
        </div>
      </section>
      <img class="rr-wave" src="${WE}wave.svg" alt="" />
      <section class="rr-body">
        <div class="rr-cols">
          <div class="wr-list">
            ${WEP_GROUPS.map((g) => `<h2>${g}</h2>${rows(g)}`).join("")}
          </div>
          <div class="rr-implications"><h2>Career Implications</h2><p>${WEP_IMPLICATIONS}</p></div>
        </div>
        <div class="rr-done"><span><img src="${RA}done.svg" alt="" /></span><p>Completed On ${fmtDay(completedAt)}</p></div>
      </section>
    </div>`;
}

// ---------- Render + events ----------
function renderWep(param) {
  closeAllOverlays();
  const w = state.wep;
  if (param === "result") {
    if (!w.result) return go("wep");
    wepScreen.innerHTML = wepResult();
    return;
  }
  const n = Number(param);
  wepScreen.innerHTML = n >= 1 && n <= WEP_QUESTIONS.length ? wepPage(n) : wepIntro();
}

const wepStep = () => Number(location.hash.split("/")[1]) || 0;

wepScreen.addEventListener("click", (e) => {
  const w = state.wep;
  const n = wepStep();
  const pick = e.target.closest("[data-wp-pick]");
  if (pick) {
    const key = WEP_QUESTIONS[n - 1][0];
    w.answers[key] = pick.dataset.wpPick;
    w.missing = false;
    // Update in place rather than redrawing the page.
    wepScreen.querySelectorAll("[data-wp-pick]").forEach((b) => {
      const on = b === pick;
      b.classList.toggle("is-on", on);
      b.setAttribute("aria-checked", on);
    });
    wepScreen.querySelector(".rq-error").textContent = "";
    return;
  }
  const openRow = e.target.closest("[data-wp-open]");
  if (openRow) {
    const y = window.scrollY;
    w.open = w.open === openRow.dataset.wpOpen ? null : openRow.dataset.wpOpen;
    renderWep("result");
    return window.scrollTo(0, y);
  }
  switch (e.target.closest("[data-wp]")?.dataset.wp) {
    case "exit":
      go("assessments");
      break;
    case "start":
    case "retake":
      Object.assign(w, { answers: {}, missing: false, open: null });
      go("wep/1");
      break;
    case "prev":
      w.missing = false;
      go(n > 1 ? `wep/${n - 1}` : "wep");
      break;
    case "next": {
      if (!w.answers[WEP_QUESTIONS[n - 1][0]]) { w.missing = true; return renderWep(String(n)); }
      w.missing = false;
      if (n < WEP_QUESTIONS.length) return go(`wep/${n + 1}`);
      w.result = { answers: { ...w.answers }, completedAt: new Date() };
      go("wep/result");
      showToast("Work preferences saved to your profile");
    }
  }
});

// Assessments page card
document.getElementById("assessments").addEventListener("click", (e) => {
  if (e.target.closest('[data-assess="Work Environment Preferences"]')) go(state.wep.result ? "wep/result" : "wep");
});
