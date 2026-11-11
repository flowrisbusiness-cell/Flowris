# 🌸 Flowris — Handcrafted Gifts, Made with Love (Dhaka, Bangladesh)

> **A 100% Client-Side, Static, Zero-Cost E-Commerce Website for Handcrafted & Personalized Gifts in Dhaka.**  
> Built for zero-cost hosting (GitHub Pages, Netlify, Vercel, Cloudflare Pages).

---

## 🌟 Key Updates & Features

- **Dedicated Shareable Product Page (`product.html`):** Perfect for Facebook posts, Instagram bio links, and WhatsApp sharing (e.g. `product.html?id=flow-01`). Includes dynamic Open Graph tags, multi-photo gallery, custom text input, instant COD checkout, and WhatsApp order generator.
- **Fixed & Seamless Slide-Over Cart:** Fully functional cart drawer with local storage persistence across all pages and tabs, quantity controls, and free shipping progress.
- **Official Web3Forms Key Configured:** Form token `29722476-0beb-4700-8231-9bf14fa69367` is active — all customer orders and custom inquiries go straight to your email without needing a custom server!
- **Store Contact Info:**
  - 📞 Phone: **`01886338064`**
  - 💬 WhatsApp: **`01886338064`** (direct click-to-chat links)
  - ✉️ Email: **`flowris.business@gmail.com`**
  - 📱 bKash / Nagad: **`01886338064 (Personal)`**
  - 📍 Address: **Dhaka, Bangladesh**
- **Focused Dhaka City Delivery:**
  - Standard Delivery (24-48h): ৳80 (Free on orders above ৳1,500).
  - Express Delivery (Same Day / Urgent Priority): ৳130.
- **Bespoke Vector Logo:** Custom artisanal logo created and integrated at `images/flowris-logo.svg` and `images/flowris-icon.svg`.
- **Streamlined 6 Bestselling Products:** Clean, high-converting catalog of signature items in `data/products.json`.
- **Accessibility & Focus States:** Clear, tactile `:focus-visible` outline rings for keyboard navigation and user feedback.

---

## 📁 Project Structure

```text
Flowris/
├── index.html              # Main storefront, Hero, Catalog, Custom Gift Form
├── product.html            # Dedicated Shareable Product Detail Page (for Facebook posts)
├── data/
│   └── products.json       # Streamlined 6 signature products & pricing
├── js/
│   └── app.js              # State manager, LocalStorage cart/wishlist, Web3Forms handler
├── css/
│   └── styles.css          # Custom animations, focus states, glassmorphism, scrollbars
├── images/
│   ├── flowris-logo.svg    # Official brand vector logo
│   └── flowris-icon.svg    # Favicon and square emblem
├── README.md               # Overview and configuration reference
└── DEPLOYMENT.md           # Step-by-step 1-click free deployment guide
```

---

## 🔗 Sharing Products on Facebook & Social Media

To share a specific product on a Facebook post or Instagram story, copy the link with its product ID:

```text
https://your-site.netlify.app/product.html?id=flow-01   # Resin Letter Lamp
https://your-site.netlify.app/product.html?id=flow-02   # Rose Bouquet
https://your-site.netlify.app/product.html?id=flow-03   # Spotify Plaque
https://your-site.netlify.app/product.html?id=flow-04   # Lavender Soy Candle
https://your-site.netlify.app/product.html?id=flow-05   # Luxury Hamper Box
https://your-site.netlify.app/product.html?id=flow-06   # Resin Initial Keychain
```

When customers click the link:
1. They see the full product showcase, reviews, pricing, and details.
2. They can type in their custom engraving / note.
3. They can order directly via **Instant Checkout (COD)**, **Add to Bag**, or **One-Click WhatsApp**.

---

## 🚀 Free Deployment

See **[`DEPLOYMENT.md`](./DEPLOYMENT.md)** for a 1-minute guide to hosting Flowris on **Netlify Drag & Drop**, **GitHub Pages**, or **Vercel** with free HTTPS/SSL!
