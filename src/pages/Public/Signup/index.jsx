import React, { useState } from "react";
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
  InputLabel
} from "@mui/material";

import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Link } from "react-router-dom";
import './register.css';
import topImage from "../../../assets/image/bg1.png";
import downImage from "../../../assets/image/bg2.png";
//D:\Web Development\Online_exam\online_exam_ui\src\pages\Public\Login\login.css

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [dob, setDob] = useState(dayjs("2022-04-17"));
  const [orgName, setOrgName] = useState("");
  const [role, setRole] = useState(""); 
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("gender:", gender);
    console.log("Password:", password);
    console.log("Phone no.:", phoneNo);
    console.log("DOB:", dob);
    console.log("Organization Name: ", orgName)
    console.log("Role: ", role)
  };

  return (
    <Box className='container' >
      <img src={topImage} alt="top_image" className="top_image"/>
      <img src={downImage} alt="top_image" className="bottom_image"/>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "40%",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Sign Up
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // mt: 4,
          width: "80%",
        }}
      >
        <Box
          gap={6}
          sx={{
            display: "flex",
            flexDirection: "row",
            mb: 4,
          }}
        >
          <InputLabel>First Name</InputLabel>
          <TextField
            id="first_name"
            placeholder="First Name"
            type="text"
            variant="outlined"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {/* <InputLabel>Last Name</InputLabel> */}
          <TextField
            id="last_name"
            placeholder="Last Name"
            type="text"
            variant="outlined"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Box>
        <InputLabel>E-mail</InputLabel>
        <TextField
          id="email"
          placeholder="Email"
          type="email"
          variant="outlined"
          sx={{ mb: 4 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            row
            sx={{ mb: 4 }}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }} 
          sx={{ mb: 4 }} 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              label="Date of Birth"
              value={dob}
              onChange={(value) => setDob(value)}
              InputLabelProps={{
                shrink: true,
              }}
              sx={{ mb: 4 }}
            />
          </DemoContainer>
        </LocalizationProvider>
        <TextField
          id="phone_no"
          label="Phone Number"
          type="number"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ mb: 4 }}
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
        />
        <TextField
          id="org_name"
          label="Organization Name"
          type="text"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ mb: 4 }}
          value={orgName}
          onChange={(e) => setOrgName(e.target.value)}
        />
         <FormControl>
          <InputLabel>Role</InputLabel>
          <Select
          id="role"
          sx={{ mb: 4 }}
          value={role}
          onChange={(e) => setRole(e.target.value)}
          >
          <MenuItem value={0}>Teacher</MenuItem>
          <MenuItem value={1}>Student</MenuItem>
          <MenuItem value={2}>Admin</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Sign Up
        </Button>
      </Box>
      <Typography variant="h7" sx={{ mt: 2 }}>
        Already have an account?
        <Button>
          <Link to="/login">Login</Link>
        </Button>
      </Typography>
    </Box>
    </Box>
  );
};

export default SignUp;
