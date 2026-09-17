# NewEra Launchpad

# Build Prompt: NewEra Solutions — Premium EdTech Website

## Role
Act as a senior product designer, UX strategist, and senior frontend engineer building a production-ready website. Prioritize a cohesive, working product over covering every idea below — where a choice must be made, favor restraint, performance, and clarity.

## 0. How to Execute This Brief
This is a large build. Don't attempt everything in one pass.

1. **Confirm gaps first.** Before writing code, list what's missing (real logo, exact brand colors if any exist, real instructor names/photos, real testimonials, contact details, form backend) and use clearly-labeled placeholders for anything not provided. Never invent credentials, company names, testimonials, or outcome/salary claims — flag these as "replace with real data" instead of fabricating specifics.
2. **Build in phases, and check in after each:**
   - **Phase 1 — Foundation:** design tokens, project structure, data schema (courses/instructors/projects/testimonials/FAQs), Navbar, Hero (with 3D or its fallback), Trust/Stats section.
   - **Phase 2 — Core content:** Courses section, Why NewEra, Learning Journey timeline.
   - **Phase 3 — Depth:** Projects showcase, Technology Stack, AI-First section, Instructors, Testimonials.
   - **Phase 4 — Conversion & polish:** FAQ, Final CTA, Footer, enquiry form + confirmation state, SEO/meta, accessibility pass, responsive/performance pass.
3. **Self-review before calling anything done:** check spacing consistency, typographic hierarchy, mobile layouts, contrast, CTA clarity, and animation restraint. Fix rather than flag.

## 1. Brand & Positioning
- **Brand:** NewEra Solutions — technology education (Full Stack Web Development, AI Automation, Data Science & AI)
- **Tagline:** "Learn. Build. Automate. Become Industry Ready."
- **Positioning:** premium, technical, trustworthy, career-focused — a technology company that teaches, not a coaching institute. Reference point: modern AI startups and developer-tool platforms (Linear, Vercel, OpenAI, Anthropic), not typical EdTech sites.
- **Avoid:** stock photos, cartoon illustrations, generic classroom imagery, cluttered card grids, heavy gradients, cheap-feeling animation.

## 2. Tech Stack
- **Frontend:** React + TypeScript + Vite + Tailwind CSS + shadcn/ui
- **3D/Motion:** Three.js + React Three Fiber + @react-three/drei, GSAP for scroll choreography, Framer Motion for UI transitions
- **Icons:** Lucide React only (no emoji)
- **Structure:** modular, reusable components (Navbar, Hero, CourseCard, CourseSection, InstructorSection, StatsSection, TestimonialCard, Timeline, ProjectCard, FAQ, CTA, Footer, Scene3D, FloatingElements) with content driven by typed data files (`/data/courses.ts`, `/data/instructors.ts`, etc.) so a future CMS/Supabase backend can slot in without touching components.

## 3. Visual System
- **Background:** near-black / deep charcoal (`#050505`, `#0A0A0A`, `#111111`)
- **Foreground:** white, soft gray
- **Accents:** electric blue, cyan, sparing violet — used for emphasis only (CTAs, glows, active states), never as broad gradients
- **Type:** Inter or Geist; large, confident hero type with strong hierarchy; body copy stays restrained
- **Glass effects:** use only on the sticky navbar and maybe one hover state — low blur, low opacity, subtle border. Not a recurring motif.
- **Rule of thumb:** every visual flourish (gradient, glow, glass, particle) must justify itself against the "premium tech company" bar — cut anything that reads as decorative filler.

Define reusable design tokens (colors, type scale, spacing, radius, shadow, animation duration, breakpoints) once in a config/theme file; every component consumes them rather than hardcoding values.

## 4. Site Structure & Content
Build in this scroll order: Hero → Trust/Stats → Courses → Why NewEra → Learning Journey → Projects → Technology Stack → AI-First → Instructors → Testimonials → FAQ → Final CTA → Footer.

**Navigation:** Logo left; Courses / Why NewEra / Learning Experience / Projects / About / Contact center-right; primary CTA "Explore Courses", secondary "Talk to Us". Sticky, blurs/gains border+shadow on scroll. Fully responsive mobile menu.

**Hero:** Eyebrow "THE NEXT ERA OF TECH EDUCATION"; headline "Build the Skills That Build the Future."; supporting line on the three programs; CTAs "Explore Courses" / "Start Your Journey"; 4 small trust indicators below. Right side/background: an interactive 3D scene (floating code fragments, wireframe sphere or neural-network-like core, drifting particles) with mouse parallax, slow rotation, scroll-linked camera movement — subtle, not gamified. Lazy-load the scene; ship a static, still-premium fallback for low-power devices / no WebGL / `prefers-reduced-motion`.

