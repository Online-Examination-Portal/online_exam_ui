import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
  Box,
  IconButton,
} from "@mui/material";
import { invitationData } from "./data/invitationData";
import * as classes from "./styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Invitation = () => {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <Table stickyHeader sx={{ height: "100%", width: "100%" }}>
      <TableBody>
        {invitationData.rows.map((row, i) => (
          <TableRow key={i} row={row}>
            {invitationData.columnName.map((column) => {
              const value = row[column.id];
              return (
                <TableCell key={i}>
                  {column.type === "IconButton" ? (
                    <IconButton sx={{ color: "#4E90B5" }}>
                      <AccountCircleIcon />
                    </IconButton>
                  ) : column.type === "email" ? (
                    <Box sx={{ fontSize: "15px", color: "#4E90B5" }}>
                      {value}
                    </Box>
                  ) : column.type === "static" ? (
                    <Typography variant="caption" sx={classes.invitationStatus}>
                      {value}
                    </Typography>
                  ) : column.type === "dropdown" ? (
                    <FormControl>
                      <Select
                        value={selectedValue}
                        onChange={(e) => setSelectedValue(e.target.value)}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        sx={classes.roleInvitaion}
                      >
                        <MenuItem value="">
                          <em>Role</em>
                        </MenuItem>
                        <MenuItem value="option1">Teacher</MenuItem>
                        <MenuItem value="option2">Student</MenuItem>
                        <MenuItem value="option3">Admin</MenuItem>
                      </Select>
                    </FormControl>
                  ) : column.type === "button" ? (
                    <Button sx={classes.invitationRemove}>Remove</Button>
                  ) : null}
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Invitation;
