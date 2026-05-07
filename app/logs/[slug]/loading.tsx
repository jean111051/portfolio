export default function LogDetailLoading() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="h-4 w-28 bg-paper-3 rounded mb-10 animate-pulse" />
      <div className="h-2.5 w-16 bg-paper-3 rounded mb-4 animate-pulse" />
      <div className="h-9 w-3/4 bg-paper-3 rounded mb-3 animate-pulse" />
      <div className="h-3 w-32 bg-paper-3 rounded mb-12 animate-pulse" />
      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
        <div
          key={i}
          className={`h-3.5 bg-paper-3 rounded mb-3 animate-pulse ${
            i % 3 === 0 ? "w-3/4" : "w-full"
          }`}
        />
      ))}
    </div>
  );
}
