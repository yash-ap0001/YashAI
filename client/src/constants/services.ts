import type { LucideIcon } from 'lucide-react';
import {
  Library, SlidersHorizontal, CloudCog, FileCode2, Bot, Database, AudioLines, ShieldHalf,
} from 'lucide-react';

export type Service = { title: string; icon: LucideIcon; body: string; deliverables: string[] };

// AI engineering services we deliver, standalone or as part of an agent build.
export const services: Service[] = [
  {
    title: 'RAG & knowledge systems',
    icon: Library,
    body: 'Retrieval-augmented generation over your documents and databases, tuned for accuracy and permission-aware.',
    deliverables: ['Chunking, embeddings and hybrid search', 'Re-ranking and citation on every answer', 'Accuracy evaluation on your real questions'],
  },
  {
    title: 'LLM fine-tuning',
    icon: SlidersHorizontal,
    body: 'Adapt open-weight models to your domain, tone and tasks, then prove the gain against a baseline.',
    deliverables: ['Dataset curation and synthetic data', 'LoRA / QLoRA and full fine-tuning', 'Distillation into smaller, cheaper models'],
  },
  {
    title: 'AI in the cloud',
    icon: CloudCog,
    body: 'Production deployment on managed AI services or your own GPUs, sized for latency and cost.',
    deliverables: ['Bedrock, Azure OpenAI and Vertex AI setups', 'Self-hosted inference with vLLM', 'Autoscaling, caching and cost controls'],
  },
  {
    title: 'Infrastructure as code & MLOps',
    icon: FileCode2,
    body: 'Reproducible AI infrastructure your team can own, review and redeploy with one command.',
    deliverables: ['Terraform modules for AI workloads', 'Kubernetes, CI/CD and model registries', 'Monitoring, alerting and drift detection'],
  },
  {
    title: 'Agent development',
    icon: Bot,
    body: 'Custom single and multi-agent systems with tool use, memory and human approvals.',
    deliverables: ['Tool and MCP server development', 'Multi-agent orchestration', 'Evaluation suites and tracing'],
  },
  {
    title: 'Data engineering for AI',
    icon: Database,
    body: 'Pipelines that turn scattered business data into clean, fresh, AI-ready sources.',
    deliverables: ['Ingestion from SaaS, ERPs and files', 'Document parsing and OCR', 'Scheduled syncs with lineage'],
  },
  {
    title: 'Voice AI',
    icon: AudioLines,
    body: 'Real-time speech agents for phone lines and apps, with natural turn-taking and hand-off.',
    deliverables: ['Speech-to-text and text-to-speech pipelines', 'Telephony and SIP integration', 'Latency tuning under one second'],
  },
  {
    title: 'AI security & governance',
    icon: ShieldHalf,
    body: 'Keep models and agents safe, compliant and auditable as they reach production.',
    deliverables: ['Prompt-injection and red-team testing', 'PII redaction and guardrails', 'Audit logging and policy controls'],
  },
];
