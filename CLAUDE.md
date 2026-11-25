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
- `src/components/Gallery.tsx` — galeria amb PhotoSwipe; fa servir les miniatures WebP que dona l'API

### Fotos

Les fotos les serveix l'API de fotos (repo `microones/api.lavabos-fib`, a `api.lavabos-fib.microones.cat`), que llegeix `fotos/` d'aquest repo (`PHOTOS_DIR=/var/www/lavabos-fib/fotos` al servidor) i en genera versions WebP de 320/640/1280/1920 px a `fotos/.cache/` (ignorada per git). Estructura: `fotos/anys/<any>/<edifici>/*.jpg` i `fotos/public/` (logo i fotos de l'equip). Les fotos del 2025 i `public/` només són al servidor (pesen 1,2 GB); les noves es poden afegir per PR.

### Path Aliases

`@/*` maps to `src/*` (configured in `tsconfig.json`). Use `@/components/...`, `@/lib/...`, etc.

## Deployment

- CI (`.github/workflows/ci.yml`) a cada PR i push a `main`: `bun audit`, lint i build.
- Desplegament al servidor: `cd /var/www/lavabos-fib && bash scripts/deploy.sh` (pull, install, còpia de la DB a `~/backups/lavabos-fib`, `prisma migrate deploy`, build, `pm2 restart lavabos-fib`).
- Si s'afegeixen fotos, després cal `cd /var/www/lavabos-fib-api && bun run miniatures`.
- `DATABASE_URL` al servidor fa servir el socket local de Postgres (`?host=/var/run/postgresql`), sense contrasenya.
