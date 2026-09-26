import { Play, Check, FileText, PhoneIncoming, CalendarCheck } from 'lucide-react';

const WindowBar = ({ title }: { title: string }) => (
  <div className="mock-bar">
    <span className="dot" /><span className="dot" /><span className="dot" />
    <span className="mock-title">{title}</span>
  </div>
);

/* Illustrative interface for YashAI Studio. Decorative, so hidden from screen readers. */
export const StudioMock = () => (
  <div className="mock" aria-hidden="true">
    <WindowBar title="YashAI Studio — New video" />
    <div className="grid md:grid-cols-[0.9fr_1.4fr]">
      <div className="mock-pane border-b md:border-b-0 md:border-r border-line">
        <p className="mock-label">Script</p>
        <p className="mock-script">
          <span className="scene">Scene 1</span> Missed a customer's call after closing time?
        </p>
        <p className="mock-script">
          <span className="scene">Scene 2</span> YashAI Voice answers every one, in the caller's language.
        </p>
        <p className="mock-script faded">
          <span className="scene">Scene 3</span> Join the waitlist at yashaitech.com.
        </p>
        <p className="mock-label mt-5">Voice-over</p>
        <div className="flex flex-wrap gap-2">
          <span className="chip">English</span>
          <span className="chip chip-on">తెలుగు</span>
          <span className="chip">हिंदी</span>
        </div>
      </div>
      <div className="mock-pane">
        <div className="video-frame">
          <div className="video-art">
            <div className="orb orb-a" />
            <div className="orb orb-b" />
            <div className="video-card">
              <PhoneIncoming size={18} />
              <span>Incoming call · 9:42 pm</span>
            </div>
          </div>
          <button className="play" tabIndex={-1}><Play size={18} fill="currentColor" /></button>
          <p className="caption">ప్రతి కాల్‌కు సమాధానం — మీ కస్టమర్ భాషలోనే.</p>
        </div>
        <div className="timeline">
          <span style={{ width: '34%' }} className="seg seg-a" />
          <span style={{ width: '38%' }} className="seg seg-b" />
          <span style={{ width: '28%' }} className="seg seg-c" />
        </div>
        <div className="flex items-center justify-between mt-3 text-xs text-soft">
          <span>0:14 / 0:45</span>
          <span className="inline-flex items-center gap-1 text-brand font-medium">
            <Check size={14} /> Rendered on our own GPUs
          </span>
        </div>
      </div>
    </div>
  </div>
);

export const VoiceMock = () => (
  <div className="mock" aria-hidden="true">
    <WindowBar title="YashAI Voice — Live call" />
    <div className="mock-pane space-y-3">
      <div className="flex items-center justify-between text-xs text-soft">
        <span className="inline-flex items-center gap-2"><span className="live-dot" /> Caller · +91 ••••• ••421</span>
        <span>02:13</span>
      </div>
      <div className="bubble bubble-them">Hello, Saturday appointment dorukutunda? Evening ayithe better.</div>
      <div className="bubble bubble-us">Yes! Saturday 6:30 pm is free. Mee peru cheppandi, book chesthanu.</div>
      <div className="bubble bubble-them">Ravi. Thanks.</div>
      <div className="event">
        <CalendarCheck size={16} /> Booked: Sat, 6:30 pm · Summary sent to WhatsApp
      </div>
    </div>
  </div>
);

export const AssistMock = () => (
  <div className="mock" aria-hidden="true">
    <WindowBar title="YashAI Assist" />
    <div className="mock-pane space-y-3">
      <div className="bubble bubble-them">What is the return window for online orders?</div>
      <div className="bubble bubble-us">
        Online orders can be returned within 10 days of delivery, if the product is unused and in original packaging.
        <div className="source"><FileText size={14} /> Returns-Policy-2026.pdf · page 2</div>
      </div>
      <div className="bubble bubble-them">And for sale items?</div>
      <div className="bubble bubble-us">
        I couldn't find a rule for sale items in your documents, so I've passed this to your team instead of guessing.
      </div>
    </div>
  </div>
);
