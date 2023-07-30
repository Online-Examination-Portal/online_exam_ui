import React from "react";
import { Box, TextField, Typography, InputAdornment } from "@mui/material";
import courses from "../../../assets/image/courses.png";
import SearchIcon from "@mui/icons-material/Search";
import "./course.css";

const Banner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        padding: "0 60px 0px 166px",
        margin: "56px 0 0 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "space-between",
      }}
    >
      <Box
        sx={{
          aspectRatio: "1 / 1",
          background: "#fff",
          zIndex: "10",
          top: 0,
          left: "60px",
          width: "212px",
          position: "absolute",
          borderRadius: "50%",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          overflow: "hidden",
        }}
      >
        <img src={courses} alt="courses" className="course_img" />
      </Box>
      <Box
        className="banner_container"
        sx={{
          color: "white",
          display: "flex",

          borderRadius: "8px 8px 8px 8px",
          boxShadow: "0px 0px 5px 0px rgba(7, 128, 0, 0.43)",
          background: "linear-gradient(270deg, #FF40B2 0%, #570076 75.52%)",
          padding: "20px 20px 20px 120px",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            "& span": {
              fontWeight: 600,
              fontSize: "24px",
              display: "flex",
              flexDirection: "column",
              mt: 2,
            },
          }}
        >
          Get the details of all the courses in your organization. You can edit
          and create new courses here. Manage teacher and students teaching and
          enrolled in the respective courses.{" "}
          <span>Total Active Courses: 09 </span>
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: 3,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <TextField
          id="search"
          placeholder="Search Course"
          type="search"
          size="small"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            width: "45%",
            borderRadius: "8px",
            border: "1px solid #4E90B5",
            background: "#FFF",
          }}
        />
      </Box>
    </Box>
  );
};

export default Banner;
