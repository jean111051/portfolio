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

export interface LogFrontmatter {
  slug: string;
  week: string;
  title: string;
  date: string;
  excerpt: string;
}

export interface Log extends LogFrontmatter {
  content: MarkdownBlock[];
}

export interface Author {
  name: string;
  role: string;
  agency: string;
  degree: string;
  location: string;
  phone: string;
  email: string;
  avatar: string;
}

export type MarkdownBlock =
  | {
      type: "heading";
      level: 2 | 3;
      text: string;
    }
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "image";
      src: string;
      alt: string;
    };
