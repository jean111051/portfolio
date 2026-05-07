import React from "react";
import Link from "next/link";
import type { LogFrontmatter } from "@/types";

interface LogCardProps {
  log: LogFrontmatter;
}

export function LogCard({ log }: LogCardProps) {
  return (
    <Link
      href={`/logs/${log.slug}`}
      className="group grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 sm:gap-6 py-6 border-b border-paper-3 hover:pl-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2"
    >
      <div>
        <p className="text-[11px] tracking-[0.12em] uppercase text-forest-light mb-1 font-body">
          {log.week}
        </p>
        <h3 className="font-display text-[1.08rem] text-ink mb-1.5 leading-snug group-hover:text-forest transition-colors duration-200">
          {log.title}
        </h3>
        <p className="text-[13px] text-ink-2 leading-relaxed">{log.excerpt}</p>
      </div>
      <div className="sm:text-right flex sm:block items-center gap-2 flex-shrink-0 pt-0.5">
        <p className="text-[12px] text-ink-3 whitespace-nowrap">{log.date}</p>
        <span
          className="text-ink-3 text-lg group-hover:translate-x-1 group-hover:text-forest transition-all duration-200 inline-block"
          aria-hidden="true"
        >
          &rarr;
        </span>
      </div>
    </Link>
  );
}
