/* eslint-disable @next/next/no-img-element */
import { footerMenu } from "@components/List";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const FooterWrapper = styled.section`
  position: relative;
  padding: 8rem 0 10rem;
  background: url(/backgrounds/bg-footer.png) no-repeat;
  background-size: 100% 100%;
  @media (max-width: 800px) {
    height: auto;
    padding: 4rem 0 2rem;
    background: url(/backgrounds/bg-footer-res.png) no-repeat;
  }
  p {
    font-size: 24px;
  }
  .f-title {
    margin: 50px 0 30px;
  }
  .f-des {
    padding: 0 30px;
    text-align: center;
    @media (max-width: 800px) {
      padding: 0 10px;
      font-size: 19px;
    }
  }
  form {
    @media (max-width: 800px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  input {
    background-color: transparent;
    border: 1px solid #f6f6f6;
    border-radius: 30px;
    padding: 10px 20px;
    outline: none;
    color: #fff;
    width: 400px;
    font-size: 20px;
    @media (max-width: 800px) {
      width: 100%;
    }
    &::placeholder {
      color: #f6f6f6 !important;
    }
  }
  .btn-green-bg {
    font-size: 23px !important;
  }
  .col-menu-footer {
    text-align: center;
    a {
      font-size: 28px;
    }
    @media (max-width: 800px) {
      width: 50% !important;
      max-width: 50% !important;
      flex: none !important;
      margin: 10px 0;
      a {
        font-size: 20px;
      }
    }
  }
`;

export default function Footer() {
  const router = useRouter();
  const isViewingInforgraphic =
    router.pathname === "/content-creator-competition";

  if (isViewingInforgraphic) return <></>;
  return (
    <FooterWrapper>
      <div className="container-cus">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div>
            <Image
              src="/logos/cocopark-logo-banner.png"
              alt=""
              width={160}
              height={104}
              priority
            />
          </div>
          <p className="f-title">Virtual World, Real Benefits!</p>
          <p className="f-des">
            Hatch, raise, and battle your own adorable NFT crocodiles in CoCo
            Park! Game Built on blockchain lets you earn $COPA tokens through
            exciting quests, battles, and breeding. Use your tokens to upgrade
            your crocodile squad or cash them out for real rewards. Join the
            thriving CoCo Park community and experience the future of blockchain
            entertainment!
          </p>
          <br />
          <form action="#">
            <input type="text" placeholder="Enter your email" />
            <button className="btn-green-bg ms-3 mt-md-0 mt-1">
              Subscribe
            </button>
          </form>
          <br />
          <div className="row w-100 mt-4">
            {footerMenu.map((e, i) => (
              <div className="col col-menu-footer" key={e.title}>
                <Link href={e.url} target="_blank">
                  {e.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
}
