import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const ProtectedLayout = () => {
  return (
    <Box className="layoutContainer">
      <Outlet />
    </Box>
  );
};

export default ProtectedLayout;
