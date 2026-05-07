import type { Project, ProjectFilterOption } from "@/types";

export const allProjectsFilter: ProjectFilterOption = {
  kind: "category",
  label: "All",
  value: "All",
};

export function filterProjects(
  projects: Project[],
  filter: ProjectFilterOption,
): Project[] {
  if (filter.value === allProjectsFilter.value) {
    return projects;
  }

  if (filter.kind === "category") {
    return projects.filter((project) => project.category === filter.value);
  }

  return projects.filter((project) => project.techStack.includes(filter.value));
}
