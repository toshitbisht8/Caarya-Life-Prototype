// Hidden demo shortcuts: stand in for a community mentor, who grades in the real product.
// Not shown anywhere in the UI. Ignored while typing in a field.
//   Shift+A  grade every artefact awaiting verification (Desk / session)
//   Shift+D  grade the final deliverable (asset) awaiting verification
//   Shift+S  rate every technical skill awaiting verification (Competencies)
//   Shift+M  all of the above
//   Shift+C  cycle the career stage C1 → C5 (stage-specific copy, recommended constructs, progression)
const mentorLevel = (max) => 2 + Math.floor(Math.random() * (max - 2)); // a plausible grade: L2 up to L(max-1)

function gradeArtefacts() {
  let n = 0;
  Object.values(state.deskData).forEach((p) => Object.values(p.vcs).forEach((v) => v.artefacts.forEach((a) => {
    if (!a.level) { a.level = mentorLevel(5); a.status = "graded"; n++; }
  })));
  return n;
}
function gradeAssets() {
  let n = 0;
  Object.values(state.deskData).forEach((p) => {
    if (p.final && !p.final.level) { p.final.level = mentorLevel(5); p.final.status = "graded"; n++; }
  });
  return n;
}
function rateSkills() {
  const pending = state.techSkills.filter((s) => s.status === "pending");
  pending.forEach((s) => { s.status = "verified"; s.level = mentorLevel(5); });
  return pending.length;
}

const MENTOR_KEYS = {
  A: () => [["artefact", gradeArtefacts()]],
  D: () => [["deliverable", gradeAssets()]],
  S: () => [["technical skill", rateSkills()]],
  M: () => [["artefact", gradeArtefacts()], ["deliverable", gradeAssets()], ["technical skill", rateSkills()]],
};

document.addEventListener("keydown", (e) => {
  if (e.key === "C" && e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey && !e.repeat && !e.target.closest("input, textarea, select, [contenteditable]")) {
    state.careerStage = (state.careerStage % 5) + 1;
    render();
    return showToast(`Career stage: C${state.careerStage} ${CAREER_STAGES[state.careerStage - 1][0]}`);
  }
  const run = MENTOR_KEYS[e.key];
  if (!run || !e.shiftKey || e.ctrlKey || e.altKey || e.metaKey || e.repeat) return;
  if (e.target.closest("input, textarea, select, [contenteditable]")) return;
  const done = run().filter(([, n]) => n);
  if (!done.length) return showToast("Mentor: nothing is waiting for review");
  render();
  showToast(`Mentor graded ${done.map(([what, n]) => `${n} ${what}${n > 1 ? "s" : ""}`).join(", ")}`);
});
