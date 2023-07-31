import React from "react";
import { Box, Typography } from "@mui/material";
import Banner from "../../../components/private/courses/banner";
import CourseBox from "../../../components/private/courses/courseBox";
import * as classes from "./styles";
import CourseDrawer from "../../../components/private/courses/courseDrawer";

const Courses = () => {
  return (
    <Box sx={classes.courseContainer}>
      <Box sx={classes.innerContainer}>
        <Box sx={classes.headerContainer}>
          <Box 
            sx={{
              display: "flex",
              flexDirection: "column",
            }} 
          >
            <Typography variant="h3" color="secondary" fontWeight={700}>
              Courses
            </Typography>
            <Typography variant="h6" color="primary">
              Track your courses details here.
            </Typography>
          </Box>

          <CourseDrawer/>
          {/* <Button sx={classes.buttonContainer} onClick={toggleDrawer}>
            + Add Courses
          </Button> */}
        </Box>
        <Banner />
        <CourseBox />
      </Box>
    </Box>
  );
};

export default Courses;
