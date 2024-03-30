import { Drawer } from "@mui/material";
import styled from "@emotion/styled";

export const EditServiceStyledDrawer = styled(Drawer)({
  ".MuiDrawer-paper": {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    flexFlow: "column",
    height: "100vh",
    backgroundColor: "#F7FAFC",
    top: "unset",
    bottom: 0,
    borderRadius: "8px 0 0 8px",
  },
});
