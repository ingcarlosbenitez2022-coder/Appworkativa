'use client';

import { useState } from 'react';
import { useRouter, usePathname } from '@/navigation';
import { useLocale } from 'next-intl';
import { locales, localeNames, rtlLocales } from '@/lib/i18n-config';
type Locale = typeof locales[number];

const localeFlags: Record<string, string> = {
  es: '🇪🇸',
  en: '🇺🇸',
  fr: '🇫🇷',
  de: '🇩🇪',
  it: '🇮🇹',
  pt: '🇵🇹',
  nl: '🇳🇱',
  sv: '🇸🇪',
  zh: '🇨🇳',
  ja: '🇯🇵',
  ar: '🇦🇪',
  ru: '🇷🇺',
  ko: '🇰🇷',
  tr: '🇹🇷'
};

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleLocaleChange = (newLocale: string) => {
    const isRtl = rtlLocales.includes(newLocale);
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = newLocale;
    
    router.push(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors text-gray-700"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{localeFlags[currentLocale]}</span>
        <span className="uppercase">{currentLocale}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-xl z-50">
          {/* 🟢 CLASE PERSONALIZADA PARA SCROLLBAR */}
          <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => handleLocaleChange(locale)}
                className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors flex items-center gap-3 border-b border-gray-100 last:border-0 ${
                  locale === currentLocale ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700'
                }`}
              >
                <span className="text-xl">{localeFlags[locale]}</span>
                <span className="uppercase w-10 font-mono font-medium">{locale}</span>
                <span className="flex-1 text-sm truncate">
                  {localeNames[locale as keyof typeof localeNames]}
                </span>
                {locale === currentLocale && (
                  <svg className="w-4 h-4 ml-auto shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}