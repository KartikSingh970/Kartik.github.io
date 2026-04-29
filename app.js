/* ─── THEME TOGGLE ─────────────────────────────────────────── */
let dark = true;

function toggleTheme() {
  dark = !dark;
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  document.getElementById('themeIcon').textContent  = dark ? '☀️' : '🌙';
  document.getElementById('themeLabel').textContent = dark ? 'Light mode' : 'Dark mode';
}

/* ─── TYPEWRITER ───────────────────────────────────────────── */
const typewriterEl = document.getElementById('typewriter');
const fullText     = "Building scalable, secure cloud infrastructure using AWS, Kubernetes & CI/CD pipelines that ship faster and break less.";
let charIndex = 0;

function type() {
  if (charIndex <= fullText.length) {
    typewriterEl.textContent = fullText.slice(0, charIndex);
    charIndex++;
    setTimeout(type, charIndex < 30 ? 55 : 28); // slightly slower at the start
  }
}

// start typing after a short intro delay
window.addEventListener('load', () => setTimeout(type, 600));

/* ─── SCROLL REVEAL ────────────────────────────────────────── */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
