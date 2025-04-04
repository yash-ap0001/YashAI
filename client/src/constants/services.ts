export type ServiceItem = {
  title: string;
  description: string;
};

export type Service = {
  name: string;
  icon: string;
  items: ServiceItem[];
};

export const services: Service[] = [
  {
    name: "Strategy",
    icon: "fa-chess",
    items: [
      {
        title: "Strategic Advisory",
        description: "Expert guidance on AI implementation roadmaps and digital transformation strategies."
      },
      {
        title: "AI-Celerate",
        description: "Accelerate business transformation through targeted AI solution deployment."
      }
    ]
  },
  {
    name: "Data",
    icon: "fa-database",
    items: [
      {
        title: "Database Modernization",
        description: "Transform legacy databases into modern, scalable data architectures optimized for AI workloads."
      },
      {
        title: "Data Integration",
        description: "Seamlessly connect disparate data sources to create unified data pipelines for AI systems."
      }
    ]
  },
  {
    name: "Professional Services",
    icon: "fa-users-cog",
    items: [
      {
        title: "Staffing Services",
        description: "Access to specialized AI talent and expertise for your projects and initiatives."
      },
      {
        title: "Application Services",
        description: "End-to-end development and management of AI-powered applications."
      }
    ]
  },
  {
    name: "Software Products",
    icon: "fa-laptop-code",
    items: [
      {
        title: "Custom AI Solutions",
        description: "Bespoke AI software products tailored to your organization's specific needs."
      },
      {
        title: "AI Integration",
        description: "Seamlessly integrate AI capabilities into your existing software ecosystem."
      }
    ]
  },
  {
    name: "Modernization",
    icon: "fa-rocket",
    items: [
      {
        title: "IBM i Modernization",
        description: "AI-accelerated transformation of legacy IBM i applications and infrastructure."
      },
      {
        title: "Modernization as a Service",
        description: "Continuous modernization services to keep your technology stack current."
      }
    ]
  },
  {
    name: "Cloud",
    icon: "fa-cloud",
    items: [
      {
        title: "Cloud Hosting Services",
        description: "Reliable, scalable cloud infrastructure optimized for AI workloads."
      },
      {
        title: "Cloud Managed Services",
        description: "Comprehensive management and optimization of your cloud environment."
      }
    ]
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
    description: "We analyze your business needs, data landscape, and technical requirements to identify the optimal AI solutions."
  },
  {
    number: 2,
    title: "Strategy",
    description: "We develop a comprehensive implementation plan with clear milestones, resource allocations, and expected outcomes."
  },
  {
    number: 3,
    title: "Implementation",
    description: "Our expert team develops and deploys customized AI solutions integrated with your existing systems."
  },
  {
    number: 4,
    title: "Optimization",
    description: "We continuously monitor, refine, and enhance your AI solutions to ensure optimal performance and ROI."
  }
];
