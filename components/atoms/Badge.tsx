import React from "react";

interface BadgeProps {
  label: string;
  variant?: "default" | "accent";
}

export function Badge({ label, variant = "default" }: BadgeProps) {
  const base =
    "inline-block text-[11px] px-2.5 py-1 border font-body tracking-wide";
  const variants = {
    default: "bg-paper-2 text-ink-3 border-paper-3",
    accent: "bg-forest text-white border-forest",
  };
  return <span className={`${base} ${variants[variant]}`}>{label}</span>;
}
