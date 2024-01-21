import Head from "next/head";
import Providers from "./Providers";

export default function RootLayout({ children }) {
  return (
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
      {children}
    </Providers>
  );
}
