import React from "react";

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:px-4 focus:py-2 focus:bg-forest focus:text-white focus:text-[13px] focus:font-body focus:tracking-wide"
    >
      Skip to main content
    </a>
  );
}
