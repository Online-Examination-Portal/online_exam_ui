import React from 'react'
import { Box, Skeleton, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const TableSkeleton = ({ columns }) => (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        overflow: "hidden",
        marginTop: "1rem",
        flex: "1 1 auto",
        overflowY: "auto",
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column, i) => (
              <TableCell
                key={i}
                sx={{
                  fontFamily: "Inter-Medium",
                  fontSize: 10,
                  color: "#8492A6",
                  backgroundColor: "#FAFAFB",
                  textTransform: "uppercase",
                }}
                align={column.align}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {Array(3)
            .fill({})
            .map((_, index) => (
              <TableRow key={index}>
                {Array(columns.length)
                  .fill()
                  .map((_, i) => (
                    <TableCell key={i}>
                      <Skeleton />
                    </TableCell>
                  ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Box>
  );

export default TableSkeleton