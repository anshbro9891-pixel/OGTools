export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? (
        <span className="pill-chip mb-4">{eyebrow}</span>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
