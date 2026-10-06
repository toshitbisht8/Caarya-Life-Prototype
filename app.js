// Caarya Life — signup & onboarding prototype. Front-end only; nothing is sent anywhere.

// ---------- Content ----------
const MAX_ROLES = 3;

// Domains and roles from Role_Business_Service_Domain_Mapping.xlsx (sheet: roles_by_domain).
// Domains keep the Figma order; roles keep the sheet's order.
const ROLE_GROUPS = [
  ["AI & Data Science", ["Machine Learning Engineer", "Business Intelligence Analyst", "NLP / Generative AI Engineer"]],
  ["Business, Sales & Growth", ["Business Development Manager", "Partnerships Manager", "Market Expansion / GTM Lead", "Competitive Intelligence Analyst"]],
  ["Design", ["Graphic Designer", "Brand Experience Designer", "Product Designer (UX/UI)", "UX Designer", "UI / Visual Designer", "UX Researcher", "Brand / Identity Designer", "Interaction Designer", "Service Designer", "Prototyper"]],
  ["Marketing & Communications", ["Marketing Manager", "Market Research Analyst", "Content Creator", "Content Strategist", "Brand Strategist", "Social Media Manager", "Growth Marketing Specialist", "Copywriter", "Narrative Designer", "PR & Communications Manager", "Campaign Manager", "Community Manager", "Influencer / Creator Partnerships Lead", "Partnerships & Collaborations Manager"]],
  ["Product", ["Product Manager", "Product Owner", "Technical Product Manager", "Product Analyst"]],
  ["Technology & Engineering", ["Software Engineer / Full-Stack Developer", "Backend Engineer", "Frontend Engineer", "Solutions / Software Architect", "QA / Test Engineer"]],
].map(([name, roles]) => ({ name, roles }));

// Icon layers + insets copied from Figma so each icon sits exactly as designed.
const I = "assets/icons/industries/";
const full = (file) => [{ file, inset: "0" }];
const ICONS = {
  health: full("fi_18853546.svg"),
  climate: [{ file: "fi_11772827-group.svg", inset: "11.25% 10.31% 12.81% 10.06%" }],
  food: full("fi_2779051.svg"),
  edu: full("fi_15330806.svg"),
  fin: full("fi_1773345.svg"),
  mobility: [{ file: "fi_7262915-group.svg", inset: "14.52% 1.11%" }],
  cities: full("fi_12350729.svg"),
  bio: full("fi_17341132.svg"),
  xr: full("fi_10162584.svg"),
  heartHand: [{ file: "fi_2731908-group.svg", inset: "0 0.29%" }],
  pet: full("fi_3769033.svg"),
  shield: [
    { file: "fi_7827955-g1.svg", inset: "4.49% 10.5%" },
    { file: "fi_7827955-g2.svg", inset: "11.31% 17.32%" },
    { file: "fi_7827955-g3.svg", inset: "42.43% 35.13% 30.66% 35.13%" },
    { file: "fi_7827955-g4.svg", inset: "27.91% 38.71% 54.44% 38.71%" },
    { file: "fi_7827955-g5.svg", inset: "54.63% 48.44% 37.58% 48.44%" },
  ],
  shirt: [{ file: "fi_5894917-group.svg", inset: "4.17% 4.61%" }],
  silver: full("fi_17287391.svg"),
  brain: full("fi_4775917.svg"),
};
const INDUSTRIES = [
  ["HealthTech", "health"],
  ["ClimateTech", "climate"],
  ["FoodTech", "food"],
  ["EduTech & Talent", "edu"],
  ["FinTech & DeFi", "fin"],
  ["Mobility & Smart Transport", "mobility"],
  ["Smart Cities & Built Environment", "cities"],
  ["BioTech & Synthetic Biology", "bio"],
  ["XR, Metaverse & Spatial Computing", "xr"],
  ["SportsTech & Wellness", "heartHand"],
  ["AgriTech & Food Security", "heartHand"],
  ["PetTech & Animal Care", "pet"],
  ["Cybersecurity & Privacy", "shield"],
  ["SpaceTech & Downstream Data", "shield"],
  ["Clean Energy & Storage", "shield"],
  ["FashionTech & Sustainable Apparel", "shirt"],
  ["Entertainment & MediaTech", "shirt"],
  ["GeronTech & Silver Economy", "silver"],
  ["Neurodiversity & Inclusive Tech", "brain"],
  ["Quantum & Advanced Computing", "brain"],
];

