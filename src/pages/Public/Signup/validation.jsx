import React, { useState } from "react";

const validation = (formData) => {
    const errors = {};
  
    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required";
    }
  
    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required";
    }
  
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email format";
    }
  
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    }
  
    if (!formData.phoneNo.trim()) {
      errors.phoneNo = "Phone number is required";
    }
  
    return errors;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export { validation };
