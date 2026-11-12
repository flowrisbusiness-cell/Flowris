/**
 * FLOWRIS - Handcrafted Gifts E-Commerce Client
 * 100% Client-Side, Zero-Cost Static Architecture
 * 
 * Rules:
 * - Free delivery if amount > 2999 BDT
 * - Delivery charge 60 Tk
 * - Delivery only in 2-3 days
 * - Customized product: 30% advance via bKash/Nagad
 * - Non-customized product: 100% Cash on Delivery (no advance needed)
 */

// ==========================================
// CONFIGURATION & STORE SETTINGS
// ==========================================
const CONFIG = {
  storeName: "Flowris",
  tagline: "Artisanal Gifts & Botanical Keepsakes",
  currencySymbol: "৳",
  phone: "01886338064",
  whatsappNumber: "8801886338064",
  email: "flowris.business@gmail.com",
  bKashNumber: "01886338064 (Personal)",
  nagadNumber: "01886338064 (Personal)",
  address: "Dhaka, Bangladesh",
  deliveryCharge: 60,
  freeShippingThreshold: 2999, // Free delivery if subtotal > 2999
  deliveryTime: "2-3 Days",
  customAdvancePercent: 30, // 30% advance for custom items
  web3FormsKey: "29722476-0beb-4700-8231-9bf14fa69367"
};

// Streamlined 6 signature products fallback
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
    "image": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=80"
    ],
    "badge": "Bestseller",
    "inStock": true,
    "shortDescription": "Personalized monogram LED letter lamp with real preserved flowers in crystal epoxy resin on a beechwood base.",
    "description": "Each letter is handcrafted individually in Dhaka using high-clarity UV-resistant crystal epoxy resin, preserved baby's breath, real dried rose petals, and 24k gold foil leaf. Mounted on a solid beechwood base with a warm USB LED strip.",
    "customizable": true,
    "customizationLabel": "Enter Initial / Letter (A-Z) & Custom Base Text",
    "materials": "Crystal Epoxy Resin, Real Preserved Flowers, 24K Gold Foil, Beechwood Base",
    "dimensions": "15cm x 15cm x 4.5cm",
    "tags": ["bestseller", "resin", "lamp", "personalized"]
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
    "image": "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=900&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=80"
    ],
    "badge": "Trending",
    "inStock": true,
    "shortDescription": "Everlasting preserved natural roses wrapped in luxury matte Japanese paper with silk satin ribbons.",
    "description": "Our signature preserved bouquet will stay vibrant and soft for up to 3 years without water or sunlight! Sourced ethically and hand-tied by our master floral artisans in Dhaka.",
    "customizable": false,
    "customizationLabel": "",
    "materials": "Preserved Natural Roses, Japanese Waterproof Wrapping, Silk Satin Ribbon",
    "dimensions": "35cm Height x 25cm Width",
    "tags": ["bouquet", "flowers", "roses", "anniversary"]
  },
  {
    "id": "flow-03",
    "title": "Custom Hand-Crafted Couple Spotify Plaque",
    "category": "Personalized Gifts",
    "categorySlug": "personalized",
    "price": 950,
    "originalPrice": 1250,
    "discountPercent": 24,
    "rating": 4.8,
    "reviewCount": 67,
    "image": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=900&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=900&q=80"
    ],
    "badge": "Popular",
    "inStock": true,
    "shortDescription": "Cast acrylic plaque printed with your favorite song, scannable Spotify code, and custom photo.",
    "description": "Commemorate your special song, anniversary date, or memorable trip. Comes with a laser-cut natural wooden stand. Hold up your Spotify phone camera to instantly play the song!",
    "customizable": true,
    "customizationLabel": "Song Title, Artist & Photo details (send via WhatsApp)",
    "materials": "3mm Clear Cast Acrylic, UV Sublimation Ink, Oakwood Stand",
    "dimensions": "20cm x 15cm (A5 size)",
    "tags": ["acrylic", "music", "spotify", "couple", "personalized"]
  },
  {
    "id": "flow-04",
    "title": "Royal Velvet Lavender & Vanilla Soy Candle",
    "category": "Home Decor & Candles",
    "categorySlug": "decor",
    "price": 650,
    "originalPrice": 850,
    "discountPercent": 23,
    "rating": 4.9,
    "reviewCount": 49,
    "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1572726729437-3732efed3f8a?auto=format&fit=crop&w=900&q=80"
    ],
    "badge": "Organic",
    "inStock": true,
    "shortDescription": "100% natural organic soy wax hand-poured candle in an amber glass jar with French lavender oils.",
    "description": "Clean, soot-free burn with lead-free crackling wooden wick. Formulated to relieve stress, enhance bedtime serenity, and bring a luxury boutique aroma to any room. 45+ hours burn time.",
    "customizable": false,
    "customizationLabel": "",
    "materials": "100% Natural Soy Wax, French Lavender Essential Oil, Crackling Wood Wick, Amber Glass",
    "dimensions": "200g / 7oz Jar",
    "tags": ["candle", "lavender", "aromatherapy", "home decor"]
  },
  {
    "id": "flow-05",
    "title": "The Luxe Empress Wooden Gift Hamper Box",
    "category": "Luxury Gift Boxes",
    "categorySlug": "gift-boxes",
    "price": 2850,
    "originalPrice": 3500,
    "discountPercent": 18,
    "rating": 5.0,
    "reviewCount": 54,
    "image": "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80"
    ],
    "badge": "Curated",
    "inStock": true,
    "shortDescription": "Pine wood engraved memory box with scented candle, resin keychain, mini bouquet & chocolates.",
    "description": "The ultimate turnkey gift set for birthdays, brides, anniversaries, or celebrations. Includes our bestselling soy candle, personalized golden initial keychain, dry flower mini posy, Ferrero Rocher chocolates, and handwritten calligraphy card.",
    "customizable": true,
    "customizationLabel": "Recipient Name for lid engraving & handwritten card note",
    "materials": "Natural Pine Wood, Brass Latch, Scented Candle, Handcrafted Keepsakes",
    "dimensions": "28cm x 22cm x 11cm",
    "tags": ["hamper", "gift box", "luxury", "birthday"]
  },
  {
    "id": "flow-06",
    "title": "Golden Flake Resin Initial Keychain",
    "category": "Resin Art",
    "categorySlug": "resin-art",
    "price": 450,
    "originalPrice": 600,
    "discountPercent": 25,
    "rating": 4.7,
    "reviewCount": 92,
    "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80"
    ],
    "badge": "Pocket Luxe",
    "inStock": true,
    "shortDescription": "Crystal clear monogram keychain infused with dried hydrangeas, gold foil, and luxury gold clasp.",
    "description": "An adorable everyday accessory or pocket gift for friends and bridesmaids. Ultra-durable, scratch-resistant resin combined with premium anti-tarnish golden hardware.",
    "customizable": true,
    "customizationLabel": "Letter (A-Z) & Preferred Color (Pink / Purple / Gold)",
    "materials": "Epoxy Resin, Dried Hydrangeas, Gold Leaf, Alloy Clasp",
    "dimensions": "Letter Height: 4cm",
    "tags": ["keychain", "resin", "accessories", "budget"]
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
  paymentMethod: 'cod', // 'cod' or 'bkash'

  availablePromos: {
    'FLOWRIS2026': { type: 'percent', value: 10, label: '10% OFF Special Launch Discount' },
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
      window.dispatchEvent(new Event('cartUpdated'));
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
      window.dispatchEvent(new Event('wishlistUpdated'));
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
  AppState.cart = Storage.loadCart();
  AppState.wishlist = Storage.loadWishlist();

  await loadProducts();

  if (document.getElementById('products-grid')) {
    renderProducts();
  }

  updateCartUI();
  updateWishlistUI();
  setupEventListeners();
  handleUrlParams();

  window.addEventListener('storage', () => {
    AppState.cart = Storage.loadCart();
    AppState.wishlist = Storage.loadWishlist();
    updateCartUI();
    updateWishlistUI();
  });
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
    AppState.products = FALLBACK_PRODUCTS;
  }
  AppState.filteredProducts = [...AppState.products];
}

