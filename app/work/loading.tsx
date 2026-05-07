export default function WorkLoading() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="h-3 w-20 bg-paper-3 rounded mb-4 animate-pulse" />
      <div className="h-9 w-48 bg-paper-3 rounded mb-10 animate-pulse" />
      <div className="flex gap-2 mb-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-11 w-24 bg-paper-3 rounded animate-pulse" />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-paper-2 border border-paper-3 p-6 h-52 animate-pulse" />
        ))}
      </div>
    </div>
  );
}
