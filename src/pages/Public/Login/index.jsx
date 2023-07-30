import React, { useState, useEffect, useContext } from "react";
import "./login.css";
import { useNavigate, redirect } from "react-router-dom";
import usePostLogin from "./data/usePostLogin";
import topImage from "../../../assets/image/bg1.png";
import downImage from "../../../assets/image/bg2.png";
import AppBackdrop from "../../../components/common/AppBackdrop";
import AppSnackbar from "../../../components/common/AppSnackbar";
import { Box, Typography, TextField, Button, InputLabel } from "@mui/material";
import { UserDetailsContext } from "../../../App";
import { AuthStateContext } from "../../../App";

const Login = () => {
  const { setUserDetails } = useContext(UserDetailsContext)
  const { setIsAuthenticated } = useContext(AuthStateContext)
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [password, setPassword] = useState("");
  const [snackbarState, setSnackbarState] = useState(false);
  const [data, isError, isLoading, login] = usePostLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    const authDetails = {
      email: email,
      password: password,
    };
    login(authDetails);
  };

  useEffect(() => {
    if (data) {
      setUserDetails(data)
      setIsAuthenticated(true)
      redirect("/home")
    } else if (isError !== "") {
      setSnackbarState(true);
    }
  }, [isError, data, isLoading]);

  
  return (
    <React.Fragment>
      <Box className="outer_container">
        <img src={topImage} alt="top_image" className="top_image" />
        <img src={downImage} alt="top_image" className="bottom_image" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "40%",
            color: "white",
          }}
        >
          <Typography variant="h2" sx={{ textAlign: "center" }}>
            Log in to your account
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
            Welcome back! Please enter your details
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: "54px",
              width: "80%",
            }}
          >
            <InputLabel sx={{ color: "white" }}>E-mail</InputLabel>
            <TextField
              id="email"
              name="email"
              error={!isEmailValid}
              placeholder="Enter your email"
              type="email"
              variant="outlined"
              size="small"
              sx={{ mb: "30px", bgcolor: "white", borderRadius: "6px" }}
              value={email}
              helperText={isEmailValid ? "" : "Incorrect entry."}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputLabel sx={{ color: "white" }}>Password</InputLabel>
            <TextField
              id="password"
              placeholder="Enter your password"
              type="password"
              size="small"
              sx={{ mb: "30px", bgcolor: "white", borderRadius: "6px" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              type="submit"
              size="normal"
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
              Sign In
            </Button>
          </Box>
          <Box
            sx={{
              mt: "39px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="body2" sx={{ color: "black" }}>
              Don't have an account ?
            </Typography>
            <Button
              sx={{ color: "#fff", fontFamily: "Inter-Regular" }}
              onClick={() => navigate("/signup")}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Box>
      <AppBackdrop open={isLoading} />
      {snackbarState ? (
        <AppSnackbar
          open={snackbarState}
          setOpen={(state) => setSnackbarState(state)}
          message={isError}
          severity={"error"}
        />
      ) : null}
    </React.Fragment>
  );
};

export default Login;
