const grid = document.getElementById('projects');

// Project filters
document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach(c => { c.classList.remove('active'); c.setAttribute('aria-pressed', 'false'); });
    chip.classList.add('active');
    chip.setAttribute('aria-pressed', 'true');
    const f = chip.dataset.filter;
    grid.querySelectorAll('.project').forEach(el => { el.hidden = f !== 'all' && el.dataset.cat !== f && el.dataset.cat !== 'all'; });
  });
});

// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const closeMenu = () => { navLinks.classList.remove('open'); menuBtn.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); };
menuBtn.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuBtn.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', open);
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

// Back to top
document.querySelectorAll('.js-top').forEach(el => el.addEventListener('click', e => {
  e.preventDefault();
  closeMenu();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}));
const toTop = document.getElementById('toTop');
const nav = document.getElementById('nav');
const onScroll = () => {
  toTop.classList.toggle('show', window.scrollY > 600);
  nav.classList.toggle('scrolled', window.scrollY > 10);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Theme toggle
document.getElementById('themeBtn').addEventListener('click', () => {
  const root = document.documentElement;
  const current = root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const next = current === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
});

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
  }), { rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}

// Contact form: send via WhatsApp or email
const form = document.getElementById('contactForm');
const formError = document.getElementById('formError');
form.addEventListener('submit', e => {
  e.preventDefault();
  const via = e.submitter ? e.submitter.dataset.via : 'whatsapp';
  const d = Object.fromEntries(new FormData(form));
  if (!d.name.trim() || !d.message.trim()) {
    formError.textContent = 'Please add your name and a few details about your project.';
    return;
  }
  formError.textContent = '';
  const text = `Hi Hamza,\n\nName: ${d.name}${d.email ? `\nEmail: ${d.email}` : ''}\nProject type: ${d.type}\n\n${d.message}`;
  if (via === 'email') {
    window.location.href = `mailto:hm136890@gmail.com?subject=${encodeURIComponent(`New project inquiry: ${d.type}`)}&body=${encodeURIComponent(text)}`;
  } else {
    window.open(`https://wa.me/923125705808?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  }
});

document.getElementById('year').textContent = new Date().getFullYear();
