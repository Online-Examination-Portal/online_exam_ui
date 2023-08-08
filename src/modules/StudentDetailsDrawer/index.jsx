import { Box, Button, Drawer, Typography, IconButton, TextField } from '@mui/material';
import React, { useState } from 'react';
import * as classes from './styles'
import CloseIcon from "@mui/icons-material/Close";


const StudentDetailsDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

    return( 
        <React.Fragment> 
        <Box> 
        <Drawer anchor="right" open={isOpen} onClose={toggleDrawer}>
        <Box sx={classes.drawerHeader}>
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              Students Details 
            </Typography>
            <IconButton onClick={toggleDrawer} color="secondary">
              <CloseIcon />
            </IconButton>
          </Box>
          <Box gap={4} sx={classes.drawerTextField}>
          <TextField
              id="studentId"
              label="Student Id"
              type="text"
              variant="outlined"
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
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
            />
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
              id="batch_code"
              label="Batch Code"
              type="text"
              variant="outlined"
              size="small" 
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Typography>Other Details</Typography>
            <TextField
              id="phone_no"
              label="Phone Number"
              type="number"
              variant="outlined"
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="address"
              label="Address"
              type="text"
              variant="outlined"
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="emer_phoneno"
              label="Emergency Contact Number"
              type="number"
              variant="outlined"
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          
          <Box sx={classes.okButtonContainer}>
            <Button sx={classes.okButton}>Ok</Button>
          </Box>
        </Drawer>
            </Box>

        </React.Fragment>

    )
}

export default StudentDetailsDrawer;