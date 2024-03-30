import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Button,
  Box,
  IconButton,
  TablePagination,
} from "@mui/material";
import { StudentInvitationData } from "./data/inviationStudentData";
import * as classes from "./styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { PAGE_SIZE } from "../../../utilities/constants";
import TablePaginationActions from "../../common/TablePaginationAction";

// Import API data
import useGetInviteStudent from "../../../modules/AddStudentDrawer/data/useGetInviteStudent";
import useGetStatusStudent from "../../../modules/AddStudentDrawer/data/useGetStatusStudent";

const InvitationStudent = (props) => {
  const [inviteStudentData, isInviteError, isInviteLoading, getStudentInvite] =
    useGetInviteStudent();
  const [studentStatusData, isStatusError, isStatusLoading, getStatusStudent] =
    useGetStatusStudent();
  const [page, setPage] = useState(0);
  const [maxPageReached, setMaxPageReached] = useState(0);
  const [allInvites, setAllInvites] = useState([]);

  const handleChangePage = (event, newPage) => {
    // avoiding extra api calls
    if (page < newPage) {
      if (newPage === maxPageReached + 1) {
        setMaxPageReached((prev) => prev + 1);
        getStudentInvite({ page_size: PAGE_SIZE, page: newPage + 1 });
      } else if (newPage > maxPageReached + 1) {
        let pageCount = maxPageReached;
        setMaxPageReached(newPage);
        function delayedLoop(iterations) {
          let i = pageCount + 2;
          function loop() {
            getStudentInvite({ page_size: PAGE_SIZE, page: i });
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
    if (inviteStudentData) {
      temp = temp.concat(inviteStudentData.rows);
      setAllInvites(temp);
    }
  }, [inviteStudentData]);

  useEffect(() => {
    getStudentInvite({ page_size: PAGE_SIZE, page: 1 });
    getStatusStudent();
  }, []);

  return (
    <>
      {isInviteLoading
        ? "...Loading"
        : inviteStudentData &&
          allInvites && (
            <React.Fragment>
              <Table stickyHeader sx={{ height: "100%", width: "100%" }}>
                <TableBody>
                  {allInvites
                    .slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)
                    .map(
                      (row, i) => (
                        // {inviteStudentData.rows.map((row, i) => (
                        <TableRow key={i} row={row}>
                          {inviteStudentData.columnName.map((column, keyId) => {
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
                                ) : column.type === "button" ? (
                                  <Button sx={classes.invitationRemove}>
                                    Remove
                                  </Button>
                                ) : null}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                        // )
                      )
                      // }
                    )}
                </TableBody>
              </Table>

              <TablePagination
                page={page}
                style={{ overflow: "unset" }}
                component="div"
                labelRowsPerPage=""
                rowsPerPage={PAGE_SIZE}
                count={inviteStudentData.totalCount}
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
    </>
  );
};

export default InvitationStudent;
