/* eslint-disable @next/next/no-img-element */
import { featuresList } from "@components/List";
import { css } from "@emotion/css";
import styled from "@emotion/styled";

const FeaturesWrapper = styled.section`
  position: relative;
  height: 1568px;
  padding: 15rem 0 8rem;
  background: url(/backgrounds/bg-features.png) no-repeat;
  background-size: 100% 100%;
  @media (max-width: 800px) {
    background: url(/backgrounds/bg-features-res.png) no-repeat;
    height: 1250px;
    padding: 10rem 0 8rem;
  }
  h1 {
    margin-bottom: 80px;
    @media (max-width: 800px) {
      font-size: 31px !important;
      margin-bottom: 10px;
    }
  }
  .feature {
    &-box {
      position: relative;
      background: url(/backgrounds/feature-box.svg) no-repeat;
      background-size: 100% 100%;
      width: 100%;
      height: 337px;
      @media (max-width: 800px) {
        height: 180px;
      }
    }
    &-box-title {
      position: absolute;
      top: -30px;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      background: url(/backgrounds/title-rock.svg) no-repeat;
      background-size: 100% 100%;
      width: 100%;
      height: 80px;
      @media (max-width: 1680px) {
        top: -20px;
      }
      @media (max-width: 800px) {
        width: 75%;
      }
    }
    &-box-img {
      @media (max-width: 800px) {
        max-width: 55%;
      }
    }
  }
`;

export default function Features() {
  return (
    <FeaturesWrapper>
      <div id="features" className="container-cus">
        <h1 className="title-gradient text-center fnt-80px">
          {`Features Of The Game`}
        </h1>
        <br />
        <div className="row m-0">
          {featuresList.map((e, i) => (
            <div className="col-md-3 col-6 my-md-5 my-3" key={i}>
              <div className="feature-box">
                <div className="feature-box-title">
                  <div className="d-flex align-items-center justify-content-center h-100">
                    <span
                      className={css`
                        color: #414141;
                        font-size: 26px;
                        @media (max-width: 800px) {
                          font-size: 15px;
                        }
                      `}
                    >
                      {e.title}
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center h-100">
                  <img className="feature-box-img" src={e.img} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FeaturesWrapper>
  );
}
