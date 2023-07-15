import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h1">Error 404</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Typography varint="h6">GO TO</Typography>
        <Button
          sx={{ ml: 1 }}
          variant="text"
          onClick={() => {
            navigate("/login");
          }}
        >
          HOME
        </Button>
      </Box>
    </Box>
  );
};

export default Error404;
