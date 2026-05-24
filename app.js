
let dark = true;

const sunIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
const moonIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;

function toggleTheme() {
  dark = !dark;
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  document.getElementById('themeIcon').innerHTML  = dark ? sunIcon : moonIcon;
  document.getElementById('themeLabel').textContent = dark ? 'Light' : 'Dark';
}


const typewriterEl = document.getElementById('typewriter');
const fullText = "Building scalable, secure cloud infrastructure using AWS, Kubernetes & CI/CD pipelines that ship faster and break less.";
let charIndex = 0;

function type() {
  if (charIndex <= fullText.length) {
    typewriterEl.textContent = fullText.slice(0, charIndex);
    charIndex++;
    const delay = charIndex < 20 ? 60 : charIndex % 8 === 0 ? 80 : 28;
    setTimeout(type, delay);
  }
}
window.addEventListener('load', () => setTimeout(type, 700));


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
  { threshold: 0.07, rootMargin: '0px 0px -50px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));


document.querySelectorAll('.project-card, .contact-item, .badge, .skill-pill, .project-link')
  .forEach(el => el.style.touchAction = 'manipulation');


const homeBtn = document.querySelector('.dock-btn[href="#top"]');

window.addEventListener('scroll', () => {
  if (window.scrollY < 80) {
    homeBtn.style.color = 'var(--accent)';
  } else {
    homeBtn.style.color = '';
  }
});

homeBtn.style.color = 'var(--accent)';
