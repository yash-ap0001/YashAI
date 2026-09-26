import type { LucideIcon } from 'lucide-react';
import { Clapperboard, PhoneCall, MessagesSquare, ShieldCheck, GraduationCap } from 'lucide-react';

export type ProductStatus = 'Live' | 'Early access' | 'In development' | 'Planned · 2027';

export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  points: string[];
  status: ProductStatus;
  icon: LucideIcon;
  href?: string;
};

export const products: Product[] = [
  {
    id: 'studio',
    name: 'YashAI Studio',
    tagline: 'Script in. Explainer video out.',
    description:
      'Turn a script, a product page or a PDF into a narrated explainer video with visuals, captions and voice-over.',
    points: [
      'Voice-overs in English, Telugu and Hindi',
      'Brand colours, logo and captions built in',
      'Rendered on our own GPUs in India',
    ],
    status: 'Early access',
    icon: Clapperboard,
  },
  {
    id: 'voice',
    name: 'YashAI Voice',
    tagline: 'An AI receptionist that never misses a call.',
    description:
      'Answers your business line 24/7, handles common questions, books appointments and sends every caller a WhatsApp follow-up.',
    points: [
      'Understands callers who switch between languages',
      'Books into your calendar and hands off to a human',
      'Call summaries delivered to WhatsApp',
    ],
    status: 'In development',
    icon: PhoneCall,
  },
  {
    id: 'assist',
    name: 'YashAI Assist',
    tagline: 'Answers from your documents, with sources.',
    description:
      "An assistant trained on a company's own policies, catalogues and manuals, for customers on WhatsApp and staff on the web.",
    points: [
      'Every answer cites the document it came from',
      'Says "I don\'t know" instead of guessing',
      'Works on WhatsApp and the web',
    ],
    status: 'In development',
    icon: MessagesSquare,
  },
  {
    id: 'private',
    name: 'YashAI Private',
    tagline: 'Your own AI, on your own premises.',
    description:
      'Open-weight language models deployed inside your network, for firms that cannot send data to foreign clouds.',
    points: [
      'Data never leaves your building',
      'Designed around India\'s DPDP Act',
      'Chat, search and document tools included',
    ],
    status: 'Planned · 2027',
    icon: ShieldCheck,
  },
  {
    id: 'getjobeasy',
    name: 'GetJobEasy',
    tagline: 'Get job-ready. Pay placement only after an offer.',
    description:
      'Full-stack and Gen AI training with placement support. The placement fee is due only after the candidate accepts an offer.',
    points: [
      'Full-stack and Python Gen AI tracks',
      'Resume, LinkedIn and mock interviews',
      'Available in English, Telugu and Hindi',
    ],
    status: 'Live',
    icon: GraduationCap,
    href: 'https://jobs.yashaitech.com',
  },
];
