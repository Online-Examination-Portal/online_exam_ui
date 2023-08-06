import React, { useState } from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import * as classes from "./styles";

const CourseBox = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={classes.courseBox}>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={classes.listContainer}>
            <TabList onChange={handleChange}>
              <Tab
                label="Active"
                value="1"
                style={{
                  color: value === "1" ? "white" : "#4E90B5",
                  backgroundColor: value === "1" ? "#4E90B5" : "#D0F2FF",
                }}
                sx={classes.tabContainer}
              />
              <Tab
                label="In Active"
                value="2"
                style={{
                  color: value === "2" ? "white" : "#4E90B5",
                  backgroundColor: value === "2" ? "#4E90B5" : "#D0F2FF",
                }}
                sx={classes.tabContainer}
              />
            </TabList>
          </Box>
          <Box sx={classes.panelContainer}>
            <TabPanel value="1">Active</TabPanel>
            <TabPanel value="2">In Active</TabPanel>
          </Box>
        </TabContext>
      </Box>
    </Box>
  );
};

export default CourseBox;
