"use client";
import { css } from "@emotion/css";
/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";
import useWindowDimensions from "@hooks/useWindowDimensions";
import Image from "next/image";
import { useMemo } from "react";
import { isMobile } from "react-device-detect";

interface Props {
  height: number;
}
const BannerWrapper = styled.section<Props>`
  height: ${(props) => props.height}px;
  background: url(/backgrounds/bg-banner.png) no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    background: url(/backgrounds/bg-banner-res.png) no-repeat;
    height: ${(props) => props.height}px;
  }
  .banner-box {
    position: relative;
    overflow: visible;
    &-wood-bar {
      position: absolute;
      bottom: -11%;
      left: 0;
      width: 100%;
      height: 110px;
      background: url(/backgrounds/wood-bar.png) no-repeat;
      background-size: 100% 100%;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 800px) {
        bottom: -27%;
      }
    }
  }
  .btn-orange-bg {
    font-size: 26px;
    @media (max-width: 800px) {
      font-size: 20px;
    }
  }
  .banner-img {
    @media (max-width: 800px) {
      max-width: 100%;
    }
  }
`;

export default function Banner() {
  const { width } = useWindowDimensions();
  const sessionWidth = 1920;
  const sessionHeight = 1208;
  const scaleHeight = useMemo(
    () => Math.round((width * sessionHeight) / sessionWidth),
    [width]
  );

  const renderLogoBanner = () => {
    return (
      <Image
        src="/logos/cocopark-logo-banner.png"
        width={isMobile ? 387 : 672}
        height={isMobile ? 252 : 437}
        alt=""
        priority
      />
    );
  };
  return (
    <BannerWrapper height={isMobile ? 872 : scaleHeight}>
      <div className="container-cus">
        <div>
          {/* <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        ease: "linear",
                        duration: .7,
                    }}
                > */}
          <div className="banner-box">
            {renderLogoBanner()}
            <div className="banner-box-wood-bar">
              <div className="mt-2 d-flex align-items-center">
                <a href="https://t.me/cocopark_airdrop_bot" target="_blank">
                  <button className="btn-orange-bg btn-orange-bg-long fw-bold me-2">
                    Play Now
                  </button>
                </a>
                <div>
                  <button
                    className="btn-orange-bg btn-orange-bg-isIcon btn-orange-bg-short"
                    aria-label="Google Play"
                  >
                    <Image
                      src="/icons/ch-play-icon.svg"
                      width={isMobile ? 20 : 30}
                      height={isMobile ? 20 : 30}
                      alt=""
                    />
                  </button>
                  <div
                    className={css`
                      color: white;
                      font-size: 10px;
                      margin-bottom: -16px;
                      margin-left: ${isMobile ? 0 : 6}px;
                    `}
                  >
                    Coming Soon
                  </div>
                </div>
                <div>
                  <button
                    className="btn-orange-bg btn-orange-bg-isIcon btn-orange-bg-short"
                    aria-label="Apple Store"
                  >
                    <Image
                      src="/icons/iphone-icon.svg"
                      width={isMobile ? 20 : 30}
                      height={isMobile ? 20 : 30}
                      alt=""
                    />
                  </button>
                  <div
                    className={css`
                      color: white;
                      font-size: 10px;
                      margin-bottom: -16px;
                      margin-left: ${isMobile ? 3 : 6}px;
                    `}
                  >
                    Coming Soon
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </motion.div> */}
        </div>
      </div>
    </BannerWrapper>
  );
}
