import NoSSR from "@components/NoSSR";
import { ENV } from "@constants/env";
import Head from "next/head";
import { HomeScreens } from "src/screens";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Cocopark Game - Hatch, raise, and battle your own adorable NFT
          crocodiles in CoCo Park!
        </title>
        <meta
          name="description"
          content="Hatch, raise, and battle your own adorable NFT
          crocodiles in CoCo Park!"
        />
        <meta name="keywords" content="cocopark, gamefi, crypto" />
        <link rel="canonical" href="https://cocopark.io"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon-precomposed" href="/favicon.ico" />
        <meta
          property="og:title"
          content="Cocopark Game - Hatch, raise, and battle your own adorable NFT crocodiles in CoCo Park !"
        />
        <meta
          property="og:image"
          content="/thumbnails/thumbnail_cocopark.png/"
        />
        <meta
          property="og:description"
          content=" Hatch, raise, and battle your own adorable NFT
          crocodiles in CoCo Park!"
        />
        <meta property="og:image:width" content="2400" />
        <meta property="og:image:height" content="1260" />

        <link
          rel="preconnect"
          href="https://www.youtube.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org/",
              "@type": "Article",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://cocopark.io/"
              },
              "headline": "Hatch, raise, and battle your own adorable NFT crocodiles in CoCo Park!",
              "description": "Hatch, raise, and battle your own adorable NFT crocodiles in CoCo Park!",
              "image": {
                "@type": "ImageObject",
                "url": "",
                "width": "",
                "height": ""
              },
              "author": {
                "@type": "Organization",
                "name": "Cocopark"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Cocopark",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://cocopark.io/_next/image?url=%2Flogos%2Fcocopark-logo-banner.png&w=384&q=75",
                  "width": "",
                  "height": ""
                }
              },
              "datePublished": "2024-05-01",
              "dateModified": "2024-05-22"
            }`,
          }}
        />
        {ENV.IS_PRODUCTION && (
          <>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-4S4CNQJH35"
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
             
               gtag('config', 'G-4S4CNQJH35');`,
              }}
            />
          </>
        )}
      </Head>
      <NoSSR>
        <HomeScreens />
      </NoSSR>
    </>
  );
}
