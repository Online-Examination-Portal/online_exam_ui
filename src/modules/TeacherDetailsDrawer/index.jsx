import { Box, Button, Typography, IconButton, TextField, FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import React, { useState } from 'react';
import * as classes from './styles'
import CloseIcon from "@mui/icons-material/Close";
// import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { EditServiceStyledDrawer } from "../../components/common/styledDrawers";

const TeacherDetailsDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
 
    return(  
        <React.Fragment> 
        <Box> 
        <Button 
          // startIcon={<AddRoundedIcon />}
          onClick={toggleDrawer}
          sx={classes.viewDetailsButton}
        > 
          View Details
        </Button>
        <EditServiceStyledDrawer
          anchor="right"
          open={isOpen} 
          onClose={toggleDrawer}
        >
        {/* <Drawer anchor="right" open={isOpen} onClose={toggleDrawer}> */}
        <Box sx={classes.drawerHeader}>
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              Teacher's Details 
            </Typography>
            <IconButton onClick={toggleDrawer} color="secondary">
              <CloseIcon />
            </IconButton>
          </Box>
          <Box gap={4} sx={classes.drawerTextField}>
          <TextField
              id="teacherId"
              label="Teacher Id"
              type="text"
              variant="outlined"
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              sx={{bgcolor: '#F1FAFF'}}
            />
            <TextField
              id="name"
              label="Name"
              type="text"
              variant="outlined"
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              sx={{bgcolor: '#F1FAFF'}}
            />
            {/* dropdown for course */}
            <FormControl>
            <InputLabel shrink >
            Course
            </InputLabel>
                <Select 
                id='course'
                placeholder='Course'
                size='small'
                sx={{bgcolor: '#F1FAFF'}}
                >
                    {/* <MenuItem value=""><em>Course</em></MenuItem> */}
                    <MenuItem value='option1'>Course 1</MenuItem>
                    <MenuItem value='option2'>Course 2</MenuItem>
                    <MenuItem value='option3'>Course 3</MenuItem>
                </Select>
            </FormControl>
            <Box gap={1} sx={{display: 'flex', flexDirection: 'column'}}>
            <TextField
              id="batch"
              label="Batches"
              type="text"
              variant="outlined"
              size="small" 
              InputLabelProps={{
                shrink: true,
              }}
              sx={{bgcolor: '#F1FAFF'}}
            />
            <TextField
              id="batch"
              type="text"
              variant="outlined"
              size="small" 
              InputLabelProps={{
                shrink: true,
              }}
              sx={{bgcolor: '#F1FAFF'}}
            />
            <TextField
              id="batch"
              type="text"
              variant="outlined"
              size="small" 
              InputLabelProps={{
                shrink: true,
              }}
              sx={{bgcolor: '#F1FAFF'}}
            />
            </Box>
            
          </Box>
          
          <Box sx={classes.okButtonContainer}>
            <Button sx={classes.okButton}>Ok</Button>
          </Box>
        {/* </Drawer> */}
        </EditServiceStyledDrawer>
            </Box>

        </React.Fragment>

    )
}

export default TeacherDetailsDrawer;