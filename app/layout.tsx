
import localFont from "next/font/local";
import "./globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {getLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import { ScrollToTop } from '@/components/ScrollToTop';

const inter = localFont({
  variable: "--font-inter",
  display: "swap",
  src: [
    { path: "../public/fonts/inter-300.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/inter-400.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/inter-500.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/inter-600.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/inter-700.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/inter-800.woff2", weight: "800", style: "normal" },
  ],
});

export async function generateMetadata() {
  const messages = await getMessages();
  const locale = await getLocale();
  return {
    title: 'AirParkHotel | İşlevsel Lüks ve Konfor',
    description:
      'AirParkHotel\'de işlevsel lüks, konforlu odalar, modern olanaklar ve havaalanına yakın ayrıcalıklı bir konaklama deneyimi yaşayın.',
    keywords: [
      'AirParkHotel',
      'otel',
      'havaalanı oteli',
      'iş seyahati',
      'konforlu konaklama',
      'lüks otel',
      'İstanbul otel',
    ],
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://airparkhotel.com'),
    openGraph: {
      title: 'AirParkHotel | İşlevsel Lüks ve Konfor',
      description:
        'AirParkHotel\'de işlevsel lüks, konforlu odalar, modern olanaklar ve havaalanına yakın ayrıcalıklı bir konaklama deneyimi yaşayın.',
      url: '/',
      siteName: 'AirParkHotel',
      locale: 'tr_TR',
      type: 'website',
    },
    alternates: {
      canonical: '/',
    },
    icons: {
      icon: [
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      shortcut: [
        { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
        { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
      ],
    },
    messages: messages,
    locale: locale,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  if (!messages) notFound();
  const locale = await getLocale();
  return (
    <html lang={locale} className="scroll-smooth overflow-x-hidden">
      <body
        className={`${inter.variable} font-body antialiased bg-background-cream text-text-dark overflow-x-hidden`}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
          <ScrollToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
