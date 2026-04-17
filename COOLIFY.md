# Coolify Deployment

This site is ready to run as a static Astro build on Hetzner/Coolify.

## Recommended Coolify Setup

- Source: GitHub repository `DanielJohnsonXYZ/ai-growth-sprint`
- Branch: `codex/safe-ai-adoption-copy` until merged
- Build pack: Dockerfile
- Exposed port: `80`
- Domain: `humanapprovedai.com`
- Optional alias: `www.humanapprovedai.com`

## Build Variables

Astro reads these at build time, so rebuild the app after changing them.

```env
PUBLIC_SITE_NAME=Human Approved AI
PUBLIC_SITE_URL=https://humanapprovedai.com
PUBLIC_CONTACT_EMAIL=daniel@wescalestartups.com
PUBLIC_FORM_ENDPOINT=https://formsubmit.co/daniel@wescalestartups.com
```

## Contact Form

The default form endpoint sends enquiries to `daniel@wescalestartups.com` through FormSubmit.

Before relying on the form in production:

- Submit one test enquiry from the live domain.
- Approve the FormSubmit activation email that arrives at `daniel@wescalestartups.com`.
- If you later add a first-party contact API or SMTP service on Coolify, replace `PUBLIC_FORM_ENDPOINT` with that endpoint and rebuild.

## DNS Notes

Point the domain records to the Coolify proxy target configured on the Hetzner server. In Coolify, attach both the apex and `www` domains if you want both to work, then enable HTTPS through the Coolify UI.
