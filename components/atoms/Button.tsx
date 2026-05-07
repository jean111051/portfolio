import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "min-h-[44px] min-w-[44px] px-6 py-2.5 text-[13px] tracking-[0.05em] font-body font-medium transition-all duration-200 cursor-pointer border focus:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2";
  const variants = {
    primary:
      "bg-forest text-white border-forest hover:bg-forest-light active:scale-[0.98]",
    outline:
      "bg-transparent text-forest border-forest hover:bg-forest hover:text-white active:scale-[0.98]",
    ghost:
      "bg-transparent text-ink-2 border-transparent hover:text-forest active:scale-[0.98]",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