// Placeholder list — swap in the real college directory when available.
const COLLEGES = [
  "Delhi University",
  "Jawaharlal Nehru University",
  "University of Mumbai",
  "Christ University, Bengaluru",
  "Symbiosis International University, Pune",
  "Ashoka University",
  "Other",
];

// ---------- State ----------
const state = {
  authTab: "login",
  name: "",
  email: "",
  roles: new Set(),
  industries: new Set(),
  avatar: "assets/user-avatar.png", // the demo account swaps in its own photo
};

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const ROUTES = [
  "login", "signup", "otp", "about", "roles", "industries", "confirm",
  "assessments", "growth", "explore", "explore-all", "work-order", "desk", "session",
  "proof", "proof-asset", "achievements", "achievement-new", "journal", "competencies", "profile", "riasec", "wep",
];
const STEPS = ["about", "roles", "industries"];
const WORKSPACE_ROUTES = ["assessments", "growth", "explore", "explore-all", "work-order", "desk", "proof", "proof-asset", "achievements", "journal", "competencies", "profile"];
const SCREEN_FOR = { login: "auth", signup: "auth", otp: "auth", confirm: "confirm", session: "session", "achievement-new": "wizard", riasec: "riasec", wep: "wep" };
WORKSPACE_ROUTES.forEach((r) => (SCREEN_FOR[r] = "workspace"));
const displayName = () => state.name || state.email.split("@")[0];

// ---------- Routing ----------
let lastRendered = null;

function go(route) {
  if (location.hash !== "#" + route) location.hash = route;
  else render();
}

function render() {
  // Hashes look like "#growth" or "#work-order/3" (route + optional parameter).
  let [route, param] = location.hash.slice(1).split("/");
  if (!ROUTES.includes(route)) route = "login";
  // Deep links past the auth step need someone "signed in".
  if (!["login", "signup"].includes(route) && !state.email && !state.name) route = "login";
  const target = param && route !== "login" ? `${route}/${param}` : route;
  if (location.hash.slice(1) !== target) history.replaceState(null, "", "#" + target);

  const screen = SCREEN_FOR[route] || "onboarding";
  $$("[data-screen]").forEach((s) => s.classList.toggle("is-active", s.dataset.screen === screen));
  // Only jump to the top (and play the enter animation) on navigation, not on in-place re-renders.
  const navigated = target !== lastRendered;
  if (navigated) window.scrollTo(0, 0);
  lastRendered = target;
  $$("[data-user-name]").forEach((el) => (el.textContent = displayName()));
  $$("[data-user-avatar]").forEach((el) => (el.src = state.avatar));
  $$("[data-first-name]").forEach((el) => (el.textContent = displayName().split(" ")[0]));

  stopConfirm();
  if (screen === "auth") renderAuth(route);
  else if (screen === "onboarding") renderOnboarding(route);
  else if (screen === "confirm") startConfirm();
  else if (screen === "session") renderSession(); // session.js
  else if (screen === "wizard") renderWizard(); // impact.js
  else if (screen === "riasec") renderRiasec(param); // riasec.js
  else if (screen === "wep") renderWep(param); // wep.js
  else renderWorkspace(route, param); // workspace.js / growth.js

  if (navigated) {
    const el = screen === "workspace" ? $("[data-page]:not([hidden])") : $(`[data-screen="${screen}"]`);
    animateIn(el);
  }
}

// Subtle enter animation so a screen change is noticeable.
function animateIn(el) {
  if (!el) return;
  el.classList.remove("page-in");
  void el.offsetWidth; // restart the animation
  el.classList.add("page-in");
}

