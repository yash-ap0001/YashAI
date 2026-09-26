import type { LucideIcon } from 'lucide-react';
import {
  Bot, AudioWaveform, Clapperboard, Search, Server,
  Landmark, HeartPulse, ShoppingBag, GraduationCap, Building2,
  MapPin, ShieldCheck, EyeOff, KeyRound, ScrollText, HardDrive,
} from 'lucide-react';

export type ModuleStatus = 'Early access' | 'In development' | 'Roadmap';

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
      'Autonomous agents that handle customer conversations end to end across phone, WhatsApp and web chat: checking orders, updating records and escalating to people when it matters.',
    capabilities: ['Voice, WhatsApp and web in one agent', 'Acts inside your CRM and ticketing tools', 'Human hand-off with full context'],
    status: 'In development',
    icon: Bot,
  },
  {
    id: 'voice',
    name: 'Yash Voice',
    category: 'Real-time voice infrastructure',
    headline: 'Speech AI built for how India talks.',
    description:
      'Streaming speech recognition, synthesis and voice agents tuned for Indian languages and code-mixed speech, available as an API for developers.',
    capabilities: ['Low-latency streaming APIs', 'Code-mixed Telugu, Hindi and English', 'Telephony and SIP integration'],
    status: 'In development',
    icon: AudioWaveform,
  },
  {
    id: 'studio',
    name: 'Yash Studio',
    category: 'Enterprise generative video',
    headline: 'Every training and product video, in every language.',
    description:
      'Generate narrated training, compliance and product videos from documents and scripts, then localise them into Indian languages in minutes instead of weeks.',
    capabilities: ['Script, PDF or URL to video', 'Indian-language voice-over and captions', 'Brand kits and approval workflows'],
    status: 'Early access',
    icon: Clapperboard,
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
      'Run open-weight language, speech and vision models on infrastructure in India or inside your own premises, with fine-tuning, evaluation and governance built in.',
    capabilities: ['On-premise and India-region deployment', 'Fine-tuning on your own data', 'Model evaluation and audit trails'],
    status: 'Roadmap',
    icon: Server,
  },
];

export type Industry = { name: string; icon: LucideIcon; uses: string[] };

export const industries: Industry[] = [
  { name: 'Banking & financial services', icon: Landmark, uses: ['Multilingual collections and KYC calls', 'Policy search for branch staff', 'Compliance training videos'] },
  { name: 'Healthcare & pharma', icon: HeartPulse, uses: ['Patient appointment and follow-up agents', 'Medical-rep training in regional languages', 'Search across SOPs and product dossiers'] },
  { name: 'Retail & D2C', icon: ShoppingBag, uses: ['Order and returns agents on WhatsApp', 'Product videos for every catalogue', 'Store-staff knowledge assistant'] },
  { name: 'Education & skilling', icon: GraduationCap, uses: ['Course videos in the learner\'s language', 'Admissions and fee enquiry agents', 'Tutoring assistants grounded in syllabus'] },
  { name: 'Public sector', icon: Building2, uses: ['Citizen helplines in local languages', 'On-premise AI for sensitive records', 'Scheme information assistants'] },
];

export type TrustItem = { title: string; body: string; icon: LucideIcon };

export const trust: TrustItem[] = [
  { title: 'Data residency in India', body: 'Processing and storage in India by default, with on-premise deployment for regulated workloads.', icon: MapPin },
  { title: 'DPDP Act by design', body: 'Consent, purpose limitation and deletion built into how the platform handles personal data.', icon: ShieldCheck },
  { title: 'No training on your data', body: 'Customer data is never used to train models for anyone else.', icon: EyeOff },
  { title: 'Access control', body: 'Role-based access and single sign-on, with answers that respect existing document permissions.', icon: KeyRound },
  { title: 'Audit trails', body: 'Every agent action and model response is logged and reviewable.', icon: ScrollText },
  { title: 'Deploy anywhere', body: 'Our cloud in India, your private cloud, or fully air-gapped on your premises.', icon: HardDrive },
];
