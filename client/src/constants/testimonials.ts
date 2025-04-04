export type Testimonial = {
  quote: string;
  author: {
    name: string;
    title: string;
    image: string;
  };
};

export const testimonials: Testimonial[] = [
  {
    quote: "YashAI Solutions transformed our legacy systems with AI capabilities we didn't think were possible. The results exceeded our expectations, delivering significant ROI within the first quarter of implementation.",
    author: {
      name: "Michael Richardson",
      title: "CTO, Global Financial Group",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
    }
  },
  {
    quote: "The expertise and dedication of the YashAI team are unmatched. They didn't just deliver a solution; they became true partners in our digital transformation journey, ensuring we achieved maximum value.",
    author: {
      name: "Sarah Johnson",
      title: "VP of Innovation, Automotive Excellence",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=100&auto=format&fit=crop"
    }
  }
];
