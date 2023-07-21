import React from "react";
import { Box, Typography } from "@mui/material";
import ImpUpdates from "../../../components/private/home/importantUpdates";
import InsightsCard from "../../../components/private/home/insightsCard";

const Home = () => {
  return (
    <Box
      sx={{
        width: "80%",
        float: "right",
      }}
    >
      <Box sx={{ display: "flex", mt: 4 }}>
        <Typography variant="h2">Hello,</Typography>
        <Typography variant="h2" sx={{ color: "primary.main" }}>
          Abc
        </Typography>
      </Box>
      <Typography variant="h6" sx={{ mb: 4, color: "text.secondary" }}>
        Track your team progress here.
      </Typography>
      <InsightsCard />
      <ImpUpdates />
    </Box>
  );
};
export default Home;
