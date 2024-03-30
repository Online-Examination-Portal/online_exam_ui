import React from "react";
import { Box, Typography } from "@mui/material";
import TeachersTable from "../../../components/private/teachers/teacherstable";


const Teachers = () => {
  return (
    <Box
      className="home"
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
          variant="h2"
          color=" #194D6B"
          sx={{ "& span": { color: "primary.main" } }}
        >
          Teachers
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, color: "#4E90B5" }}>
          Track your teacher's details here.
        </Typography>
        <Typography variant="h6" sx={{ color: "#4E90B5" }}>
          Teacher's details
        </Typography>
      </Box>
      <TeachersTable/>
    </Box>
  );
};
export default Teachers;
