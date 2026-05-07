export default function HomeLoading() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-8 sm:px-6 lg:py-10">
      <section className="rounded-lg border border-paper-3 bg-white/70 p-6 shadow-sm sm:p-7 lg:p-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(400px,0.8fr)]">
          <div>
            <div className="mb-5 h-6 w-48 animate-pulse rounded bg-paper-3" />
            <div className="mb-3 h-16 w-72 max-w-full animate-pulse rounded bg-paper-3 sm:h-20" />
            <div className="mb-6 h-16 w-full max-w-2xl animate-pulse rounded bg-paper-3" />
            <div className="grid gap-3 border-y border-paper-3 py-4 sm:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="h-12 animate-pulse rounded bg-paper-3" />
              ))}
            </div>
          </div>
          <div className="h-[430px] animate-pulse rounded-lg bg-paper-3" />
        </div>
      </section>
    </div>
  );
}
