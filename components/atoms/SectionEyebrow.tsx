import React from "react";

interface SectionEyebrowProps {
  children: React.ReactNode;
}

export function SectionEyebrow({ children }: SectionEyebrowProps) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="block w-6 h-px bg-forest-light" aria-hidden="true" />
      <span className="text-[11px] tracking-[0.15em] uppercase text-forest-light font-body">
        {children}
      </span>
    </div>
  );
}
