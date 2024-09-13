/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";
import useWindowDimensions from "@hooks/useWindowDimensions";
import { useMemo } from "react";
import { isMobile } from "react-device-detect";

interface Props {
  height: number;
}
const RoadmapWrapper = styled.section<Props>`
  position: relative;
  height: ${(props) => props.height}px;
  padding: 8rem 0 8rem;
  background: url(/backgrounds/bg-roadmap.png) no-repeat;
  background-size: 100% 100%;
  @media (max-width: 800px) {
    background: url(/backgrounds/bg-roadmap-res.png) no-repeat;
    background-size: 100% 100%;
    padding: 2rem 0 8rem;
    margin-bottom: -1px;
  }
  h1 {
    margin-top: 60px;
    @media (max-width: 800px) {
      font-size: 40px !important;
      margin: 50px 0 20px;
    }
  }
`;

export default function Roadmap() {
  const { width } = useWindowDimensions();
  const bgImgHeight = useMemo(() => (width * 1324) / 1920, [width]);
  const bgImgHeightMobile = useMemo(() => (width * 2311) / 430, [width]);
  return (
    <RoadmapWrapper height={isMobile ? bgImgHeightMobile : bgImgHeight}>
      <h1 className="title-gradient text-center fnt-80px">Roadmap</h1>
    </RoadmapWrapper>
  );
}
