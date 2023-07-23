import React from "react";
import insightsData from "./data/insightsData";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import CollectionsBookmarkOutlinedIcon from "@mui/icons-material/CollectionsBookmarkOutlined";

import { Box, Typography } from "@mui/material";

const InsightsCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      {insightsData.map((data, i) => (
        <Box
          key={`card_${data.id}`}
          variant="outlined"
          sx={{
            width: "33%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid grey",
            borderRadius: "4px",
            padding: "8px",
          }}
        >
          <Box
            sx={{
              width: "50px",
              height: "50px",
              borderRadius: "50px",
              display: "flex",
              justifyItems: "center",
              alignItems: "center",
              backgroundColor: "#F1FAFF",
            }}
          >
            {data.id === "1" ? (
              <BookOutlinedIcon size="small" color="primary" />
            ) : null}
            {data.id === "2" ? (
              <AssignmentIndOutlinedIcon size="small" color="primary" />
            ) : null}
            {data.id === "3" ? (
              <CollectionsBookmarkOutlinedIcon size="small" color="primary" />
            ) : null}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <Typography variant="h5">{data.heading}</Typography>
            <Typography
              color="primary"
              variant="h5"
              sx={{ fontWeight: "bold" }}
            >
              {data.value}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default InsightsCard;
