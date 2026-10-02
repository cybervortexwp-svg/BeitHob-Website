import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import { routing } from '@/i18n/routing';
import { Header } from '@/components/Header';
import '../globals.css';
import { Footer } from '@/components/Footer';

const jakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['700', '800'],
    variable: '--font-heading',
    display: 'swap'
});

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    variable: '--font-body',
    display: 'swap'
});

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    setRequestLocale(locale);

    const messages = await getMessages();

    return (
        <html
            lang={locale}
            dir={locale === 'ar' ? 'rtl' : 'ltr'}
            className={`${jakarta.variable} ${inter.variable}`}
        >
            <body className="font-body bg-white text-charcoal antialiased flex min-h-screen flex-col">                <NextIntlClientProvider messages={messages}>
                <Header />
                {children}
                <Footer />
            </NextIntlClientProvider>
            </body>
        </html>
    );
}