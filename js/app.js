/**
 * FLOWRIS - Handcrafted Gifts E-Commerce Client
 * 100% Client-Side, Zero-Cost Static Architecture
 * Supports Web3Forms / Formspree / WhatsApp Ordering
 */

// ==========================================
// CONFIGURATION & STORE SETTINGS
// ==========================================
const CONFIG = {
  storeName: "Flowris",
  tagline: "Handcrafted Gifts, Made with Love",
  currencySymbol: "৳",
  phone: "+880 1712-345678",
  whatsappNumber: "8801712345678", // Country code without '+' for wa.me link
  bKashNumber: "01712-345678 (Personal)",
  nagadNumber: "01712-345678 (Personal)",
  insideDhakaShipping: 80,
  outsideDhakaShipping: 150,
  freeShippingThreshold: 1500, // Free delivery inside Dhaka when subtotal >= 1500
  // Web3Forms public access key (Free tier: 250 submissions/month, zero backend setup required)
  // Store owners can get their free key at https://web3forms.com
  web3FormsKey: "YOUR_WEB3FORMS_ACCESS_KEY_HERE",
  // Formspree alternative endpoint (e.g., https://formspree.io/f/your_form_id)
  formspreeEndpoint: ""
};

// Fallback products catalog if opened directly via file:// protocol
const FALLBACK_PRODUCTS = [
  {
    "id": "flow-01",
    "title": "Eternal Floral Botanical Resin Letter Lamp",
    "category": "Resin Art",
    "categorySlug": "resin-art",
    "price": 1450,
    "originalPrice": 1850,
    "discountPercent": 22,
    "rating": 4.9,
    "reviewCount": 84,
    "image": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Bestseller",
    "inStock": true,
    "shortDescription": "Personalized LED warm glowing monogram lamp crafted with real preserved dried flowers inside high-clarity resin.",
    "description": "Each letter is handcrafted individually in Dhaka using high-grade UV-resistant crystal epoxy resin, preserved baby's breath, dried rose petals, and 24k gold leaf foil flakes. Mounted on a natural beechwood solid base with a warm USB LED strip.",
    "customizable": true,
    "customizationLabel": "Enter Initial / Letter (A-Z) & LED Base Name Text",
    "materials": "Crystal Resin, Real Preserved Flowers, 24K Gold Leaf, Solid Beechwood Base",
    "dimensions": "15cm x 15cm x 4.5cm",
    "tags": ["bestseller", "resin", "lamp", "personalized", "gift"]
  },
  {
    "id": "flow-02",
    "title": "Blush Velvet Preserved Rose Bouquet",
    "category": "Flowers & Bouquets",
    "categorySlug": "flowers",
    "price": 1850,
    "originalPrice": 2200,
    "discountPercent": 16,
    "rating": 5.0,
    "reviewCount": 112,
    "image": "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Trending",
    "inStock": true,
    "shortDescription": "Everlasting preserved Ecuadorian roses wrapped in luxury matte Japanese paper with silk satin ribbons.",
    "description": "Our signature preserved bouquet will stay vibrant and soft for up to 3 years without water or sunlight! Sourced ethically, preserved through gentle dehydration, and hand-tied by our master floral artisans.",
    "customizable": true,
    "customizationLabel": "Personalized Message for the Gift Card",
    "materials": "Preserved Natural Roses, Cotton Twine, Japanese Waterproof Wrapping, Silk Ribbon",
    "dimensions": "35cm Height x 25cm Width",
    "tags": ["bouquet", "flowers", "roses", "anniversary", "birthday"]
  },
  {
    "id": "flow-03",
    "title": "Custom Hand-Painted Couple Acrylic Spotify Plaque",
    "category": "Personalized Gifts",
    "categorySlug": "personalized",
    "price": 950,
    "originalPrice": 1250,
    "discountPercent": 24,
    "rating": 4.8,
    "reviewCount": 67,
    "image": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Popular",
    "inStock": true,
    "shortDescription": "High-transparency acrylic plaque printed with your favorite song, scannable Spotify code, and custom photo.",
    "description": "Commemorate your special song, anniversary date, or memorable trip. Comes with a laser-cut natural wooden stand. Hold up your Spotify phone camera to instantly play the song!",
    "customizable": true,
    "customizationLabel": "Song Title, Artist & Photo upload link (or WhatsApp to us)",
    "materials": "3mm Clear Cast Acrylic, UV Sublimation Ink, Oakwood Stand",
    "dimensions": "20cm x 15cm (A5 size)",
    "tags": ["acrylic", "music", "spotify", "couple", "personalized"]
  },
  {
    "id": "flow-04",
    "title": "Royal Velvet Lavender & Vanilla Scented Soy Candle",
    "category": "Home Decor & Candles",
    "categorySlug": "decor",
    "price": 650,
    "originalPrice": 850,
    "discountPercent": 23,
    "rating": 4.9,
    "reviewCount": 49,
    "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Organic",
    "inStock": true,
    "shortDescription": "100% natural organic soy wax hand-poured candle in an amber glass jar with therapeutic French lavender oils.",
    "description": "Clean, soot-free burn with lead-free crackling wooden wick. Formulated to relieve stress, enhance bedtime serenity, and bring a luxury boutique aroma to any room. 45+ hours burn time.",
    "customizable": false,
    "customizationLabel": "",
    "materials": "100% Natural Soy Wax, French Lavender Essential Oil, Crackling Wood Wick, Amber Glass",
    "dimensions": "200g / 7oz Jar",
    "tags": ["candle", "lavender", "aromatherapy", "home decor", "organic"]
  },
  {
    "id": "flow-05",
    "title": "Midnight Bloom Personalized Resin Coaster Set of 4",
    "category": "Resin Art",
    "categorySlug": "resin-art",
    "price": 1200,
    "originalPrice": 1600,
    "discountPercent": 25,
    "rating": 4.9,
    "reviewCount": 38,
    "image": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Handmade",
    "inStock": true,
    "shortDescription": "Geode style beverage coasters with deep violet & rose marble marbling, hand-gilded 24k gold leaf edging.",
    "description": "Durable heat-resistant crystal resin up to 80°C. Protects delicate dining tables while serving as exquisite artisanal jewelry for your living space. Includes non-slip silicone feet.",
    "customizable": true,
    "customizationLabel": "Optional Monogram Initials on each coaster (e.g. 'A & S')",
    "materials": "Non-toxic Food-safe Resin, Mica Pigments, Liquid Gold Leaf Edging",
    "dimensions": "10cm diameter each (Set of 4)",
    "tags": ["coasters", "resin", "tableware", "decor", "gold"]
  },
  {
    "id": "flow-06",
    "title": "The Luxe Empress Wooden Gift Hamper Box",
    "category": "Luxury Gift Boxes",
    "categorySlug": "gift-boxes",
    "price": 2850,
    "originalPrice": 3500,
    "discountPercent": 18,
    "rating": 5.0,
    "reviewCount": 54,
    "image": "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Curated",
    "inStock": true,
    "shortDescription": "Premium pine wood laser-engraved memory box with scented candle, resin keychain, mini bouquet & artisanal chocolates.",
    "description": "The ultimate turnkey gift set for birthdays, brides, anniversaries, or corporate celebrations. Includes our bestselling soy candle, personalized golden initial keychain, dry flower mini posy, Ferrero Rocher chocolates, and handwritten calligraphy card.",
    "customizable": true,
    "customizationLabel": "Recipient Name (for laser engraving on wooden box lid) & Card Message",
    "materials": "Natural Pine Wood, Brass Latch, Satin Ribbon, Scented Candle, Handcrafted Treats",
    "dimensions": "28cm x 22cm x 11cm",
    "tags": ["hamper", "gift box", "luxury", "birthday", "bride"]
  },
  {
    "id": "flow-07",
    "title": "Golden Flake Resin Initial Keychain with Fur Pom",
    "category": "Resin Art",
    "categorySlug": "resin-art",
    "price": 450,
    "originalPrice": 600,
    "discountPercent": 25,
    "rating": 4.7,
    "reviewCount": 92,
    "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Pocket Luxe",
    "inStock": true,
    "shortDescription": "Crystal clear alphanumeric keychain infused with real dried hydrangeas, gold foil, and luxury lobster clasp.",
    "description": "An adorable everyday accessory or pocket gift for friends and bridesmaids. Ultra-durable, scratch-resistant resin combined with premium anti-tarnish golden hardware.",
    "customizable": true,
    "customizationLabel": "Letter (A-Z) & Preferred Flower Color (Pink / Purple / White / Blue)",
    "materials": "Epoxy Resin, Dried Hydrangeas, Rose Gold / Gold Alloy Keychain Clasp",
    "dimensions": "Letter Height: 4cm",
    "tags": ["keychain", "accessories", "resin", "cute", "budget"]
  },
  {
    "id": "flow-08",
    "title": "Forever Bloom Floating Glass Floral Frame",
    "category": "Home Decor & Candles",
    "categorySlug": "decor",
    "price": 1350,
    "originalPrice": 1700,
    "discountPercent": 20,
    "rating": 4.9,
    "reviewCount": 41,
    "image": "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "New Arrival",
    "inStock": true,
    "shortDescription": "Double-paned vintage brass floating glass frame capturing pressed real botanical specimens and gold calligraphy.",
    "description": "Each frame is an original botanical composition. The flowers are pressed and sealed between two panes of museum-grade glass, giving an ethereal floating illusion in natural light.",
    "customizable": true,
    "customizationLabel": "Custom Names / Wedding Date / Quote for Calligraphy",
    "materials": "Solid Brass Frame, Pressed Real Flowers, Tempered Glass, Hanging Chain",
    "dimensions": "8 x 10 inches",
    "tags": ["frame", "pressed flowers", "wall decor", "vintage", "wedding"]
  },
  {
    "id": "flow-09",
    "title": "Cherished Memories Customized Polaroid Gift Jar",
    "category": "Personalized Gifts",
    "categorySlug": "personalized",
    "price": 850,
    "originalPrice": 1100,
    "discountPercent": 23,
    "rating": 4.8,
    "reviewCount": 73,
    "image": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Heartfelt",
    "inStock": true,
    "shortDescription": "A vintage glass cork jar packed with 12 mini retro polaroid prints, fairy micro-LEDs, and dried lavender sprigs.",
    "description": "Surprise your best friend or partner with 12 of your happiest moments printed on thick archival Fujifilm paper, nestled inside a magical illuminated fairy bottle.",
    "customizable": true,
    "customizationLabel": "Upload/Send 12 photos + 1 short note via WhatsApp after checkout",
    "materials": "Borosilicate Glass, Natural Cork, Micro Fairy LEDs, Archival Photo Paper",
    "dimensions": "18cm Height x 8cm Diameter",
    "tags": ["polaroid", "jar", "fairy lights", "memories", "photos"]
  },
  {
    "id": "flow-10",
    "title": "Pure Elegance Dried Pampas Grass Ceramic Vase Duo",
    "category": "Home Decor & Candles",
    "categorySlug": "decor",
    "price": 1650,
    "originalPrice": 1950,
    "discountPercent": 15,
    "rating": 4.9,
    "reviewCount": 33,
    "image": "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Minimalist",
    "inStock": true,
    "shortDescription": "Nordic minimalist donut matte ceramic vase bundled with natural fluffy pampas grass stems and bunny tails.",
    "description": "Bring modern Japandi aesthetic warmth to your vanity, coffee table, or study desk. No maintenance required, lasts for years looking effortlessly chic.",
    "customizable": false,
    "customizationLabel": "",
    "materials": "Matte Glazed Ceramic, Naturally Dried Pampas Stems, Bunny Tails",
    "dimensions": "Vase: 19cm Height, Pampas Plumes: 40cm Height",
    "tags": ["pampas", "ceramic", "vase", "nordic", "japandi"]
  },
  {
    "id": "flow-11",
    "title": "Serenity Rose Resin Bookmarks with Tassels (Set of 2)",
    "category": "Resin Art",
    "categorySlug": "resin-art",
    "price": 550,
    "originalPrice": 750,
    "discountPercent": 26,
    "rating": 5.0,
    "reviewCount": 61,
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "For Booklovers",
    "inStock": true,
    "shortDescription": "Ultra-thin, crystal clear bookmark embedded with real pressed ferns, roses, and gold leaf with silky tassel.",
    "description": "The perfect aesthetic companion for book lovers and journaling enthusiasts. Smooth rounded edges that never dent or harm book pages.",
    "customizable": true,
    "customizationLabel": "Name or initials for metallic vinyl embossing",
    "materials": "Flexible Durable Epoxy Resin, Pressed Flora, Silk Satin Tassel",
    "dimensions": "14cm x 2.8cm",
    "tags": ["bookmark", "resin", "reading", "gift", "stationery"]
  },
  {
    "id": "flow-12",
    "title": "Grand Celebration Wedding & Nikkah Gift Box",
    "category": "Luxury Gift Boxes",
    "categorySlug": "gift-boxes",
    "price": 3800,
    "originalPrice": 4600,
    "discountPercent": 17,
    "rating": 5.0,
    "reviewCount": 27,
    "image": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80"
    ],
    "badge": "Premium Grand",
    "inStock": true,
    "shortDescription": "Exclusive rigid magnetic celebration hamper with paired monogram resin cups, scented candle, crystal ring dish & floral decor.",
    "description": "Designed specially for weddings, Nikkah ceremonies, and milestone anniversaries in Bangladesh. Includes customized Mr. & Mrs. keepsakes, custom calligraphy vow booklet, golden resin ring tray, and velvet ring box.",
    "customizable": true,
    "customizationLabel": "Bride & Groom Names + Wedding Date for custom engraving",
    "materials": "Rigid Embossed Box with Gold Foil, Crystal Resin, Velvet, Gold Leaf",
    "dimensions": "32cm x 25cm x 12cm",
    "tags": ["wedding", "nikkah", "anniversary", "grand hamper", "couple"]
  }
];

