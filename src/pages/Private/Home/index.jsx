import React from "react";
import { Box, Typography } from "@mui/material";
import ImpUpdates from "../../../components/private/home/importantUpdates";
import InsightsCard from "../../../components/private/home/insightsCard";

const Home = () => {
  return (
    <Box
      sx={{
        width: "80%",
        display: "flex",
        height: "100vh",
        bgcolor: "#F1FAFF",
        flexFlow: "column",
      }}
    >

      <Box sx={{ padding: "16px 32px", flex: "0 1 auto" }}>
        <Typography
          variant="h3"
          color="#194D6B"
          sx={{ "& span": { color: "primary.main" } }}
        >
          Hello,{" "}
          <span> Abc</span>
        </Typography>
        <Typography variant="body2" sx={{ mb: 4, color: "#4E90B5" }}>
          Track your team progress here.
        </Typography>
        <Typography variant="body1" sx={{ color: "#4E90B5" }}>
          Insights
        </Typography>
      </Box>
      <InsightsCard />
      <ImpUpdates />
    </Box>
  );
};
export default Home;
