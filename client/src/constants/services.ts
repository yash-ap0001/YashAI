import strategyDiagram from '@/assets/images/strategy-diagram.svg';
import cloudServices from '@/assets/images/cloud-services.svg';

export type ServiceItem = {
  title: string;
  description: string;
};

export type Service = {
  name: string;
  icon: string;
  items: ServiceItem[];
  backgroundImage?: string;
};

export const services: Service[] = [
  {
    name: "Video",
    icon: "fa-film",
    items: [
      {
        title: "Script to Video",
        description: "Turn a script or topic into a narrated explainer video with visuals, voice-over and captions."
      },
      {
        title: "Indian-Language Narration",
        description: "Voice-overs in English, Telugu, Hindi and more, for training, product demos and social media."
      }
    ],
    backgroundImage: strategyDiagram
  },
  {
    name: "AI Development",
    icon: "fa-laptop-code",
    items: [
      {
        title: "Custom AI Apps",
        description: "LLM apps, RAG and agents built for a specific business problem."
      },
      {
        title: "AI Integration",
        description: "Add AI features to software a business already uses."
      }
    ]
  },
  {
    name: "Careers",
    icon: "fa-user-graduate",
    items: [
      {
        title: "GetJobEasy",
        description: "Full-stack and Gen AI training with placement support, live at jobs.yashaitech.com."
      }
    ]
  },
  {
    name: "Private AI",
    icon: "fa-server",
    items: [
      {
        title: "On-Premise LLMs",
        description: "Open models running on our own GPU hardware, so customer data stays private."
      }
    ]
  },
  {
    name: "Assistants",
    icon: "fa-robot",
    items: [
      {
        title: "Answers From Your Documents",
        description: "Assistants that answer customer and staff questions from a company's own documents."
      },
      {
        title: "Workflow Automation",
        description: "Draft replies, sort requests and handle routine tasks automatically."
      }
    ],
    backgroundImage: cloudServices
  }
];

export type ProcessStep = {
  number: number;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Discovery",
    description: "We learn how your business works and find the tasks where AI saves real time or money."
  },
  {
    number: 2,
    title: "Plan",
    description: "We agree on a small first version, a timeline and the result it should deliver."
  },
  {
    number: 3,
    title: "Build",
    description: "We build and deploy it, connected to the tools you already use."
  },
  {
    number: 4,
    title: "Improve",
    description: "We measure how it performs and keep improving it with you."
  }
];
