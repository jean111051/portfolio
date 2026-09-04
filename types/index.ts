export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  completionDate: string;
  category: ProjectCategory;
  repositoryUrl?: string;
  repositoryLinks?: ProjectRepositoryLink[];
}

export interface ProjectRepositoryLink {
  label: string;
  url: string;
}

export type ProjectCategory = "Frontend" | "SEO Audit" | "Research" | "Backend" | "Design";

export type ProjectFilterKind = "category" | "techStack";

export interface ProjectFilterOption {
  kind: ProjectFilterKind;
  label: string;
  value: string;
}

export interface Author {
  name: string;
  role: string;
  agency: string;
  profile: string;
  degree: string;
  university: string;
  graduationDate: string;
  education: EducationItem[];
  experience: ExperienceItem[];
  officeSkills: string[];
  keySkills: string[];
  languages: string[];
  location: string;
  phone: string;
  email: string;
  avatar: string;
}

export interface EducationItem {
  qualification: string;
  institution: string;
  location: string;
  year: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  highlights: string[];
}
