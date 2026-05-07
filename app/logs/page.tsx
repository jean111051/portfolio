import type { Metadata } from "next";
import { getAllLogs } from "@/lib/logs";
import { LogCard } from "@/components/molecules/LogCard";
import { SectionEyebrow } from "@/components/atoms/SectionEyebrow";

export const metadata: Metadata = {
  title: "Logs",
  description:
    "Weekly Makerspace Innovhub internship logs documenting orientation, frontend work, SEO checks, Node.js practice, and disaster-response platform development.",
};

export default function LogsPage() {
  const logs = getAllLogs();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <SectionEyebrow>Narrative Log</SectionEyebrow>
      <h1 className="font-display text-[2.2rem] text-ink leading-snug mb-2">
        Internship <em className="not-italic text-gold">Logs</em>
      </h1>
      <p className="text-[14px] text-ink-3 mb-10">
        {logs.length} {logs.length === 1 ? "entry" : "entries"} from the
        Makerspace Innovhub internship narrative.
      </p>

      <nav aria-label="Weekly log entries">
        {logs.map((log) => (
          <LogCard key={log.slug} log={log} />
        ))}
      </nav>
    </div>
  );
}
