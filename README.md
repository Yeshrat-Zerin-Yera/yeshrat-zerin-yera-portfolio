# Yeshrat Zerin Yera — Portfolio

A responsive, dark developer portfolio built with **Next.js App Router, TypeScript, Tailwind CSS v4, and DaisyUI v5**. Designed for straightforward deployment to Vercel.

## Included

- Responsive sticky navigation and hero section
- Google Drive profile photo integration
- About section, technical skill groups, two featured project cards
- Education and contact sections
- GitHub, LinkedIn, and email links
- SEO metadata and Open Graph basics
- `projects/README.md` with instructions for completing the project cards
- `resume/Resume.md`, a clean editable starter resume

## Run locally

Requirements: Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To verify the production build:

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Extract this ZIP.
2. Push the project folder to a GitHub repository.
3. Import the repository at https://vercel.com/new.
4. Keep the detected Next.js settings and click **Deploy**.

No environment variables are required.

## Important final checks

**Two project cards:** The public search did not reliably reveal the exact two projects mentioned on LinkedIn, so the cards are explicitly marked as examples instead of presenting invented project details as facts. Edit the `projects` array in `src/app/page.tsx` and `projects/README.md` with the exact titles, descriptions, stack, and links.

**Education:** LinkedIn search surfaced Rabindra Maitree University but not a confirmed degree title. Replace `Degree: add the exact degree title` in `src/app/page.tsx` with the official degree name.

**Profile photo:** The hero image uses the supplied Google Drive file ID. Ensure the file's General access is set to **Anyone with the link — Viewer**. If it does not display reliably, download the photo from Drive, save it as `public/profile.jpg`, then change the image source in `src/app/page.tsx` to `/profile.jpg`.

**Resume:** The included resume is a starter based only on publicly visible profile information. Review it and fill in accurate degree, dates, experience, and project details before sending it to employers. Do not claim skills or accomplishments that are not accurate.

## Personal details used

- Name: Yeshrat Zerin Yera
- GitHub: https://github.com/Yeshrat-Zerin-Yera
- LinkedIn: https://www.linkedin.com/in/yeshrat-zerin-yera/
- Email: yeshratzerinyera@gmail.com

## Design notes

The visual direction takes inspiration from contemporary developer portfolios: high-contrast dark UI, lime accent, generous spacing, clean project cards, subtle borders, and responsive layouts. It does not copy the reference site's source code.
"# yeshrat-zerin-yera-portfolio" 
