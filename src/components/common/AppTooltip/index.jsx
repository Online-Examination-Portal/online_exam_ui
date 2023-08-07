import { Box, Tooltip } from "@mui/material";
import React, { useRef, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { tooltipTheme } from "../../../theme";

const AppTooltip = ({ children, title }) => {
  const toolTipRef = useRef();

  const [isToolTipRequired, setIsToolTipRequired] = useState(false);

  const handleTooltip = () => {
    if (
      toolTipRef.current &&
      toolTipRef.current.firstChild.offsetWidth <
        toolTipRef.current.firstChild.scrollWidth
    ) {
      setIsToolTipRequired(true);
    } else {
      setIsToolTipRequired(false);
    }
  };
  return (
    <Box style={{ width: "100%" }} onMouseOver={handleTooltip}>
      {isToolTipRequired ? (
        <ThemeProvider theme={tooltipTheme}>
          <Tooltip arrow title={title}>
            <Box ref={toolTipRef}>{children}</Box>
          </Tooltip>
        </ThemeProvider>
      ) : (
        <Box style={{ width: "100%" }} ref={toolTipRef}>
          {children}
        </Box>
      )}
    </Box>
  );
};

export default AppTooltip;
