import { EXIT_BUTTON_CLASS } from "@components/GSAPWrap/Drawer";
import { css } from "@emotion/css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const menus = [
  {
    label: "Features",
    url: "#features",
  },
  {
    key: "#",
    label: "WhitePaper",
    url: "https://coco-park.gitbook.io/coco-park/",
  },
  {
    label: "Staking",
    url: "#",
  },
  {
    label: "Marketplace",
    url: "#",
  },
  {
    label: "Blog",
    url: "#",
  },
];

export default function Menu() {
  const [current, setCurrent] = useState("/");
  const [openKeys, setOpenKeys] = useState("");
  const router = useRouter();

  useEffect(() => {
    const path =
      router.pathname
        .split("/")
        ?.filter((item) => item)
        .slice(0, 2) || [];
    setCurrent(
      router.pathname === "/" ? "/" : `${path[0] + "/" + path[1]}` || ""
    );
    if (path?.length > 1) {
      // setOpenKeys(path.slice(0, 1));
    } else {
      setOpenKeys("");
    }
  }, [router.pathname]);

  const onCloseDrawerMenu = (url: string) => {
    if (url.length > 1 && !url.includes("http")) {
      const exit: any = document.querySelector(EXIT_BUTTON_CLASS);
      exit.click();
    }
  };

  return (
    <ul className="navbar-nav flex-md-row align-items-md-start align-items-center flex-column">
      {menus.map((menu) => (
        <li
          className="nav-item mx-1 py-2 d-flex align-items-center"
          key={menu.label}
        >
          <Link
            onClick={() => onCloseDrawerMenu(menu.url)}
            href={menu.url}
            className={css`
              padding: 0.25rem 1.5rem;
              font-size: 20px;
              @media (max-width: 800px) {
                font-size: 25px;
              }
            `}
            target={menu.url.includes("http") ? "_blank" : "_self"}
          >
            {menu.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
