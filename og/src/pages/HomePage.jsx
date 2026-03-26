import { Link } from 'react-router-dom';
import AdPlaceholder from '../components/AdPlaceholder';
import DashboardPreview from '../components/DashboardPreview';
import LogoCloud from '../components/LogoCloud';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import ToolCard from '../components/ToolCard';
import { featureHighlights, tools } from '../data/siteData';
import {
  ChartIcon,
  CoinsIcon,
  RocketIcon,
  SparklesIcon,
} from '../components/Icons';

const featureIcons = {
  sparkles: SparklesIcon,
  chart: ChartIcon,
  coins: CoinsIcon,
};

const featuredTools = tools.filter((tool) => tool.featured).slice(0, 4);

const heroStats = [
  { value: '2,458', label: 'Followers', valueClassName: 'text-green-400' },
  { value: '+18%', label: 'Growth', valueClassName: 'text-white' },
  { value: '1,204', label: 'Clicks', valueClassName: 'text-white' },
];

const categoryCards = [
  {
    title: 'Instagram Growth Stack',
    description:
      'Find reel strategy tools, caption AI, analytics dashboards, DM automation, and creator workflows.',
    href: '/instagram-tools',
  },
  {
    title: 'AI Tools Directory',
    description:
      'Compare prompt systems, automation layers, creative AI, and operational tools that move teams faster.',
    href: '/ai-tools',
  },
];

export default function HomePage() {
  return (
    <>
      <section className="section-shell relative pt-10">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-20 h-[400px] w-[600px] -translate-x-1/2 bg-green-500 opacity-20 blur-[120px]" />
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal className="relative">
            <div className="absolute -left-10 top-10 -z-10 h-56 w-56 rounded-full bg-brand-neon/20 blur-3xl" />
            <div className="absolute left-24 top-40 -z-10 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />

            <span className="pill-chip">Premium SaaS discovery for creators and operators</span>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl xl:text-7xl">
              Boost Your <span className="text-gradient">Instagram</span> & Discover{' '}
              <span className="text-gradient">Powerful AI Tools</span>{' '}
              {String.fromCodePoint(0x1f680)}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              OGTools helps growth teams, creators, and startup operators compare
              conversion-ready software with a premium interface that feels like a product,
              not a cluttered directory.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/instagram-tools" className="btn-primary">
                Explore Tools
              </Link>
              <Link to="/contact" className="btn-secondary">
                Start Free
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                  <p className="text-gray-400">{stat.label}</p>
                  <h2 className={`mt-2 text-2xl font-bold ${stat.valueClassName}`}>{stat.value}</h2>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <DashboardPreview />
          </Reveal>
        </div>
      </section>

      <LogoCloud />

      <section className="section-shell mt-20">
        <Reveal>
          <SectionHeading
            eyebrow="Why OGTools"
            title="A high-conversion discovery experience for software buyers"
            description="Curated content, polished UI, and conversion-focused layouts built to drive tool exploration and affiliate clicks."
          />
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {featureHighlights.map((feature, index) => {
            const Icon = featureIcons[feature.icon] || SparklesIcon;

            return (
              <Reveal key={feature.title} delay={index * 80}>
                <article className="panel panel-hover glass-outline h-full rounded-[30px] p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-neon/10 text-brand-neon">
                    <Icon />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {feature.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-shell mt-20">
        <Reveal>
          <SectionHeading
            eyebrow="Two Premium Paths"
            title="Browse by growth channel or AI workflow"
            description="OGTools splits the directory into two high-intent destinations so visitors can find the right stack faster."
          />
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {categoryCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 90}>
              <div className="panel glass-outline relative overflow-hidden rounded-[32px] p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,178,0.16),transparent_35%)]" />
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-brand-neon">
                    <RocketIcon />
                  </div>
                  <h3 className="mt-6 text-3xl font-semibold tracking-tight text-white">
                    {card.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                    {card.description}
                  </p>
                  <Link to={card.href} className="btn-primary mt-8">
                    Explore Collection
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell mt-20">
        <Reveal>
          <SectionHeading
            eyebrow="Featured Tools"
            title="Top picks designed to turn curiosity into clicks"
            description="Highlighted listings showcase the affiliate and monetization flow with premium cards, ratings, and detailed product pages."
          />
        </Reveal>

        <div className="mt-8 grid gap-5 xl:grid-cols-2">
          {featuredTools.slice(0, 2).map((tool, index) => (
            <Reveal key={tool.slug} delay={index * 80}>
              <ToolCard tool={tool} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={140} className="mt-5">
          <AdPlaceholder variant="inline" label="Between Cards AdSense Slot" />
        </Reveal>

        <div className="mt-5 grid gap-5 xl:grid-cols-2">
          {featuredTools.slice(2).map((tool, index) => (
            <Reveal key={tool.slug} delay={index * 80}>
              <ToolCard tool={tool} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell mt-20 pb-8">
        <Reveal>
          <div className="panel glass-outline relative overflow-hidden rounded-[36px] px-6 py-10 sm:px-10 sm:py-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,178,0.18),transparent_36%)]" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="pill-chip">Launch Faster</span>
                <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Turn OGTools into a polished affiliate-first SaaS presence
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-400">
                  The foundation is built for featured listings, sponsor slots, editorial growth,
                  and conversion-oriented software discovery.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link to="/ai-tools" className="btn-secondary">
                  Discover AI Tools
                </Link>
                <Link to="/contact" className="btn-primary">
                  Book a Featured Slot
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
