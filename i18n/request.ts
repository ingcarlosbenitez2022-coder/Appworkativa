import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;

  if (!locale || !['es', 'en', 'fr', 'de', 'it', 'pt', 'nl', 'sv', 'zh', 'ja', 'ar', 'ru', 'ko', 'tr'].includes(locale)) {
    locale = 'en';
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
