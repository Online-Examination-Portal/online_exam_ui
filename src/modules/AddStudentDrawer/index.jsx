import {
  Box,
  Button,
  Typography,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import * as classes from "./styles";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { EditServiceStyledDrawer } from "../../components/common/styledDrawers";
import CloseIcon from "@mui/icons-material/Close";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import InvitationStudent from "../../components/private/students/invitationStudents";
import { INVITE_STUDENT_ROLE } from "../../utilities/constants";

// Import API data
import usePostInviteStudent from "./data/usePostInviteStudent";
import useGetInviteStudent from "./data/useGetInviteStudent";

// Import Components
import AppSnackbar from "../../components/common/AppSnackbar";

const AddStudentDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, isError, isLoading, inviteStudent] = usePostInviteStudent();
  const [inviteStudentData, isInviteError, isInviteLoading, getStudentInvite] = useGetInviteStudent();

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  const [snackbarStates, setSnackbarStates] = useState({
    open: false, 
    message: "",
    severity: "success",
  });

  const sendInvite = (e) => {
    e.preventDefault();
    const inviteStudentInfo = {
      send_to: email,
      for_role: INVITE_STUDENT_ROLE,
    };
    inviteStudent(inviteStudentInfo);
    getStudentInvite();
    setIsEmailValid(validateEmail(email));
  };

  useEffect(() => {
    if (isInviteError) {
      setSnackbarStates({
        open: true,
        message: "Error! Unable to load user roles",
        severity: "error",
      });
    }
  }, [inviteStudentData, isInviteError, isInviteLoading]);

  useEffect(() => {
    if (data) {
      setSnackbarStates({
        open: true,
        message: "Invitation sent",
        severity: "success",
      });
      setEmail("");
    } else if (isError !== "") {
      setSnackbarStates({
        open: true,
        message: "Something went wrong",
        severity: "error",
      });
    }
  }, [data, isError, isLoading]);

  const resetSnackbar = (state) => {
    setSnackbarStates({
      open: state,
      message: "",
      severity: "success",
    });
  };

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
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
              <FormControl size="small" fullWidth error={isError}>
                <InputLabel htmlFor="email" sx={{ color: "#4E90B5" }}>
                  Email Ids
                </InputLabel>
                <OutlinedInput
                  id="email"
                  type="email"
                  label="Email Ids"
                  placeholder="Enter your email"
                  sx={classes.EmailTextField}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {!isEmailValid ? (
                  <FormHelperText sx={{ fontFamily: "Cabin-Regular" }}>
                    Invalid Email
                  </FormHelperText>
                ) : null}
              </FormControl>
              <Button sx={classes.sendInviteButton} onClick={sendInvite} type="submit">Send Invite</Button>
            </Box>
            {snackbarStates.open ? (
              <AppSnackbar
                open={snackbarStates.open}
                message={snackbarStates.message}
                severity={snackbarStates.severity}
                setOpen={(state) => resetSnackbar(state)}
              />
            ) : null}
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
};

export default AddStudentDrawer;
