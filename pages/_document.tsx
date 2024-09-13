import createEmotionServer from "@emotion/server/create-instance";
import { emotionCache } from "@utils/cache";
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class _Document extends Document {
  static async getInitialProps(ctx: any) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en" id="html">
        <Head>
          {/* <link rel="icon" type="image/x-icon" href="/app/fav.ico" /> */}
        </Head>
        <body id="body">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

_Document.getInitialProps = async (ctx: DocumentContext) => {
  const originalRenderPage = ctx.renderPage;
  const { extractCriticalToChunks } = createEmotionServer(emotionCache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props: any) =>
        <App emotionCache={emotionCache} {...props} />,
    });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style: any) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));
  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        {emotionStyleTags}
        {/* <style dangerouslySetInnerHTML={{ __html: style }} /> */}
      </>
    ),
  };
};
export default _Document;
