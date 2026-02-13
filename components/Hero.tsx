'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="bg-bg-light py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-4">
          {t('title')}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {t('subtitle')}
        </p>
        <Link
          href="/"
          className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          {t('cta')}
        </Link>
      </div>
    </section>
  );
}
