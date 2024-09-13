import { useEffect } from "react";

export default function useScrollContent() {
  useEffect(() => {
    let top = 0;
    const offset = 50;
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      const height =
        document.body.scrollTop || document.documentElement.scrollTop;
      const horizontalNav = (document as any).querySelector(".nav-bar");

      if (!horizontalNav) return;

      if (height > top + offset) {
        horizontalNav.style.top = "-180px";
        top = height;
      } else if (height < top - offset) {
        horizontalNav.style.top = "0";
        top = height;
      }

      horizontalNav.style.backgroundColor =
        height === 0 ? "transparent" : "rgba(0, 0, 0, 0.30)";
    }
  }, []);
}
