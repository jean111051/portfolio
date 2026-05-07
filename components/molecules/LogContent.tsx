import Image from "next/image";
import type { ReactNode } from "react";
import type { MarkdownBlock } from "@/types";

interface LogContentProps {
  blocks: MarkdownBlock[];
}

export function LogContent({ blocks }: LogContentProps) {
  return (
    <div className="prose-log">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          const Heading = block.level === 2 ? "h2" : "h3";
          return <Heading key={`${block.type}-${index}`}>{block.text}</Heading>;
        }

        if (block.type === "list") {
          return (
            <ul key={`${block.type}-${index}`}>
              {block.items.map((item) => (
                <li key={item}>{renderInlineMarkdown(item)}</li>
              ))}
            </ul>
          );
        }

        if (block.type === "image") {
          return (
            <figure
              key={`${block.type}-${block.src}`}
              className="log-image-frame"
            >
              <Image
                src={block.src}
                alt={block.alt}
                fill
                sizes="(min-width: 720px) 50vw, 100vw"
                className="object-contain"
              />
            </figure>
          );
        }

        return <p key={`${block.type}-${index}`}>{renderInlineMarkdown(block.text)}</p>;
      })}
    </div>
  );
}

function renderInlineMarkdown(text: string): ReactNode[] {
  return text.split(/(`[^`]+`)/g).map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={`${part}-${index}`}>{part.slice(1, -1)}</code>;
    }

    return part;
  });
}
