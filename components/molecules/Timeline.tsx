import React from "react";

interface TimelineItem {
  period: string;
  label: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <ol className="grid gap-3 sm:grid-cols-5" aria-label="Internship timeline">
      {items.map((item) => (
        <li key={item.period} className="relative rounded-md border border-white/15 bg-white/[0.08] p-4 text-[13px] leading-6 text-white/94">
          <span
            className="mb-3 block h-2 w-8 rounded-full bg-gold-light"
            aria-hidden="true"
          />
          <span className="block text-[11px] uppercase tracking-[0.12em] text-white/72">
            {item.period}
          </span>
          <span className="mt-1 block">
            {item.label}
          </span>
        </li>
      ))}
    </ol>
  );
}