// ==========================================
// APPLICATION STATE
// ==========================================
const AppState = {
  products: [],
  filteredProducts: [],
  cart: [],
  wishlist: [],
  activeCategory: 'all',
  searchQuery: '',
  sortBy: 'featured',
  selectedProductForModal: null,
  appliedPromo: null,
  shippingZone: 'inside-dhaka', // 'inside-dhaka' | 'outside-dhaka'
  paymentMethod: 'cod', // 'cod' | 'bkash'

  // Promo code definitions
  availablePromos: {
    'FLOWRISLOVE': { type: 'percent', value: 10, label: '10% OFF Special Launch Discount' },
    'WELCOME50': { type: 'flat', value: 50, label: '৳50 OFF Welcome Gift' },
    'EIDGIFT': { type: 'percent', value: 15, label: '15% OFF Festive Special' }
  }
};

// ==========================================
// LOCAL STORAGE SYNC
// ==========================================
const Storage = {
  loadCart() {
    try {
      const data = localStorage.getItem('flowris_cart');
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.warn('LocalStorage error:', e);
      return [];
    }
  },
  saveCart(cart) {
    try {
      localStorage.setItem('flowris_cart', JSON.stringify(cart));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  },
  loadWishlist() {
    try {
      const data = localStorage.getItem('flowris_wishlist');
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.warn('LocalStorage error:', e);
      return [];
    }
  },
  saveWishlist(wishlist) {
    try {
      localStorage.setItem('flowris_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }
};

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

async function initApp() {
  // 1. Load LocalStorage State
  AppState.cart = Storage.loadCart();
  AppState.wishlist = Storage.loadWishlist();

  // 2. Fetch Products Data (with fallback protection)
  await loadProducts();

  // 3. Render Store UI
  renderProducts();
  updateCartUI();
  updateWishlistUI();

  // 4. Attach Event Listeners
  setupEventListeners();

  // 5. Check URL parameters (e.g. ?category=resin-art or ?product=flow-01)
  handleUrlParams();
}

// Fetch products from JSON file
async function loadProducts() {
  try {
    const response = await fetch('data/products.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    AppState.products = Array.isArray(data) && data.length > 0 ? data : FALLBACK_PRODUCTS;
  } catch (err) {
    console.info('Loaded local fallback catalog dataset:', err.message);
    AppState.products = FALLBACK_PRODUCTS;
  }
  AppState.filteredProducts = [...AppState.products];
}

// ==========================================
// CATALOG RENDERING & FILTERING
// ==========================================
function filterAndSortProducts() {
  let list = [...AppState.products];

  // Category Filter
  if (AppState.activeCategory !== 'all') {
    list = list.filter(item => item.categorySlug === AppState.activeCategory);
  }

  // Search Query
  if (AppState.searchQuery.trim() !== '') {
    const q = AppState.searchQuery.toLowerCase().trim();
    list = list.filter(item => 
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.shortDescription.toLowerCase().includes(q) ||
      (item.tags && item.tags.some(tag => tag.toLowerCase().includes(q)))
    );
  }

  // Sorting
  switch (AppState.sortBy) {
    case 'price-low':
      list.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      list.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      list.sort((a, b) => b.rating - a.rating);
      break;
    case 'discount':
      list.sort((a, b) => b.discountPercent - a.discountPercent);
      break;
    case 'featured':
    default:
      // Default order in JSON
      break;
  }

  AppState.filteredProducts = list;
  renderProducts();
}

function renderProducts() {
  const container = document.getElementById('products-grid');
  const countBadge = document.getElementById('product-count-badge');
  if (!container) return;

  if (countBadge) {
    countBadge.textContent = `${AppState.filteredProducts.length} items found`;
  }

  if (AppState.filteredProducts.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="w-20 h-20 mx-auto mb-4 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center text-3xl">
          🔍
        </div>
        <h3 class="text-xl font-bold text-gray-800 mb-2">No matching gifts found</h3>
        <p class="text-gray-500 max-w-md mx-auto mb-6 text-sm">
          We couldn't find any items matching your search. Try adjusting your keyword or browse all our collections.
        </p>
        <button onclick="resetFilters()" class="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full text-sm shadow-md transition-all">
          View All Gifts
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = AppState.filteredProducts.map(product => {
    const isWishlisted = AppState.wishlist.some(item => item.id === product.id);
    const badgeClass = product.badge === 'Bestseller' ? 'badge-bestseller' :
                       product.badge === 'Trending' ? 'badge-trending' : 'badge-new';

    return `
      <div class="group relative bg-white rounded-2xl overflow-hidden border border-purple-50 shadow-soft shadow-hover flex flex-col transition-all duration-300">
        
        <!-- Image Container -->
        <div class="relative w-full pt-[100%] overflow-hidden bg-purple-50/50 cursor-pointer" onclick="openProductModal('${product.id}')">
          <img 
            src="${product.image}" 
            alt="${escapeHtml(product.title)}" 
            loading="lazy"
            class="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
          />

          <!-- Floating Badges -->
          <div class="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
            ${product.badge ? `
              <span class="px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide shadow-sm ${badgeClass}">
                ${product.badge}
              </span>
            ` : ''}
            ${product.discountPercent ? `
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-500 text-white shadow-sm">
                -${product.discountPercent}%
              </span>
            ` : ''}
          </div>

          <!-- Quick Wishlist Button -->
          <button 
            type="button" 
            onclick="event.stopPropagation(); toggleWishlist('${product.id}')"
            aria-label="Save to Wishlist"
            class="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md shadow-md flex items-center justify-center text-gray-400 hover:text-rose-500 transition-all z-10 ${isWishlisted ? 'text-rose-500 ring-2 ring-rose-200' : ''}"
          >
            <svg class="w-5 h-5 ${isWishlisted ? 'fill-current' : 'fill-none stroke-current'}" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>

          <!-- Quick View Hover Pill (Desktop) -->
          <div class="hidden md:flex absolute inset-x-0 bottom-3 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
            <span class="px-4 py-1.5 bg-gray-900/80 hover:bg-gray-900 text-white text-xs font-medium rounded-full backdrop-blur-md shadow-lg transition-transform transform translate-y-2 group-hover:translate-y-0">
              Quick View
            </span>
          </div>
        </div>

        <!-- Product Details -->
        <div class="p-4 sm:p-5 flex-1 flex flex-col justify-between">
          <div>
            <!-- Category & Rating -->
            <div class="flex items-center justify-between text-xs text-gray-500 mb-1.5">
              <span class="font-medium text-purple-600 tracking-wider uppercase text-[11px]">${product.category}</span>
              <div class="flex items-center gap-1 text-amber-500 font-semibold">
                <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span>${product.rating}</span>
                <span class="text-gray-400 font-normal">(${product.reviewCount})</span>
              </div>
            </div>

            <!-- Title -->
            <h4 class="font-semibold text-gray-900 text-sm sm:text-base leading-snug line-clamp-2 mb-2 group-hover:text-purple-600 transition-colors cursor-pointer" onclick="openProductModal('${product.id}')">
              ${escapeHtml(product.title)}
            </h4>

            <!-- Short description -->
            <p class="text-gray-500 text-xs line-clamp-2 mb-3 leading-relaxed">
              ${escapeHtml(product.shortDescription)}
            </p>
          </div>

          <!-- Price & Action Row -->
          <div class="pt-3 border-t border-purple-50/80 flex items-center justify-between">
            <div>
              <div class="flex items-baseline gap-1.5">
                <span class="text-lg sm:text-xl font-bold text-gray-900 font-serif">
                  ${CONFIG.currencySymbol}${product.price.toLocaleString()}
                </span>
                ${product.originalPrice ? `
                  <span class="text-xs text-gray-400 line-through">
                    ${CONFIG.currencySymbol}${product.originalPrice.toLocaleString()}
                  </span>
                ` : ''}
              </div>
              <span class="text-[10px] text-emerald-600 font-medium">In Stock • Ready to dispatch</span>
            </div>

            <!-- Add to Cart Icon Button -->
            <button 
              type="button" 
              onclick="event.stopPropagation(); quickAddToCart('${product.id}')"
              class="w-10 h-10 rounded-xl bg-purple-50 hover:bg-purple-600 text-purple-700 hover:text-white transition-all flex items-center justify-center shadow-sm group-hover:scale-105 active:scale-95"
              title="Add to Cart"
            >
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    `;
  }).join('');
}

function resetFilters() {
  AppState.activeCategory = 'all';
  AppState.searchQuery = '';
  AppState.sortBy = 'featured';

  // Reset UI inputs
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';

  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) sortSelect.value = 'featured';

  // Reset category buttons
  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === 'all');
  });

  filterAndSortProducts();
}

// ==========================================
// QUICK VIEW / PRODUCT DETAILS MODAL
// ==========================================
function openProductModal(productId) {
  const product = AppState.products.find(p => p.id === productId);
  if (!product) return;

  AppState.selectedProductForModal = product;
  const modal = document.getElementById('product-modal');
  if (!modal) return;

  // Fill in content
  document.getElementById('modal-img-main').src = product.image;
  document.getElementById('modal-img-main').alt = product.title;
  document.getElementById('modal-category').textContent = product.category;
  document.getElementById('modal-title').textContent = product.title;
  document.getElementById('modal-price').textContent = `${CONFIG.currencySymbol}${product.price.toLocaleString()}`;
  
  const originalPriceEl = document.getElementById('modal-original-price');
  if (product.originalPrice) {
    originalPriceEl.textContent = `${CONFIG.currencySymbol}${product.originalPrice.toLocaleString()}`;
    originalPriceEl.classList.remove('hidden');
  } else {
    originalPriceEl.classList.add('hidden');
  }

  const discountBadgeEl = document.getElementById('modal-discount-badge');
  if (product.discountPercent) {
    discountBadgeEl.textContent = `${product.discountPercent}% OFF`;
    discountBadgeEl.classList.remove('hidden');
  } else {
    discountBadgeEl.classList.add('hidden');
  }

  document.getElementById('modal-rating-score').textContent = product.rating;
  document.getElementById('modal-rating-count').textContent = `(${product.reviewCount} customer reviews)`;
  document.getElementById('modal-description').textContent = product.description;
  document.getElementById('modal-materials').textContent = product.materials || 'Handcrafted botanical & resin materials';
  document.getElementById('modal-dimensions').textContent = product.dimensions || 'Standard handcrafted dimensions';
  
  // Customization input section
  const customSection = document.getElementById('modal-customization-section');
  const customInput = document.getElementById('modal-custom-text');
  const customLabel = document.getElementById('modal-custom-label');
  
  if (product.customizable) {
    customSection.classList.remove('hidden');
    customLabel.textContent = product.customizationLabel || 'Enter Your Custom Text / Names:';
    customInput.value = '';
    customInput.placeholder = 'e.g., "Sarah & Rayan" or "Letter M"';
  } else {
    customSection.classList.add('hidden');
    customInput.value = '';
  }

  // Thumbnails gallery
  const thumbsContainer = document.getElementById('modal-thumbnails');
  if (thumbsContainer) {
    const gallery = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];
    thumbsContainer.innerHTML = gallery.map((imgSrc, idx) => `
      <button 
        type="button" 
        onclick="setModalMainImage('${imgSrc}', this)"
        class="w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${idx === 0 ? 'border-purple-600 scale-95 ring-2 ring-purple-200' : 'border-transparent opacity-75 hover:opacity-100'}"
      >
        <img src="${imgSrc}" class="w-full h-full object-cover" alt="thumbnail" />
      </button>
    `).join('');
  }

  // Reset Quantity
  document.getElementById('modal-qty-input').value = '1';

  // Show Modal
  modal.classList.add('active');
  document.body.classList.add('overflow-hidden');
}

function setModalMainImage(imgSrc, btn) {
  const mainImg = document.getElementById('modal-img-main');
  if (mainImg) mainImg.src = imgSrc;

  // Highlight active thumbnail
  const allBtns = document.getElementById('modal-thumbnails').querySelectorAll('button');
  allBtns.forEach(b => {
    b.classList.remove('border-purple-600', 'ring-2', 'ring-purple-200', 'scale-95');
    b.classList.add('border-transparent', 'opacity-75');
  });
  if (btn) {
    btn.classList.add('border-purple-600', 'ring-2', 'ring-purple-200', 'scale-95');
    btn.classList.remove('border-transparent', 'opacity-75');
  }
}

function closeProductModal() {
  const modal = document.getElementById('product-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.classList.remove('overflow-hidden');
  }
}

function modalAddToCart() {
  if (!AppState.selectedProductForModal) return;
  const product = AppState.selectedProductForModal;
  const qty = parseInt(document.getElementById('modal-qty-input').value) || 1;
  const customNote = document.getElementById('modal-custom-text').value.trim();

  addToCart(product.id, qty, customNote);
  closeProductModal();
}

function modalBuyViaWhatsApp() {
  if (!AppState.selectedProductForModal) return;
  const product = AppState.selectedProductForModal;
  const qty = parseInt(document.getElementById('modal-qty-input').value) || 1;
  const customNote = document.getElementById('modal-custom-text').value.trim();
  const totalPrice = product.price * qty;

  let message = `Hello Flowris! 🌸 I would like to order this handcrafted item:\n\n`;
  message += `🎁 *Item:* ${product.title}\n`;
  message += `📦 *Quantity:* ${qty}\n`;
  message += `💰 *Price:* ${CONFIG.currencySymbol}${totalPrice.toLocaleString()}\n`;
  if (customNote) {
    message += `✍️ *Customization Details:* ${customNote}\n`;
  }
  message += `\nPlease let me know the availability and payment confirmation steps. Thank you!`;

  const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');
}

// ==========================================
// SHOPPING CART (LOCAL STORAGE)
// ==========================================
function quickAddToCart(productId) {
  addToCart(productId, 1, '');
}

function addToCart(productId, quantity = 1, customNote = '') {
  const product = AppState.products.find(p => p.id === productId);
  if (!product) return;

  // Check if identical item with same customization already exists
  const existingIndex = AppState.cart.findIndex(item => 
    item.id === productId && (item.customNote || '') === (customNote || '')
  );

  if (existingIndex > -1) {
    AppState.cart[existingIndex].quantity += quantity;
  } else {
    AppState.cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      category: product.category,
      quantity: quantity,
      customNote: customNote
    });
  }

  Storage.saveCart(AppState.cart);
  updateCartUI();
  showToast(`Added "${product.title}" to cart! 🛍️`, 'success');
  openCartDrawer();
}

