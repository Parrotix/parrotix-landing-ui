# Parrotix Landing Page — Build Documentation

## Overview

A full marketing landing page built from scratch for the **Parrotix** mobile app — a gamified English learning platform designed specifically for Urdu speakers. The landing page is a single-page React application that mirrors the brand identity of the mobile app and drives downloads from both the App Store and Google Play.

---

## Tech Stack

| Tool | Version | Role |
|---|---|---|
| React | 18.3.1 | UI framework |
| Vite | 5.4.10 | Build tool & dev server |
| TypeScript | 5.6.2 | Type safety |
| Tailwind CSS | 3.4.15 | Utility-first styling |
| Lucide React | 0.468.0 | Icons |
| PostCSS + Autoprefixer | latest | CSS processing |

---

## Project Structure

```
parrotix-landing-ui/
├── public/
│   └── images/                    # Assets copied from mobile app
│       ├── parrotix_logo.png
│       ├── parrot-flying.png      # Hero mascot (floating)
│       ├── parrot-flying.svg
│       ├── parrot-side-view.png   # Download section mascot
│       ├── journey-screen.png     # Phone mockup screen
│       ├── ali.jpg                # Testimonial avatar
│       ├── sara.jpg               # Testimonial avatar
│       ├── 3stars.png             # Achievement badge
│       ├── firecircle.png
│       ├── streakcard.jpeg
│       ├── balloon.png
│       └── ribbon.png
├── src/
│   ├── hooks/
│   │   └── useInView.ts           # IntersectionObserver scroll-reveal hook
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── GameModes.tsx
│   │   ├── SocialProof.tsx
│   │   ├── Premium.tsx
│   │   ├── Download.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── postcss.config.js
```

---

## Design System

### Brand Colors

| Token | Hex | Usage |
|---|---|---|
| `brand-blue` | `#15ADE2` | Primary actions, links, highlights |
| `brand-orange` | `#FF9B23` | CTAs, streak badges, pricing accent |
| `brand-purple` | `#8B5CF6` | Leaderboard, game mode accents |
| `brand-dark` | `#0f172a` | Hero bg, dark sections, footer |
| `brand-navy` | `#1e293b` | Secondary dark surfaces |
| `brand-green` | `#22c55e` | Success states, free tier checkmarks |

All colors are extended in `tailwind.config.ts` under `theme.extend.colors`.

### Typography

- **Headings:** `Fredoka` (Google Fonts) — rounded, playful, gamified feel
- **Body:** `Inter` (Google Fonts) — clean, highly legible
- Both loaded via `<link>` in `index.html` for zero-JS font loading

### Custom Tailwind Utilities (defined in `index.css`)

| Class | Effect |
|---|---|
| `.text-gradient-blue` | Blue → purple gradient text |
| `.text-gradient-orange` | Orange → red gradient text |
| `.text-gradient-purple` | Purple → pink gradient text |
| `.bg-dots` | Subtle white dot grid pattern (dark sections) |
| `.bg-dots-dark` | Subtle dark dot grid pattern (light sections) |
| `.glass` | Frosted glass card (dark backgrounds) |
| `.glass-card` | Lighter frosted glass variant |
| `.section-padding` | Consistent vertical + horizontal padding |
| `.section-header` | Centered section header layout |

### Animations

Defined in `tailwind.config.ts`:

| Class | Behavior |
|---|---|
| `animate-float` | Slow up-down float, 6s cycle |
| `animate-float-delayed` | Float with 2s delay |
| `animate-float-slow` | Slower float, 8s cycle, 1s delay |
| `animate-pulse-soft` | Gentle opacity pulse |

Scroll-reveal uses the `useInView` hook with Tailwind `opacity-0 → opacity-100` + `translate-y-8 → translate-y-0` transitions.

---

## Sections — Component Breakdown

### 1. Header (`Header.tsx`)
- Fixed position, full width
- **Transparent** when at top of page
- **Frosted glass + shadow** when scrolled > 24px (uses `window.scroll` listener)
- Logo: parrot-flying.png + "Parrotix" in Fredoka
- Desktop nav: Features, How It Works, Game Modes, Pricing
- CTA: "Download Free" (orange pill button)
- Mobile: animated hamburger → slide-down menu
- Scroll behavior managed with `useEffect` + `useState`

### 2. Hero (`Hero.tsx`)
- Full viewport height (`min-h-screen`)
- Dark navy background with three animated CSS gradient blobs
- Dot grid overlay for depth
- **Left column:**
  - Urdu badge pill: *اردو بولنے والوں کے لیے بنایا گیا*
  - H1: "Master English. The Fun Way." (gradient on second line)
  - Description paragraph
  - App Store + Google Play buttons (custom SVG icons)
  - Social proof row: avatar stack (real user images), 5-star rating, "Free to start" indicator
- **Right column:**
  - CSS phone frame (rounded rectangle + notch + side buttons)
  - Journey screen screenshot inside
  - Floating gamification badges: Day 7 Streak, +1,250 XP, Rank #8 (all `animate-float` with staggered delays)
  - Parrot-flying mascot floating above the phone
- White SVG wave at bottom for smooth section transition

### 3. Stats (`Stats.tsx`)
- Blue → purple gradient bar
- 4 stats with scroll-reveal stagger:
  - 🎓 50K+ Active Learners
  - 🎮 8 Game Modes
  - 📚 15 Lesson Units
  - ⭐ 4.9★ App Rating

### 4. Features (`Features.tsx`)
- White background
- Bento-style responsive grid (`md:grid-cols-4`)
- 7 feature cards — mix of `md:col-span-2` and single cards
- Each card: colored icon container + title + description + hover gradient orb
- Features covered:
  1. 8 Unique Game Modes (2-col span)
  2. Daily Streaks
  3. Global Leaderboard
  4. XP & Level System
  5. Voice Practice
  6. Video Lessons
  7. Hearts System (2-col span)

