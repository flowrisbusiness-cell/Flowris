# 🚀 Flowris — 100% Free Static Hosting Deployment Guide

Flowris requires zero build tools, zero servers, and zero databases. You can deploy it live on the internet in less than 60 seconds completely free.

Here are the top 3 recommended hosting options:

---

## Option 1: Netlify Drag & Drop (Easiest — No Git Required)

*Best for business owners who want to get their website live immediately without using terminal or code repositories.*

1. Go to **[https://app.netlify.com/drop](https://app.netlify.com/drop)**.
2. If you don't have an account, sign up for a free Netlify account.
3. Open your computer's file explorer and find the `Flowris` folder.
4. Drag and drop the entire `Flowris` folder into the Netlify Drop box in your browser.
5. In 10 seconds, Netlify will assign you a live URL (e.g., `https://flowris-gifts.netlify.app`).
6. *(Optional)* Go to **Site settings > Change site name** to choose your own free custom subdomain (e.g., `flowris.netlify.app`).

---

## Option 2: GitHub Pages (Free Git-Backed Hosting)

*Best for continuous updates — whenever you edit `data/products.json`, your live store updates automatically.*

1. Create a free account on **[GitHub.com](https://github.com)**.
2. Click **New Repository**, name it `flowris` (select **Public**), and click **Create repository**.
3. Push your Flowris files to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for Flowris storefront"
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/flowris.git
   git push -u origin main
   ```
4. On your GitHub repository page:
   - Go to **Settings** > **Pages** (in the left sidebar).
   - Under **Build and deployment > Source**, select **Deploy from a branch**.
   - Under **Branch**, choose `main` and `/ (root)`.
   - Click **Save**.
5. Within 1-2 minutes, your website is live at:  
   `https://<YOUR-USERNAME>.github.io/flowris/`

---

## Option 3: Vercel (Lightning Fast Global Edge CDN)

1. Go to **[https://vercel.com](https://vercel.com)** and sign up for free with GitHub.
2. Click **Add New... > Project**.
3. Import your `flowris` GitHub repository.
4. Leave all build settings at their defaults (Framework Preset: **Other**, Output Directory: `./`).
5. Click **Deploy**.
6. Your store will be live globally on Vercel's edge network with automated SSL!

---

## 🔗 Connecting a Custom Domain (e.g. `flowrisbd.com`)

All of Netlify, Vercel, and GitHub Pages support custom domains with automated, free HTTPS/SSL:

1. Purchase a domain from any registrar (Namecheap, GoDaddy, DianaHost, XeonBD, etc.).
2. In your Netlify or Vercel dashboard:
   - Go to **Domain Management** > **Add domain**.
   - Enter your domain name (e.g., `flowrisbd.com`).
3. In your domain registrar's DNS settings, add the CNAME or A records specified by Netlify/Vercel:
   - **Type:** `CNAME`
   - **Name:** `www`
   - **Value:** `your-site.netlify.app` (or `cname.vercel-dns.com`)
4. Your custom domain will be active with SSL enabled within a few minutes!

---

## 📧 Enabling Order Email Notifications (30 Seconds)

1. Visit **[https://web3forms.com](https://web3forms.com)**.
2. Enter your business email (e.g., `flowrisgifts@gmail.com`).
3. Copy the **Access Key** sent to your email.
4. In `js/app.js`, replace:
   ```javascript
   web3FormsKey: "YOUR_WEB3FORMS_ACCESS_KEY_HERE"
   ```
   with your actual key.
5. Save the file and redeploy (or commit to Git).
6. Every time a customer places an order or submits a custom gift request, you will receive an instant, formatted email notification with full customer details, phone number, address, and cart items!
