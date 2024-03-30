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
import * as classes from "./styles";

const ImpUpdates = () => {
  return (
    <Paper sx={classes.UpdatesPaperComponent}>
      <Box sx={classes.updatesHeaderContainer}>
        <Typography variant="body1" color="primary" sx={{ fontWeight: "bold" }}>
          Important Updates
        </Typography>
        <Typography variant="caption" sx={classes.unreadUpdates}>
          20 unread updates
        </Typography>
      </Box>
      <TableContainer sx={{ maxHeight: "80%" }}>
        <Table stickyHeader sx={classes.updatesTable}>
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

const CustomTableRow = ({ row }) => {
  const [isIconsVisible, setIsIconVisible] = useState(false);

  return (
    <TableRow
      onMouseEnter={() => setIsIconVisible(true)}
      onMouseLeave={() => setIsIconVisible(false)}
      sx={classes.updatesTablerow}
    >
      {updateImpUpdates.columnName.map((column, keyId) => {
        const value = row[column.id];
        return (
          <TableCell key={keyId}>
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
