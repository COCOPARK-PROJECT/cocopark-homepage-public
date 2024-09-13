import { CSSProperties } from "react";
export interface ITheme {
  scheme: "dark" | "light";
  primaryColor: CSSProperties["color"];
  defaultColor: CSSProperties["color"];
  dangerColor: CSSProperties["color"];
  grayColor: CSSProperties["color"];
  gray1Color: CSSProperties["color"];
  whiteColor: CSSProperties["color"];
  blurColor: CSSProperties["color"];
  darkColor: CSSProperties["color"];
  purpleColor: CSSProperties["color"];
  purpleColor1: CSSProperties["color"];
  borderRadius: {
    sm: string;
    md: string;
  };
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    uhd: string;
  };
  responsive(
    breakpoint: string,
    type?: string,
    orientation?: string,
    breakpoint2?: string,
    condition?: boolean
  ): string;
}
