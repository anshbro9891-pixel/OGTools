const variantStyles = {
  banner: 'min-h-[84px] rounded-[24px] px-6 py-5',
  sidebar: 'min-h-[240px] rounded-[28px] px-6 py-6',
  inline: 'min-h-[132px] rounded-[28px] px-6 py-6',
};

export default function AdPlaceholder({
  label,
  variant = 'inline',
  className = '',
}) {
  return (
    <div
      className={`panel glass-outline relative overflow-hidden ${variantStyles[variant]} ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,178,0.14),transparent_35%)]" />
      <div className="relative flex h-full flex-col justify-center gap-2 text-center sm:text-left">
        <span className="pill-chip mx-auto w-fit sm:mx-0">Monetization Ready</span>
        <p className="font-display text-lg font-semibold text-white">{label}</p>
        <p className="max-w-xl text-sm text-slate-400">
          Responsive placeholder for AdSense or sponsor inventory without breaking
          the premium layout.
        </p>
      </div>
    </div>
  );
}