function updateCartItemQuantity(index, delta) {
  if (!AppState.cart[index]) return;
  AppState.cart[index].quantity += delta;
  
  if (AppState.cart[index].quantity <= 0) {
    AppState.cart.splice(index, 1);
    showToast('Item removed from cart', 'info');
  }

  Storage.saveCart(AppState.cart);
  updateCartUI();
}

function removeCartItem(index) {
  if (!AppState.cart[index]) return;
  const removed = AppState.cart.splice(index, 1);
  Storage.saveCart(AppState.cart);
  updateCartUI();
  if (removed[0]) {
    showToast(`Removed "${removed[0].title}" from cart`, 'info');
  }
}

function clearCart() {
  if (AppState.cart.length === 0) return;
  AppState.cart = [];
  AppState.appliedPromo = null;
  Storage.saveCart(AppState.cart);
  updateCartUI();
  showToast('Cart cleared', 'info');
}

function getCartCalculations() {
  const subtotal = AppState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Calculate discount
  let discount = 0;
  if (AppState.appliedPromo) {
    if (AppState.appliedPromo.type === 'percent') {
      discount = Math.round((subtotal * AppState.appliedPromo.value) / 100);
    } else if (AppState.appliedPromo.type === 'flat') {
      discount = Math.min(AppState.appliedPromo.value, subtotal);
    }
  }

  // Shipping calculation
  let shipping = 0;
  if (subtotal > 0) {
    if (AppState.shippingZone === 'inside-dhaka') {
      shipping = (subtotal >= CONFIG.freeShippingThreshold) ? 0 : CONFIG.insideDhakaShipping;
    } else {
      shipping = CONFIG.outsideDhakaShipping;
    }
  }

  const grandTotal = Math.max(0, subtotal - discount + shipping);

  return { subtotal, discount, shipping, grandTotal };
}

