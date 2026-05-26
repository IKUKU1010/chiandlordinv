/* ==========================================================================
   CHILORDINV — Site behaviour
   Requires: data.js loaded first
   ========================================================================== */

/* ---------- Helpers ---------- */
const $  = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
const formatNaira = n => "₦" + n.toLocaleString();
const waLink = msg => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg || CONFIG.whatsappMessage)}`;
const escapeHtml = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* SVG icons — minimal Lucide-style line icons */
const ICON = {
  leaf:      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19.2 2.96a1 1 0 0 1 1.6.8c0 5.65-1.78 13.24-12.8 16.24"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>',
  sparkles:  '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>',
  heart:     '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5L12 21z"/></svg>',
  truck:     '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>',
  shield:    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>',
  card:      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>',
  truckSm:   '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>',
  copy:      '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>',
  check:     '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  x:         '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  chevDown:  '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
  chevLeft:  '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',
  chevLeftL: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',
  chevRightL:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',
  menu:      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
  mail:      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  phone:     '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  pin:       '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>',
  message:   '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  send:      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>',
  wa:        '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>',
  facebook:  '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
  instagram: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>',
  youtube:   '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>',
  tiktok:    '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z"/></svg>',
  cart:      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>',
  cartBig:   '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>',
  search:    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  plus:      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  minus:     '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  trash:     '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  clock:     '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
};

/* ---------- NAV + FOOTER injected on every page ---------- */
function buildNav(active, pathPrefix = "") {
  const p = pathPrefix; // "" for root pages, "../" for sub-pages
  const link = (slug, label) => {
    if (slug === "home") return `<a href="${p}index.html" class="${active === "home" ? "active" : ""}">${label}</a>`;
    if (slug === "shop") return `<a href="${p}shop.html" class="${active === "shop" || active === "category" ? "active" : ""}">${label}</a>`;
    if (slug === "services") return `<a href="${p}services.html" class="${active === "services" || active === "service" ? "active" : ""}">${label}</a>`;
    if (slug === "about") return `<a href="${p}about.html" class="${active === "about" ? "active" : ""}">${label}</a>`;
    if (slug === "contact") return `<a href="${p}contact.html" class="${active === "contact" ? "active" : ""}">${label}</a>`;
    if (slug === "blog") return `<a href="${p}blog.html" class="${active === "blog" || active === "blogpost" ? "active" : ""}">${label}</a>`;
  };

  const productsDropdown = `
    <div class="has-dropdown">
      <a href="${p}shop.html" class="nav-btn ${active === "shop" || active === "category" ? "active" : ""}">Products ${ICON.chevDown}</a>
      <div class="dropdown">
        <a href="${p}shop.html" class="primary">Browse all products →</a>
        <div class="dropdown-sep"></div>
        ${CATEGORIES.map(c => `<a href="${p}products/${c.slug}.html"><span class="dropdown-icon">${ICON[c.icon]}</span>${c.name}</a>`).join("")}
      </div>
    </div>`;

  const servicesDropdown = `
    <div class="has-dropdown">
      <a href="${p}services.html" class="nav-btn ${active === "services" || active === "service" ? "active" : ""}">Services ${ICON.chevDown}</a>
      <div class="dropdown">
        <a href="${p}services.html" class="primary">All services →</a>
        <div class="dropdown-sep"></div>
        ${SERVICES.map(s => `<a href="${p}services/${s.slug}.html">${s.name}</a>`).join("")}
      </div>
    </div>`;

  return `
    <header class="nav">
      <div class="container nav-inner">
        <a href="${p}index.html" class="logo">
          <span class="logo-mark">${ICON.leaf}</span>
          <span class="logo-text">
            <span class="logo-name">${CONFIG.brand}</span>
            <span class="logo-sub">Organic · Wellness</span>
          </span>
        </a>
        <nav class="nav-links">
          ${link("home", "Home")}
          ${productsDropdown}
          ${servicesDropdown}
          ${link("blog", "Blog")}
          ${link("about", "About")}
          ${link("contact", "Contact")}
        </nav>
        <div class="nav-icons">
          <button class="nav-icon-btn" id="searchToggle" aria-label="Search">${ICON.search}</button>
          <button class="nav-icon-btn" id="cartToggle" aria-label="Cart">
            ${ICON.cart}
            <span class="cart-count empty" id="cartCount">0</span>
          </button>
          <button class="nav-mobile-btn" id="navToggle" aria-label="Menu">${ICON.menu}</button>
        </div>
      </div>
      <div class="container nav-mobile" id="navMobile">
        ${link("home", "Home")}
        <details>
          <summary>Products ${ICON.chevDown}</summary>
          <a href="${p}shop.html"><strong>All products →</strong></a>
          ${CATEGORIES.map(c => `<a href="${p}products/${c.slug}.html">— ${c.name}</a>`).join("")}
        </details>
        <details>
          <summary>Services ${ICON.chevDown}</summary>
          <a href="${p}services.html"><strong>All services →</strong></a>
          ${SERVICES.map(s => `<a href="${p}services/${s.slug}.html">— ${s.name}</a>`).join("")}
        </details>
        ${link("blog", "Blog")}
        ${link("about", "About")}
        ${link("contact", "Contact")}
      </div>
    </header>`;
}

function buildFooter(pathPrefix = "") {
  const p = pathPrefix;
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <h3>${CONFIG.brand}</h3>
            <p>${CONFIG.tagline}</p>
            <div class="footer-socials">
              <a href="${CONFIG.socials.facebook}"  target="_blank" rel="noreferrer" aria-label="Facebook">${ICON.facebook}</a>
              <a href="${CONFIG.socials.instagram}" target="_blank" rel="noreferrer" aria-label="Instagram">${ICON.instagram}</a>
              <a href="${CONFIG.socials.tiktok}"    target="_blank" rel="noreferrer" aria-label="TikTok">${ICON.tiktok}</a>
              <a href="${CONFIG.socials.youtube}"   target="_blank" rel="noreferrer" aria-label="YouTube">${ICON.youtube}</a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Shop</h4>
            <ul>
              ${CATEGORIES.map(c => `<li><a href="${p}products/${c.slug}.html">${c.name}</a></li>`).join("")}
            </ul>
          </div>
          <div class="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="${p}about.html">About</a></li>
              <li><a href="${p}services.html">Services</a></li>
              <li><a href="${p}blog.html">Blog</a></li>
              <li><a href="${p}contact.html">Contact</a></li>
              <li><a href="mailto:${CONFIG.email}">${CONFIG.email}</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <div> © 2026 Chiandlordinv ·                   Powered by GewenchiTech</div>
          <div class="legal">
            <a href="${CONFIG.legal.privacy}"    target="_blank" rel="noreferrer">Privacy policy</a>
            <a href="${CONFIG.legal.disclaimer}" target="_blank" rel="noreferrer">Disclaimer</a>
            <a href="${CONFIG.legal.terms}"      target="_blank" rel="noreferrer">Terms</a>
          </div>
        </div>
      </div>
    </footer>`;
}

