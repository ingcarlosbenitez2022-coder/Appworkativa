'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

const categoryKeys = ['webDev', 'uiUx', 'marketing', 'ecommerce', 'mobile', 'support'] as const;

export default function Categories() {
  const t = useTranslations('categories');

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-text-main mb-2">{t('title')}</h2>
        <p className="text-gray-600 mb-10">{t('subtitle')}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryKeys.map((key) => (
            <Link
              key={key}
              href="/gigs"
              className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-semibold text-text-main mb-2">{t(`${key}.name`)}</h3>
              <p className="text-gray-600 text-sm">{t(`${key}.desc`)}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
