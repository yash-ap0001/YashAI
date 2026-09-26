import type { LucideIcon } from 'lucide-react';
import { Globe2, ShieldCheck, EyeOff, KeyRound, ScrollText, UserCheck } from 'lucide-react';

export type TrustItem = { title: string; body: string; icon: LucideIcon };

export const trust: TrustItem[] = [
  { title: 'Approval limits', body: 'You set what an agent may do alone: refund size, payment value, who it may email. Above the limit, a person decides.', icon: UserCheck },
  { title: 'Full audit trail', body: 'Every plan, tool call, decision and approval is logged and can be replayed step by step.', icon: ScrollText },
  { title: 'Least-privilege access', body: 'Agents get scoped credentials and single sign-on, and only see documents each user is allowed to see.', icon: KeyRound },
  { title: 'No training on your data', body: 'Customer data is never used to train models for anyone else.', icon: EyeOff },
  { title: 'Privacy by design', body: 'Built around the principles of GDPR and India\'s DPDP Act: consent, purpose limitation and deletion.', icon: ShieldCheck },
  { title: 'Data residency', body: 'Choose the region where data is processed and stored, or keep it entirely on your premises.', icon: Globe2 },
];
