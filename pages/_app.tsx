import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import type { AppProps } from "next/app";
import { I18nextProvider } from "react-i18next";
import "../utils/i18n";
import i18n from "../utils/i18n";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <I18nextProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nextProvider>
    </MantineProvider>
  );
}
