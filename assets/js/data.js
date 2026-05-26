/* ==========================================================================
   CHILORDINV — SITE CONFIG & DATA
   Edit this file to update site-wide info. No other file needs changing.
   ========================================================================== */

const CONFIG = {
  brand: "Chilordinv",
  tagline: "Powered by nature, crafted for wellness",
  email: "your-email@chilordinv.com",        // <-- your contact email
  whatsapp: "2348012345678",                  // <-- WhatsApp number, no '+'
  whatsappMessage: "Hi! I'm interested in your products.",

  socials: {
    facebook:  "https://facebook.com/chilordinv",
    instagram: "https://instagram.com/chilordinv",
    tiktok:    "https://tiktok.com/@chilordinv",
    youtube:   "https://youtube.com/@chilordinv",
  },

  payment: {
    bankName: "Your Bank Name",
    accountName: "Chilordinv Enterprises",
    accountNumber: "0123456789",
    other: "Card on delivery, USSD, or transfer accepted.",
  },

  delivery: {
    lagos: "1–2 business days · ₦2,000",
    nigeria: "3–5 business days · ₦3,500–₦5,000",
    international: "Contact us for quote",
  },

  // EmailJS — sign up free at https://www.emailjs.com, then paste your IDs here.
  // 1) Add an Email Service (Gmail/Outlook/etc) → copy Service ID
  // 2) Create an Email Template with variables {{from_name}}, {{from_email}}, {{subject}}, {{message}}, {{to_email}} → copy Template ID
  // 3) Account → API Keys → copy Public Key
  emailjs: {
    serviceId:  "YOUR_EMAILJS_SERVICE_ID",
    templateId: "YOUR_EMAILJS_TEMPLATE_ID",
    publicKey:  "YOUR_EMAILJS_PUBLIC_KEY",
  },

  // Legal PDFs (open in new tab). Paths are relative to site root.
  legal: {
    privacy:    "legal/chilordinv-privacy-policy.pdf",
    disclaimer: "legal/chilordinv-disclaimer.pdf",
    terms:      "legal/chilordinv-terms.pdf",
  },
};