function buildFloats() {
  return `
    <a class="wa-float" href="${waLink()}" target="_blank" rel="noreferrer" aria-label="WhatsApp">${ICON.wa}</a>
    <button class="chatbot-float" id="chatbotToggle" aria-label="Open chat">${ICON.message}</button>
    <aside class="chatbot-panel" id="chatbotPanel" aria-label="Chat with Chichi">
      <div class="chatbot-head">
        <div class="chatbot-avatar">${ICON.leaf}</div>
        <div>
          <div class="chatbot-title">Chichi</div>
          <div class="chatbot-sub">Usually replies instantly</div>
        </div>
      </div>
      <div class="chatbot-msgs" id="chatMsgs"></div>
      <div class="chatbot-input">
        <input id="chatInput" placeholder="Ask a question..." />
        <button id="chatSend" aria-label="Send">${ICON.send}</button>
      </div>
    </aside>

    <!-- Search overlay -->
    <div class="search-overlay" id="searchOverlay" aria-label="Search">
      <div class="search-bar">
        ${ICON.search}
        <input id="searchInput" placeholder="Search products, categories, blog posts..." autocomplete="off">
        <button class="cart-close" id="searchClose" aria-label="Close">${ICON.x}</button>
      </div>
      <div class="search-results" id="searchResults">
        <div class="search-hint">Try "coconut oil", "Longrich", "CBD", or "delivery"…</div>
      </div>
    </div>

    <!-- Cart drawer -->
    <div class="cart-backdrop" id="cartBackdrop"></div>
    <aside class="cart-drawer" id="cartDrawer" aria-label="Shopping cart">
      <div class="cart-head">
        <h2>Your cart</h2>
        <button class="cart-close" id="cartClose" aria-label="Close">${ICON.x}</button>
      </div>
      <div class="cart-items" id="cartItems"></div>
      <div class="cart-foot" id="cartFoot" style="display:none">
        <div class="cart-subtotal">
          <span class="label">Subtotal</span>
          <span class="total" id="cartTotal">₦0</span>
        </div>
        <div class="cart-checkout">
          <a class="btn btn-wa" id="cartWaBtn" target="_blank" rel="noreferrer">Checkout on WhatsApp</a>
          <a class="btn btn-secondary" id="cartEmailBtn">Email order</a>
        </div>
        <p class="cart-foot-note">No payment is taken on this site. We'll confirm your order and share payment details.</p>
      </div>
    </aside>`;
}

