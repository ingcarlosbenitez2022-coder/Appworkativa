import { getTranslations } from 'next-intl/server';
import { mockFreelancers } from '@/lib/mock-data';
import { locales } from '@/lib/i18n-config';  // ← CAMBIADO: importar locales
import Image from 'next/image';
import { notFound } from 'next/navigation';

// 🟢 DEFINIR EL TIPO LOCALE AQUÍ MISMO
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

  const freelancers = mockFreelancers[locale] ?? mockFreelancers.es;
  const freelancer = freelancers.find((f) => f.id === id);
  
  if (!freelancer) {
    notFound();
  }
  
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-start gap-8">
          {/* Avatar */}
          <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200">
            {freelancer.avatar ? (
              <Image
                src={freelancer.avatar}
                alt={freelancer.name}
                width={128}
                height={128}
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-4xl font-bold">
                {freelancer.name.charAt(0)}
              </div>
            )}
          </div>
          
          {/* Información */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{freelancer.name}</h1>
            <p className="text-lg text-gray-600 mb-4">{freelancer.title}</p>
            
            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-1">
                <span className="text-yellow-400">★</span>
                <span className="font-medium">{freelancer.rating}</span>
                <span className="text-gray-500">({freelancer.reviews ?? 0} {t('reviews')})</span>
              </div>
              <div className="text-gray-600">
                <span className="font-medium">{freelancer.completedJobs}</span> {t('jobs')}
              </div>
            </div>
            
            <p className="text-gray-700 mb-6">{freelancer.bio}</p>
            
            {/* Habilidades */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-3">{t('skills')}</h2>
              <div className="flex flex-wrap gap-2">
                {(freelancer.skills ?? []).map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Portafolio */}
            {freelancer.portfolio && (freelancer.portfolio?.length ?? 0) > 0 && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-3">{t('portfolio')}</h2>
                <div className="grid grid-cols-3 gap-4">
                  {freelancer.portfolio.map((item, index) => (
                    <div key={index} className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                      {item.image && (
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={200}
                          height={200}
                          className="object-cover w-full h-full"
                        />
                      )}
                    </div>
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
  );
}