import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./login.css";
import topImage from "../../../assets/image/bg1.png";
import downImage from "../../../assets/image/bg2.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Box className="outer_container">
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
          Log in to your account
        </Typography>
        <Typography variant="h6" gutterBottom>
          Welcome back! Please enter your details
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: 4,
            width: "100%",
          }}
        >
          <TextField
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ mb: 6 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ mb: 6 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className="button"
            variant="contained"
            type="submit"
            onClick={handleSubmit}
          >
            Sign In
          </Button>
        </Box>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Don't have an account ?
          <Button>
            <Link to="/signup">Sign Up</Link>
          </Button>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
