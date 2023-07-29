import React from "react";
import Error404 from "./pages/Error404";
import PublicLayout from "./hoc/PublicLayout";
import { Navigate } from "react-router-dom";
import ProtectedLayout from "./hoc/ProtectedLayout";
import Login from "./pages/Public/Login";
import SignUp from "./pages/Public/Signup";
import Home from "./pages/Private/Home";
import Courses from "./pages/Private/Courses";
import Teachers from "./pages/Private/Teachers";
import ValidateOtp from "./pages/Public/OtpValidator";

const routes = (isAuthenticated) => [
  {
    path: "/",
    element: isAuthenticated ? <ProtectedLayout /> : <Navigate to="/login" />,
    children: [
      { path: "", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "teachers", element: <Teachers /> },
      { path: "students", element: <React.Fragment>Students</React.Fragment> },
      { path: "courses", element: <Courses /> },
    ],
  },
  {
    // PUBLIC
    path: "/",
    element: !isAuthenticated ? <PublicLayout /> : <Navigate to="/home" />,
    children: [
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "validate", element: <ValidateOtp /> },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
];

export default routes;
