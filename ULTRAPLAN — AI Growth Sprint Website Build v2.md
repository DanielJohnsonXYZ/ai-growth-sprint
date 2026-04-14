# ULTRAPLAN - AI Growth Sprint Website Build v2
## We Scale Startups | Sitemap v3 Implementation Build Plan

**Sources:**
- Notion Sitemap v3: https://www.notion.so/33bf99a79fdb81448b88f00c9b54e820
- Prior local plan: `ULTRAPLAN - AI Growth Sprint Website Build.md`

**Date:** 2026-04-13
**Launch scope:** 26 core/site pages
**Launch pages:** 8 core pages + 12 industry pages + 6 use-case pages
**Post-launch content:** 12 industry resource articles, rolled out after launch
**Primary conversion:** Book a free 15-minute call
**Target market:** UK SME teams with office-heavy workflows
**Stack decision:** Astro SSG + MDX/content collections
**Hosting decision:** Netlify

---

## Executive Summary

Build a content-led marketing site for AI Growth Sprint that is narrow in positioning but broad enough for SEO and GEO discovery.

The homepage should feel like a focused specialist offer for practical AI workflow training, not a generic AI agency directory. The landing-page footprint still covers 12 industries because those pages are needed for search, AI-search citation, and outbound personalization.

The live launch should include 26 pages:
- `/`
- `/how-it-works/`
- `/pricing/`
- `/results/`
- `/trust-security/`
- `/about/`
- `/contact/`
- `/resources/`
- 12 `/industries/*` pages
- 6 `/use-cases/*` pages

The 12 industry articles are not launch blockers. They move into a post-launch editorial rollout after the site is live, proof collection has started, and priority keywords have been validated.

---

## Non-Negotiable Operating Rules

1. **No jargon.** Write for business owners and team leads, not AI insiders.
2. **Outcome first, training second.** Lead with business pain, then explain the AI workflow training.
3. **Still clearly AI training.** Do not make the offer so outcome-led that buyers cannot tell what they are buying.
4. **Show the work with proof.** Use named testimonials, results snapshots, before/after workflows, and case studies wherever available.
5. **AI drafts, humans review.** Every sensitive or high-stakes workflow needs visible review boundaries.
6. **One primary CTA per page.** The CTA is always: book a free 15-minute call.
7. **Every SEO page must be genuinely personalized.** No thin pages, no noun-swaps, no generic industry labels pasted onto the same content.
8. **Articles do not delay launch.** Resource articles are post-launch unless explicitly moved into scope later.

---

## Phase 0 - Foundations

### 0.1 Technical Setup

| # | Task | Owner | Dependency | Done |
|---|---|---|---|---|
| 0.1.1 | Confirm Netlify project and production domain | Dev | - | [ ] |
| 0.1.2 | Scaffold Astro SSG site | Dev | 0.1.1 | [ ] |
| 0.1.3 | Configure MDX/content collections for core, industry, use-case, proof, and resources content | Dev | 0.1.2 | [ ] |
| 0.1.4 | Set up branch deploys / preview deploys | Dev | 0.1.2 | [ ] |
| 0.1.5 | Configure SSL, DNS, and production URL | Dev | 0.1.1 | [ ] |
| 0.1.6 | Install GA4 and Ahrefs Web Analytics | Dev | 0.1.2 | [ ] |
| 0.1.7 | Track ChatGPT referral traffic with `utm_source=chatgpt.com` where applicable | Dev | 0.1.6 | [ ] |
| 0.1.8 | Configure `robots.txt` to allow `Googlebot`, `Bingbot`, and `OAI-SearchBot` | Dev | 0.1.2 | [ ] |
| 0.1.9 | Generate XML sitemap with canonical URLs only | Dev | 0.1.2 | [ ] |
| 0.1.10 | Add canonical tags for all pages | Dev | 0.1.2 | [ ] |
| 0.1.11 | Confirm Calendly account and embed code | Daniel | - | [ ] |
| 0.1.12 | Confirm contact form destination and spam-protection approach | Dev / Daniel | 0.1.2 | [ ] |

### 0.2 Design System

