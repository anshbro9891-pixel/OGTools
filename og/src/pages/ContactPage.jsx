import ContactForm from '../components/ContactForm';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import {
  ClockIcon,
  MailIcon,
  CheckCircleIcon,
} from '../components/Icons';
import { contactMethods, faqs } from '../data/siteData';
import AdPlaceholder from '../components/AdPlaceholder';

const iconMap = [MailIcon, CheckCircleIcon, ClockIcon];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the OGTools team"
        description="Use this page for featured placements, partnerships, editorial requests, or product feedback. The UI is production-ready and waiting for your preferred backend integration."
        stats={[
          { value: '< 24h', label: 'Typical response time' },
          { value: 'Affiliate-ready', label: 'Partnership workflow' },
          { value: 'SaaS-grade', label: 'Premium contact UX' },
        ]}
      />

      <section className="section-shell mt-12">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_340px]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <aside className="space-y-5 xl:sticky xl:top-28 xl:h-fit">
            {contactMethods.map((method, index) => {
              const Icon = iconMap[index] || MailIcon;

              return (
                <Reveal key={method.title} delay={index * 80}>
                  <div className="panel glass-outline rounded-[30px] p-6">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-neon/10 text-brand-neon">
                      <Icon />
                    </div>
                    <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white">
                      {method.title}
                    </h2>
                    <p className="mt-2 text-base font-medium text-slate-200">{method.detail}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{method.note}</p>
                  </div>
                </Reveal>
              );
            })}

            <Reveal delay={180}>
              <AdPlaceholder variant="sidebar" label="Contact Sidebar AdSense Slot" />
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="section-shell mt-20 pb-8">
        <Reveal>
          <div className="panel glass-outline rounded-[36px] p-6 sm:p-8">
            <span className="pill-chip">FAQ</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white">
              Common partnership and product questions
            </h2>
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {faqs.map((faq, index) => (
                <Reveal key={faq.question} delay={index * 70}>
                  <div className="rounded-[26px] border border-white/10 bg-white/5 p-5">
                    <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{faq.answer}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
