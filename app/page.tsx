import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionEyebrow } from "@/components/atoms/SectionEyebrow";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { Timeline } from "@/components/molecules/Timeline";
import { getAuthor } from "@/lib/author";
import { getAllProjects, getFeaturedProjects } from "@/lib/projects";
import { getAllLogs } from "@/lib/logs";
import { JsonLd, personJsonLd, websiteJsonLd } from "@/lib/seo";

const timelineItems = [
  { period: "Feb 9-20", label: "Orientation, SILAG page, SEO checks" },
  { period: "Feb 23-26", label: "Node.js practice and hackathon prep" },
  { period: "Mar 2-13", label: "MDRRMO web prototype and mobile version" },
  { period: "Mar 16-27", label: "Supabase, MongoDB, alerts, and tracking" },
  { period: "Apr 6-10", label: "Final UI polish and project wrap-up" },
];

const narrativeTimelineItems = [
  {
    period: "Feb 9-13",
    title: "Onboarding And First Frontend Tasks",
    summary:
      "Started deployment at Makerspace Innovhub, set up Next.js, explored the framework, created the SILAG marketing page, practiced GitHub, and began client page creation.",
  },
  {
    period: "Feb 14-20",
    title: "SEO Checks And Client Templates",
    summary:
      "Joined the GitHub and vibe-coding seminar, reviewed assigned websites for media queries, SEO metadata, map links, internal links, headings, and descriptions, then continued model and comparison page templates.",
  },
  {
    period: "Feb 23-26",
    title: "Node.js Practice And Hackathon Prep",
    summary:
      "Improved familiarity with the Node.js environment, completed a team assignment in the RA project, and prepared for the upcoming hackathon work.",
  },
  {
    period: "Mar 2-6",
    title: "MDRRMO Research And Web Prototype",
    summary:
      "Researched Disaster Response and Emergency Verification, created the MVP, hosted the prototype, prepared project presentations, added an admin dashboard, and fixed early hosting bugs.",
  },
  {
    period: "Mar 9-13",
    title: "Mobile Version And API Access",
    summary:
      "Polished the MDRRMO web prototype, revised client templates, created the mobile version for Hack4Mapandan, configured API access, and enabled physical phone testing.",
  },
  {
    period: "Mar 16-27",
    title: "Database, Hosting, Alerts, And Tracking",
    summary:
      "Fixed database and button issues, connected Supabase and MongoDB, improved web and mobile UI, hosted the web app in Vercel, added alerts, and refined tracking lookup behavior.",
  },
  {
    period: "Apr 6-10",
    title: "Project Polish And Webinar",
    summary:
      "Resolved reporter and dispatcher issues, fixed image and location bugs, improved mobile interfaces, added safer alert deletion, and attended an AI collaboration webinar.",
  },
  {
    period: "Apr 13-17",
    title: "DeskDine Proposal",
    summary:
      "Audited PromptGraph clients, identified a daily operations friction point, prepared a digital solution pitch, and had the DeskDine project accepted.",
  },
  {
    period: "Apr 21-25",
    title: "DeskDine Development",
    summary:
      "Developed DeskDine for admin, staff, cafe staff, and customers, fixed database write and update issues, improved UI/UX, updated order and menu management, and added deadline-based ordering logic.",
  },
];

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
  const logs = getAllLogs();
  const techCount = new Set(projects.flatMap((project) => project.techStack)).size;

  return (
    <>
      <JsonLd data={personJsonLd()} />
      <JsonLd data={websiteJsonLd()} />
      <section className="relative overflow-hidden px-5 py-8 sm:px-6 lg:py-10" aria-label="Hero">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-lg border border-paper-3 bg-white/76 p-6 shadow-[0_18px_55px_rgba(20,41,70,0.08)] backdrop-blur sm:p-7 lg:p-8">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(400px,0.8fr)] lg:items-center">
              <div>
                <div className="mb-5 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-forest px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white">
                    Internship Portfolio
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.16em] text-forest-light">
                    {author.role} / {author.agency}
                  </span>
                </div>

                <h1 className="max-w-[620px] font-display text-[3.1rem] leading-[0.97] text-ink sm:text-[3.8rem] lg:text-[4.35rem]">
                  Jean Richelle
                  <span className="block text-gold">Gallego</span>
                </h1>   

                <p className="mt-5 max-w-2xl text-[15px] leading-7 text-ink-2">
                  I am a {author.degree} student passionate about web development, UI design, and problem-solving. During my internship at Makerspace InnovHub, I worked on frontend and backend interfaces, SEO checking, Node.js,and mobile dev
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
                  <Link
                    href="/logs"
                    className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md border border-forest/25 bg-paper px-6 py-2.5 text-[12px] font-medium uppercase tracking-[0.08em] text-forest transition-all hover:-translate-y-0.5 hover:border-forest hover:bg-white"
                  >
                    Read Logs
                  </Link>
                </div>
              </div>

              <div className="relative min-h-[430px]">
                <div className="absolute inset-2 rounded-[2rem] bg-[radial-gradient(circle_at_72%_35%,rgba(41,77,120,0.28),transparent_25%),radial-gradient(circle_at_28%_78%,rgba(245,130,42,0.22),transparent_28%),radial-gradient(circle_at_58%_68%,rgba(20,41,70,0.13),transparent_30%)]" aria-hidden="true" />
                <div className="absolute bottom-16 right-[10%] h-48 w-56 rounded-tl-full bg-[#cfeef5]/48 blur-sm" aria-hidden="true" />
                <div className="absolute bottom-16 right-[20%] h-8 w-48 rounded-full bg-forest/16 blur-xl" aria-hidden="true" />
                <div className="relative mx-auto h-[430px] max-w-[540px]">
                  {toolBadges.map((tool) => (
                    <div
                      key={tool.name}
                      className={`absolute z-20 flex h-9 w-9 items-center justify-center rounded-md border bg-white/76 text-[12px] font-semibold shadow-[0_8px_18px_rgba(47,143,216,0.11)] backdrop-blur ${tool.className}`}
                      aria-label={tool.name}
                      title={tool.name}
                    >
                      {"icon" in tool ? <ToolBadgeIcon icon={tool.icon} /> : tool.label}
                    </div>
                  ))}

                  <div className="absolute bottom-[82px] right-[5%] z-10 h-[88%] w-[70%]">
                    <Image
                      src={author.avatar}
                      alt="Professional portrait of Jean Richelle G. Gallego"
                      fill
                      priority
                      sizes="(min-width: 1024px) 420px, 92vw"
                      className="object-contain object-bottom saturate-105 drop-shadow-[0_18px_24px_rgba(20,41,70,0.18)]"
                    />
                  </div>

                  <div className="absolute bottom-0 left-[8%] right-[8%] z-40 grid grid-cols-3 gap-2 rounded-lg border border-white/80 bg-white/96 p-3 shadow-[0_14px_38px_rgba(20,41,70,0.16)] backdrop-blur">
                    {[
                      { num: projects.length, label: "Projects" },
                      { num: logs.length, label: "Logs" },
                      { num: techCount, label: "Frontend Development" },
                    ].map(({ num, label }) => (
                      <div key={label} className="text-center">
                        <p className="font-display text-3xl leading-none text-forest">{num}</p>
                        <p className="mt-1 text-[10px] uppercase tracking-[0.1em] text-ink-3">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="mt-10 rounded-lg bg-forest p-5 text-white shadow-[0_18px_60px_rgba(20,41,70,0.14)] sm:p-6">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/62">
                Internship Snapshot
              </p>
              <Link
                href="/logs"
                className="inline-flex min-h-[44px] min-w-[44px] w-fit items-center rounded-md border border-white/20 px-4 text-[11px] uppercase tracking-[0.1em] text-white/88 transition-colors hover:border-gold-light hover:bg-white/10"
              >
                Open Logs
              </Link>
            </div>
            <Timeline items={timelineItems} />
          </aside>
        </div>
      </section>

      <section className="px-5 pb-10 sm:px-6" aria-label="Portfolio focus areas">
        <div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-3">
          {[
            ["Web Development", "Responsive pages, UI polish, accessible layouts"],
            ["Operations", "SEO checks, reporting, deployment handoff"],
            ["Systems", "Node.js practice, Supabase, MongoDB workflows"],
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

      <section className="border-y border-paper-3 bg-white/70 py-12 lg:py-14" aria-label="Featured projects">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <SectionEyebrow>Highlights</SectionEyebrow>
              <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
                Featured <em className="not-italic text-gold">Activities</em>
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

      <section className="border-b border-paper-3 bg-paper/60 px-5 py-12 sm:px-6 lg:py-16" aria-label="Narrative timeline">
        <div className="mx-auto grid max-w-6xl gap-9 lg:grid-cols-[0.42fr_1fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <SectionEyebrow>Narrative</SectionEyebrow>
            <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
              Internship <em className="not-italic text-gold">Timeline</em>
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-ink-2">
              A condensed path from the narrative report, following the work from onboarding and client pages into MDRRMO systems, deployment, and DeskDine.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="border-l-2 border-gold bg-white/70 px-4 py-3">
                <p className="font-display text-3xl leading-none text-forest">9</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-ink-3">Milestones</p>
              </div>
              <div className="border-l-2 border-forest-light bg-white/70 px-4 py-3">
                <p className="font-display text-3xl leading-none text-forest">11</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-ink-3">Weeks</p>
              </div>
            </div>
          </div>

          <ol className="relative space-y-5 before:absolute before:bottom-5 before:left-[1.15rem] before:top-5 before:w-px before:bg-gradient-to-b before:from-gold before:via-forest-light before:to-paper-3 md:before:left-1/2">
            {narrativeTimelineItems.map((item, index) => {
              const alignRight = index % 2 === 0;

              return (
                <li key={`${item.period}-${item.title}`} className="relative md:grid md:grid-cols-[1fr_4.5rem_1fr] md:items-start md:gap-4">
                  <div className={`${alignRight ? "md:col-start-1 md:text-right" : "md:col-start-3"} pl-12 md:pl-0`}>
                    <article className="group border border-paper-3 bg-white/86 p-5 shadow-[0_14px_34px_rgba(20,41,70,0.07)] transition-all hover:-translate-y-0.5 hover:border-forest/25 hover:bg-white">
                      <div className={`mb-4 flex items-center gap-3 ${alignRight ? "md:justify-end" : ""}`}>
                        <span className="rounded-full border border-forest/15 bg-paper px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-forest">
                          {item.period}
                        </span>
                        <span className="hidden h-px w-8 bg-paper-3 md:block" aria-hidden="true" />
                      </div>
                      <h3 className="font-body text-[13px] font-semibold uppercase tracking-[0.12em] text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-ink-2">{item.summary}</p>
                    </article>
                  </div>

                  <div className="absolute left-0 top-4 z-10 md:static md:col-start-2 md:flex md:justify-center">
                    <span className="flex h-9 w-9 items-center justify-center border border-forest/15 bg-paper text-[11px] font-semibold text-forest shadow-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-6 lg:py-14" aria-label="Portfolio summary">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionEyebrow>Summary</SectionEyebrow>
            <h2 className="font-display text-3xl leading-tight text-forest sm:text-4xl">
              Built through steady internship practice.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Disaster-response UI", "Prototype work for emergency verification, alerting, and tracking flows."],
              ["Weekly documentation", `${logs.length} logs covering orientation, practice tasks, prototypes, and DeskDine development.`],
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
