import {Link} from '@/i18n/navigation';
import type {ComponentProps} from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

type BaseProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

const styles: Record<Variant, string> = {
  primary:   'bg-blue text-white hover:bg-blue/90',
  secondary: 'bg-white text-blue border border-blue hover:bg-blue/5',
  ghost:     'bg-transparent text-charcoal hover:bg-charcoal/5'
};

const base =
  'inline-flex items-center justify-center rounded-full px-6 py-3 ' +
  'font-semibold text-sm transition-colors focus:outline-none ' +
  'focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2';

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...rest
}: BaseProps & ComponentProps<'button'>) {
  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = 'primary',
  className = '',
  children
}: BaseProps & {href: ComponentProps<typeof Link>['href']}) {
  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}