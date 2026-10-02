import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {ButtonLink} from '@/components/ui/Button';
import {Section} from '@/components/ui/Section';
import {ProgramCard} from '@/components/ProgramCard';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <main>
      {/* HERO — full-width banner with image */}
      <section className="relative isolate overflow-hidden bg-charcoal">
        <Image
          src="/images/hero.jpg"
          alt={t('hero.imageAlt')}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/30" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-36">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
            {t('hero.eyebrow')}
          </span>

          <h1 className="mt-6 max-w-3xl font-heading text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
            <span className="bg-gradient-to-r from-amethyst via-white to-lime bg-clip-text text-transparent">
              {t('hero.title')}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            {t('hero.description')}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/activities">{t('hero.primaryCta')}</ButtonLink>
            <ButtonLink
              href="/contact"
              variant="secondary"
              className="!bg-white/10 !text-white !border-white/30 hover:!bg-white/20"
            >
              {t('hero.secondaryCta')}
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* INTRO — white, editorial */}
      <Section>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold text-charcoal md:text-4xl">
              {t('intro.heading')}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-charcoal/80">
              {t('intro.body1')}
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal/80">
              {t('intro.body2')}
            </p>
            <p className="mt-6 font-heading text-lg font-bold text-purple">
              {t('intro.body3')}
            </p>
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
            <Image
              src="/images/about.jpg"
              alt=""
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* PROGRAMS — subtle tinted band */}
      <Section tint="canvas">
        <div className="mb-12 max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-charcoal md:text-4xl">
            {t('programs.heading')}
          </h2>
          <p className="mt-4 text-base text-charcoal/70">
            {t('programs.subheading')}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <ProgramCard
            image="/images/activity-art.jpg"
            tint="amethyst"
            accent="purple"
            title={t('programs.art.title')}
            description={t('programs.art.description')}
          />
          <ProgramCard
            image="/images/activity-pro.jpg"
            tint="sky"
            accent="blue"
            title={t('programs.professional.title')}
            description={t('programs.professional.description')}
          />
          <ProgramCard
            image="/images/activity-sport.jpg"
            tint="lime"
            accent="green"
            title={t('programs.sports.title')}
            description={t('programs.sports.description')}
          />
        </div>
      </Section>

      {/* QUOTE — white */}
      <Section>
        <blockquote className="mx-auto max-w-3xl text-center">
          <p className="font-heading text-2xl font-bold leading-snug text-charcoal md:text-3xl">
            “{t('quote.text')}”
          </p>
          <footer className="mt-6 text-sm font-semibold uppercase tracking-wider text-purple">
            — {t('quote.attribution')}
          </footer>
        </blockquote>
      </Section>

      {/* CLOSING CTA — blue band */}
      <Section>
        <div className="rounded-3xl bg-blue px-8 py-14 text-center md:px-16">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            {t('closing.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/90">
            {t('closing.description')}
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink
              href="/contact"
              variant="secondary"
              className="!bg-white !text-blue hover:!bg-white/90"
            >
              {t('closing.cta')}
            </ButtonLink>
          </div>
        </div>
      </Section>
    </main>
  );
}