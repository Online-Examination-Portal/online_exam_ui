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
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

// Import API data
import useGetRoles from "./data/useGetRoles";
import usePostRegister from "./data/usePostRegister";

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
    const userInfo = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      gender: parseInt(gender),
      password: password,
      organization_name: orgName,
      phone_number: phoneNo,
      date_of_birth: dayjs(dob).format("YYYY-MM-DD"),
      role: role,
      organization_id: 1,
    };
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
          />
          <FormControl>
            <FormLabel sx={classes.inputLabels}>Gender</FormLabel>
            <RadioGroup
              row
              size="small"
              sx={{ mb: "30px" }}
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <FormControlLabel value="0" control={<Radio />} label="Male" />
              <FormControlLabel value="1" control={<Radio />} label="Female" />
              <FormControlLabel value="2" control={<Radio />} label="Other" />
            </RadioGroup>
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
