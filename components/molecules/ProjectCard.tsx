import React from "react";
import { Badge } from "@/components/atoms/Badge";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const repositoryLinks =
    project.repositoryLinks ??
    (project.repositoryUrl
      ? [
          {
            label: "GitHub Repo",
            url: project.repositoryUrl,
          },
        ]
      : []);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-paper-3 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-forest/20 hover:shadow-[0_24px_80px_rgba(26,58,42,0.12)]">
      <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-forest via-forest-light to-gold transition-transform duration-200 group-hover:scale-x-100" />
      <div className="mb-5 flex items-start justify-between gap-4">
        <p className="text-[10px] tracking-[0.12em] uppercase text-forest-light font-body">
          {project.category}
        </p>
        <p className="text-[11px] text-ink-3 text-right">{project.completionDate}</p>
      </div>
      <h3 className="mb-3 font-display text-2xl leading-tight text-ink">
        {project.title}
      </h3>
      <p className="mb-6 text-[14px] leading-7 text-ink-2">
        {project.description}
      </p>
      <div className="mt-auto border-t border-paper-3 pt-4">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} label={tech} />
          ))}
        </div>
        {repositoryLinks.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {repositoryLinks.map((link) => (
              <a
                key={`${project.id}-${link.label}`}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center justify-center rounded-md bg-forest px-4 py-2 text-[12px] font-medium uppercase tracking-[0.08em] text-white transition-all hover:-translate-y-0.5 hover:bg-forest-light focus:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2"
                aria-label={`Open ${link.label} for ${project.title}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
