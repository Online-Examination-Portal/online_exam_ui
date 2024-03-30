import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  RadioGroup,
  FormControl,
  Radio,
  FormLabel,
  FormControlLabel,
  Select,
  MenuItem,
  InputLabel,
  ButtonGroup
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useSearchParams } from "react-router-dom";

// Import API data
import useGetRoles from "./data/useGetRoles";
import usePostRegister from "./data/usePostRegister";
import useGetInvite from "./data/useGetInvite";

// Import Assets
import "./register.css"; 
import topImage from "../../../assets/image/bg1.png";
import downImage from "../../../assets/image/bg2.png";

// Import Components
import AppSnackbar from "../../../components/common/AppSnackbar";
import AppBackdrop from "./../../../components/common/AppBackdrop/index";

import * as classes from "./styles";

const SignUp = () => {
  const navigate = useNavigate();

  const [roles, isRolesError, isRolesLoading, getRoles] = useGetRoles();
  const [registerResponse, isRegisterError, isRegisterLoading, register] =
    usePostRegister();
  const [inviteData, , , getInvite] = useGetInvite();

  const [snackbarStates, setSnackbarStates] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [dob, setDob] = useState({});
  const [orgName, setOrgName] = useState("");
  const [role, setRole] = useState("");
  const [organizationID, setOrganizationID] = useState("");
  const [invitationID, setInvitationID] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const invitationIDParam = searchParams.get("i_id");

  console.log(gender)
  useEffect(() => {
    if (invitationIDParam) {
      getInvite(invitationIDParam);
    }
  }, [invitationIDParam]);

  useEffect(() => {
    if (inviteData) {
      setOrgName(inviteData.organization.name);
      setEmail(inviteData.sent_to);
      setRole(inviteData.for_role);
      setOrganizationID(inviteData.organization.id);
      setInvitationID(inviteData.id);
    } 
  }, [inviteData]);

  useEffect(() => {
    if (registerResponse) {
      navigate("/validate", {
        state: { userInfo: registerResponse },
        replace: true,
      });
    } else if (isRegisterError !== "") {
      setSnackbarStates({
        open: true,
        message: "Something went wrong",
        severity: "error",
      });
    }
  }, [registerResponse, isRegisterError, isRegisterLoading]);

  useEffect(() => {
    if (isRolesError) {
      setSnackbarStates({
        open: true,
        message: "Error! Unable to load user roles",
        severity: "error",
      });
    }
  }, [roles, isRolesError]);

  useEffect(() => {
    getRoles();
  }, []);

  const resetSnackbar = (state) => {
    setSnackbarStates({
      open: state,
      message: "",
      severity: "success",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let userInfo = {};
    if (organizationID === "" && invitationID === "") {
      userInfo = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        gender: parseInt(gender),
        password: password,
        organization_name: orgName,
        phone_number: phoneNo,
        date_of_birth: dayjs(dob).format("YYYY-MM-DD"),
        role: role,
      };
    } else {
      userInfo = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        gender: parseInt(gender),
        password: password,
        organization_name: orgName,
        phone_number: phoneNo,
        date_of_birth: dayjs(dob).format("YYYY-MM-DD"),
        role: role,
        organization_id: organizationID,
        invitation_id: invitationID,
      };
    }
    register(userInfo);
  };

  return (
    <Box className="container">
      <img src={topImage} alt="top_image" className="top_image" />
      <img src={downImage} alt="top_image" className="bottom_image" />
      <Box sx={classes.signupOuterContainer}>
        <Typography variant="h2" sx={{ mb: "48px" }}>
          Sign Up
        </Typography>
        <Box sx={classes.signupInnerContainer}>
          <Box gap={6} sx={classes.nameFieldBox}>
            <InputLabel sx={classes.nameFieldLabel}>
              First Name
              <TextField
                id="first_name"
                placeholder="First Name"
                type="text"
                size="small"
                variant="outlined"
                sx={classes.nameTextField}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </InputLabel>
            <InputLabel sx={classes.nameFieldLabel}>
              Last Name
              <TextField
                id="last_name"
                placeholder="Last Name"
                type="text"
                size="small"
                variant="outlined"
                sx={classes.nameTextField}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </InputLabel>
          </Box>
          <InputLabel sx={classes.inputLabels}>E-mail</InputLabel>
          <TextField
            id="email"
            placeholder="Email"
            type="email"
            size="small"
            variant="outlined"
            sx={classes.textFields}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={inviteData ? true : false}
          />
          <FormControl>
            <FormLabel sx={classes.inputLabels}>Gender</FormLabel>
            <ButtonGroup
              variant="contained"
              size="small"
              sx={{ mb: "30px", justifyContent: 'space-between', boxShadow: 'none'}}
              value={gender}
            >
              <Button onClick={()=> setGender(1)} sx={{width: '30%', backgroundColor: gender === 1 ? '#4BB543' : '#4E90B5'}}>Male</Button>
              <Button onClick={()=> setGender(2)} sx={{width: '30%', backgroundColor: gender === 2 ? '#4BB543' : '#4E90B5'}}>Female</Button>
              <Button onClick={()=> setGender(3)} sx={{width: '30%', backgroundColor: gender === 3 ? '#4BB543' : '#4E90B5'}}>Other</Button>
            </ButtonGroup> 
          </FormControl>
          <InputLabel sx={classes.inputLabels}>Password</InputLabel>
          <TextField
            id="password"
            placeholder="Password"
            size="small"
            type="password"
            variant="outlined"
            sx={classes.textFields}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputLabel sx={classes.inputLabels}>Date of Birth</InputLabel>
          <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                slotProps={{
                  textField: {
                    fullWidth: true,
                    size: "small",
                  },
                }}
                value={dob}
                onChange={(value) => {
                  setDob(value);
                }}
                sx={classes.textFields}
              />
            </DemoContainer>
          </LocalizationProvider>
          <InputLabel sx={classes.inputLabels}>Phone Number</InputLabel>
          <TextField
            id="phone_no"
            placeholder="Phone Number"
            size="small"
            variant="outlined"
            sx={classes.textFields}
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
          <InputLabel sx={classes.inputLabels}>Organization Name</InputLabel>
          <TextField
            id="org_name"
            placeholder="Organization Name"
            type="text"
            size="small"
            variant="outlined"
            sx={classes.textFields}
            value={orgName}
            onChange={(e) => setOrgName(e.target.value)}
            disabled={inviteData ? true : false}
          />
          <FormControl>
            <FormLabel sx={classes.inputLabels}>Role</FormLabel>
            {!isRolesLoading && roles ? (
              <Select
                id="role"
                placeholder="Role"
                size="small"
                sx={classes.textFields}
                value={role}
                onChange={(e) => setRole(e.target.value)}
                disabled={inviteData ? true : false}
              >
                {Object.keys(roles).map((key) => (
                  <MenuItem key={key} value={key}>
                    {roles[key]}
                  </MenuItem>
                ))}
              </Select>
            ) : null}
          </FormControl>
          <Button
            disabled={isRolesError === "" ? false : true}
            variant="contained"
            type="submit"
            onClick={handleSubmit}
            sx={classes.SignUpButton}
          >
            Sign Up
          </Button>
        </Box>
        <Typography variant="h6" sx={classes.typography}>
          Already have an account?
          <Button sx={classes.LoginButton} onClick={() => navigate("/login")}>
            Login
          </Button>
        </Typography>
      </Box>
      {snackbarStates.open ? (
        <AppSnackbar
          open={snackbarStates.open}
          message={snackbarStates.message}
          severity={snackbarStates.severity}
          setOpen={(state) => resetSnackbar(state)}
        />
      ) : null}
      {isRolesLoading || isRegisterLoading ? (
        <AppBackdrop open={isRolesLoading} />
      ) : null}
    </Box>
  );
};

export default SignUp;
