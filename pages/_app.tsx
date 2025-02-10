import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";
import { I18nextProvider } from "react-i18next";
import SEO from "../next-seo.config";
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
      <NextSeo {...SEO} />
      {/* <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_CAPTCHA_CLIENT}
        language="es"
        useEnterprise={true}
      > */}
      <MantineProvider>
        <I18nextProvider i18n={i18n}>
          <Component {...pageProps} />
        </I18nextProvider>
      </MantineProvider>
      {/* </GoogleReCaptchaProvider> */}
    </>
  );
}
