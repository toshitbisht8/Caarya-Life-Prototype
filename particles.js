// Particle wave for the auth hero and the focus session, adapted from https://codepen.io/stufreen/pen/KOWKBw
// Sizes are in "view heights" of the canvas, so the wave scales with the band it sits in.
function initParticles(canvas, COLOUR) {
  const NUM_PARTICLES = 600;
  const PARTICLE_SIZE = 0.5; // % of canvas height
  const SPEED = 20000; // ms for one pass across

  function randomNormal(mean, dev) {
    let r, a, n;
    do {
      a = 2 * Math.random() - 1;
      n = 2 * Math.random() - 1;
      r = a * a + n * n;
    } while (r >= 1);
    return dev * a * Math.sqrt((-2 * Math.log(r)) / r) + mean;
  }
  const rand = (low, high) => Math.random() * (high - low) + low;

  function createParticle() {
    return {
      diameter: Math.max(0, randomNormal(PARTICLE_SIZE, PARTICLE_SIZE / 2)),
      duration: randomNormal(SPEED, SPEED * 0.1),
      amplitude: randomNormal(16, 2),
      offsetY: randomNormal(0, 10),
      startTime: performance.now() - rand(0, SPEED),
      colour: `rgba(${COLOUR}, ${rand(0, 1)})`,
    };
  }

  const ctx = canvas.getContext("2d");
  const particles = Array.from({ length: NUM_PARTICLES }, createParticle);
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function resize() {
    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
  }

  function draw(time) {
    const { width, height } = canvas;
    const vh = height / 100;
    ctx.clearRect(0, 0, width, height);
    for (const p of particles) {
      const progress = ((time - p.startTime) % p.duration) / p.duration;
      const y = Math.sin(progress * Math.PI * 2) * p.amplitude + p.offsetY;
      ctx.fillStyle = p.colour;
      ctx.beginPath();
      ctx.arc(progress * width, y * vh + height / 2, p.diameter * vh, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function loop(time) {
    // Skip drawing while its screen is hidden (display: none gives no layout box).
    if (canvas.offsetParent !== null && !reduceMotion.matches) draw(time);
    requestAnimationFrame(loop);
  }

  new ResizeObserver(() => {
    resize();
    draw(performance.now()); // also paints the static frame for reduced motion
  }).observe(canvas);
  requestAnimationFrame(loop);
}

initParticles(document.querySelector(".hero__particles"), "51, 214, 225");
