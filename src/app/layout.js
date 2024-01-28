import Head from "next/head";
import Providers from "./Providers";

export default function RootLayout({ children }) {
  const jsonLdData = {
    "@context": "http://schema.org",
    name: "Erwan Marie - Web Developer",
    description:
      "Je suis un développeur web spécialisé Front-End avec une expertise en React. Découvrez mon portfolio et les différents projets sur lesquels j'ai travaillé.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Caen",
      postalCode: "14000",
    },
    url: "https://www.erwan-marie.dev/",
  };
  return (
    <div>
      <Head>
        <title>Erwan Marie - Web Developer</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>
      <Providers>{children}</Providers>
    </div>
  );
}
