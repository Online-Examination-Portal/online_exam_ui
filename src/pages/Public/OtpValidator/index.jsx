import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import topImage from "../../../assets/image/bg1.png";
import downImage from "../../../assets/image/bg2.png";
import AppBackdrop from "../../../components/common/AppBackdrop";
import {
  Box,
  Typography,
  Button, 
  InputLabel,
  FormHelperText,
  FormControl,
  OutlinedInput,
} from "@mui/material";
import * as classes from "./styles";
import useValidateOtp from "./usePostValidateOtp";

const ValidateOtp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, isError, isLoading, validate] = useValidateOtp();
  const [otp, setOtp] = useState("");

  useEffect(() => {
    if (data) {
      navigate("/login");
    }
  }, [data]);

  const handleSubmit = () => {
    const validationData = {
      email_otp_id: location.state.userInfo.email_otp_id,
      otp: otp,
    };
    validate(validationData);
  };

  return (
    <React.Fragment>
      <Box className="outer_container">
        <img src={topImage} alt="top_image" className="top_image" />
        <img src={downImage} alt="top_image" className="bottom_image" />
        <Box sx={classes.container}>
          <Typography
            color="secondary"
            variant="h1"
            sx={{ textAlign: "center", mb: 2, fontFamily: "Cabin-Bold" }}
          >
            Verify Your Account
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
            We are almost there!!! <hr />
            Please enter the OTP you have received on you registered email
            address.
          </Typography>
          <Box sx={classes.inputsContainer}>
            <FormControl error={isError} sx={{ mb: 3 }}>
              <InputLabel color="secondary">OTP</InputLabel>
              <OutlinedInput
                label="OTP"
                color="secondary"
                fullWidth
                name="otp"
                value={otp}
                variant="outlined"
                onChange={(e) => setOtp(e.target.value)}
              />
              {isError ? (
                <FormHelperText sx={{ fontFamily: "Cabin-Regular" }}>
                  Invalid OTP
                </FormHelperText>
              ) : null}
            </FormControl>
            <Button
              variant="contained"
              type="submit"
              size="normal"
              onClick={handleSubmit}
              sx={classes.validateBtn}
            >
              Verify
            </Button>
          </Box>
        </Box>
      </Box>
      {isLoading ? <AppBackdrop open={isLoading} /> : null}
    </React.Fragment>
  );
};

export default ValidateOtp;