function updateCartUI() {
  const totalCount = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);

  // Update Cart Badges (Navbar & Mobile Floating Bar)
  document.querySelectorAll('.cart-badge-count').forEach(badge => {
    badge.textContent = totalCount;
    badge.classList.toggle('hidden', totalCount === 0);
  });

  const mobileCartBar = document.getElementById('mobile-floating-cart');
  if (mobileCartBar) {
    if (totalCount > 0) {
      mobileCartBar.classList.remove('hidden');
      const { grandTotal } = getCartCalculations();
      document.getElementById('mobile-cart-total').textContent = `${CONFIG.currencySymbol}${grandTotal.toLocaleString()}`;
      document.getElementById('mobile-cart-count').textContent = `${totalCount} item${totalCount > 1 ? 's' : ''}`;
    } else {
      mobileCartBar.classList.add('hidden');
    }
  }

  // Render Cart Drawer Items
  const itemsContainer = document.getElementById('cart-items-container');
  const emptyState = document.getElementById('cart-empty-state');
  const footerSection = document.getElementById('cart-footer-section');
  if (!itemsContainer) return;

  if (AppState.cart.length === 0) {
    emptyState.classList.remove('hidden');
    footerSection.classList.add('hidden');
    itemsContainer.innerHTML = '';
    return;
  }

  emptyState.classList.add('hidden');
  footerSection.classList.remove('hidden');

  // Render items list
  itemsContainer.innerHTML = AppState.cart.map((item, index) => `
    <div class="flex items-center gap-3.5 py-3 border-b border-purple-50 last:border-none">
      <img src="${item.image}" alt="${escapeHtml(item.title)}" class="w-16 h-16 rounded-xl object-cover bg-purple-50 flex-shrink-0" />
      
      <div class="flex-1 min-w-0">
        <h5 class="text-xs sm:text-sm font-semibold text-gray-900 truncate">${escapeHtml(item.title)}</h5>
        ${item.customNote ? `
          <p class="text-[11px] text-purple-600 truncate mt-0.5 font-medium">
            ✍️ Custom: "${escapeHtml(item.customNote)}"
          </p>
        ` : ''}
        <span class="text-xs text-gray-500 font-serif">
          ${CONFIG.currencySymbol}${item.price.toLocaleString()} × ${item.quantity} = <strong class="text-purple-700">${CONFIG.currencySymbol}${(item.price * item.quantity).toLocaleString()}</strong>
        </span>

        <!-- Quantity Controls -->
        <div class="flex items-center gap-2 mt-2">
          <div class="inline-flex items-center rounded-lg border border-purple-100 bg-white">
            <button 
              type="button" 
              onclick="updateCartItemQuantity(${index}, -1)" 
              class="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-purple-700 text-sm font-bold"
            >-</button>
            <span class="w-7 text-center text-xs font-semibold text-gray-800">${item.quantity}</span>
            <button 
              type="button" 
              onclick="updateCartItemQuantity(${index}, 1)" 
              class="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-purple-700 text-sm font-bold"
            >+</button>
          </div>
          <button 
            type="button" 
            onclick="removeCartItem(${index})" 
            class="text-[11px] text-gray-400 hover:text-rose-500 ml-2"
          >Remove</button>
        </div>
      </div>
    </div>
  `).join('');

  // Update Free Shipping Progress Bar
  const { subtotal, discount, grandTotal } = getCartCalculations();
  const threshold = CONFIG.freeShippingThreshold;
  const progressPercent = Math.min(100, Math.round((subtotal / threshold) * 100));
  const shippingProgressBar = document.getElementById('free-shipping-progress');
  const shippingMsg = document.getElementById('free-shipping-msg');

  if (shippingProgressBar && shippingMsg) {
    shippingProgressBar.style.width = `${progressPercent}%`;
    if (subtotal >= threshold) {
      shippingMsg.innerHTML = `🎉 <strong>Congratulations!</strong> You unlocked <strong>FREE Delivery</strong> in Dhaka!`;
    } else {
      const remaining = threshold - subtotal;
      shippingMsg.innerHTML = `Add <strong>${CONFIG.currencySymbol}${remaining.toLocaleString()}</strong> more for <strong>FREE Delivery</strong> in Dhaka`;
    }
  }

  // Update Summary numbers
  document.getElementById('cart-subtotal').textContent = `${CONFIG.currencySymbol}${subtotal.toLocaleString()}`;
  document.getElementById('cart-total').textContent = `${CONFIG.currencySymbol}${grandTotal.toLocaleString()}`;

  const discountRow = document.getElementById('cart-discount-row');
  if (AppState.appliedPromo && discount > 0) {
    discountRow.classList.remove('hidden');
    document.getElementById('cart-discount-amount').textContent = `-${CONFIG.currencySymbol}${discount.toLocaleString()}`;
    document.getElementById('cart-applied-promo-tag').textContent = `(${AppState.appliedPromo.label})`;
  } else {
    discountRow.classList.add('hidden');
  }
}

