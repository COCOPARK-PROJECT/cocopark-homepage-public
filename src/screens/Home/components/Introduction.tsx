import { css } from "@emotion/css";
import styled from "@emotion/styled";
import useWindowDimensions from "@hooks/useWindowDimensions";
import BgIntroduction from "@icons/BgIntroduction";
import classNames from "classnames";
import Image from "next/image";
import { useMemo, useState } from "react";
import { isMobile } from "react-device-detect";

interface Props {
  height: number;
}
const IntroductionWrapper = styled.section<Props>`
  position: relative;
  height: ${(props) => props.height - 2}px;
  @media (max-width: 800px) {
    margin-top: -2px;
  }
  .bg-introduction {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    svg {
      max-width: 100% !important;
    }
  }
  .bg-blur-top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 230px;
    background: url(/backgrounds/bg-blur-top.png) no-repeat;
    background-size: 100% 100%;
    z-index: 0;
    @media (max-width: 800px) {
      height: 80px;
    }
  }
  h1 {
    position: relative;
    z-index: 1;
    white-space: pre-wrap;
    margin-bottom: 40px;
    @media (max-width: 800px) {
      font-size: 28px !important;
      -webkit-text-stroke: 2px #783113 !important;
      -webkit-text-stroke-width: 2 !important;
    }
  }
  p {
    font-size: 24px;
    position: relative;
    z-index: 1;
    margin-bottom: 0;
    @media (max-width: 1024px) {
      font-size: 18px !important;
    }
  }
`;

export default function Introduction() {
  const { width } = useWindowDimensions();
  const sessionWidth = 1920;
  const sessionHeight = 1208;
  const scaleHeight = useMemo(
    () => Math.round((width * sessionHeight) / sessionWidth),
    [width]
  );
  const scaleHeightMobile = useMemo(
    () => Math.round((width * 1487) / 430),
    [width]
  );

  const iconMuteTop = Math.round((width * 295) / 1394);
  const iconMuteLeft = Math.round((width * 1240) / 1394);

  const renderVideo = (width: number) => {
    const fWidth = 517;
    const fHeight = 490;
    // Video frame
    const frameWidth = Math.round((width * fWidth) / 430);
    const frameWLeft = Math.round((width * 20) / 430);
    const frameHeight = Math.round((width * fHeight) / fWidth);
    const frameImgHeight = Math.round((width * 442) / 430);
    // Video
    const marginLeftVideo = Math.round((width * 45) / 430);
    const marginTopVideo = Math.round((width * 65) / 430);
    const videoWidth = Math.round((width * 378) / 430);
    const videoHeight = Math.round((width * 213) / 430);

    return (
      <div
        className={css`
          width: ${frameWidth}px;
          position: relative;
          height: ${frameHeight}px;
          overflow: hidden;
          margin-left: -${frameWLeft}px;
          margin-top: 75px;
        `}
      >
        <div
          className={css`
            display: flex;
            margin-left: ${marginLeftVideo}px;
            margin-top: ${marginTopVideo}px;
          `}
        >
          <iframe
            width={videoWidth}
            height={videoHeight}
            src="https://www.youtube.com/embed/pSWN9aJo7mA?si=i2fLzVaw9Ds56JJ5&autoplay=1&mute=1&loop=1"
            allow="autoplay"
            title="Intro video"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  };

  const [muted, setMuted] = useState<boolean>(true);

  const handleClickMute = () => {
    var video = document.getElementById("intro_video");
    if (video) {
      // @ts-ignore
      video.muted = !video.muted;
      // @ts-ignore
      setMuted(video.muted);
    }
  };
  return (
    <IntroductionWrapper height={isMobile ? scaleHeightMobile : scaleHeight}>
      <div className="bg-blur-top" />
      {!isMobile && (
        <div
          onClick={handleClickMute}
          className={css`
            position: absolute;
            top: ${iconMuteTop}px;
            left: ${iconMuteLeft}px;
            cursor: pointer;
          `}
        >
          <Image
            src={muted ? "/icons/mute.svg" : "/icons/unmute.svg"}
            width={24}
            height={24}
            alt=""
            priority
          />
        </div>
      )}
      <div className="bg-introduction">
        {isMobile ? (
          <Image
            src="/backgrounds/bg-introduction-res.png"
            width={width}
            height={scaleHeightMobile}
            alt=""
            priority
          />
        ) : (
          <BgIntroduction width={width} height={scaleHeight} />
        )}
      </div>
      <div className="h-100">
        <div className="row h-100">
          <div className="col-md-6 col-12">
            <div className="d-flex align-items-md-center h-100">
              <div>
                {/* <motion.div
                initial={{ opacity: 0, x: -300 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  ease: "linear",
                  duration: .7,
                }}
              > */}
                <div
                  className={classNames(
                    "container-cus",
                    !isMobile
                      ? css`
                          margin-right: 0;
                          padding-left: 50px;
                        `
                      : css`
                          padding-right: 50px;
                        `
                  )}
                >
                  <div style={{ marginTop: isMobile ? 50 : 0 }}></div>
                  <h1 className="title-gradient">
                    {`Coco Park
Virtual World,
Real Benefits!`}
                  </h1>
                  <p>
                    Hatch, raise, and battle your own adorable NFT crocodiles in
                    CoCo Park! Game Built on blockchain lets you earn $COPA
                    tokens through exciting quests, battles, and breeding. Use
                    your tokens to upgrade your crocodile squad or cash them out
                    for real rewards. Join the thriving CoCo Park community and
                    experience the future of blockchain entertainment!
                  </p>
                </div>
                {/* </motion.div> */}
                {isMobile && renderVideo(width)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </IntroductionWrapper>
  );
}