**Trust/Stats:** "Built for the New Era of Technology" + 4 stat callouts (learners, projects, programs, practical-learning %) — values stored as easily-editable constants. No invented client logos; if logos are wanted, use clearly labeled placeholder slots.

**Courses (3):** Full Stack Web Development, AI Automation, Data Science & AI. For each: title, one-line description, tech/skill tags, duration, level, project count, CTA, and a distinct 3D/visual motif (dev environment / connected workflow nodes / neural network respectively). Not plain rectangular cards — interactive panels with cursor-reactive tilt/glow, smooth content transitions.

**Why NewEra:** "Don't Just Learn. Build." — 4–6 benefit blocks (learn-by-building, industry-relevant skills, practical AI, mentorship, portfolio-ready projects, career focus), line icons, minimal motion.

**Learning Journey:** "From Curious to Capable." — 5-stage scroll-activated timeline: Learn → Practice → Build → Automate → Showcase.

**Projects:** "Learn Through Real Projects." — showcase (horizontal scroll or interactive grid) of ~6 example projects, each with preview, stack tags, description, difficulty, associated course.

**Technology Stack:** floating/connected node visualization of the tools taught (React, TypeScript, Node.js, Python, Git/GitHub, MongoDB/PostgreSQL, Docker, n8n, Claude/OpenAI APIs, ML frameworks) — not a static logo grid.

**AI-First section:** "The Future Isn't Coming. You're Building It." — a visual flagship moment covering AI-assisted development, automation, agents, and modern workflows, anchored by the most ambitious 3D visual on the site.

**Instructors:** "Learn From People Who Build." — profile cards (photo, name, role, expertise, experience, links). Use placeholders where real data isn't supplied; never fabricate credentials.

**Testimonials:** "What Learners Say." — structured placeholder testimonials (name, role, course, quote, optional photo) clearly marked as placeholders, easy to swap for real ones.

**Outcomes:** "Skills That Open Doors." — portfolio/skills/interview-readiness framing. No guaranteed-job or salary claims.

**FAQ:** accordion, smooth expand/collapse, the 10 questions listed in the original brief (audience, prior experience, format, mentorship, tech covered, enrollment, professionals, contact).

**Final CTA:** "Your Next Era Starts Here." + subtle animated background + two CTAs.

**Footer:** logo, tagline, nav links, legal links, social links, copyright.

**Enquiry form:** name, email, phone, course interest, experience level, message; polished success state ("Thank you. We've received your enquiry. The NewEra team will get back to you shortly."). Keep CTAs to "Explore Courses" (primary) / "Talk to Us" (secondary) persistently accessible.

## 5. Motion & 3D Discipline
- Motion vocabulary: magnetic buttons, scroll-triggered reveals, smooth hover states, parallax, animated counters — applied consistently, not everywhere.
- 3D reinforces the tech/AI positioning; it should never read as a gaming site.
- Every animation must respect `prefers-reduced-motion` and degrade gracefully without WebGL.

## 6. Non-Negotiable Technical Requirements
- **Performance:** code-splitting, lazy-loaded 3D, optimized/responsive images (WebP/AVIF), Intersection Observer-driven animations, no unnecessary re-renders, controlled bundle size.
- **Responsiveness:** desktop/laptop/tablet/mobile; simplify or remove heavy 3D on mobile while preserving a premium feel; no horizontal overflow; thumb-friendly touch targets.
- **Accessibility:** semantic HTML, correct heading hierarchy, keyboard navigation, visible focus states, alt text, ARIA where needed, sufficient contrast, reduced-motion support.
- **SEO:** proper title/meta description, Open Graph tags, semantic structure, Organization + Course schema where relevant.
  - Suggested title: "NewEra Solutions | Learn Full Stack, AI Automation & Data Science"
  - Suggested meta description: "Build real-world technology skills with NewEra Solutions. Learn Full Stack Development, AI Automation and Data Science & AI through practical, project-based learning."

## 7. Guardrails
**Do:** premium, minimal, cinematic, technology-forward, strong hierarchy, sophisticated but restrained 3D/motion, conversion-focused, fully responsive.
**Don't:** generic coaching-institute aesthetic, stock imagery, cartoon illustration, gradient/glassmorphism overuse, wall-to-wall cards, excessive animation, fabricated testimonials/credentials/logos, guaranteed-employment or salary claims, random icon styles, sacrificing performance for effects.

## 8. Definition of Done
The site should feel like one cohesive product from a technology company — not a stack of pretty sections. Before considering it finished, verify: consistent spacing/typography across all sections, no orphaned or generic-looking components, clean mobile layouts, passing accessibility basics, fast load with 3D degrading gracefully, and every CTA leading somewhere clear.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6e8da2f1-13b9-4c99-a78f-f3470a543df2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