| # | Task | Owner | Dependency | Done |
|---|---|---|---|---|
| 0.2.1 | Define brand colors, typography, spacing, and layout rhythm | Design | - | [ ] |
| 0.2.2 | Design CTA styles for primary and secondary actions | Design | 0.2.1 | [ ] |
| 0.2.3 | Design page templates for core, industry, use-case, results, and resources pages | Design | 0.2.1 | [ ] |
| 0.2.4 | Design shared components: hero, outcome grid, credibility strip, trust strip, results strip, before/after block, proof card, package card, FAQ block | Design | 0.2.1 | [ ] |
| 0.2.5 | Define responsive behavior for mobile, tablet, and desktop | Design | 0.2.3 | [ ] |
| 0.2.6 | Build reusable Astro components | Dev | 0.2.4 | [ ] |

### 0.3 Content Infrastructure

| # | Task | Owner | Dependency | Done |
|---|---|---|---|---|
| 0.3.1 | Create content schemas / templates for all launch page types | Dev / Content | 0.1.3 | [ ] |
| 0.3.2 | Create proof/testimonial database with permission tracking | Daniel | - | [ ] |
| 0.3.3 | Collect Daniel bio, credentials, logos, photos, and institutional proof | Daniel | - | [ ] |
| 0.3.4 | Collect and verify all market stats with source links and dates | Content | - | [ ] |
| 0.3.5 | Define placeholder label: `[Pending source material]` | Content | - | [ ] |
| 0.3.6 | Confirm no invented quotes, logos, metrics, or client names can ship | Content | 0.3.2 | [ ] |

### 0.4 SEO and GEO Setup

| # | Task | Owner | Dependency | Done |
|---|---|---|---|---|
| 0.4.1 | Keyword research for 26 launch pages | SEO | - | [ ] |
| 0.4.2 | Write unique title tags and meta descriptions for 26 launch pages | SEO | 0.4.1 | [ ] |
| 0.4.3 | Define structured data policy | Dev / SEO | - | [ ] |
| 0.4.4 | Build internal linking map | SEO | - | [ ] |
| 0.4.5 | Configure Open Graph and social preview metadata | Dev | 0.2.1 | [ ] |

**Structured data policy:**
- Use `Organization` for brand-level identity.
- Use `Person` for Daniel where relevant.
- Use `BreadcrumbList` across page templates.
- Use `Article` only for resource articles when they are published post-launch.
- Use `Service` selectively where the content clearly describes a service and matches visible copy.
- Do not use `LocalBusiness` by default unless there is a real public local-business footprint.
- Do not use blanket `FAQPage` schema on every industry page. FAQs can exist for users, but FAQ schema should be added only when defensible and eligible.

---

## Phase 1 - Core Conversion Pages

These pages handle the sale and trust-building. Build and approve them first.

| # | Page | URL | Purpose | Required Sections | Dependencies | Done |
|---|---|---|---|---|---|---|
| 1.1 | Homepage | `/` | Position the business as a focused specialist for practical AI adoption in SME teams | Hero, sub-hero, outcome grid, featured industries, featured use-cases, credibility strip, before/after workflow, results strip, trust strip, package overview, final CTA | Bio, logos, proof, package details | [ ] |
| 1.2 | How It Works | `/how-it-works/` | Explain delivery model and reduce uncertainty | 4-step process, what your team leaves with, sample deliverables, trust note | Sample deliverables | [ ] |
| 1.3 | Pricing | `/pricing/` | Help buyers self-select without confusing package choice | 3 packages, comparison block, deliverable previews, single CTA | Package pricing | [ ] |
| 1.4 | Results | `/results/` | Main proof hub and proof gate | Named proof if available, workflow outcomes, before/after examples, results snapshots, case study summaries | Proof database | [ ] |
| 1.5 | Trust and Security | `/trust-security/` | Resolve privacy, accuracy, hallucination, and review-boundary objections | Data handling, public tool warnings, AI drafts humans review, sector notes, FAQ content | Sector trust notes | [ ] |
| 1.6 | About | `/about/` | Build founder-level trust | Daniel background, credentials, logos, teaching philosophy | Bio assets | [ ] |
| 1.7 | Contact | `/contact/` | Remove booking friction | Calendly embed, form, industry dropdown, team size, time-drain question, email/phone | Calendly, form destination | [ ] |
| 1.8 | Resources | `/resources/` | Create a crawlable hub for future articles without making articles launch blockers | Resource index shell, category filters if useful, links to core/industry/use-case pages, note that articles roll out post-launch | Content model | [ ] |

