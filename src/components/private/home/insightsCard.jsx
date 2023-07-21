import React from "react";
import insightsData from "./data/insightsData";
import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";

const InsightsCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      {insightsData.map((data) => (
        <Card variant="outlined" sx={{ width: "25%" }}>
          <CardContent>
            <IconButton sx={{ color: "primary.main" }}>{data.icon}</IconButton>
            <Box sx={{ float: "right" }}>
              <Typography variant="h5">{data.heading}</Typography>
              <Typography
                variant="h5"
                sx={{ color: "primary.main", fontWeight: "bold" }}
              >
                {data.value}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default InsightsCard;