// Promo Code Handling
function applyPromoCode() {
  const input = document.getElementById('promo-code-input');
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (!code) {
    showToast('Please enter a coupon code', 'warning');
    return;
  }

  if (AppState.availablePromos[code]) {
    AppState.appliedPromo = {
      code: code,
      ...AppState.availablePromos[code]
    };
    updateCartUI();
    showToast(`Code "${code}" applied successfully! 🎁`, 'success');
  } else {
    showToast('Invalid or expired coupon code', 'error');
  }
}

// Drawer Toggles
function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  if (drawer) {
    drawer.classList.add('active');
    document.body.classList.add('overflow-hidden');
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  if (drawer) {
    drawer.classList.remove('active');
    document.body.classList.remove('overflow-hidden');
  }
}

// ==========================================
// WISHLIST MANAGEMENT
// ==========================================
function toggleWishlist(productId) {
  const index = AppState.wishlist.findIndex(item => item.id === productId);
  const product = AppState.products.find(p => p.id === productId);

  if (index > -1) {
    AppState.wishlist.splice(index, 1);
    showToast(`Removed from your wishlist`, 'info');
  } else if (product) {
    AppState.wishlist.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      category: product.category
    });
    showToast(`Saved "${product.title}" to wishlist! ❤️`, 'success');
  }

  Storage.saveWishlist(AppState.wishlist);
  updateWishlistUI();
  renderProducts(); // re-render hearts
}

