import React, { useState, useEffect, useContext } from "react";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box, Button, Typography } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import * as classes from "./style";
import { AuthStateContext } from "./../../App";
import { UserDetailsContext } from "./../../App";

const SideNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setIsAuthenticated } = useContext(AuthStateContext);
  const { setUserDetails } = useContext(UserDetailsContext);
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    setActiveLink(location.pathname.split("/")[1]);
  }, [location]);

  const logout = () => {
    navigate("/login");
    setIsAuthenticated(false);
    setUserDetails({});
    sessionStorage.removeItem("userInfo");
    sessionStorage.removeItem("token");
  };

  return (
    <Box
      sx={{
        width: "20%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box sx={{ mt: "10%", mb: 8, flex: "0 1 auto" }}>
        <Typography variant="h3" color="secondary" sx={{ fontWeight: "700" }}>
          LOGO
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: "1 1 auto",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <Box
            component={Link}
            to="/home"
            sx={{
              ...classes.navItem,
              borderLeft:
                activeLink === "home"
                  ? "3px solid #194D6B"
                  : "3px solid #ffffff",
            }}
          >
            <HomeIcon color={activeLink === "home" ? "secondary" : "primary"} />
            <Typography
              color={activeLink === "home" ? "secondary" : "primary"}
              sx={{
                mx: 2,
                fontWeight: 600,
              }}
            >
              Home
            </Typography>
          </Box>
          <Box
            component={Link}
            to="/teachers"
            sx={{
              ...classes.navItem,
              borderLeft:
                activeLink === "teachers"
                  ? "3px solid #194D6B"
                  : "3px solid #ffffff",
            }}
          >
            <BookIcon
              color={activeLink === "teachers" ? "secondary" : "primary"}
            />
            <Typography
              color={activeLink === "teachers" ? "secondary" : "primary"}
              sx={{
                mx: 2,
                fontWeight: 600,
              }}
            >
              Teachers
            </Typography>
          </Box>
          <Box
            component={Link}
            to="/students"
            sx={{
              ...classes.navItem,
              borderLeft:
                activeLink === "students"
                  ? "3px solid #194D6B"
                  : "3px solid #ffffff",
            }}
          >
            <AccountBoxIcon
              color={activeLink === "students" ? "secondary" : "primary"}
            />
            <Typography
              color={activeLink === "students" ? "secondary" : "primary"}
              sx={{
                mx: 2,
                fontWeight: 600,
              }}
            >
              Students
            </Typography>
          </Box>
          <Box
            component={Link}
            to="/courses"
            sx={{
              ...classes.navItem,
              borderLeft:
                activeLink === "courses"
                  ? "3px solid #194D6B"
                  : "3px solid #ffffff",
            }}
          >
            <CollectionsBookmarkIcon
              color={activeLink === "courses" ? "secondary" : "primary"}
            />
            <Typography
              color={activeLink === "courses" ? "secondary" : "primary"}
              sx={{
                mx: 2,
                fontWeight: 600,
              }}
            >
              Courses
            </Typography>
          </Box>
        </Box>
        <Button
          sx={{ my: 2, fontFamily: "Inter-SemiBold" }}
          onClick={logout}
          startIcon={<LogoutIcon color="error" />}
          color="error"
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default SideNav;
