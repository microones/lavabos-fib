# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun dev          # Start dev server (localhost:3000)
bun build        # Production build
bun lint         # Run ESLint
bunx prisma migrate dev    # Apply DB migrations
bunx prisma generate       # Regenerate Prisma client after schema changes
bunx prisma studio         # Browse DB in browser
```

## Environment Setup

Requires a `.env` file with:
```
DATABASE_URL=postgresql://...
BETTER_AUTH_SECRET=...
BETTER_AUTH_URL=http://localhost:3000
```

## Architecture

**Lavabos FIB** is a Next.js 16 App Router app (TypeScript + Tailwind CSS 4) for cataloging bathroom quotes from FIB (Facultat d'Informàtica de Barcelona). UI text is in Catalan.

### Data Layer

- `src/lib/db.ts` — Prisma client singleton (PostgreSQL)
- `prisma/schema.prisma` — Core models: `Lavabo` (bathroom location), `Frase` (quotes with nested replies up to 3 levels), `Imatge` (photos by year/building), `Ressenya` (star ratings), `Comentari` (comments)
- `src/actions/` — All data mutations use Next.js Server Actions (`frases.ts`, `admin.ts`, `ressenyes.ts`)

### Auth

- `src/lib/server/auth.ts` — Better Auth configuration (email/password, custom username generation, admin role)
- `src/lib/client/auth.ts` — Client-side auth utilities
- API routes at `/api/auth/[...better-auth]`

### Frontend

- `src/app/` — App Router pages; root layout includes `<Navbar>`
- `src/components/ui/` — Reusable primitives (Button, Box, Badge, Title)
- `src/app/globals.css` — Two CSS variable themes: FIB (red/blue) and organic dark (brown)
- `public/img/` — Photos organized by year and building

### Path Aliases

`@/*` maps to `src/*` (configured in `tsconfig.json`). Use `@/components/...`, `@/lib/...`, etc.

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) on push to `main`: Bun install → Prisma generate → build → SSH deploy to Ubuntu server via PM2.
