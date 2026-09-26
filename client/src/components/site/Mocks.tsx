import {
  Bot, AudioWaveform, Clapperboard, Search, Server, LayoutGrid,
  PhoneCall, MessageCircle, Globe, CheckCircle2, ArrowUpRight, FileText, CornerDownRight,
} from 'lucide-react';

/* All mockups are decorative illustrations with sample data, hidden from screen readers. */

const Chrome = ({ title, tag = 'Sample data' }: { title: string; tag?: string }) => (
  <div className="mock-bar">
    <span className="dot" /><span className="dot" /><span className="dot" />
    <span className="mock-title">{title}</span>
    <span className="mock-tag">{tag}</span>
  </div>
);

const bars = [
  { lang: 'Telugu', v: 82 },
  { lang: 'Hindi', v: 64 },
  { lang: 'English', v: 71 },
  { lang: 'Tamil', v: 38 },
  { lang: 'Kannada', v: 29 },
];

const nav: [typeof Bot, string][] = [
  [LayoutGrid, 'Overview'],
  [Bot, 'Agents'],
  [AudioWaveform, 'Voice'],
  [Clapperboard, 'Studio'],
  [Search, 'Knowledge'],
  [Server, 'Deployments'],
];

export const CommandCenter = () => (
  <div className="mock" aria-hidden="true">
    <Chrome title="YashAI · Command Center" />
    <div className="cc">
      <aside className="cc-side">
        <p className="cc-org">Acme Retail</p>
        {nav.map(([Icon, label], i) => (
          <span key={label} className={`cc-nav${i === 0 ? ' on' : ''}`}>
            <Icon size={15} /> {label}
          </span>
        ))}
      </aside>

      <div className="cc-main">
        <div className="cc-head">
          <div>
            <p className="cc-h">Good evening, Priya</p>
            <p className="cc-sub">Customer agents · last 24 hours</p>
          </div>
          <span className="cc-live"><span className="live-dot" /> 3 agents live</span>
        </div>

        <div className="cc-kpis">
          <div className="kpi"><p>Conversations</p><strong>1,284</strong></div>
          <div className="kpi"><p>Resolved by AI</p><strong>71%</strong></div>
          <div className="kpi"><p>Avg. first reply</p><strong>1.8s</strong></div>
        </div>

        <div className="cc-grid">
          <div className="panel">
            <p className="panel-h">Conversations by language</p>
            <div className="lang-bars">
              {bars.map((b) => (
                <div key={b.lang} className="lang-row">
                  <span>{b.lang}</span>
                  <span className="lang-track"><span style={{ width: `${b.v}%` }} /></span>
                </div>
              ))}
            </div>
          </div>
          <div className="panel">
            <p className="panel-h">Live activity</p>
            <ul className="feed">
              <li><PhoneCall size={14} /> <span>Return booked for order #4471 <em>Telugu · voice</em></span></li>
              <li><MessageCircle size={14} /> <span>Refund status shared <em>Hindi · WhatsApp</em></span></li>
              <li><Globe size={14} /> <span>Size exchange started <em>English · web</em></span></li>
              <li className="warn"><ArrowUpRight size={14} /> <span>Escalated to Ravi: damaged item <em>Telugu · voice</em></span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const AgentMock = () => (
  <div className="mock" aria-hidden="true">
    <Chrome title="Yash Agents · Returns agent" />
    <div className="mock-pane space-y-3">
      <div className="flex items-center justify-between text-xs text-soft">
        <span className="inline-flex items-center gap-2"><span className="live-dot" /> Voice call · +91 ••••• ••421</span>
        <span>01:42</span>
      </div>
      <div className="bubble bubble-them">Naa order damage ayyi vachindi. Return cheyyali.</div>
      <div className="bubble bubble-us">Sorry andi! Order #4471 kanipisthondi. Pickup repu 10–1 madhyalo book cheyyana?</div>
      <div className="bubble bubble-them">Haan, cheyyandi.</div>
      <div className="tool">
        <CornerDownRight size={14} /> <code>orders.create_return(4471, pickup="tomorrow 10:00–13:00")</code>
      </div>
      <div className="event"><CheckCircle2 size={16} /> Return created · SMS and WhatsApp confirmation sent</div>
    </div>
  </div>
);

export const VoiceApiMock = () => (
  <div className="mock code-mock" aria-hidden="true">
    <Chrome title="stream.py" tag="Preview API" />
    <pre className="code"><span className="c"># Real-time transcription for code-mixed speech</span>{`
`}<span className="k">from</span> yashai <span className="k">import</span> Voice{`

voice = Voice(api_key=`}<span className="s">"yk_..."</span>{`)

`}<span className="k">async for</span> event <span className="k">in</span>{` voice.transcribe_stream(
    audio=call.audio,
    languages=[`}<span className="s">"te"</span>, <span className="s">"hi"</span>, <span className="s">"en"</span>{`],
):
    print(event.text)
`}<span className="c"># → "Naa order damage ayyi vachindi"</span></pre>
  </div>
);

export const KnowledgeMock = () => (
  <div className="mock" aria-hidden="true">
    <Chrome title="Yash Knowledge" />
    <div className="mock-pane space-y-4">
      <div className="searchbox"><Search size={16} /> What is our refund window for damaged items?</div>
      <div className="answer">
        <p>
          Damaged items can be returned within <strong>10 days</strong> of delivery with a free pickup. Refunds reach the
          original payment method within 5–7 working days after inspection.<sup>1,2</sup>
        </p>
        <div className="sources">
          <span className="source"><FileText size={13} /> 1 · Returns-Policy-v4.pdf · p.2</span>
          <span className="source"><FileText size={13} /> 2 · Finance-SOP-Refunds.docx</span>
        </div>
      </div>
    </div>
  </div>
);
