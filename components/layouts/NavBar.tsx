"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/logs", label: "Logs" },
];

export function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-[1000] border-b border-paper-3 bg-[#f7f9fc]/95 shadow-sm backdrop-blur-xl">
      <nav
        className="mx-auto flex h-[60px] max-w-6xl items-center justify-between px-5 sm:px-6"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="inline-flex min-h-[44px] items-center font-display text-[1.45rem] text-forest transition-colors hover:text-forest-light focus:outline-none focus-visible:underline"
          aria-label="Jean Richelle Gallego home"
        >
          Jean Richelle G.
        </Link>

        <ul className="hidden list-none gap-2 md:flex">
          {navLinks.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);

            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`inline-flex min-h-[44px] min-w-[44px] items-center rounded-md px-3.5 text-[12px] font-body uppercase tracking-[0.08em] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                    isActive ? "bg-forest text-white" : "text-ink-2 hover:bg-white hover:text-forest"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          className="relative z-[1001] flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-paper-3 bg-white shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-forest md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-5 h-px bg-ink transition-all duration-200 ${
              menuOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-ink transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-ink transition-all duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed left-0 right-0 top-[60px] z-[999] h-[calc(100dvh-60px)] overflow-y-auto bg-paper px-5 py-6 shadow-2xl md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {navLinks.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);

            return (
              <Link
                key={href}
                href={href}
                className={`mx-auto flex min-h-[52px] w-full max-w-6xl items-center rounded-md border border-paper-3 px-4 text-[0.95rem] font-body uppercase tracking-[0.06em] shadow-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                  isActive ? "bg-forest text-white" : "bg-white text-ink-2 hover:text-forest"
                }`}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
