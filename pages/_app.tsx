import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import ScreenLoading from "@components/ScreenLoading";
import { theme } from "@constants/theme";
import { ThemeProvider } from "@emotion/react";
import useScrollContent from "@hooks/useScrollContent";
import "@styles/scss/global.scss";
import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { isDesktop, isMobile, isTablet } from "react-device-detect";
function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap.js")
      : null;

    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  useScrollContent();

  return (
    <ThemeProvider theme={theme}>
      {!loading && <Navbar />}
      <Component {...pageProps} />
      {!loading && <Footer />}
      {loading && <ScreenLoading />}
    </ThemeProvider>
  );
}

App.getInitialProps = async (ctx: any) => {
  if (typeof window === "undefined") {
    try {
      const DeviceDetect = eval('require("node-device-detector")');
      const device = new DeviceDetect();
      const {
        device: { type },
      } = device.detect(ctx.ctx.req.headers["user-agent"]);
      const breakpoint = [
        true,
        type === "tablet",
        type === "desktop",
      ].lastIndexOf(true);

      return {
        isMobile: breakpoint === 0,
        isTablet: breakpoint === 1,
        isDesktop: breakpoint === 2,
      };
    } catch (e) {}
  }
  return {
    isMobile: isMobile,
    isDesktop: isDesktop,
    isTablet: isTablet,
  };
};

export default App;
