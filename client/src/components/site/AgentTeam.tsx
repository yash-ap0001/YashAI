import { MessagesSquare, Monitor, Clock, Network, Brain, FileCheck2, Search, PenLine, ShieldCheck, Hash, Lock } from 'lucide-react';

export const ideas = [
  {
    icon: MessagesSquare,
    title: 'A teammate, not a chat window',
    body: 'Message your agents where you already work: Slack, Teams, WhatsApp, email or phone. They reply with progress updates like a colleague, not a wall of logs.',
  },
  {
    icon: Monitor,
    title: 'Their own computer',
    body: 'Every agent gets a secure cloud workspace with a browser, so it can use the systems people use, including old portals with no API.',
  },
  {
    icon: Clock,
    title: 'Always on',
    body: 'Agents run in the cloud, not on your laptop. Start a task from your phone at night; it is finished when you wake up.',
  },
  {
    icon: Network,
    title: 'A lead agent that delegates',
    body: 'A chief-of-staff agent breaks your goal into tasks, hands them to specialist agents, reviews their work and reports back to you.',
  },
  {
    icon: Brain,
    title: 'Memory by role',
    body: 'Each agent remembers its job, your preferences and past cases, so you never re-explain context in a new chat.',
  },
  {
    icon: FileCheck2,
    title: 'Drafts before actions',
    body: 'Emails, refunds and payments arrive as drafts to approve. Credentials live in a scoped vault, and nothing is shared by default.',
  },
];

/* Illustrative team thread with sample data, hidden from screen readers. */
export const TeamThread = () => (
  <div className="mock" aria-hidden="true">
    <div className="mock-bar">
      <span className="dot" /><span className="dot" /><span className="dot" />
      <span className="mock-title"><Hash size={12} className="inline -mt-0.5" /> ops-agents</span>
      <span className="mock-tag">Sample data</span>
    </div>
    <div className="thread">
      <div className="msg">
        <span className="msg-av human">P</span>
        <div>
          <p className="msg-name">Priya <em>9:02 pm</em></p>
          <p>Atlas, we have 40 unpaid invoices over 30 days. Chase them before month-end. Nothing goes out without my OK.</p>
        </div>
      </div>

      <div className="msg">
        <span className="msg-av agent">A</span>
        <div>
          <p className="msg-name">Atlas <span className="role">Lead agent</span> <em>9:02 pm</em></p>
          <p>On it. Splitting this across the team:</p>
          <ul className="delegate">
            <li><Search size={13} /> <b>Finn</b> pulls balances and payment history from NetSuite</li>
            <li><PenLine size={13} /> <b>Aria</b> drafts a tailored reminder for each customer</li>
            <li><ShieldCheck size={13} /> <b>Review agent</b> checks tone, amounts and policy</li>
          </ul>
        </div>
      </div>

      <div className="msg">
        <span className="msg-av agent">A</span>
        <div>
          <p className="msg-name">Atlas <span className="role">Lead agent</span> <em>6:40 am</em></p>
          <p>Done overnight. 37 reminders are ready. 3 accounts have open disputes, so I held those back for you.</p>
          <div className="draft">
            <p className="draft-h"><Lock size={12} /> Draft · 37 emails · $212,480 outstanding</p>
            <p className="draft-body">“Hi Daniel, a quick reminder that invoice INV-2291 for $18,308 was due on 2 September…”</p>
            <div className="draft-actions">
              <span className="wf-ok">Approve all</span>
              <span className="wf-no">Review one by one</span>
              <span className="wf-no">Edit tone</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
