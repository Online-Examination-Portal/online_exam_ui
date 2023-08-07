import React from "react";
import insightsData from "./data/insightsData";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import BookIcon from "@mui/icons-material/Book";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import * as classes from './styles'
import { Box, Typography } from "@mui/material";

const InsightsCard = () => {
  return (
    <Box
      sx={classes.insightsOuterContainer}
    >
      <Box
        sx={classes.insightsContainer}
      >
        {insightsData.map((data, i) => (
          <Box
            key={`card_${data.id}`}
            variant="outlined"
            sx={classes.insightsMappedDataContainer}
          > 
            <Box
              sx={classes.insightsIcons}
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
              sx={classes.insightsDataContainer}
            >
              <Typography variant="body2">{data.heading}</Typography>
              <Typography
                color="primary"
                variant="body1"
                sx={classes.insightsValue}
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
