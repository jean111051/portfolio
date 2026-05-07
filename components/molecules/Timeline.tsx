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
        <li key={item.period} className="relative rounded-md border border-white/10 bg-white/[0.045] p-4 text-[13px] leading-6 text-white/88">
          <span
            className="mb-3 block h-2 w-8 rounded-full bg-gold-light"
            aria-hidden="true"
          />
          <span className="block text-[11px] uppercase tracking-[0.12em] text-white/50">
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