### Homepage Rules

- Do not present all 12 industries equally above the fold.
- Feature construction, accounting, and property.
- Feature proposals/tenders, client reporting, and documentation/SOPs.
- Keep the copy plain-English and concrete.
- Make clear this is hands-on AI training using the team's real work.

### Results Page Launch Gate

The `/results/` page can launch in one of two states:

1. **Proof-ready state:** It includes approved named testimonials, results snapshots, or case study summaries.
2. **Proof-pending state:** It is framed as "Workflow examples and expected outcomes" and clearly labels any unapproved proof as `[Pending source material]`.

In both states:
- No invented client names.
- No invented logos.
- No invented quotes.
- No invented metrics presented as real.
- Before/after examples must include a review boundary.

---

## Phase 2 - Priority Industry Pages

These are the first outreach sectors and should get the highest content and proof attention.

| # | Page | URL | Hero Angle | Workflows | Trust Note | Proof Priority | Done |
|---|---|---|---|---|---|---|---|
| 2.1 | Construction | `/industries/construction/` | Stop losing hours on tenders, estimates, and paperwork | Tender responses, cost estimates, RAMS/H&S docs, subcontractor comms, progress reports | Estimators, PMs, and directors review before anything is sent or priced | Highest | [ ] |
| 2.2 | Accounting | `/industries/accounting/` | Spend less time on compliance, more time on advisory | Client reports, tax research support, onboarding/KYC, engagement letters, bookkeeping prep | Partners review anything client-facing, technical, or compliance-critical | High | [ ] |
| 2.3 | Property | `/industries/property/` | Better listings, faster follow-ups, less time on admin | Listing descriptions, vendor/applicant follow-ups, market appraisal drafts, social content, lead qualification | Regulated statements, valuations, and advice are reviewed by the agency | High | [ ] |

### Industry Page Build Checklist

Applies to all 12 industry pages:

- [ ] Hero with industry-specific angle
- [ ] Problem section with sector-specific pain
- [ ] 5 workflows with current process, AI-assisted process, and time saved
- [ ] "Who it's for" with job titles and company size
- [ ] How-it-works summary linking to `/how-it-works/`
- [ ] Proof section using named proof or `[Pending source material]`
- [ ] Sector-specific trust block
- [ ] 2-4 related use-case links
- [ ] Relevant results or case-study link
- [ ] CTA: book a free 15-minute call
- [ ] 3+ insights unique to this sector
- [ ] Unique title tag, meta description, and H1
- [ ] Structured data applied only if defensible under the structured data policy
- [ ] Internal links wired per linking map

---

## Phase 3 - Remaining Industry Pages

All 12 industry pages launch for SEO/GEO, even though outreach remains narrow.

### Phase 2 Outreach Targets

| # | Page | URL | Hero Angle | Uniqueness Anchors | Done |
|---|---|---|---|---|---|
| 3.1 | Recruitment | `/industries/recruitment/` | Source, screen, and place faster than your competitors | Speed-to-shortlist, outbound volume, follow-up competition | [ ] |
| 3.2 | Legal | `/industries/legal/` | Help a 15-person firm work more like a 50-person firm | Matter intake pressure, time-recording friction, confidentiality concern | [ ] |
| 3.3 | Manufacturing | `/industries/manufacturing/` | Not for the factory floor. For the office that runs it. | RFQs and quote speed, audit/compliance docs, tacit process knowledge | [ ] |

### Phase 3 Outreach Sectors

