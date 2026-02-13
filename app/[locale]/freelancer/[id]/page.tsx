import { getTranslations } from 'next-intl/server';
import { mockFreelancers } from '@/lib/mock-data';
import { locales } from '@/lib/i18n-config';  // ← IMPORTAR locales (NO Locale)
import Image from 'next/image';
import { notFound } from 'next/navigation';

// 🟢 DEFINIR EL TIPO LOCALE AQUÍ (NO importarlo)
type Locale = typeof locales[number];

interface PageProps {
  params: Promise<{
    locale: Locale;
    id: string;
  }>;
}

export default async function FreelancerPage({ params }: PageProps) {
  const { locale, id } = await params;
  const t = await getTranslations({ locale, namespace: 'freelancer' });
  
  // Buscar el freelancer en el mock data correspondiente al idioma
  const freelancersData = mockFreelancers[locale as Locale] || mockFreelancers.es;
  const freelancer = freelancersData.find(f => f.id === id);
  
  if (!freelancer) {
    notFound();
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-4xl font-bold">
                {freelancer.name?.charAt(0) || 'U'}
              </div>
            </div>
            
            {/* Información */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {freelancer.name}
              </h1>
              
              <p className="text-xl text-gray-600 mb-4">
                {freelancer.title}
              </p>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 text-lg">★</span>
                  <span className="font-medium">{freelancer.rating}</span>
                </div>
                <span className="text-gray-500">
                  {freelancer.completedJobs || 0} {t('jobs')}
                </span>
              </div>
              
              <p className="text-gray-700 mb-6">
                {freelancer.bio}
              </p>
              
              {/* Skills */}
              {freelancer.skills && freelancer.skills.length > 0 && (
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-3">
                    {t('skills')}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {freelancer.skills.map((skill: string) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Botón de contacto */}
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                {t('contact')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}