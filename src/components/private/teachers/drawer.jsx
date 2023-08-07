import React, { useState } from "react";
import {
  Box,
  Drawer,
  Button,
  Typography,
  SvgIcon,
  InputLabel,
  TextField,
  IconButton,  
} from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CloseIcon from "@mui/icons-material/Close";
import Invitation from "./invitation";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import * as classes from "./styles";

const TeacherDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <React.Fragment> 
      <Box>  
        <Button
          startIcon={<AddRoundedIcon />}
          onClick={toggleDrawer}
          sx={classes.addTeacherButton}
        >
          Add Teacher
        </Button>

        <Drawer anchor="right" open={isOpen} onClose={toggleDrawer}>
          <Box sx={classes.drawerTextContainer}>
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              Add / Manage Teachers
            </Typography>
            <IconButton onClick={toggleDrawer} color="secondary">
              <CloseIcon />
            </IconButton>
          </Box>

          <Box
            sx={classes.inviteTeachersContainer}
          >
            <SvgIcon color="primary" sx={classes.icon}>
              <PeopleAltIcon />
            </SvgIcon>

            <Box
              sx={classes.inviteTeachersHeading}
            >
              <Typography color="#194D6B" variant="h6">
                Invite Teachers
              </Typography>
              <Typography variant="body1" color="#4E90B5">
                Enter the email ids of the teachers you want to add to your
                organization
              </Typography>
            </Box>
          </Box>
          <Box sx={classes.EmailIdBox}>
            <InputLabel sx={{ fontSize: "14px", color: "#4E90B5" }}>
              Email Ids
            </InputLabel>
            <TextField
              id="email"
              placeholder="Enter your email"
              type="email"
              variant="outlined"
              size="small"
              sx={classes.EmailTextField}
            />
          </Box> 
          <Box sx={classes.inviteButtonBox}>
            <Button sx={classes.sendInviteButton}>Send Invite</Button>
          </Box>
          <Box
            sx={classes.ManageTeachersHeading}
          >
            <Typography variant="h6" color="#194D6B">
              Manage Teachers
            </Typography>
            {/* Ask about break */}
            <Typography variant="caption">
              You can see the status of all the invites sent to the teachers and
              their respective role. You can change the role <br></br> or
              completely remove a teacher from the organization.
            </Typography>
          </Box>
          <Box
            sx={classes.InvitationComponent}
          >
            <Invitation />
          </Box>
          <Box sx={classes.cancelButtonBox}>
            <Button sx={classes.cancelButton}>Cancel</Button>
          </Box>
        </Drawer>
      </Box>
    </React.Fragment>
  );
};

export default TeacherDrawer;
