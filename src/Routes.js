import React from 'react';
import Error404 from './pages/Error404';
import PublicLayout from "./hoc/PublicLayout";
import { Navigate } from "react-router-dom";
import ProtectedLayout from "./hoc/ProtectedLayout";
import Login from './pages/Public/Login';
import SignUp from './pages/Public/Signup';
import Home from './pages/Private/Home';

const routes = (isAuthenticated) => [
  {
    path: "/",
    element: !isAuthenticated ? <ProtectedLayout /> : <Navigate to="/login" />,
    children: [
      { path: "home", element: <div><Home /></div> },
      { path: "teachers", element: <div>Teachers</div> },
      { path: "students", element: <div>Students</div> },
      { path: "courses", element: <div>Courses</div> },
    ],
  },
  {
    // PUBLIC
    path: "/",
    element: !isAuthenticated ? <PublicLayout /> : <Navigate to="/home" />,
    children: [
      { path: "login", element:  <Login/>},
      { path: "signup", element:  <SignUp/>}
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
];

export default routes;
