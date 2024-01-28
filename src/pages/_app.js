import Head from "next/head";
import Providers from "../app/Providers";
import RootLayout from "../app/layout";
import { appWithTranslation } from "next-i18next";
function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </RootLayout>
  );
}

export default appWithTranslation(MyApp);
