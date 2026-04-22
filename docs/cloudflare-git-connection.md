# Cloudflare Pages Git Connection

`humanapprovedai` is currently live as a Cloudflare Pages Direct Upload project.

Cloudflare does not allow converting a Direct Upload project into a Git-connected project by API. To make future GitHub pushes auto-deploy, create or connect a Git-backed Pages project in the Cloudflare dashboard:

1. Cloudflare dashboard -> Workers & Pages -> Pages.
2. Create application -> Pages -> Connect to Git.
3. Select `DanielJohnsonXYZ/ai-growth-sprint`.
4. Build command: `npm run build`.
5. Build output directory: `dist`.
6. Production branch: `main`.
7. Move the custom domains to the Git-backed project once the first deployment succeeds.

Until that is done, deploy manually:

```bash
npm run build
npx wrangler pages deploy dist --project-name=humanapprovedai --branch=main
```
