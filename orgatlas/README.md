# OrgAtlas Monorepo

OrgAtlas ships a marketing site and an authenticated product workspace from a single Next.js codebase. The public site helps prospects learn, while the gated app gives teams access to Discover, People, Jobs, and AI Mode.

## Project structure

```
src/
  app/
    (marketing)/   # Public marketing routes (/, /pricing, /about, /contact)
    login/         # Authentication entry point
    (app)/app/     # Authenticated product workspace (/app/*)
    api/           # Mock REST endpoints for discover, people, jobs, ai, auth
  components/      # Shared UI, layouts, providers, and feature views
  data/            # Deterministic fixtures powering API mocks
  lib/             # API client, session helpers, query keys
```

Key providers live in `src/components/providers`, including React Query, theme, toast, and auth context.

## Getting started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

The app runs on [http://localhost:3000](http://localhost:3000).

### Useful scripts

- `npm run dev` – start the local development server.
- `npm run lint` – lint the project with ESLint.
- `npm run build` – build the production bundle.
- `npm run verify` – lint and build in CI mode.

### Analytics stub

- Client components can call the `useAnalytics` hook (`src/hooks/useAnalytics.ts`) to push events into a lightweight `dataLayer` queue defined in `src/lib/analytics.ts`.
- Login success and app tab views are already instrumented; wire up additional product events as needed.

## Authentication flow

Authentication is mocked for local development:

- POST `/api/auth/login` validates basic email/password and issues a session cookie.
- POST `/api/auth/logout` clears the cookie.
- GET `/api/auth/session` returns the active user (if any).
- Middleware guards redirect unauthenticated `/app/*` traffic to `/login` and bounce signed-in users away from `/login`.
- The login page also offers a “Continue as demo user” shortcut that writes the same cookie.

## Marketing site

Public routes live under `src/app/(marketing)`:

- `/` – home page with hero, solution overview, feature cards, social proof, and testimonials.
- `/pricing` – plan comparison, feature matrix, and FAQ accordion.
- `/about` & `/contact` – simple placeholders ready for future content.

All marketing pages share the `PublicNavbar` and `MarketingFooter` layouts.

## Product workspace

Authenticated routes live at `/app/*`:

- `/app/discover` – filterable signal cards with search, tag chips, and pagination.
- `/app/people` – sortable directory table with department filters, persistent query params, and a slide-over profile panel.
- `/app/jobs` – filterable job cards with bookmark toggles and status chips.
- `/app/ai` – split prompt/response workspace with a local history stack and markdown rendering.

Each view pulls deterministic mock data via React Query and the `/api/*` mocks. Global toasts, workspace header navigation, and logout live inside the `AppShell` layout.

## Mock APIs

The API routes (`src/app/api/*`) expose deterministic JSON for discover, people, jobs, and AI responses. Swap the implementations for real data sources when you integrate a database or upstream service.

## Testing

A minimal node-based test suite verifies utility helpers:

```bash
npm test
```

Add new tests under the `tests/` directory to cover additional utilities or business logic.

## Deployment

The repository is ready for Vercel (or any Node 18+ host). Ensure the project uses Node 18.18+ or 20.x with the provided `engines` configuration. Update the mock auth to real providers before going live.
