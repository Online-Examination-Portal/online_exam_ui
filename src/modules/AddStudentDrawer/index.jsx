import { Box, Button, Typography, IconButton, FormControl, InputLabel, OutlinedInput } from '@mui/material';
import React, { useState } from 'react'
import * as classes from './styles'
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { EditServiceStyledDrawer } from "../../components/common/styledDrawers";
import CloseIcon from "@mui/icons-material/Close";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import InvitationStudent from '../../components/private/students/invitationStudents';


const AddStudentDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen(!isOpen);
      };

    return(
      <React.Fragment>
        <Box>
        <Button 
            startIcon={<AddRoundedIcon />}
            onClick={toggleDrawer}
            sx={classes.addStudentButton}
          >
            Add Student
          </Button>
          
          <EditServiceStyledDrawer
          anchor="right"
          open={isOpen} 
          onClose={toggleDrawer}
        >
          <Box sx={classes.drawerContainer}> 
            <Box sx={classes.drawerHeaderContainer}>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Add / Manage Students
              </Typography>
              <IconButton onClick={toggleDrawer} color="secondary">
                <CloseIcon />
              </IconButton>
            </Box>
            <Box sx={classes.inviteTeachersContainer}>
              <Box sx={classes.icon}>
                <PeopleAltIcon color="primary" />
              </Box>
              <Box sx={classes.inviteTeachersHeading}>
                <Typography
                  color="#194D6B"
                  variant="body1"
                  sx={{ fontWeight: 600 }}
                >
                  Invite Students
                </Typography>
                <Typography variant="caption" color="#4E90B5">
                  Enter the email ids of the students you want to add to your
                  organization
                </Typography>
              </Box>
            </Box>
            <Box sx={classes.EmailIdBox}>
              <FormControl size="small" fullWidth>
                <InputLabel htmlFor="email" sx={{ color: "#4E90B5" }}>
                  Email Ids
                </InputLabel>
                <OutlinedInput
                  id="email"
                  type="email"
                  label="Email Ids"
                  placeholder="Enter your email"
                  sx={classes.EmailTextField}
                />
              </FormControl>
              <Button sx={classes.sendInviteButton}>Send Invite</Button>
            </Box> 
            <Box sx={classes.inviteTableHeader}>
              <Typography variant="h6" color="#194D6B">
                Manage Students
              </Typography>
              <Typography variant="caption">
                You can see the status of all the invites sent to the students.
                You can completely remove a student from the organization.
              </Typography>
            </Box>
            <Box sx={classes.tableWrapper}>
              <InvitationStudent />
            </Box>
            <Box
              sx={{
                flex: "0 1 auto",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button onClick={toggleDrawer} sx={classes.cancelButton}>
                Cancel
              </Button>
            </Box>
          </Box>
        </EditServiceStyledDrawer>
        </Box>
      </React.Fragment>
    );
}

export default AddStudentDrawer