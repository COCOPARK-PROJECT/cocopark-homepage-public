import { ITheme } from "src/types/theme";

export const theme: ITheme = {
    scheme: "light",
    primaryColor: "#6C31FE",
    purpleColor: " #8350fe",
    purpleColor1: "#6021fe",
    grayColor: "#9AA5B8",
    gray1Color: "#BCD9F6",
    dangerColor: "#FF3535",
    defaultColor: "",
    whiteColor: "#FFFFFF",
    blurColor: "#FF8700",
    darkColor: "#09080d",
    borderRadius: {
        sm: "1rem",
        md: "1.5rem",
    },
    breakpoints: {
        xs: "480px",
        sm: "768px",
        md: "992px",
        lg: "1200px",
        xl: "1600px",
        xxl: "2000px",
        uhd: "3000px",
    },
    responsive: (
        breakpoint,
        type = "min",
        orientation = "width",
        breakpoint2 = "",
        condition = true
    ) =>
        condition
            ? `@media (${type === "max" ? "max" : "min"
            }-${orientation}: ${breakpoint}) ${type === "between" ? `and (max-${orientation}: ${breakpoint2})` : ""
            } `
            : "",
};