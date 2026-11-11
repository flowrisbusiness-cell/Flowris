# 🌸 Flowris — Handcrafted Gifts, Made with Love

> **A 100% Client-Side, Static, Zero-Cost E-Commerce Platform for Handcrafted & Personalized Gifts.**  
> Crafted specifically for modern artisanal brands, boutique gift studios, and makers in Bangladesh.

---

## 🌟 Overview & Key Highlights

**Flowris** is an ultra-fast, zero-maintenance static e-commerce website designed to run **100% free forever** on platforms like **GitHub Pages, Netlify, Vercel, or Cloudflare Pages**.

- **Zero Custom Backend Required:** No Node.js, Python, Java, Docker, or SQL databases to maintain.
- **Zero Hosting Cost:** Runs entirely client-side using pure HTML5, Tailwind CSS, and Vanilla JavaScript.
- **Easy Product Management:** All products, prices, images, stock badges, and descriptions live in a clean `data/products.json` file.
- **Serverless Checkout & Notifications:** Customer orders and custom requests are sent directly to the store owner's email using free serverless endpoints (**Web3Forms** or **Formspree**).
- **Instant WhatsApp Ordering:** Every product and cart has a built-in one-click WhatsApp order generator with pre-filled items, customer name, and BDT totals.
- **Bangladesh-Tailored Checkout:**
  - Dynamic shipping calculation: Inside Dhaka (৳80, or FREE on orders ৳1,500+) / Outside Dhaka (৳150 across all 64 districts).
  - Cash on Delivery (COD) & bKash / Nagad Send-Money flow with reference & TrxID capture.

---

## 🎨 Design System & Aesthetics

- **Primary Colors:** Deep Violet (`#7C3AED`), Rosebud Pink (`#EC4899`), Soft Purple (`#8B5CF6`).
- **Surfaces:** Pure White (`#FFFFFF`) with Glassmorphic blur (`backdrop-filter: blur(16px)`).
- **Typography:**
  - Headings: `Playfair Display` (Luxury, editorial serif).
  - Body & UI: `Plus Jakarta Sans` / `Inter` (Ultra-crisp modern sans-serif).
- **Micro-interactions:** Smooth slide-over drawers, real-time toast notifications, live coupon discount calculation, and hover zoom effects.

---

## 📁 Project Structure

```text
Flowris/
├── index.html              # Main single-page storefront & modal containers
├── css/
│   └── styles.css          # Custom animations, glassmorphism, scrollbars
├── js/
│   └── app.js              # State manager, LocalStorage cart/wishlist, checkout & API
├── data/
│   └── products.json       # Single source of truth for all products & pricing
├── images/                 # Local assets & image storage
├── README.md               # Project guide and customization
└── DEPLOYMENT.md           # Step-by-step 1-click free deployment guide
```

---

## 🛠️ How to Customize Your Store

### 1. Adding or Editing Products (`data/products.json`)
Open `data/products.json` in any text editor. Each product contains:

```json
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
  "image": "https://images.unsplash.com/photo-...",
  "gallery": [ "img1.jpg", "img2.jpg" ],
  "badge": "Bestseller",
  "inStock": true,
  "shortDescription": "Personalized LED warm glowing monogram lamp...",
  "description": "Each letter is handcrafted individually in Dhaka...",
  "customizable": true,
  "customizationLabel": "Enter Initial / Letter (A-Z) & LED Base Name Text",
  "materials": "Crystal Resin, Real Preserved Flowers, 24K Gold Leaf",
  "dimensions": "15cm x 15cm x 4.5cm",
  "tags": ["bestseller", "resin", "lamp"]
}
```

- To **add a new product**, duplicate any block, assign a unique `id`, and enter your details.
- To **mark as sold out**, set `"inStock": false`.
- If an item doesn't require custom text (like a candle), set `"customizable": false`.

---

### 2. Setting Up Your Free Email Notification Endpoint

Flowris uses **Web3Forms** (completely free, 250 submissions/month, zero setup, no backend required):

1. Go to **[https://web3forms.com](https://web3forms.com)**.
2. Enter your email where you want to receive orders.
3. Click **"Create Access Key"** and copy the key received in your email.
4. Open `js/app.js` and paste your key on line 19:

```javascript
const CONFIG = {
  storeName: "Flowris",
  phone: "+880 1712-345678",
  whatsappNumber: "8801712345678",
  bKashNumber: "01712-345678 (Personal)",
  insideDhakaShipping: 80,
  outsideDhakaShipping: 150,
  freeShippingThreshold: 1500,

  // Paste your key here:
  web3FormsKey: "YOUR_WEB3FORMS_ACCESS_KEY_HERE"
};
```

*(Alternatively, you can provide a Formspree endpoint URL in `formspreeEndpoint`)*.

---

### 3. Updating Phone, WhatsApp, and bKash Numbers
In `js/app.js`, edit the `CONFIG` object:
- `phone`: Displayed on header & footer.
- `whatsappNumber`: Phone number with country code (e.g. `8801712345678` - no `+` or spaces).
- `bKashNumber`: Displayed during bKash checkout step.

---

### 4. Promo Codes & Discounts
Promo codes are configured inside `AppState.availablePromos` in `js/app.js`:
- `FLOWRISLOVE`: 10% off entire order.
- `WELCOME50`: ৳50 flat discount.
- `EIDGIFT`: 15% off festive promo.

You can add more codes or adjust discount rates anytime!

---

## ⚡ Local Testing

You can preview Flowris immediately:
1. Simply double-click `index.html` to open in any web browser.
2. Alternatively, run a lightweight local static server:
   ```bash
   # Using Python 3:
   python -m http.server 8000

   # Or using Node.js:
   npx serve .
   ```
3. Open `http://localhost:8000` in your browser.

---

## 🚀 Free Deployment

See **[`DEPLOYMENT.md`](./DEPLOYMENT.md)** for a 3-minute step-by-step guide to hosting Flowris on **Netlify, Vercel, or GitHub Pages** with a free custom domain and automated SSL certificate.
