import React, { useEffect, useState } from "react";
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
  TablePagination,
} from "@mui/material";
import * as classes from "./styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { PAGE_SIZE } from "../../../utilities/constants";
import TablePaginationActions from "../../common/TablePaginationAction";
// Import API data
import useGetInvite from "../../../modules/AddTeacherDrawer/data/useGetInvites";
import useGetInviteStatus from "../../../modules/AddTeacherDrawer/data/useGetInviteStatus";

const Invitation = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [inviteData, isInviteError, isInviteLoading, getTeacherInvites] =
    useGetInvite();
  const [statusData, isStatusError, isStatusLoading, getStatus] =
    useGetInviteStatus();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(PAGE_SIZE);

  const handleChangePage = () => {};

  useEffect(() => {
    getStatus();
    getTeacherInvites();
  }, []);

  return (
    <React.Fragment>
      {isInviteLoading
        ? "...Loading"
        : inviteData && (
            <React.Fragment>
              <Table stickyHeader sx={{ width: "100%" }}>
                <TableBody>
                  {inviteData.rows.map((row, i) => (
                    <TableRow key={i} row={row}>
                      {inviteData.columnName.map((column, keyId) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={keyId}>
                            {column.type === "IconButton" ? (
                              <IconButton sx={{ color: "#4E90B5" }}>
                                <AccountCircleIcon />
                              </IconButton>
                            ) : column.type === "email" ? (
                              <Box sx={{ fontSize: "15px", color: "#4E90B5" }}>
                                {value}
                              </Box>
                            ) : column.type === "static" ? (
                              <Typography
                                variant="caption"
                                sx={classes.invitationStatus}
                              >
                                {value}
                              </Typography>
                            ) : column.type === "dropdown" ? (
                              <FormControl>
                                {!isStatusLoading && statusData ? (
                                  <Select
                                    id="status"
                                    value={selectedValue}
                                    onChange={(e) =>
                                      setSelectedValue(e.target.value)
                                    }
                                    displayEmpty
                                    inputProps={{
                                      "aria-label": "Without label",
                                    }}
                                    sx={classes.roleInvitaion}
                                  >
                                    {Object.keys(statusData).map((key) => (
                                      <MenuItem key={key} value={key}>
                                        {statusData[key]}
                                      </MenuItem>
                                    ))}
                                    {/* <MenuItem value="">
                            <em>Role</em>
                          </MenuItem>
                          <MenuItem value="0">Teacher</MenuItem>
                          <MenuItem value="1">Student</MenuItem>
                          <MenuItem value="2">Admin</MenuItem> */}
                                  </Select>
                                ) : null}
                              </FormControl>
                            ) : column.type === "button" ? (
                              <Button sx={classes.invitationRemove}>
                                Remove
                              </Button>
                            ) : null}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <TablePagination
                count={100}
                page={page}
                component="div"
                labelRowsPerPage=""
                rowsPerPage={rowsPerPage}
                onPageChange={handleChangePage}
                ActionsComponent={TablePaginationActions}
                SelectProps={{ style: { display: "none" } }}
                labelDisplayedRows={({ from, to, count }) => {
                  return (
                    <Box
                      component={"span"}
                      sx={{ mr: "30px" }}
                    >{`${from}-${to} of ${count}`}</Box>
                  );
                }}
              />
            </React.Fragment>
          )}
    </React.Fragment>
  );
};

export default Invitation;
