import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import SideNav from "../../modules/sidenav";

const ProtectedLayout = () => {
  return (
    <Box className="layoutContainer">
      <SideNav/>
      <Outlet />
    </Box>
  );
};

export default ProtectedLayout;
