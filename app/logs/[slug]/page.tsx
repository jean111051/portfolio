import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllLogSlugs, getLogBySlug } from "@/lib/logs";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = getAllLogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const log = await getLogBySlug(slug);
    return {
      title: log.title,
      description: log.excerpt,
      openGraph: {
        title: log.title,
        description: log.excerpt,
        type: "article",
        authors: ["Jean Richelle G. Gallego"],
      },
    };
  } catch {
    return { title: "Log Not Found" };
  }
}

export default async function LogDetailPage({ params }: Props) {
  const { slug } = await params;
  let log;
  try {
    log = await getLogBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <article className="max-w-2xl mx-auto px-6 py-16">
      <Link
        href="/logs"
        className="inline-flex items-center gap-2 text-[13px] text-forest-light hover:text-forest transition-colors mb-10 focus:outline-none focus-visible:underline"
      >
        &larr; Back to Logs
      </Link>

      <header className="mb-10">
        <p className="text-[11px] tracking-[0.15em] uppercase text-forest-light mb-3 font-body">
          {log.week}
        </p>
        <h1 className="font-display text-[2rem] text-ink leading-snug mb-3">
          {log.title}
        </h1>
        <time dateTime={log.date} className="text-[13px] text-ink-3">
          {log.date}
        </time>
      </header>

      <div
        className="prose-log"
        dangerouslySetInnerHTML={{ __html: log.content }}
      />

      <div className="mt-14 pt-6 border-t border-paper-3">
        <Link
          href="/logs"
          className="inline-flex items-center gap-2 text-[13px] text-forest-light hover:text-forest transition-colors focus:outline-none focus-visible:underline"
        >
          &larr; All Logs
        </Link>
      </div>
    </article>
  );
}
