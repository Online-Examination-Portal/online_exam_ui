import React, { useState } from "react";
import {
  IconButton,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Box,
  Typography,
} from "@mui/material";
import ViewDetails from "./viewdetails";
import teachersdata from "./data/teachersdata";
import DeleteIcon from "@mui/icons-material/Delete";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

const TeachersTable = () => {
  return (
    <Paper
      sx={{ overflow: "hidden", margin: "0 32px 32px 32px", flex: "1 1 auto" }}
    >
      <TableContainer sx={{ height: "100%" }}>
        <Table stickyHeader sx={{ width: "100%" }}>
            <TableHead>
                <TableRow sx={{ backgroundColor: "#007CFF",}}>
                <TableCell align="center">
                    Id
                </TableCell>
                <TableCell align="center">
                    Name
                </TableCell>
                <TableCell align="center">
                    Course
                </TableCell>
                <TableCell align="center">
                    Total Batches
                </TableCell>
                <TableCell align="center">
                    View Details
                </TableCell>
                </TableRow>
                
            </TableHead>
          <TableBody>
            {teachersdata.map((data) => (
              <TableRow
                key={data.id}
                sx={{ "&:hover": { backgroundColor: "#f5f5f5" } }}
              >
                <TableCell align="center">{data.ID}</TableCell>
                <TableCell align="center">{data.name}</TableCell>
                <TableCell align="center">{data.course}</TableCell>
                <TableCell align="center">{data.totalbatch}</TableCell>
                <TableCell align="center">{<ViewDetails/>}</TableCell>
                <TableCell>
                  {/* <Box
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
                  </Box> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

const CustomeTableRow = () => {
  const [isIconsVisible, setIsIconVisible] = useState(false);

  return <></>;
};

export default TeachersTable;
