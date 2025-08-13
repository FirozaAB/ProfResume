export type Link = { label: string; url: string };

export type Job = {
  company: string;
  role: string;
  start: string; // ISO or "Jan 2023"
  end?: string;  // "Present" allowed
  bullets: string[];
  tech?: string[];
};

export type Project = {
  name: string;
  summary: string;
  links?: Link[];
  tech?: string[];
};

export type Education = {
  school: string;
  program: string;
  start: string;
  end: string;
};

export type Resume = {
  name: string;
  title: string;
  location?: string;
  email?: string;
  links?: Link[];       // LinkedIn, GitHub, Portfolio
  summary: string;
  skills: string[];     // flat list for quick scan
  experience: Job[];
  projects?: Project[];
  education?: Education[];
};