function updateWishlistUI() {
  const count = AppState.wishlist.length;
  document.querySelectorAll('.wishlist-badge-count').forEach(badge => {
    badge.textContent = count;
    badge.classList.toggle('hidden', count === 0);
  });

  const listContainer = document.getElementById('wishlist-items-container');
  const emptyState = document.getElementById('wishlist-empty-state');
  if (!listContainer) return;

  if (count === 0) {
    emptyState.classList.remove('hidden');
    listContainer.innerHTML = '';
    return;
  }

  emptyState.classList.add('hidden');
  listContainer.innerHTML = AppState.wishlist.map(item => `
    <div class="flex items-center gap-3.5 py-3 border-b border-purple-50 last:border-none">
      <img src="${item.image}" alt="${escapeHtml(item.title)}" class="w-16 h-16 rounded-xl object-cover bg-purple-50 flex-shrink-0" />
      <div class="flex-1 min-w-0">
        <h5 class="text-xs sm:text-sm font-semibold text-gray-900 truncate">${escapeHtml(item.title)}</h5>
        <p class="text-xs text-purple-600 font-serif font-semibold mt-0.5">${CONFIG.currencySymbol}${item.price.toLocaleString()}</p>
        <div class="flex items-center gap-3 mt-2">
          <button 
            type="button" 
            onclick="quickAddToCart('${item.id}'); toggleWishlist('${item.id}')"
            class="text-xs bg-purple-600 text-white font-medium px-3 py-1 rounded-md hover:bg-purple-700 shadow-sm transition-all"
          >
            Move to Cart
          </button>
          <button 
            type="button" 
            onclick="toggleWishlist('${item.id}')"
            class="text-xs text-gray-400 hover:text-rose-500"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function openWishlistDrawer() {
  const drawer = document.getElementById('wishlist-drawer');
  if (drawer) {
    drawer.classList.add('active');
    document.body.classList.add('overflow-hidden');
  }
}

function closeWishlistDrawer() {
  const drawer = document.getElementById('wishlist-drawer');
  if (drawer) {
    drawer.classList.remove('active');
    document.body.classList.remove('overflow-hidden');
  }
}

// ==========================================
// CHECKOUT & SERVERLESS ORDER HANDLING
// ==========================================
function openCheckoutModal() {
  if (AppState.cart.length === 0) {
    showToast('Your cart is empty! Add gifts before checkout.', 'warning');
    return;
  }

  closeCartDrawer();
  const modal = document.getElementById('checkout-modal');
  if (!modal) return;

  renderCheckoutSummary();
  modal.classList.add('active');
  document.body.classList.add('overflow-hidden');
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.classList.remove('overflow-hidden');
  }
}

function setShippingZone(zone) {
  AppState.shippingZone = zone;
  renderCheckoutSummary();
}

function setPaymentMethod(method) {
  AppState.paymentMethod = method;
  const bkashBox = document.getElementById('checkout-bkash-instructions');
  if (bkashBox) {
    bkashBox.classList.toggle('hidden', method !== 'bkash');
  }
}

function renderCheckoutSummary() {
  const { subtotal, discount, shipping, grandTotal } = getCartCalculations();

  document.getElementById('checkout-subtotal').textContent = `${CONFIG.currencySymbol}${subtotal.toLocaleString()}`;
  document.getElementById('checkout-shipping').textContent = shipping === 0 ? 'FREE' : `${CONFIG.currencySymbol}${shipping.toLocaleString()}`;
  
  const discountRow = document.getElementById('checkout-discount-row');
  if (discount > 0) {
    discountRow.classList.remove('hidden');
    document.getElementById('checkout-discount').textContent = `-${CONFIG.currencySymbol}${discount.toLocaleString()}`;
  } else {
    discountRow.classList.add('hidden');
  }

  document.getElementById('checkout-grand-total').textContent = `${CONFIG.currencySymbol}${grandTotal.toLocaleString()}`;

  // Mini items list preview in checkout
  const itemsContainer = document.getElementById('checkout-items-preview');
  if (itemsContainer) {
    itemsContainer.innerHTML = AppState.cart.map(item => `
      <div class="flex items-center justify-between text-xs py-1 border-b border-purple-50 last:border-none">
        <span class="truncate max-w-[200px] text-gray-700 font-medium">
          ${item.quantity}× ${escapeHtml(item.title)}
          ${item.customNote ? `<br><small class="text-purple-600 font-normal">Custom: ${escapeHtml(item.customNote)}</small>` : ''}
        </span>
        <span class="font-serif text-gray-900 font-semibold">${CONFIG.currencySymbol}${(item.price * item.quantity).toLocaleString()}</span>
      </div>
    `).join('');
  }
}

// Handle Order Submission
async function handleCheckoutSubmit(e) {
  e.preventDefault();
  const submitBtn = document.getElementById('place-order-btn');
  const originalBtnText = submitBtn.innerHTML;

  // Read Form values
  const name = document.getElementById('cust-name').value.trim();
  const phone = document.getElementById('cust-phone').value.trim();
  const altPhone = document.getElementById('cust-alt-phone').value.trim();
  const district = document.getElementById('cust-district').value;
  const address = document.getElementById('cust-address').value.trim();
  const instructions = document.getElementById('cust-notes').value.trim();
  const trxId = document.getElementById('cust-trxid') ? document.getElementById('cust-trxid').value.trim() : '';

  // Validations
  if (!name || !phone || !address) {
    showToast('Please complete all required shipping fields', 'error');
    return;
  }

  if (phone.length < 10) {
    showToast('Please enter a valid Bangladeshi phone number', 'error');
    return;
  }

  // Calculate order metrics
  const { subtotal, discount, shipping, grandTotal } = getCartCalculations();
  const orderId = `FLW-${Date.now().toString().slice(-6)}`;
  const orderDate = new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' });

  // Format Items Breakdown for email/notification
  const itemsBreakdown = AppState.cart.map(item => 
    `• ${item.title} (Qty: ${item.quantity}, Price: ${CONFIG.currencySymbol}${item.price}) ${item.customNote ? `[Custom Text: ${item.customNote}]` : ''}`
  ).join('\n');

  // Payload for Serverless Form (Web3Forms / Formspree)
  const payload = {
    access_key: CONFIG.web3FormsKey, // Web3Forms public key
    subject: `New Flowris Order: #${orderId} from ${name}`,
    from_name: "Flowris Gifts Storefront",
    order_id: orderId,
    customer_name: name,
    phone_number: phone,
    alt_phone_number: altPhone || 'N/A',
    delivery_district: district,
    shipping_zone: AppState.shippingZone === 'inside-dhaka' ? 'Inside Dhaka (৳80/Free)' : 'Outside Dhaka (৳150)',
    delivery_address: address,
    gift_notes: instructions || 'N/A',
    payment_method: AppState.paymentMethod === 'bkash' ? 'bKash / Nagad Send-Money' : 'Cash on Delivery (COD)',
    bkash_trxid: trxId || 'Pending Verification',
    subtotal: `${CONFIG.currencySymbol}${subtotal}`,
    discount: `${CONFIG.currencySymbol}${discount}`,
    shipping_fee: `${CONFIG.currencySymbol}${shipping}`,
    grand_total: `${CONFIG.currencySymbol}${grandTotal}`,
    ordered_items: itemsBreakdown,
    order_timestamp: orderDate
  };

  // UI state: loading
  submitBtn.disabled = true;
  submitBtn.innerHTML = `
    <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    Securing Your Order...
  `;

  try {
    // Attempt Serverless submission if endpoint or key is configured
    let submittedSuccessfully = false;

    if (CONFIG.web3FormsKey && CONFIG.web3FormsKey !== "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      });
      const json = await res.json();
      submittedSuccessfully = json.success;
    } else if (CONFIG.formspreeEndpoint) {
      const res = await fetch(CONFIG.formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      });
      submittedSuccessfully = res.ok;
    } else {
      // In demo mode without configured keys: simulate instant high-speed serverless response
      await new Promise(resolve => setTimeout(resolve, 800));
      submittedSuccessfully = true;
    }

    if (submittedSuccessfully) {
      showOrderSuccessScreen(orderId, name, phone, grandTotal, payload);
      // Clear Cart
      AppState.cart = [];
      AppState.appliedPromo = null;
      Storage.saveCart(AppState.cart);
      updateCartUI();
    } else {
      throw new Error('Form submission failed');
    }
  } catch (err) {
    console.error('Submission error:', err);
    // Even if remote webhook fails, allow fallback to WhatsApp confirmation
    showOrderSuccessScreen(orderId, name, phone, grandTotal, payload, true);
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnText;
  }
}

