import React from "react";
import { Box, TextField, Typography, InputAdornment } from "@mui/material";
import courses from "../../../assets/image/courses.png";
import SearchIcon from "@mui/icons-material/Search";
import * as classes from "./styles";
import "./course.css";

const Banner = () => {
  return (
    <Box sx={classes.bannerOuterContainer}>
      <Box sx={classes.bannerImageContainer}>
        <img src={courses} width="100%" alt="courses" className="course_img" />
      </Box>
      <Box className="banner_container" sx={classes.bannerTextBox}>
        <Typography variant="body2" sx={classes.bannerText}>
          Get the details of all the courses in your organization. You can edit
          and create new courses here. Manage teacher and students teaching and
          enrolled in the respective courses.{" "}
        </Typography>
        <Typography variant="body1" sx={{ mt: 0.5 }}>
          Total Active Courses: 09{" "}
        </Typography>
      </Box>
      <Box sx={classes.searchBar}>
        <TextField
          id="search"
          placeholder="Search Course"
          type="search"
          size="small"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ color: "#4E90B5" }}>
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