/* ---------- Mount nav / footer / floats / modal ---------- */
function mountLayout({ active, pathPrefix = "" }) {
  const navHost = $("#nav-host");
  const footHost = $("#footer-host");
  if (navHost) navHost.innerHTML = buildNav(active, pathPrefix);
  if (footHost) footHost.innerHTML = buildFooter(pathPrefix);

  // floats
  const floatHost = document.createElement("div");
  floatHost.innerHTML = buildFloats();
  document.body.appendChild(floatHost);

  // modal host
  const modalHost = document.createElement("div");
  modalHost.className = "modal";
  modalHost.id = "productModal";
  modalHost.innerHTML = '<div class="modal-inner"><div class="modal-card" id="modalCard"></div></div>';
  document.body.appendChild(modalHost);

  initMobileNav();
  initChatbot();
  initModal();
  initCart(pathPrefix);
  initSearch(pathPrefix);
}

/* ---------- Mobile nav ---------- */
function initMobileNav() {
  const btn = $("#navToggle");
  const menu = $("#navMobile");
  if (!btn || !menu) return;
  btn.addEventListener("click", () => menu.classList.toggle("open"));
}

/* ---------- Product modal ---------- */
function initModal() {
  const modal = $("#productModal");
  modal.addEventListener("click", e => {
    if (e.target === modal || e.target === $(".modal-inner", modal)) closeModal();
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
}

function openProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const cat = CATEGORIES.find(c => c.slug === p.category);
  const card = $("#modalCard");
  card.innerHTML = `
    <button class="modal-close" aria-label="Close" onclick="closeModal()">${ICON.x}</button>
    <div class="modal-grid">
      <div class="modal-img"><img src="${p.img}" alt="${escapeHtml(p.name)}"></div>
      <div class="modal-info">
        <div class="eyebrow">${cat ? escapeHtml(cat.name) : ""}</div>
        <h2 class="display">${escapeHtml(p.name)}</h2>
        <div class="price">${formatNaira(p.price)}</div>
        <span class="stock-badge ${p.stock === "Low stock" ? "stock-low" : "stock-in"}">${p.stock}</span>
        <p class="desc">${escapeHtml(p.desc)}</p>

        <div class="info-block">
          <div class="info-block-head">${ICON.card} Payment</div>
          <div class="info-block-row"><span class="label">Bank:</span> <strong>${escapeHtml(CONFIG.payment.bankName)}</strong></div>
          <div class="info-block-row"><span class="label">Account name:</span> <strong>${escapeHtml(CONFIG.payment.accountName)}</strong></div>
          <div class="info-block-row"><span class="label">Account no:</span> <strong>${escapeHtml(CONFIG.payment.accountNumber)}</strong>
            <button class="copy-btn" onclick="copyAcc(this)">${ICON.copy} Copy</button>
          </div>
          <div class="info-block-row" style="margin-top:6px"><span style="opacity:0.7;font-size:11px">${escapeHtml(CONFIG.payment.other)}</span></div>
        </div>

        <div class="info-block">
          <div class="info-block-head">${ICON.truckSm} Delivery</div>
          <div class="info-block-row"><span class="label">Lagos:</span> ${escapeHtml(CONFIG.delivery.lagos)}</div>
          <div class="info-block-row"><span class="label">Nigeria:</span> ${escapeHtml(CONFIG.delivery.nigeria)}</div>
          <div class="info-block-row"><span class="label">International:</span> ${escapeHtml(CONFIG.delivery.international)}</div>
        </div>

        <div class="modal-actions">
          <button class="btn btn-cart" onclick="addToCart('${p.id}'); closeModal(); openCart();">${ICON.cart} Add to cart</button>
          <a class="btn btn-wa" href="${waLink(`Hi! I'd like to order: ${p.name} (${formatNaira(p.price)}). Please confirm availability.`)}" target="_blank" rel="noreferrer">Order on WhatsApp</a>
          <a class="btn btn-secondary" href="mailto:${CONFIG.email}?subject=Order: ${encodeURIComponent(p.name)}&body=${encodeURIComponent(`Hi, I'd like to order:\n\n${p.name}\nPrice: ${formatNaira(p.price)}\n\nMy delivery address:\n`)}">Email order</a>
        </div>
      </div>
    </div>`;
  $("#productModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  $("#productModal").classList.remove("open");
  document.body.style.overflow = "";
}

function copyAcc(btn) {
  navigator.clipboard?.writeText(CONFIG.payment.accountNumber);
  btn.innerHTML = ICON.check + " Copied";
  setTimeout(() => { btn.innerHTML = ICON.copy + " Copy"; }, 2000);
}

window.openProduct = openProduct;
window.closeModal = closeModal;
window.copyAcc = copyAcc;

/* ---------- Render helpers ---------- */
function renderProductCard(p) {
  return `
    <button class="product-card" onclick="openProduct('${p.id}')">
      <div class="img-wrap"><img src="${p.img}" alt="${escapeHtml(p.name)}" loading="lazy"></div>
      <div class="name">${escapeHtml(p.name)}</div>
      <div class="price">${formatNaira(p.price)}</div>
    </button>`;
}

function renderProductGrid(targetId, products) {
  const el = $("#" + targetId);
  if (!el) return;
  el.innerHTML = products.map(renderProductCard).join("");
}

/* ---------- Slideshow (category subpages) ---------- */
function initSlideshow(products) {
  const root = $("#slideshow");
  if (!root) return;
  let idx = 0;
  const render = () => {
    const p = products[idx];
    root.innerHTML = `
      <div class="slideshow-grid">
        <div class="slideshow-img">
          <img src="${p.img}" alt="${escapeHtml(p.name)}">
          <button class="slideshow-arrow prev" aria-label="Previous">${ICON.chevLeftL}</button>
          <button class="slideshow-arrow next" aria-label="Next">${ICON.chevRightL}</button>
        </div>
        <div class="slideshow-info">
          <div class="eyebrow">Featured · ${idx + 1} of ${products.length}</div>
          <h3 class="display">${escapeHtml(p.name)}</h3>
          <p class="desc">${escapeHtml(p.desc)}</p>
          <div class="price">${formatNaira(p.price)}</div>
          <button class="btn btn-primary" onclick="openProduct('${p.id}')" style="align-self:flex-start">View details & buy</button>
          <div class="slideshow-dots">
            ${products.map((_, i) => `<button data-i="${i}" class="${i === idx ? "active" : ""}" aria-label="Slide ${i + 1}"></button>`).join("")}
          </div>
        </div>
      </div>`;
    $(".slideshow-arrow.prev", root).onclick = () => { idx = (idx - 1 + products.length) % products.length; render(); };
    $(".slideshow-arrow.next", root).onclick = () => { idx = (idx + 1) % products.length; render(); };
    $$(".slideshow-dots button", root).forEach(b => b.onclick = () => { idx = parseInt(b.dataset.i, 10); render(); });
  };
  render();
  // Auto-advance
  setInterval(() => { idx = (idx + 1) % products.length; render(); }, 6000);
}

/* ---------- View toggle on category pages ---------- */
function initCategoryView(products) {
  const slideshowEl = $("#slideshow");
  const gridEl = $("#categoryGrid");
  const toggles = $$(".view-toggle .switch button");
  if (!toggles.length) return;
  toggles.forEach(t => {
    t.addEventListener("click", () => {
      toggles.forEach(x => x.classList.remove("active"));
      t.classList.add("active");
      const view = t.dataset.view;
      slideshowEl.style.display = view === "slideshow" ? "" : "none";
      gridEl.style.display = view === "grid" ? "" : "none";
    });
  });
  // Initial render
  initSlideshow(products);
  renderProductGrid("categoryGrid", products);
  gridEl.style.display = "none";
}

/* ---------- Contact form (EmailJS) ---------- */
function loadEmailJS() {
  return new Promise((resolve, reject) => {
    if (window.emailjs) return resolve(window.emailjs);
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    s.onload = () => {
      window.emailjs.init({ publicKey: CONFIG.emailjs.publicKey });
      resolve(window.emailjs);
    };
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

function initContactForm() {
  const form = $("#contactForm");
  if (!form) return;
  const status = $("#contactStatus");
  const btn = $("#contactSubmit");
  form.addEventListener("submit", async e => {
    e.preventDefault();
    btn.disabled = true; btn.textContent = "Sending...";
    status.className = ""; status.textContent = "";
    try {
      const emailjs = await loadEmailJS();
      const data = new FormData(form);
      await emailjs.send(CONFIG.emailjs.serviceId, CONFIG.emailjs.templateId, {
        from_name:  data.get("name"),
        from_email: data.get("email"),
        subject:    data.get("subject") || "New message from Chilordinv site",
        message:    data.get("message"),
        to_email:   CONFIG.email,
      });
      status.className = "status-msg status-success";
      status.textContent = "✓ Thanks — your message is on its way. We'll reply within 24 hours.";
      form.reset();
    } catch (err) {
      console.error(err);
      status.className = "status-msg status-error";
      status.textContent = `Something went wrong sending the message. Please WhatsApp us at +${CONFIG.whatsapp} or email ${CONFIG.email} directly.`;
    } finally {
      btn.disabled = false; btn.textContent = "Send message";
    }
  });
}

/* ---------- Chatbot ---------- */
function initChatbot() {
  const toggle = $("#chatbotToggle");
  const panel = $("#chatbotPanel");
  const msgs = $("#chatMsgs");
  const input = $("#chatInput");
  const send = $("#chatSend");
  if (!toggle || !panel) return;

  let opened = false;
  const greet = () => {
    msgs.innerHTML = `<div class="msg bot">Hi! I'm Chichi 🌿 — Chilordinv's assistant. Ask me anything about our products, delivery, or payment.</div>`;
    const sugBox = document.createElement("div");
    sugBox.className = "chatbot-suggestions";
    sugBox.innerHTML = `<div class="label">Try asking</div>`;
    ["How do I pay?", "How long is delivery?", "Is CBD legal in Nigeria?", "Are Longrich products authentic?"].forEach(q => {
      const b = document.createElement("button");
      b.textContent = q;
      b.onclick = () => { input.value = q; submit(); };
      sugBox.appendChild(b);
    });
    msgs.appendChild(sugBox);
  };

  const findAnswer = q => {
    const lower = q.toLowerCase();
    const stop = ["the","a","an","is","are","do","you","what","how","your","i","to","of","in","on","for"];
    const words = lower.split(/\W+/).filter(w => w.length > 2 && !stop.includes(w));
    let best = null, bestScore = 0;
    FAQS.forEach(f => {
      const text = (f.q + " " + f.a).toLowerCase();
      const score = words.reduce((s, w) => s + (text.includes(w) ? 1 : 0), 0);
      if (score > bestScore) { bestScore = score; best = f; }
    });
    if (best && bestScore > 0) return best.a;
    return `I'm not sure about that one — but our team will know! WhatsApp us at +${CONFIG.whatsapp} or email ${CONFIG.email}.`;
  };

  const addMsg = (from, text) => {
    const sug = msgs.querySelector(".chatbot-suggestions");
    if (sug) sug.remove();
    const m = document.createElement("div");
    m.className = "msg " + from;
    m.textContent = text;
    msgs.appendChild(m);
    msgs.scrollTop = msgs.scrollHeight;
  };

  const submit = () => {
    const text = input.value.trim();
    if (!text) return;
    addMsg("user", text);
    input.value = "";
    setTimeout(() => addMsg("bot", findAnswer(text)), 300);
  };

  toggle.addEventListener("click", () => {
    panel.classList.toggle("open");
    if (!opened) { greet(); opened = true; }
    toggle.innerHTML = panel.classList.contains("open") ? ICON.x : ICON.message;
  });
  send.addEventListener("click", submit);
  input.addEventListener("keydown", e => { if (e.key === "Enter") submit(); });
}

