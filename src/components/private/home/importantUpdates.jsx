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
import impData from "./data/impData";
import DeleteIcon from "@mui/icons-material/Delete";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import AppTextTooltip from "./../../common/AppTextTooltip/index";

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
      <TableContainer sx={{ maxHeight: "80%" }}>
        <Table stickyHeader sx={{ width: "100%", padding: '8px 0' }}>
          <TableBody>
            {impData.map((data) => (
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
      sx={{ "&:hover": { backgroundColor: "#f5f5f5" } }}
    >
      <TableCell sx={{ cursor: "pointer" }}>
        {data.update}
      </TableCell>
      <TableCell>{data.date}</TableCell>
      <TableCell>
        {isIconsVisible && (
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <AppTextTooltip title="delete">
              <IconButton color="primary">
                <DeleteIcon />
              </IconButton>
            </AppTextTooltip>
            <AppTextTooltip title={false ? "Mark as read" : "Mark as unread"}>
              <IconButton color="primary">
                <MarkEmailReadIcon />
              </IconButton>
            </AppTextTooltip>
          </Box>
        )}
      </TableCell>
    </TableRow>
  );
};

export default ImpUpdates;
