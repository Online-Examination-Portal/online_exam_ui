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
      <Typography
        variant="h2"
        sx={{ "& span": { color: "primary.main" }, mt: 4 }}
      >
        Hello,
        <span>Abc</span>
      </Typography>
      <Typography variant="h6" sx={{ mb: 4, color: "text.secondary" }}>
        Track your team progress here.
      </Typography>
      <InsightsCard />
      <ImpUpdates />
    </Box>
  );
};
export default Home;
