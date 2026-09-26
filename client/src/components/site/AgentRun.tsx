import { useEffect, useRef, useState } from 'react';
import { Brain, Wrench, ShieldCheck, UserCheck, CheckCircle2, Loader2 } from 'lucide-react';
import { prefersReducedMotion } from '@/lib/utils';

type Kind = 'plan' | 'tool' | 'check' | 'human' | 'done';
type Step = { kind: Kind; text: string; meta?: string };
type Run = { chip: string; agent: string; task: string; steps: Step[] };

const icons = { plan: Brain, tool: Wrench, check: ShieldCheck, human: UserCheck, done: CheckCircle2 };
const labels = { plan: 'Plan', tool: 'Tool call', check: 'Guardrail', human: 'Approval', done: 'Done' };

// Scripted example runs showing how our agents work. Sample data, not a live system.
const runs: Run[] = [
  {
    chip: 'Resolve a refund',
    agent: 'Aria · Support Agent',
    task: 'Ticket #8812: "My blender arrived broken. I want my money back."',
    steps: [
      { kind: 'plan', text: 'Verify order → check refund policy → issue refund → confirm with customer' },
      { kind: 'tool', text: 'shopify.get_order(#4471)', meta: 'Delivered 3 days ago · $129.00' },
      { kind: 'check', text: 'Refund policy: damaged on arrival, within 30 days', meta: 'Passed' },
      { kind: 'tool', text: 'stripe.refund(ch_3Qx…, amount=129.00)', meta: 'Refund issued' },
      { kind: 'done', text: 'Customer notified · ticket resolved and tagged "damaged-in-transit"', meta: '41 s' },
    ],
  },
  {
    chip: 'Process an invoice',
    agent: 'Finn · Finance Ops Agent',
    task: 'New email from vendor: INV-2291 for 400 units, $18,400',
    steps: [
      { kind: 'plan', text: 'Extract invoice → match PO and goods receipt → route for payment' },
      { kind: 'tool', text: 'ocr.extract(INV-2291.pdf)', meta: 'Vendor, lines, tax, total' },
      { kind: 'tool', text: 'netsuite.match(PO-7730, GRN-1182)', meta: '398 of 400 units received' },
      { kind: 'check', text: 'Quantity mismatch of 2 units exceeds tolerance', meta: 'Flagged' },
      { kind: 'human', text: 'Sent to AP manager: approve $18,308 for 398 units?', meta: 'Approved' },
      { kind: 'done', text: 'Partial payment scheduled · vendor emailed about 2 missing units', meta: '2 min' },
    ],
  },
  {
    chip: 'Qualify a lead',
    agent: 'Rex · Sales Development Agent',
    task: 'Inbound demo request from a 600-person logistics company',
    steps: [
      { kind: 'plan', text: 'Research company → score against ICP → book or nurture' },
      { kind: 'tool', text: 'web.research("logistics company, 600 employees")', meta: 'Hiring 12 support roles' },
      { kind: 'check', text: 'ICP score 86 / 100: size, industry and buying signal', meta: 'Qualified' },
      { kind: 'tool', text: 'calendar.book(AE: Maria, Thu 3:00 pm)', meta: 'Invite sent' },
      { kind: 'done', text: 'CRM updated with research notes and suggested talking points', meta: '58 s' },
    ],
  },
  {
    chip: 'Reschedule a patient',
    agent: 'Vera · Voice Agent (healthcare)',
    task: 'Inbound call: patient needs to move Thursday’s cardiology follow-up',
    steps: [
      { kind: 'plan', text: 'Verify identity → find next slot with same doctor → reschedule → refill freed slot' },
      { kind: 'tool', text: 'ehr.verify_patient(dob, mrn)', meta: 'Verified' },
      { kind: 'tool', text: 'ehr.find_slots(provider="Dr. Shah", after="Thu")', meta: 'Mon 9:40 am free' },
      { kind: 'tool', text: 'ehr.reschedule(appt_5521 → Mon 09:40)', meta: 'Prep instructions sent' },
      { kind: 'done', text: 'Thursday slot offered to waitlist and filled', meta: '2 min call' },
    ],
  },
  {
    chip: 'Handle a shipment delay',
    agent: 'Exceptions Agent · Logistics',
    task: 'Container MSKU-77301 missed its rail connection in Chicago',
    steps: [
      { kind: 'plan', text: 'Assess delay → find alternatives → protect delivery date → inform customer' },
      { kind: 'tool', text: 'tms.options(MSKU-77301, deliver_by="Fri")', meta: 'Next rail: Sat · Truck: Thu' },
      { kind: 'check', text: 'Truck surcharge $640 is within the $1,000 auto-approve limit', meta: 'Passed' },
      { kind: 'tool', text: 'carrier.book_truck(pickup="today 16:00")', meta: 'Booked' },
      { kind: 'done', text: 'TMS updated · customer told delivery date is unchanged', meta: '4 min' },
    ],
  },
  {
    chip: 'Book a car service',
    agent: 'Axel · Automotive Agent',
    task: 'After-hours call: “My check-engine light is on. Can I bring the car in?”',
    steps: [
      { kind: 'plan', text: 'Identify vehicle → check history and recalls → book service → confirm' },
      { kind: 'tool', text: 'dms.lookup_vehicle(plate="KA05 MX 2211")', meta: '2022 SUV · 38,400 km' },
      { kind: 'tool', text: 'oem.open_recalls(vin)', meta: '1 open recall found' },
      { kind: 'tool', text: 'dms.book_service(Thu 08:00, add_recall=true, courtesy_car=true)', meta: 'Booked' },
      { kind: 'done', text: 'SMS confirmation sent with drop-off instructions', meta: '3 min call' },
    ],
  },
  {
    chip: 'Research a market',
    agent: 'Sage · Research Agent',
    task: '“Who are the top 5 competitors in AI invoice processing, and how do they price?”',
    steps: [
      { kind: 'plan', text: 'Find vendors → collect pricing and positioning → verify → summarise' },
      { kind: 'tool', text: 'web.search("AI invoice processing vendors 2026")', meta: '34 sources read' },
      { kind: 'tool', text: 'web.read(pricing pages × 5)', meta: '3 public · 2 on request' },
      { kind: 'check', text: 'Every figure linked to a source; estimates marked as estimates', meta: 'Passed' },
      { kind: 'done', text: 'Comparison table and 1-page brief delivered to #research', meta: '11 min' },
    ],
  },
  {
    chip: 'Triage a security alert',
    agent: 'Sentinel · SecOps Agent',
    task: 'Alert: impossible-travel login for j.doe (Mumbai → Frankfurt in 20 min)',
    steps: [
      { kind: 'plan', text: 'Enrich alert → check known VPNs and devices → decide severity' },
      { kind: 'tool', text: 'idp.sign_ins(j.doe, last_24h)', meta: 'New device, no MFA prompt' },
      { kind: 'tool', text: 'threatintel.lookup(185.220.x.x)', meta: 'Known Tor exit node' },
      { kind: 'check', text: 'Severity: HIGH — playbook requires session revoke', meta: 'Policy' },
      { kind: 'human', text: 'On-call analyst: revoke sessions and force password reset?', meta: 'Approved' },
      { kind: 'done', text: 'Sessions revoked · incident INC-5521 opened with full timeline', meta: '3 min' },
    ],
  },
];

