import { Link } from 'react-router-dom';
import AdPlaceholder from '../components/AdPlaceholder';
import BlogCard from '../components/BlogCard';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { blogPosts, freeFollowersArticle } from '../data/siteData';

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const instagramPosts = blogPosts.filter(
    (post) =>
      post.category === 'Instagram' &&
      post.slug !== 'best-free-instagram-followers-websites-2026',
  );
  const aiPosts = blogPosts.filter((post) => post.category === 'AI');

  return (
    <>
      <PageHero
        eyebrow="SEO Content Engine"
        title="OGTools Blog"
        description="Structured H1 and H2 content blocks designed to support SEO, editorial trust, and high-intent traffic around Instagram growth and AI software."
        stats={[
          { value: '6', label: 'Editorial briefs' },
          { value: '2', label: 'Core content clusters' },
          { value: 'Search-ready', label: 'Structured headings' },
        ]}
        actions={
          <>
            <Link to="/instagram-tools" className="btn-secondary">
              Explore Tools
            </Link>
            <Link to="/contact" className="btn-primary">
              Sponsor Content
            </Link>
          </>
        }
      />

      <section className="section-shell mt-12">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
          <Reveal>
            <article className="panel glass-outline overflow-hidden rounded-[34px] p-6 sm:p-8">
              <span className="pill-chip">{featuredPost.category} Featured Brief</span>
              <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-white">
                {featuredPost.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400">
                {featuredPost.excerpt}
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-500">
                <span>{featuredPost.publishedAt}</span>
                <span>{featuredPost.readingTime}</span>
                <span>Optimized for discovery + engagement</span>
              </div>
            </article>
          </Reveal>

          <aside className="space-y-5 xl:sticky xl:top-28 xl:h-fit">
            <Reveal delay={80}>
              <AdPlaceholder variant="sidebar" label="Blog Sidebar AdSense Slot" />
            </Reveal>
            <Reveal delay={140}>
              <div className="panel glass-outline rounded-[30px] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Content Strategy
                </p>
                <p className="mt-4 text-2xl font-semibold tracking-tight text-white">
                  Editorial designed to support organic growth and sponsor demand
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Pair review pages with educational content so search traffic can move naturally
                  into comparison and affiliate flows.
                </p>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="section-shell mt-12">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
          <Reveal>
            <article className="panel glass-outline rounded-[34px] p-6 sm:p-8">
              <span className="pill-chip">Traffic Article</span>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {freeFollowersArticle.heading}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
                {freeFollowersArticle.intro}
              </p>

              <h2 className="mt-10 text-2xl font-semibold tracking-tight text-white">
                {freeFollowersArticle.sectionTitle}
              </h2>

              <div className="mt-6 space-y-4">
                {freeFollowersArticle.tools.map((tool) => (
                  <div
                    key={tool.rank}
                    className="rounded-[26px] border border-white/10 bg-white/5 p-5"
                  >
                    <h3 className="text-xl font-semibold text-white">
                      {tool.rank}. {tool.name} {tool.icon}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {tool.description}
                    </p>
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex text-sm font-semibold text-brand-neon hover:text-white"
                    >
                      {tool.url}
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[26px] border border-amber-300/20 bg-amber-300/10 p-5">
                <h2 className="text-xl font-semibold text-white">
                  {freeFollowersArticle.noteTitle}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {freeFollowersArticle.note}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  <li>Consistent posting</li>
                  <li>High-quality content</li>
                  <li>Trending reels</li>
                </ul>
              </div>

              <div className="mt-6 rounded-[26px] border border-white/10 bg-white/5 p-5">
                <h2 className="text-xl font-semibold text-white">
                  {freeFollowersArticle.tipTitle}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {freeFollowersArticle.tip}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  <li>Hashtag generators</li>
                  <li>AI caption tools</li>
                  <li>Content scheduling tools</li>
                </ul>
              </div>
            </article>
          </Reveal>

          <aside className="space-y-5 xl:sticky xl:top-28 xl:h-fit">
            <Reveal delay={80}>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
                <p>Ad Space</p>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="panel glass-outline rounded-[30px] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  SEO Angle
                </p>
                <p className="mt-4 text-2xl font-semibold tracking-tight text-white">
                  Pair viral-intent articles with comparison pages and high-CPC tool listings
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  This turns informational traffic into clicks for Instagram growth tools, AI
                  software, and featured sponsor inventory.
                </p>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="section-shell mt-20">
        <Reveal>
          <SectionHeading
            eyebrow="Instagram Cluster"
            title="Instagram strategy content"
            description="H2 content blocks focused on content performance, analytics, lead capture, and format strategy."
          />
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {instagramPosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 70}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell mt-12">
        <Reveal>
          <div className="my-6 rounded-xl border border-white/10 bg-white/5 p-6 text-center">
            <p>Ad Space</p>
          </div>
        </Reveal>
      </section>

      <section className="section-shell mt-20 pb-8">
        <Reveal>
          <SectionHeading
            eyebrow="AI Cluster"
            title="AI tools and operator workflows"
            description="H2 blocks covering prompt systems, design software, workflow documentation, and ROI-focused AI implementation."
          />
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {aiPosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 70}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
