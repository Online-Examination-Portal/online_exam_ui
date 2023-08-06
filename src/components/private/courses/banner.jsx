import React from "react";
import { Box, TextField, Typography, InputAdornment } from "@mui/material";
import courses from "../../../assets/image/courses.png";
import SearchIcon from "@mui/icons-material/Search";
import "./course.css";
import * as classes from "./styles";

const Banner = () => {
  return (
    <Box 
      sx={classes.bannerOuterContainer}
    >
      <Box
        sx={classes.bannerImageContainer}
      >
        <img src={courses} alt="courses" className="course_img" />
      </Box>
      <Box
        className="banner_container"
        sx={classes.bannerTextBox}
      >
        <Typography
          variant="body1"
          sx={classes.bannerText}
        >
          Get the details of all the courses in your organization. You can edit
          and create new courses here. Manage teacher and students teaching and
          enrolled in the respective courses.{" "}
          <span>Total Active Courses: 09 </span>
        </Typography>
      </Box>
      <Box
        sx={classes.searchBar}
      >
        <TextField
          id="search"
          placeholder="Search Course"
          type="search"
          size="small"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{color: '#4E90B5'}}>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={classes.searchBarStyle}
        />
      </Box>
    </Box>
  );
};

export default Banner;
