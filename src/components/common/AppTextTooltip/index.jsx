import { Tooltip } from "@mui/material";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { tooltipTheme } from "../../../theme";

const AppTextTooltip = ({ children, title, position = "top" }) => {
  return (
    <ThemeProvider theme={tooltipTheme}>
      <Tooltip arrow title={title} position={position}>
        {children}
      </Tooltip>
    </ThemeProvider>
  );
};

export default AppTextTooltip;
