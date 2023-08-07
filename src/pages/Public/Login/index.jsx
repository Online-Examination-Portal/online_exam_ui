import React, { useState, useEffect, useContext } from "react";
import "./login.css";
import { useNavigate, redirect } from "react-router-dom";
import usePostLogin from "./data/usePostLogin";
import topImage from "../../../assets/image/bg1.png";
import downImage from "../../../assets/image/bg2.png";
import AppBackdrop from "../../../components/common/AppBackdrop";
import AppSnackbar from "../../../components/common/AppSnackbar";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { UserDetailsContext } from "../../../App";
import { AuthStateContext } from "../../../App";
import * as classes from "./styles";

const Login = () => {
  const { setUserDetails } = useContext(UserDetailsContext);
  const { setIsAuthenticated } = useContext(AuthStateContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [password, setPassword] = useState("");
  const [snackbarState, setSnackbarState] = useState(false);
  const [data, isError, isLoading, login] = usePostLogin();

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const authDetails = {
      email: email,
      password: password,
    };
    login(authDetails);
    setIsEmailValid(validateEmail(email));
  };

  useEffect(() => {
    if (data) {
      setUserDetails(data);
      setIsAuthenticated(true);
      redirect("/home");
    } else if (isError !== "") {
      setSnackbarState(true);
    }
  }, [isError, data, isLoading]);

  return (
    <React.Fragment>
      <Box className="outer_container">
        <img src={topImage} alt="top_image" className="top_image" />
        <img src={downImage} alt="top_image" className="bottom_image" />
        <Box sx={classes.inner_container}>
          <Typography variant="h2" sx={{ textAlign: "center" }}>
            Log in to your account
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
            Welcome back! Please enter your details
          </Typography>
          <Box sx={classes.inputFieldBox}>
            <InputLabel sx={classes.label}>E-mail</InputLabel>
            <FormControl error={isError} sx={{ mb: "30px" }}>
              <TextField
                id="email"
                name="email"
                placeholder="Enter your email"
                type="email"
                variant="outlined"
                size="small"
                sx={classes.emailField}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {!isEmailValid ? (
                <FormHelperText sx={{ fontFamily: "Cabin-Regular" }}>
                  Invalid Email
                </FormHelperText>
              ) : null}
            </FormControl>

            <InputLabel sx={classes.label}>Password</InputLabel>
            <TextField
              id="password"
              placeholder="Enter your password"
              type="password"
              size="small"
              sx={classes.passwordField}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              variant="contained"
              type="submit"
              size="normal"
              onClick={handleSubmit}
              sx={classes.SignInButton}
            >
              Sign In
            </Button>
          </Box>
          <Box sx={classes.RegisterButtonBox}>
            <Typography variant="body2" sx={{ color: "black" }}>
              Don't have an account ?
            </Typography>
            <Button
              sx={classes.RegisterButton}
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
