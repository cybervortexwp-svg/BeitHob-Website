'use client';

import {useState} from 'react';
import {useTranslations} from 'next-intl';
import {Link, usePathname} from '@/i18n/navigation';
import {LanguageSwitcher} from './LanguageSwitcher';

const links = [
  {href: '/', key: 'home'},
  {href: '/about', key: 'about'},
  {href: '/activities', key: 'activities'},
  {href: '/contact', key: 'contact'}
] as const;

export function Header() {
  const t = useTranslations('navigation');
  const tb = useTranslations('brand');
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-charcoal/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="font-heading text-xl font-extrabold tracking-tight text-charcoal"
          onClick={() => setOpen(false)}
        >
          {tb('name')}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(({href, key}) => (
            <Link
              key={href}
              href={href}
              className={`relative text-sm font-semibold transition-colors ${
                isActive(href)
                  ? 'text-blue'
                  : 'text-charcoal hover:text-blue'
              }`}
            >
              {t(key)}
              {isActive(href) && (
                <span className="absolute inset-x-0 -bottom-1.5 h-0.5 rounded-full bg-blue" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <LanguageSwitcher />
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/15"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-charcoal" />
            <span className="block h-0.5 w-5 bg-charcoal" />
            <span className="block h-0.5 w-5 bg-charcoal" />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-charcoal/10 bg-white">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {links.map(({href, key}) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm font-semibold ${
                  isActive(href)
                    ? 'bg-blue/10 text-blue'
                    : 'text-charcoal hover:bg-charcoal/5'
                }`}
              >
                {t(key)}
              </Link>
            ))}
            <div className="pt-3">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}