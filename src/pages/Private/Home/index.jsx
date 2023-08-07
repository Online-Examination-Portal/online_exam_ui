import React from "react";
import { Box, Typography } from "@mui/material";
import ImpUpdates from "../../../components/private/home/importantUpdates";
import InsightsCard from "../../../components/private/home/insightsCard";
import * as classes from './styles'

const Home = () => {
  return (
    <Box
      sx={classes.HomeContainer}
    >

      <Box sx={classes.homeHeader}>
        <Typography
          variant="h3"
          color="#194D6B"
          sx={classes.heading}
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