/* ==========================================================================
   CART (persistent via localStorage, with in-memory fallback)
   ========================================================================== */
const CART_KEY = "chilordinv_cart_v1";

// In-memory fallback when localStorage is blocked (e.g. opening via file://, Safari private mode)
let _memCart = null;
function _hasLocalStorage() {
  try { localStorage.setItem("__test__", "1"); localStorage.removeItem("__test__"); return true; }
  catch { return false; }
}
const _useLS = (() => { try { return _hasLocalStorage(); } catch { return false; } })();

function readCart() {
  if (_useLS) {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
    catch { return []; }
  }
  return _memCart || [];
}
function writeCart(items) {
  if (_useLS) {
    try { localStorage.setItem(CART_KEY, JSON.stringify(items)); }
    catch { _memCart = items; }
  } else {
    _memCart = items;
  }
  updateCartBadge();
}

function addToCart(id, qty = 1) {
  const items = readCart();
  const existing = items.find(i => i.id === id);
  if (existing) existing.qty += qty;
  else items.push({ id, qty });
  writeCart(items);
  renderCart();
}

function setQty(id, qty) {
  let items = readCart();
  if (qty <= 0) items = items.filter(i => i.id !== id);
  else items = items.map(i => i.id === id ? { ...i, qty } : i);
  writeCart(items);
  renderCart();
}

