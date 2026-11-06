// One-pagers for what's coming next (Figma 4QrfNXX0SjTt7aug0ZjQ8z 1881:12998, adapted for desktop): Community
// Intelligence (Your Knowledge Space) and Synergy Intelligence (Your Network). Each explains the section, says what it
// will cost, and takes a place on the waitlist. The PGM's and Talent Manager's Camp messages lead here (camp.js), and
// joining a waitlist adds that page to the menu under Coming Soon.

const SP = "assets/space/";
const SPACE_PRICE = 149; // credits per month, each
// The Figma clock icon, recoloured per section.
const WATCH_ICON = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5ZM9 15C5.6925 15 3 12.3075 3 9C3 5.6925 5.6925 3 9 3C12.3075 3 15 5.6925 15 9C15 12.3075 12.3075 15 9 15ZM9.375 5.25H8.25V9.75L12.15 12.15L12.75 11.175L9.375 9.15V5.25Z" fill="currentColor"/></svg>`;

// Your Network's hero (no designed artwork yet): you at the centre, linked to the people around you.
function networkArt() {
  const people = [[90, 70, "AK"], [330, 60, "RS"], [400, 190, "MT"], [300, 300, "NP"], [110, 290, "JD"], [40, 180, "SV"]];
  return `<svg class="space__hero-art" viewBox="0 0 440 360" role="img" aria-label="You, connected to the people you've worked with">
    ${people.map(([x, y]) => `<line x1="220" y1="180" x2="${x}" y2="${y}" stroke="#33d6e1" stroke-width="2" stroke-dasharray="6 6" />`).join("")}
    <line x1="90" y1="70" x2="40" y2="180" stroke="#a5f2f2" stroke-width="2" /><line x1="330" y1="60" x2="400" y2="190" stroke="#a5f2f2" stroke-width="2" />
    <line x1="300" y1="300" x2="110" y2="290" stroke="#a5f2f2" stroke-width="2" />
    ${people.map(([x, y, i]) => `<g><circle cx="${x}" cy="${y}" r="28" fill="#fff" stroke="#33d6e1" stroke-width="2" />
      <text x="${x}" y="${y + 5}" text-anchor="middle" font-family="Satoshi, sans-serif" font-weight="700" font-size="14" fill="#0497ae">${i}</text></g>`).join("")}
    <circle cx="220" cy="180" r="44" fill="#0497ae" /><text x="220" y="186" text-anchor="middle" font-family="Satoshi, sans-serif" font-weight="700" font-size="16" fill="#fff">You</text>
  </svg>`;
}

// features: [text with one *highlighted phrase*, highlight colour, illustration (image or menu icon)]
const SPACES = {
  "community-intelligence": {
    key: "community", section: "Your Knowledge Space", name: "Community Intelligence", theme: "knowledge",
    title: "Your Knowledge Space",
    intro: "Short reads and videos picked for the career you’re building. Learn a little every day, share what you think with your community and keep what’s worth keeping.",
    early: "Join the early access waitlist to get priority tester access to Your Knowledge Space and all its features.",
    hero: `<img class="space__hero-img" src="${SP}hero.jpg" alt="" />`,
    heading: "Consume Content And Grow Your Knowledge Space",
    features: [
      ["Browse through text and video content curated based on your *career goals*", "#4ca6e5", `${SP}career-goals.png`],
      ["Align content to your *ikigai*", "#ed4c41", `${SP}ikigai.png`],
      ["Become a *knowledge influencer* by sharing thoughts with your community", "#c44eb9", `${SP}influencer.png`],
      ["Save *curated collections* to your space", "#e0447c", `${SP}collections.png`],
      ["Consume curated content and become a *neo-generalist* ready to work in industry", "#816fe9", `${SP}neo-generalist.png`],
    ],
    includes: ["Daily Gains: short reads picked for the work you do", "Peer Knowledge Exchange: ask, answer and learn with other students", "Curated collections saved to your space"],
  },
  "synergy-intelligence": {
    key: "synergy", section: "Your Network", name: "Synergy Intelligence", theme: "network",
    title: "Your Network",
    intro: "Everyone you’ve worked with, been mentored by or met through Caarya, in one place. See how you work together and who can open doors for you.",
    early: "Join the early access waitlist to get priority tester access to Your Network and all its features.",
    hero: networkArt(),
    heading: "Grow The Network Your Career Runs On",
    features: [
      ["Keep everyone you’ve worked with, been mentored by or met in your *Rolodex*", "#0497ae", "assets/menu/rolodex.svg"],
      ["See *how you work together*: the projects, roles and skills you share", "#4ca6e5", "assets/menu/exchange.svg"],
      ["Find out *who can open doors* for you in the roles you want", "#ed4c41", "assets/menu/growth-track.svg"],
      ["Share your *network profile*: your work and your story, one link away", "#816fe9", "assets/menu/network-profile.svg"],
    ],
    includes: ["Rolodex: the people you’ve met and worked with", "Network profile: how you show up to your network", "Introductions through the people you know"],
  },
};

