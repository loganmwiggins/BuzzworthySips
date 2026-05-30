# Buzzworthy Sanity Studio

Sanity Studio for managing Buzzworthy Sips content.

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Create local env file:

```bash
cp .env.example .env
```

3. Start Studio:

```bash
npm run dev
```

## Dataset workflow

This Studio is environment-driven:

- Local default dataset: `development`
- Production dataset: `production`

Local work should be done in the development dataset.

For production builds/deployments, set environment values to production (see `.env.production.example`).