| # | Page | URL | Hero Angle | Uniqueness Anchors | Done |
|---|---|---|---|---|---|
| 3.4 | Retail | `/industries/retail/` | Sell more, stock smarter, spend less time on admin | Product volume, stock sensitivity, local/ecommerce marketing | [ ] |
| 3.5 | Hospitality | `/industries/hospitality/` | Fill more covers, answer fewer emails, run a tighter ship | Booking-driven demand, guest tone, review-response pressure | [ ] |
| 3.6 | Logistics | `/industries/logistics/` | Less paperwork, fewer missed deliveries, better margins | Delivery timing, compliance load, stakeholder comms at scale | [ ] |
| 3.7 | Healthcare | `/industries/healthcare/` | Better patient communication, less admin, safer records | Appointment/admin load, patient communication clarity, clinical boundary concerns | [ ] |
| 3.8 | Agriculture | `/industries/agriculture/` | Less paperwork, smarter planning, better margins | Grant/subsidy burden, seasonal planning, farm-office admin | [ ] |
| 3.9 | Professional Services | `/industries/professional-services/` | Deliver more, admin less, win better clients | Proposal pressure, reporting overhead, delivery vs business development balance | [ ] |

### Recruitment and Professional Services Cluster

Keep `/industries/recruitment/` and `/industries/professional-services/` separate for SEO, but connect them through:
- Shared use-case links
- Bidirectional page links
- Shared proof where relevant
- Similar "people-powered service firms" framing where it helps, without duplicating copy

---

## Phase 4 - Use-Case Pages

These pages capture task-led demand and make the site more citable by workflow, not just sector.

| # | Page | URL | Best-Fit Industries | Examples | Done |
|---|---|---|---|---|---|
| 4.1 | Proposals and Tenders | `/use-cases/proposals-and-tenders/` | Construction, manufacturing, accounting, professional services | Tender responses, proposal first drafts, engagement letters, RFQ responses | [ ] |
| 4.2 | Client Reporting | `/use-cases/client-reporting/` | Accounting, recruitment, property, logistics, professional services | Management reports, market appraisals, candidate/client updates, progress reports | [ ] |
| 4.3 | Email and Follow-ups | `/use-cases/email-and-follow-ups/` | Property, recruitment, retail, hospitality, logistics, healthcare | Vendor/applicant follow-ups, candidate outreach, supplier/client updates, patient comms | [ ] |
| 4.4 | Documentation and SOPs | `/use-cases/documentation-and-sops/` | Manufacturing, construction, healthcare, agriculture, logistics, professional services | SOP drafts, compliance docs, RAMS, internal workflow playbooks | [ ] |
| 4.5 | Research and Briefing | `/use-cases/research-and-briefing/` | Legal, accounting, property, retail, professional services, recruitment | Tax/policy summaries, case/competitor summaries, market appraisal prep, supplier negotiation prep | [ ] |
| 4.6 | Client Onboarding and Admin | `/use-cases/client-onboarding-and-admin/` | Accounting, legal, healthcare, recruitment, professional services | Onboarding packs, intake forms, matter opening, appointment follow-up | [ ] |

### Use-Case Page Structure

Each use-case page needs:
- Hero with task-focused headline
- Problem across industries
- 3-4 before/after workflow examples from different sectors
- Cross-links to relevant industry pages
- Proof via results snapshots, workflow examples, or testimonials
- Trust/review boundary
- CTA: book a free 15-minute call

---

## Phase 5 - QA, SEO Hardening, and Launch

### 5.1 Technical QA

| # | Task | Done |
|---|---|---|
| 5.1.1 | All 26 launch pages render correctly on mobile, tablet, and desktop | [ ] |
| 5.1.2 | Lighthouse audit targets: Performance > 90, Accessibility > 95, SEO > 95 | [ ] |
| 5.1.3 | All primary CTAs route to Calendly or the contact flow correctly | [ ] |
| 5.1.4 | All internal links resolve with no 404s | [ ] |
| 5.1.5 | Contact form submission tested end-to-end | [ ] |
| 5.1.6 | Calendly embed loads and books correctly | [ ] |
| 5.1.7 | GA4 and Ahrefs analytics fire on all pages | [ ] |
| 5.1.8 | ChatGPT referral tracking works where UTM links are used | [ ] |

### 5.2 SEO and GEO QA

