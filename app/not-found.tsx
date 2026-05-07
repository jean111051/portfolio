import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <p className="text-[11px] tracking-[0.15em] uppercase text-forest-light mb-4 font-body">
        404
      </p>
      <h1 className="font-display text-[2.5rem] text-ink mb-4 leading-snug">
        Page not found
      </h1>
      <p className="text-[15px] text-ink-2 mb-8 max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center min-h-[44px] px-6 py-2.5 bg-forest text-white text-[13px] tracking-[0.05em] font-body hover:bg-forest-light transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
