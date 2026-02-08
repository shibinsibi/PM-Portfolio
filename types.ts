
export interface CaseStudy {
  id: string;
  title: string;
  tagline: string;
  category: string;
  image: string;
  problem: string;
  objective: string;
  approach: string[];
  impact: string[];
  metrics: { label: string; value: string }[];
  content: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Technical' | 'Product' | 'Leadership' | 'Certifications';
}

export interface Job {
  company: string;
  role: string;
  period: string;
  description: string[];
}
