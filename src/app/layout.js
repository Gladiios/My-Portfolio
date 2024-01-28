import Head from "next/head";
import Providers from "./Providers";

export default function RootLayout({ children }) {
  return (
    <div>
      <Head>
        <title>Erwan Marie - Web Developer</title>
        <script type="application/ld+json">
          {`
            "@context": "http://schema.org",
            "@type": "LocalBusiness",
            "name": "Erwan Marie - Web Developer",
            "description": "Je suis un développeur web spécialisé Front-End,avec une expertise en React.Découvrez mon portfolio et les différents projets sur lesquels j'ai travaillé.",
            "address": {
            "@type": "PostalAddress",
            "addressLocality": "Caen",
            "postalCode": "14000"
          `}
        </script>
      </Head>
      <Providers>{children}</Providers>
    </div>
  );
}
