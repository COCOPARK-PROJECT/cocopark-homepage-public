import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const EXIT_BUTTON_CLASS = ".menu-bar-exit";

export const DrawerGSAP = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  useGSAP(() => {
    const ham: any = document.querySelector(".menu-bar");
    const exit: any = document.querySelector(EXIT_BUTTON_CLASS);
    const menu: any = document.querySelector(".menu-drawer");
    // const links = menu.querySelectorAll('li');

    let tl = gsap.timeline({ paused: false });

    tl.to(menu, {
      duration: 0.2,
      opacity: 1,
      display: "block",
      height: "100vh", // change this to 100vh for full-height menu
      ease: "expo.inOut",
    }).to("#html", {
      overflow: "hidden",
      duration: 0.1,
    });
    // tl.from(links, {
    //     duration: 1,
    //     opacity: 0,
    //     y: 20,
    //     stagger: 0.1,
    //     ease: 'expo.inOut',
    // }, "-=0.5");

    tl.reverse();

    ham.addEventListener("click", () => {
      tl.reversed(false);
    });

    exit.addEventListener("click", () => {
      tl.reversed(true);
    });
  }, {});
};
