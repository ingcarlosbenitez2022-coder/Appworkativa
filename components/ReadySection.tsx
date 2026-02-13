'use client';

import { useTranslations } from 'next-intl';

export default function ReadySection() {
  const t = useTranslations('ready');
  const tFeatures = useTranslations('features');

  const features = [
    { key: 'noCost' as const },
    { key: 'verified' as const },
    { key: 'quality' as const },
    { key: 'secure' as const },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-text-main mb-2">{t('title')}</h2>
        <p className="text-gray-600 mb-10">{t('subtitle')}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ key }) => (
            <div
              key={key}
              className="p-6 bg-bg-light rounded-xl border border-gray-100"
            >
              <p className="font-semibold text-text-main">{tFeatures(key)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
