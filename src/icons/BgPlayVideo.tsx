import { css } from "@emotion/css";
import Image from "next/image";

export default function BgPlayVideo({ width }: any) {
  const baseWidth = 1920;
  const height = (width * 1194) / baseWidth;
  const videoBoxTop = (width * 320) / baseWidth;
  const videoBoxLeft = (width * 215) / baseWidth;
  const videoBoxWidth = (width * 780) / baseWidth;
  const videoBoxHeight = (width * 530) / baseWidth;
  const videoHeight = (width * 790) / baseWidth;
  const videoTop = (width * -130) / baseWidth;

  return (
    <>
      <Image
        src={"/backgrounds/bg-video.png?v=1"}
        width={width}
        height={height}
        alt=""
        priority
      />
      <div
        className={css`
          position: absolute;
          overflow: hidden;
          top: ${videoBoxTop}px;
          left: ${videoBoxLeft}px;
          width: ${videoBoxWidth}px;
          height: ${videoBoxHeight}px;
          border: 2px solid #a64a31;
          border-radius: 30px;
        `}
      >
        <video
          loop={true}
          autoPlay={true}
          muted
          playsInline
          className={css`
            margin-top: ${videoTop}px;
            height: ${videoHeight}px;
          `}
        >
          <source src="/videos/video_02.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}
