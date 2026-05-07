import type { Author } from "@/types";
import authorData from "@/data/author.json";
import { parseAuthor } from "@/lib/validation";

export function getAuthor(): Author {
  return parseAuthor(authorData);
}
