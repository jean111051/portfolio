"use client";

import React from "react";
import type { ProjectFilterOption } from "@/types";

interface FilterBarProps {
  options: ProjectFilterOption[];
  active: ProjectFilterOption;
  onChange: (option: ProjectFilterOption) => void;
}

export function FilterBar({ options, active, onChange }: FilterBarProps) {
  return (
    <div
      className="mb-8 inline-flex flex-wrap gap-1 rounded-lg border border-paper-3 bg-white/70 p-1 shadow-sm"
      role="group"
      aria-label="Filter projects by category"
    >
      {options.map((option) => {
        const isActive =
          option.kind === active.kind && option.value === active.value;

        return (
        <button
          key={`${option.kind}-${option.value}`}
          onClick={() => onChange(option)}
          aria-pressed={isActive}
          className={`min-h-[38px] rounded-md px-4 py-2 text-[12px] tracking-[0.05em] font-body transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 ${
            isActive
              ? "bg-forest text-white shadow-sm"
              : "text-ink-2 hover:bg-paper hover:text-forest"
          }`}
        >
          <span className="sr-only">Category: </span>
          {option.label}
        </button>
        );
      })}
    </div>
  );
}
