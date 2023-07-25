import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

const SideNav = () => {
  // const [currentUrl, setCurrentUrl] = useState("");
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
        <Typography variant="h3" color="success" sx={{ fontWeight: "700" }}>
          LOGO
        </Typography>
      </Box>
      <Box
        color="success"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: "1 1 auto",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Box
            component={Link}
            to="/home"
            sx={{
              display: "flex",
              flexDirection: "row",
              textDecoration: "none",
            }}
          >
            <HomeIcon color="primary" />
            <Typography
              color="primary"
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
            }}
          >
            <BookIcon />
            <Typography
              sx={{
                mx: 2,
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
            }}
          >
            <AccountBoxIcon />
            <Typography
              sx={{
                mx: 2,
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
            }}
          >
            <CollectionsBookmarkIcon />
            <Typography
              sx={{
                mx: 2,
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
            mb: "10%",
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