| # | Task | Done |
|---|---|---|
| 5.2.1 | All 26 launch pages have unique title tags and meta descriptions | [ ] |
| 5.2.2 | All 26 launch pages have unique H1s | [ ] |
| 5.2.3 | Structured data validates and matches visible page content | [ ] |
| 5.2.4 | XML sitemap includes all canonical launch URLs and no duplicates | [ ] |
| 5.2.5 | `robots.txt` allows `Googlebot`, `Bingbot`, and `OAI-SearchBot` | [ ] |
| 5.2.6 | Internal linking map is fully implemented | [ ] |
| 5.2.7 | Images have descriptive alt text | [ ] |
| 5.2.8 | No thin pages: every industry page passes the 3+ unique-insights rule | [ ] |
| 5.2.9 | Open Graph metadata renders correctly | [ ] |
| 5.2.10 | Canonical tags are present and correct on all pages | [ ] |

### 5.3 Content QA

| # | Task | Done |
|---|---|---|
| 5.3.1 | All stats have source links and dates | [ ] |
| 5.3.2 | No invented quotes, logos, numbers, or client names | [ ] |
| 5.3.3 | All unconfirmed proof is marked `[Pending source material]` | [ ] |
| 5.3.4 | Copy is plain-English and low-jargon | [ ] |
| 5.3.5 | Every page has one primary CTA | [ ] |
| 5.3.6 | Trust notes are accurate per sector, especially legal, accounting, and healthcare | [ ] |
| 5.3.7 | Daniel reviews and approves all pages before launch | [ ] |

### 5.4 Launch Tasks

| # | Task | Done |
|---|---|---|
| 5.4.1 | Submit sitemap to Google Search Console | [ ] |
| 5.4.2 | Submit sitemap to Bing Webmaster Tools | [ ] |
| 5.4.3 | Verify Ahrefs Web Analytics running | [ ] |
| 5.4.4 | Set up rank tracking for priority keywords | [ ] |
| 5.4.5 | Go live on production domain | [ ] |

### 5.5 Launch Gate

Do not launch if any of these are true:
- Any launch page is missing a unique title tag, meta description, or H1.
- Any industry page fails the 3+ unique-insights rule.
- Any proof appears real but is unapproved.
- Any stat lacks a source link and date.
- `/results/` contains invented or ambiguous proof.
- `robots.txt` blocks target crawlers, including `OAI-SearchBot`.
- Sitemap or canonical tags include duplicate or non-canonical URLs.
- Contact form or Calendly flow is broken.

---

## Phase 6 - Post-Launch Resources and Articles

Articles are valuable for SEO/GEO and sales enablement, but they do not block launch.

### 6.1 Priority Article Rollout

Publish the first 3 articles after launch, aligned to the first outreach sectors:

1. How Construction Companies Are Using AI in 2026 - 5 Real Examples
2. AI for Accountants: 5 Tasks You Can Hand to AI This Week
3. Estate Agents and AI: Better Listings, Faster Follow-Ups

### 6.2 Remaining Industry Articles

Roll out after proof and keyword validation:

1. AI for Retail: How Small Shops Are Saving Time Each Week
2. AI for Hotels and Restaurants: Cut Admin, Keep the Personal Touch
3. AI for Logistics: Less Paperwork, Fewer Missed Deliveries
4. AI for Manufacturers: Start With the Office, Not the Factory Floor
5. AI for Small Law Firms: Better Workflow, Less Admin
6. AI for Recruitment Agencies: Source, Screen, Place - Faster
7. AI for Private Healthcare: Better Patient Communication, Less Admin
8. AI for Farming: The Office Work AI Can Actually Help With
9. AI for Consultancies and Agencies: Win Proposals, Deliver Faster, Admin Less

### 6.3 Future Use-Case Articles

- Proposal/tender workflow deep-dives
- Reporting workflow guides
- Inbox and follow-up workflow guides
- SOP and documentation templates
- Research and briefing workflow guides
- Onboarding/admin workflow guides

---

## Content Templates and Required Fields

### Homepage Content Brief

