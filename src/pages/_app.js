import Head from "next/head";
import Providers from "../app/Providers";
import RootLayout from "../app/layout";
import { appWithTranslation } from "next-i18next";
function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Providers>
        <Head>
          <title>Erwan Marie - Web Developer</title>
          <meta
            name="google-site-verification"
            content="LIsFWwggpPVwk8sihUpK3gb8cSRG_buSVr8MD3CTHpU"
          />
          <meta
            name="description"
            content="Front-end developer portfolio, discover my projects here."
          />
        </Head>
        <Component {...pageProps} />
      </Providers>
    </RootLayout>
  );
}

export default appWithTranslation(MyApp);
