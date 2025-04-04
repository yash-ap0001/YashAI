export type CaseStudy = {
  title: string;
  description: string;
  image: string;
  industry: string;
  client: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Automated Risk Assessment",
    description: "Developed an AI-powered risk assessment platform for a leading financial institution, reducing manual review time by 85% and improving accuracy by 32%.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format&fit=crop",
    industry: "Financial Services",
    client: "73strings"
  },
  {
    title: "Predictive Maintenance System",
    description: "Implemented an AI-driven predictive maintenance solution for a global automotive manufacturer, reducing downtime by 47% and maintenance costs by $3.2M annually.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop",
    industry: "Manufacturing",
    client: "Mercedes"
  },
  {
    title: "Patient Outcome Prediction",
    description: "Created an AI model to predict patient outcomes and recommend optimal treatment plans, improving treatment efficacy by 28% and reducing hospital readmissions.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=600&auto=format&fit=crop",
    industry: "Healthcare",
    client: "Confidential"
  }
];
