export const SITE = {
  name: "Human Approved AI",
  description:
    "Practical AI training for UK SME teams that want to save time, improve output, and keep final decisions human.",
  url: "https://humanapprovedai.com",
  bookingUrl: "/contact/",
  /** Shown in nav/footer — leads to enquiry form (not a live calendar). */
  primaryCtaNav: "Request a free AI adoption call",
  gtmContainerId: "GTM-M5NN25K3",
  email: "hello@humanapprovedai.com",
  phone: "",
  /** Optional — footer only shows a link when set. */
  linkedInUrl: "",
};

export const packages = [
  {
    name: "Team AI Workshop",
    price: "From £1,500/day",
    fit: "Recommended for SME teams that want practical training on real tasks and a safe way to start using AI together.",
    includes: ["Up to 12 people", "Built around your real workflows", "Admin time-savers, prompt pack, and approval rules", "30-day follow-up"],
  },
  {
    name: "SME AI Cohort",
    price: "£400–600 per person",
    fit: "Best for smaller teams or managers who want a lower-commitment route before booking private training.",
    includes: ["Industry-focused cohort", "Small group format", "Reusable workflow templates", "Human review checklist"],
  },
  {
    name: "4-Week Adoption Programme",
    price: "From £4,800/team",
    fit: "Best when the team has tried AI already but needs workflows, standards, and follow-up support to make it stick.",
    includes: ["Two sessions per week", "Implementation coaching", "Workflow refinement", "Adoption and approval check-ins"],
  },
];

export type Guide = {
  slug: string;
  title: string;
  audience: string;
  metaDescription: string;
  intro: string;
  sections: {
    title: string;
    body: string;
    prompts: string[];
  }[];
  nextStep: string;
};

export const guides: Guide[] = [
  {
    slug: "construction-ai-tenders",
    title: "10 Ways Construction Firms Can Use AI to Win More Tenders",
    audience: "Construction owners, estimators, and project teams",
    metaDescription: "A practical AI guide for UK construction firms that want faster tender responses, RAMS first drafts, progress reports, and follow-ups.",
    intro: "Construction teams usually do not need a new AI tool first. They need repeatable ways to turn existing project knowledge into faster first drafts that still get checked by the people responsible.",
    sections: [
      {
        title: "Tender response first pass",
        body: "Use AI to structure the answer, pull proof points from previous work, and create a draft your estimator or director can refine.",
        prompts: ["Summarise the buyer's requirements in plain English.", "Create a response outline with missing information clearly marked."]
      },
      {
        title: "RAMS and safety paperwork",
        body: "Use approved inputs to prepare a site-specific first pass, then review for accuracy and compliance before use.",
        prompts: ["Turn these project notes into a RAMS checklist.", "List the assumptions that need human confirmation."]
      },
      {
        title: "Progress reports",
        body: "Turn site notes, photo captions, and snag lists into a structured client update.",
        prompts: ["Turn these rough updates into a concise client progress report.", "Separate completed work, risks, and next actions."]
      }
    ],
    nextStep: "Bring one tender, one RAMS example, and one progress report to a workshop so the team can build reusable workflows from real work."
  },
  {
    slug: "accountancy-ai-admin",
    title: "How Accountancy Firms Use AI to Save 10+ Hours Per Week",
    audience: "Partners, practice managers, bookkeepers, and tax teams",
    metaDescription: "A practical AI guide for UK accountancy firms that want faster reports, onboarding, engagement letters, and admin while keeping review human.",
    intro: "The biggest quick wins in accountancy are usually preparation tasks: reports, chasers, onboarding, proposals, and first-pass explanations that qualified people still approve.",
    sections: [
      {
        title: "Client report commentary",
        body: "AI can turn reviewed numbers and notes into a readable narrative first pass, making the accountant's job review and refinement rather than blank-page writing.",
        prompts: ["Create a client-friendly summary from these reviewed notes.", "Flag any claim that needs technical confirmation."]
      },
      {
        title: "Onboarding and KYC chasers",
        body: "Create checklists and polite missing-information emails from a short client brief.",
        prompts: ["Turn this onboarding status into a missing-information email.", "Create a checklist for the client and one for the internal team."]
      },
      {
        title: "Engagement letters and proposals",
        body: "Prepare tailored first passes from approved templates and scope notes while keeping fees, compliance wording, and final advice with partners.",
        prompts: ["Draft a first-pass proposal from this scope.", "Mark every section that needs partner approval."]
      }
    ],
    nextStep: "Start with one client report, one onboarding pack, and one proposal so the practice can build safe reusable workflows."
  },
  {
    slug: "estate-agent-ai-follow-up",
    title: "AI for Estate Agents: Faster Listings, Faster Follow-Up",
    audience: "Estate agency owners, branch managers, negotiators, and lettings teams",
    metaDescription: "A practical AI guide for estate agents who want faster listings, follow-ups, appraisal reports, and social content.",
    intro: "Property teams win by being clear, fast, and locally credible. AI can help with first drafts and follow-up discipline, but local judgement stays with the agent.",
    sections: [
      {
        title: "Listing descriptions",
        body: "Turn property details into first-pass descriptions in different tones, then let negotiators refine for accuracy and local nuance.",
        prompts: ["Write three listing description options from these property facts.", "Check the copy for unsupported claims."]
      },
      {
        title: "Viewing and vendor follow-ups",
        body: "Use short CRM notes to prepare timely follow-ups so opportunities do not wait until the quiet part of the week.",
        prompts: ["Write a follow-up email from these viewing notes.", "Create a next-step message for a cautious vendor."]
      },
      {
        title: "Social content from listings",
        body: "Turn one listing into a small batch of posts and email snippets, then approve tone and claims before publishing.",
        prompts: ["Create five social post ideas from this listing.", "Rewrite these in a warmer local agency tone."]
      }
    ],
    nextStep: "Bring three listings and recent follow-up notes to a workshop and leave with reusable tone rules and approval steps."
  },
  {
    slug: "uk-sme-ai-opportunities",
    title: "Where AI Can Make or Save Money in a UK SME",
    audience: "Owners and managers of UK SMEs",
    metaDescription: "A practical guide for UK SMEs to find AI opportunities in admin, proposals, reporting, follow-ups, documentation, and research.",
    intro: "A useful AI plan starts with work that already costs time or money. The goal is not to automate judgement. It is to speed up repeatable preparation while keeping people in control.",
    sections: [
      {
        title: "Find repeated work",
        body: "Look for tasks the team does every week: reports, emails, proposals, onboarding, research, or documentation.",
        prompts: ["List the admin tasks we repeat every week.", "Group these tasks by time spent and business risk."]
      },
      {
        title: "Find commercial drag",
        body: "Look for delays that cost sales, margin, or service quality: slow follow-ups, late quotes, inconsistent reports, or missing documentation.",
        prompts: ["Which delays cost us money or client trust?", "Turn these delays into a priority list."]
      },
      {
        title: "Set approval rules",
        body: "Decide what AI can draft, what humans must check, and what should never go into public tools.",
        prompts: ["Create approval rules for customer-facing AI drafts.", "List data we should not put into public tools."]
      }
    ],
    nextStep: "Start with one high-repeat task, one commercial bottleneck, and one clear approval rule."
  }
];

