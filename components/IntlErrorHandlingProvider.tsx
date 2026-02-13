'use client';

import { NextIntlClientProvider } from 'next-intl';

export default function IntlErrorHandlingProvider({
  children,
  messages,
  locale,
}: {
  children: React.ReactNode;
  messages: any;
  locale: string;
}) {
  return (
    <NextIntlClientProvider
      messages={messages}
      locale={locale}
      getMessageFallback={({ namespace, key }) => (key ? `${namespace}.${key}` : namespace ?? '')}
      onError={() => {
        // Suppress MISSING_MESSAGE during build
      }}
    >
      {children}
    </NextIntlClientProvider>
  );
}
