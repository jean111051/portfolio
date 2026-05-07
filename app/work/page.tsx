import type { Metadata } from "next";
import { getAllProjects, getProjectFilterOptions } from "@/lib/projects";
import { SectionEyebrow } from "@/components/atoms/SectionEyebrow";
import { WorkGallery } from "./WorkGallery";

export const metadata: Metadata = {
  title: "Work",
  description:
    "A filterable gallery of Makerspace Innovhub internship activities covering frontend development, SEO checks, research, and backend integration.",
};

export default function WorkPage() {
  const projects = getAllProjects();
  const filterOptions = getProjectFilterOptions();

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <SectionEyebrow>All Activities</SectionEyebrow>
      <h1 className="font-display text-[2.2rem] text-ink leading-snug mb-10">
        Work <em className="not-italic text-gold">Gallery</em>
      </h1>
      <WorkGallery projects={projects} filterOptions={filterOptions} />
    </div>
  );
}
