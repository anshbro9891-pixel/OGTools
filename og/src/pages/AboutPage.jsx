import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { aboutPrinciples, aboutStats } from '../data/siteData';

const workflow = [
  {
    step: '01',
    title: 'Curate',
    description:
      'We organize listings around intent, not just category names, so buyers can understand fit faster.',
  },
  {
    step: '02',
    title: 'Frame',
    description:
      'Each page is structured to highlight pricing, use cases, strengths, weaknesses, and conversion paths.',
  },
  {
    step: '03',
    title: 'Convert',
    description:
      'Sticky CTAs, sponsor inventory, and affiliate-friendly cards turn a static directory into a revenue layer.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About OGTools"
        title="A premium directory brand for software discovery"
        description="OGTools combines startup-grade design, editorial framing, and monetization infrastructure so tool research feels fast, premium, and credible."
        stats={aboutStats}
        actions={
          <>
            <Link to="/blog" className="btn-secondary">
              Read the Blog
            </Link>
            <Link to="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </>
        }
      />

      <section className="section-shell mt-12">
        <Reveal>
          <div className="panel glass-outline rounded-[36px] px-6 py-10 sm:px-10">
            <span className="pill-chip">Mission</span>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white">
              Make software research feel like using a polished SaaS product
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
              Most directories overwhelm visitors with low-signal listings and weak trust cues.
              OGTools flips that model with premium UX, better framing, and layouts optimized for
              both user confidence and monetization.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section-shell mt-20">
        <Reveal>
          <SectionHeading
            eyebrow="Principles"
            title="How the product is positioned"
            description="The design, content, and conversion strategy all follow the same premium product logic."
          />
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {aboutPrinciples.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 80}>
              <article className="panel glass-outline rounded-[30px] p-6">
                <h3 className="text-2xl font-semibold tracking-tight text-white">{principle.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{principle.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell mt-20 pb-8">
        <Reveal>
          <SectionHeading
            eyebrow="Workflow"
            title="The operating model behind the experience"
            description="A simple three-step system that supports design quality, editorial consistency, and conversion performance."
          />
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {workflow.map((item, index) => (
            <Reveal key={item.step} delay={index * 90}>
              <article className="panel glass-outline rounded-[30px] p-6">
                <span className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-neon">
                  {item.step}
                </span>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
