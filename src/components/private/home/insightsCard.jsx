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
        flex: "0 1 auto",
        display: "flex",
        flexDirection: "row",
        padding: "0 32px 16px 32px",
      }}
    >
      {insightsData.map((data, i) => (
        <Box
          key={`card_${data.id}`}
          variant="outlined"
          sx={{
            width: "33%",
            padding: "16px 8px",
            display: "flex",
            borderRadius: "4px",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ffffff",
            boxShadow: "0px 1px 2px 0px rgba(78, 144, 181, 0.54)",
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
              mr: 1
            }}
          >
            {data.id === "1" ? <BookIcon size="small" color="primary" /> : null}
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
