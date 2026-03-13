# Design System for HVAC Landing Page

This design system is based on a detailed analysis of the provided screenshot, which appears to be a preview of a WordPress theme called "HeyHost" for an AC & Heating company website from ThemeForest. The layout is a typical modern landing page with a clean, professional look: hero section, services, warranty info, team profiles, tips/blog teasers, contact form, and footer. It uses a blue-dominant color scheme, sans-serif typography, ample whitespace, and responsive elements like grids for cards and images.

The system is designed for recreation using clean, modular code (assuming "claude code" refers to "clean code" principles, possibly with Tailwind CSS for utility-first styling, as it's efficient for such designs). I'll include Tailwind CSS examples for implementation, as it's a popular way to build responsive UIs without custom CSS bloat. The structure emphasizes reusability, accessibility, and mobile-first responsiveness.

## 1. Colors
The palette is professional and trustworthy, with blues evoking coolness (fitting for HVAC). Extracted from visible elements:

- **Primary Blue**: Used for buttons, accents, and highlights. `#007BFF` (or Tailwind: `blue-500`).
- **Dark Blue**: For headers, footers, and navigation. `#001F3F` (or Tailwind: `navy-900` or `blue-950`).
- **Light Blue**: Subtle accents in sections. `#E3F2FD` (or Tailwind: `blue-50`).
- **Gray Text**: Body text and secondary elements. `#333333` (or Tailwind: `gray-800`).
- **Light Gray Background**: For sections and cards. `#F8F9FA` (or Tailwind: `gray-50`).
- **White**: Main background and text on dark elements. `#FFFFFF` (or Tailwind: `white`).
- **Accent Yellow/Orange**: Rare, for warnings or highlights (e.g., team icons). `#FFC107` (or Tailwind: `yellow-400`).

**Tailwind Config Example** (add to `tailwind.config.js`):
```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#007BFF',
        darkBlue: '#001F3F',
        lightBlue: '#E3F2FD',
      },
    },
  },
};
```

## 2. Typography
Sans-serif fonts for readability. Headings are bold and large for hierarchy, body text is clean.

- **Font Family**: Primary: 'Roboto', sans-serif (or system fallback: -apple-system, BlinkMacSystemFont, 'Segoe UI'). Secondary: None visible, but could use 'Montserrat' for headings.
- **Sizes**:
  - H1 (Hero/Section Titles): 2.5rem–3rem (Tailwind: `text-4xl` or `text-5xl`), bold, line-height 1.2.
  - H2 (Subheadings): 1.75rem–2.25rem (Tailwind: `text-3xl`), bold.
  - H3 (Card Titles): 1.25rem–1.5rem (Tailwind: `text-xl`), bold.
  - Body Text: 1rem (Tailwind: `text-base`), line-height 1.6.
  - Small Text (Captions/Footnotes): 0.875rem (Tailwind: `text-sm`).
- **Weights**: Bold (700) for headings, normal (400) for body.
- **Colors**: Headings in Dark Blue or Primary Blue; body in Gray Text.
- **Other**: Uppercase for some buttons/nav; no italics visible.

**Tailwind Example for a Heading**:
```html
<h1 class="text-4xl font-bold text-darkBlue md:text-5xl">AC & Heating Company Best Price</h1>
```

**Implementation Tip**: Use Google Fonts for Roboto: `<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">` and apply `font-sans` in Tailwind.

## 3. Spacing and Layout
Generous padding for sections to create breathing room. Responsive with media queries or Tailwind breakpoints (sm, md, lg).

- **Padding**:
  - Section Padding Y: 3rem–5rem (Tailwind: `py-12 md:py-20`).
  - Container Padding X: 1rem–2rem (Tailwind: `px-4 md:px-8`).
  - Element Padding: 1rem for buttons/cards (Tailwind: `p-4`).
- **Margins**:
  - Between Elements: 1rem–2rem (Tailwind: `my-4` or `space-y-4` for stacks).
  - Section Margins: None (sections butt up with background colors).
- **Containers**: Max-width 1200px centered (Tailwind: `max-w-6xl mx-auto`).
- **Grid/Flex**: 
  - Team/Tips: 1-col mobile, 2–4-col desktop (Tailwind: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`).
  - Hero: Flex row on desktop (image + text), stack on mobile (Tailwind: `flex flex-col md:flex-row`).
- **Breakpoints**: Mobile-first; sm (640px), md (768px), lg (1024px).

**Tailwind Example for Section Layout**:
```html
<section class="py-12 md:py-20 bg-gray-50">
  <div class="max-w-6xl mx-auto px-4 md:px-8">
    <h2 class="text-3xl font-bold text-center text-darkBlue mb-8">Our Team Of Professionals</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Team cards here -->
    </div>
  </div>
</section>
```

## 4. Components
Modular, reusable elements. Each can be built as HTML with Tailwind classes.

### 4.1 Header/Navigation
- Sticky top bar with logo left, nav links right.
- Logo: "HeyHost" in white on dark blue bg.
- Nav: Links in white, hover primary blue.
- Mobile: Hamburger menu (not shown, but standard).

**Tailwind Example**:
```html
<header class="bg-darkBlue py-4 sticky top-0">
  <div class="max-w-6xl mx-auto px-4 flex justify-between items-center">
    <a href="#" class="text-white text-2xl font-bold">HeyHost</a>
    <nav class="hidden md:flex space-x-6">
      <a href="#" class="text-white hover:text-primary">Home</a>
      <!-- More links -->
    </nav>
  </div>
</header>
```

### 4.2 Hero Section
- Full-width, with overlaid text and images (AC units, technicians).
- Text: Large heading, subtext, CTA button.
- Background: Gradient or image.

**Tailwind Example**:
```html
<section class="bg-lightBlue py-20">
  <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
    <div class="md:w-1/2">
      <h1 class="text-4xl font-bold text-darkBlue mb-4">AC & Heating Company Best Price</h1>
      <p class="text-gray-800 mb-6">Expert Heating, Cooling & Air Conditioning Repair Installation & Repair.</p>
      <button class="bg-primary text-white px-6 py-3 rounded hover:bg-blue-600">Get A Quote</button>
    </div>
    <div class="md:w-1/2 mt-8 md:mt-0">
      <img src="hero-image.jpg" alt="AC Installation" class="w-full rounded">
    </div>
  </div>
</section>
```

### 4.3 Cards (Services, Team, Tips)
- White bg, shadow, rounded corners.
- Image top, title, description, button.
- For Team: Square photo, name, role.

**Tailwind Example (Service Card)**:
```html
<div class="bg-white p-4 rounded shadow">
  <img src="service-image.jpg" alt="Cleaning" class="w-full h-32 object-cover mb-4">
  <h3 class="text-xl font-bold mb-2">Cleaning</h3>
  <p class="text-gray-800">Lorem ipsum dolor sit amet.</p>
  <button class="bg-primary text-white px-4 py-2 rounded mt-4">Learn More</button>
</div>
```

### 4.4 Form (Quote Request)
- Blue bg sidebar, inputs with labels, submit button.
- Fields: Name, Email, Message.

**Tailwind Example**:
```html
<form class="bg-primary p-6 rounded text-white">
  <h3 class="text-xl font-bold mb-4">Request A Quote</h3>
  <input type="text" placeholder="Name" class="w-full p-2 mb-4 rounded bg-white text-gray-800">
  <!-- More inputs -->
  <button type="submit" class="bg-darkBlue px-6 py-3 rounded w-full">Submit</button>
</form>
```

### 4.5 Footer
- Dark blue bg, logo, links, social icons, copyright.

**Tailwind Example**:
```html
<footer class="bg-darkBlue py-6 text-white">
  <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between">
    <div>© 2026 HeyHost</div>
    <nav class="space-x-4">
      <a href="#" class="hover:text-primary">Privacy</a>
      <!-- More -->
    </nav>
  </div>
</footer>
```

## 5. Icons and Images
- Use SVG icons for services (e.g., cleaning flask, repair tools).
- Photos: Stock images of technicians, AC units (ensure responsive with `object-cover`).
- No specific library visible; recommend Heroicons or Font Awesome.

## 6. Responsiveness and Accessibility
- Mobile: Stack elements vertically (Tailwind handles with `md:flex-row`).
- Accessibility: Alt text for images, ARIA labels for buttons/forms, sufficient contrast (blue on white passes WCAG).
- Performance: Lazy load images, minify CSS/JS.

## 7. Implementation Guidelines
- **Framework**: HTML + Tailwind CSS (install via CDN: `<script src="https://cdn.tailwindcss.com"></script>` or build with PostCSS).
- **Structure**: One-page HTML with sections via IDs for smooth scrolling.
- **Clean Code Principles**: Modular components (use partials if in a framework like React/Vue), semantic HTML (e.g., <section>, <article>), no inline styles.
- **Tools**: Use VS Code for editing; test on devices with Tailwind's responsive classes.
- **Variations**: For "About Us" page (seen in screenshot), reuse components like stats cards (e.g., "Numbers Speak" with percentages).

This system allows for a pixel-similar recreation. If you need full HTML code or adjustments, provide more details!