const AgentRun = () => {
  const [active, setActive] = useState(0);
  const [shown, setShown] = useState(0);
  const timer = useRef<number>();
  const run = runs[active];

  useEffect(() => {
    window.clearInterval(timer.current);
    if (prefersReducedMotion()) {
      setShown(run.steps.length);
      return;
    }
    setShown(0);
    const start = performance.now();
    // Time-based, so throttled background tabs catch up instead of stalling.
    timer.current = window.setInterval(() => {
      const n = Math.min(run.steps.length, Math.floor((performance.now() - start) / 700) + 1);
      setShown(n);
      if (n >= run.steps.length) window.clearInterval(timer.current);
    }, 120);
    return () => window.clearInterval(timer.current);
  }, [active, run.steps.length]);

  const running = shown < run.steps.length;

  return (
    <div className="run">
      <div className="run-chips" role="group" aria-label="Example agent runs">
        {runs.map((r, i) => (
          <button
            key={r.chip}
            type="button"
            className={`pchip${active === i ? ' on' : ''}`}
            aria-pressed={active === i}
            onClick={() => setActive(i)}
          >
            {r.chip}
          </button>
        ))}
      </div>

      <div className="run-card">
        <div className="run-head">
          <span className="run-agent">{run.agent}</span>
          <span className={`run-status${running ? '' : ' ok'}`}>
            {running ? <><Loader2 size={13} className="spin" aria-hidden="true" /> Running</> : <><CheckCircle2 size={13} aria-hidden="true" /> Completed</>}
          </span>
        </div>
        <p className="run-task">{run.task}</p>
        <ol className="run-steps" aria-live="polite">
          {run.steps.slice(0, shown).map((s, i) => {
            const Icon = icons[s.kind];
            return (
              <li key={i} className={`rstep k-${s.kind}`}>
                <span className="rstep-icon"><Icon size={14} aria-hidden="true" /></span>
                <div className="rstep-body">
                  <span className="rstep-label">{labels[s.kind]}</span>
                  <span className={s.kind === 'tool' ? 'rstep-code' : 'rstep-text'}>{s.text}</span>
                </div>
                {s.meta && <span className="rstep-meta">{s.meta}</span>}
              </li>
            );
          })}
        </ol>
      </div>
      <p className="prompt-note">Example runs with sample data, showing how our agents plan, act and ask for approval.</p>
    </div>
  );
};

export default AgentRun;
