import React from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/logs", label: "Logs" },
];

export function NavBar() {
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
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="inline-flex min-h-[44px] min-w-[44px] items-center rounded-md px-3.5 font-body text-[12px] uppercase tracking-[0.08em] text-ink-2 transition-colors duration-200 hover:bg-white hover:text-forest focus:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <details className="group md:hidden">
          <summary
            className="relative z-[1001] flex h-11 w-11 cursor-pointer list-none flex-col items-center justify-center gap-[5px] rounded-full border border-paper-3 bg-white shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-forest [&::-webkit-details-marker]:hidden"
            aria-label="Toggle menu"
          >
            <span className="block h-px w-5 bg-ink transition-transform duration-200 group-open:translate-y-[6px] group-open:rotate-45" />
            <span className="block h-px w-5 bg-ink transition-opacity duration-200 group-open:opacity-0" />
            <span className="block h-px w-5 bg-ink transition-transform duration-200 group-open:-translate-y-[6px] group-open:-rotate-45" />
          </summary>

          <div
            id="mobile-menu"
            className="fixed left-0 right-0 top-[60px] z-[999] h-[calc(100dvh-60px)] overflow-y-auto bg-paper px-5 py-6 shadow-2xl"
            aria-label="Mobile navigation"
          >
            <div className="mx-auto grid max-w-6xl gap-2">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex min-h-[52px] w-full items-center rounded-md border border-paper-3 bg-white px-4 font-body text-[0.95rem] uppercase tracking-[0.06em] text-ink-2 shadow-sm transition-colors duration-200 hover:text-forest focus:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </details>
      </nav>
    </header>
  );
}
