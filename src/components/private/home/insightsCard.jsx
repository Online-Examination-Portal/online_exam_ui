import React from "react";
import insightsData from "./data/insightsData";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import BookIcon from "@mui/icons-material/Book";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";

import { Box, Typography } from "@mui/material";

const InsightsCard = () => {
  return (
    <Box
      sx={{
        padding: "0 32px 16px 32px",
      }}
    >
      <Box
        sx={{
          flex: "0 1 auto",
          display: "flex",
          flexDirection: "row",
          borderRadius: "4px",
          boxShadow: "0px 1px 2px 0px rgba(78, 144, 181, 0.54)",
        }}
      >
        {insightsData.map((data, i) => (
          <Box
            key={`card_${data.id}`}
            variant="outlined"
            sx={{
              width: "33%",
              display: "flex",
              padding: "16px 8px",
              borderRadius: "4px",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#ffffff",
            }}
          >
            <Box
              sx={{
                width: "50px",
                height: "50px",
                borderRadius: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#F1FAFF",
                mr: 2,
              }}
            >
              {data.id === "1" ? (
                <BookIcon size="small" color="primary" />
              ) : null}
              {data.id === "2" ? (
                <AssignmentIndIcon size="small" color="primary" />
              ) : null}
              {data.id === "3" ? (
                <CollectionsBookmarkIcon size="small" color="primary" />
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
              <Typography variant="body2">{data.heading}</Typography>
              <Typography
                color="primary"
                variant="body1"
                sx={{ fontWeight: "bold", fontFamily: "Inter-Bold" }}
              >
                {data.value}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default InsightsCard;
