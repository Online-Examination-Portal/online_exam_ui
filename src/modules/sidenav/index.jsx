import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

const SideNav = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link); // Set the clicked link as active
  };

  const isLinkActive = (link) => {
    return link === activeLink;
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
            onClick={() => handleLinkClick("home")}
            sx={{
              display: "flex",
              flexDirection: "row",
              textDecoration: "none",
            }}
          >
            <HomeIcon
              color={isLinkActive("home") ? "secondary" : "primary"}
            />
            <Typography
              color={isLinkActive("home") ? "secondary" : "primary"}
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
            onClick={() => handleLinkClick("teachers")}
            sx={{
              display: "flex",
              flexDirection: "row",
              textDecoration: "none",
            }}
          >
            <BookIcon
              color={isLinkActive("teachers") ? "secondary" : "primary"}
            />
            <Typography
              color={isLinkActive("teachers") ? "secondary" : "primary"}
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
            onClick={() => handleLinkClick("students")}
            sx={{
              display: "flex",
              flexDirection: "row",
              textDecoration: "none",
            }}
          >
            <AccountBoxIcon
              color={isLinkActive("students") ? "secondary" : "primary"}
            />
            <Typography
              color={isLinkActive("students") ? "secondary" : "primary"}
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
            onClick={() => handleLinkClick("courses")}
            sx={{
              display: "flex",
              flexDirection: "row",
              textDecoration: "none",
            }}
          >
            <CollectionsBookmarkIcon
              color={isLinkActive("courses") ? "secondary" : "primary"}
            />
            <Typography
              color={isLinkActive("courses") ? "secondary" : "primary"}
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
