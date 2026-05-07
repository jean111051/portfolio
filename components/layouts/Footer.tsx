import React from "react";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-white/10 bg-forest text-white/90">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-[13px] sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:text-sm">
        <div>
          <p className="font-display text-xl text-white">&copy; {new Date().getFullYear()} Jean Richelle G. Gallego</p>
          <p className="mt-1 text-white/60">Makerspace Innovhub internship portfolio</p>
        </div>
        <a
          href="mailto:gjeanrichelle@gmail.com"
          className="inline-flex min-h-[44px] w-fit items-center rounded-md border border-white/15 px-4 py-2 text-[12px] uppercase tracking-[0.12em] text-white/80 transition-colors hover:border-gold-light hover:text-white"
        >
          Contact
        </a>
      </div>
    </footer>
  );
}
