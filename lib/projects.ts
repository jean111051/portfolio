import projectsData from "@/data/projects.json";
import type { Project, ProjectFilterOption } from "@/types";
import { parseProjects } from "@/lib/validation";

export function getAllProjects(): Project[] {
  return parseProjects(projectsData);
}

export function getProjectsByCategory(category: Project["category"]): Project[] {
  return getAllProjects().filter((p) => p.category === category);
}

export function getAllCategories(): string[] {
  const cats = getAllProjects().map((p) => p.category);
  return ["All", ...Array.from(new Set(cats))];
}

export function getAllTechStacks(): string[] {
  const tech = getAllProjects().flatMap((project) => project.techStack);
  return Array.from(new Set(tech)).sort((a, b) => a.localeCompare(b));
}

export function getProjectFilterOptions(): ProjectFilterOption[] {
  const highlightedTech = ["Node.js", "Flutter", "MongoDB", "Tailwind", "HTML5"];

  return [
    { kind: "category", label: "All", value: "All" },
    ...getAllCategories()
      .filter((category) => category !== "All")
      .map((category) => ({
        kind: "category" as const,
        label: category,
        value: category,
      })),
    ...highlightedTech
      .filter((tech) => getAllTechStacks().includes(tech))
      .map((tech) => ({
        kind: "techStack" as const,
        label: tech,
        value: tech,
      })),
  ];
}

export function getFeaturedProjects(count = 3): Project[] {
  return getAllProjects().slice(0, count);
}
