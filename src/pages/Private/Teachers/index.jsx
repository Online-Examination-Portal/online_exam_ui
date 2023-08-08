import React from "react";
import { Box, Typography, InputAdornment, TextField } from "@mui/material";
import TeachersTable from "../../../components/private/teachers/TeacherTable";
import TeacherDrawer from "../../../modules/AddTeacherDrawer/index";
import * as classes from "./styles";
import SearchIcon from "@mui/icons-material/Search";

const Teachers = () => {
  return (
    <Box sx={classes.teachersContainer}>
      <Box sx={classes.teachersheader}>
        <Box sx={{ flex: "0 1 auto" }}>
          <Typography variant="h3" color=" #194D6B" sx={classes.heading}>
            Teachers
          </Typography>
          <Typography variant="body2" sx={{ mb: 4, color: "#4E90B5" }}>
            Track your teacher's details here.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="body1" sx={{ color: "#4E90B5" }}>
              Teacher's details
            </Typography>
            <TextField
              id="search"
              placeholder="Search Teacher"
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
        <Box sx={classes.teacherDrawerComponent}>
          <TeacherDrawer />
        </Box>
      </Box>
      <TeachersTable />
    </Box>
  );
};
export default Teachers;
