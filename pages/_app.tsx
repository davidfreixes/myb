import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { NextIntlClientProvider } from "next-intl";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

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
        <NextIntlClientProvider
          locale={router.locale}
          timeZone="Europe/Vienna"
          messages={pageProps.messages}
        >
          <Component {...pageProps} />
        </NextIntlClientProvider>
      </MantineProvider>
      {/* </GoogleReCaptchaProvider> */}
    </>
  );
}
