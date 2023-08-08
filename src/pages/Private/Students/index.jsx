import React from "react";
import { Box, TextField, Typography, InputAdornment, Button } from "@mui/material";
import * as classes from "./styles";
import StudentsTable from "../../../components/private/students/studentsTable";
import SearchIcon from "@mui/icons-material/Search";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import StudentDetailsDrawer from "../../../modules/StudentDetailsDrawer";

const Students = () => {
  return (
    <Box sx={classes.studentsContainer}>
      <Box sx={classes.studentsheader}>
       <Box sx={{ flex: "0 1 auto" }}>
          <Typography variant="h3" color=" #194D6B" sx={classes.studentHeading}>
            Students
          </Typography>
          <Typography variant="body2" sx={{ mb: 4, color: "#4E90B5" }}>
            Track your student's details here.
          </Typography>
          </Box>
          <Box>
          <Button
          startIcon={<AddRoundedIcon />}
          onClick={StudentDetailsDrawer.toggleDrawer}
          sx={classes.addStudentButton}
        > 
          Add Student
        </Button>
          </Box>
          </Box>

          <Box sx={classes.studentDrawerComponent}>
          <StudentDetailsDrawer/>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", padding: "16px 32px", }}>
            <Typography variant="body1" sx={{ color: "#4E90B5" }}>
              Student's details
            </Typography>
            <TextField
              id="search"
              placeholder="Search Student"
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
        
        
      
      <StudentsTable />
    </Box>
  );
};

export default Students; 
