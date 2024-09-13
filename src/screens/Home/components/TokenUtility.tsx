/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";
import useWindowDimensions from "@hooks/useWindowDimensions";
import { useMemo } from "react";
import { isMobile } from "react-device-detect";
import TokenUtilityMap from "./TokenUtilityMap";

interface Props {
  height: number;
  titleTop: number;
}
const TokenUtilityWrapper = styled.section<Props>`
  position: relative;
  height: ${(props) => props.height}px;
  background: url(/backgrounds/bg-token-utility-without-tokenomics.png?v=1)
    no-repeat;
  background-size: 100%;
  margin-top: -1px;
  @media (max-width: 800px) {
    background: url(/backgrounds/bg-token-utility-without-tokenomics-res.png?v=1)
      no-repeat;
    background-size: 100%;
    padding: 2rem 0 8rem;
  }
  h1 {
    padding-top: ${(props) => props.titleTop}px;
    @media (max-width: 800px) {
      font-size: 40px !important;
      margin: 0 0 20px;
    }
  }
  svg {
    max-width: 100% !important;
  }
  .utility {
    &-information {
      width: 100%;
      overflow-x: scroll;
      img {
        padding-right: 40px;
      }
      &::-webkit-scrollbar {
        width: 1px;
      }

      &::-webkit-scrollbar-thumb {
        background: transparent;
      }

      &::-webkit-scrollbar-track {
        background: transparent !important;
      }
      @media (max-width: 600px) {
        padding-left: 20px;
      }
    }
  }
`;

export default function TokenUtility() {
  const { width } = useWindowDimensions();
  const bgImgHeight = useMemo(() => (width * 1205) / 1920, [width]);
  const bgImgHeightMobile = useMemo(() => (width * 815) / 430, [width]);
  const titleTop = useMemo(() => (width * 60) / 1920, [width]);
  return (
    <TokenUtilityWrapper
      height={isMobile ? bgImgHeightMobile : bgImgHeight}
      titleTop={titleTop}
    >
      <h1 className="title-gradient text-center fnt-80px">Token Utility</h1>
      <TokenUtilityMap />
    </TokenUtilityWrapper>
  );
}
