
import { Montserrat } from "next/font/google";
import "./globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {getLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import { ScrollToTop } from '@/components/ScrollToTop';

const montserrat = Montserrat({
  variable: "--font-montserrat",
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
        className={`${montserrat.variable} font-body antialiased bg-background-cream text-text-dark overflow-x-hidden`}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
          <ScrollToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
