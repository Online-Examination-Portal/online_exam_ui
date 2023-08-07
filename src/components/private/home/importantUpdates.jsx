import React, { useState } from "react";
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
import DeleteIcon from "@mui/icons-material/Delete";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { updateImpUpdates } from "./data/impData";

const ImpUpdates = () => {
  return (
    <Paper 
      sx={{
        overflow: "hidden",
        margin: "32px 32px 32px 32px",
        flex: "1 1 auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          padding: "8px 16px",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#f5f5f5", 
        }}
      >
        <Typography variant="body1" color="primary" sx={{ fontWeight: "bold" }}>
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
      <TableContainer sx={{ maxHeight: '80%'}}>
        <Table stickyHeader sx={{ width: "100%" }}>
          <TableBody>
            {updateImpUpdates.rows.map((data) => (
              <CustomTableRow key={data.id} data={data} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

const CustomTableRow = ({ data }) => {
  const [isIconsVisible, setIsIconVisible] = useState(false);

  return (
    <TableRow
      onMouseEnter={() => setIsIconVisible(true)}
      onMouseLeave={() => setIsIconVisible(false)}
      sx={{ "&:hover": { backgroundColor: "#f5f5f5" }, }}
    >
      <TableCell>{data.update}</TableCell>
      <TableCell>{data.date}</TableCell>
      <TableCell> 
        {isIconsVisible && (
          <Box>
            <IconButton color="primary">
              <DeleteIcon />
            </IconButton>
            <IconButton color="primary">
              <MarkEmailReadIcon />
            </IconButton>
          </Box>
        )}
      </TableCell>
    </TableRow>
  );
};

export default ImpUpdates;
