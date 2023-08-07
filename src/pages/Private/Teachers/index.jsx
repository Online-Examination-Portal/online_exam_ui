import React from "react";
import { Box, Typography } from "@mui/material";
import TeachersTable from "../../../components/private/teachers/teacherstable";
import TeacherDrawer from "../../../components/private/teachers/drawer";
import * as classes from './styles'

const Teachers = () => {
  return (
    <Box
      className="home"
      sx={classes.teachersContainer}
    >
      <Box
        sx={classes.teachersheader}
      >
        <Box sx={{ flex: "0 1 auto" }}>
          <Typography
            variant="h3"
            color=" #194D6B"
            sx={classes.heading}
          >
            Teachers
          </Typography>
          <Typography variant="body2" sx={{ mb: 4, color: "#4E90B5" }}>
            Track your teacher's details here.
          </Typography>
          <Typography variant="body1" sx={{ color: "#4E90B5" }}>
            Teacher's details
          </Typography>
        </Box>
        <Box
          sx={classes.teacherDrawerComponent}
        >
          <TeacherDrawer />
        </Box>
      </Box>

      <TeachersTable />
    </Box>
  );
};
export default Teachers;
