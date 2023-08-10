import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  InputLabel,
  IconButton,
  FormControl,
  OutlinedInput,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Invitation from "../../components/private/teachers/Invitations";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { EditServiceStyledDrawer } from "../../components/common/styledDrawers";
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

        <EditServiceStyledDrawer
          anchor="right"
          open={isOpen}
          onClose={toggleDrawer}
        >
          <Box sx={classes.drawerContainer}>
            <Box sx={classes.drawerHeaderContainer}>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Add / Manage Teachers
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
                  Invite Teachers
                </Typography>
                <Typography variant="caption" color="#4E90B5">
                  Enter the email ids of the teachers you want to add to your
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
                Manage Teachers
              </Typography>
              {/* Ask about break */}
              <Typography variant="caption">
                You can see the status of all the invites sent to the teachers
                and their respective role. You can change the role or completely
                remove a teacher from the organization.
              </Typography>
            </Box>
            <Box sx={classes.tableWrapper}>
              <Invitation />
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
};

export default TeacherDrawer;
