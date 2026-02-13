// CORREGIR:
import { defineRouting } from 'next-intl/routing';
import { locales } from '@/lib/i18n-config';
type Locale = typeof locales[number];

export const routing = defineRouting({
  locales: locales,
  defaultLocale: 'en',
  localePrefix: 'as-needed'
});