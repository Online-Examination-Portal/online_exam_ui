import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Banner from "../../../components/private/courses/banner";
import CourseBox from "../../../components/private/courses/courseBox";
import * as classes from "./styles";

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
            <Typography variant="h3" color="secondary">
              Courses
            </Typography>
            <Typography variant="body2" color="primary">
              Track your courses details here.
            </Typography>
          </Box>

          <Button
            sx={{
              color: "white",
              backgroundColor: "#4E90B5",
              "&:hover": {
                backgroundColor: "#194D6B",
              },
              width: "15%",
              height: "60%",
              borderRadius: "8px",
            }}
          >
            + Add Courses
          </Button>
        </Box>
        <Banner />
        <CourseBox />
      </Box>
    </Box>
  );
};

export default Courses;