function removeFromCart(id) { setQty(id, 0); }

function cartTotal() {
  return readCart().reduce((sum, i) => {
    const p = PRODUCTS.find(x => x.id === i.id);
    return sum + (p ? p.price * i.qty : 0);
  }, 0);
}

function cartCount() {
  return readCart().reduce((sum, i) => sum + i.qty, 0);
}

function updateCartBadge() {
  const badge = $("#cartCount");
  if (!badge) return;
  const n = cartCount();
  badge.textContent = n;
  badge.classList.toggle("empty", n === 0);
}

function renderCart() {
  const items = readCart();
  const itemsEl = $("#cartItems");
  const foot = $("#cartFoot");
  if (!itemsEl) return;

  if (items.length === 0) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        ${ICON.cartBig}
        <p style="margin-top:12px">Your cart is empty.</p>
        <p style="font-size:13px;margin-top:4px">Add a product to start your order.</p>
      </div>`;
    foot.style.display = "none";
    return;
  }

  itemsEl.innerHTML = items.map(i => {
    const p = PRODUCTS.find(x => x.id === i.id);
    if (!p) return "";
    return `
      <div class="cart-item">
        <img src="${p.img}" alt="${escapeHtml(p.name)}">
        <div class="cart-item-info">
          <div class="cart-item-name">${escapeHtml(p.name)}</div>
          <div class="cart-item-price">${formatNaira(p.price)} · ${formatNaira(p.price * i.qty)}</div>
          <div class="qty-row">
            <div class="qty-controls">
              <button onclick="setQty('${p.id}', ${i.qty - 1})" aria-label="Decrease">${ICON.minus}</button>
              <span class="qty-num">${i.qty}</span>
              <button onclick="setQty('${p.id}', ${i.qty + 1})" aria-label="Increase">${ICON.plus}</button>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart('${p.id}')">Remove</button>
          </div>
        </div>
      </div>`;
  }).join("");

  $("#cartTotal").textContent = formatNaira(cartTotal());
  foot.style.display = "";

  // Build checkout links with itemised order
  const lines = items.map(i => {
    const p = PRODUCTS.find(x => x.id === i.id);
    return `• ${i.qty} × ${p.name} — ${formatNaira(p.price * i.qty)}`;
  }).join("\n");
  const summary = `Hi! I'd like to place an order:\n\n${lines}\n\nSubtotal: ${formatNaira(cartTotal())}\n\nMy delivery address:\n`;
  $("#cartWaBtn").href = waLink(summary);
  $("#cartEmailBtn").href = `mailto:${CONFIG.email}?subject=${encodeURIComponent("New order from Chilordinv site")}&body=${encodeURIComponent(summary)}`;
}

