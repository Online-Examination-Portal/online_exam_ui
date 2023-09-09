import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { StudentInvitationData } from "./data/inviationStudentData";
import * as classes from "./styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// Import API data
import useGetInviteStudent from "../../../modules/AddStudentDrawer/data/useGetInviteStudent";
import useGetStatusStudent from "../../../modules/AddStudentDrawer/data/useGetStatusStudent";

const InvitationStudent = () => {
  const [inviteStudentData, isInviteError, isInviteLoading, getStudentInvite] = useGetInviteStudent();
  const [studentStatusData, isStatusError, isStatusLoading, getStatusStudent] = useGetStatusStudent();

  useEffect(() => {
    getStudentInvite();
    getStatusStudent();
  }, []);

  return (
    inviteStudentData && (
    <Table stickyHeader sx={{ height: "100%", width: "100%" }}>
    <TableBody>
      {inviteStudentData.rows.map((row, i) => (
        <TableRow key={i} row={row}>
          {inviteStudentData.columnName.map((column) => {
            const value = row[column.id];
            return (
              <TableCell>
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
  )
    
  );
};

export default InvitationStudent;
