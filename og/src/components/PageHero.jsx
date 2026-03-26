export default function PageHero({
  eyebrow,
  title,
  description,
  stats = [],
  actions,
}) {
  return (
    <section className="section-shell pt-8">
      <div className="panel glass-outline relative overflow-hidden rounded-[36px] px-6 py-10 sm:px-10 sm:py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,178,0.14),transparent_36%)]" />
        <div className="absolute inset-0 subtle-grid opacity-25" />
        <div className="relative max-w-4xl">
          {eyebrow ? <span className="pill-chip">{eyebrow}</span> : null}
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
            {description}
          </p>

          {actions ? <div className="mt-8 flex flex-col gap-3 sm:flex-row">{actions}</div> : null}

          {stats.length ? (
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[24px] border border-white/10 bg-black/20 px-4 py-4">
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