const BLOG_POSTS = [
  {
    slug: "starting-cbd-the-right-way",
    title: "Starting CBD: a beginner's calm-and-careful guide",
    excerpt: "How to choose your first CBD product, find the right dose, and avoid the most common mistakes new users make.",
    cover: "https://images.unsplash.com/photo-1611242320536-f12d3541249b?w=1400&q=80",
    author: "The Chilordinv Team",
    date: "2026-04-22",
    readTime: "5 min read",
    tag: "CBD",
    body: [
      "If you've been curious about CBD but unsure where to start, you're not alone. Walk into any wellness conversation in Lagos right now and someone is asking the same question. Here is the short version of what we wish every first-time user knew.",
      ["h", "1. Start low, go slow"],
      "The cardinal rule of CBD. Begin with the lowest suggested dose for at least 5 to 7 days, then adjust upward only if needed. Your body's endocannabinoid system needs time to respond. Patience here saves money and prevents a bad first experience.",
      ["h", "2. Full-spectrum vs. broad-spectrum vs. isolate"],
      "Full-spectrum contains all the compounds from the hemp plant, including trace THC well below the legal threshold. Broad-spectrum keeps the supporting compounds but removes THC entirely. Isolate is just CBD. For most beginners, broad-spectrum is the safest and most predictable starting point.",
      ["h", "3. Match the format to the goal"],
      "Tinctures and oils kick in fastest (15–30 minutes) and let you dose precisely. Gummies and capsules take longer (60–90 minutes) but last longer and are easier to carry. Topicals like balms work locally — perfect for sore shoulders, not anxiety.",
      ["h", "4. Talk to your doctor first"],
      "CBD interacts with several medications, including blood thinners and some antidepressants. A two-minute conversation with your doctor before you start is always worth it.",
      "Ready to try? Our broad-spectrum capsules and full-spectrum oil are the most beginner-friendly options in our CBD range.",
    ],
  },
  {
    slug: "longrich-is-it-worth-it",
    title: "Longrich, honestly: what's actually worth buying",
    excerpt: "We sell Longrich, but we won't pretend every product is essential. Here's our honest take on the line.",
    cover: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=1400&q=80",
    author: "Chichi",
    date: "2026-03-15",
    readTime: "4 min read",
    tag: "Longrich",
    body: [
      "We stock Longrich because real customers ask for it, and because a handful of products in the range are genuinely good. But not every item is a winner, and we'd rather you spend wisely than load up on things you'll forget about.",
      ["h", "The genuinely useful"],
      "The bamboo-salt toothpaste lives up to the hype — gentle whitening, refreshing taste, and you only need a pea-sized amount. The goat-milk beauty soap is excellent for dry or sensitive skin, and the Longrich coffee with ganoderma is a smooth, lower-jitter alternative to instant coffee. These three we'd recommend without hesitation.",
      ["h", "The personal-preference items"],
      "The tea sanitary pads are popular and well-rated; whether they're worth the premium over your usual brand is a personal call. The energy bracelet is decorative and pleasant to wear — claims about magnetic therapy are not scientifically established, so treat it as jewellery you like, not medicine.",
      ["h", "How to spot fakes"],
      "Counterfeit Longrich is everywhere. Every authentic product has an anti-counterfeit code on the box that you can verify on Longrich's official channel. We source directly from authorised distributors, so every item we sell is verifiable.",
      "Stick to what works for you. The brand has a lot, but a small core does the heavy lifting.",
    ],
  },
  {
    slug: "everyday-rituals-organic-skincare",
    title: "Five everyday rituals with our organic skincare",
    excerpt: "Simple, low-effort routines using African black soap, raw shea butter, and pure coconut oil — no fancy equipment needed.",
    cover: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1400&q=80",
    author: "The Chilordinv Team",
    date: "2026-02-08",
    readTime: "6 min read",
    tag: "Organic",
    body: [
      "The best skincare is the kind you'll actually stick to. Here are five low-effort rituals using three of our most-loved organic staples — black soap, shea butter, and coconut oil — that fit into any morning or evening.",
      ["h", "1. The two-minute morning cleanse"],
      "Wet your face with warm water. Take a coin-sized piece of African black soap, work it between your palms until it lathers, then massage gently for 30 seconds. Rinse with cool water. Pat dry. Done.",
      ["h", "2. The five-minute body butter"],
      "After your shower, while skin is still slightly damp, scoop a teaspoon of whipped shea butter onto your palm. Warm it between your hands for 10 seconds, then smooth over arms, legs, and torso. It absorbs faster than you'd think.",
      ["h", "3. The overnight hair mask"],
      "Once a week, warm two tablespoons of coconut oil in your hands and work it through dry hair from mid-length to ends. Tie it up loosely and sleep on it. Shampoo as normal in the morning. Soft, shiny hair, zero effort.",
      ["h", "4. The under-eye fix"],
      "A tiny dab of shea butter under each eye before bed. That's the whole routine. The skin there is thin and shea is gentle enough — no fancy eye creams required.",
      ["h", "5. The DIY makeup remover"],
      "Coconut oil dissolves even waterproof mascara. Massage a small amount over closed eyes, wipe gently with a damp cloth, then cleanse with black soap. Clean, conditioned, no panda eyes.",
      "None of this is revolutionary, but consistent small things beat ambitious-but-abandoned routines every time.",
    ],
  },
];

