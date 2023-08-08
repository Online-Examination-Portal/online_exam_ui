import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import * as classes from "./styles";
import { studentData } from "./data/studentData";

const StudentsTable = () => {
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
                      ) : column.type === "iconButton" ? (
                        <Button variant="contained" sx={classes.viewDetailsBtn}>
                          {value}
                        </Button>
                      ) : null}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default StudentsTable;
