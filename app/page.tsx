import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionEyebrow } from "@/components/atoms/SectionEyebrow";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { getAuthor } from "@/lib/author";
import { getAllProjects, getFeaturedProjects } from "@/lib/projects";
import { JsonLd, personJsonLd, websiteJsonLd } from "@/lib/seo";

const toolBadges = [
  {
    icon: "flutter",
    name: "Flutter",
    className: "left-[5%] top-[18%] border-[#294d78] text-[#294d78]",
  },
  {
    icon: "mongodb",
    name: "MongoDB",
    className: "right-[3%] top-[14%] border-[#142946] text-[#142946]",
  },
  {
    label: "Ai",
    name: "Illustrator",
    className: "right-[1%] bottom-[34%] border-[#f5822a] text-[#e85d1c]",
  },
  {
    label: "Xd",
    name: "Adobe XD",
    className: "left-[4%] bottom-[35%] border-[#e85d1c] text-[#e85d1c]",
  },
  {
    label: "JS",
    name: "JavaScript",
    className: "left-[18%] top-[48%] border-[#f5822a] text-[#142946]",
  },
];

function ToolBadgeIcon({ icon }: { icon?: string }) {
  if (icon === "flutter") {
    return (
      <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden="true">
        <path fill="#54c5f8" d="M18.1 3.2 5.4 15.9l3.9 3.9L25.9 3.2z" />
        <path fill="#01579b" d="m18.2 20.8-4 4 4 4h7.7l-7.7-8z" />
        <path fill="#29b6f6" d="m9.4 19.9 4 4L25.9 11.4h-7.8z" />
        <path fill="#084994" d="m14.2 24.8 4-4 3.9 4-3.9 4z" />
      </svg>
    );
  }

  if (icon === "mongodb") {
    return (
      <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden="true">
        <path
          fill="#142946"
          d="M16 2.7c2.8 3.4 6.2 8 6.2 13.1 0 5.4-2.8 9.7-6.2 13.5-3.4-3.8-6.2-8.1-6.2-13.5 0-5.1 3.4-9.7 6.2-13.1z"
        />
        <path fill="#e85d1c" d="M16 2.7v26.6c3.4-3.8 6.2-8.1 6.2-13.5 0-5.1-3.4-9.7-6.2-13.1z" opacity="0.55" />
        <path stroke="#ffffff" strokeLinecap="round" strokeWidth="1.35" d="M16 8.5v16.8" />
      </svg>
    );
  }

  return null;
}

