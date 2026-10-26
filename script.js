const projects = [
  { slug: 'scope-di', name: 'Scope DI', url: 'https://scopedi.com.au', country: 'Australia', platform: 'WordPress · Elementor', cat: 'business', type: 'Logistics', desc: 'Corporate website for an Australia-wide logistics network covering road, air and warehousing freight.' },
  { slug: 'champion-sports', name: 'Champion Sports', url: 'https://championsports.pk', country: 'Pakistan', platform: 'WooCommerce', cat: 'ecommerce', type: 'Sports Retail', desc: 'Online store for cricket equipment and sportswear, with custom team wear quotes and worldwide shipping.' },
  { slug: 'teamlife', name: 'TeamLife', url: 'https://teamlife.au', country: 'Australia', platform: 'WordPress · Elementor', cat: 'business', type: 'SaaS / Wellbeing', desc: 'Product website for a workplace psychosocial safety platform, built to explain the system and capture leads.' },
  { slug: 'rebellious-menswear', name: 'Rebellious Menswear', url: 'https://rebelliousmenswear.com', country: 'Pakistan', platform: 'WooCommerce', cat: 'ecommerce', type: 'Fashion', desc: 'Fashion store for men\'s eastern wear, with collection navigation and a mobile-first shopping experience.' },
  { slug: 'secure-roofing', name: 'Secure Roofing', url: 'https://secureroofing.com.au', country: 'Australia', platform: 'WordPress · Elementor', cat: 'business', type: 'Trades', desc: 'Lead-generation website for a roof restoration company, with service areas and click-to-call.' },
  { slug: 'crafted-room-rentals', name: 'Crafted Room Rentals', url: 'https://craftedroomrentals.com.au', country: 'Australia', platform: 'WordPress · Elementor', cat: 'business', type: 'Real Estate', desc: 'Elegant landing website for a guaranteed-rent property leasing business.' },
  { slug: 'saafnsafe', name: 'SaafnSafe', url: 'https://saafnsafe.com', country: 'Pakistan', platform: 'WooCommerce', cat: 'ecommerce', type: 'FMCG', desc: 'Online store for household cleaning products, with delivery across Pakistan.' },
  { slug: 'sea-wolves-howl', name: 'Sea Wolves Howl', url: 'https://seawolveshowl.au', country: 'Australia', platform: 'WordPress · Elementor', cat: 'business', type: 'Arts & Events', desc: 'Website for a live performance project, with tour dates, artist profiles and a fundraiser.' },
  { slug: 'fixo', name: 'Fixo by SRC', url: 'https://fixo.com.pk', country: 'Pakistan', platform: 'WooCommerce', cat: 'ecommerce', type: 'Industrial', desc: 'Product catalog and online store for a brand of adhesive solutions.' },
  { slug: 'chrysten4fkn', name: 'Chrysten Abraham', url: 'https://chrysten4fkn.com', country: 'Australia', platform: 'WordPress · Elementor', cat: 'business', type: 'Campaign', desc: 'Campaign website for an independent candidate, with policies, a volunteer sign-up and donations.' },
  { slug: 'rapture-play', name: 'Rapture Play', url: 'https://raptureplay.com', country: 'Global', platform: 'WordPress · Divi', cat: 'business', type: 'Game Studio', desc: 'Playful website for a game development studio, showcasing its latest games.' },
];

const grid = document.getElementById('projects');
grid.innerHTML = projects.map((p, i) => `
  <a class="project reveal" href="${p.url}" target="_blank" rel="noopener" data-cat="${p.cat}">
    <div class="p-thumb">
      <div class="p-bar"><i></i><i></i><i></i><span>${p.url.replace('https://', '')}</span></div>
      <div class="p-img"><img src="assets/projects/${p.slug}.jpg" alt="${p.name} website developed by Hamza Mushtaq" loading="lazy" width="1200" height="750"></div>
    </div>
    <div class="p-body">
      <div class="p-top"><span class="p-num">${String(i + 1).padStart(2, '0')}</span><span class="p-type">${p.type}</span></div>
      <h3>${p.name}<svg class="ico"><use href="#i-arrow"/></svg></h3>
      <p>${p.desc}</p>
      <span class="p-platform">${p.platform}</span>
    </div>
  </a>`).join('') + `
  <a class="project project-cta reveal" href="#contact" data-cat="all">
    <span class="s-ico"><svg class="ico"><use href="#i-arrow"/></svg></span>
    <h3>Your project could be next</h3>
    <p>Need a website or online store like these? Let's talk about what you want to build.</p>
    <span class="btn btn-primary btn-sm">Start a Project</span>
  </a>`;

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