// ==========================================
// CATALOG RENDERING & FILTERING
// ==========================================
function filterAndSortProducts() {
  let list = [...AppState.products];

  if (AppState.activeCategory !== 'all') {
    list = list.filter(item => item.categorySlug === AppState.activeCategory);
  }

  if (AppState.searchQuery.trim() !== '') {
    const q = AppState.searchQuery.toLowerCase().trim();
    list = list.filter(item => 
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.shortDescription.toLowerCase().includes(q) ||
      (item.tags && item.tags.some(tag => tag.toLowerCase().includes(q)))
    );
  }

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
    countBadge.textContent = `${AppState.filteredProducts.length} handcrafted pieces • 2-3 Days Delivery`;
  }

  if (AppState.filteredProducts.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="w-16 h-16 mx-auto mb-4 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center text-3xl">
          🔍
        </div>
        <h3 class="text-xl font-bold text-gray-800 mb-2">No matching gifts found</h3>
        <p class="text-gray-500 max-w-md mx-auto mb-6 text-xs sm:text-sm">
          Try selecting another category or view all our handcrafted gifts.
        </p>
        <button onclick="resetFilters()" class="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full text-xs sm:text-sm shadow-md transition-all focus-visible:ring-2 focus-visible:ring-purple-600">
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
      <div class="group relative bg-white rounded-3xl overflow-hidden border border-purple-100/70 shadow-soft shadow-hover flex flex-col transition-all duration-300">
        
        <!-- Image Container -->
        <div class="relative w-full pt-[95%] overflow-hidden bg-purple-50/40 cursor-pointer" onclick="openProductModal('${product.id}')">
          <img 
            src="${product.image}" 
            alt="${escapeHtml(product.title)}" 
            loading="lazy"
            class="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />

          <!-- Floating Badges -->
          <div class="absolute top-3.5 left-3.5 flex flex-col gap-1.5 z-10 pointer-events-none">
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
            class="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/95 backdrop-blur-md shadow-md flex items-center justify-center text-gray-400 hover:text-rose-500 transition-all z-10 focus-visible:ring-2 focus-visible:ring-rose-500 ${isWishlisted ? 'text-rose-500 ring-2 ring-rose-200' : ''}"
          >
            <svg class="w-5 h-5 ${isWishlisted ? 'fill-current' : 'fill-none stroke-current'}" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>

          <!-- Quick View & Shareable Full Page Trigger -->
          <div class="hidden sm:flex absolute inset-x-0 bottom-3.5 justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 px-3">
            <span class="px-3.5 py-1.5 bg-gray-900/85 hover:bg-gray-900 text-white text-xs font-medium rounded-full backdrop-blur-md shadow-lg transition-transform transform translate-y-1 group-hover:translate-y-0">
              Quick View
            </span>
            <a 
              href="product.html?id=${product.id}" 
              onclick="event.stopPropagation()"
              class="px-3.5 py-1.5 bg-white/95 hover:bg-white text-purple-900 text-xs font-semibold rounded-full backdrop-blur-md shadow-lg transition-transform transform translate-y-1 group-hover:translate-y-0"
              title="Open Shareable Page (for Facebook post)"
            >
              Share Page ↗
            </a>
          </div>
        </div>

        <!-- Product Details -->
        <div class="p-4 sm:p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between text-xs text-gray-500 mb-1.5">
              <span class="font-semibold text-purple-600 tracking-wider uppercase text-[10px] sm:text-[11px]">${product.category}</span>
              <div class="flex items-center gap-1 text-amber-500 font-semibold">
                <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span>${product.rating}</span>
                <span class="text-gray-400 font-normal">(${product.reviewCount})</span>
              </div>
            </div>

            <!-- Title -->
            <h4 class="font-semibold text-gray-900 text-sm sm:text-base leading-snug line-clamp-2 mb-1.5 group-hover:text-purple-600 transition-colors cursor-pointer" onclick="openProductModal('${product.id}')">
              ${escapeHtml(product.title)}
            </h4>

            <!-- Short description -->
            <p class="text-gray-500 text-xs line-clamp-2 mb-2 leading-relaxed">
              ${escapeHtml(product.shortDescription)}
            </p>

            <!-- Policy Badge: Custom 30% vs Full COD -->
            <div class="mb-3">
              ${product.customizable ? `
                <span class="inline-flex items-center gap-1 text-[10px] font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-100">
                  🎨 Custom Piece (30% Advance)
                </span>
              ` : `
                <span class="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                  ⚡ 100% Cash on Delivery
                </span>
              `}
            </div>
          </div>

          <!-- Price & Action Row -->
          <div class="pt-3 border-t border-purple-50 flex items-center justify-between">
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
              <span class="text-[10px] text-gray-400 font-medium">🚚 2-3 Days Delivery (৳60)</span>
            </div>

            <div class="flex items-center gap-1.5">
              <a 
                href="product.html?id=${product.id}" 
                class="w-9 h-9 rounded-xl border border-purple-100 hover:border-purple-300 text-gray-500 hover:text-purple-700 flex items-center justify-center transition-all focus-visible:ring-2 focus-visible:ring-purple-600"
                title="View Full Page"
              >
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>

              <button 
                type="button" 
                onclick="event.stopPropagation(); quickAddToCart('${product.id}')"
                class="w-10 h-10 rounded-xl bg-purple-600 hover:bg-purple-700 text-white transition-all flex items-center justify-center shadow-md active:scale-95 focus-visible:ring-2 focus-visible:ring-purple-600"
                title="Add to Bag"
                aria-label="Add to Bag"
              >
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
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

  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';

  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) sortSelect.value = 'featured';

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
  
  // Customization field
  const customSection = document.getElementById('modal-customization-section');
  const customInput = document.getElementById('modal-custom-text');
  const customLabel = document.getElementById('modal-custom-label');
  
  if (product.customizable) {
    customSection.classList.remove('hidden');
    customLabel.textContent = (product.customizationLabel || 'Enter Your Custom Details:') + ' (Requires 30% bKash Advance)';
    customInput.value = '';
    customInput.placeholder = 'e.g. Letter / Name / Date';
  } else {
    customSection.classList.add('hidden');
    customInput.value = '';
  }

  // Thumbnails
  const thumbsContainer = document.getElementById('modal-thumbnails');
  if (thumbsContainer) {
    const gallery = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];
    thumbsContainer.innerHTML = gallery.map((imgSrc, idx) => `
      <button 
        type="button" 
        onclick="setModalMainImage('${imgSrc}', this)"
        class="w-14 h-14 rounded-xl overflow-hidden border-2 transition-all focus-visible:ring-2 focus-visible:ring-purple-600 ${idx === 0 ? 'border-purple-600 ring-2 ring-purple-200' : 'border-transparent opacity-75 hover:opacity-100'}"
      >
        <img src="${imgSrc}" class="w-full h-full object-cover" alt="thumbnail" />
      </button>
    `).join('');
  }

  // Link to dedicated product page
  const viewFullPageBtn = document.getElementById('modal-view-fullpage-link');
  if (viewFullPageBtn) {
    viewFullPageBtn.href = `product.html?id=${product.id}`;
  }

  document.getElementById('modal-qty-input').value = '1';

  modal.classList.add('active');
  document.body.classList.add('overflow-hidden');
}

