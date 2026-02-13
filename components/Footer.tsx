'use client';

import { useTranslations } from 'next-intl';

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-text-main text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8">
            <a href="#" className="hover:underline">
              {t('about')}
            </a>
            <a href="#" className="hover:underline">
              {t('terms')}
            </a>
            <a href="#" className="hover:underline">
              {t('privacy')}
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            {t('copyright', { year })}
          </p>
        </div>
      </div>
    </footer>
  );
}
