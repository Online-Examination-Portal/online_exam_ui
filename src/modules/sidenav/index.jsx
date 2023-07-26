import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useLocation } from "react-router-dom";

const SideNav = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    setActiveLink(location.pathname.split("/")[1]);
  }, [location]);

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
      <Box sx={{ mt: "10%", mb: 15, flex: "0 1 auto" }}>
        <Typography variant="h3" color="secondary" sx={{ fontWeight: "700" }}>
          LOGO
        </Typography>
      </Box>
      <Box
        sx={{
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
              display: "flex",
              flexDirection: "row",
              textDecoration: "none",
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
              display: "flex",
              flexDirection: "row",
              textDecoration: "none",
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
              display: "flex",
              flexDirection: "row",
              textDecoration: "none",
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
              display: "flex",
              flexDirection: "row",
              textDecoration: "none",
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

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            mb: "50%",
          }}
        >
          <LogoutIcon color="error" />
          <Typography
            color="error"
            sx={{
              mx: 2,
            }}
          >
            Logout
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SideNav;