function openCart() { $("#cartDrawer").classList.add("open"); $("#cartBackdrop").classList.add("open"); renderCart(); }
function closeCart() { $("#cartDrawer").classList.remove("open"); $("#cartBackdrop").classList.remove("open"); }

function initCart(pathPrefix) {
  const toggle = $("#cartToggle");
  if (!toggle) return;
  toggle.addEventListener("click", openCart);
  $("#cartClose").addEventListener("click", closeCart);
  $("#cartBackdrop").addEventListener("click", closeCart);
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeCart(); });
  updateCartBadge();
}

window.addToCart = addToCart;
window.setQty = setQty;
window.removeFromCart = removeFromCart;
window.openCart = openCart;
window.closeCart = closeCart;

/* ==========================================================================
   SEARCH (overlay)
   ========================================================================== */
function initSearch(pathPrefix) {
  const toggle = $("#searchToggle");
  const overlay = $("#searchOverlay");
  const close = $("#searchClose");
  const input = $("#searchInput");
  const results = $("#searchResults");
  if (!toggle) return;

  const open = () => {
    overlay.classList.add("open");
    setTimeout(() => input.focus(), 50);
  };
  const closeIt = () => { overlay.classList.remove("open"); input.value = ""; };

  toggle.addEventListener("click", open);
  close.addEventListener("click", closeIt);
  overlay.addEventListener("click", e => { if (e.target === overlay) closeIt(); });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && overlay.classList.contains("open")) closeIt();
    if ((e.ctrlKey || e.metaKey) && e.key === "k") { e.preventDefault(); open(); }
  });

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (!q) {
      results.innerHTML = `<div class="search-hint">Try "coconut oil", "Longrich", "CBD", or "delivery"…</div>`;
      return;
    }

    const matchProducts = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.category.includes(q)
    ).slice(0, 6);

    const matchCategories = CATEGORIES.filter(c =>
      c.name.toLowerCase().includes(q) || c.blurb.toLowerCase().includes(q)
    );

    const matchPosts = (typeof BLOG_POSTS !== "undefined" ? BLOG_POSTS : []).filter(b =>
      b.title.toLowerCase().includes(q) ||
      b.excerpt.toLowerCase().includes(q) ||
      b.tag.toLowerCase().includes(q)
    );

    const matchServices = SERVICES.filter(s =>
      s.name.toLowerCase().includes(q) || s.blurb.toLowerCase().includes(q)
    );

    if (!matchProducts.length && !matchCategories.length && !matchPosts.length && !matchServices.length) {
      results.innerHTML = `<div class="search-empty">No results for &ldquo;${escapeHtml(q)}&rdquo;.<br><br>Try fewer or different words, or WhatsApp us to ask directly.</div>`;
      return;
    }

    let html = "";
    if (matchProducts.length) {
      html += `<div class="search-section"><h3>Products</h3>${matchProducts.map(p => `
        <button class="search-item" onclick="closeSearch(); openProduct('${p.id}')">
          <img src="${p.img}" alt="">
          <div class="meta">
            <div class="name">${escapeHtml(p.name)}</div>
            <div class="sub">${formatNaira(p.price)} · ${CATEGORIES.find(c=>c.slug===p.category)?.name || ""}</div>
          </div>
        </button>`).join("")}</div>`;
    }
    if (matchCategories.length) {
      html += `<div class="search-section"><h3>Categories</h3>${matchCategories.map(c => `
        <a class="search-item" href="${pathPrefix}products/${c.slug}.html">
          <div style="width:48px;height:48px;border-radius:var(--r-sm);background:var(--bg-warm);display:flex;align-items:center;justify-content:center;color:var(--leaf)">${ICON[c.icon]}</div>
          <div class="meta">
            <div class="name">${escapeHtml(c.name)}</div>
            <div class="sub">${escapeHtml(c.blurb)}</div>
          </div>
        </a>`).join("")}</div>`;
    }
    if (matchPosts.length) {
      html += `<div class="search-section"><h3>Blog</h3>${matchPosts.map(b => `
        <a class="search-item" href="${pathPrefix}blog/${b.slug}.html">
          <img src="${b.cover}" alt="">
          <div class="meta">
            <div class="name">${escapeHtml(b.title)}</div>
            <div class="sub">${escapeHtml(b.tag)} · ${b.readTime}</div>
          </div>
        </a>`).join("")}</div>`;
    }
    if (matchServices.length) {
      html += `<div class="search-section"><h3>Services</h3>${matchServices.map(s => `
        <a class="search-item" href="${pathPrefix}services/${s.slug}.html">
          <img src="${s.img}" alt="">
          <div class="meta">
            <div class="name">${escapeHtml(s.name)}</div>
            <div class="sub">${escapeHtml(s.price)}</div>
          </div>
        </a>`).join("")}</div>`;
    }
    results.innerHTML = html;
  });

  window.closeSearch = closeIt;
}

