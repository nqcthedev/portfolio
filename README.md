# nqc.dev — Portfolio

Personal portfolio of **Nguyen Quoc Cuong** — Front-End Developer (React / Next.js / TypeScript) with fullstack Node.js and AI engineering experience.

**Live:** [portfolio-pearl-theta-le5y3r1pbf.vercel.app](https://portfolio-pearl-theta-le5y3r1pbf.vercel.app/)

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion + Lenis smooth scrolling
- Dynamic OG image via `next/og`
- Deployed on Vercel

## Development

```bash
npm install
npm run dev
```

## Structure

- `src/lib/data.ts` — all portfolio content (skills, experience, projects, YouTube channels, stats)
- `src/components/sections/` — page sections (Hero, About, Skills, Experience, Projects, YouTube, Contact)
- `src/components/ui/` — reusable animated UI primitives
- `src/app/opengraph-image.tsx` — dynamic social-share image
- `public/cv-nguyen-quoc-cuong.pdf` — downloadable CV
