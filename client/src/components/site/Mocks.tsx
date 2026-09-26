import { Headset, Target, Receipt, ShieldAlert, PhoneCall, UserCheck, LayoutGrid, Bot, Activity, FlaskConical } from 'lucide-react';

/* Decorative illustration with sample data, hidden from screen readers. */

const roster = [
  { icon: Headset, name: 'Aria', role: 'Support', done: '412 tickets', kpi: '78% resolved', state: 'Live' },
  { icon: Target, name: 'Rex', role: 'Sales development', done: '96 accounts', kpi: '14 meetings', state: 'Live' },
  { icon: Receipt, name: 'Finn', role: 'Accounts payable', done: '231 invoices', kpi: '94% straight-through', state: 'Live' },
  { icon: PhoneCall, name: 'Vera', role: 'Voice', done: '183 calls', kpi: '1.2 s response', state: 'Live' },
  { icon: ShieldAlert, name: 'Sentinel', role: 'Security triage', done: '57 alerts', kpi: '3 escalated', state: 'Shadow' },
];

const queue = [
  { who: 'Finn', what: 'Pay $18,308 for 398 of 400 units (INV-2291)?' },
  { who: 'Sentinel', what: 'Revoke sessions for j.doe after impossible-travel login?' },
  { who: 'Aria', what: 'Refund $640 outside the 30-day window for a loyal customer?' },
];

const nav: [typeof Bot, string][] = [
  [LayoutGrid, 'Workforce'],
  [UserCheck, 'Approvals'],
  [Activity, 'Traces'],
  [FlaskConical, 'Evaluations'],
  [Bot, 'Agents'],
];

export const Workforce = () => (
  <div className="mock" aria-hidden="true">
    <div className="mock-bar">
      <span className="dot" /><span className="dot" /><span className="dot" />
      <span className="mock-title">YashAI · Workforce</span>
      <span className="mock-tag">Sample data</span>
    </div>
    <div className="cc">
      <aside className="cc-side">
        <p className="cc-org">Northwind Group</p>
        {nav.map(([Icon, label], i) => (
          <span key={label} className={`cc-nav${i === 0 ? ' on' : ''}`}>
            <Icon size={15} /> {label}
          </span>
        ))}
      </aside>

      <div className="cc-main">
        <div className="cc-head">
          <div>
            <p className="cc-h">Digital workforce · today</p>
            <p className="cc-sub">5 agents · 979 tasks completed · 3 waiting for approval</p>
          </div>
          <span className="cc-live"><span className="live-dot" /> 4 live · 1 in shadow mode</span>
        </div>

        <div className="wf-table">
          <div className="wf-row wf-headrow">
            <span>Agent</span><span>Completed</span><span>KPI</span><span>Status</span>
          </div>
          {roster.map(({ icon: Icon, name, role, done, kpi, state }) => (
            <div key={name} className="wf-row">
              <span className="wf-agent"><span className="wf-av"><Icon size={14} /></span><span><b>{name}</b><em>{role}</em></span></span>
              <span>{done}</span>
              <span>{kpi}</span>
              <span className={`wf-state${state === 'Shadow' ? ' shadow' : ''}`}>{state}</span>
            </div>
          ))}
        </div>

        <div className="panel mt-4">
          <p className="panel-h">Waiting for a human</p>
          <ul className="wf-queue">
            {queue.map((q) => (
              <li key={q.what}>
                <span className="wf-who">{q.who}</span>
                <span className="flex-1">{q.what}</span>
                <span className="wf-btns"><span className="wf-ok">Approve</span><span className="wf-no">Review</span></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);