function renderAuth(view) {
  if (view !== "otp") state.authTab = view;
  $$(".tabs__tab").forEach((t) => t.classList.toggle("is-active", t.dataset.tab === state.authTab));
  $$(".auth__form").forEach((f) => f.classList.toggle("is-active", f.dataset.view === view));
  $$("[data-error]").forEach((e) => (e.textContent = ""));

  if (view === "otp") {
    $("[data-otp-email]").textContent = state.email || state.name;
    $$(".otp__box").forEach((b) => (b.value = ""));
    startResendTimer();
    $(".otp__box").focus();
  } else {
    $(`[data-view="${view}"] input`).focus();
  }
}

function renderOnboarding(step) {
  $$(".step").forEach((s) => s.classList.toggle("is-active", s.dataset.step === step));
  const index = STEPS.indexOf(step);
  $$(".progress__bar").forEach((bar, i) => bar.classList.toggle("is-filled", i <= index));
  $("[data-step-error]").textContent = "";

  if (step === "about") {
    const form = $("#about-form");
    form.name.value = state.name;
    form.email.value = state.email || "—";
  }
}

// ---------- Confirmation (Figma 1010:40639) ----------
// Mirrors the prototype: "Animating Box 2" changes variant every 3s (after-delay),
// smart-animating the line list up one row (37px) with ease-out 0.3s — see CSS.
// Its last variant has no auto-advance in Figma; we hold it for one more beat, then
// land on Assessments (that hand-off isn't wired in the prototype).
const TICKER_STEP_MS = 3000;
const TICKER_LINES = 5;
let confirmTimers = [];

function startConfirm() {
  const r = state.roles.size, n = state.industries.size;
  $("[data-summary]").textContent =
    `You picked ${r} role${r === 1 ? "" : "s"} and ${n} ${n === 1 ? "industry" : "industries"} to explore`;
  const track = $(".ticker__track");
  track.style.setProperty("--step", 0);
  for (let i = 1; i < TICKER_LINES; i++) {
    confirmTimers.push(setTimeout(() => track.style.setProperty("--step", i), i * TICKER_STEP_MS));
  }
  confirmTimers.push(setTimeout(() => go("assessments"), TICKER_LINES * TICKER_STEP_MS));
}

function stopConfirm() {
  confirmTimers.forEach(clearTimeout);
  confirmTimers = [];
}

window.addEventListener("hashchange", render);

// ---------- Auth ----------
$$(".tabs__tab").forEach((tab) => tab.addEventListener("click", () => go(tab.dataset.tab)));

$('[data-view="login"]').addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target;
  const username = f.username.value.trim();
  if (!username || !f.password.value) {
    $("[data-error]", f).textContent = "Enter your username and password.";
    return;
  }
  // Demo account (demo-user.js): skips the OTP and lands in a seasoned profile.
  if (DEMO_LOGINS.includes(username.toLowerCase())) {
    loadDemoUser();
    return loggingIn(() => go("growth"));
  }
  state.name = username.includes("@") ? "" : username;
  state.email = username.includes("@") ? username : "";
  go("otp");
});

$('[data-view="signup"]').addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target;
  const name = f.name.value.trim();
  const email = f.email.value.trim();
  if (!name) return ($("[data-error]", f).textContent = "Enter your full name.");
  if (!/^\S+@\S+\.\S+$/.test(email)) return ($("[data-error]", f).textContent = "Enter a valid email address.");
  state.name = name;
  state.email = email;
  go("otp");
});

// OTP boxes: one digit each, auto-advance, backspace goes back.
// Multi-digit input (paste, SMS autofill) spreads across the following boxes.
const boxes = $$(".otp__box");
function fillFrom(start, digits) {
  digits.forEach((d, j) => boxes[start + j] && (boxes[start + j].value = d));
  boxes[Math.min(start + digits.length, boxes.length - 1)].focus();
}
boxes.forEach((box, i) => {
  box.addEventListener("input", () => {
    const digits = box.value.replace(/\D/g, "").split("");
    box.value = "";
    if (digits.length) fillFrom(i, digits);
  });
  box.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && !box.value && boxes[i - 1]) boxes[i - 1].focus();
    if (e.key === "ArrowLeft" && boxes[i - 1]) boxes[i - 1].focus();
    if (e.key === "ArrowRight" && boxes[i + 1]) boxes[i + 1].focus();
  });
  box.addEventListener("paste", (e) => {
    e.preventDefault();
    fillFrom(i, e.clipboardData.getData("text").replace(/\D/g, "").split(""));
  });
});

