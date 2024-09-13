/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";
import _ from "lodash";

const PartnerWrapper = styled.section`
  position: relative;
  height: 1347px;
  padding: 15rem 0 8rem;
  background: url(/backgrounds/bg-partner.png) no-repeat;
  background-size: 100% 100%;
  @media (max-width: 800px) {
    background: url(/backgrounds/bg-partner-res.png) no-repeat;
    background-size: cover;
    padding: 8rem 0;
    height: auto;
    margin-top: -2px !important;
  }
  h1 {
    margin-bottom: 50px;
    white-space: pre-wrap;
    @media (max-width: 800px) {
      font-size: 40px !important;
    }
  }
  @media (max-width: 800px) {
    .partner-scroll {
      overflow-x: scroll;
    }
    .row {
      width: 1520px !important;
    }
    .container-cus {
      max-width: 100% !important;
    }
  }
  .col-1-5 {
    flex: 0 0 auto;
    width: 20%;
  }
`;

export default function Partner() {
  return (
    <PartnerWrapper>
      <div className="container-cus">
        <h1 className="title-gradient text-center fnt-80px">
          {`Coco Park Partners 
With The Best`}
        </h1>
        <br />
        <div className="partner-scroll">
          <div className="row">
            {_.range(20).map((e, i) => (
              <div className="col-1-5 my-2" key={i}>
                <img src="/partner/bnb-chain.png" alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </PartnerWrapper>
  );
}
