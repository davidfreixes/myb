import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { I18nextProvider } from "react-i18next";
import "../utils/i18n";
import i18n from "../utils/i18n";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#000000" />
      </Head>
      {/* <NextSeo {...SEO} /> */}
      {/* <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_CAPTCHA_CLIENT}
        language="es"
        useEnterprise={true}
      > */}
      {/* Google Analytics */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-3HH99L60F4`}
      />
      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date()); gtag('config', 'G-3HH99L60F4');
          `}
      </Script>
      <MantineProvider>
        <I18nextProvider i18n={i18n}>
          <Component {...pageProps} />
        </I18nextProvider>
      </MantineProvider>
      {/* </GoogleReCaptchaProvider> */}
    </>
  );
}
