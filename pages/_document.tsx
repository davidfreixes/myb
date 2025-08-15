import { Head, Html, Main, NextScript } from 'next/document';
import { montserrat, spaceGrotesk } from '@/utils/fonts';

export default function Document() {
  return (
    <Html lang="es" className={`${montserrat.variable} ${spaceGrotesk.variable}`}>
      <Head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
