'use client';

import {useLocale, useTranslations} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';
import {routing} from '@/i18n/routing';

export function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations('language');
  const router = useRouter();
  const pathname = usePathname();

  const other = routing.locales.find((l) => l !== locale) ?? routing.defaultLocale;

  return (
    <button
      type="button"
      aria-label={t('label')}
      onClick={() => router.replace(pathname, {locale: other})}
      className="rounded-full border border-charcoal/15 px-4 py-1.5 text-sm font-semibold text-charcoal transition-colors hover:border-blue hover:text-blue"
    >
      {t('switch')}
    </button>
  );
}