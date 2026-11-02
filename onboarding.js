// Onboarding after signup (Figma file 4QrfNXX0SjTt7aug0ZjQ8z, node 1:1225): Welcome to Life → First Things First
// (Code of Conduct, Workplace Guidelines, each signed) → meet the managers → the set-up loader (confirm screen) → Camp.
// Typography follows the rest of Life (Lato headings, Satoshi body), not the mobile mock-ups.
const OB = "assets/onboarding/";

state.onboarding = { signed: {} }; // doc key -> true once signed

const OB_DOCS = {
  conduct: {
    title: "Code of Conduct",
    agree: "I have read, and understood Caarya’s code of conduct",
    items: [
      ["work-ethic.svg", "Work Ethic", "The Company appreciates a strong work ethic and helps students build a habit of being organized with their work and academics, and of excelling in both."],
      ["mentorship.svg", "Mentorship", "Caarya believes in students working with industry experts and leadership, not under them. That is why we hold the relationship a mentee shares with their mentor as sacred and beautiful."],
      ["collaboration.svg", "Collaboration", "Getting to know your peers and management not only makes work genuinely enjoyable, but also builds your work family: a thing of utmost importance."],
      ["leaves.svg", "Leaves", "We encourage students to take academic leaves (for their college examinations) whenever they need, letting the team know in advance to avoid inconvenience."],
      ["conduct.svg", "Conduct", "Any show of unparliamentary behaviour will not be tolerated."],
      ["co-working.svg", "Co-Working", "Students are expected to interact with members of the community respectfully and professionally."],
    ],
  },
  guidelines: {
    title: "Workplace Guidelines",
    agree: "I have read, and understood Caarya’s workplace guidelines",
    items: [
      ["guide-smart-work.png", "Our leadership believes in putting in ", "smart work instead of just hard work", ". We suggest deep work sessions: they not only save time, but also tend to be more productive and efficient in terms of the quality of output."],
      ["guide-meetings.png", "", "Stay active and responsive", " during meetings. Active listening, being present, and in-depth understanding is an art: an art worth mastering."],
      ["guide-networking.png", "A point to remember during events: ", "more networking = more growth", ". Who knows which opportunity will come your way if you put yourself out there and show your best skills? As they say, “your network is your net worth”."],
      ["guide-communication.png", "Communicate ", "respectfully, professionally and thoughtfully", " with your work family. Being humble is what keeps the best people where they are. Learning to talk to people in a humble, calm tone is a skill many students miss, and it’s a key to miracles."],
      ["guide-mentor.png", "Be open to ", "consider your mentor’s advice and share your thoughts", " and feelings whenever needed. Don’t hesitate to set up a meeting with your mentor and discuss any questions or areas where you’d like feedback."],
    ],
  },
};
const OB_ORDER = ["conduct", "guidelines"];

const introEl = document.querySelector('[data-screen="intro"]');
let welcomeTimer;

function renderIntro(route, param) {
  clearTimeout(welcomeTimer);
  introEl.className = `screen intro intro--${route}${introEl.classList.contains("is-active") ? " is-active" : ""}`;
  if (route === "welcome") return renderWelcome();
  if (route === "first-things") return renderDoc(OB_ORDER.includes(param) ? param : "conduct");
  if (route === "meet-team") return renderTeam();
}

// ---------- Welcome to Life (1:1411 splash → 1:1226) ----------
function renderWelcome() {
  const first = displayName().split(" ")[0];
  introEl.innerHTML = `
    <button type="button" class="ob-welcome" data-ob="start" aria-label="Continue">
      <img class="ob-welcome__logo" src="assets/brand-mark.jpg" alt="" />
      <span class="ob-welcome__text">
        <span class="ob-welcome__hello">Hello ${esc(first)}!</span>
        <span class="ob-welcome__title">Welcome to <b>Life</b></span>
      </span>
    </button>`;
  welcomeTimer = setTimeout(() => currentBase() === "welcome" && go("first-things/conduct"), 3200);
}

// ---------- First Things First (1:1235 / 1:1323 code of conduct, 1:1468 / 1:1509 workplace guidelines) ----------
const obDots = (current) => `
  <div class="ob-dots" aria-hidden="true">${[0, 1, 2].map((i) => `<i class="${i <= current ? "is-on" : i === current + 1 ? "is-next" : ""}"></i>`).join("")}</div>`;