state.waitlist = new Set(); // "community" | "synergy"
const onWaitlist = (key) => state.waitlist.has(key);

const featureText = (text, color) => esc(text).replace(/\*(.+?)\*/, `<b style="color:${color}">$1</b>`);
const waitlistBtn = (s) => onWaitlist(s.key)
  ? `<span class="space__cta is-on">${WATCH_ICON}You’re on the waitlist</span>`
  : `<button type="button" class="space__cta" data-waitlist="${s.key}">${WATCH_ICON}Join the Waitlist</button>`;

const spacePage = document.getElementById("space-page");
function renderSpace(route) {
  const s = SPACES[route];
  spacePage.className = `workspace__main gt space space--${s.theme}`;
  spacePage.innerHTML = `
    <div class="space__wrap">
      ${backLink("Back to Camp", "camp")}
      <section class="space__top">
        <div class="space__intro">
          <p class="space__kicker">${s.name}</p>
          <h1>${s.title}</h1>
          <p>${s.intro}</p>
          <p>${s.early}</p>
          ${waitlistBtn(s)}
        </div>
        <div class="space__hero">${s.hero}</div>
      </section>
      <section class="space__features">
        <h2>${s.heading}</h2>
        <div class="space__grid">${s.features.map(([text, color, img]) => `
          <article class="space__feature">
            <div class="space__art${img.endsWith(".svg") ? " is-icon" : ""}">${img.endsWith(".svg")
              ? `<span style="--icon:url('${img}')"></span>` // a menu icon, tinted in the section's colour
              : `<img src="${img}" alt="" />`}</div>
            <p>${featureText(text, color)}</p>
          </article>`).join("")}</div>
      </section>
      <section class="space__pricing">
        <div class="space__price">
          <p class="space__label">Pricing</p>
          <p class="space__amount"><img src="${G}coins-dark.svg" alt="" />${SPACE_PRICE} <span>credits / month</span></p>
          <p class="space__note">Paid from your credit balance each month. Credits come with your program pass, and you can top up any time.</p>
        </div>
        <ul class="space__includes">${s.includes.map((i) => `<li><img src="${CA}done.svg" alt="" />${i}</li>`).join("")}</ul>
      </section>
      <section class="space__end">
        <p>Be among the first to try ${s.title}.</p>
        ${waitlistBtn(s)}
      </section>
    </div>`;
}
spacePage.addEventListener("click", (e) => {
  const b = e.target.closest("[data-waitlist]");
  if (!b) return;
  const [route, s] = Object.entries(SPACES).find(([, x]) => x.key === b.dataset.waitlist);
  state.waitlist.add(s.key);
  if (isFresh()) unlock(route); // camp.js: it joins the menu, under Coming Soon
  render();
  showToast(`You’re on the waitlist for ${s.title}\nFind it in your menu under Coming Soon`, undefined, 300);
});
