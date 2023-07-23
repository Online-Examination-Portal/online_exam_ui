import React from "react";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Box,
  Typography,
} from "@mui/material";
import impData from "./data/impData";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";

const ImpUpdates = () => {
  return (
    <Paper sx={{ overflow: "hidden" }}>
      <Box
        sx={{
          display: "flex",
          padding: "8px 16px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Important Updates
        </Typography>
        <Typography
          variant="caption"
          sx={{
            backgroundColor: "#007CFF",
            borderRadius: "18px",
            color: "#ffffff",
            padding: "4px 8px",
          }}
        >
          20 unread updates
        </Typography>
      </Box>
      <TableContainer sx={{ maxHeight: 400 }}>
        <Table stickyHeader sx={{ width: "100%" }}>
          <TableBody>
            {impData.map((data) => (
              <TableRow
                key={data.id}
                sx={{ "&:hover": { backgroundColor: "#f5f5f5" } }}
              >
                <TableCell>{data.update}</TableCell>
                <TableCell>
                  <Box
                    sx={{
                      visibility: "hidden",
                      "&:hover": { visibility: "visible" },
                    }}
                  >
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
