import type { LucideIcon } from 'lucide-react';
import {
  Headset, Target, PhoneCall, Receipt, UserSearch, ShieldAlert, FileHeart, Code2,
  Workflow, Plug, ShieldCheck, FlaskConical, Activity, Brain,
} from 'lucide-react';

export type Agent = {
  id: string;
  name: string;
  role: string;
  icon: LucideIcon;
  summary: string;
  tasks: string[];
  tools: string[];
  pilot: string;
};

// The digital workforce we design, build and run for customers.
export const agents: Agent[] = [
  {
    id: 'aria',
    name: 'Aria',
    role: 'Customer Support Agent',
    icon: Headset,
    summary: 'Resolves tickets end to end, not just answers them.',
    tasks: ['Refunds, returns and order changes', 'Account and billing questions', 'Escalates with full context'],
    tools: ['Zendesk', 'Freshdesk', 'Shopify', 'Stripe'],
    pilot: 'Resolve one ticket category autonomously',
  },
  {
    id: 'rex',
    name: 'Rex',
    role: 'Sales Development Agent',
    icon: Target,
    summary: 'Researches accounts and books qualified meetings.',
    tasks: ['Account and contact research', 'Personalised multi-step outreach', 'Qualifies replies and books meetings'],
    tools: ['HubSpot', 'Salesforce', 'Gmail', 'LinkedIn'],
    pilot: 'Run outbound for one segment',
  },
  {
    id: 'vera',
    name: 'Vera',
    role: 'Voice Agent',
    icon: PhoneCall,
    summary: 'Answers and makes calls in many languages, 24/7.',
    tasks: ['Inbound calls and appointment booking', 'Reminders and follow-up calls', 'Hands off live to your team'],
    tools: ['Twilio', 'SIP', 'Google Calendar', 'Your CRM'],
    pilot: 'Take over after-hours calls',
  },
  {
    id: 'finn',
    name: 'Finn',
    role: 'Finance Operations Agent',
    icon: Receipt,
    summary: 'Processes invoices and chases payments.',
    tasks: ['Invoice capture and 3-way matching', 'Exception routing to approvers', 'Polite, persistent collections follow-up'],
    tools: ['SAP', 'NetSuite', 'QuickBooks', 'Xero'],
    pilot: 'Automate one vendor invoice flow',
  },
  {
    id: 'nova',
    name: 'Nova',
    role: 'Recruiting Agent',
    icon: UserSearch,
    summary: 'Screens candidates and fills interview calendars.',
    tasks: ['Screens CVs against the role', 'Runs first-round screening questions', 'Schedules interviews across panels'],
    tools: ['Greenhouse', 'Lever', 'Workday', 'Outlook'],
    pilot: 'Screen applicants for one open role',
  },
  {
    id: 'sentinel',
    name: 'Sentinel',
    role: 'Security Operations Agent',
    icon: ShieldAlert,
    summary: 'Triages alerts so analysts see only what matters.',
    tasks: ['Enriches and de-duplicates alerts', 'Investigates with your playbooks', 'Opens tickets with evidence attached'],
    tools: ['Splunk', 'Microsoft Sentinel', 'CrowdStrike', 'Jira'],
    pilot: 'Triage one alert source',
  },
  {
    id: 'cara',
    name: 'Cara',
    role: 'Claims & Revenue Cycle Agent',
    icon: FileHeart,
    summary: 'Works denied claims and prior authorisations.',
    tasks: ['Reads denial reasons and payer rules', 'Drafts appeals with evidence', 'Tracks every claim to resolution'],
    tools: ['Epic', 'Athenahealth', 'Payer portals', 'Excel'],
    pilot: 'Work one denial category',
  },
  {
    id: 'dev',
    name: 'Dev',
    role: 'Engineering Agent',
    icon: Code2,
    summary: 'Writes tests, reviews code and runs migrations.',
    tasks: ['Generates and maintains test suites', 'First-pass code review on every PR', 'Framework and dependency upgrades'],
    tools: ['GitHub', 'GitLab', 'Jira', 'CI/CD'],
    pilot: 'Raise test coverage on one service',
  },
];

