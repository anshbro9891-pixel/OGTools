import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navigationLinks } from '../data/siteData';
import { CloseIcon, MenuIcon } from './Icons';

const baseLink =
  'rounded-full px-3 py-2 text-sm font-medium transition duration-300';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const renderLink = (link, mobile = false) => (
    <NavLink
      key={link.href}
      to={link.href}
      onClick={() => setIsOpen(false)}
      className={({ isActive }) =>
        `${baseLink} ${
          isActive
            ? 'bg-white/10 text-white'
            : 'text-slate-300 hover:bg-white/5 hover:text-white'
        } ${mobile ? 'w-full text-left' : ''}`
      }
    >
      {link.label}
    </NavLink>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-shell pt-4">
        <div className="panel flex items-center justify-between gap-4 rounded-[24px] px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-neon to-brand-emerald text-sm font-bold text-slate-950 shadow-glow">
              OG
            </div>
            <div>
              <p className="font-display text-lg font-semibold tracking-tight">OGTools</p>
              <p className="text-xs text-slate-400">Instagram Growth + AI Directory</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigationLinks.map((link) => renderLink(link))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link to="/instagram-tools" className="btn-secondary">
              Explore Tools
            </Link>
            <Link to="/contact" className="btn-primary">
              Start Free
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {isOpen ? (
          <div className="panel mt-3 space-y-3 rounded-[24px] p-4 lg:hidden">
            <div className="flex flex-col gap-2">
              {navigationLinks.map((link) => renderLink(link, true))}
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link to="/instagram-tools" className="btn-secondary" onClick={() => setIsOpen(false)}>
                Explore Tools
              </Link>
              <Link to="/contact" className="btn-primary" onClick={() => setIsOpen(false)}>
                Start Free
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
