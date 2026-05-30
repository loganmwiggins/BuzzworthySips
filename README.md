# Buzzworthy React App

Frontend for Buzzworthy Sips, built with React + Vite.

## Local development

1. Install dependencies:

```bash
npm install
```

2. Create an env file from the example:

```bash
cp .env.example .env
```

3. Start the app:

```bash
npm run dev
```

## Sanity CMS integration

The home and events views now load content from Sanity.

- Events schema type: `event`
- Menu schema type: `menuItem`

Environment variables used by the frontend:

- `VITE_SANITY_PROJECT_ID`
- `VITE_SANITY_DATASET`
- `VITE_SANITY_API_VERSION`

If these are omitted, the app falls back to your current project defaults.

## Dataset workflow (development vs production)

Use separate datasets for local work and production content.

- Local defaults: `development`
- Production defaults: `production`

Recommended setup:

1. Keep local `.env` based on `.env.example` (development dataset).
2. Set deployment environment variables to production values.
3. Keep `.env.production.example` as a reference template only.

If your local site cannot read Sanity data, add your frontend origin to Sanity CORS:

- http://localhost:5173
- http://127.0.0.1:5173
