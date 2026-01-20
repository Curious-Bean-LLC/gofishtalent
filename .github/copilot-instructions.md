# GoFish Talent - AI Coding Agent Instructions

## Project Overview
GoFish Talent is a React + TypeScript SPA built with Vite showcasing local musicians and bands. The app functions as a talent agency website with artist EPK (Electronic Press Kit) pages, show listings, and ticket information. The site uses a playful fish-themed design with a playing card aesthetic.

## Tech Stack & Architecture
- **Framework**: React 19.2 + TypeScript, Vite for build tooling
- **Routing**: React Router v7 with client-side routing (SPA)
- **Styling**: Tailwind CSS v4 with custom fonts and utility-first approach
- **Deployment**: Configured for both Netlify and Vercel with SPA redirects

## Key Architectural Patterns

### Single Source of Truth: `musicians.ts`
All artist data lives in [src/constants/musicians.ts](src/constants/musicians.ts). This is the **central data model** for the entire app. Each musician object includes:
- Basic info: `id`, `name`, `genre`, `location`, `bio`
- Visual branding: `logo`, `image`, `color`, `fontClass` (custom font per artist)
- Performance data: `sets[]` with durations and descriptions
- Social links: `socialLinks{}` object with platform URLs
- Show data: `shows[]` and `performances[]` arrays
- Press coverage: `pressCoverage[]` array
- Integrations: `songkickArtistId`, `spotifyEmbedLink`

**Important**: When adding new artists, follow this exact structure. The `route` field must match the pattern `/talent/{slug}`.

### Custom Font System
Each artist has a unique `fontClass` (e.g., `font-gochi-hand`, `font-bangers`, `font-rock-salt`) defined in [src/index.css](src/index.css) using `@font-face`. Font files are in `assets/fonts/`. Apply artist fonts using: `className={musician.fontClass}`.

### Routing & Navigation State
- [App.tsx](src/App.tsx) defines all routes in a simple `<Routes>` block
- Artist EPK route: `/talent/:slug` loads [TalentEPK.tsx](src/pages/TalentEPK.tsx)
- **Navigation state pattern**: When navigating from [Home.tsx](src/pages/Home.tsx) to artist pages, pass `state: { from: 'home' }` to show a back button
- Example: `navigate(route, { state: { from: 'home' } })`

### Songkick Integration
Artist pages dynamically load Songkick show widgets using `songkickArtistId`. See [SONGKICK_SETUP.md](SONGKICK_SETUP.md) for configuration. The widget script is injected/removed in a `useEffect` hook in [TalentEPK.tsx](src/pages/TalentEPK.tsx#L17-L47) to handle artist changes.

### Playing Card Visual Pattern
The [Talent.tsx](src/pages/Talent.tsx) page uses a "playing card" grid layout with:
- Fish icon corners (using `react-icons/fa6`)
- Card aspect ratio of `2/3`
- Hover effects with scaling and shadow color matching artist `color`
- Artist-specific fonts applied to card titles

## Development Workflow

### Build & Run
```bash
npm run dev          # Start dev server (Vite HMR)
npm run build        # TypeScript check + production build
npm run preview      # Preview production build locally (port 4173)
npm run lint         # ESLint check
```

### Adding a New Artist
1. Add entry to `musicians` array in [src/constants/musicians.ts](src/constants/musicians.ts)
2. Import and place artist images in `assets/images/`
3. If using a new font, add `@font-face` in [src/index.css](src/index.css) and define a new `font-{name}` utility class
4. Get Songkick artist ID from URL: `songkick.com/artists/{ID}-artist-name`
5. Test routing: artist should be accessible at `/talent/{slug}`

## Design System & Conventions

### Color Palette
- Primary navy: `#1e3a5f` (headings, text)
- Secondary blue: `#2a5a8a` (body text)
- Accent orange: `#FF8C42` (borders, hover states, CTAs)
- Background: `#FFF8E7` (warm cream)
- Cards: white backgrounds with orange border-right and border-bottom

### Responsive Design
- Uses Tailwind's `max-md:` prefix for mobile-first responsive modifiers
- [Navbar.tsx](src/components/Navbar.tsx) has a custom hamburger menu for mobile
- Common pattern: `text-5xl md:text-4xl sm:text-3xl` for scaling text

### Icon Usage
Import from `react-icons`: `import { FaFish } from 'react-icons/fa6'`

## SPA Deployment Configuration
- **Netlify**: [netlify.toml](netlify.toml) redirects all routes to `/index.html` (status 200)
- **Vercel**: [vercel.json](vercel.json) rewrites all paths to `/index.html`
- **404 handling**: [public/404.html](public/404.html) exists but redirects are primary mechanism

## File Organization Rules
- **Pages**: All page components in `src/pages/` (PascalCase, `.tsx`)
- **Components**: Reusable components in `src/components/` (Navbar, Footer)
- **Assets**: Images in `assets/images/`, fonts in `assets/fonts/`
- **Constants**: Static data in `src/constants/`
- **CSS**: Global styles in [src/index.css](src/index.css), component-specific CSS co-located (e.g., [FishPond.css](src/pages/FishPond.css))

## TypeScript Configuration
Uses project references: [tsconfig.json](tsconfig.json) splits into:
- [tsconfig.app.json](tsconfig.app.json): Main app compilation
- [tsconfig.node.json](tsconfig.node.json): Vite config compilation

## Common Patterns to Follow
- **No props drilling**: Data flows from `musicians.ts` → component state via imports
- **Find by route**: `musicians.find(m => m.route === \`/talent/\${slug}\`)` to locate artists
- **Conditional rendering**: Check for data existence before rendering (e.g., `musician?.performances?.length > 0`)
- **Dynamic scripts**: Use `useEffect` cleanup functions when dynamically injecting `<script>` tags
- **Link wrapping**: Use `<Link to={path}>` from `react-router-dom`, not `<a href>`
