import { setRequestLocale, getTranslations } from 'next-intl/server';
import GigCard from '@/components/GigCard';
import { mockGigs } from '@/lib/mock-data';
import type { Locale } from '@/lib/i18n-config';

export default async function GigsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const gigs = mockGigs[locale as Locale] ?? mockGigs.es;

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-text-main mb-10">
          {(await getTranslations('gigs'))('title')}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gigs.map((gig) => (
            <GigCard key={gig.id} gig={gig} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