$('[data-view="otp"]').addEventListener("submit", (e) => {
  e.preventDefault();
  const code = boxes.map((b) => b.value).join("");
  if (code.length < 6) {
    $("[data-error]", e.target).textContent = "Enter all 6 digits. Any code works in this prototype.";
    return;
  }
  state.authTab === "login" ? loggingIn(() => go("about")) : go("about");
});

// "Logging in" loader after a successful sign-in: the logo pulses while a bar fills, then `next` runs.
const LOGIN_LOADER_MS = 1600;
function loggingIn(next) {
  const first = displayName().split(" ")[0];
  openOverlay(`
    <div class="desk-loader login-loader" role="status">
      <img class="desk-loader__logo" src="assets/logo-animation.jpg" alt="" />
      <p>${first ? `Welcome back, ${esc(first)}` : "Logging you in"}</p>
      <span class="login-loader__bar" style="--login-ms:${LOGIN_LOADER_MS}ms"><i></i></span>
    </div>`, "loader"); // growth.js
  setTimeout(() => { closeAllOverlays(); next(); }, LOGIN_LOADER_MS);
}

let resendTimer;
const resendBtn = $("[data-resend]");
function startResendTimer() {
  clearInterval(resendTimer);
  let left = 59;
  const tick = () => {
    resendBtn.disabled = left > 0;
    resendBtn.textContent = left > 0 ? `Resend OTP in 0:${String(left).padStart(2, "0")}` : "Resend OTP";
    left--;
    if (left < -1) clearInterval(resendTimer);
  };
  tick();
  resendTimer = setInterval(tick, 1000);
}
resendBtn.addEventListener("click", () => {
  boxes.forEach((b) => (b.value = ""));
  boxes[0].focus();
  startResendTimer();
});

// ---------- About you ----------
const aboutForm = $("#about-form");
COLLEGES.forEach((c) => aboutForm.college.add(new Option(c, c)));
const thisYear = new Date().getFullYear();
for (let y = thisYear - 4; y <= thisYear + 5; y++) aboutForm.year.add(new Option(y, y));
aboutForm.year.value = "2026";

// Format mobile as "00000 00000".
aboutForm.mobile.addEventListener("input", (e) => {
  const d = e.target.value.replace(/\D/g, "").slice(0, 10);
  e.target.value = d.length > 5 ? `${d.slice(0, 5)} ${d.slice(5)}` : d;
});
aboutForm.addEventListener("input", (e) => {
  const field = e.target.closest("[data-field]");
  if (field) setFieldError(field, "");
});

function setFieldError(field, msg) {
  field.classList.toggle("has-error", !!msg);
  $(".error", field).textContent = msg;
}

function validateAbout() {
  const checks = {
    mobile: aboutForm.mobile.value.replace(/\D/g, "").length === 10 ? "" : "Enter a 10-digit mobile number.",
    college: aboutForm.college.value ? "" : "Select your college.",
    field: aboutForm.field.value.trim() ? "" : "Enter your field of study.",
  };
  Object.entries(checks).forEach(([name, msg]) => setFieldError($(`[data-field="${name}"]`), msg));
  const firstBad = Object.keys(checks).find((k) => checks[k]);
  if (firstBad) aboutForm[firstBad].focus();
  return !firstBad;
}