export type Workflow = {
  name: string;
  now: string;
  withAi: string;
  timeSaved: string;
};

export type Industry = {
  slug: string;
  title: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  hero: string;
  subhero: string;
  stat: string;
  audience: string;
  size: string;
  workflows: Workflow[];
  insights: string[];
  trustNote: string;
  relatedUseCases: string[];
  outreachPhase: string;
  proofNote: string;
  /** Optional sector FAQs — add over time; renders FAQ-style block on /industries/[slug]/ */
  faqs?: { q: string; a: string }[];
};

export const industries: Industry[] = [
  {
    slug: "construction",
    title: "Construction",
    shortName: "Construction",
    metaTitle: "AI Training for Construction Companies UK",
    metaDescription: "Practical AI training for construction teams that want faster tenders, estimates, RAMS, and progress reporting.",
    hero: "Stop losing hours on tenders, estimates, and paperwork.",
    subhero: "Hands-on AI workflow training for builders, contractors, estimators, and project teams.",
    stat: "Construction is a priority sector because the admin load is high and the return on saved hours is easy to understand.",
    audience: "MDs, office managers, estimators, and project managers",
    size: "Firms with 10-200 employees",
    workflows: [
      {
        name: "Tender responses",
        now: "Teams spend 6-8 hours pulling together old examples, method statements, and project detail.",
        withAi: "AI helps structure the response, pull relevant proof, and prepare a first pass for approval.",
        timeSaved: "6-8 hours to about 90 minutes",
      },
      {
        name: "Cost estimates",
        now: "Estimators work through specs, drawings, spreadsheets, and supplier notes manually.",
        withAi: "AI helps summarize requirements and prepare an estimate structure before the estimator refines it.",
        timeSaved: "Hours of prep to a faster first pass",
      },
      {
        name: "RAMS and health and safety documents",
        now: "Teams copy from old documents and manually adapt them to the new site.",
        withAi: "AI helps create a site-specific first pass from project details and known controls.",
        timeSaved: "1-2 hours to about 10-20 minutes for a first pass",
      },
      {
        name: "Subcontractor communication",
        now: "Project teams type similar updates, reminders, and follow-ups one by one.",
        withAi: "AI helps prepare clear subcontractor updates from a few job notes.",
        timeSaved: "30-60 minutes to 5-10 minutes",
      },
      {
        name: "Progress reports",
        now: "PMs gather notes, photos, snags, and updates into a client-ready format.",
        withAi: "AI helps turn site notes and photo captions into a structured progress report.",
        timeSaved: "2-3 hours to about 30 minutes",
      },
    ],
    insights: ["Tender deadlines punish slow first passes.", "RAMS and site paperwork are repeatable but need project-specific approval.", "Subcontractor coordination creates constant communication drag."],
    trustNote: "AI can help prepare and organize, but estimators, project managers, and directors approve before anything is sent, priced, or treated as compliant.",
    relatedUseCases: ["proposals-and-tenders", "documentation-and-sops", "email-and-follow-ups"],
    outreachPhase: "Phase 1",
    proofNote: "Highest priority for named proof.",
    faqs: [
      {
        q: "Can AI replace our estimators or sign off RAMS and tenders?",
        a: "No. AI helps structure first passes from your templates and site notes. Estimators, PMs, and directors still approve pricing, compliance, and anything client-facing.",
      },
      {
        q: "What should teams avoid putting into public AI tools?",
        a: "Live bids before approval, identifiable client or site detail you have not cleared, and anything legally sensitive. Workshops include a short red-lines list tailored to how your firm works.",
      },
      {
        q: "What does a practical workshop cover?",
        a: "Real tasks your team recognises: tender first passes, RAMS structure from project notes, subcontractor updates, and progress reports—with clear human review before anything is sent.",
      },
    ],
  },
  {
    slug: "accounting",
    title: "Accounting and Finance",
    shortName: "Accounting",
    metaTitle: "AI Training for Accountants UK",
    metaDescription: "Practical AI workflow training for accounting firms that want faster reports, onboarding, proposals, and admin.",
    hero: "Spend less time on compliance, more time on advisory.",
    subhero: "AI training for accountancy teams that want useful workflows without risky shortcuts.",
    stat: "Every tax deadline creates the same quality-control drag: reports, chasers, onboarding packs, engagement letters, and client explanations all need a careful first pass.",
    audience: "Partners, practice managers, bookkeepers, and tax specialists",
    size: "Firms with 5-50 staff",
    workflows: [
      { name: "Client reports", now: "Teams spend hours turning numbers and notes into readable management commentary.", withAi: "AI helps turn inputs into a report first pass for accountant approval.", timeSaved: "3 hours to about 30 minutes for a first pass" },
      { name: "Tax research support", now: "Teams dig through guidance and copy relevant notes into client files.", withAi: "AI helps summarize guidance and prepare questions for technical review.", timeSaved: "30+ minutes saved per first-pass brief" },
      { name: "Onboarding and KYC prep", now: "Staff manually chase missing information and prepare onboarding packs.", withAi: "AI helps create checklists, client-ready emails, and missing-info summaries.", timeSaved: "Hours of admin to a reusable workflow" },
      { name: "Engagement letters and proposals", now: "Teams edit old templates and risk missing context.", withAi: "AI helps prepare a tailored first pass from a short brief.", timeSaved: "60-90 minutes to about 15 minutes" },
      { name: "Bookkeeping prep", now: "Teams manually categorize, summarize, and flag exceptions.", withAi: "AI helps prepare exception lists and review notes.", timeSaved: "Review, not rebuild" },
    ],
    insights: ["The value is in faster preparation with qualified staff still approving the work.", "MTD and compliance pressure make repeatable workflows more valuable.", "Advisory time is squeezed by low-leverage admin."],
    trustNote: "AI supports preparation, summarizing, and pre-processing. Partners and qualified team members approve anything client-facing, technical, or compliance-critical.",
    relatedUseCases: ["client-reporting", "client-onboarding-and-admin", "proposals-and-tenders"],
    outreachPhase: "Phase 1",
    proofNote: "Case studies added as they are completed. No invented proof.",
  },
  {
    slug: "property",
    title: "Estate Agents and Property",
    shortName: "Property",
    metaTitle: "AI Training for Estate Agents UK",
    metaDescription: "AI training for estate agents who want faster listings, follow-ups, appraisal reports, and lead admin.",
    hero: "Better listings, faster follow-ups, less time on admin.",
    subhero: "Hands-on AI training for estate agency teams that need speed without losing local judgment.",
    stat: "Property is a priority sector because the workflows are visible, repeatable, and easy to improve quickly.",
    audience: "Agency owners, branch managers, negotiators, and lettings managers",
    size: "Agencies with 3-50 staff",
    workflows: [
      { name: "Property listing descriptions", now: "Negotiators write each listing from scratch or lightly edit old phrasing.", withAi: "AI helps prepare compelling descriptions from property details and tone rules.", timeSaved: "20-30 minutes to about 2-5 minutes" },
      { name: "Vendor and applicant follow-ups", now: "Follow-ups slip when the team is busy with viewings and calls.", withAi: "AI helps prepare timely, personalized follow-ups from CRM notes.", timeSaved: "Same-day responses from a short note" },
      { name: "Market appraisal reports", now: "Teams gather comparables and rewrite reports manually.", withAi: "AI helps structure the appraisal report and summarize supporting points.", timeSaved: "Hours to about 30 minutes for a first pass" },
      { name: "Social content from listings", now: "Listings rarely become consistent social content.", withAi: "AI turns a listing into LinkedIn, Instagram, Facebook, and email copy.", timeSaved: "A week of posts in minutes" },
      { name: "Lead qualification support", now: "Teams call or email everyone with the same level of urgency.", withAi: "AI helps prioritize enquiry signals and prepare next-best follow-ups.", timeSaved: "Faster triage and follow-up" },
    ],
    insights: ["Listing speed affects marketing momentum.", "Follow-up discipline has direct revenue impact.", "Appraisal support is useful only when local expertise stays in control."],
    trustNote: "AI can help with listings and follow-up systems, but regulated statements, valuations, and advice are approved by the agency.",
    relatedUseCases: ["email-and-follow-ups", "client-reporting", "research-and-briefing"],
    outreachPhase: "Phase 1",
    proofNote: "High priority for named proof.",
  },
  {
    slug: "recruitment",
    title: "Recruitment and Staffing",
    shortName: "Recruitment",
    metaTitle: "AI Training for Recruitment Agencies UK",
    metaDescription: "Practical AI training for recruitment agencies that want faster sourcing, screening, outreach, and client reporting.",
    hero: "Source, screen, and place faster than your competitors.",
    subhero: "AI workflow training for recruiters who win by moving faster without losing judgment.",
    stat: "Recruitment is workflow-ready because sourcing, screening, outreach, and reporting all repeat daily.",
    audience: "Agency owners, team leads, and senior recruiters",
    size: "Agencies with 5-30 consultants",
    workflows: [
      { name: "Candidate sourcing", now: "Recruiters spend hours building searches and scanning profiles.", withAi: "AI helps generate search strings, role criteria, and candidate research prompts.", timeSaved: "Hours to a structured sourcing sprint" },
      { name: "CV screening", now: "Teams manually read dozens of CVs per role.", withAi: "AI helps create a shortlist rationale for recruiter review.", timeSaved: "50 CVs to a first shortlist in minutes" },
      { name: "Job descriptions", now: "Old JDs get copied and lightly edited.", withAi: "AI helps prepare role-specific, clearer, more inclusive job descriptions.", timeSaved: "45 minutes to about 10 minutes" },
      { name: "Candidate outreach", now: "Generic messages get ignored.", withAi: "AI helps personalize outreach around the candidate's actual experience.", timeSaved: "Faster tailored messages" },
      { name: "Client reporting", now: "Recruiters assemble market maps and update decks manually.", withAi: "AI helps prepare market maps, salary notes, and progress updates.", timeSaved: "Hours to about 20-30 minutes for a first pass" },
    ],
    insights: ["Speed-to-shortlist is a commercial advantage.", "Outbound volume matters only if the message still feels relevant.", "Recruiter judgment remains central to fit and final decisions."],
    trustNote: "AI supports sourcing, shortlisting, outreach, and reporting. Recruiters remain responsible for fit, judgment, and final candidate/client decisions.",
    relatedUseCases: ["email-and-follow-ups", "client-reporting", "research-and-briefing"],
    outreachPhase: "Phase 2",
    proofNote: "Connect with professional services proof where relevant.",
  },
  {
    slug: "legal",
    title: "Legal",
    shortName: "Legal",
    metaTitle: "AI Training for Small Law Firms UK",
    metaDescription: "Practical AI workflow training for law firms that want safer preparation support, intake workflows, research summaries, and admin help.",
    hero: "Help a 15-person firm work more like a 50-person firm.",
    subhero: "Practical AI training for law firms with strict boundaries around confidentiality and review.",
    stat: "Legal buyers need reassurance first: speed only matters when confidentiality, accuracy, and review are explicit.",
    audience: "Partners, associates, paralegals, and practice managers",
    size: "Firms with 5-50 fee earners",
    workflows: [
      { name: "Contract review support", now: "Fee earners manually scan for missing clauses and unusual terms.", withAi: "AI helps create a review checklist and flag areas for human review.", timeSaved: "Faster first-pass review support" },
      { name: "Legal research summaries", now: "Teams spend hours turning research into internal notes.", withAi: "AI helps structure non-final summaries for qualified review.", timeSaved: "Hours to a first briefing pass" },
      { name: "Client intake", now: "Matter-opening admin creates bottlenecks.", withAi: "AI helps prepare intake summaries, checklists, and follow-up questions.", timeSaved: "Less repeated admin per matter" },
      { name: "Compliance documentation", now: "Teams adapt old templates and policies manually.", withAi: "AI helps prepare internal documentation from existing approved materials.", timeSaved: "Faster first passes" },
      { name: "Billing narratives", now: "End-of-day time entries are reconstructed from memory.", withAi: "AI helps prepare narrative descriptions from notes and calendar context.", timeSaved: "Minutes saved per entry" },
    ],
    insights: ["Confidentiality and review are the sale before speed.", "Matter intake is often a better first workflow than legal advice.", "Billing narratives are small tasks that compound across a firm."],
    trustNote: "AI is preparation and review support, not legal advice or autonomous judgment. Confidentiality and approval rules must be explicit.",
    relatedUseCases: ["research-and-briefing", "client-onboarding-and-admin", "documentation-and-sops"],
    outreachPhase: "Phase 2",
    proofNote: "Use proof only where permission and confidentiality allow.",
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    shortName: "Manufacturing",
    metaTitle: "AI Training for Manufacturers UK",
    metaDescription: "AI training for manufacturers focused on office workflows: RFQs, supplier comms, ISO documentation, proposals, and SOPs.",
    hero: "Not for the factory floor. For the office that runs it.",
    subhero: "AI workflow training for the quotes, compliance, documentation, and communication work behind production.",
    stat: "The quick wins are usually in the office before they are on the factory floor.",
    audience: "MDs, ops managers, quality managers, and sales teams",
    size: "Manufacturers with 20-200 employees",
    workflows: [
      { name: "Quoting and RFQs", now: "Sales and ops teams build quotes manually from specs and cost notes.", withAi: "AI helps summarize specs and prepare quote structures for review.", timeSaved: "Hours to a faster first pass" },
      { name: "Supplier communication", now: "Teams chase suppliers and update customers manually.", withAi: "AI helps prepare clear updates from order and production notes.", timeSaved: "30-60 minutes to about 5-10 minutes" },
      { name: "Quality and ISO documentation", now: "Audit prep means hunting through old documents and records.", withAi: "AI helps structure audit-ready working versions from approved inputs.", timeSaved: "Faster documentation prep" },
      { name: "Sales proposals", now: "Teams reuse bland templates.", withAi: "AI helps tailor proposals to customer requirements.", timeSaved: "2 hours to about 20-30 minutes for a first pass" },
      { name: "Internal SOPs", now: "Important process knowledge stays in people's heads.", withAi: "AI helps turn interviews or notes into SOP first passes.", timeSaved: "A usable first pass in under an hour" },
    ],
    insights: ["RFQ speed can unblock sales.", "ISO and quality documentation are repeatable but need sign-off.", "Tacit knowledge is a real operational risk."],
    trustNote: "AI helps prepare, summarize, and structure. Commercial, quality, and compliance sign-off remains with the team.",
    relatedUseCases: ["proposals-and-tenders", "documentation-and-sops"],
    outreachPhase: "Phase 2",
    proofNote: "Use after construction credibility exists.",
  },
  {
    slug: "retail",
    title: "Retail and Wholesale",
    shortName: "Retail",
    metaTitle: "AI Training for Retail Businesses UK",
    metaDescription: "Practical AI training for retail teams that want faster product copy, customer emails, stock planning support, and social content.",
    hero: "Sell more, stock smarter, spend less time on admin.",
    subhero: "AI workflow training for shop owners, ecommerce teams, and retail managers.",
    stat: "Retail work creates constant copy, stock, supplier, and customer communication tasks.",
    audience: "Shop owners, retail managers, ecommerce managers, and marketing leads",
    size: "Retailers with 5-100 employees",
    workflows: [
      { name: "Product descriptions", now: "Teams write descriptions one item at a time.", withAi: "AI helps turn specs into on-brand product copy.", timeSaved: "A batch of descriptions in minutes" },
      { name: "Customer email campaigns", now: "Emails are generic or delayed.", withAi: "AI helps prepare segmented messages from offer and product notes.", timeSaved: "Campaign first pass in minutes" },
      { name: "Stock reordering support", now: "Teams rely on spreadsheets and gut feel.", withAi: "AI helps summarize patterns and flag questions for review.", timeSaved: "Faster planning prep" },
      { name: "Social content", now: "Teams stare at a blank screen.", withAi: "AI turns a product or promo into a week of post ideas.", timeSaved: "A week of content ideas from one brief" },
      { name: "Supplier negotiation prep", now: "Research and notes are gathered manually.", withAi: "AI helps prepare a concise briefing before the call.", timeSaved: "60 minutes to about 15 minutes" },
    ],
    insights: ["High product volume makes copy workflows valuable.", "Stock decisions still need human judgment.", "Small retail teams need repeatable marketing routines, not more tools."],
    trustNote: "AI assists with copy, planning, and reporting. Final pricing, ordering, and promotional decisions remain with the business.",
    relatedUseCases: ["email-and-follow-ups", "research-and-briefing", "client-reporting"],
    outreachPhase: "Phase 3",
    proofNote: "Collect after Phase 1 proof.",
  },
  {
    slug: "hospitality",
    title: "Hospitality and Catering",
    shortName: "Hospitality",
    metaTitle: "AI Training for Hospitality UK",
    metaDescription: "AI training for hotels, restaurants, and hospitality teams that want faster guest replies, menus, reviews, and marketing.",
    hero: "Fill more covers, answer fewer emails, run a tighter ship.",
    subhero: "Hands-on AI training for hospitality teams where admin time directly affects service.",
    stat: "Hospitality teams need practical admin wins that protect guest experience and tone.",
    audience: "Hotel GMs, restaurant owners, operations managers, and events managers",
    size: "Hospitality businesses with 5-100 staff",
    workflows: [
      { name: "Guest enquiry responses", now: "Staff type repetitive booking replies and event answers.", withAi: "AI helps prepare warm replies from booking notes.", timeSaved: "Minutes per enquiry" },
      { name: "Menu descriptions", now: "Teams spend too long wording seasonal updates.", withAi: "AI helps turn ingredient notes into appetising descriptions.", timeSaved: "Hours to minutes for a first pass" },
      { name: "Rota planning support", now: "Managers juggle bookings, events, and staff availability.", withAi: "AI helps structure options and identify clashes.", timeSaved: "Faster planning prep" },
      { name: "Review responses", now: "Reviews are ignored or answered with copy-paste replies.", withAi: "AI helps prepare personal responses for review.", timeSaved: "Under a minute per response" },
      { name: "Marketing emails and offers", now: "Campaigns are rare because daily operations take over.", withAi: "AI helps prepare weekly offers from booking and calendar context.", timeSaved: "Monthly campaign plan in under 30 minutes" },
    ],
    insights: ["Guest tone matters as much as speed.", "Review response consistency is a visible trust signal.", "Booking-driven demand changes make planning support useful."],
    trustNote: "AI helps prepare guest communications and planning material. Managers approve anything customer-facing before it goes live.",
    relatedUseCases: ["email-and-follow-ups", "documentation-and-sops"],
    outreachPhase: "Phase 3",
    proofNote: "Collect after Phase 1 proof.",
  },
  {
    slug: "logistics",
    title: "Transport and Logistics",
    shortName: "Logistics",
    metaTitle: "AI Training for Logistics Companies UK",
    metaDescription: "AI training for logistics teams that want less paperwork, clearer updates, faster reports, and better communication workflows.",
    hero: "Less paperwork, fewer missed deliveries, better margins.",
    subhero: "Practical AI training for the paperwork and communication behind transport and storage.",
    stat: "Logistics work creates heavy admin around updates, compliance, and stakeholder communication.",
    audience: "Fleet managers, warehouse managers, logistics directors, and MDs",
    size: "Logistics businesses with 10-200 employees",
    workflows: [
      { name: "Route and scheduling support", now: "Teams manually juggle delivery requirements and constraints.", withAi: "AI helps structure options and questions for dispatch review.", timeSaved: "Faster planning prep" },
      { name: "Customer delivery updates", now: "Updates depend on manual calls and emails.", withAi: "AI helps prepare clear status updates from tracking notes.", timeSaved: "Minutes per update batch" },
      { name: "Compliance documentation", now: "Driver logs and vehicle-check notes are assembled manually.", withAi: "AI helps turn raw notes into report first passes.", timeSaved: "Hours to minutes for a first pass" },
      { name: "Warehouse pick-list support", now: "Teams work from manual stock checks and spreadsheets.", withAi: "AI helps summarize demand notes and exceptions.", timeSaved: "Faster daily planning" },
      { name: "Supplier and client communications", now: "Stakeholders get individual updates typed from scratch.", withAi: "AI helps prepare professional updates from one source note.", timeSaved: "30-60 minutes to about 5-10 minutes" },
    ],
    insights: ["Stakeholder updates compound across a busy day.", "Compliance first passes still need operational ownership.", "Delivery timing pressure makes clear communication valuable."],
    trustNote: "AI prepares updates and documentation support; operations teams remain accountable for routing, compliance, and dispatch decisions.",
    relatedUseCases: ["email-and-follow-ups", "client-reporting", "documentation-and-sops"],
    outreachPhase: "Phase 3",
    proofNote: "Collect after Phase 1 proof.",
  },
  {
    slug: "healthcare",
    title: "Private Healthcare",
    shortName: "Healthcare",
    metaTitle: "AI Training for Private Healthcare UK",
    metaDescription: "AI training for private healthcare teams focused on patient communication, admin, documentation support, and marketing workflows.",
    hero: "Better patient communication, less admin, safer records.",
    subhero: "AI training for private clinics, dental practices, and veterinary teams with clear clinical boundaries.",
    stat: "Healthcare pages must be especially clear: this is admin and communication support, not clinical decision-making.",
    audience: "Practice managers, dentists, clinic owners, and veterinary practice managers",
    size: "Practices with 5-50 staff",
    workflows: [
      { name: "Patient communication", now: "Teams manually write appointment and follow-up messages.", withAi: "AI helps prepare clear patient messages for review.", timeSaved: "Minutes per message batch" },
      { name: "Clinical note formatting support", now: "Clinicians spend time turning notes into structure.", withAi: "AI helps format dictated notes for clinician review.", timeSaved: "Faster documentation support" },
      { name: "Referral letter support", now: "Letters take 15-20 minutes each.", withAi: "AI helps create a first pass from approved inputs.", timeSaved: "20 minutes to a few minutes for a first pass" },
      { name: "Patient information leaflets", now: "Leaflets become outdated or hard to read.", withAi: "AI helps create clearer first passes at the right reading level.", timeSaved: "Faster update cycle" },
      { name: "Marketing and outreach", now: "Google Business updates and newsletters rarely happen.", withAi: "AI helps prepare monthly updates and social posts.", timeSaved: "Monthly content in about 30 minutes" },
    ],
    insights: ["Clinical boundaries must be explicit.", "Patient clarity and reading level are practical value drivers.", "Admin speed matters most when staff are already stretched."],
    trustNote: "All healthcare AI use cases focus on admin, communication, documentation support, and operations. Do not position AI as a clinical decision-maker.",
    relatedUseCases: ["client-onboarding-and-admin", "email-and-follow-ups", "documentation-and-sops"],
    outreachPhase: "Phase 3",
    proofNote: "Use cautiously and with clear permission.",
  },
  {
    slug: "agriculture",
    title: "Agriculture and Farming",
    shortName: "Agriculture",
    metaTitle: "AI Training for Farming UK",
    metaDescription: "AI training for farms and agri-business teams that want less paperwork, better planning support, and faster communications.",
    hero: "Less paperwork, smarter planning, better margins.",
    subhero: "Practical AI training for the farm-office work that piles up behind the operation.",
    stat: "Agriculture pages should focus on admin and planning support, not high-tech machinery claims.",
    audience: "Farm owners, estate managers, farm office administrators, and agricultural business managers",
    size: "Businesses with 3-50 employees",
    workflows: [
      { name: "Grant and subsidy applications", now: "Applications take days or weeks of form-filling and evidence gathering.", withAi: "AI helps prepare responses and organize evidence from farm data.", timeSaved: "Faster first-pass applications" },
      { name: "Record keeping and compliance", now: "Records live in paper files or clunky spreadsheets.", withAi: "AI helps turn raw notes into cleaner record first passes.", timeSaved: "Less manual formatting" },
      { name: "Supplier and buyer communications", now: "Updates happen by phone and scattered notes.", withAi: "AI helps prepare professional confirmations and follow-ups.", timeSaved: "Minutes per message batch" },
      { name: "Seasonal planning support", now: "Plans rely on experience plus scattered historical notes.", withAi: "AI helps summarize past data, costs, and risks for review.", timeSaved: "Faster planning brief" },
      { name: "Direct-sales marketing", now: "Farm shops and events rely on word of mouth.", withAi: "AI helps prepare posts, newsletters, and event copy.", timeSaved: "Monthly marketing in about 30 minutes" },
    ],
    insights: ["Grant paperwork is a major office burden.", "Seasonality changes the rhythm of admin work.", "Farm-office records often lag behind operational reality."],
    trustNote: "AI supports planning and preparation. Final reporting, scheme submissions, and commercial decisions remain with the farm business.",
    relatedUseCases: ["documentation-and-sops", "research-and-briefing", "email-and-follow-ups"],
    outreachPhase: "Phase 3",
    proofNote: "Collect after Phase 1 proof.",
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    shortName: "Professional Services",
    metaTitle: "AI Training for Professional Services UK",
    metaDescription: "Practical AI training for consultancies, agencies, and advisory firms that want faster proposals, reports, research, and SOPs.",
    hero: "Deliver more, admin less, win better clients.",
    subhero: "AI workflow training for consultancies, agencies, advisors, and people-powered service firms.",
    stat: "Professional services teams often understand AI exists but need repeatable workflows for delivery, reporting, and business development.",
    audience: "Founders, MDs, project managers, and operations managers",
    size: "Consultancies, agencies, and advisory firms with 5-50 staff",
    workflows: [
      { name: "Proposal writing", now: "Teams spend 4-6 hours adapting old decks and case studies.", withAi: "AI helps prepare a tailored proposal from a brief and case-study bank.", timeSaved: "4-6 hours to about 45 minutes for a first pass" },
      { name: "Client reporting", now: "Teams manually pull notes, data, and updates into reports.", withAi: "AI helps turn delivery notes into a clearer report first pass.", timeSaved: "Hours to about 30 minutes for a first pass" },
      { name: "Research and benchmarking", now: "Consultants spend half a day gathering market context.", withAi: "AI helps create a structured research brief for human review.", timeSaved: "Half a day to about 30-60 minutes for a first pass" },
      { name: "Email and client communications", now: "Teams write recurring updates from scratch.", withAi: "AI helps prepare professional, on-tone responses and updates.", timeSaved: "Minutes per message" },
      { name: "Internal documentation", now: "Processes sit in meeting notes and shared drives.", withAi: "AI helps turn notes into SOPs and action plans.", timeSaved: "A first-pass SOP in under an hour" },
    ],
    insights: ["Proposal pressure competes with client delivery.", "Reporting overhead is a margin problem.", "Recruitment shares many of the same people-powered workflow patterns."],
    trustNote: "AI supports preparation, research, reporting, and process capture. Final recommendations, strategic advice, and client commitments remain human-led.",
    relatedUseCases: ["proposals-and-tenders", "client-reporting", "research-and-briefing", "documentation-and-sops"],
    outreachPhase: "Phase 3",
    proofNote: "Cross-link with recruitment where relevant.",
  },
  {
    slug: "agencies",
    title: "Agencies and Consultancies",
    shortName: "Agencies",
    metaTitle: "AI Training for Agencies UK",
    metaDescription: "AI training for agencies that want faster delivery, better proposals, smoother workflows, and less admin.",
    hero: "Deliver more, admin less, win better clients.",
    subhero: "AI workflow training for agencies, consultancies, and advisory firms.",
    stat: "Agencies live or die by delivery speed, proposal quality, and team productivity.",
    audience: "Founders, MDs, project managers, and operations managers",
    size: "Agencies with 5-50 staff",
    workflows: [
      { name: "Proposal writing", now: "Teams spend 4-6 hours adapting old decks and case studies.", withAi: "AI helps prepare a tailored proposal from a brief and case-study bank.", timeSaved: "4-6 hours to about 45 minutes for a first pass" },
      { name: "Client reporting", now: "Teams manually pull notes, data, and updates into reports.", withAi: "AI helps turn delivery notes into a clearer report first pass.", timeSaved: "Hours to about 30 minutes for a first pass" },
      { name: "Research and benchmarking", now: "Consultants spend half a day gathering market context.", withAi: "AI helps create a structured research brief for human review.", timeSaved: "Half a day to about 30-60 minutes for a first pass" },
      { name: "Email and client communications", now: "Teams write recurring updates from scratch.", withAi: "AI helps prepare professional, on-tone responses and updates.", timeSaved: "Minutes per message" },
      { name: "Internal documentation", now: "Processes sit in meeting notes and shared drives.", withAi: "AI helps turn notes into SOPs and action plans.", timeSaved: "A first-pass SOP in under an hour" },
    ],
    insights: ["Proposal pressure competes with client delivery.", "Reporting overhead is a margin problem.", "Team adoption needs practical, not theoretical training."],
    trustNote: "AI supports preparation, research, reporting, and process capture. Final commitments and strategic advice remain with the agency.",
    relatedUseCases: ["proposals-and-tenders", "client-reporting", "research-and-briefing", "email-and-follow-ups"],
    outreachPhase: "Phase 3",
    proofNote: "Cross-link with professional services where relevant.",
  },
];

