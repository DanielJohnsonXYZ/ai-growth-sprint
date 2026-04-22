# Deployment Notes

## Canonical Domain

Primary domain: `humanapprovedai.com`

Redirect domains:

- `www.humanapprovedai.com` -> `humanapprovedai.com`
- `humanapprovedai.co.uk` -> `humanapprovedai.com`
- `www.humanapprovedai.co.uk` -> `humanapprovedai.com`

## Cloudflare Pages

Recommended Pages project name: `humanapprovedai`

- Build command: `npm run build`
- Output directory: `dist`
- Production branch: `main`

Direct upload, once Cloudflare is authenticated:

```bash
npm run build
npx wrangler pages deploy dist --project-name=humanapprovedai --branch=main
```

## DNS

After the Pages project exists and the custom domains are attached, point the
domain records at Cloudflare Pages:

```text
humanapprovedai.com       CNAME  humanapprovedai.pages.dev
www.humanapprovedai.com   CNAME  humanapprovedai.pages.dev
humanapprovedai.co.uk     CNAME  humanapprovedai.pages.dev
www.humanapprovedai.co.uk CNAME  humanapprovedai.pages.dev
```

Keep any required email TXT/MX records unchanged.
