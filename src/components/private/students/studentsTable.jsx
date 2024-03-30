import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React, {useState} from "react";
import * as classes from "./styles";
import { studentData } from "./data/studentData";
import StudentDetailsDrawer from "../../../modules/StudentDetailsDrawer";
import { PAGE_SIZE } from "../../../utilities/constants";
import TablePaginationActions from "../../common/TablePaginationAction";

const StudentsTable = () => {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(PAGE_SIZE);

  const handleChangePage = () => {

  }

  return (
    <Paper sx={classes.studentsPaperComponent}>
      <TableContainer sx={{ height: "100%" }}>
        <Table stickyHeader sx={{ width: "100%" }}>
          <TableHead>
            <TableRow>
              {studentData.columnName.map((column, i) => (
                <TableCell
                  key={column.id}
                  align="center"
                  sx={classes.columnNames}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {studentData.rows.map((row, i) => (
              <TableRow key={i} row={row} sx={classes.studentTableBodyRow}>
                {studentData.columnName.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell align="center">
                      {column.type === "static" ? (
                        value
                      ) : column.type === "Button" ? (
                        <StudentDetailsDrawer/>
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
      </TableContainer>
    </Paper>
  );
};

export default StudentsTable;
