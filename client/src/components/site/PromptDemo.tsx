import { useEffect, useRef, useState, type FormEvent } from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { prefersReducedMotion } from '@/lib/utils';

type Script = { chip: string; prompt: string; module: string; reply: string };

// Scripted examples of what each module is being built to do. Not a live model.
const scripts: Script[] = [
  {
    chip: 'Resolve a customer request',
    prompt: 'Customer chat: "My order arrived damaged. Can I get a replacement?"',
    module: 'Yash Agents',
    reply:
      "I'm sorry about that. I've found order #4471 and created a free replacement, and a courier will collect the damaged item tomorrow between 10 am and 1 pm. You'll get a confirmation email in a moment.",
  },
  {
    chip: 'Handle a multilingual call',
    prompt: 'Caller switches from English to Spanish: "Hi, I need to change my booking… para el sábado, por favor."',
    module: 'Yash Voice',
    reply:
      'Transcribed and understood in both languages. Booking moved to Saturday 11:00. Replying in Spanish: "Listo, su cita es el sábado a las 11:00. ¿Algo más?"',
  },
  {
    chip: 'Search company policies',
    prompt: 'What is the travel allowance for a sales rep visiting a client overnight?',
    module: 'Yash Knowledge',
    reply:
      'Up to $180 per night for hotels and $60 per day for meals, with receipts above $25 [1]. Managers can approve up to 20% extra in high-cost cities [2].\n\n[1] Travel-Policy-2026.pdf, p.4   [2] Sales-SOP.docx, §3.2',
  },
  {
    chip: 'Deploy on our own servers',
    prompt: 'Can this run inside our data centre? Our data cannot leave the building.',
    module: 'Yash Sovereign',
    reply:
      'Yes, that is what Yash Sovereign is designed for: open-weight models deployed on your own GPUs, fully offline, with audit logs. It is on our roadmap. Talk to us to join the design-partner programme.',
  },
];

const fallback =
  'This is a scripted preview, not a live model. Request a demo and we will show you YashAI working on your own documents and calls.';

const PromptDemo = () => {
  const [active, setActive] = useState<number | null>(null);
  const [prompt, setPrompt] = useState('');
  const [reply, setReply] = useState('');
  const [module, setModule] = useState('');
  const [typing, setTyping] = useState(false);
  const [draft, setDraft] = useState('');
  const timer = useRef<number>();

  const play = (text: string) => {
    window.clearInterval(timer.current);
    if (prefersReducedMotion()) {
      setReply(text);
      setTyping(false);
      return;
    }
    setReply('');
    setTyping(true);
    // Progress is based on elapsed time, so throttled timers catch up instead of stalling.
    const start = performance.now();
    timer.current = window.setInterval(() => {
      const i = Math.ceil((performance.now() - start) / 6);
      setReply(text.slice(0, i));
      if (i >= text.length) {
        window.clearInterval(timer.current);
        setTyping(false);
      }
    }, 18);
  };

  const run = (idx: number) => {
    const s = scripts[idx];
    setActive(idx);
    setPrompt(s.prompt);
    setModule(s.module);
    play(s.reply);
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!draft.trim()) return;
    setActive(null);
    setPrompt(draft.trim());
    setModule('YashAI');
    setDraft('');
    play(fallback);
  };

  useEffect(() => {
    run(0);
    return () => window.clearInterval(timer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="prompt">
      <div className="prompt-log" aria-live="polite">
        {prompt && <p className="prompt-q">{prompt}</p>}
        {module && (
          <div className="prompt-a">
            <span className="prompt-who"><Sparkles size={14} aria-hidden="true" /> {module}</span>
            <p>
              {reply}
              {typing && <span className="caret" aria-hidden="true" />}
            </p>
          </div>
        )}
      </div>

      <form className="prompt-box" onSubmit={submit}>
        <label htmlFor="prompt-input" className="sr-only">Ask YashAI</label>
        <input
          id="prompt-input"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Ask YashAI anything…"
          autoComplete="off"
        />
        <button type="submit" aria-label="Send" className="prompt-send"><ArrowUp size={18} /></button>
      </form>

      <div className="prompt-chips" role="group" aria-label="Example tasks">
        {scripts.map((s, i) => (
          <button
            key={s.chip}
            type="button"
            className={`pchip${active === i ? ' on' : ''}`}
            aria-pressed={active === i}
            onClick={() => run(i)}
          >
            {s.chip}
          </button>
        ))}
      </div>
      <p className="prompt-note">Scripted preview of what the platform is being built to do. Not a live model.</p>
    </div>
  );
};

export default PromptDemo;
