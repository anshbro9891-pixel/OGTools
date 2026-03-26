export default function LoadingSkeleton() {
  return (
    <div className="section-shell py-10">
      <div className="panel rounded-[32px] p-6 sm:p-8">
        <div className="skeleton h-8 w-40" />
        <div className="mt-6 space-y-3">
          <div className="skeleton h-14 w-full max-w-3xl" />
          <div className="skeleton h-6 w-full max-w-2xl" />
          <div className="skeleton h-6 w-full max-w-xl" />
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="rounded-[28px] border border-white/10 bg-white/5 p-5">
              <div className="skeleton h-12 w-12" />
              <div className="mt-5 skeleton h-6 w-2/3" />
              <div className="mt-3 skeleton h-4 w-full" />
              <div className="mt-2 skeleton h-4 w-5/6" />
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="skeleton h-10 w-full" />
                <div className="skeleton h-10 w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