function renderDoc(key) {
  const doc = OB_DOCS[key];
  const signed = !!state.onboarding.signed[key];
  const body = key === "conduct"
    ? `<div class="ob-card ob-rules">${doc.items.map(([icon, title, text]) => `
        <div class="ob-rule">
          <p class="ob-rule__title"><span class="ob-rule__icon"><img src="${OB}${icon}" alt="" /></span>${title}</p>
          <p class="ob-rule__text">${text}</p>
        </div>`).join("")}</div>`
    : `<div class="ob-card ob-guides">${doc.items.map(([img, before, bold, after]) => `
        <div class="ob-guide">
          <img class="ob-guide__art" src="${OB}${img}" alt="" />
          <p class="ob-guide__text">${before}<b>${bold}</b>${after}</p>
        </div>`).join("")}</div>`;
  introEl.innerHTML = `
    <div class="ob-page">
      <div class="heading">
        <p class="heading__title heading__title--red">First Things First</p>
        <p class="heading__sub">Here are some important documents for you to go through</p>
      </div>
      ${obDots(OB_ORDER.indexOf(key))}
      <section class="ob-doc">
        <h1 class="ob-doc__title">${doc.title}</h1>
        ${body}
        ${signature(key, signed)}
        <button type="button" role="checkbox" aria-checked="${signed}" class="ob-check" data-ob="check">
          <span class="ob-check__box"><span><img src="${OB}checkbox-${signed ? "checked" : "blank"}.svg" alt="" /></span></span>
          <span class="ob-check__text">${doc.agree}</span>
        </button>
        <button type="button" class="ob-btn" data-ob="next" ${signed ? "" : "disabled"}>Next <img src="${OB}next.svg" alt="" /></button>
      </section>
    </div>`;
}

// Signature (component set 1:820…1:842): click the blank line and the person's name writes itself in, one letter
// every 80ms (Signature Container01 → 02 … 12). Signing is the agreement, so it ticks the checkbox and enables Next.
const signature = (key, signed) => {
  const name = state.name || displayName();
  return `
    <div class="ob-sign${signed ? " is-signed" : ""}">
      <button type="button" class="ob-sign__pad" data-ob="sign" ${signed ? "disabled" : ""} aria-label="${signed ? `Signed by ${esc(name)}` : "Click to sign with your name"}">
        <span class="ob-sign__name" aria-hidden="true">${[...name].map((ch) => `<i>${ch === " " ? "&nbsp;" : esc(ch)}</i>`).join("")}</span>
        <span class="ob-sign__hint">Click to sign</span>
      </button>
    </div>`;
};
const SIGN_STEP_MS = 80;

function sign() {
  const key = param0();
  if (state.onboarding.signed[key]) return;
  const box = introEl.querySelector(".ob-sign");
  box.classList.add("is-signing");
  box.querySelector(".ob-sign__pad").disabled = true;
  const letters = [...box.querySelectorAll(".ob-sign__name i")];
  letters.forEach((l, i) => setTimeout(() => l.classList.add("is-on"), i * SIGN_STEP_MS));
  setTimeout(() => {
    state.onboarding.signed[key] = true;
    box.classList.replace("is-signing", "is-signed");
    const check = introEl.querySelector(".ob-check");
    check.setAttribute("aria-checked", "true");
    check.querySelector("img").src = `${OB}checkbox-checked.svg`;
    introEl.querySelector('[data-ob="next"]').disabled = false;
  }, letters.length * SIGN_STEP_MS + 120);
}
const param0 = () => location.hash.slice(1).split("/")[1] || "conduct";

// ---------- Meet your managers (1:1422) ----------
function renderTeam() {
  const first = displayName().split(" ")[0];
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
  introEl.innerHTML = `
    <div class="ob-team">
      <section class="ob-mgr">
        <h2>How’dy from the Ops Manager, ${esc(first)}!</h2>
        <img class="ob-mgr__icon" src="${OB}handwave.svg" alt="" />
        <p>${greeting}, ${esc(first)}. I’m your Operations Manager. I keep the day-to-day running smoothly: your schedules, your sessions and the resources you need to do your best work.</p>
        <p>Check out this video about Caarya.</p>
        <div class="ob-video" role="img" aria-label="Video: About Caarya"><img src="${OB}play.svg" alt="" /></div>
        <p>You can find this video in your Caarya space, which holds all your important work resources.</p>
      </section>
      <section class="ob-mgr">
        <h2>Hey ${esc(first)}, I am your Professional Growth Manager</h2>
        <img class="ob-mgr__icon" src="${OB}tie.svg" alt="" />
        <p>I’ll guide your growth: helping you pick up the right work, track the skills you build and turn it into proof that recruiters trust.</p>
        <p>I have unlocked a couple of info cards that will help you understand career development better.</p>
        <div class="ob-cards"><div class="ob-info">Future of Careers</div><div class="ob-info">Career Development Pathways</div></div>
        <p>Check them out in your space.</p>
      </section>
      <section class="ob-mgr">
        <h2>Yo ${esc(first)}! I am your Talent Manager.</h2>
        <img class="ob-mgr__icon" src="${OB}cool.svg" alt="" />
        <p>I represent you with startups and organisations looking for talent like you.</p>
        <p>Keep checking your inbox for messages from me.</p>
      </section>
      <button type="button" class="ob-btn" data-ob="done">Get started with my Caarya Life</button>
    </div>`;
}

introEl.addEventListener("click", (e) => {
  switch (e.target.closest("[data-ob]")?.dataset.ob) {
    case "start": go("first-things/conduct"); break;
    case "sign": case "check": sign(); break;
    case "next": {
      const i = OB_ORDER.indexOf(param0());
      go(i < OB_ORDER.length - 1 ? `first-things/${OB_ORDER[i + 1]}` : "meet-team");
      break;
    }
    case "done": go("confirm"); break; // app.js: the set-up loader, then Camp
  }
});
