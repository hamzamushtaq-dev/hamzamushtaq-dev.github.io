const projects = [
  { slug: 'e-ozzie', name: 'E-Ozzie', url: 'https://eozzie.com.au', country: 'Australia', platform: 'Shopify', cats: ['ecommerce', 'shopify'], desc: 'Shopify store for an e-mobility retailer selling electric scooters, eBikes and eTrikes, with a large multi-category catalog.' },
  { slug: 'power-pillar', name: 'Powerpillar', url: 'https://powerpillar.co.uk', country: 'UK', platform: 'WordPress · Divi', cats: ['business'], desc: 'Corporate website for a London construction and renovation company, with service pages and a projects portfolio.' },
  { slug: 'scope-di', name: 'Scope DI', url: 'https://scopedi.com.au', country: 'Australia', platform: 'WordPress · Elementor', cats: ['business'], desc: 'Website for an Australia-wide logistics network covering road, air and warehousing freight.' },
  { slug: 'champion-sports', name: 'Champion Sports', url: 'https://championsports.pk', country: 'Pakistan', platform: 'WooCommerce', cats: ['ecommerce', 'woocommerce'], desc: 'WooCommerce store for cricket equipment and sportswear, with custom team wear quotes and worldwide shipping.' },
  { slug: 'spinpod360', name: 'SpinPod 360', url: 'https://spinpod360.com.au', country: 'Australia', platform: 'WordPress · Elementor', cats: ['business'], desc: 'Booking-focused website for a 360 photo booth hire service in Sydney, with packages, gallery and reviews.' },
  { slug: 'teamlife', name: 'TeamLife', url: 'https://teamlife.au', country: 'Australia', platform: 'WordPress · Elementor', cats: ['business'], desc: 'SaaS-style website for a workplace psychosocial safety and wellbeing platform.' },
  { slug: 'rebellious-menswear', name: 'Rebellious Menswear', url: 'https://rebelliousmenswear.com', country: 'Pakistan', platform: 'WooCommerce', cats: ['ecommerce', 'woocommerce'], desc: 'Fashion store for men\'s eastern wear: kurta pajama, sherwani and waistcoats.' },
  { slug: 'secure-roofing', name: 'Secure Roofing', url: 'https://secureroofing.com.au', country: 'Australia', platform: 'WordPress · Elementor', cats: ['business'], desc: 'Lead-generation website for a roof restoration company on the Mornington Peninsula.' },
  { slug: 'crafted-room-rentals', name: 'Crafted Room Rentals', url: 'https://craftedroomrentals.com.au', country: 'Australia', platform: 'WordPress · Elementor', cats: ['business'], desc: 'Elegant landing website for a guaranteed-rent property leasing business.' },
  { slug: 'sea-wolves-howl', name: 'Sea Wolves Howl', url: 'https://seawolveshowl.au', country: 'Australia', platform: 'WordPress · Elementor', cats: ['business'], desc: 'Website for a live performance project, with tour dates, artists and a fundraiser.' },
  { slug: 'saafnsafe', name: 'SaafnSafe', url: 'https://saafnsafe.com', country: 'Pakistan', platform: 'WooCommerce', cats: ['ecommerce', 'woocommerce'], desc: 'Online store for household cleaning products, with delivery across Pakistan.' },
  { slug: 'fixo', name: 'Fixo by SRC', url: 'https://fixo.com.pk', country: 'Pakistan', platform: 'WooCommerce', cats: ['ecommerce', 'woocommerce'], desc: 'Product catalog and online store for an adhesive solutions brand.' },
  { slug: 'chrysten4fkn', name: 'Chrysten Abraham', url: 'https://chrysten4fkn.com', country: 'Australia', platform: 'WordPress · Elementor', cats: ['business'], desc: 'Campaign website for an independent candidate, with policies, a volunteer sign-up and donations.' },
  { slug: 'rapture-play', name: 'Rapture Play', url: 'https://raptureplay.com', country: 'Global', platform: 'WordPress · Divi', cats: ['business'], desc: 'Playful website for a game development studio, showcasing its latest games.' },
];

const grid = document.getElementById('projects');
grid.innerHTML = projects.map(p => `
  <a class="project" href="${p.url}" target="_blank" rel="noopener" data-cats="${p.cats.join(' ')}">
    <div class="thumb"><img src="assets/projects/${p.slug}.jpg" alt="${p.name} website by Hamza Mushtaq" loading="lazy" width="1200" height="750"></div>
    <div class="p-body">
      <div class="p-meta"><span>${p.platform}</span><span>${p.country}</span></div>
      <h3>${p.name} <span class="arrow">↗</span></h3>
      <p>${p.desc}</p>
    </div>
  </a>`).join('');

document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    const f = chip.dataset.filter;
    grid.querySelectorAll('.project').forEach(el => {
      el.hidden = f !== 'all' && !el.dataset.cats.split(' ').includes(f);
    });
  });
});

const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();
