/* eslint-disable @next/next/no-img-element */
import { DrawerGSAP } from "@components/GSAPWrap/Drawer";
import { socialList } from "@components/List";
import Menu from "@components/Menu";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import ExitIcon from "@icons/ExitIcon";
import MenuBar from "@icons/MenuBar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { isMobile } from "react-device-detect";

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: center;
  .nav-bar {
    width: 100%;
    /* height: 60px; */
    display: flex;
    justify-content: center;
    z-index: 100;
    top: 0;
    @media (max-width: 800px) {
      max-width: 100%;
      padding: 0;
    }
  }
  .navbar {
    max-width: 1111px;
    padding: 0 !important;
    @media (max-width: 800px) {
      max-width: 100%;
      padding: 0;
      padding: 0.5rem !important;
    }
  }
  .navbar-pc {
    @media (max-width: 800px) {
      display: none;
    }
  }
  .navbar-mobile {
    display: none;
    @media (max-width: 800px) {
      display: block;
    }
  }

  .menu-bar,
  .menu-bar-exit {
    outline: none;
    border: none;
    background-color: transparent;
    padding: 0;
  }
  .menu-bar-exit {
    svg {
      margin: 0.5rem 0 0 0;
    }
  }
  .btn-green-bg {
    font-size: 20px;
    margin-left: 40px;
    @media (max-width: 800px) {
      margin-left: 20px;
      margin-right: 5px;
      font-size: 15px;
    }
  }
  .navbar-pc {
    @media (max-width: 800px) {
      display: none !important;
    }
  }
  .navbar-mobile {
    display: none;
    @media (max-width: 800px) {
      display: block;
    }
  }
  .menu-bar,
  .menu-bar-exit {
    outline: none;
    border: none;
    background-color: transparent;
  }
  .menu-drawer {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: #925f33;
    padding: 0.5rem;

    .flex-box {
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      /* height: 100%; */
    }
    // for animation
    display: none;
    opacity: 0;
    height: 0;
  }
`;

export default function Navbar() {
  const router = useRouter();

  const isViewingInforgraphic =
    router.pathname === "/content-creator-competition";

  if (isViewingInforgraphic) return <></>;
  else DrawerGSAP();

  return (
    // <NoSSR>
    <NavbarWrapper>
      <div className="nav-bar">
        <nav className="navbar w-100">
          <Link
            href="/"
            className={css`
              margin-right: 50px;
              @media (max-width: 800px) {
                width: 100px;
                margin-right: 0;
                img {
                  max-width: 100%;
                }
              }
            `}
          >
            <Image
              src="/logos/cocopark-logo-banner.png"
              alt=""
              width={isMobile ? 100 : 160}
              height={isMobile ? 65 : 104}
              priority
            />
          </Link>
          <div className="d-flex align-items-center navbar-pc">
            <Menu />
            <Link href="/dapp" target="_blank">
              <button className="btn-green-bg">Launch App</button>
            </Link>
          </div>
          <div className="navbar-mobile">
            <Link href="/dapp" target="_blank">
              <button className="btn-green-bg">Launch App</button>
            </Link>
            <button className="menu-bar" aria-label="Menu">
              <MenuBar />
            </button>
          </div>
        </nav>
        <div className="menu-drawer">
          <div className="d-flex flex-column h-100">
            <div className="text-end">
              <button className="menu-bar-exit">
                <ExitIcon />
              </button>
            </div>
            <div className="flex-box">
              <Menu />
            </div>
            <div
              className={css`
                margin-top: 60px;
              `}
            ></div>
          </div>
        </div>
      </div>
      <div className="social-fixed">
        {socialList.map((e) => (
          <React.Fragment key={e.link}>
            <Link href={e.link} className="my-2" target="_blank">
              <img src={e.img} alt="" />
            </Link>
          </React.Fragment>
        ))}
      </div>
    </NavbarWrapper>
  );
}