```text
Hero headline: [outcome-focused, mentions admin/proposals/reporting/follow-up]
Sub-hero: [teams learn by working on their own real workflows]
Outcome grid: [4-6 concrete tasks AI speeds up]
Featured industries: Construction, Accounting, Property
Featured use-cases: Proposals/tenders, Reporting, Documentation
Credibility strip: [Daniel credentials, client logos, named proof]
Before/after: [one workflow example with old vs new process]
Results strip: [3-5 concrete numbers, only if sourced or clearly labeled as examples]
Trust strip: [link to /trust-security/, one-line reassurance]
Package overview: [3 packages, brief descriptions, all route to same CTA]
Final CTA: Book a free 15-minute call
```

### Industry Page Content Brief

```text
Title tag: [unique, keyword-targeted, under 60 chars where practical]
Meta description: [unique, under 155 chars where practical, includes CTA hook]
H1: AI Training for [Industry] - [one-line benefit]
Problem section: [3-4 sentences, sector-specific pain]
Workflow 1: [task name | current process | AI-assisted process | time saved]
Workflow 2: [task name | current process | AI-assisted process | time saved]
Workflow 3: [task name | current process | AI-assisted process | time saved]
Workflow 4: [task name | current process | AI-assisted process | time saved]
Workflow 5: [task name | current process | AI-assisted process | time saved]
Who it's for: [job titles, company size range]
How it works: [summary + link to /how-it-works/]
Proof: [named testimonial OR [Pending source material]]
Trust note: [sector-specific safe use + review boundaries]
Related use-case links: [2-4 URLs]
Related result/case-study link: [URL or [Pending source material]]
Unique insights: [3+ things that would not make sense on another sector page]
CTA: Book a free 15-minute call
```

### Use-Case Page Content Brief

```text
Title tag: [unique, task-led]
Meta description: [task-led, outcome-focused]
H1: [task-focused AI training headline]
Problem: [why this task is slow across industries]
Example 1: [industry | current workflow | AI-assisted workflow | review boundary]
Example 2: [industry | current workflow | AI-assisted workflow | review boundary]
Example 3: [industry | current workflow | AI-assisted workflow | review boundary]
Proof: [result snapshot, testimonial, or [Pending source material]]
Related industry links: [3-6 URLs]
CTA: Book a free 15-minute call
```

### Proof Entry Templates

**Named testimonial**

```text
Client name:
Role:
Company:
Industry:
Quote:
Permission status: [Approved / Pending]
```

**Case study**

```text
Client name:
Sector:
Team size:
Starting problem:
Workshop delivered:
Measurable outcome:
Quote:
30-day result:
Permission status: [Approved / Pending]
```

**Results snapshot**

```text
Workflow name:
Before time:
After time:
Team/role affected:
Source/proof status:
```

**Before/after workflow**

```text
Job to be done:
Old workflow:
New workflow:
What changed:
Review boundary:
Source/proof status:
```

---

## Internal Linking Map

### Core Page Links

```text
Homepage -> how-it-works, pricing, results, trust-security, about, contact
Homepage -> industries/construction, industries/accounting, industries/property
Homepage -> use-cases/proposals-and-tenders, use-cases/client-reporting, use-cases/documentation-and-sops
How It Works -> pricing, contact, trust-security
Pricing -> how-it-works, contact, results
Results -> all industry pages, all use-case pages, contact
Trust and Security -> how-it-works, about, contact
About -> how-it-works, contact, results
Contact -> terminal page, minimal outbound links
Resources -> industry pages and post-launch article pages as they publish
```

### Industry to Use-Case Cross-Links

```text
Construction -> proposals-and-tenders, documentation-and-sops, email-and-follow-ups
Retail -> email-and-follow-ups, research-and-briefing, client-reporting
Hospitality -> email-and-follow-ups, documentation-and-sops
Logistics -> email-and-follow-ups, client-reporting, documentation-and-sops
Manufacturing -> proposals-and-tenders, documentation-and-sops
Property -> email-and-follow-ups, client-reporting, research-and-briefing
Accounting -> client-reporting, client-onboarding-and-admin, proposals-and-tenders
Legal -> research-and-briefing, client-onboarding-and-admin, documentation-and-sops
Recruitment -> email-and-follow-ups, client-reporting, research-and-briefing
Healthcare -> client-onboarding-and-admin, email-and-follow-ups, documentation-and-sops
Agriculture -> documentation-and-sops, research-and-briefing, email-and-follow-ups
Professional Services -> proposals-and-tenders, client-reporting, research-and-briefing, documentation-and-sops
```

