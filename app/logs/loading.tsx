export default function LogsLoading() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="h-3 w-20 bg-paper-3 rounded mb-4 animate-pulse" />
      <div className="h-9 w-52 bg-paper-3 rounded mb-10 animate-pulse" />
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="py-6 border-b border-paper-3">
          <div className="h-2.5 w-16 bg-paper-3 rounded mb-3 animate-pulse" />
          <div className="h-5 w-3/4 bg-paper-3 rounded mb-2 animate-pulse" />
          <div className="h-3.5 w-full bg-paper-3 rounded animate-pulse" />
        </div>
      ))}
    </div>
  );
}
