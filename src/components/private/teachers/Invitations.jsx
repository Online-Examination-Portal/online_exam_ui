import React, { useEffect, useState, useCallback } from "react";
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
import useGetInviteStatus from "../../../modules/AddTeacherDrawer/data/useGetInviteStatus";

const Invitation = (props) => {
  const { inviteData, isInviteError, isInviteLoading, getTeacherInvite } =
    props;
  const [selectedValue, setSelectedValue] = useState("");
  const [statusData, isStatusError, isStatusLoading, getStatus] =
    useGetInviteStatus();
  const [page, setPage] = useState(0);
  const [maxPageReached, setMaxPageReached] = useState(0);
  const [allInvites, setAllInvites] = useState([]);

  const handleChangePage = (event, newPage) => {
    // avoiding extra api calls
    if (page < newPage) {
      if (newPage === maxPageReached + 1) {
        setMaxPageReached((prev) => prev + 1);
        getTeacherInvite({ page_size: PAGE_SIZE, page: newPage + 1 });
      } else if (newPage > maxPageReached + 1) {
        let pageCount = maxPageReached;
        setMaxPageReached(newPage);
        function delayedLoop(iterations) {
          let i = pageCount + 2;
          function loop() {
            getTeacherInvite({ page_size: PAGE_SIZE, page: i });
            i++;
            if (i <= iterations) {
              setTimeout(loop, 200);
            }
          }
          loop();
        }
        delayedLoop(newPage + 1);
      }
    }
    setPage(newPage);
  };

  useEffect(() => {
    let temp = allInvites;
    if (inviteData) {
      temp = temp.concat(inviteData.rows);
      setAllInvites(temp);
    }
  }, [inviteData]);

  useEffect(() => {
    getStatus();
    getTeacherInvite({ page_size: PAGE_SIZE, page: 1 });
  }, []);

  return (
    <React.Fragment>
      {isInviteLoading
        ? "...Loading"
        : inviteData &&
          allInvites && (
            <React.Fragment>
              <Table
                stickyHeader
                sx={{ width: "100%", flex: "1 1 auto", height: "100px" }}
              >
                <TableBody>
                  {allInvites
                    .slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)
                    .map((row, i) => (
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
                                <Box
                                  sx={{ fontSize: "15px", color: "#4E90B5" }}
                                >
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
                page={page}
                style={{ overflow: "unset" }}
                component="div"
                labelRowsPerPage=""
                rowsPerPage={PAGE_SIZE}
                count={inviteData.totalCount}
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
