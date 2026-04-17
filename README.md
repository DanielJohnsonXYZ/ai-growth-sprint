# Human Approved AI

Static Astro website for safe AI adoption training for 10-50 person UK SME teams.

## Local Development

```sh
npm ci
npm run dev
```

## Production Build

```sh
npm run build
npm run preview
```

## Environment

Copy `.env.example` if you need local overrides. Public values are baked into the static build, so rebuild after changing them.

```env
PUBLIC_SITE_NAME=Human Approved AI
PUBLIC_SITE_URL=https://humanapprovedai.com
PUBLIC_CONTACT_EMAIL=daniel@wescalestartups.com
PUBLIC_FORM_ENDPOINT=https://formsubmit.co/daniel@wescalestartups.com
```

## Deployment

Use `Dockerfile` for Coolify on Hetzner. See `COOLIFY.md` for domain, form, and DNS notes.
