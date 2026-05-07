import type { Author, LogFrontmatter, Project, ProjectCategory } from "@/types";

const projectCategories: ProjectCategory[] = [
  "Frontend",
  "SEO Audit",
  "Research",
  "Backend",
  "Design",
];

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function assertString(value: unknown, field: string): string {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`${field} must be a non-empty string.`);
  }

  return value;
}

function assertStringArray(value: unknown, field: string): string[] {
  if (
    !Array.isArray(value) ||
    value.length === 0 ||
    !value.every((item) => typeof item === "string" && item.trim() !== "")
  ) {
    throw new Error(`${field} must be a non-empty string array.`);
  }

  return value;
}

function parseRepositoryLinks(
  value: unknown,
  field: string,
): Project["repositoryLinks"] {
  if (value === undefined) {
    return undefined;
  }

  if (!Array.isArray(value)) {
    throw new Error(`${field} must be an array when provided.`);
  }

  return value.map((item, index) => {
    const prefix = `${field}[${index}]`;

    if (!isRecord(item)) {
      throw new Error(`${prefix} must be an object.`);
    }

    return {
      label: assertString(item.label, `${prefix}.label`),
      url: assertString(item.url, `${prefix}.url`),
    };
  });
}

function assertProjectCategory(value: unknown, field: string): ProjectCategory {
  if (
    typeof value !== "string" ||
    !projectCategories.includes(value as ProjectCategory)
  ) {
    throw new Error(`${field} must be one of: ${projectCategories.join(", ")}.`);
  }

  return value as ProjectCategory;
}

export function parseProjects(value: unknown): Project[] {
  if (!Array.isArray(value)) {
    throw new Error("data/projects.json must export an array.");
  }

  return value.map((item, index) => {
    const prefix = `projects[${index}]`;

    if (!isRecord(item)) {
      throw new Error(`${prefix} must be an object.`);
    }

    if (typeof item.id !== "number") {
      throw new Error(`${prefix}.id must be a number.`);
    }

    return {
      id: item.id,
      title: assertString(item.title, `${prefix}.title`),
      description: assertString(item.description, `${prefix}.description`),
      techStack: assertStringArray(item.techStack, `${prefix}.techStack`),
      completionDate: assertString(
        item.completionDate,
        `${prefix}.completionDate`,
      ),
      category: assertProjectCategory(item.category, `${prefix}.category`),
      repositoryUrl:
        typeof item.repositoryUrl === "string" && item.repositoryUrl.trim() !== ""
          ? item.repositoryUrl
          : undefined,
      repositoryLinks: parseRepositoryLinks(
        item.repositoryLinks,
        `${prefix}.repositoryLinks`,
      ),
    };
  });
}

export function parseLogFrontmatter(
  value: unknown,
  slug: string,
): LogFrontmatter {
  if (!isRecord(value)) {
    throw new Error(`content/${slug}.md frontmatter must be an object.`);
  }

  const frontmatterSlug = assertString(
    value.slug,
    `content/${slug}.md slug`,
  );

  if (frontmatterSlug !== slug) {
    throw new Error(
      `content/${slug}.md slug must match the file name "${slug}".`,
    );
  }

  return {
    slug: frontmatterSlug,
    week: assertString(value.week, `content/${slug}.md week`),
    title: assertString(value.title, `content/${slug}.md title`),
    date: assertString(value.date, `content/${slug}.md date`),
    excerpt: assertString(value.excerpt, `content/${slug}.md excerpt`),
  };
}

export function parseAuthor(value: unknown): Author {
  if (!isRecord(value)) {
    throw new Error("data/author.json must export an object.");
  }

  return {
    name: assertString(value.name, "author.name"),
    role: assertString(value.role, "author.role"),
    agency: assertString(value.agency, "author.agency"),
    degree: assertString(value.degree, "author.degree"),
    location: assertString(value.location, "author.location"),
    phone: assertString(value.phone, "author.phone"),
    email: assertString(value.email, "author.email"),
    avatar: assertString(value.avatar, "author.avatar"),
  };
}