export default function HomePage() {
  const author = getAuthor();
  const featured = getFeaturedProjects(3);
  const projects = getAllProjects();
  const skillCount = author.officeSkills.length;

  return (
    <>
      <JsonLd data={personJsonLd()} />
      <JsonLd data={websiteJsonLd()} />
      <section className="relative overflow-hidden px-5 py-8 sm:px-6 lg:py-10" aria-label="Hero">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-lg border border-paper-3 bg-white/88 p-6 shadow-[0_18px_55px_rgba(20,41,70,0.08)] sm:bg-white/76 sm:p-7 sm:backdrop-blur lg:p-8">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(400px,0.8fr)] lg:items-center">
              <div>
                <div className="mb-5 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-forest px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white">
                    Portfolio
                  </span>
                </div>

                <h1 className="max-w-[620px] font-display text-[3.1rem] leading-[0.97] text-ink sm:text-[3.8rem] lg:text-[4.35rem]">
                  Jean Richelle
                  <span className="block text-gold">Gallego</span>
                </h1>   

                <p className="mt-5 max-w-2xl text-[15px] leading-7 text-ink-2">
                  {author.profile}
                </p>

                <div className="mt-6 grid gap-3 border-y border-paper-3 py-4 text-[13px] text-ink-2 sm:grid-cols-3">
                  {[author.location, author.phone, author.email].map((value) => (
                    <address key={value} className="not-italic">
                      <span className="mb-2 block h-1 w-8 rounded-full bg-gold" aria-hidden="true" />
                      {value.includes("@") ? (
                        <a href={`mailto:${value}`} className="break-all transition-colors hover:text-forest">
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </address>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/work"
                    className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md bg-forest px-6 py-2.5 text-[12px] font-medium uppercase tracking-[0.08em] text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-forest-light"
                  >
                    View Work
                  </Link>
                </div>
              </div>

              <div className="relative min-h-[430px]">
                <div className="absolute inset-2 rounded-[2rem] bg-white/30 sm:bg-[radial-gradient(circle_at_72%_35%,rgba(41,77,120,0.28),transparent_25%),radial-gradient(circle_at_28%_78%,rgba(245,130,42,0.22),transparent_28%),radial-gradient(circle_at_58%_68%,rgba(20,41,70,0.13),transparent_30%)]" aria-hidden="true" />
                <div className="absolute bottom-16 right-[10%] hidden h-48 w-56 rounded-tl-full bg-[#cfeef5]/48 blur-sm sm:block" aria-hidden="true" />
                <div className="absolute bottom-16 right-[20%] hidden h-8 w-48 rounded-full bg-forest/16 blur-xl sm:block" aria-hidden="true" />
                <div className="relative mx-auto h-[430px] max-w-[540px]">
                  {toolBadges.map((tool) => (
                    <div
                      key={tool.name}
                      className={`absolute z-20 flex h-9 w-9 items-center justify-center rounded-md border bg-white/76 text-[12px] font-semibold shadow-[0_8px_18px_rgba(47,143,216,0.11)] backdrop-blur ${tool.className}`}
                      aria-hidden="true"
                    >
                      {"icon" in tool ? <ToolBadgeIcon icon={tool.icon} /> : tool.label}
                    </div>
                  ))}

                  <div className="absolute bottom-[82px] right-[5%] z-10 h-[88%] w-[70%]">
                    <Image
                      src={author.avatar}
                      alt="Professional portrait of Jean Richelle G. Gallego"
                      fill
                      sizes="(min-width: 1024px) 420px, 92vw"
                      className="object-contain object-bottom saturate-105 drop-shadow-[0_18px_24px_rgba(20,41,70,0.18)]"
                    />
                  </div>

                  <div className="absolute bottom-0 left-[8%] right-[8%] z-40 grid grid-cols-3 gap-2 rounded-lg border border-white/80 bg-white/96 p-3 shadow-[0_14px_38px_rgba(20,41,70,0.16)] backdrop-blur">
                    {[
                      { num: projects.length, label: "Projects" },
                      { num: skillCount, label: "Skills" },
                      { label: author.graduationDate, sublabel: "Graduated" },
                    ].map(({ num, label, sublabel }) => (
                      <div key={label} className="text-center">
                        {typeof num === "number" ? (
                          <>
                            <p className="font-display text-3xl leading-none text-forest">{num}</p>
                            <p className="mt-1 text-[10px] uppercase tracking-[0.1em] text-ink-3">{label}</p>
                          </>
                        ) : (
                          <>
                            <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.14em] text-ink-3">
                              {label}
                            </p>
                            <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-ink-3">
                              {sublabel}
                            </p>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="mt-10 rounded-lg bg-forest p-5 text-white shadow-[0_18px_60px_rgba(20,41,70,0.14)] sm:p-6">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/80">
                Professional Snapshot
              </p>
              <Link
                href="/work"
                className="inline-flex min-h-[44px] min-w-[44px] w-fit items-center rounded-md border border-white/20 px-4 text-[11px] uppercase tracking-[0.1em] text-white/95 transition-colors hover:border-gold-light hover:bg-white/10"
              >
                Open Work
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["Education", `${author.degree}, ${author.university}`],
                ["Graduated", author.graduationDate],
                ["Experience", author.experience[0]?.period ?? "2026"],
              ].map(([title, text]) => (
                <div key={title} className="rounded-md border border-white/15 bg-white/8 p-4">
                  <p className="text-[11px] uppercase tracking-[0.12em] text-gold-light">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-white/88">{text}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="px-5 pb-10 [content-visibility:auto] [contain-intrinsic-size:1px_280px] sm:px-6" aria-label="Portfolio focus areas">
        <div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-3">
          {[
            ["Office Support", "Documentation, record keeping, data entry, formatting, and organized digital files"],
            ["Computer Skills", "MS Word, Excel, Google Sheets, troubleshooting, installation, and database basics"],
            ["Technology", "Web and mobile app development exposure with AI-assisted tools and professional workflows"],
          ].map(([title, text]) => (
            <div key={title} className="rounded-lg border border-paper-3 bg-white/70 p-5 shadow-sm">
              <div>
                <h2 className="font-body text-[12px] font-medium uppercase tracking-[0.14em] text-forest">
                  {title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-ink-2">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-paper-3 bg-white/70 py-12 [content-visibility:auto] [contain-intrinsic-size:1px_760px] lg:py-14" aria-label="Featured projects">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <SectionEyebrow>Highlights</SectionEyebrow>
              <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
                Featured <em className="not-italic text-gold">Projects</em>
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex min-h-[44px] w-fit items-center justify-center rounded-md border-[1.5px] border-forest bg-white px-6 py-3 text-[13px] font-medium uppercase tracking-[0.08em] text-forest transition-all hover:-translate-y-0.5 hover:bg-forest hover:text-white"
            >
              View All Work
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-paper-3 bg-paper/60 px-5 py-12 [content-visibility:auto] [contain-intrinsic-size:1px_980px] sm:px-6 lg:py-16" aria-label="Professional background">
        <div className="mx-auto grid max-w-6xl gap-9 lg:grid-cols-[0.42fr_1fr] lg:items-start">
          <div>
            <SectionEyebrow>Background</SectionEyebrow>
            <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
              Experience And <em className="not-italic text-gold">Education</em>
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-ink-2">
              CV details organized for employers who need a quick view of training, practical experience, and workplace readiness.
            </p>
          </div>

          <div className="grid gap-5">
            {author.experience.map((item) => (
              <article key={`${item.role}-${item.organization}`} className="group border border-paper-3 bg-white/86 p-5 shadow-[0_14px_34px_rgba(20,41,70,0.07)] transition-all hover:-translate-y-0.5 hover:border-forest/25 hover:bg-white">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-forest/15 bg-paper px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-forest">
                    {item.period}
                  </span>
                  <span className="text-[12px] uppercase tracking-[0.12em] text-ink-3">{item.organization}</span>
                </div>
                <h3 className="font-body text-[13px] font-semibold uppercase tracking-[0.12em] text-ink">
                  {item.role}
                </h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-ink-2">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}

            <div className="grid gap-5 sm:grid-cols-3">
              {author.education.map((item) => (
                <article key={`${item.qualification}-${item.year}`} className="group border border-paper-3 bg-white/86 p-5 shadow-[0_14px_34px_rgba(20,41,70,0.07)] transition-all hover:-translate-y-0.5 hover:border-forest/25 hover:bg-white">
                  <p className="mb-3 w-fit rounded-full border border-forest/15 bg-paper px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-forest">
                    {item.year}
                  </p>
                  <h3 className="font-body text-[13px] font-semibold uppercase tracking-[0.12em] text-ink">
                    {item.qualification}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-ink-2">{item.institution}</p>
                  <p className="mt-1 text-[13px] leading-6 text-ink-3">{item.location}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 [content-visibility:auto] [contain-intrinsic-size:1px_720px] sm:px-6 lg:py-14" aria-label="Portfolio summary">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionEyebrow>Summary</SectionEyebrow>
            <h2 className="font-display text-3xl leading-tight text-forest sm:text-4xl">
              Practical, organized, and ready to contribute.
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-ink-2">
              Fluent in Filipino and English, with a responsible work style, strong attention to detail, and openness to feedback.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Office And Computer Skills", author.officeSkills.join(", ")],
              ["Key Skills", author.keySkills.join(", ")],
              ["Languages", author.languages.join(", ")],
              ["Project Experience", "Disaster-response UI prototypes, role-based DeskDine workflows, responsive client pages, SEO checks, and mobile app exposure."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-lg border border-paper-3 bg-white p-6 shadow-sm">
                <p className="text-[11px] uppercase tracking-[0.16em] text-gold">{title}</p>
                <p className="mt-4 text-[15px] leading-7 text-ink-2">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
