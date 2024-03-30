import React, { useState } from "react";
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow, 
  TablePagination,
  Box,
} from "@mui/material";
import teachersdata from "./data/teachersdata";
import * as classes from "./styles";
import TeacherDetailsDrawer from "../../../modules/TeacherDetailsDrawer";
import { PAGE_SIZE } from "../../../utilities/constants";
import TablePaginationActions from "../../common/TablePaginationAction";

const TeachersTable = () => {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(PAGE_SIZE);

  const handleChangePage = () => {

  }

  return (
    <Paper sx={classes.teachersPaperComponent}>
      <TableContainer sx={{ height: "100%" }}>
        <Table stickyHeader sx={{ width: "100%" }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#007CFF" }}>
              <TableCell align="center">Id</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Course</TableCell>
              <TableCell align="center">Total Batches</TableCell>
              <TableCell align="center">View Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teachersdata.map((data) => (
              <TableRow key={data.id} sx={classes.teachersTableBodyRow}>
                <TableCell align="center">{data.ID}</TableCell>
                <TableCell align="center">{data.name}</TableCell>
                <TableCell align="center">{data.course}</TableCell>
                <TableCell align="center">{data.totalbatch}</TableCell>
                <TableCell align="center">{<TeacherDetailsDrawer />}</TableCell>
                {/*<TableCell>
                   <Box
                  // sx={{
                  //   visibility: "hidden",
                  //   "&:hover": { visibility: "visible" },
                  // }}
                  >
                    <IconButton color="primary">
                      <DeleteIcon />
                    </IconButton>
                    <IconButton color="primary">
                      <MarkEmailReadIcon />
                    </IconButton>
                  </Box> 
                </TableCell>*/}
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
      </TableContainer>
    </Paper>
  );
};

export default TeachersTable;
