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
import AppTextTooltip from "./../../common/AppTextTooltip";
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
      <TableContainer sx={{ maxHeight: "80%" }}>
        <Table stickyHeader sx={{ width: "100%", padding: "8px 0" }}>
          <TableBody>
            {updateImpUpdates.rows.map((row, i) => (
              <CustomTableRow key={i} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

const CustomTableRow = ({ row, i }) => {
  const [isIconsVisible, setIsIconVisible] = useState(false);

  return (
    <TableRow
      onMouseEnter={() => setIsIconVisible(true)}
      onMouseLeave={() => setIsIconVisible(false)}
      sx={{ "&:hover": { backgroundColor: "#f5f5f5" } }}
    >
      {updateImpUpdates.columnName.map((column) => {
        const value = row[column.id];
        return (
          <TableCell>
            {column.type === "url" ? (
              <Box sx={{ cursor: "pointer" }}>{value}</Box>
            ) : column.type === "timeStamp" ? (
              value
            ) : column.type === "IconButton" && column.id === "delete" ? (
              isIconsVisible && (
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <AppTextTooltip title="delete">
                    <IconButton color="primary">
                      <DeleteIcon />
                    </IconButton>
                  </AppTextTooltip>
                </Box>
              )
            ) : column.type === "IconButton" &&
              column.id === "markReadUnread" ? (
              isIconsVisible && (
                <Box sx={{ display: "flex" }}>
                  <AppTextTooltip
                    title={false ? "Mark as read" : "Mark as unread"}
                  >
                    <IconButton color="primary">
                      <MarkEmailReadIcon />
                    </IconButton>
                  </AppTextTooltip>
                </Box>
              )
            ) : null}
          </TableCell>
        );
      })}
    </TableRow>
  );
};

export default ImpUpdates;
