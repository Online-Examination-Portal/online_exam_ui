import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Banner from "../../../components/private/courses/banner";
import CourseBox from "../../../components/private/courses/courseBox";
import * as classes from "./styles";
import CourseDrawer from "../../../modules/CourseDrawer";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const Courses = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <Box sx={classes.courseContainer}>
        <Box sx={classes.innerContainer}>
          <Box sx={classes.headerContainer}>
            <Box sx={classes.headingContainer}>
              <Typography variant="h3" color="secondary">
                Courses
              </Typography>
              <Typography variant="body2" color="primary">
                Track your courses details here.
              </Typography>
            </Box>
            <Button
              startIcon={<AddRoundedIcon />}
              onClick={toggleDrawer}
              sx={classes.addCourse}
            >
              Add Courses
            </Button>
          </Box>
          <Banner />
          <CourseBox />
        </Box>
      </Box>
      <CourseDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </React.Fragment>
  );
};

export default Courses;
