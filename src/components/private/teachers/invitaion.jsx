import React from "react";
import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Button,
} from "@mui/material";
import { invitationData } from "./inviationData";

const Invitation = () => {
  return (
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {invitationData.map((data) => (
              <TableRow key={data.id}>
                <TableCell sx={{ fontSize: "15px" }}>{data.email}</TableCell>
                <TableCell>
                  <Typography
                    variant="caption"
                    sx={{
                      backgroundColor: "#FFCA3A",
                      borderRadius: "50px",
                      padding: "4px 8px",
                    }}
                  >
                    {data.status}
                  </Typography>
                </TableCell>
                <TableCell>{data.role}</TableCell>
                <TableCell>
                  <Button
                    sx={{
                      color: "#454545",
                    }}
                  >
                    {data.action}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
};

export default Invitation;
