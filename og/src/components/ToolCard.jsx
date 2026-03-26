import { Link } from 'react-router-dom';
import { trackAffiliateClick } from '../lib/affiliate';
import RatingBadge from './RatingBadge';

export default function ToolCard({ tool }) {
  return (
    <article className="relative group">
      <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-green-400 to-emerald-600 blur opacity-0 transition duration-500 group-hover:opacity-70" />

      <div className="relative rounded-xl border border-white/10 bg-[#0f172a]/80 p-5 backdrop-blur-xl transition duration-300 hover:scale-[1.03]">
        {tool.featured ? (
          <span className="absolute right-3 top-3 rounded bg-green-500 px-2 py-1 text-xs font-semibold text-slate-950">
            {String.fromCodePoint(0x2b50)} Featured
          </span>
        ) : null}

        <div className="flex items-start justify-between gap-4 pr-20">
          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 text-base font-semibold text-white">
              {tool.logo}
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">{tool.name}</h2>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                  {tool.category}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                  {tool.pricing}
                </span>
              </div>
            </div>
          </div>
          <RatingBadge rating={tool.rating} />
        </div>

        <p className="mt-4 text-sm text-gray-400">{tool.description}</p>

        <a
          href={tool.affiliateUrl}
          target="_blank"
          rel="noreferrer sponsored"
          className="mt-4 block w-full rounded-lg bg-green-500 py-2.5 text-center font-semibold text-black transition hover:bg-green-400"
          onClick={() => trackAffiliateClick(tool)}
        >
          Visit Tool {String.fromCodePoint(0x1f680)}
        </a>

        <Link
          to={`/tool/${tool.slug}`}
          className="mt-3 block text-center text-sm font-medium text-slate-400 transition hover:text-white"
        >
          View details
        </Link>
      </div>
    </article>
  );
}
