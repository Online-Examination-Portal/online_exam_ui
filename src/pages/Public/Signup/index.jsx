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
} from "@mui/material";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [dob, setDob] = useState(dayjs("2022-04-17"));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("gender:", gender);
    console.log("Password:", password);
    console.log("Phone no.:", phoneNo);
    console.log("DOB:", dob);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 6,
      }}
    >
      <Typography variant="h3" gutterBottom>
        Sign Up
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: 4,
          width: "auto",
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
          <TextField
            id="first_name"
            label="First name"
            type="text"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            id="last_name"
            label="Last name"
            type="text"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Box>

        <TextField
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
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
  );
};

export default SignUp;
