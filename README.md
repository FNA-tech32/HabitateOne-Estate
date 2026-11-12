# Habitate Estate

Habitate Estate is a single-page luxury real estate website. It presents a curated property portfolio, private client advisors, market notes, and a consultation form, with a responsive layout and motion throughout the page.

The Mayfair office is the public contact point:

- **Branch:** Habitate Estate
- **Address:** 27 Berkeley Square, Mayfair, London W1J 6ER, United Kingdom
- **Phone:** +44 20 7946 2158
- **Email:** contact@habitateestate.com
- **Hours:** Monday–Saturday, 9:00 AM – 6:00 PM (GMT)

---

## About

The site is built as one scrolling page. Visitors can search listings, open a property detail view, read advisor profiles, and send an inquiry. Property and advisor records live in local data, so the page runs without a backend.

---

## Features

- Splash screen, then a hero with calls to view properties or book a consultation
- Search by location, budget, bedrooms, and property type, with results scrolled into the portfolio
- Featured listings filtered by villa, apartment, penthouse, commercial, and land
- Property detail modal with gallery, features, and the assigned advisor
- About section with mission and vision
- Reasons to work with Habitate Estate
- Advisor cards with phone, email, and social links
- Client testimonials
- Market insight cards
- FAQ accordion
- Contact form, office hours, phone, email, and an embedded map
- Footer newsletter signup
- WhatsApp shortcut and a back-to-top control
- Sticky navigation and a mobile menu

---

## Tech stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React

Fonts are Playfair Display and Montserrat, loaded in the root layout.

---

## Project structure

```text
HabitatOne-Estate
├── public
├── src
│   ├── app
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── floating
│   │   ├── layout
│   │   ├── sections
│   │   └── ui
│   └── data
│       └── properties.ts
├── package.json
├── tsconfig.json
└── README.md
```

`src/data/properties.ts` holds the listing and advisor records used across the portfolio, detail modal, and advisor section.

---

## Installation

```bash
npm install
```

---

## Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production build:

```bash
npm run build
npm start
```

---

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |
