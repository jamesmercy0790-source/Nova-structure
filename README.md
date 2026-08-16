# NOVA STRUCTURES — Building What Lasts.

A premium, fully interactive frontend demo for a fictional construction, civil
engineering and development company. Built as a portfolio sample to show the
quality of website that can be delivered to construction companies,
contractors, quantity surveyors, developers, architects and engineering firms.

This is a **frontend-only demo**. All data (projects, services, testimonials,
insights) is mock content defined in `src/data/`. The contact form simulates a
submission — no backend is wired up.

## Tech stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router
- lucide-react icons

## Getting started

```bash
npm install
npm run dev
```

Open the local URL Vite prints (typically `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

The production build is emitted to `dist/`.

## Deploying

This project deploys as a static site with zero configuration. It runs
cleanly on:

- **Vercel** — import the GitHub repo, framework preset "Vite", no
  environment variables required.
- **Netlify** — build command `npm run build`, publish directory `dist`.
- Any static host — upload the contents of `dist/` after running the build.

## Project structure

```
src/
  components/   Reusable UI building blocks (Header, ProjectCard, ContactForm, ...)
  data/         Mock content: projects, services, testimonials, insights
  hooks/        useReveal (scroll animations), useCountUp, useScrollPosition
  layouts/      Shared page shell (header + footer)
  pages/        Route-level pages
  types/        Shared TypeScript types
```

## Notes

- All project imagery is sourced from Unsplash for demo purposes. Swap the
  URLs in `src/data/projects.ts` and `src/data/content.ts` for real project
  photography before client delivery.
- The `Image` component (`src/components/Image.tsx`) gracefully falls back to
  a placeholder if any image fails to load.
- Animations respect `prefers-reduced-motion`.
- All project, client and testimonial content is fictional.
