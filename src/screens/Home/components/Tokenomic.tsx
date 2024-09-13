import { tokenomicDescription } from "@components/List";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import TokenomicChart from "@icons/TokenomicChart";
import TokenomicChartRes from "@icons/TokenomicChartRes";
import { isMobile } from "react-device-detect";

const TokenomicWrapper = styled.section`
  position: relative;
  height: 1197px;
  padding: 0 0 8rem;
  background: url(/backgrounds/bg-tokenomic-without-partners.png) no-repeat;
  background-size: 100% 100%;
  z-index: -1;
  @media (max-width: 800px) {
    background: url(/backgrounds/bg-tokenomic-without-partners-res.png)
      no-repeat;
    overflow-x: hidden;
    margin-top: -2px;
    z-index: 0;
  }
  h1 {
    margin-bottom: 30px;
    @media (max-width: 800px) {
      font-size: 30px !important;
      margin-bottom: 0px;
    }
  }
  .tokenomic-footer-bg {
    position: absolute;
    bottom: 0;
    left: 0;
    background: url(/backgrounds/tokenomic-footer-bg.png) no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 339px;
    z-index: 1;
    @media (max-width: 800px) {
      background: url(/backgrounds/tokenomic-footer-bg-res.png) no-repeat;
      height: 250px;
    }
  }
  .tokenomic-board {
    position: absolute;
    bottom: -5%;
    left: 0;
    background: url(/backgrounds/board-tokenomic.png) no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 900px;
    z-index: 0;
    padding: 70px 140px;
    @media (max-width: 800px) {
      padding: 70px 30px;
    }
  }
  .tokenomic-description {
    &:not(:first-of-type) {
      border-top: 1px solid #5a3a1d80;
    }
  }
  svg {
    max-width: 100%;
  }
`;

export default function Tokenomic() {
  return (
    <TokenomicWrapper>
      <div className="tokenomic-footer-bg" />
      <div className="container-cus h-100">
        <div className="tokenomic-board">
          <h1 className="title-gradient text-center fnt-80px">
            Our Tokenomics
          </h1>
          <br />
          <div className="row align-items-center m-0">
            <div className="col-md-6 col-12 ps-0 pe-md-3 pe-0">
              {tokenomicDescription.map((e, i) => (
                <div
                  className="row tokenomic-description mx-0 py-md-4 py-3 my-1"
                  key={i}
                >
                  <div className="col-6 ps-0">
                    <span
                      className={css`
                        font-weight: bold !important;
                        font-size: 24px;
                        color: #5a3a1d;
                        @media (max-width: 800px) {
                          font-size: 18px;
                        }
                      `}
                    >
                      {e.title}
                    </span>
                  </div>
                  <div className="col-6 pe-0">
                    <span
                      className={css`
                        font-weight: 300 !important;
                        font-size: 24px;
                        color: #5a4736;
                        @media (max-width: 800px) {
                          font-size: 18px;
                        }
                      `}
                    >
                      {e.des}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-6 col-12 pe-0 ps-md-3 ps-0">
              {isMobile ? <TokenomicChartRes /> : <TokenomicChart />}
            </div>
          </div>
        </div>
      </div>
    </TokenomicWrapper>
  );
}