function setModalMainImage(imgSrc, btn) {
  const mainImg = document.getElementById('modal-img-main');
  if (mainImg) mainImg.src = imgSrc;

  const allBtns = document.getElementById('modal-thumbnails')?.querySelectorAll('button') || [];
  allBtns.forEach(b => {
    b.classList.remove('border-purple-600', 'ring-2', 'ring-purple-200');
    b.classList.add('border-transparent', 'opacity-75');
  });
  if (btn) {
    btn.classList.add('border-purple-600', 'ring-2', 'ring-purple-200');
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
  const customNote = document.getElementById('modal-custom-text')?.value.trim() || '';

  addToCart(product.id, qty, customNote);
  closeProductModal();
}

function modalBuyViaWhatsApp() {
  if (!AppState.selectedProductForModal) return;
  const product = AppState.selectedProductForModal;
  const qty = parseInt(document.getElementById('modal-qty-input').value) || 1;
  const customNote = document.getElementById('modal-custom-text')?.value.trim() || '';
  const totalPrice = product.price * qty;

  let message = `Hello Flowris! 🌸 I would like to order this handcrafted item:\n\n`;
  message += `🎁 *Item:* ${product.title}\n`;
  message += `📦 *Quantity:* ${qty}\n`;
  message += `💰 *Price:* ${CONFIG.currencySymbol}${totalPrice.toLocaleString()}\n`;
  if (customNote) {
    message += `✍️ *Customization:* ${customNote}\n`;
    message += `⚠️ *Note:* Ready to pay 30% advance via bKash\n`;
  } else {
    message += `⚡ *Payment:* Cash on Delivery\n`;
  }
  message += `🚚 *Delivery:* In 2-3 Days (৳60 delivery charge)\n\n`;
  message += `Please confirm availability. Thank you!`;

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

  const isCustom = Boolean(product.customizable || (customNote && customNote.trim() !== ''));

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
      customNote: customNote,
      customizable: isCustom
    });
  }

  Storage.saveCart(AppState.cart);
  updateCartUI();
  showToast(`Added "${product.title}" to bag! 🛍️`, 'success');
  openCartDrawer();
}