export type Capability = { title: string; body: string; icon: LucideIcon };

// What sits underneath every agent.
export const capabilities: Capability[] = [
  { title: 'Orchestration', body: 'Multi-step planning, tool use and hand-offs between agents, with retries and time-outs built in.', icon: Workflow },
  { title: 'Integrations', body: 'APIs, databases, webhooks and MCP. Browser automation for legacy systems with no API.', icon: Plug },
  { title: 'Guardrails & approvals', body: 'Policy checks before every action. Humans approve anything above the limits you set.', icon: ShieldCheck },
  { title: 'Evaluations', body: 'Every agent ships with a test suite of real cases, and is re-scored before every release.', icon: FlaskConical },
  { title: 'Observability', body: 'Trace every step, tool call, cost and latency. Replay any run and see why the agent did what it did.', icon: Activity },
  { title: 'Memory & knowledge', body: 'Permission-aware retrieval over your documents and systems, with sources on every answer.', icon: Brain },
];

export type Step = { week: string; title: string; body: string };

// How a pilot runs.
export const steps: Step[] = [
  { week: 'Week 0', title: 'Workflow workshop', body: 'We map your processes and pick one workflow with a clear KPI, such as resolution rate or hours saved.' },
  { week: 'Week 1–2', title: 'Build & integrate', body: 'Our engineers build the agent against your real systems in a sandbox, with guardrails and an evaluation suite.' },
  { week: 'Week 3', title: 'Shadow mode', body: 'The agent works alongside your team. It drafts every action; people approve. We measure against the KPI.' },
  { week: 'Week 4', title: 'Go live', body: 'The agent acts on its own within the limits you set. Everything above the limits still goes to a human.' },
  { week: 'Ongoing', title: 'Measure & expand', body: 'Weekly reports on the KPI. Once it is proven, we extend the agent to the next workflow.' },
];

export type Plan = { name: string; tagline: string; price: string; points: string[]; featured?: boolean };

export const plans: Plan[] = [
  {
    name: 'Pilot',
    tagline: 'Prove it on one workflow',
    price: 'Fixed fee · 4 weeks',
    points: ['One agent, one workflow', 'Success criteria agreed in writing up front', 'Shadow mode before anything goes live', 'Full handover of results and findings'],
  },
  {
    name: 'Production',
    tagline: 'Run agents at scale',
    price: 'Platform fee + per task',
    points: ['Agents live on your channels and systems', 'Guardrails, approvals and audit trail', 'Monitoring, evaluations and tuning', 'Pay more only when agents do more work'],
    featured: true,
  },
  {
    name: 'Managed workforce',
    tagline: 'We run it, you own the outcome',
    price: 'Monthly retainer',
    points: ['A dedicated forward-deployed engineer', 'New agents and workflows each quarter', 'Weekly KPI reporting', 'Private or on-premise deployment options'],
  },
];

export type Compare = { label: string; diy: string; si: string; saas: string; us: string };

export const comparison: Compare[] = [
  { label: 'Time to first live agent', diy: '6–12 months', si: '3–9 months', saas: 'Weeks', us: 'About 4 weeks' },
  { label: 'Fits your exact workflow', diy: 'Yes', si: 'Yes', saas: 'Partly', us: 'Yes' },
  { label: 'Works with legacy systems', diy: 'If you build it', si: 'Yes', saas: 'Rarely', us: 'Yes' },
  { label: 'Choice of model & deployment', diy: 'Yes', si: 'Varies', saas: 'No', us: 'Yes' },
  { label: 'Cost', diy: 'Team salaries', si: 'High', saas: 'Per seat', us: 'Pay per task' },
];
