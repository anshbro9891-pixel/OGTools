import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AdPlaceholder from '../components/AdPlaceholder';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import StickyCTA from '../components/StickyCTA';
import ToolCard from '../components/ToolCard';
import {
  CheckCircleIcon,
  XCircleIcon,
  ArrowUpRightIcon,
} from '../components/Icons';
import { getToolBySlug, tools } from '../data/siteData';
import { readAffiliateClicks, trackAffiliateClick } from '../lib/affiliate';

export default function ToolDetailPage() {
  const { slug } = useParams();
  const tool = getToolBySlug(slug);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    if (tool) {
      setClickCount(readAffiliateClicks(tool.slug));
    }
  }, [tool]);

  if (!tool) {
    return (
      <section className="section-shell pt-8">
        <div className="panel glass-outline rounded-[36px] px-6 py-12 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-white">Tool not found</h1>
          <p className="mt-4 text-slate-400">
            The requested listing does not exist in this directory build.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link to="/instagram-tools" className="btn-secondary">
              Instagram Tools
            </Link>
            <Link to="/ai-tools" className="btn-primary">
              AI Tools
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const relatedTools = tools
    .filter((entry) => entry.toolType === tool.toolType && entry.slug !== tool.slug)
    .slice(0, 2);

  const parentHref = tool.toolType === 'instagram' ? '/instagram-tools' : '/ai-tools';

  return (
    <>
      <PageHero
        eyebrow={tool.toolType === 'instagram' ? 'Instagram Tool Detail' : 'AI Tool Detail'}
        title={tool.name}
        description={tool.fullDescription}
        stats={tool.highlights}
        actions={
          <>
            <Link to={parentHref} className="btn-secondary">
              Back to Collection
            </Link>
            <a
              href={tool.affiliateUrl}
              target="_blank"
              rel="noreferrer sponsored"
              className="btn-primary"
              onClick={() => {
                trackAffiliateClick(tool);
                setClickCount((count) => count + 1);
              }}
            >
              Visit Website (Affiliate)
              <ArrowUpRightIcon />
            </a>
          </>
        }
      />

      <section className="section-shell mt-12 pb-8">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_340px]">
          <div className="space-y-6">
            <Reveal>
              <div className="panel glass-outline overflow-hidden rounded-[34px] p-5 sm:p-6">
                <div className="rounded-[28px] border border-white/10 bg-black/30">
                  <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                    <span className="h-3 w-3 rounded-full bg-rose-400/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-300/80" />
                    <span className="h-3 w-3 rounded-full bg-brand-neon/80" />
                    <span className="ml-3 text-xs uppercase tracking-[0.22em] text-slate-500">
                      Screenshot Placeholder
                    </span>
                  </div>

                  <div className="grid gap-5 p-5 lg:grid-cols-[1.3fr_0.7fr]">
                    <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-slate-400">Growth Dashboard</p>
                          <p className="mt-2 text-2xl font-semibold text-white">{tool.name}</p>
                        </div>
                        <div className="rounded-full bg-brand-neon/10 px-3 py-1 text-xs font-semibold text-brand-neon">
                          {tool.pricing}
                        </div>
                      </div>

                      <div className="mt-6 grid gap-3 sm:grid-cols-3">
                        {tool.highlights.map((highlight) => (
                          <div
                            key={highlight.label}
                            className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                          >
                            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                              {highlight.label}
                            </p>
                            <p className="mt-2 text-sm font-medium text-slate-200">
                              {highlight.value}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="relative mt-6 h-48 overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-4">
                        <div className="absolute inset-0 chart-grid opacity-30" />
                        <svg
                          viewBox="0 0 400 220"
                          className="absolute inset-0 h-full w-full"
                          fill="none"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M18 154 C58 140, 88 116, 128 122 S195 150, 236 112 S318 52, 382 38"
                            stroke="rgba(0,255,178,0.95)"
                            strokeWidth="4"
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute bottom-4 right-4 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-xl">
                          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                            Conversion Uplift
                          </p>
                          <p className="mt-1 text-xl font-semibold text-white">+22%</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {tool.useCases.map((useCase) => (
                        <div
                          key={useCase}
                          className="rounded-[24px] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-slate-300"
                        >
                          {useCase}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="panel glass-outline rounded-[34px] p-6 sm:p-8">
                <h2 className="text-3xl font-semibold tracking-tight text-white">Why teams use {tool.name}</h2>
                <p className="mt-4 text-base leading-8 text-slate-400">{tool.fullDescription}</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {tool.useCases.map((useCase) => (
                    <div key={useCase} className="rounded-[24px] border border-white/10 bg-black/20 px-4 py-4">
                      <p className="text-sm leading-7 text-slate-300">{useCase}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <AdPlaceholder variant="inline" label="Mid-Content AdSense Slot" />
            </Reveal>

            <div className="grid gap-5 lg:grid-cols-2">
              <Reveal delay={160}>
                <div className="panel glass-outline rounded-[34px] p-6">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-neon/10 text-brand-neon">
                      <CheckCircleIcon />
                    </div>
                    <h2 className="text-2xl font-semibold tracking-tight text-white">Pros</h2>
                  </div>
                  <div className="mt-6 space-y-3">
                    {tool.pros.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-slate-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={220}>
                <div className="panel glass-outline rounded-[34px] p-6">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-200">
                      <XCircleIcon />
                    </div>
                    <h2 className="text-2xl font-semibold tracking-tight text-white">Cons</h2>
                  </div>
                  <div className="mt-6 space-y-3">
                    {tool.cons.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-slate-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={240}>
              <div>
                <div className="mb-6 flex items-center justify-between gap-4">
                  <h2 className="text-3xl font-semibold tracking-tight text-white">Related tools</h2>
                  <Link to={parentHref} className="text-sm font-semibold text-brand-neon hover:text-white">
                    View all
                  </Link>
                </div>
                <div className="grid gap-5 xl:grid-cols-2">
                  {relatedTools.map((relatedTool) => (
                    <ToolCard key={relatedTool.slug} tool={relatedTool} />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <aside className="space-y-5 xl:sticky xl:top-28 xl:h-fit">
            <Reveal>
              <div className="panel glass-outline rounded-[34px] p-6">
                <span className="pill-chip">Sticky CTA</span>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                  Visit Website (Affiliate)
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  This sidebar is designed to keep the conversion path visible while users review
                  screenshots, use cases, and tradeoffs.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="rounded-[24px] border border-white/10 bg-black/20 px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Category</p>
                    <p className="mt-2 text-sm font-medium text-white">{tool.category}</p>
                  </div>
                  <div className="rounded-[24px] border border-white/10 bg-black/20 px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Rating</p>
                    <p className="mt-2 text-sm font-medium text-white">{tool.rating.toFixed(1)} / 5</p>
                  </div>
                  <div className="rounded-[24px] border border-white/10 bg-black/20 px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Tracked Clicks</p>
                    <p className="mt-2 text-sm font-medium text-white">{clickCount} local clicks</p>
                  </div>
                </div>

                <a
                  href={tool.affiliateUrl}
                  target="_blank"
                  rel="noreferrer sponsored"
                  className="btn-primary mt-6 w-full"
                  onClick={() => {
                    trackAffiliateClick(tool);
                    setClickCount((count) => count + 1);
                  }}
                >
                  Visit Website (Affiliate)
                  <ArrowUpRightIcon />
                </a>

                <p className="mt-4 text-xs leading-6 text-slate-500">
                  Affiliate disclosure: outbound links can be monetized. The CTA styling is built
                  to support conversion without disrupting readability.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <AdPlaceholder variant="sidebar" label="Sidebar AdSense Slot" />
            </Reveal>
          </aside>
        </div>
      </section>

      <StickyCTA tool={tool} />
    </>
  );
}