/* ==========================================================================
   BLOG helpers
   ========================================================================== */
function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" });
  } catch { return iso; }
}

function renderBlogCard(b, pathPrefix = "") {
  return `
    <a class="blog-card" href="${pathPrefix}blog/${b.slug}.html">
      <div class="img-wrap"><img src="${b.cover}" alt="${escapeHtml(b.title)}" loading="lazy"></div>
      <div class="body">
        <div class="meta-row">
          <span>${escapeHtml(b.tag)}</span>
          <span class="dot"></span>
          <span>${b.readTime}</span>
        </div>
        <h3>${escapeHtml(b.title)}</h3>
        <p>${escapeHtml(b.excerpt)}</p>
      </div>
    </a>`;
}

function renderBlogPost(b) {
  const bodyHtml = b.body.map(block => {
    if (Array.isArray(block) && block[0] === "h") return `<h2>${escapeHtml(block[1])}</h2>`;
    return `<p>${escapeHtml(block)}</p>`;
  }).join("");
  return `
    <article>
      <div class="blog-post-hero">
        <a class="blog-back" href="../blog.html">${ICON.chevLeft} All articles</a>
        <div class="meta-row">
          <span>${escapeHtml(b.tag)}</span>
          <span class="dot" style="width:3px;height:3px;background:var(--leaf);border-radius:50%"></span>
          <span>${b.readTime}</span>
          <span class="dot" style="width:3px;height:3px;background:var(--leaf);border-radius:50%"></span>
          <span>${formatDate(b.date)}</span>
        </div>
        <h1 class="display">${escapeHtml(b.title)}</h1>
        <p class="excerpt">${escapeHtml(b.excerpt)}</p>
      </div>
      <div class="blog-cover"><img src="${b.cover}" alt=""></div>
      <div class="blog-body">${bodyHtml}<p style="margin-top:32px;color:var(--ink-3);font-size:14px">— ${escapeHtml(b.author)}</p></div>
    </article>`;
}

// Expose to window so inline page scripts can use them
window.$ = $;
window.$$ = $$;
window.ICON = ICON;
window.mountLayout = mountLayout;
window.formatNaira = formatNaira;
window.waLink = waLink;
window.renderProductCard = renderProductCard;
window.renderProductGrid = renderProductGrid;
window.initCategoryView = initCategoryView;
window.initContactForm = initContactForm;
window.renderBlogCard = renderBlogCard;
window.renderBlogPost = renderBlogPost;
