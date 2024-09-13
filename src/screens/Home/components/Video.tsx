import { css } from "@emotion/css";
import styled from "@emotion/styled";
import useWindowDimensions from "@hooks/useWindowDimensions";
import BgPlayVideo from "@icons/BgPlayVideo";
import classNames from "classnames";
import Image from "next/image";
import { useMemo } from "react";
import { isMobile } from "react-device-detect";

interface Props {
  height: number;
}
const VideoWrapper = styled.section<Props>`
  position: relative;
  height: auto;
  margin-top: -5px;
  @media (max-width: 800px) {
    height: ${(props) => props.height - 2}px;
    margin-top: 0px;
  }
  svg {
    z-index: 0;
    @media (max-width: 700px) {
      /* max-width: 100%; */
    }
  }
`;

export default function Video() {
  const { width } = useWindowDimensions();
  const sessionWidth = 430;
  const sessionHeight = 1459;
  const scaleHeight = useMemo(
    () => Math.round((width * sessionHeight) / sessionWidth),
    [width]
  );
  const videoBoxWidth = useMemo(() => Math.round((width * 340) / 430), [width]);
  const videoBoxTop = useMemo(() => Math.round((width * 950) / 430), [width]);
  const videoBoxLeft = useMemo(() => Math.round((width * 43) / 430), [width]);
  const videoHeight = useMemo(() => Math.round((width * 350) / 430), [width]);
  const renderMobileContent = () => {
    return (
      <>
        <div
          className={classNames(
            "d-flex",
            "justify-content-center",
            "m-0",
            css`
              margin-top: -2px !important;
              margin-left: -1px !important;
            `
          )}
        >
          <Image
            src="/backgrounds/bg-playvideo-res.png?v=1"
            width={width + 1}
            height={scaleHeight}
            alt=""
            priority
          />
        </div>
        <div>
          <div
            className={classNames(
              css`
                position: absolute;
                top: ${videoBoxTop}px;
                left: ${videoBoxLeft}px;
                width: 340px;
                height: 200px;
                z-index: 2;
              `
            )}
          >
            <div
              className={classNames(
                css`
                  position: absolute;
                  width: ${videoBoxWidth}px;
                  height: 200px;
                  z-index: 2;
                  overflow: hidden;
                  border: 1px solid #a64a31;
                  border-radius: 10px;
                `
              )}
            >
              <video
                height={videoHeight}
                loop={true}
                autoPlay={true}
                muted
                playsInline
                className={classNames(
                  css`
                    margin-top: -65px;
                  `
                )}
              >
                <source src="/videos/video_02.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <VideoWrapper height={scaleHeight}>
      {isMobile ? renderMobileContent() : <BgPlayVideo width={width} />}
    </VideoWrapper>
  );
}
