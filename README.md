# My Portfolio

A fully responsive, interactive portfolio built with **React**, **Tailwind CSS**, **AOS**, **Framer Motion**, and **EmailJS**.

## ✨ Features
- Animated gradient hero with particles/waves
- About with skill chips
- Skills grouped (Frontend/Backend/Tools)
- Projects with glassmorphism hover reveal
- Roadmap timeline with animated progress
- Contact form with EmailJS + auto welcome email (session-scoped)
- Light/Dark mode with `localStorage`
- Smooth scroll (CSS `scroll-smooth`) + AOS/Framer Motion animations
- SEO meta + Open Graph + favicon + preview image
- Fully responsive

## 🛠️ Setup

```bash
# 1) Install dependencies
npm install

# 2) Setup Tailwind (already pre-configured)
# 3) Start dev server
npm start

# 4) Build
npm run build
```

## 📧 EmailJS Setup
1. Create an account at https://www.emailjs.com/ and add an email service.
2. Create a **service** and a **template**. In the template, include fields like:
   - `from_name`
   - `visitor_email`
   - `message`
3. Grab your **Public Key**, **Service ID**, and **Template ID**.
4. Create a `.env` file in project root with:
   ```env
   REACT_APP_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY
   REACT_APP_EMAILJS_SERVICE_ID=YOUR_SERVICE_ID
   REACT_APP_EMAILJS_TEMPLATE_ID=YOUR_TEMPLATE_ID
   ```
5. Update any hard-coded addresses in `Contact.js` (like `mailto:` links).
6. The site auto-sends a **welcome email** to `visitor@example.com` once per session on page load.
   - You can change the default recipient by using an input modal or capturing the visitor's email before sending.
   - To disable, remove the `useEffect` block that calls `emailjs.send(...)` in `Contact.js`.

## 🧩 Customization
- Change your name/tagline in `Hero.js` and `Footer.js`.
- Replace project data in `Projects.js`.
- Adjust Roadmap steps in `Roadmap.js`.
- Update colors or theme in `tailwind.config.js`.

## 📸 Preview
See `public/preview.png` for a social share preview image.
