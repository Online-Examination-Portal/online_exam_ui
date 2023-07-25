import React from "react";
import { Box, Typography } from "@mui/material";
import ImpUpdates from "../../../components/private/home/importantUpdates";
import InsightsCard from "../../../components/private/home/insightsCard";

const Home = () => {
  return ( 
    <Box
      className= "home" 
      sx={{
        width: "80%",
        padding: 4,
        bgcolor: "#F1FAFF",
        // paddingTop: 10,
      }}
    >
      <Typography
        variant="h2"
        color=" #194D6B"
        sx={{ "& span": { color: "primary.main" }, mt: 10 }}
      >
        Hello,
        <span>Abc</span>
      </Typography>
      <Typography variant="h6" sx={{ mb: 4, color: "#4E90B5" }}>
        Track your team progress here.
      </Typography>
      <Typography variant="h6" sx={{color: "#4E90B5" }}>
        Insights
      </Typography>
      <InsightsCard />
      <ImpUpdates />
    </Box>
  );
};
export default Home;
