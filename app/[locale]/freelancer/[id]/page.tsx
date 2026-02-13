import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { mockFreelancers } from '@/lib/mock-data';
import type { Locale } from '@/lib/i18n-config';

export default async function FreelancerPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  setRequestLocale(locale);
  const freelancers = mockFreelancers[locale as Locale] ?? mockFreelancers.es;
  const freelancer = freelancers.find((f) => f.id === id) ?? freelancers[0];
  const t = await getTranslations('freelancer');

  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
          <h1 className="text-2xl font-bold text-text-main mb-2">{freelancer.name}</h1>
          <p className="text-primary font-medium mb-4">{freelancer.title}</p>
          <p className="text-gray-600 mb-6">{freelancer.bio}</p>
          <div className="flex gap-4 mb-6">
            <span className="text-sm text-gray-600">
              ⭐ {freelancer.rating} {t('rating')}
            </span>
            <span className="text-sm text-gray-600">
              {freelancer.completedJobs} {t('jobs')}
            </span>
          </div>
          <button
            type="button"
            className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            {t('contact')}
          </button>
        </div>
      </div>
    </section>
  );
}
