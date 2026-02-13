// lib/i18n-config.ts
export const rtlLocales = ['ar'];

export const locales = ['es', 'en', 'fr', 'de', 'it', 'pt', 'nl', 'sv', 'zh', 'ja', 'ar', 'ru', 'ko'];

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
  ko: '한국어'
};

// 🟢 AGREGAR ESTA LÍNEA - Define el tipo Locale
export type Locale = typeof locales[number];