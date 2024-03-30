import { Box, Button, Typography, IconButton, TextField, FormControl, Select, MenuItem, FormLabel, InputLabel } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import * as classes from "./styles";
import { EditServiceStyledDrawer } from "../../components/common/styledDrawers";

const CourseDrawer = ({ isOpen, toggleDrawer }) => {
  const [textFields, setTextFields] = useState([]);
  const [courseName, setCourseName] = useState();
  const [selectTeacher, setSelectedTeacher] = useState();
  const [batch, setBatch] = useState();

  const handleTextChange = (e, index) => {
    const updatedTextFields = [...textFields]; //why shallow copy
    updatedTextFields[index] = e.target.value;
    setTextFields(updatedTextFields);
  };

  const handleAddTextField = () => {
    setTextFields([...textFields, ""]);

  };

  const handleRemoveTextField = () => {
    if (textFields.length > 0) {
      const updatedTextFields = textFields.slice(0, -1);
      setTextFields(updatedTextFields);
    }
  };

  return (
    <EditServiceStyledDrawer
      anchor="right"
      open={isOpen}
      onClose={toggleDrawer}
    >
      <Box sx={classes.drawerContainer}>
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
            fullWidth
            id="course_name"
            label="Course Name"
            type="text"
            variant="outlined"
            size="small"
            sx={classes.inputFields}
          />
          <FormControl>
            <InputLabel>Select Teacher</InputLabel>
            <Select
            fullWidth
            id="select_teacher"
            label="Select Teacher"
            type="text"
            variant="outlined"
            size="small"
            value={selectTeacher}
            sx={classes.inputFields}
            >
              <MenuItem value="1">A</MenuItem>
              <MenuItem value="2">B</MenuItem>
              <MenuItem value="3">C</MenuItem>

            </Select>
          </FormControl>
          <Box gap={4} sx={classes.addBatchTextFieldContainer}>
            {textFields.map((value, index) => (
              <TextField
                id="add_batch"
                key={index}
                label={`Add Batch ${index + 1}`}
                value={value}
                onChange={(e) => handleTextChange(e, index)}
                type="text"
                variant="outlined"
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ width: "90%" }}
              />
            ))}
            <Box sx={{ display: "flex" }}>
              <TextField
                id="add_batch"
                label={`Add Batch ${textFields.length + 1}`}
                type="text"
                variant="outlined"
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ width: "90%" }}
              />
              <IconButton
                onClick={handleAddTextField}
                sx={classes.addRemoveIcon}
              >
                <AddIcon />
              </IconButton>
              {textFields.length > 0 && (
                <IconButton
                  onClick={handleRemoveTextField}
                  sx={classes.addRemoveIcon}
                >
                  <RemoveIcon />
                </IconButton>
              )}
            </Box>
          </Box>
        </Box>
        <Box sx={classes.okButtonContainer}>
          <Button sx={classes.okButton}>Ok</Button>
        </Box>
      </Box>
    </EditServiceStyledDrawer>
  );
};

export default CourseDrawer;
