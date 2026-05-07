# Jean Richelle G. Gallego - Portfolio

A high-performance, SEO-optimized portfolio built with Next.js App Router,
TypeScript strict mode, and Tailwind CSS. Content is driven by local data:
add a project by editing JSON, add a log by creating a Markdown file.
The current project and log content is based on the Makerspace Innovhub
internship narrative dated February 9 to April 10, 2026.

## Stack

| Tool | Purpose |
| --- | --- |
| Next.js 16 App Router | Framework, routing, static generation |
| React 19 | UI runtime |
| TypeScript strict mode | Type safety |
| Tailwind CSS | Styling |
| gray-matter | Markdown front matter parsing |
| remark + remark-html | Markdown to HTML |
| Lighthouse | Performance, accessibility, best practices, SEO audit |
| Vercel | Deployment target |

## Project Structure

```txt
app/
  layout.tsx          Root layout with NavBar, SkipLink, and Footer
  page.tsx            Home page with hero, featured work, and timeline
  work/
    page.tsx          Work gallery server component
    WorkGallery.tsx   Filterable gallery client component
    loading.tsx       Skeleton loader
  logs/
    page.tsx          All logs list
    loading.tsx       Skeleton loader
    [slug]/
      page.tsx        Static dynamic log detail pages
      loading.tsx     Detail skeleton loader
components/
  atoms/              Badge, Button, SectionEyebrow, SkipLink
  molecules/          ProjectCard, LogCard, FilterBar, Timeline
  layouts/            NavBar, Footer
content/              Weekly Markdown logs
data/
  projects.json       Local project/activity data
  author.json         Personal profile data
public/
  images/profile.png  Professional profile image
lib/
  logs.ts             Markdown reading and parsing
  projects.ts         Project data access and filter option building
  projectFilters.ts   Category and tech-stack filtering logic
  validation.ts       Runtime schema guards for local data
types/
  index.ts            Shared TypeScript interfaces
reports/
  lighthouse-home.json Local Lighthouse audit evidence
```

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Verification

```bash
npm run lint
npm run build
npm run audit:prod
```

The latest local Lighthouse desktop audit for `/` scored:

| Category | Score |
| --- | ---: |
| Performance | 100 |
| Accessibility | 96 |
| Best Practices | 96 |
| SEO | 100 |

The JSON report is stored in `reports/lighthouse-home.json`.

## Adding a New Project

Edit `data/projects.json` and add an object:

```json
{
  "id": 7,
  "title": "My New Project",
  "description": "What it does.",
  "techStack": ["React", "TypeScript"],
  "completionDate": "June 2025",
  "category": "Frontend"
}
```

No UI code changes are needed. The Work page automatically adds category and
tech-stack filters from the JSON data.

## Adding a New Log

Create `content/week-9.md`:

```md
---
slug: week-9
week: Week 9
title: Your Log Title
date: April 13-17, 2026
excerpt: A one-sentence summary for the list view.
---

## What I Did

Your content here in Markdown.
```

The page at `/logs/week-9` is generated automatically during the build.

## Deployment

Deploy to Vercel:

```bash
npx vercel
```

Or connect the repository at https://vercel.com.

Built by Jean Richelle G. Gallego.