function updateCartItemQuantity(index, delta) {
  if (!AppState.cart[index]) return;
  AppState.cart[index].quantity += delta;
  
  if (AppState.cart[index].quantity <= 0) {
    AppState.cart.splice(index, 1);
    showToast('Item removed from bag', 'info');
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
    showToast(`Removed "${removed[0].title}" from bag`, 'info');
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

// Order Calculations (Free shipping > 2999, ৳60 delivery, 30% advance on custom items)
function getCartCalculations() {
  const subtotal = AppState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  let discount = 0;
  if (AppState.appliedPromo) {
    if (AppState.appliedPromo.type === 'percent') {
      discount = Math.round((subtotal * AppState.appliedPromo.value) / 100);
    } else if (AppState.appliedPromo.type === 'flat') {
      discount = Math.min(AppState.appliedPromo.value, subtotal);
    }
  }

  // Delivery: Free if subtotal > 2999 BDT, otherwise ৳60
  let shipping = 0;
  if (subtotal > 0) {
    shipping = (subtotal > CONFIG.freeShippingThreshold) ? 0 : CONFIG.deliveryCharge;
  }

  const grandTotal = Math.max(0, subtotal - discount + shipping);

  // Check if any customized item exists in cart
  const hasCustomized = AppState.cart.some(item => 
    Boolean(item.customizable || (item.customNote && item.customNote.trim() !== ''))
  );

  let advancePayable = 0;
  let codPayable = grandTotal;

  if (hasCustomized && grandTotal > 0) {
    advancePayable = Math.round((grandTotal * CONFIG.customAdvancePercent) / 100);
    codPayable = grandTotal - advancePayable;
  }

  return { subtotal, discount, shipping, grandTotal, hasCustomized, advancePayable, codPayable };
}

function updateCartUI() {
  const totalCount = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);

  // Update Badges
  document.querySelectorAll('.cart-badge-count').forEach(badge => {
    badge.textContent = totalCount;
    badge.classList.toggle('hidden', totalCount === 0);
  });

  // Mobile Floating Cart Pill
  const mobileCartBar = document.getElementById('mobile-floating-cart');
  if (mobileCartBar) {
    if (totalCount > 0) {
      mobileCartBar.classList.remove('hidden');
      const { grandTotal } = getCartCalculations();
      const mobileTotal = document.getElementById('mobile-cart-total');
      const mobileCount = document.getElementById('mobile-cart-count');
      if (mobileTotal) mobileTotal.textContent = `${CONFIG.currencySymbol}${grandTotal.toLocaleString()}`;
      if (mobileCount) mobileCount.textContent = `${totalCount} item${totalCount > 1 ? 's' : ''}`;
    } else {
      mobileCartBar.classList.add('hidden');
    }
  }

  // Cart Drawer
  const itemsContainer = document.getElementById('cart-items-container');
  const emptyState = document.getElementById('cart-empty-state');
  const footerSection = document.getElementById('cart-footer-section');
  if (!itemsContainer) return;

  if (AppState.cart.length === 0) {
    if (emptyState) emptyState.classList.remove('hidden');
    if (footerSection) footerSection.classList.add('hidden');
    itemsContainer.innerHTML = '';
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');
  if (footerSection) footerSection.classList.remove('hidden');

  itemsContainer.innerHTML = AppState.cart.map((item, index) => `
    <div class="flex items-center gap-3.5 py-3 border-b border-purple-50 last:border-none">
      <img src="${item.image}" alt="${escapeHtml(item.title)}" class="w-16 h-16 rounded-2xl object-cover bg-purple-50 flex-shrink-0 border border-purple-100" />
      
      <div class="flex-1 min-w-0">
        <h5 class="text-xs sm:text-sm font-semibold text-gray-900 truncate">${escapeHtml(item.title)}</h5>
        ${item.customNote ? `
          <p class="text-[11px] text-purple-600 truncate mt-0.5 font-medium">
            ✍️ Custom: "${escapeHtml(item.customNote)}"
          </p>
        ` : ''}
        ${item.customizable ? `
          <span class="inline-block text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.2 rounded font-medium mt-0.5">30% Advance Item</span>
        ` : ''}
        <div class="text-xs text-gray-500 font-serif mt-0.5">
          ${CONFIG.currencySymbol}${item.price.toLocaleString()} × ${item.quantity} = <strong class="text-purple-700">${CONFIG.currencySymbol}${(item.price * item.quantity).toLocaleString()}</strong>
        </div>

        <div class="flex items-center gap-2 mt-2">
          <div class="inline-flex items-center rounded-xl border border-purple-100 bg-white">
            <button 
              type="button" 
              onclick="updateCartItemQuantity(${index}, -1)" 
              class="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-purple-700 text-sm font-bold focus-visible:ring-1 focus-visible:ring-purple-600"
            >-</button>
            <span class="w-7 text-center text-xs font-semibold text-gray-800">${item.quantity}</span>
            <button 
              type="button" 
              onclick="updateCartItemQuantity(${index}, 1)" 
              class="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-purple-700 text-sm font-bold focus-visible:ring-1 focus-visible:ring-purple-600"
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

  // Free Delivery Progress Bar (Goal: > 2999 BDT)
  const { subtotal, discount, shipping, grandTotal, hasCustomized, advancePayable, codPayable } = getCartCalculations();
  const threshold = CONFIG.freeShippingThreshold; // 2999
  const progressPercent = Math.min(100, Math.round((subtotal / threshold) * 100));
  const shippingProgressBar = document.getElementById('free-shipping-progress');
  const shippingMsg = document.getElementById('free-shipping-msg');

  if (shippingProgressBar && shippingMsg) {
    shippingProgressBar.style.width = `${progressPercent}%`;
    if (subtotal > threshold) {
      shippingMsg.innerHTML = `🎉 <strong>Congratulations!</strong> You unlocked <strong>FREE Delivery</strong> (2-3 Days)!`;
    } else {
      const remaining = threshold - subtotal + 1;
      shippingMsg.innerHTML = `Add <strong>${CONFIG.currencySymbol}${remaining.toLocaleString()}</strong> more for <strong>FREE Delivery</strong> (Order > ৳2,999)`;
    }
  }

  // Summary numbers
  const cartSubtotalEl = document.getElementById('cart-subtotal');
  const cartTotalEl = document.getElementById('cart-total');
  if (cartSubtotalEl) cartSubtotalEl.textContent = `${CONFIG.currencySymbol}${subtotal.toLocaleString()}`;
  if (cartTotalEl) cartTotalEl.textContent = `${CONFIG.currencySymbol}${grandTotal.toLocaleString()}`;

  const discountRow = document.getElementById('cart-discount-row');
  if (discountRow) {
    if (AppState.appliedPromo && discount > 0) {
      discountRow.classList.remove('hidden');
      document.getElementById('cart-discount-amount').textContent = `-${CONFIG.currencySymbol}${discount.toLocaleString()}`;
      document.getElementById('cart-applied-promo-tag').textContent = `(${AppState.appliedPromo.label})`;
    } else {
      discountRow.classList.add('hidden');
    }
  }

  // Advance Payment Banner in Cart
  let customAdvanceNotice = document.getElementById('cart-custom-advance-notice');
  if (!customAdvanceNotice && footerSection) {
    customAdvanceNotice = document.createElement('div');
    customAdvanceNotice.id = 'cart-custom-advance-notice';
    footerSection.insertBefore(customAdvanceNotice, footerSection.firstChild);
  }

  if (customAdvanceNotice) {
    if (hasCustomized) {
      customAdvanceNotice.className = 'mb-3.5 p-3 rounded-xl bg-purple-50 border border-purple-200 text-xs text-purple-900';
      customAdvanceNotice.innerHTML = `
        <div class="font-bold flex items-center gap-1.5 mb-1">
          <span>🎨</span> Custom Item: 30% Advance Required
        </div>
        <p class="text-[11px] text-purple-700 leading-snug">
          Advance: <strong>${CONFIG.currencySymbol}${advancePayable.toLocaleString()}</strong> via bKash/Nagad. Remaining <strong>${CONFIG.currencySymbol}${codPayable.toLocaleString()}</strong> on Cash on Delivery!
        </p>
      `;
    } else {
      customAdvanceNotice.className = 'mb-3.5 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900';
      customAdvanceNotice.innerHTML = `
        <div class="font-bold flex items-center gap-1.5">
          <span>⚡</span> 100% Cash on Delivery
        </div>
        <p class="text-[11px] text-emerald-700 mt-0.5">
          No advance payment needed for ready-made gifts. Pay when delivered!
        </p>
      `;
    }
  }
}

// Promo Code
function applyPromoCode() {
  const input = document.getElementById('promo-code-input');
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (!code) {
    showToast('Please enter a coupon code', 'warning');
    return;
  }

  if (AppState.availablePromos[code]) {
    AppState.appliedPromo = { code: code, ...AppState.availablePromos[code] };
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
      category: product.category,
      customizable: product.customizable
    });
    showToast(`Saved "${product.title}" to wishlist! ❤️`, 'success');
  }

  Storage.saveWishlist(AppState.wishlist);
  updateWishlistUI();
  if (document.getElementById('products-grid')) {
    renderProducts();
  }
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
    if (emptyState) emptyState.classList.remove('hidden');
    listContainer.innerHTML = '';
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');
  listContainer.innerHTML = AppState.wishlist.map(item => `
    <div class="flex items-center gap-3.5 py-3 border-b border-purple-50 last:border-none">
      <img src="${item.image}" alt="${escapeHtml(item.title)}" class="w-16 h-16 rounded-2xl object-cover bg-purple-50 flex-shrink-0 border border-purple-100" />
      <div class="flex-1 min-w-0">
        <h5 class="text-xs sm:text-sm font-semibold text-gray-900 truncate">${escapeHtml(item.title)}</h5>
        <p class="text-xs text-purple-600 font-serif font-semibold mt-0.5">${CONFIG.currencySymbol}${item.price.toLocaleString()}</p>
        <div class="flex items-center gap-2 mt-2">
          <button 
            type="button" 
            onclick="quickAddToCart('${item.id}'); toggleWishlist('${item.id}')"
            class="text-xs bg-purple-600 text-white font-medium px-3 py-1 rounded-lg hover:bg-purple-700 shadow-sm transition-all focus-visible:ring-1 focus-visible:ring-purple-600"
          >
            Move to Bag
          </button>
          <a 
            href="product.html?id=${item.id}"
            class="text-xs border border-purple-200 text-purple-700 px-2 py-1 rounded-lg hover:bg-purple-50"
          >
            View
          </a>
          <button 
            type="button" 
            onclick="toggleWishlist('${item.id}')"
            class="text-xs text-gray-400 hover:text-rose-500 ml-1"
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
    showToast('Your bag is empty! Add gifts before checkout.', 'warning');
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

function setPaymentMethod(method) {
  AppState.paymentMethod = method;
  const bkashBox = document.getElementById('checkout-bkash-instructions');
  if (bkashBox) {
    bkashBox.classList.toggle('hidden', method !== 'bkash');
  }
}

function renderCheckoutSummary() {
  const { subtotal, discount, shipping, grandTotal, hasCustomized, advancePayable, codPayable } = getCartCalculations();

  const subtotalEl = document.getElementById('checkout-subtotal');
  const shippingEl = document.getElementById('checkout-shipping');
  const grandTotalEl = document.getElementById('checkout-grand-total');

  if (subtotalEl) subtotalEl.textContent = `${CONFIG.currencySymbol}${subtotal.toLocaleString()}`;
  if (shippingEl) shippingEl.textContent = shipping === 0 ? 'FREE' : `${CONFIG.currencySymbol}${shipping.toLocaleString()}`;
  
  const discountRow = document.getElementById('checkout-discount-row');
  if (discountRow) {
    if (discount > 0) {
      discountRow.classList.remove('hidden');
      document.getElementById('checkout-discount').textContent = `-${CONFIG.currencySymbol}${discount.toLocaleString()}`;
    } else {
      discountRow.classList.add('hidden');
    }
  }

  if (grandTotalEl) grandTotalEl.textContent = `${CONFIG.currencySymbol}${grandTotal.toLocaleString()}`;

  // Mini items list preview
  const itemsContainer = document.getElementById('checkout-items-preview');
  if (itemsContainer) {
    itemsContainer.innerHTML = AppState.cart.map(item => `
      <div class="flex items-center justify-between text-xs py-1.5 border-b border-purple-50 last:border-none">
        <span class="truncate max-w-[200px] text-gray-700 font-medium">
          ${item.quantity}× ${escapeHtml(item.title)}
          ${item.customNote ? `<br><small class="text-purple-600 font-normal">Custom: ${escapeHtml(item.customNote)}</small>` : ''}
          ${item.customizable ? `<br><small class="text-amber-600 font-semibold">(30% advance)</small>` : ''}
        </span>
        <span class="font-serif text-gray-900 font-semibold">${CONFIG.currencySymbol}${(item.price * item.quantity).toLocaleString()}</span>
      </div>
    `).join('');
  }

  // Update Policy Callout inside Checkout Modal
  let checkoutPolicyEl = document.getElementById('checkout-policy-callout');
  if (!checkoutPolicyEl) {
    const parentContainer = document.getElementById('checkout-form');
    checkoutPolicyEl = document.createElement('div');
    checkoutPolicyEl.id = 'checkout-policy-callout';
    if (parentContainer && parentContainer.firstChild) {
      parentContainer.insertBefore(checkoutPolicyEl, parentContainer.firstChild);
    }
  }

  if (checkoutPolicyEl) {
    if (hasCustomized) {
      checkoutPolicyEl.className = 'p-3.5 rounded-2xl bg-purple-50 border border-purple-200 text-xs text-purple-900 mb-2';
      checkoutPolicyEl.innerHTML = `
        <div class="font-bold flex items-center gap-1.5 mb-1">
          <span>🎨</span> Customized Gift Order (30% Advance Required)
        </div>
        <p class="text-[11px] text-purple-700 leading-relaxed">
          Because personalized items are crafted uniquely for you, a <strong>30% advance (${CONFIG.currencySymbol}${advancePayable.toLocaleString()})</strong> is required via bKash/Nagad to start artisan crafting. The remaining <strong>70% (${CONFIG.currencySymbol}${codPayable.toLocaleString()})</strong> is paid on delivery in 2-3 days.
        </p>
      `;
      // Auto open bKash box to guide the user
      const bkashRadio = document.querySelector('input[name="payment-method"][value="bkash"]');
      if (bkashRadio) bkashRadio.checked = true;
      setPaymentMethod('bkash');
    } else {
      checkoutPolicyEl.className = 'p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 mb-2';
      checkoutPolicyEl.innerHTML = `
        <div class="font-bold flex items-center gap-1.5">
          <span>⚡</span> 100% Cash on Delivery
        </div>
        <p class="text-[11px] text-emerald-700 mt-0.5 leading-relaxed">
          Ready-to-deliver handcrafted gifts. No advance needed! Pay full <strong>${CONFIG.currencySymbol}${grandTotal.toLocaleString()}</strong> upon arrival in 2-3 days.
        </p>
      `;
    }
  }

  // Update Advance vs COD Breakdown Display
  let advanceBreakdownEl = document.getElementById('checkout-advance-breakdown');
  if (!advanceBreakdownEl) {
    const totalBox = document.getElementById('checkout-grand-total')?.parentElement;
    if (totalBox) {
      advanceBreakdownEl = document.createElement('div');
      advanceBreakdownEl.id = 'checkout-advance-breakdown';
      advanceBreakdownEl.className = 'text-xs text-gray-500 pt-1 pb-2';
      totalBox.parentElement.insertBefore(advanceBreakdownEl, totalBox.nextSibling);
    }
  }

  if (advanceBreakdownEl) {
    if (hasCustomized) {
      advanceBreakdownEl.innerHTML = `
        <div class="flex justify-between font-semibold text-purple-700 text-xs pt-1">
          <span>• 30% Advance to Pay Now:</span>
          <span>${CONFIG.currencySymbol}${advancePayable.toLocaleString()}</span>
        </div>
        <div class="flex justify-between text-gray-600 text-xs">
          <span>• Remaining Cash on Delivery:</span>
          <span>${CONFIG.currencySymbol}${codPayable.toLocaleString()}</span>
        </div>
      `;
    } else {
      advanceBreakdownEl.innerHTML = `
        <div class="text-right text-[11px] text-emerald-600 font-semibold">
          ✓ Full Cash on Delivery upon 2-3 days arrival
        </div>
      `;
    }
  }
}

// Handle Order Submission to Web3Forms
async function handleCheckoutSubmit(e) {
  e.preventDefault();
  const submitBtn = document.getElementById('place-order-btn');
  const originalBtnText = submitBtn.innerHTML;

  const name = document.getElementById('cust-name').value.trim();
  const phone = document.getElementById('cust-phone').value.trim();
  const area = document.getElementById('cust-area')?.value || 'Dhaka';
  const address = document.getElementById('cust-address').value.trim();
  const instructions = document.getElementById('cust-notes')?.value.trim() || '';
  const trxId = document.getElementById('cust-trxid')?.value.trim() || '';

  if (!name || !phone || !address) {
    showToast('Please complete all required fields', 'error');
    return;
  }

  if (phone.length < 11) {
    showToast('Please enter a valid 11-digit phone number (e.g. 018XXXXXXXX)', 'error');
    return;
  }

  const { subtotal, discount, shipping, grandTotal, hasCustomized, advancePayable, codPayable } = getCartCalculations();
  const orderId = `FLW-${Date.now().toString().slice(-6)}`;
  const orderDate = new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' });

  const itemsBreakdown = AppState.cart.map(item => 
    `• ${item.title} (Qty: ${item.quantity}, Price: ${CONFIG.currencySymbol}${item.price}) ${item.customNote ? `[Custom: ${item.customNote}]` : ''}`
  ).join('\n');

  const payload = {
    access_key: CONFIG.web3FormsKey,
    subject: `🌸 New Flowris Order #${orderId} from ${name}`,
    from_name: "Flowris Storefront (Dhaka)",
    order_id: orderId,
    customer_name: name,
    customer_phone: phone,
    dhaka_area: area,
    delivery_address: address,
    delivery_timeline: "2-3 Days",
    delivery_fee: `${CONFIG.currencySymbol}${shipping}`,
    customization_status: hasCustomized ? "Personalized Items (30% Advance Required)" : "Ready Items (100% Cash on Delivery)",
    advance_amount_30pct: hasCustomized ? `${CONFIG.currencySymbol}${advancePayable}` : 'N/A',
    cod_remaining_amount: `${CONFIG.currencySymbol}${codPayable}`,
    payment_method: AppState.paymentMethod === 'bkash' ? 'bKash / Nagad Send-Money' : 'Cash on Delivery (COD)',
    bkash_trxid: trxId || 'Pending Verification',
    subtotal: `${CONFIG.currencySymbol}${subtotal}`,
    discount: `${CONFIG.currencySymbol}${discount}`,
    grand_total: `${CONFIG.currencySymbol}${grandTotal}`,
    ordered_items: itemsBreakdown,
    order_timestamp: orderDate
  };

  submitBtn.disabled = true;
  submitBtn.innerHTML = `
    <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    Securing Your Order...
  `;

  try {
    let submitted = false;
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload)
    });
    const json = await res.json();
    submitted = json.success;

    if (submitted) {
      showOrderSuccessScreen(orderId, name, phone, grandTotal, payload, hasCustomized, advancePayable, codPayable);
      AppState.cart = [];
      AppState.appliedPromo = null;
      Storage.saveCart(AppState.cart);
      updateCartUI();
    } else {
      throw new Error(json.message || 'Submission error');
    }
  } catch (err) {
    showOrderSuccessScreen(orderId, name, phone, grandTotal, payload, hasCustomized, advancePayable, codPayable, true);
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnText;
  }
}

// Display Order Confirmation View
function showOrderSuccessScreen(orderId, name, phone, grandTotal, payload, hasCustomized, advancePayable, codPayable, hadNetworkIssue = false) {
  const modalContent = document.getElementById('checkout-modal-content');
  if (!modalContent) return;

  const waReceipt = `🌸 *FLOWRIS ORDER CONFIRMATION* 🌸\n` +
    `*Order Ref:* ${orderId}\n` +
    `*Customer:* ${name}\n` +
    `*Phone:* ${phone}\n` +
    `*Address:* ${payload.delivery_address}, ${payload.dhaka_area}\n` +
    `*Delivery:* 2-3 Days (Fee: ${payload.delivery_fee})\n` +
    `--------------------------\n` +
    `*Items:*\n${payload.ordered_items}\n` +
    `--------------------------\n` +
    `*TOTAL:* ${payload.grand_total}\n` +
    (hasCustomized ? `*30% Advance via bKash:* ${CONFIG.currencySymbol}${advancePayable}\n*Remaining COD:* ${CONFIG.currencySymbol}${codPayable}\n` : `*Payment:* 100% Cash on Delivery\n`) +
    `${payload.bkash_trxid !== 'Pending Verification' ? `*TrxID:* ${payload.bkash_trxid}\n` : ''}` +
    `\nThank you! Looking forward to receiving this handcrafted gift. ✨`;

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
        Your handcrafted order is confirmed. Delivery in <strong>2-3 days</strong>.
      </p>

      <div class="bg-purple-50/70 border border-purple-100 rounded-2xl p-4 text-left mb-6 text-sm">
        <div class="flex justify-between items-center mb-2 pb-2 border-b border-purple-100/70">
          <span class="text-gray-500">Order Reference:</span>
          <span class="font-mono font-bold text-purple-700 text-base">${orderId}</span>
        </div>
        <div class="flex justify-between items-center mb-2">
          <span class="text-gray-500">Delivery Time:</span>
          <span class="font-medium text-gray-800">2-3 Days</span>
        </div>
        <div class="flex justify-between items-center mb-2">
          <span class="text-gray-500">Total Payable:</span>
          <span class="font-bold text-purple-900 text-base font-serif">${CONFIG.currencySymbol}${grandTotal.toLocaleString()}</span>
        </div>
        ${hasCustomized ? `
          <div class="pt-2 border-t border-purple-100/70 text-xs text-purple-800">
            <strong>⚠️ 30% Advance:</strong> ${CONFIG.currencySymbol}${advancePayable.toLocaleString()} via bKash 01886338064<br>
            <strong>Remaining COD:</strong> ${CONFIG.currencySymbol}${codPayable.toLocaleString()} upon arrival
          </div>
        ` : `
          <div class="pt-2 border-t border-purple-100/70 text-xs text-emerald-700 font-medium">
            ✓ 100% Cash on Delivery upon 2-3 days arrival
          </div>
        `}
      </div>

      <p class="text-xs text-gray-500 mb-6">
        Our team will contact you at <strong>${escapeHtml(phone)}</strong> before dispatch. You can also send this receipt to WhatsApp for instant confirmation!
      </p>

      <div class="flex flex-col sm:flex-row gap-3">
        <a 
          href="${waLink}" 
          target="_blank" 
          rel="noopener"
          class="flex-1 px-5 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-md transition-all focus-visible:ring-2 focus-visible:ring-emerald-500"
        >
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
          </svg>
          Confirm on WhatsApp
        </a>
        <button 
          type="button" 
          onclick="closeCheckoutModal(); location.reload();" 
          class="px-5 py-3.5 border border-purple-200 text-purple-700 hover:bg-purple-50 rounded-xl font-medium text-sm transition-all focus-visible:ring-2 focus-visible:ring-purple-600"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  `;
}

// Quick Order via WhatsApp directly from Cart
function checkoutDirectViaWhatsApp() {
  if (AppState.cart.length === 0) {
    showToast('Your bag is empty!', 'warning');
    return;
  }

  const { subtotal, grandTotal, hasCustomized, advancePayable, codPayable } = getCartCalculations();
  const orderId = `FLW-${Date.now().toString().slice(-6)}`;

  let message = `Hello Flowris team! 🌸 I would like to order from your website:\n\n`;
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
  message += `*Delivery Fee:* ${CONFIG.currencySymbol}${grandTotal - subtotal >= 0 ? grandTotal - subtotal : 0} (2-3 Days)\n`;
  message += `*Total Estimate:* ${CONFIG.currencySymbol}${grandTotal.toLocaleString()}\n`;
  if (hasCustomized) {
    message += `*30% Advance (bKash):* ${CONFIG.currencySymbol}${advancePayable.toLocaleString()}\n`;
    message += `*Remaining COD:* ${CONFIG.currencySymbol}${codPayable.toLocaleString()}\n`;
  } else {
    message += `*Payment:* 100% Cash on Delivery\n`;
  }
  message += `\nPlease confirm my order. Thank you!`;

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
    subject: `🌸 Custom Gift Inquiry: ${name} (${giftType})`,
    from_name: "Flowris Custom Order Request",
    customer_name: name,
    customer_phone: phone,
    gift_category: giftType,
    budget_range: budget || 'Flexible',
    needed_by_date: deadline || '2-3 Days',
    custom_description: details,
    requested_at: new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' })
  };

  submitBtn.disabled = true;
  submitBtn.textContent = 'Submitting Request...';

  try {
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

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
// TOAST NOTIFICATIONS
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

  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
  });

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-2', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ==========================================
// EVENT LISTENERS & URL PARAMS
// ==========================================
function setupEventListeners() {
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      AppState.searchQuery = e.target.value;
      filterAndSortProducts();
    });
  }

  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      AppState.sortBy = e.target.value;
      filterAndSortProducts();
    });
  }

  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      AppState.activeCategory = btn.dataset.category || 'all';
      filterAndSortProducts();
    });
  });

  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  if (mobileMenuToggle && mobileNavDrawer) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileNavDrawer.classList.toggle('active');
    });
  }

  const checkoutForm = document.getElementById('checkout-form');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', handleCheckoutSubmit);
  }

  const customOrderForm = document.getElementById('custom-order-form');
  if (customOrderForm) {
    customOrderForm.addEventListener('submit', handleCustomOrderSubmit);
  }

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
    if (matchingPill) matchingPill.click();
  }

  if (productParam) {
    setTimeout(() => {
      openProductModal(productParam);
    }, 400);
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Global window bindings
window.CONFIG = CONFIG;
window.AppState = AppState;
window.openCartDrawer = openCartDrawer;
window.closeCartDrawer = closeCartDrawer;
window.openWishlistDrawer = openWishlistDrawer;
window.closeWishlistDrawer = closeWishlistDrawer;
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;
window.openCheckoutModal = openCheckoutModal;
window.closeCheckoutModal = closeCheckoutModal;
window.addToCart = addToCart;
window.quickAddToCart = quickAddToCart;
window.updateCartItemQuantity = updateCartItemQuantity;
window.removeCartItem = removeCartItem;
window.clearCart = clearCart;
window.applyPromoCode = applyPromoCode;
window.toggleWishlist = toggleWishlist;
window.setPaymentMethod = setPaymentMethod;
window.modalAddToCart = modalAddToCart;
window.modalBuyViaWhatsApp = modalBuyViaWhatsApp;
window.setModalMainImage = setModalMainImage;
window.checkoutDirectViaWhatsApp = checkoutDirectViaWhatsApp;
window.resetFilters = resetFilters;
window.showToast = showToast;
window.getCartCalculations = getCartCalculations;
