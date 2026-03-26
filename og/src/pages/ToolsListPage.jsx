import { Link } from 'react-router-dom';
import AdPlaceholder from '../components/AdPlaceholder';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import ToolCard from '../components/ToolCard';
import { getToolsByType } from '../data/siteData';

const pageContent = {
  instagram: {
    eyebrow: 'Instagram Growth Directory',
    title: 'Instagram tools built for reach, retention, and conversion',
    description:
      'Compare creator analytics, caption engines, DM automation, and content planning tools inside a premium listing experience made for serious buyers.',
    secondaryHref: '/ai-tools',
    secondaryLabel: 'Explore AI Tools',
  },
  ai: {
    eyebrow: 'AI Tools Directory',
    title: 'AI software for creative teams, operators, and modern startups',
    description:
      'Browse a curated mix of automation, design, prompt, analytics, and workflow tools presented with SaaS-grade trust signals and conversion paths.',
    secondaryHref: '/instagram-tools',
    secondaryLabel: 'Explore Instagram Tools',
  },
};

export default function ToolsListPage({ toolType }) {
  const tools = getToolsByType(toolType);
  const content = pageContent[toolType];
  const featuredTools = tools.filter((tool) => tool.featured).slice(0, 3);
  const averageRating = (
    tools.reduce((sum, tool) => sum + tool.rating, 0) / tools.length
  ).toFixed(1);
  const heroStats = [
    { value: `${tools.length}`, label: `${toolType === 'instagram' ? 'Instagram' : 'AI'} tools in this collection` },
    { value: `${averageRating}/5`, label: 'Average user rating' },
    { value: 'Lead-ready', label: 'Affiliate CTA system' },
  ];

  const renderedCards = [];

  tools.forEach((tool, index) => {
    renderedCards.push(
      <Reveal key={tool.slug} delay={index * 70}>
        <ToolCard tool={tool} />
      </Reveal>,
    );

    if (index === 2) {
      renderedCards.push(
        <Reveal key={`${toolType}-ad`} className="xl:col-span-2">
          <div className="my-6 rounded-xl border border-white/10 bg-white/5 p-6 text-center">
            <p>Ad Space</p>
          </div>
        </Reveal>,
      );
    }
  });

  return (
    <>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        stats={heroStats}
        actions={
          <>
            <Link to={content.secondaryHref} className="btn-secondary">
              {content.secondaryLabel}
            </Link>
            <Link to="/contact" className="btn-primary">
              Start Free
            </Link>
          </>
        }
      />

      <section className="section-shell mt-12 pb-8">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <Reveal>
              <div className="mb-6 flex flex-wrap gap-3">
                <span className="pill-chip">{tools.length} vetted tools</span>
                <span className="pill-chip">Glassmorphism cards</span>
                <span className="pill-chip">Affiliate-ready buttons</span>
                <span className="pill-chip">Featured tool badges</span>
              </div>
            </Reveal>

            <div className="grid gap-5 xl:grid-cols-2">{renderedCards}</div>
          </div>

          <aside className="space-y-5 xl:sticky xl:top-28 xl:h-fit">
            <Reveal>
              <AdPlaceholder variant="sidebar" label="Sidebar AdSense Slot" />
            </Reveal>

            <Reveal delay={100}>
              <div className="panel glass-outline rounded-[30px] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Featured Picks
                </p>
                <div className="mt-5 space-y-4">
                  {featuredTools.map((tool) => (
                    <Link
                      key={tool.slug}
                      to={`/tool/${tool.slug}`}
                      className="block rounded-[22px] border border-white/10 bg-white/5 px-4 py-4 transition hover:border-white/20 hover:bg-white/10"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="font-semibold text-white">{tool.name}</p>
                          <p className="mt-1 text-sm text-slate-400">{tool.category}</p>
                        </div>
                        <span className="text-sm font-semibold text-brand-neon">{tool.rating.toFixed(1)}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="panel glass-outline rounded-[30px] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Affiliate System
                </p>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                  Conversion-focused layout
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Each card includes pricing context, ratings, category tags, and direct
                  external links for monetized traffic flow.
                </p>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
