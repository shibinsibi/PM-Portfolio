import { CaseStudy, Job, Skill } from './types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'vitafit-pulse',
    title: 'VitaFit Pulse',
    tagline: 'Boosting Retention through Community & Habit-Forming Fitness',
    category: 'Retention & Growth',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
    problem: 'Users are not returning consistently due to declining motivation and weak personal connection with instructors, with Day-30 retention stalling at 8-12%.',
    objective: 'To increase repeat usage by introducing gamified "Buddy Streaks" and "Trainer Circles" that strengthen social accountability.',
    approach: [
      'Identified JTBD: Beginners need non-judgmental environments; regulars need social motivation.',
      'Designed "Buddy Streaks" with lightweight chat to solve the isolation of on-demand workouts.',
      'Proposed "Trainer Circles" with name-based recognition to fix the lack of instructor connection.',
      'Mapped functional flows for streak recovery mechanisms and peer nudges.'
    ],
    impact: [
      'Targeted 70-85% churn risk reduction for social-motivated user segments.',
      'Projected increase in sessions per user per week through habit-building mechanics.',
      'Improved CSAT from 6.2 to 8.3/10 through personalized trainer shoutouts.',
      'Mitigated "February churn cliff" by establishing community bonds in Week 4.'
    ],
    metrics: [
      { label: 'Churn Mitigation', value: '85%' },
      { label: 'Day-30 Retention', value: '12%' },
      { label: 'CSAT Target', value: '8.3' }
    ],
    content: 'A deep dive into fitness habit formation, focusing on social accountability as the primary lever for long-term LTV.'
  },
  {
    id: 'campedge-market',
    title: 'CampEdge: Trust Layer Strategy',
    tagline: 'Unblocking First-Time Bookings in India\'s Camping Market',
    category: 'Market Research',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=800',
    problem: '75% of potential users cite safety and trust as primary barriers to booking first-time camping experiences.',
    objective: 'Identify barriers to adoption and define a product-market fit strategy for a nascent $2B adventure travel segment.',
    approach: [
      'Conducted TAM/SAM/SOM analysis identifying a $600M-$1.2B serviceable market.',
      'Analyzed competitive landscape (Thrillophilia, Airbnb) to find gaps in "camping-first" trust signals.',
      'Synthesized quantitative survey data (8-person cohort) identifying discovery vs. safety friction.',
      'Strategy recommendation: Implement a "Trust Layer" with verified organizer badges and bundled logistics.'
    ],
    impact: [
      'Identified safety badges as a "Must-Have" for 75% of user adoption.',
      'Segmented high-value "Beginner Weekend Pack" for logistics-sensitive users.',
      'Designed organizer tools (calendar sync, guaranteed payouts) to stabilize supply.',
      'Validated 4.5/5 "Recommend Score" indicating strong promoter sentiment.'
    ],
    metrics: [
      { label: 'Safety Concern', value: '75%' },
      { label: 'Market TAM', value: '$14.4B' },
      { label: 'Recommend Score', value: '4.5/5' }
    ],
    content: 'Strategic market analysis focused on trust-based conversion optimization for the Indian adventure tourism sector.'
  },
  {
    id: 'zomato-engagement',
    title: 'Zomato Engagement & Retention',
    tagline: 'RICE-Driven Prioritization for Price-Sensitive Users',
    category: 'Product Strategy',
    image: 'https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&q=80&w=800',
    problem: 'Price-sensitive users in metro tiers feel overwhelmed by hidden charges and cluttered UI, leading to app-switching behavior.',
    objective: 'Prioritize feature development to improve engagement and trust for frequent dinner/late-night orderers.',
    approach: [
      'Defined personas: Price-Sensitive (Pune) vs. Quality-Focused (Ahmedabad).',
      'Solution Generation: Transparent pricing at checkout, price comparison, and reorder favorites.',
      'Applied RICE Prioritization: "Reorder Favorites" scored 12.15 vs. "Reward Points" at 3.2.',
      'Proposed "Verified Packaging" badges to restore trust for family-oriented orders.'
    ],
    impact: [
      'Maximized engineering effort by identifying "Reorder Favorites" as highest ROI.',
      'Proposed transparent pricing to reduce order abandonment due to hidden fees.',
      'Identified "Dish Price Comparison" as a key tool for quick decision-making.',
      'Streamlined UI to reduce the 1-hour "unpredictable delivery" frustration.'
    ],
    metrics: [
      { label: 'RICE Top Score', value: '12.15' },
      { label: 'Confidence', value: '90%' },
      { label: 'Effort Score', value: '2/10' }
    ],
    content: 'Applying the RICE framework to complex marketplace problems, balancing user trust with technical effort.'
  },
  {
    id: 'yummiweek-prototype',
    title: 'Meal Planning: YummiWeek',
    tagline: 'Solving Decision Fatigue through Pantry-Integrated UX',
    category: 'UX & Prototyping',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800',
    problem: 'Busy professionals (Sneha) and fitness enthusiasts (Rahul) struggle with meal stress, wasted groceries, and 30-minute weekday constraints.',
    objective: 'Develop a functional prototype that automates meal planning based on existing pantry items and dietary needs.',
    approach: [
      'Mapped user flows from "Dietary Preferences" to "Pantry Setup" to "Automated Shopping List".',
      'Implemented "Cooking Time Sliders" (30 min vs 60 min) to handle weekday vs weekend constraints.',
      'Iterated based on feedback to add a "Nutritional Auto-Calculator" for calorie visibility.',
      'Integrated a "Pantry Visibility" engine to reduce overspending on duplicate ingredients.'
    ],
    impact: [
      'High user interest in real mobile app experience after prototype testing.',
      'Validation of "Nutritional Calculator" as a high-value, paid feature addition.',
      'Significant reduction in mental exhaustion reported for weekly meal prep.',
      'Improved grocery ROI by prioritizing recipes using near-expiry pantry items.'
    ],
    metrics: [
      { label: 'Feature ROI', value: 'High' },
      { label: 'Prep Time', value: '-40%' },
      { label: 'Engagement', value: 'Strong' }
    ],
    content: 'A hands-on case study in prototyping and user-centric design to solve everyday logistical friction.'
  },
  {
    id: 'rpb-optimization',
    title: 'Amazon AOV Strategy: Product Thinking',
    tagline: 'Applying Product Thinking to Increase Bundle Adoption',
    category: 'AOV & Strategy',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
    problem: 'Low Relevant Product Bundle (RPB) adoption due to poor visibility, lack of perceived value, and irrelevant accessories.',
    objective: 'Identify strategic product opportunities to increase bundle adoption and improve Average Order Value (AOV).',
    approach: [
      'Applied First-Principles thinking to break down why users skip bundles (Visibility, Value, Relevance).',
      'Used JTBD framework: "Help me start using my laptop immediately without extra shopping."',
      'Proposed "Build Your Own Bundle" (BYOB) feature to give users control over accessories.',
      'Designed PDP placement for "Personalized Combos" to highlight clear savings.'
    ],
    impact: [
      'Solutioned direct savings visibility to fix the "No extra benefit" perception.',
      'Identified Tier 1 city preference for branded vs. generic accessories.',
      'Proposed separate "Bundle Feedback" section to build trust via social proof.',
      'Improved AOV trajectory by shifting from static bundles to personalized modules.'
    ],
    metrics: [
      { label: 'Projected AOV', value: '+15%' },
      { label: 'Visibility Score', value: 'High' },
      { label: 'Trust Factor', value: 'Strong' }
    ],
    content: 'Strategic product thinking applied to e-commerce checkout flows and psychological value triggers.'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Product Strategy', level: 90, category: 'Product' },
  { name: 'User Research (JTBD)', level: 85, category: 'Product' },
  { name: 'RICE Prioritization', level: 95, category: 'Product' },
  { name: 'PRD Documentation', level: 90, category: 'Product' },
  { name: 'Stakeholder Management', level: 90, category: 'Product' },
  { name: 'Cross-functional Teams', level: 85, category: 'Product' },
  { name: 'Salesforce Commerce', level: 80, category: 'Technical' },
  { name: 'SQL & Data Analysis', level: 75, category: 'Technical' },
  { name: 'JIRA / Agile', level: 95, category: 'Technical' },
  { name: 'Splunk Monitoring', level: 70, category: 'Technical' },
  { name: 'Salesforce SFRA Certified', level: 100, category: 'Certifications' },
  { name: 'Akeneo Foundation Certified', level: 100, category: 'Certifications' },
  { name: 'AI Product Management', level: 100, category: 'Certifications' }
];

export const EXPERIENCE: Job[] = [
  {
    company: 'Zensar Technologies',
    role: 'Software Engineer',
    period: 'Sept 2022 – Present',
    description: [
      'Delivered production support for luxury brands Michael Kors and Versace.',
      'Optimized workflows reducing repetitive tasks through process automation.',
      'Incident management and root cause analysis using JIRA/Splunk.'
    ]
  },
  {
    company: 'MIT University',
    role: 'PGDM MBA in Information Technology',
    period: 'Aug 2024 – Feb 2026',
    description: [
      'Lead Researcher for "AI-Based IT Helpdesk Automation in Organization" project.',
      'Applied technical foundations to consumer market research and business strategy.',
      'Completed deep-dive studies into habit formation and user retention.'
    ]
  },
  {
    company: 'Savitribai Phule Pune University',
    role: 'B.E Electronics & Telecommunication',
    period: 'Aug 2018 – June 2022',
    description: [
      'Academic focus on embedded systems, telecommunications, and software logic.',
      'Final year project involving hardware-software integration.',
      'Member of university technical society and hackathon organizer.'
    ]
  }
];