import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#4E90B5",
    },
    secondary: {
      main: "#194D6B",
    },
    success: {
      main: "#4BB543",
    },
    error: {
      main: "#FF595E",
    },
    warning: {
      main: "#FF9800",
    },
    info: {
      main: "#007CFF",
    },
  },
  typography: {
    fontFamily: [
      "Inter-Black",
      "Inter-ExtraBold",
      "Inter-Bold",
      "Inter-SemiBold",
      "Inter-Medium",
      "Inter-Regular",
      "Inter-Light",
      "Inter-ExtraLight",
      "Inter-Thin",
    ].join(","),

    h1: {
      fontSize: "56px",
      fontStyle: "normal",
      lineHeight: "66px",
      letterSpacing: "-0.4px",
      fontFamily: "Inter-Bold",
    },
    h2: {
      fontSize: "44px",
      fontStyle: "normal",
      fontFamily: "Inter-Medium",
      lineHeight: "54px",
      letterSpacing: "-0.4px",
    },
    h3: {
      fontSize: "34px",
      fontFamily: "Inter-Regular",
      fontStyle: "normal",
      lineHeight: "40px",
    },
    h4: {
      fontSize: "24px",
      fontStyle: "normal",
      lineHeight: "30px",
      letterSpacing: "0.2px",
      fontFamily: "Inter-Regular",
    }, 
    h5: {
      fontSize: "20px",
      fontStyle: "normal",
      lineHeight: "28px",
      letterSpacing: "0.4px",
      fontFamily: "Inter-Regular",
    },
    h6: {
      fontSize: "18px",
      fontStyle: "normal",
      lineHeight: "26px",
      letterSpacing: "0.4px",
      fontFamily: "Inter-Regular",
    },
    body1: {
      fontSize: "16px",
      lineHeight: "24px",
      fontStyle: "normal",
      letterSpacing: "0.4px",
      fontFamily: "Inter-Regular",
    },
    body2: {
      fontSize: "16px",
      lineHeight: "24px",
      fontStyle: "normal",
      letterSpacing: "0.4px",
      fontFamily: "Inter-Regular",
    },
    caption: {
      fontWeight: 400,
      fontSize: "12px",
      fontStyle: "normal",
      letterSpacing: "0.3px",
      fontFamily: "Inter-Light",
    },
  },
});

export const tooltipTheme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          gap: "8px",
          display: "flex",
          padding: "12px",
          fontSize: "11px",
          color: "#FFFFFF",
          lineHeight: "14px",
          borderRadius: "8px",
          flexDirection: "column",
          alignItems: "flex-start",
          backgroundColor: "#424242",
          fontFamily: "Inter-Regular",
        },
        arrow: {
          color: "#424242",
        },
      },
    },
  },
});
