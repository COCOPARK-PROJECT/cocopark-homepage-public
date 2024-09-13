import { css } from "@emotion/css";

export default function TokenUtilityMap() {
  return (
    <div
      className={css`
        div[class^="group-"] {
          cursor: pointer;
          transition: all 0.5s;
          &:hover {
            transform: scale(1.05);
          }
        }
        .main-container-m {
          display: none;
        }
        .main-container {
          transform: scale(0.9);
          position: relative;
          width: 1122px;
          height: 887px;
          margin: 0 auto;
          .group-play-to-airdrop {
            position: absolute;
            width: 24.24%;
            height: 17.7%;
            top: 0;
            left: 38.06%;
            background: url(/images/894040c5-4b5c-4b18-9c0f-37ff0601c78b.png)
              no-repeat center;
            background-size: 100% 100%;
            z-index: 14;
          }
          .frame {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-wrap: nowrap;
            gap: 8px;
            position: relative;
            width: 258px;
            margin: 32.5px 0 0 7px;
            z-index: 15;
          }
          .play-to-airdrop {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-shrink: 0;
            flex-basis: auto;
            position: relative;
            width: 157px;
            height: 25px;
            color: transparent;
            font-family: Rowdies, var(--default-font-family);
            font-size: 20px;
            font-weight: 700 !important;
            line-height: 24.84px;
            text-align: center;
            text-transform: capitalize;
            white-space: nowrap;
            background: linear-gradient(180deg, #ffe344, #fbaf1a);
            z-index: 16;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke: 2px #783113;
          }
          .play-and-complete-missions {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            align-self: stretch;
            flex-shrink: 0;
            position: relative;
            width: 258px;
            min-width: 0;
            height: 60px;
            color: #783113;
            font-family: Rowdies, var(--default-font-family);
            font-size: 16px;
            font-weight: 300;
            line-height: 19.872px;
            text-align: center;
            z-index: 17;
          }
          .flex-row-ab {
            position: absolute;
            top: 125px;
            right: 0;
            bottom: 117px;
            left: 0;
            z-index: 49;
          }
          .group-trade {
            position: absolute;
            width: 24.24%;
            height: 24.34%;
            top: 0;
            left: 6.42%;
            background: url(/images/894040c5-4b5c-4b18-9c0f-37ff0601c78b.png)
              no-repeat center;
            background-size: 100% 100%;
            z-index: 39;
          }
          .frame-3 {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-wrap: nowrap;
            gap: 8px;
            position: relative;
            width: 258px;
            margin: 32.5px 0 0 7px;
            z-index: 40;
          }
          .trade {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-shrink: 0;
            flex-basis: auto;
            position: relative;
            width: 58px;
            height: 25px;
            color: transparent;
            font-family: Rowdies, var(--default-font-family);
            font-size: 20px;
            font-weight: 700 !important;
            line-height: 24.84px;
            text-align: center;
            text-transform: capitalize;
            white-space: nowrap;
            background: linear-gradient(180deg, #ffe344, #fbaf1a);
            z-index: 41;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke: 2px #783113;
          }
          .buy-sell-trade {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            align-self: stretch;
            flex-shrink: 0;
            position: relative;
            width: 258px;
            min-width: 0;
            height: 60px;
            color: #783113;
            font-family: Rowdies, var(--default-font-family);
            font-size: 16px;
            font-weight: 300;
            line-height: 19.872px;
            text-align: center;
            z-index: 42;
          }
          .group-governance {
            position: absolute;
            width: 24.24%;
            height: 24.34%;
            top: 0;
            left: 70.41%;
            background: url(/images/894040c5-4b5c-4b18-9c0f-37ff0601c78b.png)
              no-repeat center;
            background-size: 100% 100%;
            z-index: 29;
          }
          .frame-5 {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-wrap: nowrap;
            gap: 8px;
            position: relative;
            width: 258px;
            margin: 22.5px 0 0 7px;
            z-index: 30;
          }
          .governance {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-shrink: 0;
            flex-basis: auto;
            position: relative;
            width: 119px;
            height: 25px;
            color: transparent;
            font-family: Rowdies, var(--default-font-family);
            font-size: 20px;
            font-weight: 700 !important;
            line-height: 24.84px;
            text-align: center;
            text-transform: capitalize;
            white-space: nowrap;
            background: linear-gradient(180deg, #ffe344, #fbaf1a);
            z-index: 31;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke: 2px #783113;
          }
          .participate-governance-dao {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            align-self: stretch;
            flex-shrink: 0;
            position: relative;
            width: 258px;
            min-width: 0;
            height: 80px;
            color: #783113;
            font-family: Rowdies, var(--default-font-family);
            font-size: 16px;
            font-weight: 300;
            line-height: 19.872px;
            text-align: center;
            z-index: 32;
          }
          .neie {
            position: absolute;
            width: 3.92%;
            height: 6.51%;
            top: 5.58%;
            left: 48.4%;
            background: url(/images/9082ed6d-2e08-4166-a5a8-cb61557f4bae.png)
              no-repeat center;
            background-size: 100% 100%;
            z-index: 5;
          }
          .layer {
            position: absolute;
            top: 52.291px;
            right: 290.981px;
            bottom: 57.236px;
            left: 299px;
            background: url(/images/7012f59b-3a5d-4d57-9b59-93cde543496f.png)
              no-repeat center;
            background-size: cover;
          }
          .flex-row-ede {
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
            width: 423.995px;
            height: 42px;
            margin: 64.709px 0 0 53px;
            z-index: 10;
          }
          .neie-6 {
            flex-shrink: 0;
            position: relative;
            width: 43.995px;
            height: 42px;
            background: url(/images/1b2f9b67-1a83-494e-80c9-c9b88a3cd006.png)
              no-repeat center;
            background-size: 100% 100%;
            z-index: 10;
          }
          .neie-7 {
            flex-shrink: 0;
            position: relative;
            width: 43.995px;
            height: 42px;
            background: url(/images/5a9510e0-1ba4-4ed9-a225-b4113a4ea1c2.png)
              no-repeat center;
            background-size: 100% 100%;
            z-index: 8;
          }
          .token {
            position: relative;
            width: 273.164px;
            height: 266.708px;
            margin: 28px 0 0 129px;
            background: url(/images/47a63e3cd8547750e3cb07b68a8b82b9124d92d3.png)
              no-repeat center;
            background-size: cover;
            z-index: 2;
            overflow: visible auto;
            animation: shake 2s infinite alternate;
          }
          .vector {
            position: relative;
            height: 85.751px;
            margin: 82.304px 0 0 3.62px;
            background: url(/images/7ea45862-8562-427b-ae58-cf144062fbd1.png)
              no-repeat center;
            background-size: cover;
            z-index: 4;
          }
          .flex-row-d {
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
            width: 423.995px;
            height: 42px;
            margin: 23.292px 0 0 53px;
            z-index: 11;
          }
          .nei {
            flex-shrink: 0;
            position: relative;
            width: 43.995px;
            height: 42px;
            background: url(/images/1fb52ca8-ef09-4e6a-a787-ea53bb63bb36.png)
              no-repeat center;
            background-size: 100% 100%;
            z-index: 11;
          }
          .nei-8 {
            flex-shrink: 0;
            position: relative;
            width: 43.995px;
            height: 42px;
            background: url(/images/9ea09c8b-fb11-472d-9185-4cf04115a668.png)
              no-repeat center;
            background-size: 100% 100%;
            z-index: 9;
          }
          .group-staking {
            position: absolute;
            width: 24.24%;
            height: 24.34%;
            top: 37.21%;
            left: 0;
            background: url(/images/894040c5-4b5c-4b18-9c0f-37ff0601c78b.png)
              no-repeat center;
            background-size: 100% 100%;
            z-index: 49;
          }
          .frame-a {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-wrap: nowrap;
            gap: 8px;
            position: relative;
            width: 258px;
            margin: 32.5px 0 0 7px;
            z-index: 50;
          }
          .staking {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-shrink: 0;
            flex-basis: auto;
            position: relative;
            width: 79px;
            height: 25px;
            color: transparent;
            font-family: Rowdies, var(--default-font-family);
            font-size: 20px;
            font-weight: 700 !important;
            line-height: 24.84px;
            text-align: center;
            text-transform: capitalize;
            white-space: nowrap;
            background: linear-gradient(180deg, #ffe344, #fbaf1a);
            z-index: 51;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke: 2px #783113;
          }
          .rewards-for-defi-gamefi {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            align-self: stretch;
            flex-shrink: 0;
            position: relative;
            width: 258px;
            min-width: 0;
            height: 60px;
            color: #783113;
            font-family: Rowdies, var(--default-font-family);
            font-size: 16px;
            font-weight: 300;
            line-height: 19.872px;
            text-align: center;
            z-index: 52;
          }
          .group-purchasing {
            position: absolute;
            width: 24.24%;
            height: 24.34%;
            top: 37.21%;
            left: 75.76%;
            background: url(/images/894040c5-4b5c-4b18-9c0f-37ff0601c78b.png)
              no-repeat center;
            background-size: 100% 100%;
            z-index: 24;
          }
          .frame-c {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-wrap: nowrap;
            gap: 8px;
            position: relative;
            width: 258px;
            margin: 32.5px 0 0 7px;
            z-index: 25;
          }
          .purchasing {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-shrink: 0;
            flex-basis: auto;
            position: relative;
            width: 112px;
            height: 25px;
            color: transparent;
            font-family: Rowdies, var(--default-font-family);
            font-size: 20px;
            font-weight: 700 !important;
            line-height: 24.84px;
            text-align: center;
            text-transform: capitalize;
            white-space: nowrap;
            background: linear-gradient(180deg, #ffe344, #fbaf1a);
            z-index: 26;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke: 2px #783113;
          }
          .coco-park-token {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            align-self: stretch;
            flex-shrink: 0;
            position: relative;
            width: 258px;
            min-width: 0;
            height: 60px;
            color: #783113;
            font-family: Rowdies, var(--default-font-family);
            font-size: 16px;
            font-weight: 300;
            line-height: 19.872px;
            text-align: center;
            z-index: 27;
          }
          .neie-d {
            position: absolute;
            width: 3.92%;
            height: 6.51%;
            top: 46.05%;
            left: 24.96%;
            background: url(/images/ef7410ca-95b8-4e61-adc5-b754355c49bf.png)
              no-repeat center;
            background-size: 100% 100%;
            z-index: 6;
          }
          .neie-e {
            position: absolute;
            width: 3.92%;
            height: 6.51%;
            top: 46.05%;
            left: 71.48%;
            background: url(/images/9ba91a43-e004-4612-afd6-a32c2accfaad.png)
              no-repeat center;
            background-size: 100% 100%;
            z-index: 7;
          }
          .group-purchasingreeding {
            position: absolute;
            width: 24.24%;
            height: 24.34%;
            top: 75.66%;
            left: 6.42%;
            background: url(/images/894040c5-4b5c-4b18-9c0f-37ff0601c78b.png)
              no-repeat center;
            background-size: 100% 100%;
            z-index: 44;
          }
          .frame-10 {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-wrap: nowrap;
            gap: 8px;
            position: relative;
            width: 258px;
            margin: 32.5px 0 0 7px;
            z-index: 45;
          }
          .breeding {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-shrink: 0;
            flex-basis: auto;
            position: relative;
            width: 92px;
            height: 25px;
            color: transparent;
            font-family: Rowdies, var(--default-font-family);
            font-size: 20px;
            font-weight: 700 !important;
            line-height: 24.84px;
            text-align: center;
            text-transform: capitalize;
            white-space: nowrap;
            background: linear-gradient(180deg, #ffe344, #fbaf1a);
            z-index: 46;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke: 2px #783113;
          }
          .pair-breed-creatures {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            align-self: stretch;
            flex-shrink: 0;
            position: relative;
            min-width: 0;
            height: 60px;
            color: #783113;
            font-family: Rowdies, var(--default-font-family);
            font-size: 16px;
            font-weight: 300;
            line-height: 19.872px;
            text-align: center;
            z-index: 47;
          }
          .group-hatch {
            position: absolute;
            width: 24.24%;
            height: 24.34%;
            top: 75.66%;
            left: 70.41%;
            background: url(/images/894040c5-4b5c-4b18-9c0f-37ff0601c78b.png)
              no-repeat center;
            background-size: 100% 100%;
            z-index: 34;
          }
          .frame-12 {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-wrap: nowrap;
            gap: 8px;
            position: relative;
            margin: 32.5px 0 0 7px;
            z-index: 35;
          }
          .hatch {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-shrink: 0;
            flex-basis: auto;
            position: relative;
            width: 61px;
            height: 25px;
            color: transparent;
            font-family: Rowdies, var(--default-font-family);
            font-size: 20px;
            font-weight: 700 !important;
            line-height: 24.84px;
            text-align: center;
            text-transform: capitalize;
            white-space: nowrap;
            background: linear-gradient(180deg, #ffe344, #fbaf1a);
            z-index: 36;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke: 2px #783113;
          }
          .create-unique-and-rare {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            align-self: stretch;
            flex-shrink: 0;
            position: relative;
            min-width: 0;
            height: 60px;
            color: #783113;
            font-family: Rowdies, var(--default-font-family);
            font-size: 16px;
            font-weight: 300;
            line-height: 19.872px;
            text-align: center;
            z-index: 37;
          }
          .neie-13 {
            position: absolute;
            width: 3.92%;
            height: 6.51%;
            top: 86.51%;
            left: 48.4%;
            background: url(/images/da44e0dc-befc-41bb-a687-130d3dce7315.png)
              no-repeat center;
            background-size: 100% 100%;
            z-index: 12;
          }
          .group-play-to-earn {
            position: absolute;
            width: 24.24%;
            height: 17.7%;
            top: 82.3%;
            left: 38.06%;
            background: url(/images/894040c5-4b5c-4b18-9c0f-37ff0601c78b.png)
              no-repeat center;
            background-size: 100% 100%;
            z-index: 19;
          }
          .frame-15 {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-wrap: nowrap;
            gap: 8px;
            position: relative;
            margin: 32.5px 0 0 7px;
            z-index: 20;
          }
          .play-to-earn {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-shrink: 0;
            flex-basis: auto;
            position: relative;
            height: 25px;
            color: transparent;
            font-family: Rowdies, var(--default-font-family);
            font-size: 20px;
            font-weight: 700 !important;
            line-height: 24.84px;
            text-align: center;
            text-transform: capitalize;
            white-space: nowrap;
            background: linear-gradient(180deg, #ffe344, #fbaf1a);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke: 2px #783113;
          }
          .users-can-earn {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            align-self: stretch;
            flex-shrink: 0;
            position: relative;
            min-width: 0;
            height: 60px;
            color: #783113;
            font-family: Rowdies, var(--default-font-family);
            font-size: 16px;
            font-weight: 300;
            line-height: 19.872px;
            text-align: center;
            z-index: 22;
          }
        }

        @keyframes shake {
          0% {
            transform: rotate(-15deg);
          }
          100% {
            transform: rotate(15deg);
          }
        }
        @media (max-width: 1300px) {
          .main-container {
            display: none;
          }
          .main-container-m {
            position: relative;
            width: 375px;
            height: 264px;
            margin: 0 auto;
            display: block;
            .group-play-to-airdrop {
              position: relative;
              width: 146px;
              height: 46px;
              margin: 0 0 0 115px;
              background: url(/images/52503177-e4a7-4e62-8ca6-bb972fc4fb03.png)
                no-repeat center;
              background-size: cover;
              z-index: 15;
            }
            .play-to-airdrop {
              display: flex;
              align-items: center;
              justify-content: center;
              position: absolute;
              width: 110px;
              height: 17px;
              top: 15px;
              left: 18px;
              color: transparent;
              font-family: Rowdies, var(--default-font-family);
              font-size: 14px;
              font-weight: 700 !important;
              line-height: 17px;
              text-align: center;
              text-transform: capitalize;
              white-space: nowrap;
              background: linear-gradient(180deg, #ffe344, #fbaf1a);
              z-index: 16;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              -webkit-text-stroke: 1.5px #783113;
            }
            .flex-row-af {
              position: relative;
              width: 375px;
              height: 168px;
              margin: 2px 0 0 0;
              z-index: 36;
            }
            .group-trade {
              position: absolute;
              width: 105px;
              height: 46px;
              top: 0;
              left: 18px;
              background: url(/images/c8fe4b24-e37d-48cf-a631-157e32230754.png)
                no-repeat center;
              background-size: cover;
              z-index: 36;
            }
            .trade {
              display: flex;
              align-items: center;
              justify-content: center;
              position: absolute;
              width: 41px;
              height: 17px;
              top: 15px;
              left: 32px;
              color: transparent;
              font-family: Rowdies, var(--default-font-family);
              font-size: 14px;
              font-weight: 700 !important;
              line-height: 17px;
              text-align: center;
              text-transform: capitalize;
              white-space: nowrap;
              background: linear-gradient(180deg, #ffe344, #fbaf1a);
              z-index: 37;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              -webkit-text-stroke: 1.5px #783113;
            }
            .group-governance {
              position: absolute;
              width: 105px;
              height: 46px;
              top: 0;
              left: 259px;
              background: url(/images/0d8a29e5-45eb-4efd-9d23-7e9d2fd6ce22.png)
                no-repeat center;
              background-size: cover;
              z-index: 33;
            }
            .governance {
              display: flex;
              align-items: center;
              justify-content: center;
              position: absolute;
              width: 83px;
              height: 17px;
              top: 15px;
              left: 11px;
              color: transparent;
              font-family: Rowdies, var(--default-font-family);
              font-size: 14px;
              font-weight: 700 !important;
              line-height: 17px;
              text-align: center;
              text-transform: capitalize;
              white-space: nowrap;
              background: linear-gradient(180deg, #ffe344, #fbaf1a);
              z-index: 34;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              -webkit-text-stroke: 1.5px #783113;
            }
            .nei {
              position: absolute;
              width: 12.577px;
              height: 12.007px;
              top: 2px;
              left: 182.186px;
              background: url(/images/8a7bd205-7c83-4f35-abb2-c043a08084d5.png)
                no-repeat center;
              background-size: cover;
              z-index: 6;
            }
            .layer {
              position: absolute;
              width: 152.092px;
              height: 153.08px;
              top: 6.657px;
              left: 112.432px;
              background: url(/images/d8ceb861-b267-4682-aab3-3e1937f592d1.png)
                no-repeat center;
              background-size: cover;
              z-index: 1;
            }
            .flex-row-ed {
              display: flex;
              align-items: center;
              justify-content: space-between;
              position: relative;
              width: 121.211px;
              height: 12.007px;
              margin: 18.499px 0 0 15.152px;
              z-index: 11;
            }
            .nei-4 {
              flex-shrink: 0;
              position: relative;
              width: 12.577px;
              height: 12.007px;
              background: url(/images/021378e8-7561-47c8-9607-98c3e12164f8.png)
                no-repeat center;
              background-size: cover;
              z-index: 11;
            }
            .nei-5 {
              flex-shrink: 0;
              position: relative;
              width: 12.577px;
              height: 12.007px;
              background: url(/images/c7ed9c16-ae7d-4309-8ec5-ac6cd238e577.png)
                no-repeat center;
              background-size: cover;
              z-index: 9;
            }
            .token {
              position: relative;
              width: 112.41px;
              height: 109.753px;
              margin: -9.557px 0 0 19.283px;
              background: url(/images/47a63e3cd8547750e3cb07b68a8b82b9124d92d3.png)
                no-repeat center;
              background-size: cover;
              z-index: 3;
              overflow: visible auto;
              animation: shake 2s infinite alternate;
            }
            .vector {
              position: relative;
              width: 108.845px;
              height: 35.287px;
              margin: 33.869px 0 0 1.49px;
              background: url(/images/eac377a4-3ba7-4701-8991-ab358e8ab4bd.png)
                no-repeat center;
              background-size: cover;
              z-index: 5;
            }
            .flex-row-e {
              display: flex;
              align-items: center;
              justify-content: space-between;
              position: relative;
              width: 121.211px;
              height: 12.007px;
              margin: -9.287px 0 0 15.152px;
              z-index: 12;
            }
            .neiye {
              flex-shrink: 0;
              position: relative;
              width: 12.577px;
              height: 12.007px;
              background: url(/images/c37b4cfb-b096-42c7-810a-905f95a3f927.png)
                no-repeat center;
              background-size: cover;
              z-index: 12;
            }
            .neiye-6 {
              flex-shrink: 0;
              position: relative;
              width: 12.577px;
              height: 12.007px;
              background: url(/images/8e5498ec-8088-4c59-8a3d-28717efa6955.png)
                no-repeat center;
              background-size: cover;
              z-index: 10;
            }
            .group-staking {
              position: absolute;
              width: 105px;
              height: 46px;
              top: 60px;
              left: 0;
              background: url(/images/9f4f0329-5f4b-4537-9edf-c43d7f55511e.png)
                no-repeat center;
              background-size: cover;
              z-index: 24;
            }
            .staking {
              display: flex;
              align-items: center;
              justify-content: center;
              position: absolute;
              width: 56px;
              height: 17px;
              top: 15px;
              left: 24px;
              color: transparent;
              font-family: Rowdies, var(--default-font-family);
              font-size: 14px;
              font-weight: 700 !important;
              line-height: 17px;
              text-align: center;
              text-transform: capitalize;
              white-space: nowrap;
              background: linear-gradient(180deg, #ffe344, #fbaf1a);
              z-index: 25;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              -webkit-text-stroke: 1.5px #783113;
            }
            .group-purchasing {
              position: absolute;
              width: 105px;
              height: 46px;
              top: 60px;
              left: 270px;
              background: url(/images/c6644494-45e5-4677-b7ce-65ec9b71dbfb.png)
                no-repeat center;
              background-size: cover;
            }
            .purchasing {
              display: flex;
              align-items: center;
              justify-content: center;
              position: absolute;
              width: 79px;
              height: 17px;
              top: 15px;
              left: 13px;
              color: transparent;
              font-family: Rowdies, var(--default-font-family);
              font-size: 14px;
              font-weight: 700 !important;
              line-height: 17px;
              text-align: center;
              text-transform: capitalize;
              white-space: nowrap;
              background: linear-gradient(180deg, #ffe344, #fbaf1a);
              z-index: 22;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              -webkit-text-stroke: 1.5px #783113;
            }
            .nei-9 {
              position: absolute;
              width: 12.577px;
              height: 12.007px;
              top: 76.614px;
              left: 107px;
              background: url(/images/c85c14d1-a09b-46af-b834-dd194478418a.png)
                no-repeat center;
              background-size: cover;
              z-index: 7;
            }
            .nei-a {
              position: absolute;
              width: 12.577px;
              height: 12.007px;
              top: 76.614px;
              left: 256.229px;
              background: url(/images/9634b32c-5666-4fe3-a80e-60d719bc2f7d.png)
                no-repeat center;
              background-size: cover;
              z-index: 8;
            }
            .group-breeding {
              position: absolute;
              width: 105px;
              height: 46px;
              top: 122px;
              left: 20px;
              background: url(/images/6b59905e-276d-4e75-b8a7-92de5e172bdf.png)
                no-repeat center;
              background-size: cover;
              z-index: 27;
            }
            .breeding {
              display: flex;
              align-items: center;
              justify-content: center;
              position: absolute;
              width: 65px;
              height: 17px;
              top: 15px;
              left: 20px;
              color: transparent;
              font-family: Rowdies, var(--default-font-family);
              font-size: 14px;
              font-weight: 700 !important;
              line-height: 17px;
              text-align: center;
              text-transform: capitalize;
              white-space: nowrap;
              background: linear-gradient(180deg, #ffe344, #fbaf1a);
              z-index: 28;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              -webkit-text-stroke: 1.5px #783113;
            }
            .group-hatch {
              position: absolute;
              width: 105px;
              height: 46px;
              top: 122px;
              left: 257px;
              background: url(/images/afd1249c-8d7e-4b85-ac18-47067345fe3f.png)
                no-repeat center;
              background-size: cover;
              z-index: 30;
            }
            .hatch {
              display: flex;
              align-items: center;
              justify-content: center;
              position: absolute;
              width: 43px;
              height: 17px;
              top: 15px;
              left: 31px;
              color: transparent;
              font-family: Rowdies, var(--default-font-family);
              font-size: 14px;
              font-weight: 700 !important;
              line-height: 17px;
              text-align: center;
              text-transform: capitalize;
              white-space: nowrap;
              background: linear-gradient(180deg, #ffe344, #fbaf1a);
              z-index: 31;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              -webkit-text-stroke: 1.5px #783113;
            }
            .neiye-d {
              position: absolute;
              width: 12.577px;
              height: 12.007px;
              top: 151.229px;
              left: 182.186px;
              background: url(/images/0557ac94-7837-43a8-8cdc-82684c4b8ef6.png)
                no-repeat center;
              background-size: cover;
              z-index: 13;
            }
            .group-play-to-earn {
              position: relative;
              width: 146px;
              height: 46px;
              margin: 2px 0 0 115px;
              background: url(/images/07f3df7d-4fc7-49d2-abdb-625939d12c3c.png)
                no-repeat center;
              background-size: cover;
              z-index: 18;
            }
            .play-to-earn {
              display: flex;
              align-items: center;
              justify-content: center;
              position: absolute;
              width: 94px;
              height: 17px;
              top: 15px;
              left: 26px;
              color: transparent;
              font-family: Rowdies, var(--default-font-family);
              font-size: 14px;
              font-weight: 700 !important;
              line-height: 17px;
              text-align: center;
              text-transform: capitalize;
              white-space: nowrap;
              background: linear-gradient(180deg, #ffe344, #fbaf1a);
              z-index: 19;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              -webkit-text-stroke: 1.5px #783113;
            }
          }
        }
      `}
    >
      <div className="main-container">
        <div className="group-play-to-airdrop">
          <div className="frame">
            <span className="play-to-airdrop">Play To Airdrop</span>
            <span className="play-and-complete-missions">
              Play and complete missions to receive rewards in the form of
              tokens or in-game items
            </span>
          </div>
        </div>
        <div className="flex-row-ab">
          <div className="group-trade">
            <div className="frame-3">
              <span className="trade">Trade</span>
              <span className="buy-sell-trade">
                Buy, sell and trade item or characters using $COPA with other
                players on Marketplace
              </span>
            </div>
          </div>
          <div className="group-governance">
            <div className="frame-5">
              <span className="governance">Governance</span>
              <span className="participate-governance-dao">
                Enables players to participate in the governance process through
                a decentralized autonomous organization (DAO)
              </span>
            </div>
          </div>
          <div className="neie" />
          <div className="layer">
            <div className="flex-row-ede">
              <div className="neie-6" />
              <div className="neie-7" />
            </div>
            <div className="token">
              <div className="vector" />
            </div>
            <div className="flex-row-d">
              <div className="nei" />
              <div className="nei-8" />
            </div>
          </div>
          <div className="group-staking">
            <div className="frame-a">
              <span className="staking">Staking</span>
              <span className="rewards-for-defi-gamefi">
                Rewards for DeFi/GameFi are involved with the practice of
                staking in the form of token $COPA
              </span>
            </div>
          </div>
          <div className="group-purchasing">
            <div className="frame-c">
              <span className="purchasing">Purchasing</span>
              <span className="coco-park-token">
                $COPA is the digital token circulated around the game Coco Park
                ecosystem
              </span>
            </div>
          </div>
          <div className="neie-d" />
          <div className="neie-e" />
          <div className="group-purchasingreeding">
            <div className="frame-10">
              <span className="breeding">Breeding</span>
              <span className="pair-breed-creatures">
                Use $COPA to endlessly pair and breed to create powerful and
                unique creatures
              </span>
            </div>
          </div>
          <div className="group-hatch">
            <div className="frame-12">
              <span className="hatch">Hatch</span>
              <span className="create-unique-and-rare">
                Create unique and rare versions by hatching eggs or collecting
                puzzle pieces
              </span>
            </div>
          </div>
          <div className="neie-13" />
        </div>
        <div className="group-play-to-earn">
          <div className="frame-15">
            <span className="play-to-earn">Play-to-Earn</span>
            <span className="users-can-earn">
              Users can earn $COPA tokens through a series of actions while
              playing the game
            </span>
          </div>
        </div>
      </div>
      <div className="main-container-m">
        <div className="group-play-to-airdrop">
          <span className="play-to-airdrop">Play To Airdrop</span>
        </div>
        <div className="flex-row-af">
          <div className="group-trade">
            <span className="trade">Trade</span>
          </div>
          <div className="group-governance">
            <span className="governance">Governance</span>
          </div>
          <div className="nei" />
          <div className="layer">
            <div className="flex-row-ed">
              <div className="nei-4" />
              <div className="nei-5" />
            </div>
            <div className="token">
              <div className="vector" />
            </div>
            <div className="flex-row-e">
              <div className="neiye" />
              <div className="neiye-6" />
            </div>
          </div>
          <div className="group-staking">
            <span className="staking">Staking</span>
          </div>
          <div className="group-purchasing">
            <span className="purchasing">Purchasing</span>
          </div>
          <div className="nei-9" />
          <div className="nei-a" />
          <div className="group-breeding">
            <span className="breeding">Breeding</span>
          </div>
          <div className="group-hatch">
            <span className="hatch">Hatch</span>
          </div>
          <div className="neiye-d" />
        </div>
        <div className="group-play-to-earn">
          <span className="play-to-earn">Play-to-Earn</span>
        </div>
      </div>
    </div>
  );
}
