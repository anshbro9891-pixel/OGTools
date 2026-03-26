import { trustLogos } from '../data/siteData';
import Reveal from './Reveal';

export default function LogoCloud() {
  return (
    <section className="section-shell mt-14">
      <Reveal className="panel rounded-[28px] px-6 py-5 sm:px-8">
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
            Trusted by teams inspired by
          </p>
          <div className="grid grid-cols-2 gap-3 text-sm text-slate-300 sm:grid-cols-3 lg:grid-cols-6">
            {trustLogos.map((logo) => (
              <div
                key={logo}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center font-display text-lg font-medium tracking-wide text-slate-200"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
