import { Link } from 'react-router-dom';
import { InstagramIcon, LinkedInIcon, XSocialIcon } from './Icons';

const footerLinks = {
  Directory: [
    { label: 'Instagram Tools', href: '/instagram-tools' },
    { label: 'AI Tools', href: '/ai-tools' },
    { label: 'Featured Tools', href: '/instagram-tools' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
};

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com', icon: InstagramIcon },
  { label: 'X', href: 'https://x.com', icon: XSocialIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: LinkedInIcon },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10">
      <div className="section-shell py-12">
        <div className="panel rounded-[32px] px-6 py-8 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_auto]">
            <div className="max-w-md space-y-4">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-neon to-brand-emerald font-bold text-slate-950">
                  OG
                </div>
                <div>
                  <p className="font-display text-lg font-semibold">OGTools</p>
                  <p className="text-sm text-slate-400">A premium discovery layer for creators and AI-first teams.</p>
                </div>
              </div>
              <p className="text-sm leading-7 text-slate-400">
                Compare Instagram growth tools, AI products, affiliate offers, and editorial
                insights inside a modern directory built for conversion.
              </p>
            </div>

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {title}
                </p>
                <div className="space-y-3">
                  {links.map((link) => (
                    <Link key={link.href} to={link.href} className="block text-sm text-slate-300 hover:text-white">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Social
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
                    aria-label={label}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>(c) 2026 OGTools. Built for premium SaaS discovery.</p>
            <p>Affiliate disclosures and ad placements are supported throughout the experience.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
