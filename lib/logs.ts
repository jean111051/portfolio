import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Log, LogFrontmatter, MarkdownBlock } from "@/types";
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

  return {
    ...frontmatter,
    content: parseMarkdownBlocks(content),
  };
}

function parseMarkdownBlocks(content: string): MarkdownBlock[] {
  const blocks: MarkdownBlock[] = [];
  const lines = content.split(/\r?\n/);
  let paragraph: string[] = [];
  let listItems: string[] = [];

  function flushParagraph() {
    if (paragraph.length === 0) {
      return;
    }

    blocks.push({
      type: "paragraph",
      text: paragraph.join(" ").trim(),
    });
    paragraph = [];
  }

  function flushList() {
    if (listItems.length === 0) {
      return;
    }

    blocks.push({
      type: "list",
      items: listItems,
    });
    listItems = [];
  }

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed === "") {
      flushParagraph();
      flushList();
      continue;
    }

    const imageMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (imageMatch) {
      flushParagraph();
      flushList();
      blocks.push({
        type: "image",
        alt: imageMatch[1],
        src: decodeURI(imageMatch[2]),
      });
      continue;
    }

    if (trimmed.startsWith("### ")) {
      flushParagraph();
      flushList();
      blocks.push({
        type: "heading",
        level: 3,
        text: trimmed.replace(/^###\s+/, ""),
      });
      continue;
    }

    if (trimmed.startsWith("## ")) {
      flushParagraph();
      flushList();
      blocks.push({
        type: "heading",
        level: 2,
        text: trimmed.replace(/^##\s+/, ""),
      });
      continue;
    }

    if (trimmed.startsWith("- ")) {
      flushParagraph();
      listItems.push(trimmed.replace(/^-\s+/, ""));
      continue;
    }

    flushList();
    paragraph.push(trimmed);
  }

  flushParagraph();
  flushList();

  return blocks;
}
