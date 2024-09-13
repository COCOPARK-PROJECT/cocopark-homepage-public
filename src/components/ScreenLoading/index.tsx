import { css } from "@emotion/css";
import { Global, css as gCss } from "@emotion/react";
import Lottie from "lottie-react";
import screenLoading from "./screenLoading.json";
export default function ScreenLoading() {
  return (
    <div
      className={css`
        position: fixed;
        height: 100vh;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url(/backgrounds/bg-loading.png) no-repeat;
        background-position: center;
        background-size: cover;
        align-content: "center";
        z-index: 99999;
      `}
    >
      <Global
        styles={gCss`
        html, body {
          overflow: hidden;
        }
      `}
      />
      <div
        className={css`
          display: inline-block;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          display: flex;
        `}
      >
        <Lottie
          animationData={screenLoading}
          loop={true}
          className={css`
            width: 200px;
            @media (max-width: 600px) {
              width: 100px;
            }
          `}
        />
      </div>
    </div>
  );
}
