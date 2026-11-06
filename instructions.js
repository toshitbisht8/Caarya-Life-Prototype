// Instructions: the round button by the user profile in the nav bar (Figma IUmw1y1QTgEOQMSjjyF5AI 1492:37664) opens a
// drawer from the right listing the app's hidden shortcuts. Keep it in step with mentor-sim.js, camp.js
// (SPACE_DELAYS) and passes.js (checkout). The first-login tour (camp.js TOUR) introduces the button.

const INSTRUCTIONS = [
  {
    title: "Keyboard shortcuts",
    intro: "These stand in for the mentors who review your work. They don’t work while you’re typing in a field.",
    rows: [
      [["Shift", "A"], "Grade every artefact waiting for review on your Desk and in sessions."],
      [["Shift", "D"], "Grade every final deliverable waiting for review. For a new user, this makes them eligible for the Worker Pass."],
      [["Shift", "S"], "Verify every technical skill waiting for review in Competencies."],
      [["Shift", "M"], "All three of the above at once."],
      [["Shift", "C"], "Move the role in view to its next career stage, C1 to C5 and back to C1."],
      [["Shift", "L"], "A pod mentor approves the Learner Pass. Works once set-up is done; the Talent Manager then messages you."],
    ],
  },
  {
    title: "Timed messages",
    intro: "For a new user, these arrive in Camp after set-up is complete, each with its own toast.",
    rows: [
      [["25s"], "Community Intelligence: leads to its page and waitlist. Joining adds it to the menu under Coming Soon."],
      [["50s"], "A brand engagement opportunity: a market research survey worth 500 credits."],
      [["75s"], "Synergy Intelligence: leads to its page and waitlist. Joining adds it to the menu under Coming Soon."],
    ],
  },
  {
    title: "Other messages",
    rows: [
      [["First artefact"], "With a Learner Pass or the Integrated Program, submitting your first artefact brings a paid gig offer from a client. Say yes and it waits for you under Paid Gigs, free to pick up."],
    ],
  },
  {
    title: "Checkout",
    intro: "No money changes hands. Payment details are only checked for shape and never kept.",
    rows: [
      [["UPI"], "Any ID shaped like name@bank."],
      [["Card"], "Any 12 to 19 digit number, a future expiry (MM / YY), any 3 or 4 digit CVV and a name."],
      [["Net banking"], "Pick any bank."],
    ],
  },
  {
    title: "Starting over",
    rows: [[["Reload"], "Everything lives in memory: reloading the page signs you out and starts fresh."]],
  },
];

function openInstructions() {
  openOverlay(`
    <aside class="drawer instructions" role="dialog" aria-modal="true" aria-labelledby="instructions-title">
      <header class="drawer__head"><button type="button" data-close aria-label="Close"><img src="${G}drawer-close.svg" alt="" /></button><h2 id="instructions-title">Instructions</h2></header>
      <div class="drawer__body">${INSTRUCTIONS.map((s) => `
        <section class="instructions__section">
          <h3>${s.title}</h3>
          ${s.intro ? `<p class="instructions__intro">${s.intro}</p>` : ""}
          <dl class="instructions__list">${s.rows.map(([keys, text]) => `
            <div class="instructions__row">
              <dt>${keys.map((k) => `<kbd>${esc(k)}</kbd>`).join(`<span aria-hidden="true">+</span>`)}</dt>
              <dd>${text}</dd>
            </div>`).join("")}</dl>
        </section>`).join("")}
      </div>
    </aside>`, "drawer");
}
document.querySelector("[data-instructions]").addEventListener("click", openInstructions);
