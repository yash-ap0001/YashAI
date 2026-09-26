import type { LucideIcon } from 'lucide-react';
import {
  Landmark, Umbrella, HeartPulse, Pill, ShoppingBag, Factory, Truck, RadioTower,
  Home, GraduationCap, Plane, Scale, Building2, Zap, Cpu, Users, Car, AppWindow, Microscope, CandlestickChart,
} from 'lucide-react';

export type UseCase = { title: string; example: string };
export type ExampleRun = { agent: string; task: string; steps: string[]; outcome: string };
export type Industry = {
  id: string;
  name: string;
  icon: LucideIcon;
  headline: string;
  systems: string[];
  useCases: UseCase[];
  run: ExampleRun;
};

// Example use cases and runs per domain. All runs are illustrative sample data.
export const industries: Industry[] = [
  {
    id: 'banking',
    name: 'Banking & financial services',
    icon: Landmark,
    headline: 'Faster onboarding, collections and servicing, with every step on the record.',
    systems: ['Core banking', 'Salesforce FSC', 'KYC providers', 'Temenos'],
    useCases: [
      { title: 'KYC & onboarding', example: 'Collects documents, checks them against KYC providers and opens the account, or flags gaps for review.' },
      { title: 'Collections', example: 'Calls and messages overdue customers, offers approved payment plans and logs promises-to-pay.' },
      { title: 'Dispute handling', example: 'Gathers transaction evidence, applies card-scheme rules and drafts the chargeback response.' },
    ],
    run: {
      agent: 'Collections agent',
      task: 'Loan #88-2140 is 35 days overdue ($1,240).',
      steps: ['Pulls repayment history and hardship flags', 'Calls customer and offers a 3-month plan within policy', 'Customer accepts; plan created in core banking', 'Written confirmation sent and case closed'],
      outcome: 'Plan agreed in one call · no human time needed',
    },
  },
  {
    id: 'capital-markets',
    name: 'Capital markets & investing',
    icon: CandlestickChart,
    headline: 'Research, monitoring and reporting done before the market opens.',
    systems: ['Market data feeds', 'Exchange filings', 'Portfolio systems', 'CRM'],
    useCases: [
      { title: 'Equity research support', example: 'Reads earnings calls, filings and news overnight and drafts a sourced summary for each covered stock.' },
      { title: 'Portfolio monitoring', example: 'Watches holdings for price moves, rating changes and news, and alerts the portfolio manager with context.' },
      { title: 'Compliance & client reporting', example: 'Checks trades against restricted lists and mandates, and drafts client portfolio reports for review.' },
    ],
    run: {
      agent: 'Research support agent',
      task: 'A company in the portfolio reported quarterly results overnight.',
      steps: ['Reads the results filing and earnings-call transcript', 'Compares revenue and margins with the last 4 quarters and guidance', 'Flags a margin drop and a change in outlook, with page references', 'Posts a sourced brief to the portfolio manager before market open'],
      outcome: 'Brief ready at 8:30 am · investment decisions stay with the PM',
    },
  },
  {
    id: 'insurance',
    name: 'Insurance',
    icon: Umbrella,
    headline: 'Claims triaged in minutes, not days.',
    systems: ['Guidewire', 'Duck Creek', 'Document stores', 'Email'],
    useCases: [
      { title: 'First notice of loss', example: 'Takes the claim by phone or chat, collects photos and policy details, and opens the claim file.' },
      { title: 'Claims triage', example: 'Checks coverage, scores severity and fraud signals, and routes to the right adjuster.' },
      { title: 'Underwriting intake', example: 'Reads broker submissions, extracts risk data and pre-fills the underwriting workbench.' },
    ],
    run: {
      agent: 'Claims intake agent',
      task: 'Customer reports water damage in kitchen, policy HM-55120.',
      steps: ['Verifies policy is active and covers escape of water', 'Collects photos and plumber invoice via SMS link', 'Estimates severity: moderate, no fraud signals', 'Opens claim and assigns desk adjuster'],
      outcome: 'Claim opened with full file in 6 minutes',
    },
  },
  {
    id: 'healthcare',
    name: 'Healthcare providers',
    icon: HeartPulse,
    headline: 'Less time on phones and forms, more time with patients.',
    systems: ['Epic', 'Cerner', 'athenahealth', 'Payer portals'],
    useCases: [
      { title: 'Patient access', example: 'Books, moves and confirms appointments by phone and text, and fills waitlist gaps.' },
      { title: 'Prior authorisation', example: 'Assembles clinical notes, submits to the payer portal and chases the decision.' },
      { title: 'Denial management', example: 'Reads denial codes, drafts appeals with evidence and tracks every claim to payment.' },
    ],
    run: {
      agent: 'Patient access agent',
      task: 'Patient calls to move Thursday’s cardiology follow-up.',
      steps: ['Verifies identity with date of birth and MRN', 'Finds next open slot with the same cardiologist', 'Reschedules in the EHR and sends prep instructions', 'Offers the freed Thursday slot to the waitlist'],
      outcome: 'Rescheduled and slot refilled · 2 min call',
    },
  },
  {
    id: 'pharma',
    name: 'Pharma & life sciences',
    icon: Pill,
    headline: 'Compliant answers and documents, grounded in approved content.',
    systems: ['Veeva', 'Safety databases', 'SharePoint', 'CRM'],
    useCases: [
      { title: 'Medical information', example: 'Answers HCP questions only from approved documents, with references, and escalates off-label queries.' },
      { title: 'Pharmacovigilance intake', example: 'Spots adverse-event reports in emails and calls, and pre-fills the case for the safety team.' },
      { title: 'Field-force enablement', example: 'Prepares reps with account briefs and approved talking points before each visit.' },
    ],
    run: {
      agent: 'Medical information agent',
      task: 'Doctor asks about dosing in patients with renal impairment.',
      steps: ['Searches approved label and dosing guidance only', 'Drafts answer with section references', 'Detects no off-label request; compliance check passed', 'Sends response and logs the enquiry'],
      outcome: 'Referenced answer sent · fully audit-logged',
    },
  },
  {
    id: 'retail',
    name: 'Retail & e-commerce',
    icon: ShoppingBag,
    headline: 'Every order question resolved on the channel your customer chose.',
    systems: ['Shopify', 'Magento', 'Zendesk', 'Stripe'],
    useCases: [
      { title: 'Order support', example: 'Tracks orders, changes addresses, processes returns and issues refunds within policy.' },
      { title: 'Product advice', example: 'Recommends products from your live catalogue and stock, and builds the basket.' },
      { title: 'Merchandising ops', example: 'Writes product listings, fixes catalogue errors and updates prices on schedule.' },
    ],
    run: {
      agent: 'Order support agent',
      task: '“Can I change my delivery address? The order hasn’t shipped.”',
      steps: ['Finds the order and confirms it is still unfulfilled', 'Validates the new address', 'Updates shipping address in the store', 'Confirms by email with the new delivery date'],
      outcome: 'Resolved in 38 seconds',
    },
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: Factory,
    headline: 'Agents on the shop floor’s paperwork, so engineers stay on the line.',
    systems: ['SAP', 'MES', 'CMMS', 'Supplier portals'],
    useCases: [
      { title: 'Maintenance work orders', example: 'Turns sensor alerts and operator notes into prioritised work orders with the right parts.' },
      { title: 'Supplier management', example: 'Chases late POs, confirms delivery dates and flags supply risk to planners.' },
      { title: 'Quality documentation', example: 'Drafts non-conformance reports and 8D investigations from inspection data.' },
    ],
    run: {
      agent: 'Maintenance agent',
      task: 'Vibration alert on Press #4, bearing temperature rising.',
      steps: ['Checks maintenance history and similar past failures', 'Confirms spare bearing is in stock', 'Creates a priority work order for the next shift', 'Notifies the line supervisor'],
      outcome: 'Work order raised before breakdown',
    },
  },
  {
    id: 'logistics',
    name: 'Logistics & supply chain',
    icon: Truck,
    headline: 'Exceptions handled before customers notice them.',
    systems: ['TMS', 'WMS', 'Carrier APIs', 'EDI'],
    useCases: [
      { title: 'Shipment exceptions', example: 'Detects delays, rebooks carriers and tells customers the new ETA proactively.' },
      { title: 'Freight audit', example: 'Matches carrier invoices to rates and deliveries, and disputes overcharges.' },
      { title: 'Customer updates', example: 'Answers “where is my shipment?” across email, chat and phone, 24/7.' },
    ],
    run: {
      agent: 'Exceptions agent',
      task: 'Container MSKU-77301 missed its rail connection.',
      steps: ['Checks next available rail slots and truck options', 'Books truck to keep the delivery date', 'Cost within approved limit; no approval needed', 'Updates TMS and emails the customer the unchanged ETA'],
      outcome: 'Delivery date protected',
    },
  },
  {
    id: 'automotive',
    name: 'Automotive',
    icon: Car,
    headline: 'Dealers, carmakers and fleets that never miss a customer or a claim.',
    systems: ['Dealer management (DMS)', 'CDK', 'Reynolds & Reynolds', 'OEM warranty portals'],
    useCases: [
      { title: 'Dealership service desk', example: 'Answers service calls 24/7, books slots in the DMS, sends reminders and runs recall outreach.' },
      { title: 'Sales lead response', example: 'Replies to website and marketplace leads in seconds, books test drives and pre-qualifies finance.' },
      { title: 'Warranty & fleet operations', example: 'Prepares warranty claims with repair-order evidence, and schedules fleet maintenance from telematics alerts.' },
    ],
    run: {
      agent: 'Service desk agent',
      task: 'Customer calls at 8:40 pm: “Check-engine light is on, can I bring it in?”',
      steps: ['Looks up the vehicle by number plate and service history', 'Finds an open recall for the same model and bundles it in', 'Books Thursday 8:00 am with a courtesy car', 'Sends confirmation and drop-off instructions by SMS'],
      outcome: 'Service and recall booked after hours',
    },
  },
  {
    id: 'telecom',
    name: 'Telecom',
    icon: RadioTower,
    headline: 'Support and retention at the scale of millions of subscribers.',
    systems: ['BSS/OSS', 'CRM', 'Network monitoring', 'IVR'],
    useCases: [
      { title: 'Technical support', example: 'Runs line diagnostics, resets equipment remotely and books engineers only when needed.' },
      { title: 'Plan changes & billing', example: 'Explains bills, applies eligible credits and moves customers to better-fit plans.' },
      { title: 'Churn prevention', example: 'Reaches at-risk customers with approved retention offers before they call to cancel.' },
    ],
    run: {
      agent: 'Tech support agent',
      task: '“My home internet keeps dropping every evening.”',
      steps: ['Runs line diagnostics: signal noise at peak hours', 'Pushes router firmware update and channel change', 'Schedules a 24-hour monitoring check', 'Follows up next day: stable, ticket closed'],
      outcome: 'Fixed without an engineer visit',
    },
  },
  {
    id: 'real-estate',
    name: 'Real estate & property',
    icon: Home,
    headline: 'Leads answered instantly, tenants looked after around the clock.',
    systems: ['CRM', 'Property management', 'Calendars', 'Listing portals'],
    useCases: [
      { title: 'Lead qualification', example: 'Answers listing enquiries, qualifies budget and timing, and books viewings.' },
      { title: 'Tenant requests', example: 'Logs maintenance requests with photos, dispatches vendors and updates tenants.' },
      { title: 'Lease administration', example: 'Extracts key dates from leases and sends renewal and rent-review reminders.' },
    ],
    run: {
      agent: 'Leasing agent',
      task: 'Enquiry at 11 pm about a 2-bedroom apartment.',
      steps: ['Answers questions on price, pets and parking', 'Qualifies move-in date and budget', 'Books a Saturday viewing with the leasing manager', 'Sends directions and a reminder'],
      outcome: 'Viewing booked while the office was closed',
    },
  },
  {
    id: 'education',
    name: 'Education',
    icon: GraduationCap,
    headline: 'Every student and applicant gets a fast, accurate answer.',
    systems: ['SIS', 'LMS', 'CRM', 'Email'],
    useCases: [
      { title: 'Admissions', example: 'Answers applicant questions, checks documents and nudges incomplete applications.' },
      { title: 'Student services', example: 'Handles fees, timetables and policy questions, grounded in official documents.' },
      { title: 'Tutoring support', example: 'Explains course material step by step using only the course’s own content.' },
    ],
    run: {
      agent: 'Admissions agent',
      task: 'Applicant’s file is missing an English-language certificate.',
      steps: ['Detects the missing document 10 days before deadline', 'Emails and texts the applicant with an upload link', 'Receives and validates the certificate', 'Marks the application complete for review'],
      outcome: 'Application completed before the deadline',
    },
  },
  {
    id: 'travel',
    name: 'Travel & hospitality',
    icon: Plane,
    headline: 'Rebookings and guest requests handled instantly, even at peak.',
    systems: ['PMS', 'GDS', 'Booking engines', 'Messaging'],
    useCases: [
      { title: 'Disruption handling', example: 'Rebooks travellers on cancelled flights and arranges hotels within fare rules.' },
      { title: 'Guest services', example: 'Takes room-service, housekeeping and late check-out requests by chat or phone.' },
      { title: 'Reservations', example: 'Books, changes and upsells stays and packages in multiple languages.' },
    ],
    run: {
      agent: 'Disruption agent',
      task: 'Flight cancelled; 140 passengers need rebooking.',
      steps: ['Ranks passengers by connection risk and status', 'Rebooks each on the best available alternative', 'Books hotels for overnight cases within policy', 'Sends new itineraries by app and SMS'],
      outcome: '140 passengers rebooked in 9 minutes',
    },
  },
  {
    id: 'legal',
    name: 'Legal & professional services',
    icon: Scale,
    headline: 'First drafts and reviews done, so experts focus on judgement.',
    systems: ['DMS', 'Contract repositories', 'Time & billing', 'Email'],
    useCases: [
      { title: 'Contract review', example: 'Compares contracts to your playbook and marks non-standard clauses with suggested edits.' },
      { title: 'Client intake', example: 'Runs conflict checks, gathers documents and opens the matter.' },
      { title: 'Research & drafting', example: 'Prepares first drafts and research memos with citations for lawyer review.' },
    ],
    run: {
      agent: 'Contract review agent',
      task: 'Review supplier MSA against the company playbook.',
      steps: ['Extracts 42 clauses and compares to playbook', 'Flags uncapped liability and 90-day payment terms', 'Drafts redlines with fallback positions', 'Sends to counsel for approval'],
      outcome: 'First-pass review ready for counsel',
    },
  },
  {
    id: 'public-sector',
    name: 'Public sector',
    icon: Building2,
    headline: 'Citizen services that are always open, in every language.',
    systems: ['Case management', 'Identity services', 'Portals', 'Contact centre'],
    useCases: [
      { title: 'Citizen helplines', example: 'Answers questions about services, eligibility and status in many languages.' },
      { title: 'Application processing', example: 'Checks applications for completeness and routes them to caseworkers.' },
      { title: 'Records requests', example: 'Finds, redacts and prepares documents for information requests.' },
    ],
    run: {
      agent: 'Citizen services agent',
      task: 'Resident asks about the status of a building permit.',
      steps: ['Verifies identity via the citizen portal', 'Looks up permit application in case management', 'Explains the pending step: fire-safety review', 'Sets up a notification for when it is approved'],
      outcome: 'Answered without a caseworker call-back',
    },
  },
  {
    id: 'energy',
    name: 'Energy & utilities',
    icon: Zap,
    headline: 'Outages, billing and field work coordinated automatically.',
    systems: ['CIS', 'OMS', 'Field service', 'Smart-meter data'],
    useCases: [
      { title: 'Outage communication', example: 'Tells affected customers about outages and restoration times before they call.' },
      { title: 'Billing enquiries', example: 'Explains high bills using meter data and sets up payment arrangements.' },
      { title: 'Field scheduling', example: 'Books meter installs and site visits, and re-plans routes when jobs change.' },
    ],
    run: {
      agent: 'Billing agent',
      task: '“Why is my bill double this month?”',
      steps: ['Pulls smart-meter usage: heating spike in cold week', 'Confirms tariff and readings are correct', 'Explains usage with a daily chart', 'Offers and sets up an approved payment plan'],
      outcome: 'Complaint avoided · plan in place',
    },
  },
  {
    id: 'saas',
    name: 'SaaS & technology',
    icon: Cpu,
    headline: 'Support, engineering and revenue teams that scale without headcount.',
    systems: ['Intercom', 'GitHub', 'Jira', 'HubSpot'],
    useCases: [
      { title: 'Tier-1 & tier-2 support', example: 'Answers from docs, reproduces bugs from logs and files well-formed tickets.' },
      { title: 'Engineering productivity', example: 'Writes tests, reviews pull requests and handles dependency upgrades.' },
      { title: 'Revenue operations', example: 'Qualifies trials, enriches CRM records and flags expansion signals.' },
    ],
    run: {
      agent: 'Support engineer agent',
      task: '“Webhook deliveries failing since this morning.”',
      steps: ['Checks the account’s webhook logs: 401 errors', 'Finds the signing secret was rotated at 08:12', 'Guides the customer to update the secret', 'Confirms deliveries succeed and closes ticket'],
      outcome: 'Resolved without engineering escalation',
    },
  },
  {
    id: 'software-products',
    name: 'Software products & apps',
    icon: AppWindow,
    headline: 'Put an agent inside your own product, for your users.',
    systems: ['Your REST/GraphQL API', 'React & mobile SDKs', 'Webhooks', 'Product docs'],
    useCases: [
      { title: 'In-app copilot that acts', example: 'Users type “move all overdue tasks to next sprint” and the agent does it through your own API.' },
      { title: 'Guided onboarding', example: 'Sets up a new account with the user: imports data, configures settings and explains each step.' },
      { title: 'Agent APIs for your customers', example: 'Exposes your product’s actions to AI agents safely, with scopes, rate limits and audit logs.' },
    ],
    run: {
      agent: 'In-app agent (project-management app)',
      task: 'User types: “Reassign Maria’s open tickets to Dev team B, she’s on leave.”',
      steps: ['Checks the user has admin rights for this workspace', 'Finds 14 open tickets assigned to Maria', 'Shows a preview of the reassignment for confirmation', 'Reassigns via the product API and notifies both teams'],
      outcome: '14 tickets moved in one sentence',
    },
  },
  {
    id: 'research',
    name: 'Research & analysis',
    icon: Microscope,
    headline: 'Days of research in an hour, with every claim traceable.',
    systems: ['Web & news', 'Research databases', 'Internal documents', 'Spreadsheets'],
    useCases: [
      { title: 'Market & competitor research', example: 'Tracks competitors’ pricing, launches and hiring, and delivers a weekly brief with sources.' },
      { title: 'Scientific & patent literature', example: 'Searches papers and patents, summarises findings and maps who is working on what.' },
      { title: 'Due diligence', example: 'Builds company profiles from filings, news and data rooms, and flags risks for analysts to verify.' },
    ],
    run: {
      agent: 'Research agent',
      task: '“Size the market for EV charging software in Southeast Asia.”',
      steps: ['Plans the questions: players, pricing, adoption, regulation', 'Reads 60+ sources: reports, filings, news and government data', 'Cross-checks figures and marks estimates versus reported numbers', 'Writes a 6-page brief with a sourced table and open questions'],
      outcome: 'Sourced brief ready for analyst review',
    },
  },
  {
    id: 'hr',
    name: 'HR & staffing',
    icon: Users,
    headline: 'Hiring and employee questions handled from first contact to day one.',
    systems: ['Workday', 'Greenhouse', 'BambooHR', 'Slack'],
    useCases: [
      { title: 'Candidate screening', example: 'Screens applicants against the role, runs first-round questions and books interviews.' },
      { title: 'Onboarding', example: 'Collects documents, provisions accounts and guides new hires through their first week.' },
      { title: 'Employee help desk', example: 'Answers leave, payroll and policy questions from HR documents, in Slack or Teams.' },
    ],
    run: {
      agent: 'Recruiting agent',
      task: '310 applications for a backend engineer role.',
      steps: ['Screens CVs against must-have skills', 'Sends a short technical questionnaire to the top 40', 'Scores answers and shortlists 12', 'Books first interviews across three panel calendars'],
      outcome: 'Shortlist and interviews ready in 2 days',
    },
  },
];
