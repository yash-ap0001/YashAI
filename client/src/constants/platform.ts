import type { LucideIcon } from 'lucide-react';
import {
  Bot, AudioWaveform, Search, Server,
  Landmark, HeartPulse, ShoppingBag, GraduationCap, Building2,
  Globe2, ShieldCheck, EyeOff, KeyRound, ScrollText, HardDrive,
} from 'lucide-react';

export type ModuleStatus = 'In development' | 'Roadmap';

export type PlatformModule = {
  id: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  capabilities: string[];
  status: ModuleStatus;
  icon: LucideIcon;
};

export const modules: PlatformModule[] = [
  {
    id: 'agents',
    name: 'Yash Agents',
    category: 'Customer & operations agents',
    headline: 'AI agents that resolve, not just reply.',
    description:
      'Autonomous agents that handle customer conversations end to end across phone, messaging and web chat: checking orders, updating records and escalating to people when it matters.',
    capabilities: ['Voice, messaging and web in one agent', 'Acts inside your CRM and ticketing tools', 'Human hand-off with full context'],
    status: 'In development',
    icon: Bot,
  },
  {
    id: 'voice',
    name: 'Yash Voice',
    category: 'Real-time voice infrastructure',
    headline: 'Speech AI for every language your customers speak.',
    description:
      'Streaming speech recognition, synthesis and voice agents that handle accents and callers who switch languages mid-sentence, available as an API for developers.',
    capabilities: ['Low-latency streaming APIs', 'Multilingual and code-switched speech', 'Telephony and SIP integration'],
    status: 'In development',
    icon: AudioWaveform,
  },
  {
    id: 'knowledge',
    name: 'Yash Knowledge',
    category: 'Enterprise search & document AI',
    headline: 'Answers from everything your company knows.',
    description:
      'Search and reason across policies, contracts, tickets and drives. Every answer cites its source and respects existing access permissions.',
    capabilities: ['Connectors for drives, email and wikis', 'Permission-aware retrieval', 'Citations on every answer'],
    status: 'In development',
    icon: Search,
  },
  {
    id: 'sovereign',
    name: 'Yash Sovereign',
    category: 'Private AI infrastructure',
    headline: 'Your models, your data, your data centre.',
    description:
      'Run open-weight language and speech models in the region you choose or inside your own premises, with fine-tuning, evaluation and governance built in.',
    capabilities: ['On-premise and in-region deployment', 'Fine-tuning on your own data', 'Model evaluation and audit trails'],
    status: 'Roadmap',
    icon: Server,
  },
];

export type Industry = { name: string; icon: LucideIcon; uses: string[] };

export const industries: Industry[] = [
  { name: 'Financial services', icon: Landmark, uses: ['Collections and onboarding calls', 'Policy search for branch and support staff', 'Audit-ready agent logs'] },
  { name: 'Healthcare & life sciences', icon: HeartPulse, uses: ['Appointment and follow-up agents', 'Search across SOPs and product dossiers', 'On-premise AI for sensitive records'] },
  { name: 'Retail & e-commerce', icon: ShoppingBag, uses: ['Order and returns agents on every channel', 'Store-staff knowledge assistant', 'Multilingual customer support'] },
  { name: 'Education', icon: GraduationCap, uses: ['Admissions and enquiry agents', 'Tutoring assistants grounded in course material', 'Staff policy search'] },
  { name: 'Public sector', icon: Building2, uses: ['Citizen helplines in many languages', 'Private deployment for sensitive data', 'Programme information assistants'] },
];

export type TrustItem = { title: string; body: string; icon: LucideIcon };

export const trust: TrustItem[] = [
  { title: 'Data residency by region', body: 'Choose where data is processed and stored, or keep it entirely on your own premises.', icon: Globe2 },
  { title: 'Privacy by design', body: 'Built around the principles of GDPR and India\'s DPDP Act: consent, purpose limitation and deletion.', icon: ShieldCheck },
  { title: 'No training on your data', body: 'Customer data is never used to train models for anyone else.', icon: EyeOff },
  { title: 'Access control', body: 'Role-based access and single sign-on, with answers that respect existing document permissions.', icon: KeyRound },
  { title: 'Audit trails', body: 'Every agent action and model response is logged and reviewable.', icon: ScrollText },
  { title: 'Deploy anywhere', body: 'Our managed cloud, your private cloud, or fully air-gapped on your premises.', icon: HardDrive },
];