### 5. How It Works (`HowItWorks.tsx`)
- Light gray (`bg-slate-50`) background
- 3 step cards in a grid with a connecting gradient line (desktop only)
- Each step: numbered circle (large, low opacity) + icon + title + description
- Steps: Set Up Profile → Play Games & Earn XP → Climb Leaderboard
- CTA button below: "Start Learning for Free"

### 6. Game Modes (`GameModes.tsx`)
- Dark background with dot grid
- 4×2 grid of game mode cards (collapses to 2×4 on tablet, 1×8 on mobile)
- Each card: tag pill + gradient emoji icon + title + description
- 8 modes mapped from the mobile app's actual game types:

| App Game Type | Landing Label | Skill Focus |
|---|---|---|
| `CHOOSE_PIC` | Picture Match | Vocabulary |
| `LISTEN_CHOICE` | Listen & Choose | Listening |
| `SPEAK_MATCH` | Speak & Match | Speaking |
| `CONVERSATION` | Conversation | Conversation |
| `MATCH_PAIRS` | Match Pairs | Memory |
| `DRAG_DROP` | Drag & Drop | Grammar |
| `ASTRO_TRASH` | Space Blaster | Arcade |
| `WATCH_VIDEO` | Watch & Learn | Video |

### 7. Social Proof (`SocialProof.tsx`)
- Split layout: leaderboard (2 cols) + testimonials (3 cols) on desktop
- **Leaderboard:** Styled dark card with top 5 ranked players (Pakistani names/cities), XP scores, colored avatars, medal emojis; "You" placeholder row with "Start →" CTA
- **Testimonials:** 3 cards with 5-star rating, quote (one includes Urdu script), user photo, name/city/level
- User images sourced from `ali.jpg` and `sara.jpg` from the mobile app

### 8. Premium (`Premium.tsx`)
- Two pricing cards: **Free** and **Parrotix Plus**
- Free card: white, lists 4 included + 4 excluded features
- Plus card: dark (`brand-dark`) with purple/blue glow orbs, "Most Popular ⭐" badge
  - Price: Rs. 799/month (strikethrough Rs. 1,299 + "Save 38%" green pill)
  - All 8 features included (checkmarks in brand-blue)
- Both cards have CTAs: "Download Free" and "Upgrade to Plus →"

### 9. Download (`Download.tsx`)
- Dark gradient hero-style section
- Left: badge + large H1 ("Start Your English Journey Today") + description + App Store/Play Store large buttons + 3 trust signals
- Right: `parrot-side-view.png` with orange drop-shadow + `animate-float`
- Floating achievement cards: "Perfect Lesson! +100 XP" and "30-Day Streak! Milestone unlocked"
- Trust signals: Free to download · No credit card needed · iOS & Android

### 10. Footer (`Footer.tsx`)
- Dark navy background
- Left brand column: logo + tagline + Urdu tagline (*سیکھیں، کھیلیں، جیتیں۔*) + 4 social icon buttons
- 3 link columns: Product, Company, Legal
- Bottom bar: copyright + live learner count indicator (pulsing green dot)
- Social links: Instagram (`@parrotix_app`), Facebook, YouTube (`@Parrotix_app`), WhatsApp (`+923263409626`)

---

## Key Custom Hook

### `useInView.ts`

```ts
export function useInView(threshold = 0.1) {
  // Returns { ref, inView }
  // inView becomes true once the element enters the viewport
  // Uses IntersectionObserver — unobserves after first trigger (one-shot)
}
```

Used across all sections to trigger Tailwind transition classes:
```tsx
className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
```

Stagger delays applied via inline `style={{ transitionDelay: '...ms' }}`.

---

## Assets

All assets copied from the mobile app at `D:\parrotix-mobile-ui\src\assets\images\` into `public/images/`.

| File | Source | Used In |
|---|---|---|
| `parrot-flying.png` | Mobile app | Header logo, Hero mascot |
| `parrot-side-view.png` | Mobile app | Download section |
| `parrotix_logo.png` | Mobile app | Browser favicon |
| `journey-screen.png` | Mobile app (`Journey.png`) | Hero phone mockup |
| `ali.jpg` | Mobile app (`character/ali.jpg`) | Hero avatars, Testimonial |
| `sara.jpg` | Mobile app (`character/sara.jpg`) | Hero avatars, Testimonial |
| `3stars.png` | Mobile app | Download floating badge |

---

## Running Locally

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Type-check
npx tsc -p tsconfig.app.json --noEmit

# Production build
npm run build

# Preview production build
npm run preview
```

---

## SEO & Meta Tags

Configured in `index.html`:
- `<meta name="description">` — app description for search engines
- `<meta name="keywords">` — Parrotix, English learning, Urdu
- Open Graph tags (`og:title`, `og:description`, `og:image`) for social sharing
- Favicon set to `parrotix_logo.png`

---

## Responsive Breakpoints

Follows Tailwind's default breakpoints:
- `sm`: 640px — single column → 2 columns
- `md`: 768px — 2 columns → 3-4 columns, desktop nav appears
- `lg`: 1024px — full hero split layout, leaderboard+testimonials side by side

---

## Future Improvements

- Add actual App Store / Google Play deep links once the app is published
- Replace placeholder pricing with real subscription prices from the backend
- Add a language toggle (English / Urdu) for full bilingual support
- Integrate an email capture form for a waitlist / launch notification
- Add actual app screenshots once design is finalized for phone mockup
- Consider adding a short demo video in the Hero or How It Works section
