const metrics = [
  { label: 'Followers', value: '148.3K', detail: '+4.2K this week' },
  { label: 'Growth', value: '+28.4%', detail: 'vs last month' },
  { label: 'Clicks', value: '12.8K', detail: 'Affiliate-ready traffic' },
];

const bars = [38, 62, 54, 76, 65, 88, 74];

export default function DashboardPreview() {
  return (
    <div className="panel glass-outline relative overflow-hidden rounded-[32px] p-6 sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,178,0.16),transparent_35%)]" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div>
            <span className="pill-chip">Live Growth Snapshot</span>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
              Premium analytics without the clutter
            </h3>
          </div>
          <div className="hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-right sm:block">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Health Score</p>
            <p className="mt-1 text-xl font-semibold text-white">94/100</p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-[24px] border border-white/10 bg-black/20 p-4">
              <p className="text-sm text-slate-400">{metric.label}</p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-white">{metric.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-brand-neon/80">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.45fr_0.85fr]">
          <div className="rounded-[28px] border border-white/10 bg-black/20 p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-300">Audience Momentum</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">7 day trend</p>
              </div>
              <span className="rounded-full bg-brand-neon/10 px-3 py-1 text-xs font-semibold text-brand-neon">
                +18.6%
              </span>
            </div>

            <div className="relative h-44 overflow-hidden rounded-[22px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-4">
              <div className="absolute inset-0 chart-grid opacity-30" />
              <svg
                viewBox="0 0 320 160"
                className="absolute inset-0 h-full w-full px-4 py-4"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M6 118 C38 105, 54 86, 86 88 S134 110, 165 86 S226 46, 258 58 S290 74, 314 24"
                  stroke="rgba(184,255,240,0.9)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
              <div className="relative flex h-full items-end gap-3">
                {bars.map((bar, index) => (
                  <div key={index} className="flex flex-1 flex-col justify-end">
                    <div
                      className="chart-bar w-full rounded-t-[18px]"
                      style={{ height: `${bar}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-black/20 p-5">
            <p className="text-sm font-medium text-slate-300">Signal Summary</p>
            <div className="mt-5 space-y-3">
              {[
                'Best performing format: tutorial reels',
                'Peak conversion window: 6PM to 8PM',
                'Strongest CTA: comment trigger + DM follow-up',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
