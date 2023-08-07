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
      sx={classes.NavContainer}
    >
      <Box sx={classes.logoContainer}>
        <Typography variant="h3" color="secondary" sx={{ fontWeight: "700" }}>
          LOGO
        </Typography>
      </Box>
      <Box
        sx={classes.navItemsContainer}
      >
        <Box sx={classes.navItemsInnerConatiner}>
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
              sx={classes.navItems}
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
              sx={classes.navItems}
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
              sx={classes.navItems}
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
              sx={classes.navItems}
            >
              Courses
            </Typography>
          </Box>
        </Box>
        <Button
          sx={classes.logOutBtn}
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
