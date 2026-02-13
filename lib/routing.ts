import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['es', 'en', 'fr', 'de', 'it', 'pt', 'nl', 'sv', 'zh', 'ja', 'ar', 'ru', 'ko'],
  defaultLocale: 'en',
  localePrefix: 'as-needed'
});