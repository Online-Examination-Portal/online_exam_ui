import React, { useState } from "react";
import { Box, Tab} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

const CourseBox = () => {
  const [value, setValue] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        padding: "34px 60px 43px 60px",
      }}
    >
      <Box sx={{ width: "100%", typography: "body1", }}>
        <TabContext value={value}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <TabList onChange={handleChange}  sx={{}}>
              <Tab
                label="Active"
                value="1"
                sx={{
                  border: "1px solid #4E90B5",
                  bgcolor: "#4E90B5",
                  borderRadius: "8px 8px 0px 0px",
                  color: '#fff',
                  mr:2,                  
                }}
              />
              <Tab label="In Active" value="2"
              sx={{
                border: "1px solid #4E90B5",
                bgcolor: "#D0F2FF",
                borderRadius: "8px 8px 0px 0px",
                color: '#4E90B5',
              }} />
            </TabList>
          </Box>
          <Box
            sx={{
              border: "1px solid #4E90B5",
              borderRadius: '8px 0px 8px 8px',
              background: '#fff',
              height: '50vh',
            }}
          >
            <TabPanel value="1" >Active</TabPanel>
            <TabPanel value="2">In Active</TabPanel>
          </Box>
        </TabContext>
      </Box>
    </Box>
  );
};

export default CourseBox;
