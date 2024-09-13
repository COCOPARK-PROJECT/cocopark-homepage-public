import { ENV } from "@constants/env";
import { css } from "@emotion/css";
import Head from "next/head";

const BtnWrap = css`
  position: absolute;
  bottom: 20.5vw;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Joinnow = css`
  all: unset;
  transition: 0.1s;
  &:hover {
    scale: 1.04;
  }
`;

const ImgBtn = css`
  width: 32vw;
  margin-left: 2rem;
  @media (width <= 550px) {
    margin-left: 1rem;
  }
`;

export default function Inforgraphic() {
  return (
    <>
      <Head>
        <title>Cocopark Creator Competition - Let&apos;s join and fight!</title>
        <meta
          name="description"
          content="Cocopark Creator Competition - Let's join and fight!"
        />
        <meta name="keywords" content="cocopark, gamefi, crypto" />
        <link rel="canonical" href="https://cocopark.io"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon-precomposed" href="/favicon.ico" />
        <meta
          property="og:title"
          content="Cocopark Creator Competition - Let's join and fight!"
        />
        <meta
          property="og:image"
          content="/thumbnails/thumbnail_cocopark.png/"
        />
        <meta
          property="og:description"
          content="Cocopark Creator Competition - Let's join and fight!"
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
              "headline": "Cocopark Creator Competition - Let's join and fight!",
              "description": "Cocopark Creator Competition - Let's join and fight!",
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
      <section className="position-relative">
        <a href={ENV.COMPETITION_URL} target="_blank">
          <img src="/backgrounds/inforgraphic.png" alt="" className="w-100" />
        </a>
        <div className={BtnWrap}>
          <button
            className={Joinnow}
            onClick={() => window.open(ENV.COMPETITION_URL, "_blank")}
          >
            <img src="/buttons/join-now.png" alt="" className={ImgBtn} />
          </button>
        </div>
      </section>
    </>
  );
}
