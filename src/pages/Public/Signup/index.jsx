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
  InputLabel,
} from "@mui/material";

import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useNavigate } from "react-router-dom";
import "./register.css";
import topImage from "../../../assets/image/bg1.png";
import downImage from "../../../assets/image/bg2.png";

const SignUp = () => {
  const navigate = useNavigate();
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
    console.log("Organization Name: ", orgName);
    console.log("Role: ", role);
  };

  return (
    <Box className="container">
      <img src={topImage} alt="top_image" className="top_image" />
      <img src={downImage} alt="top_image" className="bottom_image" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "40%",
          height: "90%",
          overflow: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Typography variant="h2" sx={{ mb: "48px" }}>
          Sign Up
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
          }}
        >
          <Box
            gap={6}
            sx={{
              mb: "30px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <InputLabel
              sx={{
                color: "black",
                fontSize: "14px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              First Name
              <TextField
                id="first_name"
                placeholder="First Name"
                type="text"
                size="small"
                variant="outlined"
                sx={{bgcolor: "white", borderRadius: '6px'}}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </InputLabel>
            <InputLabel
              sx={{
                color: "black",
                fontSize: "14px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              Last Name
              <TextField
                id="last_name"
                placeholder="Last Name"
                type="text"
                size="small"
                variant="outlined"
                sx={{bgcolor: "white", borderRadius: '6px'}}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </InputLabel>
          </Box>
          <InputLabel sx={{ color: "black", fontSize: "14px" }}>
            E-mail
          </InputLabel>
          <TextField
            id="email"
            placeholder="Email"
            type="email"
            size="small"
            variant="outlined"
            sx={{ mb: "30px", bgcolor: "white", borderRadius: '6px' }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormControl>
            <FormLabel sx={{ color: "black", fontSize: "14px" }}>
              Gender
            </FormLabel>
            <RadioGroup
              row
              size="small"
              sx={{ mb: "30px" }}
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
          <InputLabel sx={{ color: "black", fontSize: "14px" }}>
            Password
          </InputLabel>
          <TextField
            id="password"
            placeholder="Password"
            size="small"
            type="password"
            variant="outlined"
            sx={{ mb: "30px", bgcolor: "white", borderRadius: '6px' }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputLabel sx={{ color: "black", fontSize: "14px" }}>
            Date of Birth
          </InputLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]} >
              <DatePicker
                value={dob}
                onChange={(value) => setDob(value)}
                sx={{ mb: "30px", bgcolor: "white", borderRadius: '6px', }}
              />
            </DemoContainer>
          </LocalizationProvider>
          <InputLabel sx={{ color: "black", fontSize: "14px" }}>
            Phone Number
          </InputLabel>
          <TextField
            id="phone_no"
            placeholder="Phone Number"
            type="number"
            size="small"
            variant="outlined"
            sx={{ mb: "30px", bgcolor: "white", borderRadius: '6px' }}
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
          <InputLabel sx={{ color: "black", fontSize: "14px" }}>
            Organization Name
          </InputLabel>
          <TextField
            id="org_name"
            placeholder="Organization Name"
            type="text"
            size="small"
            variant="outlined"
            sx={{ mb: "30px", bgcolor: "white", borderRadius: '6px' }}
            value={orgName}
            onChange={(e) => setOrgName(e.target.value)}
          />
          <FormControl>
            <FormLabel sx={{ color: "black", fontSize: "14px" }}>
              Role
            </FormLabel>
            <Select
              id="role"
              placeholder="Role"
              size="small"
              sx={{ mb: "30px", bgcolor: "white", borderRadius: '6px' }}
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <MenuItem value={0}>Teacher</MenuItem>
              <MenuItem value={1}>Student</MenuItem>
              <MenuItem value={2}>Admin</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            type="submit"
            onClick={handleSubmit}
            sx={{
              color: "white",
              backgroundColor: "#8AC926",
              "&:hover": {
                backgroundColor: "#4BB543",
              },
              fontFamily: "Inter-Regular",
            }}
          >
            Sign Up
          </Button>
        </Box>
        <Typography variant="h6" sx={{ mt: "24px", color: "black" }}>
          Already have an account?
          <Button
            sx={{ color: "black", fontFamily: "Inter-Regular" }}
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUp;
