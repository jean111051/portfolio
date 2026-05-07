import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type { Log, LogFrontmatter } from "@/types";
import { parseLogFrontmatter } from "@/lib/validation";

const contentDir = path.join(process.cwd(), "content");

export function getAllLogSlugs(): string[] {
  const files = fs.readdirSync(contentDir);
  return files
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllLogs(): LogFrontmatter[] {
  const slugs = getAllLogSlugs();
  return slugs
    .map((slug) => {
      const filePath = path.join(contentDir, `${slug}.md`);
      const raw = fs.readFileSync(filePath, "utf8");
      const { data } = matter(raw);
      return parseLogFrontmatter(data, slug);
    })
    .sort((a, b) => a.slug.localeCompare(b.slug));
}

export async function getLogBySlug(slug: string): Promise<Log> {
  const filePath = path.join(contentDir, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = parseLogFrontmatter(data, slug);

  const processed = await remark().use(html).process(content);
  const htmlContent = processed.toString();

  return {
    ...frontmatter,
    content: htmlContent,
  };
}
