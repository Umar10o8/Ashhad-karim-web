# Ashhad Karim — Professional Portfolio

A responsive, single-page portfolio for production and pre-production work across exhibitions, large-format print, branding, fabrication, and events.

## Run locally

```bash
npm install
npm run dev
```

Vite prints the local development URL after startup. To create and preview a production build:

```bash
npm run build
npm run preview
```

## Stack

- React functional components and hooks, with Vite
- Tailwind CSS v4 through its official Vite plugin (`@tailwindcss/vite`)
- Lucide React icons
- Custom responsive CSS for the portfolio's editorial visual design

## Design system

All tokens live at the top of `src/index.css`.

- **Palette (`@theme static`)**: magenta `#C90050`, deep berry `#8E123F`, teal `#087A69`, white, and charcoal `#252525`, plus tints and shades for hover states and dark surfaces. Because they are Tailwind theme tokens, utilities such as `bg-magenta`, `text-berry` and `border-teal-100` work, and every value is also available as a CSS variable (`var(--color-magenta)`).
- **Semantic aliases (`:root`)**: components use `--text`, `--text-muted`, `--line`, `--accent` and `--accent-2` rather than raw colors. Adding `.surface-dark` to a section switches these aliases for white-on-dark text. For example, magenta becomes `--color-magenta-300` there, because full magenta on charcoal is only about 2.6:1.
- **Scales**: spacing (`--space-1`…`--space-10`, on a 4px base), type sizes (`--text-label`…`--text-display`), radii, berry-tinted shadows, and easing and duration values.
- **Type**: Manrope for display text, DM Sans for body text, and Instrument Serif italic for emphasis (`<em>` inside headings).
- **Usage rules**: magenta is the primary accent, and the magenta-to-berry gradient is for the brand mark, buttons and section washes only. Teal is reserved for secondary accents: project categories and the experience timeline. Use `--color-muted` (6.6:1 on white) as the lightest color for body text.
- **Motion**: elements marked with `data-reveal` fade in once as they enter the viewport (`src/hooks/useReveal.js`). Reveals are skipped entirely when the user prefers reduced motion.

## Project structure

```text
src/
  config/
    contact.js          Contact details (single source for the contact section and footer)
  data/
    content.js          Site copy: hero, about, section headings and intros, footer
    navigation.js       Section links (header and footer)
    experience.js       CV timeline
    skills.js           Skill groups
    projects.js         Portfolio items and filter categories
    imageCredits.js     Attribution for bundled photos
    expertise.js, responsibilities.js, achievements.js
  components/
    ui/                 Button, Card, IconBadge, ChipList, ResponsiveImage, PlaceholderTag
    layout/             Header, Footer, Section, SectionHeader
    navigation/         NavLinks, Wordmark
    portfolio/          CategoryFilter, ProjectCard, Lightbox
  sections/             One component per page section, in page order
  hooks/                useReveal (scroll reveals), useActiveSection (active nav link),
                        useScrollThreshold (header state, back-to-top)
  utils/images.js       Responsive image helpers (responsiveAsset, localImage)
  assets/images/        Bundled WebP photography (hero/, portfolio/)
  App.jsx               Page composition and scroll state
  index.css             Design tokens and all styles
```

**Editing content:** change text in `src/data/` and contact details in `src/config/contact.js`. The section components contain no copy of their own.

**Images:**
- **Location:** all photography is bundled locally in `src/assets/images/`, with `hero/` and `portfolio/` subfolders. The site doesn't hotlink any external image.
- **Format:** each photo is exported as WebP at 800px and 1600px wide, at about 75% quality. The files range from 26 to 233KB, and the browser picks the size it needs through `srcSet`.
- **Rendering:** `ResponsiveImage` renders each photo inside a fixed aspect-ratio box with `object-fit: cover`. The image viewer shows the full uncropped photo.
- **Adding a real photo:** export the two sizes, import them in `src/data/projects.js`, and use `responsiveAsset({ small, large, width, height })`.
- **Sources:** the current photos are placeholders from Wikimedia Commons (exhibition stands, UV and wide-format printing, laser cutting) and Unsplash (events, billboards, metal fabrication).
- **Credits:** the CC BY and CC BY-SA photos must be credited. Their author, licence and source are in `src/data/imageCredits.js`, and the site shows them in the image viewer. When a placeholder is replaced with Ashhad's own photo, remove its `credit`.

