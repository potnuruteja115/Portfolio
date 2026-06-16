# potnuru-teja-portfolio

Personal portfolio website for **Potnuru Teja** — Data Science undergraduate, built to impress data-focused recruiters within the first 5–10 seconds.

## Tech stack

- **Next.js 14** (App Router)
- **Tailwind CSS** — custom design tokens (dark teal + coral palette)
- **Framer Motion** — scroll-triggered reveals, animated SVG hero chart
- **Lucide React** — icon library

## Sections

| Section | Purpose |
|---|---|
| Hero | Animated self-drawing chart + typed tagline |
| About | Bio, stats, education |
| Projects | Netflix EDA Dashboard + ABG Motors Sales Analysis |
| Experience | Kodacy AI/ML Intern, Internshala Trainee |
| Skills | Categorised toolkit (languages, libraries, tools, certs) |
| Contact | Social links + mailto-powered contact form |

## Local setup

```bash
git clone https://github.com/<your-username>/potnuru-teja-portfolio
cd potnuru-teja-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customising

All content lives in the component files under `/components`. To update:

- **Projects** → `components/Projects.js`
- **Experience** → `components/Experience.js`
- **Skills** → `components/Skills.js`
- **Contact links** → `components/Contact.js` and `components/Hero.js`
- **Color palette** → `tailwind.config.js` + `app/globals.css`

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → import the repo
3. Select **Next.js** as the preset → Deploy

No environment variables required.
