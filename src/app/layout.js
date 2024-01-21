import Head from "next/head";
import Providers from "./Providers";

export default function RootLayout({ children }) {
  return (
    <div>
      <Head>
        <title>Erwan Marie - Web Developer</title>
        <meta
          name="description"
          content="Front-end developer portfolio, discover my projects here."
        />
      </Head>
      <Providers>{children}</Providers>
    </div>
  );
}
