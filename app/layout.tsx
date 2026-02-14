import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import NoHydration from "@/components/NoHydration";
import "./globals.css";

export const metadata: Metadata = {
  title: "Workativa - El ecosistema del talento digital",
  description: "Conecta, aprende y crece con Workativa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body 
        suppressHydrationWarning
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}
      >
        <NoHydration>
          {children}
        </NoHydration>
      </body>
    </html>
  );
}