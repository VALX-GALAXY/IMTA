# IMTA Website — Frontend

Public website for the **Indian Music Therapy Association (IMTA)**. Built with React and Vite, with content pages, membership flows, and authentication wired to the IMTA API.

## Tech stack

- **React 19** + **Vite 8**
- **React Router** for client-side routing
- **Tailwind CSS 4** (via `@tailwindcss/vite`)
- **Radix UI** / shadcn-style components
- **Framer Motion**, **Lenis** (smooth scroll), **Swiper** (carousels)

## Prerequisites

- Node.js 18+ (20+ recommended)
- npm
- Backend API running locally (see [../backend/README.md](../backend/README.md)) for login, register, and session features

## Getting started

```bash
cd frontend
npm install
cp .env.example .env   # or create .env manually — see Environment variables
npm run dev
```

The dev server runs at [http://localhost:5173](http://localhost:5173).

During development, Vite proxies `/api` to `http://localhost:5001`, so you can use either:

- `VITE_API_URL=http://localhost:5001/api` (direct to the API), or
- `VITE_API_URL=/api` (via the Vite proxy)

## Environment variables

Create a `.env` file in `frontend/`:

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Base URL for API requests (no trailing slash on path prefix) | `/api` |

Example:

```env
VITE_API_URL=http://localhost:5001/api
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
├── api/auth/          # Login, register, logout API helpers
├── components/
│   ├── auth/          # Login/register UI, membership gate
│   ├── content/       # Cards, filters, section layouts
│   ├── home/          # Homepage sections (hero, intro, quick links)
│   ├── layout/        # Header, footer, mega menu
│   └── ui/            # Shared UI primitives
├── config/
│   ├── navigation.js  # Mega menu and footer links
│   ├── pages.js       # Route metadata and page registry
│   └── site.js        # Site name, contact, hero promos
├── constants/         # Route paths, membership constants
├── data/              # Static content (events, awards, members, etc.)
├── hooks/             # useAuth and related hooks
├── layouts/           # MainLayout wrapper
├── lib/               # API client, utilities, asset helpers
├── pages/             # Route-level pages and content/* variants
├── providers/         # Lenis smooth-scroll provider
└── routes/            # AppRouter
```

Content pages are driven by `src/config/pages.js` and rendered through `ContentPage` with page-specific components under `src/pages/content/`.

## Authentication

- Access tokens are stored in `localStorage` (`imta_access_token`).
- Refresh tokens are HTTP-only cookies set by the backend (`imta_refresh_token`).
- API calls use `credentials: 'include'` so refresh/logout work across origins when CORS is configured correctly.

Protected membership UI uses `MembershipLoginRequired` and redirects to `/login` with a safe return path.

## Building for production

```bash
npm run build
```

Output is written to `dist/`. Deploy the static files to your host (e.g. Netlify, Vercel, Cloudflare Pages). Set `VITE_API_URL` at build time to your production API base URL.

## Related

- API and auth: [../backend/README.md](../backend/README.md)
