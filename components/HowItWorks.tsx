'use client';

import { useTranslations } from 'next-intl';

const steps = ['step1', 'step2', 'step3'] as const;

export default function HowItWorks() {
  const t = useTranslations('howItWorks');

  return (
    <section className="py-16 px-4 bg-bg-light">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-text-main mb-2">{t('title')}</h2>
        <p className="text-gray-600 mb-10">{t('subtitle')}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step} className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold text-text-main mb-2">
                {t(`${step}.title`)}
              </h3>
              <p className="text-gray-600 text-sm">{t(`${step}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
