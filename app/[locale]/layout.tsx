import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/lib/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LocaleHtmlAttributes from '@/components/LocaleHtmlAttributes';
import { rtlLocales } from '@/lib/i18n-config';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();
  const isRtl = rtlLocales.includes(locale as any);

  return (
    <div className={isRtl ? 'rtl' : 'ltr'} dir={isRtl ? 'rtl' : 'ltr'}>
      <LocaleHtmlAttributes locale={locale} />
      <NextIntlClientProvider messages={messages} locale={locale}>
        <Navbar locale={locale} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} />
      </NextIntlClientProvider>
    </div>
  );
}
