import { trackAffiliateClick } from '../lib/affiliate';
import { ArrowUpRightIcon } from './Icons';

export default function StickyCTA({ tool }) {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
      <div className="panel glass-outline flex items-center justify-between gap-3 rounded-[24px] px-4 py-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-white">{tool.name}</p>
          <p className="truncate text-xs text-slate-400">{tool.category}</p>
        </div>
        <a
          href={tool.affiliateUrl}
          target="_blank"
          rel="noreferrer sponsored"
          className="btn-primary shrink-0 px-4 py-2.5"
          onClick={() => trackAffiliateClick(tool)}
        >
          Visit
          <ArrowUpRightIcon />
        </a>
      </div>
    </div>
  );
}
