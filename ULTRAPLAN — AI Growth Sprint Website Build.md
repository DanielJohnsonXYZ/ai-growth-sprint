# ULTRAPLAN — AI Growth Sprint Website Build
## We Scale Startups | Sitemap v3 Implementation

**Source:** [Notion Sitemap v3](https://www.notion.so/33bf99a79fdb81448b88f00c9b54e820)
**Date:** 2026-04-11
**Total pages at launch:** 27 (7 core + 12 industry + 6 use-case + 1 resources hub + 1 blog index)
**Primary conversion:** Book a free 15-minute call
**Target market:** UK SME teams with office-heavy workflows

---

## PHASE 0 — FOUNDATIONS (Week 1)
> Get the stack, structure, and shared assets in place before any page is written.

### 0.1 Technical setup
| # | Task | Owner | Dependency | Done |
|---|------|-------|------------|------|
| 0.1.1 | Choose and provision hosting (Netlify recommended — already connected) | Dev | — | [ ] |
| 0.1.2 | Set up repo with framework (Next.js App Router or Astro — SSG for SEO speed) | Dev | 0.1.1 | [ ] |
| 0.1.3 | Configure domain, SSL, DNS for production URL | Dev | 0.1.1 | [ ] |
| 0.1.4 | Set up staging/preview environment with branch deploys | Dev | 0.1.2 | [ ] |
| 0.1.5 | Install analytics (GA4 + Ahrefs Web Analytics) | Dev | 0.1.2 | [ ] |
| 0.1.6 | Set up `utm_source=chatgpt.com` tracking for ChatGPT referrals | Dev | 0.1.5 | [ ] |
| 0.1.7 | Configure `robots.txt` — allow `OAI-SearchBot`, `Googlebot`, `Bingbot` | Dev | 0.1.2 | [ ] |
| 0.1.8 | Set up XML sitemap generation (canonical URLs only) | Dev | 0.1.2 | [ ] |
| 0.1.9 | Calendly account setup + embed code ready | Daniel | — | [ ] |

### 0.2 Design system
| # | Task | Owner | Dependency | Done |
|---|------|-------|------------|------|
| 0.2.1 | Define brand colours, typography, spacing scale | Design | — | [ ] |
| 0.2.2 | Design CTA button styles (primary + secondary) | Design | 0.2.1 | [ ] |
| 0.2.3 | Design page templates: Core page, Industry page, Use-case page | Design | 0.2.1 | [ ] |
| 0.2.4 | Design shared components: hero, credibility strip, trust strip, results strip, before/after block, proof card, package card, FAQ accordion | Design | 0.2.1 | [ ] |
| 0.2.5 | Mobile responsive breakpoints defined | Design | 0.2.3 | [ ] |
| 0.2.6 | Build component library in code (reusable blocks) | Dev | 0.2.4 | [ ] |

### 0.3 Content infrastructure
| # | Task | Owner | Dependency | Done |
|---|------|-------|------------|------|
| 0.3.1 | Set up CMS or MDX content structure for all page types | Dev | 0.1.2 | [ ] |
| 0.3.2 | Create content templates with required fields per page type (see Section 5 below) | Content | — | [ ] |
| 0.3.3 | Create proof/testimonial database with permission tracking | Daniel | — | [ ] |
| 0.3.4 | Collect and verify all stats with source links and dates (DSIT, YouGov, BCC, techUK/ANS) | Content | — | [ ] |
| 0.3.5 | Gather Daniel's bio, credentials, logos, photos | Daniel | — | [ ] |
| 0.3.6 | Prepare placeholder system — `[Pending source material]` labels for unconfirmed proof | Content | — | [ ] |

### 0.4 SEO & structured data setup
| # | Task | Owner | Dependency | Done |
|---|------|-------|------------|------|
| 0.4.1 | Keyword research: primary + secondary for all 27 pages | SEO | — | [ ] |
| 0.4.2 | Write unique title tags and meta descriptions for all 27 pages | SEO | 0.4.1 | [ ] |
| 0.4.3 | Define structured data schemas: LocalBusiness, FAQPage, Service, BreadcrumbList, Person (Daniel) | Dev | — | [ ] |
| 0.4.4 | Build internal linking map (see Section 6 below) | SEO | — | [ ] |
| 0.4.5 | Set up Open Graph and Twitter Card meta for all page types | Dev | 0.2.1 | [ ] |

---

## PHASE 1 — CORE CONVERSION PAGES (Weeks 2-3)
> These pages handle the sale. Build and approve them first.

### Priority order (sequential — each informs the next):

| # | Page | URL | Key sections | Content deps | Done |
|---|------|-----|-------------|-------------|------|
| 1.1 | **Homepage** | `/` | Hero, sub-hero, outcome grid (4-6 tasks), featured industries (construction/accounting/property), featured use-cases (proposals/reporting/documentation), credibility strip, before/after workflow, results strip, trust strip, package overview, final CTA | Daniel bio, logos, proof, package details | [ ] |
| 1.2 | **How It Works** | `/how-it-works/` | 4-step process, "What your team leaves with", sample deliverables (workbook excerpt, prompt template, before/after, action checklist), trust note on safe usage | Sample deliverable assets | [ ] |
| 1.3 | **Pricing** | `/pricing/` | 3 packages (Team Workshop, Open Cohort, 4-Week Programme), "Which option is right for you?" comparison, deliverable previews, single CTA | Package pricing confirmed | [ ] |
| 1.4 | **Results** | `/results/` | Named testimonials, logo strip, before/after workflows, results snapshots, case study summaries, links to industry + use-case pages | Proof database (0.3.3) | [ ] |
| 1.5 | **Trust & Security** | `/trust-security/` | Data handling, public tool warnings, "AI drafts humans review", accuracy boundaries, sector-specific notes (legal/accounting/healthcare/property), FAQ | Sector trust research | [ ] |
| 1.6 | **About** | `/about/` | Daniel background, credentials, logos/institutions, teaching philosophy | Daniel bio (0.3.5) | [ ] |
| 1.7 | **Contact** | `/contact/` | Calendly embed, contact form (industry dropdown x12, team size, "what takes most time?"), direct email + phone | Calendly (0.1.9) | [ ] |

### Core page content rules:
- One primary CTA per page: **Book a free 15-minute call**
- No jargon — written for business owners and team leads
- Outcome first, training second
- All proof must be real or clearly marked `[Pending source material]`
- Accessibility: key content in crawlable text, not images only

---

## PHASE 2 — PRIORITY INDUSTRY PAGES (Week 3-4)
> Phase 1 outreach targets. Build these with the most care and proof.

| # | Page | URL | Hero angle | 5 workflows | Trust note focus | Proof priority |
|---|------|-----|-----------|------------|-----------------|---------------|
| 2.1 | **Construction** | `/industries/construction/` | Stop losing hours on tenders, estimates, and paperwork | Tender responses (6-8h to ~90m), cost estimates, RAMS/H&S docs, subcontractor comms, progress reports | Estimators/PMs/directors review before anything sent or priced | **Highest — named proof first** |
| 2.2 | **Accounting** | `/industries/accounting/` | Spend less time on compliance, more time on advisory | Client reports, tax research, onboarding/KYC, engagement letters, bookkeeping prep | Partners review anything client-facing or compliance-critical | **High — named proof early** |
| 2.3 | **Property** | `/industries/property/` | Better listings, faster follow-ups, less time on admin | Listing descriptions, vendor/applicant follow-ups, market appraisal drafts, social content, lead qualification | Regulated statements/valuations reviewed by agency | **High — named proof early** |

### Industry page build checklist (applies to ALL 12):
- [ ] Hero with industry-specific angle
- [ ] Problem section (3-4 sentences on current pain)
- [ ] 5 workflows with before/after time saved
- [ ] "Who it's for" (job titles + company size)
- [ ] How it works summary + link to `/how-it-works/`
- [ ] Proof section (named or placeholder)
- [ ] Sector-specific trust block
- [ ] Related use-case page links
- [ ] CTA: book a free 15-minute call
- [ ] **3+ insights unique to this sector** (mandatory uniqueness rule)
- [ ] Unique title tag, meta description, H1
- [ ] Structured data (Service + FAQPage)
- [ ] Internal links wired per linking map

---

## PHASE 3 — REMAINING INDUSTRY PAGES (Weeks 4-5)
> Phase 2 outreach targets + remaining sectors. Same template, same quality bar.

### Phase 2 outreach priority:
| # | Page | URL | Hero angle | Uniqueness anchors |
|---|------|-----|-----------|-------------------|
| 3.1 | **Recruitment** | `/industries/recruitment/` | Source, screen, and place faster than your competitors | Speed-to-shortlist, outbound volume, follow-up competition |
| 3.2 | **Legal** | `/industries/legal/` | Help a 15-person firm work more like a 50-person firm | Matter intake pressure, time-recording friction, confidentiality concern |
| 3.3 | **Manufacturing** | `/industries/manufacturing/` | Not for the factory floor. For the office that runs it | RFQs/quote speed, audit/compliance docs, tacit process knowledge |

### Phase 3 outreach (launch live, outreach later):
| # | Page | URL | Hero angle | Uniqueness anchors |
|---|------|-----|-----------|-------------------|
| 3.4 | **Retail** | `/industries/retail/` | Sell more, stock smarter, spend less time on admin | High product volume, stock sensitivity, local/ecom marketing |
| 3.5 | **Hospitality** | `/industries/hospitality/` | Fill more covers, answer fewer emails, run a tighter ship | Booking-driven demand, guest tone, review-response pressure |
| 3.6 | **Logistics** | `/industries/logistics/` | Less paperwork, fewer missed deliveries, better margins | Delivery timing, compliance load, stakeholder comms at scale |
| 3.7 | **Healthcare** | `/industries/healthcare/` | Better patient communication, less admin, safer records | Appointment/admin load, patient clarity, strict clinical boundaries |
| 3.8 | **Agriculture** | `/industries/agriculture/` | Less paperwork, smarter planning, better margins | Grant/subsidy burden, seasonal planning, farm-office lag |
| 3.9 | **Professional Services** | `/industries/professional-services/` | Deliver more, admin less, win better clients | Proposal pressure, reporting overhead, delivery vs BD balance |

### Cross-linking requirements:
- **Recruitment <-> Professional Services**: shared use-case pages, internal links, shared proof where relevant
- Each industry page links to 2-3 related use-case pages (mapped in Section 6)

---

## PHASE 4 — USE-CASE PAGES (Weeks 5-6)
> Task-led demand capture. These make the site citable by workflow, not just sector.

| # | Page | URL | Best-fit industries | Examples to cover |
|---|------|-----|-------------------|------------------|
| 4.1 | **Proposals & Tenders** | `/use-cases/proposals-and-tenders/` | Construction, manufacturing, accounting, professional services | Tender responses, proposal first drafts, engagement letters, RFQ responses |
| 4.2 | **Client Reporting** | `/use-cases/client-reporting/` | Accounting, recruitment, property, logistics, professional services | Management reports, market appraisals, candidate/client updates, progress reports |
| 4.3 | **Email & Follow-ups** | `/use-cases/email-and-follow-ups/` | Property, recruitment, retail, hospitality, logistics, healthcare | Vendor/applicant follow-ups, candidate outreach, supplier/client updates, patient comms |
| 4.4 | **Documentation & SOPs** | `/use-cases/documentation-and-sops/` | Manufacturing, construction, healthcare, agriculture, logistics, professional services | SOP drafts, compliance docs, RAMS, internal workflow playbooks |
| 4.5 | **Research & Briefing** | `/use-cases/research-and-briefing/` | Legal, accounting, property, retail, professional services, recruitment | Tax/policy summaries, case/competitor summaries, market appraisal prep, supplier negotiation prep |
| 4.6 | **Client Onboarding & Admin** | `/use-cases/client-onboarding-and-admin/` | Accounting, legal, healthcare, recruitment, professional services | Onboarding packs, intake forms, matter opening, appointment follow-up |

### Use-case page structure (each page):
- Hero: task-focused headline
- The problem across industries
- 3-4 before/after workflow examples from different sectors
- Cross-links to relevant industry pages
- Proof (results snapshots or testimonials)
- CTA: book a free 15-minute call

---

## PHASE 5 — RESOURCES & ARTICLES (Weeks 6-7)
> SEO, GEO, trust-building, and sales enablement content.

### 5.1 Resources hub `/resources/`
- Blog index page with category filtering
- One article per industry at launch (12 articles)
- Every article: original, specific, genuinely useful — no SEO filler

### 5.2 Launch articles (one per industry):
| # | Article title | Linked industry page |
|---|-------------|---------------------|
| 1 | How Construction Companies Are Using AI in 2026 — 5 Real Examples | `/industries/construction/` |
| 2 | AI for Retail: How Small Shops Are Saving Time Each Week | `/industries/retail/` |
| 3 | AI for Hotels and Restaurants: Cut Admin, Keep the Personal Touch | `/industries/hospitality/` |
| 4 | AI for Logistics: Less Paperwork, Fewer Missed Deliveries | `/industries/logistics/` |
| 5 | AI for Manufacturers: Start With the Office, Not the Factory Floor | `/industries/manufacturing/` |
| 6 | Estate Agents and AI: Better Listings, Faster Follow-Ups | `/industries/property/` |
| 7 | AI for Accountants: 5 Tasks You Can Hand to AI This Week | `/industries/accounting/` |
| 8 | AI for Small Law Firms: Better Workflow, Less Admin | `/industries/legal/` |
| 9 | AI for Recruitment Agencies: Source, Screen, Place — Faster | `/industries/recruitment/` |
| 10 | AI for Private Healthcare: Better Patient Communication, Less Admin | `/industries/healthcare/` |
| 11 | AI for Farming: The Office Work AI Can Actually Help With | `/industries/agriculture/` |
| 12 | AI for Consultancies and Agencies: Win Proposals, Deliver Faster, Admin Less | `/industries/professional-services/` |

### 5.3 Future use-case articles (add over time):
- Proposal/tender workflow deep-dives
- Reporting workflow guides
- Inbox and follow-up workflow guides
- SOP and documentation templates
- Research and briefing workflow guides
- Onboarding/admin workflow guides

---

## PHASE 6 — QA, SEO HARDENING & LAUNCH (Week 7-8)

### 6.1 Technical QA
| # | Task | Done |
|---|------|------|
| 6.1.1 | All 27 pages render correctly on mobile, tablet, desktop | [ ] |
| 6.1.2 | Lighthouse audit: Performance > 90, Accessibility > 95, SEO > 95 | [ ] |
| 6.1.3 | All CTAs link to Calendly or contact form correctly | [ ] |
| 6.1.4 | All internal links resolve (no 404s) | [ ] |
| 6.1.5 | Contact form submission tested end-to-end | [ ] |
| 6.1.6 | Calendly embed loads and books correctly | [ ] |
| 6.1.7 | Analytics firing on all pages | [ ] |
| 6.1.8 | UTM tracking working for ChatGPT referrals | [ ] |

### 6.2 SEO hardening
| # | Task | Done |
|---|------|------|
| 6.2.1 | All 27 pages have unique title tags and meta descriptions | [ ] |
| 6.2.2 | All pages have unique H1s | [ ] |
| 6.2.3 | Structured data validates in Google Rich Results Test | [ ] |
| 6.2.4 | XML sitemap includes all canonical URLs, no duplicates | [ ] |
| 6.2.5 | `robots.txt` allows all target crawlers including `OAI-SearchBot` | [ ] |
| 6.2.6 | Internal linking map fully implemented (see Section 6 map) | [ ] |
| 6.2.7 | All images have descriptive alt text | [ ] |
| 6.2.8 | No thin pages — every industry page passes the uniqueness rule (3+ unique insights) | [ ] |
| 6.2.9 | Open Graph and Twitter Card meta rendering correctly | [ ] |
| 6.2.10 | Canonical tags set on all pages | [ ] |

### 6.3 Content QA
| # | Task | Done |
|---|------|------|
| 6.3.1 | All stats have source links and dates | [ ] |
| 6.3.2 | No invented quotes, logos, numbers, or client names | [ ] |
| 6.3.3 | All unconfirmed proof marked `[Pending source material]` | [ ] |
| 6.3.4 | No jargon — plain language throughout | [ ] |
| 6.3.5 | Every page has exactly one primary CTA | [ ] |
| 6.3.6 | Trust notes accurate per sector (especially legal, accounting, healthcare) | [ ] |
| 6.3.7 | Daniel reviews and approves all pages | [ ] |

### 6.4 Launch
| # | Task | Done |
|---|------|------|
| 6.4.1 | Submit sitemap to Google Search Console | [ ] |
| 6.4.2 | Submit sitemap to Bing Webmaster Tools | [ ] |
| 6.4.3 | Verify Ahrefs Web Analytics running | [ ] |
| 6.4.4 | Set up rank tracking for priority keywords (Ahrefs) | [ ] |
| 6.4.5 | Go live on production domain | [ ] |

---

## SECTION 5 — CONTENT TEMPLATES & REQUIRED FIELDS

### Homepage content brief:
```
Hero headline: [outcome-focused, mentions admin/proposals/reporting/follow-up]
Sub-hero: [teams learn by working on their own real workflows]
Outcome grid: [4-6 concrete tasks AI speeds up]
Featured industries: Construction, Accounting, Property
Featured use-cases: Proposals/tenders, Reporting, Documentation
Credibility strip: [Daniel credentials, client logos, named proof]
Before/after: [one workflow example with old vs new process]
Results strip: [3-5 concrete numbers — e.g. "6 hours to 90 minutes"]
Trust strip: [link to /trust-security/, one-line reassurance]
Package overview: [3 packages, brief description, all -> same CTA]
Final CTA: Book a free 15-minute call
```

### Industry page content brief (per page):
```
Title tag: [unique, keyword-targeted, under 60 chars]
Meta description: [unique, under 155 chars, includes CTA hook]
H1: AI Training for [Industry] — [one-line benefit]
Problem section: [3-4 sentences, sector-specific pain]
Workflow 1: [task name | current process | AI-assisted process | time saved]
Workflow 2: [task name | current process | AI-assisted process | time saved]
Workflow 3: [task name | current process | AI-assisted process | time saved]
Workflow 4: [task name | current process | AI-assisted process | time saved]
Workflow 5: [task name | current process | AI-assisted process | time saved]
Who it's for: [job titles, company size range]
How it works: [summary + link to /how-it-works/]
Proof: [named testimonial OR "Pending source material"]
Trust note: [sector-specific safe use + review boundaries]
Related use-case links: [2-3 URLs]
Unique insights: [3+ things that wouldn't make sense on another sector page]
CTA: Book a free 15-minute call
```

### Proof entry templates:

**Named testimonial:**
```
Client name:
Role:
Company:
Industry:
Quote:
Permission status: [Approved / Pending]
```

**Case study:**
```
Client name:
Sector:
Team size:
Starting problem:
Workshop delivered:
Measurable outcome:
Quote:
30-day result:
```

**Results snapshot:**
```
Workflow name:
Before time:
After time:
Team/role affected:
Source/proof status:
```

**Before/after workflow:**
```
Job to be done:
Old workflow:
New workflow:
What changed:
Review boundary:
```

---

## SECTION 6 — INTERNAL LINKING MAP

### Core page links:
```
Homepage -> how-it-works, pricing, results, trust-security, about, contact
Homepage -> industries/construction, industries/accounting, industries/property (featured)
Homepage -> use-cases/proposals-and-tenders, use-cases/client-reporting, use-cases/documentation-and-sops (featured)
How It Works -> pricing, contact, trust-security
Pricing -> how-it-works, contact, results
Results -> all industry pages, all use-case pages, contact
Trust & Security -> how-it-works, about, contact
About -> how-it-works, contact, results
Contact -> (terminal page — receives links, minimal outbound)
Resources -> all industry pages (via articles)
```

### Industry -> Use-case cross-links:
```
Construction      -> proposals-and-tenders, documentation-and-sops, email-and-follow-ups
Retail            -> email-and-follow-ups, research-and-briefing, client-reporting
Hospitality       -> email-and-follow-ups, documentation-and-sops
Logistics         -> email-and-follow-ups, client-reporting, documentation-and-sops
Manufacturing     -> proposals-and-tenders, documentation-and-sops
Property          -> email-and-follow-ups, client-reporting, research-and-briefing
Accounting        -> client-reporting, client-onboarding-and-admin, proposals-and-tenders
Legal             -> research-and-briefing, client-onboarding-and-admin, documentation-and-sops
Recruitment       -> email-and-follow-ups, client-reporting, research-and-briefing
Healthcare        -> client-onboarding-and-admin, email-and-follow-ups, documentation-and-sops
Agriculture       -> documentation-and-sops, research-and-briefing, email-and-follow-ups
Prof. Services    -> proposals-and-tenders, client-reporting, research-and-briefing, documentation-and-sops
```

### Cluster links:
```
Recruitment <-> Professional Services (bidirectional, shared use-cases + proof)
```

### Use-case -> Industry backlinks:
Each use-case page links back to its 3-6 best-fit industry pages (listed in Phase 4 table).

---

## SECTION 7 — PROOF COLLECTION TRACKER

| Industry | Named testimonial | Case study | Results snapshot | Before/after | Status |
|----------|------------------|-----------|-----------------|-------------|--------|
| Construction | [ ] | [ ] | [ ] | [ ] | Pending |
| Accounting | [ ] | [ ] | [ ] | [ ] | Pending |
| Property | [ ] | [ ] | [ ] | [ ] | Pending |
| Recruitment | [ ] | [ ] | [ ] | [ ] | Pending |
| Legal | [ ] | [ ] | [ ] | [ ] | Pending |
| Manufacturing | [ ] | [ ] | [ ] | [ ] | Pending |
| Retail | [ ] | [ ] | [ ] | [ ] | Pending |
| Hospitality | [ ] | [ ] | [ ] | [ ] | Pending |
| Logistics | [ ] | [ ] | [ ] | [ ] | Pending |
| Healthcare | [ ] | [ ] | [ ] | [ ] | Pending |
| Agriculture | [ ] | [ ] | [ ] | [ ] | Pending |
| Prof. Services | [ ] | [ ] | [ ] | [ ] | Pending |

**Rule:** Prioritize proof collection for Phase 1 outreach targets (Construction, Accounting, Property) first.

---

## SECTION 8 — OUTREACH ALIGNMENT

The sitemap is broad. Outreach stays narrow. This is the sequencing:

### Phase 1 outreach (launch):
1. **Construction** — large market, clear ROI, strong tender pain
2. **Accounting** — compliance urgency, repeatable workflows, budget logic
3. **Property** — low adoption, visible before/after, easy wins

### Phase 2 outreach (after initial proof):
1. **Recruitment** — every workflow AI-ready, speed = commercial advantage
2. **Legal** — strong need, slower trust curve
3. **Manufacturing** — good fit once stronger proof exists

### Phase 3 outreach (scale):
- Retail, hospitality, logistics, healthcare, agriculture, professional services

**Key principle:** All 12 pages live from day one for SEO/GEO. Outreach focus =/= page existence.

---

## SECTION 9 — KEY OPERATING RULES (from sitemap v3)

1. **No jargon.** Write for business owners and team leads.
2. **Outcome first, training second.** Lead with business pain.
3. **Show the work with proof.** Named testimonials, results snapshots, before/after workflows.
4. **AI drafts, humans review.** Make review boundaries explicit on every page.
5. **One primary CTA per page.** Book a free 15-minute call.
6. **Every SEO page must feel genuinely personalized.** No thin pages, no noun-swaps.
7. **Still clearly AI training.** Don't make it so outcome-led that the offer becomes vague.

---

## SECTION 10 — RISK REGISTER

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Proof not ready at launch | Results page and industry pages feel thin | Use `[Pending source material]` placeholders; prioritize collecting Phase 1 proof NOW |
| Industry pages feel too similar | SEO penalty, poor user experience | Enforce 3+ unique insights rule per page; dedicated content review |
| Homepage tries to do too much | Loses focused specialist positioning | Homepage rule: do NOT present all 12 industries equally above the fold |
| Trust concerns block conservative buyers (legal, healthcare, accounting) | Lost conversions in high-value sectors | `/trust-security/` as first-class page; sector-specific trust notes on every industry page |
| Stats become outdated or unverified | Credibility damage | All stats must have source links and dates in CMS; review quarterly |
| Thin SEO content published under deadline pressure | Ranking penalty, brand damage | No-publish rule: reject any page that's just a noun-swap of another |

---

## SECTION 11 — WEEKLY MILESTONE SUMMARY

| Week | Milestone | Pages live |
|------|-----------|-----------|
| 1 | Foundations: tech stack, design system, content infrastructure, SEO setup | 0 |
| 2 | Core pages drafted: Homepage, How It Works, Pricing | 0 |
| 3 | Core pages live + Phase 1 industry pages drafted | 7 |
| 4 | Phase 1 industry pages live + Phase 2/3 industry pages drafted | 10 |
| 5 | All 12 industry pages live + use-case pages drafted | 19 |
| 6 | Use-case pages live + resources hub + articles started | 26 |
| 7 | All 12 launch articles live + QA complete | 27+ |
| 8 | SEO hardening, launch, submit sitemaps, monitoring live | **LAUNCHED** |

---

*This plan is build-ready. Every page has purpose, audience, structure, content requirements, linking rules, and proof standards defined. Start with Phase 0 foundations and Phase 1 core pages in parallel where possible.*
