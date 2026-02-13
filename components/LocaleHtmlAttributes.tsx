'use client';

import { rtlLocales } from '@/lib/i18n-config';
import { useEffect } from 'react';

interface Props {
  locale: string;
}

export default function LocaleHtmlAttributes({ locale }: Props) {
  const isRtl = rtlLocales.includes(locale as any);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  }, [locale, isRtl]);

  return null;
}
