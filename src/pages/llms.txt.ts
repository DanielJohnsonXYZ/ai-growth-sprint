import type { APIRoute } from "astro";
import { guides, industries, SITE, useCases } from "../data/site";

export const GET: APIRoute = () =>
  new Response(
    `# ${SITE.name}

> ${SITE.name} provides practical AI training for UK SME teams that want to save time, improve output, and keep final decisions human.

**Website:** ${SITE.url}
**Contact:** ${SITE.email}
**Primary audience:** UK SMEs with repeat admin, documents, reports, proposals, follow-ups, and coordination work.
**Positioning:** Practical, human-led AI adoption. Workflows first, tools second. AI drafts and structures; people approve.

## Core pages

- Home: ${SITE.url}/
- How it works: ${SITE.url}/how-it-works/
- Pricing: ${SITE.url}/pricing/
- Results: ${SITE.url}/results/
- Trust and security: ${SITE.url}/trust-security/
- Resources: ${SITE.url}/resources/
- Guides: ${SITE.url}/guides/
- Contact: ${SITE.url}/contact/

## Priority industries

${industries.map((industry) => `- [${industry.title}](${SITE.url}/industries/${industry.slug}/): ${industry.metaDescription}`).join("\n")}

## Workflow use cases

${useCases.map((useCase) => `- [${useCase.title}](${SITE.url}/use-cases/${useCase.slug}/): ${useCase.metaDescription}`).join("\n")}

## Free guides

${guides.map((guide) => `- [${guide.title}](${SITE.url}/guides/${guide.slug}/): ${guide.metaDescription}`).join("\n")}

## Important boundaries

- AI is used for preparation, first drafts, summaries, documentation support, and workflow speed.
- Human review remains required for client-facing, compliance-sensitive, technical, regulated, legal, tax, clinical, valuation, and commercial decisions.
- The business decides which tools and data-handling rules are allowed.

Last updated: ${new Date().toISOString().slice(0, 10)}
`,
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=300, s-maxage=3600",
      },
    },
  );
