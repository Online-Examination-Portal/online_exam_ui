import {
  Box,
  Button,
  Drawer,
  Typography,
  IconButton,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import * as classes from "./styles";

const CourseDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <React.Fragment>
      <Box>
        <Button onClick={toggleDrawer} sx={classes.addCourse}>
          + Add Courses
        </Button> 
        <Drawer anchor="right" open={isOpen} onClose={toggleDrawer}>
          <Box sx={classes.drawerHeader}>
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              Add Course
            </Typography>
            <IconButton onClick={toggleDrawer} color="secondary">
              <CloseIcon />
            </IconButton>
          </Box>
          <Box gap={4} sx={classes.drawerTextField}>
            <TextField
              id="course_name"
              label="Course Name"
              type="text"
              variant="outlined"
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="select_teacher"
              label="Select Teacher"
              type="text"
              variant="outlined"
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
                <TextField
                id="add_batch"
                label="Add Batch"
                type="text"
                variant="outlined"
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ width: "90%" }}
              />
              
              <IconButton sx={{ color: "#194D6B", bgcolor: "#F1FAFF" }}>
                <AddIcon />
              </IconButton>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "260px 55px 0px 57px",
            }}
          >
            <Button sx={classes.okButton}>Ok</Button>
          </Box>
        </Drawer>
      </Box>
    </React.Fragment>
  );
};

export default CourseDrawer;
