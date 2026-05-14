"use client";

import React, { useState } from "react";
import { FilterBar } from "@/components/molecules/FilterBar";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { allProjectsFilter, filterProjects } from "@/lib/projectFilters";
import type { Project, ProjectFilterOption } from "@/types";

function hasRepository(project: Project) {
  return Boolean(project.repositoryUrl ?? project.repositoryLinks?.length);
}

function sortProjectsByRepository(projects: Project[]) {
  return [...projects].sort((a, b) => {
    if (hasRepository(a) === hasRepository(b)) {
      return 0;
    }

    return hasRepository(a) ? -1 : 1;
  });
}

function useProjectFilter(
  projects: Project[],
  initial: ProjectFilterOption = allProjectsFilter,
) {
  const [active, setActive] = useState<ProjectFilterOption>(initial);
  const filtered = sortProjectsByRepository(filterProjects(projects, active));

  return { active, setActive, filtered };
}

interface WorkGalleryProps {
  projects: Project[];
  filterOptions: ProjectFilterOption[];
}

export function WorkGallery({ projects, filterOptions }: WorkGalleryProps) {
  const { active, setActive, filtered } = useProjectFilter(projects);

  return (
    <>
      <FilterBar options={filterOptions} active={active} onChange={setActive} />
      {filtered.length === 0 ? (
        <p className="text-ink-3 text-[14px]">
          No projects found for this filter.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </>
  );
}
