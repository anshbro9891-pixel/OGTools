import { StarIcon } from './Icons';

export default function RatingBadge({ rating }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white">
      <StarIcon className="h-3.5 w-3.5 text-brand-neon" />
      {rating.toFixed(1)}
    </span>
  );
}
