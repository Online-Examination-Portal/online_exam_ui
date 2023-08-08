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
  import RemoveIcon from "@mui/icons-material/Remove";
  import * as classes from './styles'
  
  const CourseDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [textFields, setTextFields] = useState([""]);
  
    const handleTextChange = (e, index) => {
      const updatedTextFields = [...textFields]; //why shallow copy
      updatedTextFields[index] = e.target.value;
      setTextFields(updatedTextFields);
    };
  
    const handleAddTextField = () => {
      setTextFields([...textFields, ""]);
    };
  
    const handleRemoveTextField = () => {
      if (textFields.length > 1) {
        const updatedTextFields = textFields.slice(0, -1);
        setTextFields(updatedTextFields);
      }
    };
  
    const toggleDrawer = () => {
      setIsOpen(!isOpen);
    };
    return (
      <React.Fragment>
        <Box>
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
                <Box>
                  <IconButton
                    onClick={handleAddTextField}
                    sx={classes.addRemoveIcon}
                  >
                    <AddIcon />
                  </IconButton>
                  {textFields.length > 1 && (
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
          </Drawer>
        </Box>
      </React.Fragment>
    );
  };
  
  export default CourseDrawer;
  