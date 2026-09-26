import { useRef, useState, type KeyboardEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { industries } from '@/constants/industries';

const IndustryExplorer = () => {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const ind = industries[active];
  const Icon = ind.icon;

  // Arrow keys move between tabs, as in the WAI-ARIA tabs pattern.
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const keys: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    if (!(e.key in keys)) return;
    e.preventDefault();
    const next = (active + keys[e.key] + industries.length) % industries.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <div className="ind">
      <div className="ind-tabs" role="tablist" aria-label="Industries" aria-orientation="vertical" onKeyDown={onKey}>
        {industries.map((d, i) => {
          const TabIcon = d.icon;
          return (
            <button
              key={d.id}
              ref={(el) => (tabs.current[i] = el)}
              id={`tab-${d.id}`}
              role="tab"
              type="button"
              aria-selected={active === i}
              aria-controls={`panel-${d.id}`}
              tabIndex={active === i ? 0 : -1}
              className={`ind-tab${active === i ? ' on' : ''}`}
              onClick={() => setActive(i)}
            >
              <TabIcon size={16} aria-hidden="true" />
              <span>{d.name}</span>
            </button>
          );
        })}
      </div>

      <div className="ind-panel" role="tabpanel" id={`panel-${ind.id}`} aria-labelledby={`tab-${ind.id}`} key={ind.id}>
        <div className="flex items-center gap-3">
          <span className="icon-tile"><Icon size={20} aria-hidden="true" /></span>
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-soft">{ind.name}</p>
        </div>
        <h3 className="ind-head">{ind.headline}</h3>

        <div className="ind-cases">
          {ind.useCases.map((u) => (
            <div key={u.title} className="ind-case">
              <p className="font-semibold">{u.title}</p>
              <p className="text-soft mt-1.5 text-[14.5px] leading-relaxed">{u.example}</p>
            </div>
          ))}
        </div>

        <div className="ind-run">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-brand">Example · {ind.run.agent}</span>
            <span className="mock-tag">Sample data</span>
          </div>
          <p className="ind-task">{ind.run.task}</p>
          <ol className="ind-steps">
            {ind.run.steps.map((s, i) => (
              <li key={s}><span className="ind-num">{i + 1}</span>{s}</li>
            ))}
          </ol>
          <p className="ind-outcome"><CheckCircle2 size={16} aria-hidden="true" /> {ind.run.outcome}</p>
        </div>

        <div className="agent-tools mt-5">
          {ind.systems.map((s) => <span key={s}>{s}</span>)}
        </div>
      </div>
    </div>
  );
};

export default IndustryExplorer;
