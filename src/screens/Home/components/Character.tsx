/* eslint-disable @next/next/no-img-element */
import { charactersList } from "@components/List";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import useWindowDimensions from "@hooks/useWindowDimensions";
import classNames from "classnames";
import { useMemo, useState } from "react";
import { isMobile } from "react-device-detect";

interface Props {
  height: number;
  titleTop: number;
}

const CharacterWrapper = styled.section<Props>`
  position: relative;
  height: ${(props) => props.height}px;
  background: url(/backgrounds/bg-character.png) no-repeat;
  background-size: 100% 100%;

  @media (max-width: 800px) {
    background: url(/backgrounds/bg-character-res.png) no-repeat;
    background-size: 100% 100%;
    padding: 10rem 0 8rem;
    margin-bottom: -1px;
  }
  h1 {
    padding-top: ${(props) => props.titleTop}px;
    @media (max-width: 800px) {
      font-size: 31px !important;
      margin-bottom: 10px;
    }
  }
  .character {
    &-box {
      position: relative;
      background-size: 100% 100%;
      width: 147px;
      height: 180px;
      margin-left: 16px;
      margin-right: 16px;
      transition: transform 0.5s;
      &:hover {
        transform: scale(0.95);
        cursor: pointer;
      }
      @media (max-width: 800px) {
        width: 97px;
        height: 127px;
        margin-left: 8px;
        margin-right: 8px;
        margin-top: 20px;
      }
    }
    &-box-title {
    }
    &-box-img {
      width: 90px;
      @media (max-width: 800px) {
        width: 60px;
      }
    }
    &-title-active {
      background: linear-gradient(180deg, #ffe344 0.15%, #fbaf1a 99.9%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      padding: 0;
      -webkit-text-stroke: 2px #783113;
      -webkit-text-stroke-width: 2;
      font-size: 20px;
      @media (max-width: 800px) {
        font-size: 14px !important;
        -webkit-text-stroke: 1.6px #783113;
        -webkit-text-stroke-width: 1.6;
      }
    }
    &-title-inactive {
      background: linear-gradient(180deg, #8fa2ae 0.15%, #616e76 99.9%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke: 1px #f9fcf8;
      -webkit-text-stroke-width: 1;
      padding: 0;
      font-size: 20px;
      @media (max-width: 800px) {
        font-size: 14px !important;
      }
    }
  }
`;

export default function Character() {
  const { width } = useWindowDimensions();
  const bgImgHeight = useMemo(() => (width * 1952) / 1920, [width]);
  const bgImgHeightMobile = useMemo(() => (width * 1267) / 430, [width]);
  const titleTop = useMemo(() => (width * 660) / 1920, [width]);
  const titleTopMobile = useMemo(() => (width * 80) / 430, [width]);
  const characterTop = useMemo(
    () => (width * (isMobile ? 0 : -50)) / 1920,
    [width]
  );

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const renderCharacterItems = () => (
    <>
      <div className={classNames("box-center")}>
        {charactersList.map((e, i) => {
          const isActive = activeIndex === i;
          if (isMobile && i > 1) return <></>;
          return <>{renderCharacterItem(i, e, isActive)}</>;
        })}
      </div>
      {isMobile && (
        <div className={classNames("box-center")}>
          {charactersList.map((e, i) => {
            const isActive = activeIndex === i;
            if (i <= 1) return <></>;
            return <>{renderCharacterItem(i, e, isActive)}</>;
          })}
        </div>
      )}
    </>
  );

  const renderCharacterItem = (i: number, e: any, isActive: boolean) => {
    const bg = isActive
      ? "/characters/bg/bg-character-item-active.png"
      : "/characters/bg/bg-character-item-inactive.png";
    return (
      <div
        onClick={() => setActiveIndex(i)}
        className={classNames(
          "character-box",
          css`
            background: url(${bg}) no-repeat;
          `
        )}
      >
        <div
          className={classNames(
            "box-center",
            css`
              margin-top: 20px;
              opacity: ${i > 1 ? 1 : 0};
            `
          )}
        >
          <img
            height={isMobile ? 24 : 36}
            src={"/characters/title-mintable.svg"}
            alt=""
          />
        </div>

        <div
          className={classNames(
            "box-center",
            css`
              margin-top: -10px;
            `
          )}
        >
          <img
            className="character-box-img"
            src={isActive ? e.imgActive : e.imgInactive}
            alt=""
          />
        </div>
        <div className="box-center">
          <h1
            className={classNames(
              isActive ? "character-title-active" : "character-title-inactive"
            )}
          >
            {e.title}
          </h1>
        </div>
      </div>
    );
  };

  const renderCharacterImgGif = () => (
    <div
      className={classNames(
        "box-center",
        css`
          margin-top: ${characterTop}px;
          margin-bottom: -80px;
        `
      )}
    >
      <img
        height={isMobile ? 350 : 600}
        src={charactersList[activeIndex].img}
        alt=""
      />
    </div>
  );
  return (
    <CharacterWrapper
      height={isMobile ? bgImgHeightMobile : bgImgHeight}
      titleTop={isMobile ? titleTopMobile : titleTop}
    >
      <div id="features" className="container-cus">
        <h1 className="title-gradient text-center fnt-80px">
          {`Cocopark Character`}
        </h1>
        <br />
        {renderCharacterImgGif()}

        {renderCharacterItems()}
      </div>
    </CharacterWrapper>
  );
}
