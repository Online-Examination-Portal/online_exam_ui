import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Banner from "../../../components/private/courses/banner";
import CourseBox from "../../../components/private/courses/courseBox";
import * as classes from "./styles";
import CourseDrawer from "../../../modules/CourseDrawer";
import AddRoundedIcon from "@mui/icons-material/AddRounded";


const Courses = () => {
  return ( 
    <Box sx={classes.courseContainer}>
      <Box sx={classes.innerContainer}>
        <Box sx={classes.headerContainer}>
          <Box 
            sx={classes.headingContainer} 
          >
            <Box sx={{dislay: 'flex', flexDirection: 'column'}}>
            <Typography variant="h3" color="secondary">
              Courses
            </Typography>
            <Typography variant="body2" color="primary">
              Track your courses details here.
            </Typography>
            </Box>
        <Box>
          <Button
            startIcon={<AddRoundedIcon />}
            onClick={CourseDrawer.toggleDrawer}
            sx={classes.addCourse}
          >
            Add Courses 
          </Button>
          </Box>
          </Box>

          <CourseDrawer/>
        </Box>
        <Banner />
        <CourseBox />
      </Box>
    </Box>
  );
};

export default Courses;
