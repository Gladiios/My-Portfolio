import Head from "next/head";
import Providers from "./Providers";

export default function RootLayout({ children }) {
  return (
    <div>
      <Head>
        <title>Erwan Marie - Portfolio</title>
        <meta
          name="description"
          content="Front-end developer portfolio, discover my projects."
        />
      </Head>
      <Providers>{children}</Providers>
    </div>
  );
}