**Motion system:**
- **Tokens:** `--duration-fast`, `--duration-base`, `--duration-slow`, `--duration-image`, `--ease-out` (state changes), `--ease-emphasis` (entrances), `--reveal-distance` and `--stagger`.
- **Hero:** a short entrance sequence that finishes in about 1.2 seconds. It uses CSS keyframes only, so it doesn't wait for JavaScript.
- **Scroll reveals:** handled by `src/hooks/useReveal.js`:
  - `data-reveal` makes an element fade and rise.
  - `data-reveal="slide"` slides it in from the side (used on the timeline).
  - `data-reveal="mask"` uncovers an image from the bottom up (used on the portfolio).
  - Elements that enter together are staggered, up to 280ms.
  - Each element animates once. Afterwards it returns to its own hover transitions.
  - Elements added later, such as after a filter change, are picked up automatically.
- **Accessibility and touch:** the reveal styles only apply once the script has run. With `prefers-reduced-motion`, all animation is turned off and content appears immediately. On touch screens, hover lifts and zooms are disabled so they don't stick after a tap.

**Breakpoints:** large desktop at 1600px and up, laptop by default, tablet at 1024px and below (hamburger menu, stacked hero, two-column grids), small tablet at 800px and below, and mobile at 560px and below (single column).

Page order: Navigation, Hero, About, Expertise, Experience, Responsibilities, Skills, Portfolio, Achievements, Contact, Footer.

## Before publishing: items to confirm

1. **Contact details** (`src/config/contact.js`). The site currently shows placeholders and a visible "awaiting confirmation" tag. The supplied materials contain two different sets of details: CV/LinkedIn (karimashhad@yahoo.com, +971 52 2604376) and a professional signature (ASHHAD.KARIM@THE.TEAM, +966 (50) 6334858). Ashhad needs to approve which set to publish, if any. Then set `email`, `phone`, `phoneHref` and `confirmed: true`.
2. **Current role** (`src/data/experience.js`). The timeline follows the CV, with the current role listed as Pre-Production Supervisor / Production Coordinator at Print Works & Fabrication (2021–Present). Two other sources disagree with it: a separate message ("Current job Feb 2026 to present") and the THE.TEAM signature ("Production Manager, Production"). Ashhad needs to confirm his current title, employer and start date before the entries are updated.
3. **Portfolio images** (`src/data/projects.js`). All nine images are openly licensed industry photos from Wikimedia Commons and Unsplash, labelled "Placeholder" on the site. Some show third-party brands, such as Porsche and Kleintech. To replace one, follow the steps in the comment at the top of the file. Once no placeholders remain, the portfolio intro switches to its standard text automatically.
4. **Hero image** (`hero.image` in `src/data/content.js`). This is also a stock "representative industry image". Replace it with a real project photo when one is available.
5. **Live domain.** Set `SITE_URL=https://your-domain` (for example in `.env.production`) before building. The build then adds a canonical link and `og:url`, and makes the share-image URLs absolute, which link previews require.

The site has no contact form. The email button opens the visitor's email app through a `mailto:` link, so no backend is needed.

## SEO and accessibility

- **Metadata** (`index.html`): title, description, Open Graph and Twitter card tags, a 1200×630 share image (`public/og-image.jpg`), an SVG favicon, an Apple touch icon and `robots.txt`.
- **No structured data:** there is deliberately no JSON-LD, because the current role and contact details are still unconfirmed.
- **Page structure:**
  - One `h1`, then an `h2` per section and `h3`s within sections.
  - Landmarks: a banner (the header), two labelled navigation regions, a main region, a named region per section, and the footer.
  - A "Skip to content" link comes first.
- **Images:** every image has descriptive alt text, and photo credits are listed in the image viewer and the footer.
- **Keyboard:**
  - Every control is reachable and shows a visible focus ring, which is white on dark sections.
  - The mobile menu toggle comes right before the menu, so Tab moves straight into it. Escape closes the menu and returns focus to the toggle.
  - The image viewer traps focus while open, supports the arrow keys, and returns focus on close.
- **Contrast:** all text meets WCAG AA. On the deep berry section, accent text uses `--color-magenta-200` (4.9:1).
- **Motion:** `prefers-reduced-motion` is respected throughout.
- **Last audit:** axe-core (WCAG 2.2 AA plus best practices) reported no violations at 390px and 1440px, with the mobile menu and image viewer open. A separate contrast check that accounts for gradient backgrounds also passed.

## Installation commands

The project was scaffolded with `npm create vite@latest . -- --template react`. Install the dependencies with:

```bash
npm install
npm install lucide-react tailwindcss @tailwindcss/vite
```

Tailwind v4 is enabled by the `@tailwindcss/vite` plugin in `vite.config.js` and the `@import "tailwindcss";` directive in `src/index.css`.
