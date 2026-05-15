# Developer Portfolio - SPEC.md

## 1. Concept & Vision

A sleek, modern developer portfolio that balances creative flair with professionalism. The design maintains the dark theme aesthetic from the original project while elevating it to showcase technical work. The portfolio feels like a polished developer profile—approachable yet impressive, with subtle animations that demonstrate attention to detail without being distracting.

## 2. Design Language

### Aesthetic Direction

Dark mode developer aesthetic with glowing accents—inspired by modern dev tool interfaces (VS Code, terminal themes). Clean, spacious, and content-focused.

### Color Palette

- **Primary Background**: `#0f0f1a` (deep navy-black)
- **Secondary Background**: `#1a1a2e` (card surfaces)
- **Accent Primary**: `#dc2eff` (electric purple - main accent)
- **Accent Secondary**: `#00d4ff` (cyan - highlights)
- **Text Primary**: `#ffffff` (white)
- **Text Secondary**: `#a0a0b0` (muted gray)
- **Border/Subtle**: `#2a2a3e`

### Typography

- **Headings**: "Space Grotesk" (modern, geometric sans-serif)
- **Body**: "Inter" (clean, readable)
- **Code/Tech elements**: "JetBrains Mono" (monospace for tech stack badges)

### Spatial System

- Base unit: 8px
- Section padding: 80px vertical
- Card padding: 24px
- Gap between cards: 24px
- Border radius: 12px for cards, 8px for buttons

### Motion Philosophy

- Subtle entrance animations on scroll (fade-up, 400ms ease-out)
- Hover states with scale and glow effects (200ms)
- Smooth scroll behavior
- Code typing animation in hero section

### Visual Assets

- Icons: Lucide icons (via CDN)
- Project images: placeholder cards with gradient overlays
- Decorative: subtle grid pattern background, floating accent shapes

## 3. Layout & Structure

### Page Flow

1. **Hero Section** - Name, title, tagline, CTA buttons (GitHub, Contact)
2. **About Section** - Brief bio, skills overview with tech stack icons
3. **Projects Section** - 3-5 project cards with image, title, description, tech tags, links
4. **Contact Section** - Simple contact info or form
5. **Footer** - Social links, copyright

### Responsive Strategy

- Desktop: max-width 1200px, 3-column project grid
- Tablet (768px): 2-column project grid
- Mobile (480px): single column, reduced spacing

## 4. Features & Interactions

### Hero Section

- Animated typing effect for role/tagline
- Two CTA buttons: "View Projects" (primary), "GitHub" (secondary/outline)
- Floating accent shapes in background

### About Section

- Profile placeholder (initials avatar)
- Skills displayed as tech stack badges with icons
- Brief paragraph describing background

### Projects Section

- Hover: card lifts with shadow, slight scale
- Each card shows: project image/preview, title, description (2 lines max), tech tags, GitHub/Live Demo links
- Tech tags styled as pill badges

### Contact Section

- Email link styled as button
- Social media icons (GitHub, LinkedIn, Twitter/X)

### Interactions

- Smooth scroll to sections via nav
- Hover glow effects on cards and buttons
- Active state feedback on clickable elements

## 5. Component Inventory

### Navigation (fixed top)

- Logo/Name on left
- Nav links on right (About, Projects, Contact)
- Mobile: hamburger menu with slide-out drawer

### Hero Card

- States: default (with typing animation running)
- Large heading, subtitle, two buttons

### Project Card

- States: default, hover (elevated + glow border)
- Image area (200px height with gradient overlay)
- Content area: title, description, tech pills, link buttons

### Tech Badge

- Pill shape with icon and text
- Subtle background, accent text color

### Button

- Primary: filled accent color, white text
- Secondary: outline with accent border, transparent fill
- States: default, hover (brightness/scale), active (scale down), disabled (opacity)

### Social Icon

- Circular icon button
- Hover: accent glow

## 6. Technical Approach

### Stack

- Pure HTML/CSS/JS (no frameworks)
- Google Fonts for typography
- Lucide icons via CDN

### File Structure

```
index.html - Semantic HTML structure
index.css - All styles (single file)
index.js - Interactions (nav toggle, typing effect, scroll animations)
```

### Key Implementation Details

- CSS custom properties for theming
- Intersection Observer for scroll animations
- CSS Grid for project layout
- Flexbox for component internals
- CSS animations for typing effect and hover states
