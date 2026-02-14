// lib/i18n-config.ts
export const rtlLocales = ['ar'];

export const locales = ['es', 'en', 'fr', 'de', 'it', 'pt', 'nl', 'sv', 'zh', 'ja', 'ar', 'ru', 'ko', 'tr'];

export const localeNames = {
  es: 'Español',
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
  it: 'Italiano',
  pt: 'Português',
  nl: 'Nederlands',
  sv: 'Svenska',
  zh: '中文',
  ja: '日本語',
  ar: 'العربية',
  ru: 'Русский',
  ko: '한국어',
  tr: 'Türkçe'
};

// EXPORTAR EL TIPO LOCALE
export type Locale = typeof locales[number];