const CATEGORIES = [
  { slug: "organic",  name: "Organic Products",   icon: "leaf",
    blurb: "Pure, plant-based goods sourced with intention.",
    hero: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80" },
  { slug: "perfumes", name: "Perfumes & Oils",    icon: "sparkles",
    blurb: "Hand-blended scents, attars, and essential oils.",
    hero: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=1200&q=80" },
  { slug: "wellness", name: "Health & Wellness",  icon: "heart",
    blurb: "Vitamins, herbal teas, and daily wellness rituals.",
    hero: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80" },
  { slug: "cbd",      name: "CBD Products",       icon: "leaf",
    blurb: "Premium CBD oils, balms, and supplements.",
    hero: "https://images.unsplash.com/photo-1611242320536-f12d3541249b?w=1200&q=80" },
  { slug: "longrich", name: "Longrich",           icon: "sparkles",
    blurb: "Trusted Longrich cosmetics, supplements & home care.",
    hero: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=1200&q=80" },
];

const PRODUCTS = [
  // Organic
  { id: "o1", category: "organic", name: "Cold-Pressed Coconut Oil", price: 8500,  img: "https://amalbotanicalsbabycare.com/wp-content/uploads/2023/03/16A4B814-EF6D-4F69-B3BC-2BFD32C02CBF-scaled-1.jpeg",
    desc: "100% organic, virgin coconut oil cold-pressed within 6 hours of harvest. Ideal for skin, hair, and cooking. 500ml glass jar.", stock: "In stock" },
  { id: "o2", category: "organic", name: "Raw Wildflower Honey", price: 6500,  img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&q=80",
    desc: "Unfiltered, unpasteurized honey from family-owned apiaries. Rich in enzymes and pollen. 500g.", stock: "In stock" },
  { id: "o3", category: "organic", name: "African Black Soap", price: 3200,  img: "https://i5.walmartimages.com/seo/Herboganic-Raw-African-Black-Soap-Bar-100-Pure-and-Organic-Natural-Black-African-Soap-6-oz_445beabd-9d99-4997-844f-eb308652df30.a6c2a80abf0d3f405dea7e8dfb114d00.jpeg",
    desc: "Traditional Ghanaian recipe with plantain ash, shea butter, and palm kernel oil. Gentle for sensitive skin.", stock: "In stock" },
  { id: "o4", category: "organic", name: "Shea Butter Whip 250g", price: 5500,  img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80",
    desc: "Unrefined ivory shea butter whipped to a cloud-light texture. Nothing added.", stock: "In stock" },
  { id: "o5", category: "organic", name: "Moringa Leaf Powder", price: 4500,  img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    desc: "Sun-dried moringa leaves ground to a fine powder. Add to smoothies, soups, or capsules.", stock: "In stock" },

  // Perfumes
  { id: "p1", category: "perfumes", name: "Oud Royale Attar", price: 18500, img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&q=80",
    desc: "Deep, smoky oud with hints of rose and saffron. Alcohol-free oil perfume, 12ml roll-on.", stock: "In stock" },
  { id: "p2", category: "perfumes", name: "Jasmine Night Bloom", price: 14000, img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&q=80",
    desc: "A romantic floral blend of jasmine sambac, ylang ylang, and white musk. 50ml eau de parfum.", stock: "In stock" },
  { id: "p3", category: "perfumes", name: "Cedar & Amber Spray", price: 16500, img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&q=80",
    desc: "Warm cedarwood layered with amber and a whisper of vanilla. Unisex. 50ml.", stock: "In stock" },
  { id: "p4", category: "perfumes", name: "Rose Damascena Oil", price: 22000, img: "https://images.unsplash.com/photo-1610461888750-10bfc601b874?w=600&q=80",
    desc: "Pure rose damascena essential oil, hand-distilled. 5ml in apothecary glass.", stock: "Low stock" },
  { id: "p5", category: "perfumes", name: "Citrus Garden Mist", price: 9500,  img: "https://www.meolle.com/image/cache/webp/catalog/Laundry%20Perfume/Citrus%20Garden/spray/3-3-1384x1384.webp",
    desc: "Bergamot, lemon verbena, and neroli — bright, clean, and lifting. 100ml linen mist.", stock: "In stock" },

  // Wellness
  { id: "w1", category: "wellness", name: "Chamomile Sleep Tea", price: 4200, img: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=600&q=80",
    desc: "Loose-leaf chamomile with lavender and lemon balm. 30 servings.", stock: "In stock" },
  { id: "w2", category: "wellness", name: "Daily Multivitamin", price: 8800, img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&q=80",
    desc: "Whole-food sourced A–Z multivitamin for adults. 60 capsules.", stock: "In stock" },
  { id: "w3", category: "wellness", name: "Turmeric & Ginger Blend", price: 5600, img: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?w=600&q=80",
    desc: "Ground turmeric with black pepper, ginger, and cinnamon. Anti-inflammatory daily blend. 150g.", stock: "In stock" },
  { id: "w4", category: "wellness", name: "Sea Moss Gel", price: 7200, img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    desc: "Wildcrafted St. Lucian sea moss gel. 92 of 102 minerals the body needs. 500g.", stock: "In stock" },
  { id: "w5", category: "wellness", name: "Magnesium Glycinate", price: 9500, img: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=600&q=80",
    desc: "Bioavailable magnesium for sleep, stress, and muscle support. 120 capsules.", stock: "In stock" },

  // CBD
  { id: "c1", category: "cbd", name: "Full-Spectrum CBD Oil 1000mg", price: 28500, img: "https://m.media-amazon.com/images/I/71fT3k+27yL._AC_SX679_.jpg",
    desc: "Hemp-derived full-spectrum CBD tincture in MCT oil. 30ml dropper.", stock: "In stock" },
  { id: "c2", category: "cbd", name: "CBD Sleep Gummies", price: 18000, img: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80",
    desc: "25mg CBD per gummy with melatonin. Berry flavour. 30 count.", stock: "In stock" },
  { id: "c3", category: "cbd", name: "CBD Relief Balm", price: 14500, img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80",
    desc: "Topical balm with 500mg CBD, arnica, and menthol. For sore muscles and joints. 60ml.", stock: "In stock" },
  { id: "c4", category: "cbd", name: "Broad-Spectrum CBD Capsules", price: 22000, img: "https://m.media-amazon.com/images/I/71ZHHVnzPhL._AC_SX679_.jpg",
    desc: "25mg CBD per capsule, THC-free. 30 count.", stock: "In stock" },
  { id: "c5", category: "cbd", name: "CBD Face Serum", price: 16800, img: "https://images.unsplash.com/photo-1556228852-80b6e5eeff06?w=600&q=80",
    desc: "Calming CBD serum with hyaluronic acid and rosehip. 30ml.", stock: "Low stock" },

  // Longrich
  { id: "l1", category: "longrich", name: "Longrich Toothpaste", price: 3500, img: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&q=80",
    desc: "Herbal whitening toothpaste with bamboo salt. 120g.", stock: "In stock" },
  { id: "l2", category: "longrich", name: "Longrich Beauty Soap", price: 2800, img: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=600&q=80",
    desc: "Goat milk and honey moisturising soap. 100g.", stock: "In stock" },
  { id: "l3", category: "longrich", name: "Longrich Coffee", price: 6500, img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80",
    desc: "Instant coffee with ginseng, cordyceps, and ganoderma. 20 sachets.", stock: "In stock" },
  { id: "l4", category: "longrich", name: "Longrich Tea Sanitary Pads", price: 4500, img: "https://m.media-amazon.com/images/I/51xWfhnFXVL._AC_SX300_SY300_QL70_FMwebp_.jpg",
    desc: "Anion-strip sanitary pads with green tea extract. Day + night pack.", stock: "In stock" },
  { id: "l5", category: "longrich", name: "Longrich Energy Bracelet", price: 12500, img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
    desc: "Magnetic + negative-ion bracelet, stainless steel.", stock: "In stock" },
];

const SERVICES = [
  { slug: "consultation", name: "Wellness Consultation",
    blurb: "1-on-1 personalised wellness and product advice.",
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80",
    description: "A 45-minute session with a wellness advisor to map out a personalised routine using our product range. We listen, recommend, and follow up.",
    price: "From ₦15,000" },
  { slug: "subscription", name: "Monthly Wellness Box",
    blurb: "A curated box of organic + wellness essentials.",
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=80",
    description: "Every month we hand-pack a box around your needs — organic skincare, herbal teas, supplements. Cancel anytime.",
    price: "From ₦25,000 / month" },
  { slug: "bulk", name: "Bulk & Corporate Orders",
    blurb: "Gifting boxes, retreats, and bulk pricing.",
    img: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=1200&q=80",
    description: "Corporate gifting, hotel amenities, retreat sponsorship — get tiered pricing on bulk orders.",
    price: "Custom quotes" },
];

const FAQS = [
  { q: "What is Chilordinv?", a: "Chilordinv is a Lagos-based wellness brand offering organic products, perfumes, health supplements, CBD, and authentic Longrich items." },
  { q: "Are your products organic?", a: "All items in our Organic Products category are certified or verifiably sourced organic. Other categories are clearly labelled with ingredients." },
  { q: "Is CBD legal in Nigeria?", a: "Our CBD products are hemp-derived with negligible THC and comply with local regulations. We recommend consulting your doctor before starting CBD if you have a medical condition." },
  { q: "How do I pay?", a: "We accept bank transfer, card, USSD, and cash on delivery for Lagos. Bank details appear on every product page and at checkout." },
  { q: "How long does delivery take?", a: "Lagos: 1–2 business days. Other parts of Nigeria: 3–5 business days. International: contact us for a quote." },
  { q: "What is your return policy?", a: "Unopened products can be returned within 7 days. Consumables (food, opened cosmetics, CBD) are non-returnable for hygiene reasons." },
  { q: "Are Longrich products authentic?", a: "Yes — we source directly from authorised Longrich distributors. Every product carries an official traceability code." },
  { q: "Do you ship internationally?", a: "Yes, we ship to most countries. Contact us on WhatsApp with your address for a delivery quote." },
  { q: "How can I contact customer service?", a: "WhatsApp is fastest. You can also use the contact form on this site or email us directly. We reply within 24 hours." },
];

// Expose to window so inline page scripts can use them
window.CONFIG = CONFIG;
window.CATEGORIES = CATEGORIES;
window.PRODUCTS = PRODUCTS;
window.SERVICES = SERVICES;
window.FAQS = FAQS;
window.BLOG_POSTS = BLOG_POSTS;