### Cluster Links

```text
Recruitment <-> Professional Services
```

### Use-Case Backlinks

Each use-case page links back to its best-fit industry pages listed in Phase 4.

---

## Proof Collection Tracker

| Industry | Named Testimonial | Case Study | Results Snapshot | Before/After | Status |
|---|---|---|---|---|---|
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
| Professional Services | [ ] | [ ] | [ ] | [ ] | Pending |

**Proof priority:** Construction, accounting, and property first.

---

## Outreach Alignment

The sitemap is broad. Outreach stays narrow.

### Phase 1 Outreach

1. Construction - large market, clear ROI, strong tender and paperwork pain.
2. Accounting - compliance urgency, repeatable workflows, training budget logic.
3. Property - low adoption, visible before/after value, easy-to-understand wins.

### Phase 2 Outreach

1. Recruitment - workflows are AI-ready and speed matters commercially.
2. Legal - strong need, slower trust curve.
3. Manufacturing - good fit once stronger proof exists.

### Phase 3 Outreach

- Retail
- Hospitality
- Logistics
- Healthcare
- Agriculture
- Professional services

**Key rule:** All 12 industry pages launch for SEO/GEO. Outreach priority does not determine page existence.

---

## Risk Register

| Risk | Impact | Mitigation |
|---|---|---|
| Proof not ready at launch | `/results/` and industry pages feel thin | Use proof-pending framing, workflow examples, and `[Pending source material]`; prioritize first 3 sectors |
| Industry pages feel too similar | SEO/GEO weakness and poor user experience | Enforce 3+ unique-insights rule and dedicated content review |
| Homepage tries to do too much | Loses focused specialist positioning | Feature only the top 3 sectors above the fold |
| Trust concerns block conservative buyers | Lower conversion in legal, healthcare, accounting | `/trust-security/` first-class page and sector-specific trust blocks |
| Stats become outdated or unverified | Credibility damage | Source links and dates required; quarterly review |
| Thin SEO content ships under time pressure | Ranking and brand damage | No-publish launch gate for thin or noun-swapped pages |
| Articles delay launch | Slower time to market | Articles are explicitly post-launch |
| Schema is over-applied | Search quality risk and maintenance burden | Use narrow structured data policy; no blanket `FAQPage` |

---

## Weekly Milestone Summary

| Week | Milestone | Pages Live |
|---|---|---|
| 1 | Foundations: Astro, Netlify, content schemas, design system, SEO/GEO setup | 0 |
| 2 | Core page drafts: homepage, how it works, pricing, results, trust/security | 0 |
| 3 | Core pages built and reviewed | 8 |
| 4 | Priority industry pages built: construction, accounting, property | 11 |
| 5 | Remaining 9 industry pages built | 20 |
| 6 | 6 use-case pages built | 26 |
| 7 | QA, SEO hardening, proof/content review | 26 |
| 8 | Launch, sitemap submission, analytics/rank tracking, post-launch article planning | Launched |

---

## Final Acceptance Criteria

- New site launches with exactly 26 launch pages.
- Astro SSG + Netlify is the implementation baseline.
- `/results/` and `/trust-security/` are first-class launch pages.
- All 12 industry pages launch and pass the 3+ unique-insights rule.
- The 12 resource articles are post-launch, not launch blockers.
- Structured data avoids default `LocalBusiness` and blanket `FAQPage`.
- Every launch page has unique title, meta description, H1, canonical URL, and CTA.
- All stats are sourced and dated.
- No invented proof is published.
- `OAI-SearchBot` is allowed.
- Sitemap contains canonical URLs only.
- Analytics, form submission, and Calendly flow are verified before launch.

---

This v2 plan supersedes the prior local ULTRAPLAN for implementation planning while preserving the original file unchanged.
