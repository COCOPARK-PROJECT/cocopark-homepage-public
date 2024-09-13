import { css } from "@emotion/css";
import Image from "next/image";

interface Props {
  width: number;
  height: number;
}
export default function BgIntroduction({ width, height }: Props) {
  const frameWidth = (width * 760) / 1517;
  const videoTop = (width * 280) / 1517;
  const videoRight = (width * 80) / 1517;
  const videoWidth = (width * 600) / 1517;
  return (
    <>
      <Image
        src={"/backgrounds/bg-intro.png"}
        width={width}
        height={height}
        alt=""
        priority
      />
      <div
        className={css`
          position: absolute;
          top: ${videoTop}px;
          right: ${videoRight}px;
          width: ${videoWidth}px;
        `}
      >
        <video
          controls
          loop={true}
          autoPlay
          muted
          className="video-1"
          id="intro_video"
        >
          <source src="/videos/video_01.mp4" type="video/mp4" />
        </video>
      </div>
      <div
        className={css`
          position: absolute;
          top: ${0}px;
          right: ${0}px;
        `}
      >
        <Image
          src={"/backgrounds/bg-intro-video-frame.png"}
          width={frameWidth}
          height={height}
          alt=""
          priority
        />
      </div>
    </>
  );
}
