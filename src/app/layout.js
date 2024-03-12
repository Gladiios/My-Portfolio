import Head from "next/head";
import Providers from "./Providers";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    <div>
      <Head>
        <title>Erwan Marie - Web Developer</title>
        <meta
          name="description"
          content="Je suis un développeur web spécialisé Front-End,avec une expertise en React.Découvrez mon portfolio et les différents projets sur lesquels j'ai travaillé."
        />
      </Head>
      <Providers>
        {children}
        <Analytics />
      </Providers>
    </div>
  );
}
