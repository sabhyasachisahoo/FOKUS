# 🧠 FOKUS

**FOKUS** is a modern, multi-page web application built using **React**, **Vite**, and **Tailwind CSS**. It features rich, scroll-based animations with **GSAP**, responsive design, and dynamic UI components to deliver a high-quality user experience. FOKUS is ideal for showcasing products, services, or brands with personality and polish.

---

## 🌐 Live Demo

🔗 [Live Site on Render](https://fokus-1.onrender.com/)  

---

## 📌 Pages & Features

- **🏠 Home** — Landing section with animated hero, flavor highlights, and testimonials.
- **🛍️ Product Page** — Displays available products with interactive cards and transitions.
- **📄 Product Detail** — Dynamic view with detailed product information.
- **🔐 Login / Register** — Basic user authentication UI (frontend only).
- **ℹ️ Know Us Page** — Section introducing the brand or team behind FOKUS.
- **📬 Contact Page** — Includes a `mailto:` link to open the user’s email client for quick messages.

---

## 🧰 Tech Stack

- **React** + **Vite** – Fast, modular frontend setup
- **Tailwind CSS** – Utility-first responsive styling
- **GSAP (GreenSock)** – Advanced scroll animations
- **React Router DOM** – Navigation between pages
- **Framer Motion** – UI animation library
- **Canvas Confetti** – Fun visual effects
- **Lucide React** – Icon set

---

## 📁 File Structure
```
FOKUS/
├── public/
├── src/
│ ├── components/
│ │ ├── ClipPathTitle.jsx
│ │ ├── FlavorSlider.jsx
│ │ ├── FlavorTitle.jsx
│ │ ├── NavBar.jsx
│ │ └── VideoPinSection.jsx
│ ├── constants/
│ │ ├── benefit-heading.png
│ │ ├── contactpic1.jpg
│ │ ├── contactpic2.jpg
│ │ ├── contactpic3.jpg
│ │ ├── data-protection.png
│ │ ├── index.js
│ │ └── white-bg.svg
│ ├── pages/
│ │ ├── ContactPage.jsx
│ │ ├── KnowUsPage.jsx
│ │ ├── Login.jsx
│ │ ├── ProductDetail.jsx
│ │ ├── ProductPage.jsx
│ │ └── Register.jsx
│ ├── sections/
│ │ ├── BenefitSection.jsx
│ │ ├── FlavorSection.jsx
│ │ ├── FooterSection.jsx
│ │ ├── HeroSection.jsx
│ │ ├── MessageSection.jsx
│ │ ├── NutritionSection.jsx
│ │ └── TestimonialSection.jsx
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```


---

## 🚀 Getting Started

### 🔧 Installation

```bash
git clone https://github.com/sabhyasachisahoo/FOKUS.git
cd FOKUS
npm install
```


💻 Development
```
npm run dev
```

🏗️ Production Build
```
npm run build
```

🔍 Preview Build
```
npm run preview
```

🌍 Deployment (Render)
To deploy this app on Render as a static site:
```
Build Command: npm run build

Publish Directory: dist

Environment: Static Site
```

📬 Contact Form
This project uses a basic mailto: link in the contact form. When users click Send, their default email client opens with pre-filled content.

No backend or third-party form service is used, keeping the setup lightweight and privacy-friendly.

🙋‍♂️ Author
Made with ❤️ by @sabhyasachisahoo