// Display Order Confirmation View
function showOrderSuccessScreen(orderId, name, phone, grandTotal, payload, hadNetworkIssue = false) {
  const modalContent = document.getElementById('checkout-modal-content');
  if (!modalContent) return;

  // Build WhatsApp invoice text
  const waReceipt = `🌸 *FLOWRIS ORDER CONFIRMATION* 🌸\n` +
    `*Order ID:* ${orderId}\n` +
    `*Customer:* ${name}\n` +
    `*Phone:* ${phone}\n` +
    `*Address:* ${payload.delivery_address}\n` +
    `*District:* ${payload.delivery_district}\n` +
    `*Payment Method:* ${payload.payment_method}\n` +
    `${payload.bkash_trxid !== 'Pending Verification' ? `*TrxID:* ${payload.bkash_trxid}\n` : ''}` +
    `--------------------------\n` +
    `*Items:*\n${payload.ordered_items}\n` +
    `--------------------------\n` +
    `*Subtotal:* ${payload.subtotal}\n` +
    `*Delivery Fee:* ${payload.shipping_fee}\n` +
    `*Discount:* ${payload.discount}\n` +
    `*TOTAL PAYABLE:* ${payload.grand_total}\n\n` +
    `Thank you! Looking forward to receiving this handcrafted gift. ✨`;

  const waLink = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(waReceipt)}`;

  modalContent.innerHTML = `
    <div class="p-6 sm:p-8 text-center">
      <div class="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
        <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h3 class="text-2xl font-bold text-gray-900 font-serif mb-1">Thank You, ${escapeHtml(name)}!</h3>
      <p class="text-sm text-gray-600 mb-4">
        Your handcrafted gift order has been received with love.
      </p>

      <div class="bg-purple-50/70 border border-purple-100 rounded-xl p-4 text-left mb-6 text-sm">
        <div class="flex justify-between items-center mb-2 pb-2 border-b border-purple-100/70">
          <span class="text-gray-500">Order Reference:</span>
          <span class="font-mono font-bold text-purple-700 text-base">${orderId}</span>
        </div>
        <div class="flex justify-between items-center mb-2">
          <span class="text-gray-500">Estimated Delivery:</span>
          <span class="font-medium text-gray-800">2-4 Business Days</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-gray-500">Total Payable:</span>
          <span class="font-bold text-purple-900 text-base font-serif">${CONFIG.currencySymbol}${grandTotal.toLocaleString()}</span>
        </div>
      </div>

      ${hadNetworkIssue ? `
        <div class="bg-amber-50 border border-amber-200 text-amber-800 text-xs rounded-lg p-3 mb-5 text-left">
          ⚠️ Please click the button below to confirm your order details via WhatsApp to complete instant verification.
        </div>
      ` : `
        <p class="text-xs text-gray-500 mb-6">
          Our Dhaka team will call you at <strong>${escapeHtml(phone)}</strong> to confirm your dispatch. You can also send the receipt to our WhatsApp for instant priority updates!
        </p>
      `}

      <div class="flex flex-col sm:flex-row gap-3">
        <a 
          href="${waLink}" 
          target="_blank" 
          rel="noopener"
          class="flex-1 px-5 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-md transition-all"
        >
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
          </svg>
          Confirm via WhatsApp
        </a>
        <button 
          type="button" 
          onclick="closeCheckoutModal(); location.reload();" 
          class="px-5 py-3 border border-purple-200 text-purple-700 hover:bg-purple-50 rounded-xl font-medium text-sm transition-all"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  `;
}

// Checkout directly via WhatsApp (one-click bypass for customers who prefer chatting)
function checkoutDirectViaWhatsApp() {
  if (AppState.cart.length === 0) {
    showToast('Your cart is empty!', 'warning');
    return;
  }

  const { subtotal, grandTotal } = getCartCalculations();
  const orderId = `FLW-${Date.now().toString().slice(-6)}`;

  let message = `Hello Flowris team! 🌸 I would like to place an order from your website:\n\n`;
  message += `*Order Ref:* ${orderId}\n`;
  message += `--------------------------\n`;
  AppState.cart.forEach((item, idx) => {
    message += `${idx + 1}. *${item.title}* × ${item.quantity} = ${CONFIG.currencySymbol}${(item.price * item.quantity).toLocaleString()}\n`;
    if (item.customNote) {
      message += `   ✍️ Note: ${item.customNote}\n`;
    }
  });
  message += `--------------------------\n`;
  message += `*Subtotal:* ${CONFIG.currencySymbol}${subtotal.toLocaleString()}\n`;
  message += `*Total Estimate:* ${CONFIG.currencySymbol}${grandTotal.toLocaleString()}\n\n`;
  message += `Please confirm my order and let me know the delivery schedule. Thank you!`;

  const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');
}

// ==========================================
// CUSTOM ORDER REQUEST FORM (LANDING PAGE)
// ==========================================
async function handleCustomOrderSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;

  const name = form.querySelector('[name="name"]').value.trim();
  const phone = form.querySelector('[name="phone"]').value.trim();
  const giftType = form.querySelector('[name="gift_type"]').value;
  const budget = form.querySelector('[name="budget"]').value;
  const deadline = form.querySelector('[name="deadline"]').value;
  const details = form.querySelector('[name="details"]').value.trim();

  if (!name || !phone || !details) {
    showToast('Please fill out all required custom request fields', 'error');
    return;
  }

  const payload = {
    access_key: CONFIG.web3FormsKey,
    subject: `New Custom Gift Inquiry from ${name} (${giftType})`,
    from_name: "Flowris Custom Order Request",
    customer_name: name,
    phone_number: phone,
    gift_type: giftType,
    budget_range: budget || 'Flexible',
    needed_by_date: deadline || 'Standard',
    custom_description: details,
    requested_at: new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' })
  };

  submitBtn.disabled = true;
  submitBtn.textContent = 'Submitting Request...';

  try {
    if (CONFIG.web3FormsKey && CONFIG.web3FormsKey !== "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } else {
      await new Promise(r => setTimeout(r, 600));
    }

    form.reset();
    showToast('Your custom gift inquiry was received! We will reach out shortly. 🌸', 'success');
  } catch (err) {
    showToast('Request noted! You can also chat with us directly on WhatsApp.', 'info');
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
  }
}

// ==========================================
// TOAST NOTIFICATION UTILITY
// ==========================================
function showToast(message, type = 'info') {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'fixed bottom-5 right-5 z-[9999] flex flex-col gap-2 pointer-events-none max-w-sm w-full px-4';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  const typeIcons = {
    success: `<svg class="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`,
    error: `<svg class="w-5 h-5 text-rose-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>`,
    warning: `<svg class="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>`,
    info: `<svg class="w-5 h-5 text-purple-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
  };

  toast.className = 'pointer-events-auto flex items-center gap-3 bg-white/95 backdrop-blur-md border border-purple-100 shadow-xl rounded-2xl p-3.5 text-xs sm:text-sm text-gray-800 transform translate-y-4 opacity-0 transition-all duration-300';
  toast.innerHTML = `
    ${typeIcons[type] || typeIcons.info}
    <div class="flex-1 font-medium">${message}</div>
  `;

  toastContainer.appendChild(toast);

  // Trigger enter animation
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
  });

  // Auto remove after 3.2s
  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-2', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ==========================================
// EVENT LISTENERS & URL HANDLERS
// ==========================================
function setupEventListeners() {
  // Search Input live typing
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      AppState.searchQuery = e.target.value;
      filterAndSortProducts();
    });
  }

  // Sort Dropdown
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      AppState.sortBy = e.target.value;
      filterAndSortProducts();
    });
  }

  // Category filter pills
  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      AppState.activeCategory = btn.dataset.category || 'all';
      filterAndSortProducts();
    });
  });

  // Mobile navigation drawer
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  if (mobileMenuToggle && mobileNavDrawer) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileNavDrawer.classList.toggle('active');
    });
  }

  // Checkout form submit
  const checkoutForm = document.getElementById('checkout-form');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', handleCheckoutSubmit);
  }

  // Custom order form submit
  const customOrderForm = document.getElementById('custom-order-form');
  if (customOrderForm) {
    customOrderForm.addEventListener('submit', handleCustomOrderSubmit);
  }

  // Close modals on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeCartDrawer();
      closeWishlistDrawer();
      closeCheckoutModal();
    }
  });
}

function handleUrlParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get('category');
  const productParam = urlParams.get('product');

  if (categoryParam) {
    const matchingPill = document.querySelector(`.filter-pill[data-category="${categoryParam}"]`);
    if (matchingPill) {
      matchingPill.click();
    }
  }

  if (productParam) {
    setTimeout(() => {
      openProductModal(productParam);
    }, 400);
  }
}

// Utility function to escape HTML
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
