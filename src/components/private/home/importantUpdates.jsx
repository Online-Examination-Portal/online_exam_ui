import React from "react";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Box,
} from "@mui/material";
import impData from "./data/impData";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";

const ImpUpdates = () => {
  return (
    <Paper sx={{ overflow: "hidden", mt: 4, mb: 10 }}>
      <TableContainer sx={{ maxHeight: 400 }}>
        <Table stickyHeader sx={{ width: "75%" }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>
                Important Updates
              </TableCell>
              <TableCell>
                <Button variant="contained" sx={{ borderRadius: "18px" }}>
                  20 unread updates
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {impData.map((data) => (
              <TableRow key={data.id}>
                <TableCell>{data.update}</TableCell>
                <TableCell>
                  <Box>
                    <IconButton sx={{ color: "primary.main" }}>
                      <DeleteOutlineOutlinedIcon />
                    </IconButton>
                    <IconButton sx={{ color: "primary.main" }}>
                      <MarkEmailReadOutlinedIcon />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ImpUpdates;
