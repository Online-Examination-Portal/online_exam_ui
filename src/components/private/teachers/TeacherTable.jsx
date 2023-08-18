import React from "react";
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
// import ViewDetails from "./ViewDetails.jsx";
import teachersdata from "./data/teachersdata";
import * as classes from "./styles";
import TeacherDetailsDrawer from "../../../modules/TeacherDetailsDrawer";

const TeachersTable = () => {
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
      </TableContainer>
    </Paper>
  );
};

export default TeachersTable;
