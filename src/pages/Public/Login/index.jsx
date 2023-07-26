import React, { useState } from "react";
import { Box, Typography, TextField, Button, InputLabel } from "@mui/material";
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
          color: 'white',
          
        }}
      >
        <Typography variant="h2">
          Log in to your account
        </Typography>
        <Typography variant="h6" gutterBottom>
          Welcome back! Please enter your details
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: '54px',
            width: "80%",
            
          }}
        >
          <InputLabel sx={{color: 'white'}}>E-mail</InputLabel>
          <TextField
            id="email"
            placeholder="Enter your email"
            type="email"
            variant="outlined"
            size="small"
            sx={{mb: '30px', bgcolor: 'white', borderRadius: '6px', }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputLabel sx={{color: 'white'}}>Password</InputLabel>
          <TextField
            id="password"
            placeholder="Enter your password"
            type="password"
            size="small"
            sx={{ mb: '30px' ,bgcolor: 'white', borderRadius: '6px'}}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            type="submit"
            size="normal"
            onClick={handleSubmit}
            sx={{
              color: 'white',                 
          backgroundColor: '#8AC926',     
          '&:hover': {
            backgroundColor: '#4BB543',   
          },
            }}
          >
            Sign In
          </Button>
        </Box>
        <Typography variant="h6" sx={{ mt: '39px', color: 'black' }}>
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
