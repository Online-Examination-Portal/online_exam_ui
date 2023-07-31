import React, { useState } from "react";
import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { invitationData } from "./invitationData";
import * as classes from './styles'

const Invitation = () => {
  const [selectedValue, setSelectedValue] = useState("");
  // const handleDropdownChange = (e) => {
  //   selectedValue(e.target.value);
  // };

  return (
    <TableContainer component={Paper} sx={{ maxHeight: "60%" }}>
      <Table stickyHeader sx={{ width: "100%" }}>
        <TableBody>
          {invitationData.map((data) => (
            <TableRow key={data.id}>
              <TableCell sx={{ fontSize: "15px", color: "#4E90B5" }}>
                {data.email}
              </TableCell>
              <TableCell>
                <Typography
                  variant="caption"
                  sx={classes.invitationStatus}
                >
                  {data.status}
                </Typography>
              </TableCell>
              <TableCell>
                <FormControl sx={{}}>
                  <Select
                    value={selectedValue}
                    onChange={(e) => setSelectedValue(e.target.value)}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    sx={{ bgcolor:'#E6E6E6', borderRadius:'8px', height: '28px', width: '120px'}}
                  >
                    <MenuItem value="">
                      <em>Role</em>
                    </MenuItem>
                    <MenuItem value="option1">Teacher</MenuItem>
                    <MenuItem value="option2">Student</MenuItem>
                    <MenuItem value="option3">Admin</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>

              <TableCell>
                <Button
                  sx={classes.invitationRemove}
                >
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Invitation;
