import { FolderGit2, BookOpen, Handshake } from 'lucide-react';
import { services } from '@/constants/services';

/* Illustrative Terraform for a private inference deployment. Decorative, hidden from screen readers. */
const TerraformMock = () => (
  <div className="mock code-mock" aria-hidden="true">
    <div className="mock-bar">
      <span className="dot" /><span className="dot" /><span className="dot" />
      <span className="mock-title">infra/llm.tf</span>
      <span className="mock-tag">Example</span>
    </div>
    <pre className="code">
<span className="c"># Private LLM inference in your own cloud account</span>{'\n'}
<span className="k">module</span> <span className="s">"llm_inference"</span> {'{'}{'\n'}
{'  '}source        = <span className="s">"./modules/llm-inference"</span>{'\n'}
{'  '}cloud         = <span className="s">"aws"</span>{'\n'}
{'  '}region        = <span className="s">"us-east-1"</span>{'\n'}
{'  '}model         = <span className="s">"Qwen/Qwen2.5-14B-Instruct"</span>{'\n'}
{'  '}engine        = <span className="s">"vllm"</span>{'\n'}
{'  '}gpu_instance  = <span className="s">"g6e.xlarge"</span>{'\n'}
{'  '}min_replicas  = <span className="n">1</span>{'\n'}
{'  '}max_replicas  = <span className="n">4</span>{'\n'}
{'  '}private_only  = <span className="n">true</span>{'\n'}
{'}'}{'\n\n'}
<span className="k">module</span> <span className="s">"rag_store"</span> {'{'}{'\n'}
{'  '}source    = <span className="s">"./modules/pgvector"</span>{'\n'}
{'  '}encrypted = <span className="n">true</span>{'\n'}
{'}'}
    </pre>
  </div>
);

const Services = () => (
  <>
    <div className="svc-grid">
      {services.map(({ title, icon: Icon, body, deliverables }) => (
        <article key={title} className="svc">
          <span className="icon-tile"><Icon size={19} aria-hidden="true" /></span>
          <h3 className="h3 mt-4">{title}</h3>
          <p className="text-soft mt-2 text-[14.5px] leading-relaxed">{body}</p>
          <ul className="svc-list">
            {deliverables.map((d) => <li key={d}>{d}</li>)}
          </ul>
        </article>
      ))}
    </div>

    <div className="svc-bottom">
      <TerraformMock />
      <div className="stack">
        <p className="panel-h">Delivered as code, owned by you</p>
        <ul className="handover">
          <li><FolderGit2 size={18} aria-hidden="true" /><span><b>In your repositories.</b> Infrastructure, pipelines and agents live in your own Git, reviewed like any other code.</span></li>
          <li><BookOpen size={18} aria-hidden="true" /><span><b>Documented.</b> Architecture notes, runbooks and evaluation results for every system we ship.</span></li>
          <li><Handshake size={18} aria-hidden="true" /><span><b>Handed over.</b> We train your team so you can run, change and redeploy it without us.</span></li>
        </ul>
      </div>
    </div>
  </>
);

export default Services;
