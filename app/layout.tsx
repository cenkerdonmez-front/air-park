
import { Inter } from "next/font/google";
import "./globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {getLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export async function generateMetadata() {
  const messages = await getMessages();
  const locale = await getLocale();
  return {
    title: 'AirParkHotel | Utilitarian Luxury',
    description: 'Experience luxury and comfort at AirParkHotel',
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
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${inter.variable} font-body antialiased bg-background-cream text-text-dark`}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