// ---------- Roles ----------
const rolesEl = $("#roles");
ROLE_GROUPS.forEach((group) => {
  const section = document.createElement("div");
  section.className = "group niche";
  section.innerHTML = `
    <button type="button" class="niche__head" aria-expanded="true">
      <span class="group__title"></span>
      <img src="assets/icons/expand-less.svg" alt="" />
    </button>
    <div class="chips"></div>`;
  $(".group__title", section).textContent = group.name;
  const head = $(".niche__head", section);
  head.addEventListener("click", () => {
    const collapsed = section.classList.toggle("is-collapsed");
    head.setAttribute("aria-expanded", String(!collapsed));
  });
  group.roles.forEach((role) => {
    const id = `${group.name}::${role}`;
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip";
    chip.setAttribute("aria-pressed", "false");
    chip.innerHTML = `<span></span><img src="assets/icons/add.svg" alt="" />`;
    $("span", chip).textContent = role;
    chip.dataset.id = id;
    chip.addEventListener("click", () => {
      const on = !state.roles.has(id);
      // The picker is also shown inside the Manage Roles modal, so message every error slot.
      const say = (msg) => $$("[data-step-error]").forEach((e) => (e.textContent = msg));
      if (on && state.roles.size >= MAX_ROLES) {
        say(`You can pick up to ${MAX_ROLES} roles. Remove one to choose another.`);
        return;
      }
      on ? state.roles.add(id) : state.roles.delete(id);
      say("");
      syncRoleChips();
    });
    $(".chips", section).append(chip);
  });
  rolesEl.append(section);
});

// Reflect state.roles on the chips. At the limit, dim the unpicked roles so the cap is visible.
function syncRoleChips() {
  const full = state.roles.size >= MAX_ROLES;
  $$(".chip", rolesEl).forEach((c) => {
    const on = state.roles.has(c.dataset.id);
    c.classList.toggle("is-selected", on);
    c.setAttribute("aria-pressed", String(on));
    c.classList.toggle("is-capped", full && !on);
  });
}

// ---------- Industries ----------
// Icons are inlined so CSS can switch their fill per state (default / hover / selected),
// matching the Figma "Industry Option" component.
const svgCache = {};
const loadSvg = (file) => (svgCache[file] ||= fetch(I + file).then((r) => r.text()));
let svgInstance = 0;
function inlineSvg(layer, file) {
  loadSvg(file).then((markup) => {
    // Namespace ids so clip paths don't collide between icons.
    const p = `i${svgInstance++}-`;
    layer.innerHTML = markup.replace(/id="([^"]+)"/g, `id="${p}$1"`).replace(/url\(#([^)]+)\)/g, `url(#${p}$1)`);
  });
}

const industriesEl = $("#industries");
INDUSTRIES.forEach(([name, iconKey]) => {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "industry";
  card.setAttribute("aria-pressed", "false");
  const icon = document.createElement("span");
  icon.className = "industry__icon";
  icon.setAttribute("aria-hidden", "true");
  ICONS[iconKey].forEach(({ file, inset }) => {
    const layer = document.createElement("span");
    layer.style.inset = inset;
    inlineSvg(layer, file);
    icon.append(layer);
  });
  const label = document.createElement("span");
  label.textContent = name;
  card.append(icon, label);
  card.addEventListener("click", () => {
    const on = !state.industries.has(name);
    on ? state.industries.add(name) : state.industries.delete(name);
    card.classList.toggle("is-selected", on);
    card.setAttribute("aria-pressed", String(on));
    $("[data-step-error]").textContent = "";
  });
  industriesEl.append(card);
});

// ---------- Step navigation ----------
function currentRoute() {
  return location.hash.slice(1);
}

$("[data-next]").addEventListener("click", () => {
  const step = currentRoute();
  const err = $("[data-step-error]");
  if (step === "about" && !validateAbout()) return;
  if (step === "roles" && state.roles.size === 0) return (err.textContent = "Pick at least one role to continue.");
  if (step === "industries" && state.industries.size === 0) return (err.textContent = "Pick at least one industry to continue.");
  go(ROUTES[ROUTES.indexOf(step) + 1]);
});

$("[data-back]").addEventListener("click", () => {
  const step = currentRoute();
  go(step === "about" ? "otp" : STEPS[STEPS.indexOf(step) - 1]);
});

// ---------- Back to top ----------
const toTop = $(".to-top");
window.addEventListener("scroll", () => toTop.classList.toggle("is-visible", window.scrollY > 400), { passive: true });
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Wait for workspace.js / growth.js to load before the first render.
document.addEventListener("DOMContentLoaded", render);
