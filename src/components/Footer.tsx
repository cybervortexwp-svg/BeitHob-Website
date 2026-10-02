import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';

const links = [
  {href: '/', key: 'home'},
  {href: '/about', key: 'about'},
  {href: '/activities', key: 'activities'},
  {href: '/contact', key: 'contact'}
] as const;

export function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-charcoal/10 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        {/* Brand + tagline */}
        <div>
          <p className="font-heading text-xl font-extrabold text-charcoal">
            {t('brand.name')}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-charcoal/70">
            {t('footer.tagline')}
          </p>
        </div>

        {/* Quick links */}
        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-wide text-purple">
            {t('footer.quickLinks')}
          </p>
          <ul className="mt-4 space-y-2">
            {links.map(({href, key}) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-charcoal/80 transition-colors hover:text-blue"
                >
                  {t(`navigation.${key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-wide text-purple">
            {t('footer.contact')}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-charcoal/80">
            <li>{t('footer.location')}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-charcoal/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-charcoal/60 md:flex-row">
          <span>
            © {year} {t('footer.org')}. {t('footer.rights')}
          </span>
        </div>
      </div>
    </footer>
  );
}