export type UseCase = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  hero: string;
  problem: string;
  examples: {
    industry: string;
    current: string;
    ai: string;
    review: string;
  }[];
  relatedIndustries: string[];
};

export const useCases: UseCase[] = [
  {
    slug: "proposals-and-tenders",
    title: "Proposals and Tenders",
    metaTitle: "AI Training for Proposals and Tenders",
    metaDescription: "Practical AI workflow training for faster tender responses, proposals, engagement letters, and RFQ first passes.",
    hero: "Turn proposal and tender work into a repeatable AI-assisted workflow.",
    problem: "Proposal work slows teams down because every response needs structure, proof, tone, and approval. AI helps build a faster first pass without removing human sign-off.",
    relatedIndustries: ["construction", "manufacturing", "accounting", "professional-services"],
    examples: [
      { industry: "Construction", current: "Tender responses are assembled from old documents under deadline pressure.", ai: "AI helps structure the response and prepare sections from approved project detail.", review: "Estimators and directors approve before submission." },
      { industry: "Accounting", current: "Engagement letters and proposals are adapted from old templates.", ai: "AI creates a tailored first pass from scope, client notes, and approved wording.", review: "Partners approve scope, fees, and compliance wording." },
      { industry: "Professional Services", current: "Proposals are rebuilt from old decks and case studies.", ai: "AI creates a tailored first pass from the client brief and proof bank.", review: "Account leads approve positioning and commitments." },
      { industry: "Manufacturing", current: "RFQ responses take hours of spec reading and formatting.", ai: "AI summarizes requirements and prepares the quote response structure.", review: "Commercial and technical teams sign off." },
    ],
  },
  {
    slug: "client-reporting",
    title: "Client Reporting",
    metaTitle: "AI Training for Client Reporting",
    metaDescription: "AI training for turning notes, data, and updates into clearer client reports faster.",
    hero: "Create clearer reports from notes and data in a fraction of the time.",
    problem: "Client reporting is often delayed because the real work is scattered across notes, spreadsheets, calls, and updates. AI helps turn those inputs into a structured first pass.",
    relatedIndustries: ["accounting", "recruitment", "property", "logistics", "professional-services"],
    examples: [
      { industry: "Accounting", current: "Management commentary is written manually from figures and notes.", ai: "AI prepares a readable report narrative from reviewed inputs.", review: "Accountants approve technical and client-facing points." },
      { industry: "Recruitment", current: "Market maps and progress updates are assembled by hand.", ai: "AI helps turn search notes into a client update.", review: "Recruiters validate fit, salary notes, and next steps." },
      { industry: "Property", current: "Market appraisal reports take hours of research and formatting.", ai: "AI structures comparable evidence and prepares the report.", review: "Agents approve local context and valuation language." },
    ],
  },
  {
    slug: "email-and-follow-ups",
    title: "Email and Follow-ups",
    metaTitle: "AI Training for Email Follow-ups",
    metaDescription: "Practical AI workflows for faster customer, supplier, candidate, patient, and client follow-ups.",
    hero: "Stop letting follow-ups slip when the team gets busy.",
    problem: "Most teams know follow-up matters but lose time writing similar messages over and over. AI helps prepare timely, on-tone messages from short notes.",
    relatedIndustries: ["property", "recruitment", "retail", "hospitality", "logistics", "healthcare"],
    examples: [
      { industry: "Property", current: "Vendor and applicant follow-ups are delayed after viewings.", ai: "AI prepares tailored updates from CRM notes.", review: "Agents approve before sending." },
      { industry: "Recruitment", current: "Candidate outreach becomes generic at volume.", ai: "AI prepares messages that reference relevant experience.", review: "Recruiters approve fit and tone." },
      { industry: "Healthcare", current: "Patient messages are typed manually by admin teams.", ai: "AI prepares clear pre- and post-appointment messages.", review: "Practice staff approve anything patient-facing." },
    ],
  },
  {
    slug: "documentation-and-sops",
    title: "Documentation and SOPs",
    metaTitle: "AI Training for SOPs and Documentation",
    metaDescription: "AI training for turning notes, records, and process knowledge into usable SOPs and documentation.",
    hero: "Turn the work stuck in people's heads into usable documentation.",
    problem: "Documentation gets delayed because the team is busy doing the work. AI helps turn notes, interviews, and records into structured first passes that people can check.",
    relatedIndustries: ["manufacturing", "construction", "healthcare", "agriculture", "logistics", "professional-services"],
    examples: [
      { industry: "Manufacturing", current: "Process knowledge stays with experienced staff.", ai: "AI turns interview notes into SOP first passes.", review: "Ops and quality teams approve final procedures." },
      { industry: "Construction", current: "RAMS and site documents are adapted from old files.", ai: "AI prepares a project-specific version from known details.", review: "PMs and directors approve before use." },
      { industry: "Agriculture", current: "Records are scattered across paper notes and spreadsheets.", ai: "AI structures those notes into cleaner records.", review: "Farm managers confirm accuracy before submission." },
    ],
  },
  {
    slug: "research-and-briefing",
    title: "Research and Briefing",
    metaTitle: "AI Training for Research and Briefing",
    metaDescription: "AI training for faster research summaries, market briefs, supplier prep, and policy notes.",
    hero: "Compress research-heavy admin into faster first-pass briefings.",
    problem: "Research tasks slow teams down when the output needs to be clear, structured, and useful. AI helps create a first-pass brief that people can verify and refine.",
    relatedIndustries: ["legal", "accounting", "property", "retail", "professional-services", "recruitment"],
    examples: [
      { industry: "Legal", current: "Internal research notes take hours to structure.", ai: "AI helps create a non-final summary for qualified review.", review: "Lawyers verify sources and conclusions." },
      { industry: "Retail", current: "Supplier prep is manual and scattered.", ai: "AI summarizes pricing and negotiation notes into a briefing.", review: "Managers choose the commercial approach." },
      { industry: "Professional Services", current: "Competitor and market research takes half a day.", ai: "AI creates a structured first-pass briefing.", review: "Consultants validate and add judgment." },
    ],
  },
  {
    slug: "client-onboarding-and-admin",
    title: "Client Onboarding and Admin",
    metaTitle: "AI Training for Client Onboarding and Admin",
    metaDescription: "AI training for onboarding packs, intake forms, appointment admin, and repetitive setup workflows.",
    hero: "Make onboarding and admin feel less like a bottleneck.",
    problem: "Onboarding work is repetitive but high-risk when details are missed. AI helps create checklists, prepare messages, and organize missing information for human approval.",
    relatedIndustries: ["accounting", "legal", "healthcare", "recruitment", "professional-services"],
    examples: [
      { industry: "Accounting", current: "Onboarding packs and KYC chasers are built manually.", ai: "AI prepares checklists and missing-information emails.", review: "Practice staff approve before sending." },
      { industry: "Legal", current: "Matter opening creates admin delays.", ai: "AI prepares intake summaries and follow-up questions.", review: "Fee earners and practice staff approve." },
      { industry: "Healthcare", current: "Appointment admin creates repeated patient messages.", ai: "AI prepares admin follow-ups and preparation notes.", review: "Practice staff approve all patient-facing messages." },
    ],
  },
];

export const priorityIndustries = industries.filter((industry) => industry.outreachPhase === "Phase 1");

export const postLaunchArticles = [
  "How Construction Companies Are Using AI in 2026 - 5 Real Examples",
  "AI for Accountants: 5 Tasks You Can Hand to AI This Week",
  "Estate Agents and AI: Better Listings, Faster Follow-Ups",
  "AI for Retail: How Small Shops Are Saving Time Each Week",
  "AI for Hotels and Restaurants: Cut Admin, Keep the Personal Touch",
  "AI for Logistics: Less Paperwork, Fewer Missed Deliveries",
  "AI for Manufacturers: Start With the Office, Not the Factory Floor",
  "AI for Small Law Firms: Better Workflow, Less Admin",
  "AI for Recruitment Agencies: Source, Screen, Place - Faster",
  "AI for Private Healthcare: Better Patient Communication, Less Admin",
  "AI for Farming: The Office Work AI Can Actually Help With",
  "AI for Consultancies and Agencies: Win Proposals, Deliver Faster, Admin Less",
];

export function getIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}

export function getUseCase(slug: string) {
  return useCases.find((useCase) => useCase.slug === slug);
}
