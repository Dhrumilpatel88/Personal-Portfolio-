# Dhrumil Patel — Portfolio

**Developer × Cybersecurity Graduate Student**
Cinematic underground-stage portfolio — Next.js 14, Framer Motion, Tailwind CSS.

---

## ⚡ Deploy to Vercel in 3 steps

```bash
# 1. Unzip and enter the folder
unzip dhrumil-portfolio.zip
cd portfolio

# 2. Push to GitHub
git init && git add . && git commit -m "init"
gh repo create dhrumil-portfolio --public --push

# 3. Go to vercel.com → "Add New Project" → import your repo → Deploy
```

That's it. Vercel auto-detects Next.js — no extra config needed.

---

## 🖥️ Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

---

## 📁 Project structure

```
portfolio/                  ← root (this is what you push to GitHub)
├── app/
│   ├── layout.tsx          fonts, metadata, global providers
│   ├── page.tsx            section composition
│   └── globals.css         CSS variables, keyframes, utilities
│
├── components/
│   ├── effects/
│   │   ├── BootSequence.tsx    terminal boot animation
│   │   ├── CursorProvider.tsx  custom cursor (desktop only)
│   │   └── GrainOverlay.tsx    film grain + scanlines
│   ├── layout/
│   │   ├── Navbar.tsx          responsive nav + hamburger menu
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx     canvas network + typewriter + spotlights
│   │   ├── AboutSection.tsx    identity cards + stat boxes
│   │   ├── SkillsSection.tsx   dual-zone animated skill bars
│   │   ├── ExperienceSection.tsx  gradient timeline
│   │   ├── ProjectsSection.tsx    3D tilt cards
│   │   ├── EducationSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── LedStrip.tsx        animated colour-flow divider
│       └── SectionHeader.tsx   reusable label + heading
│
├── lib/
│   └── data.ts             ★ ALL CONTENT — edit only this file
│
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
└── package.json
```

---

## ✏️ Updating content

Everything lives in **`lib/data.ts`**. Edit that file — all sections update automatically.

```ts
// Change your profile
export const PROFILE = {
  name:  'Your Name',
  email: 'you@email.com',
  phone: '+91 ...',
  // ...
}

// Add an experience entry
export const EXPERIENCE = [
  {
    org:      'Company Name',
    role:     'Your Role',
    location: 'City',
    period:   'Jan 2026 — Present',
    dotColor: 'green',   // 'red' | 'gold' | 'green' | 'white'
    points:   ['Did X', 'Built Y'],
  },
  // ...
]

// Add a project
export const PROJECTS = [
  {
    num:   '07',
    type:  'dev',          // 'dev' | 'cyber' | 'gold'
    tags:  ['Full-Stack'],
    name:  'My Project',
    desc:  'What it does.',
    stack: ['React', 'Node.js'],
  },
]
```

---

## 🎨 Changing colours

Edit CSS variables at the top of `app/globals.css`:

```css
:root {
  --color-red:   #ff3b30;   /* primary accent   */
  --color-green: #00ff9c;   /* security accent  */
  --color-gold:  #d4af37;   /* education/stats  */
}
```

---

## 📱 Responsive behaviour

| Breakpoint | Layout |
|-----------|--------|
| < 640px (mobile) | Single column, no spotlights/HUD, hamburger nav |
| 640–1024px (tablet) | Two-column grids, full nav |
| > 1024px (desktop) | Full layout with HUD, spotlights, 3-col projects |

Custom cursor and 3D tilt effects are **touch-safe** — they only activate on hover-capable devices.

---

## 🚀 Production build

```bash
npm run build   # type-checks + builds
npm run start   # run production server locally
```
