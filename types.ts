
export interface KeyStat {
  id: string;
  label: string;
  value: string | number;
  icon?: string; // e.g., "fas fa-briefcase"
  suffix?: string; // e.g., "+" for "10+"
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  tagline?: string; 
  consultancyOfferSummary?: string; 
  email: string;
  linkedIn: string;
  googleScholar: string;
  orcid: string;
  professionalSummary: string;
  profileImageUrl: string;
  ssrnProfileUrl?: string;
  cvUrl?: string; 
  keyStats?: KeyStat[];
}

export enum PublicationType {
  Journal = "Peer-Reviewed Journal Articles",
  BookChapter = "Book Chapters",
  Conference = "Conference Papers",
  InProgress = "Communicated Research & Work in Progress",
  BookProposal = "Book Proposals (As Editor)",
  WorkingPaper = "Working Papers & Preprints", 
  Report = "Technical Reports & Monographs" 
}

export interface ImpactMetric {
  name: string; // e.g., "Journal Quartile", "Impact Factor", "Downloads"
  value: string | number;
  icon?: string; // e.g., "fas fa-star" for Q1
}

export interface Publication {
  id: string;
  type: PublicationType;
  authors: string;
  title: string;
  source: string; 
  year: number | string;
  details?: string; 
  doiLink?: string;
  link?: string; 
  status?: string; 
  summary?: string; 
  insightSnippet?: string;
  featuredImageUrl?: string;
  tags?: string[]; // e.g., ["Fintech", "Social Impact", "Quantitative"]
  impactMetrics?: ImpactMetric[]; // e.g., [{name: "Scopus Quartile", value: "Q1"}]
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  descriptionPoints: string[];
  icon?: string; 
}

export interface EducationItem {
  id: string;
  degree: string;
  specialization?: string;
  institution: string;
  location: string;
  period: string;
  thesisOrDissertation?: string;
  achievement?: string;
  verification?: string;
}

export interface Certification {
  id: string;
  name: string;
  institution: string;
  year: number | string;
  link?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[]; // Skills can be strings or objects for more detail e.g. { name: string, proficiency: number }
  icon?: string; 
  description?: string; // Optional short description for the category
}

export interface ContactLink {
  id: string;
  name: string;
  url: string;
  iconClass: string; 
}

export interface NavLink {
  id: string;
  name: string;
  path: string;
}

export interface ConsultancyService {
  id: string;
  title: string;
  description: string;
  targetAudience: string;
  iconClass: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  authorTitle: string;
  avatarUrl?: string; 
}
