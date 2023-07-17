import React from 'react';
import Error404 from './pages/Error404';
import PublicLayout from "./hoc/PublicLayout";
import { Navigate } from "react-router-dom";
import ProtectedLayout from "./hoc/ProtectedLayout";
import Login from './pages/Public/Login';

const routes = (isAuthenticated) => [
  {
    path: "/",
    element: isAuthenticated ? <ProtectedLayout /> : <Navigate to="/login" />,
    children: [
      { path: "home", element: <div>HOME</div> },
    ],
  },
  {
    // PUBLIC
    path: "/",
    element: !isAuthenticated ? <PublicLayout /> : <Navigate to="/home" />,
    children: [
      { path: "login", element: <Login/>}
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
];

export default routes;
