import React from "react";
import { Box, Button, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./style.css";

const TablePaginationActions = (props) => {
  const { count, page, rowsPerPage, onPageChange } = props;
  const pageCount = Math.ceil(count / rowsPerPage);
  
  const handlePageClick = (e, newPage) => {
    onPageChange(e, newPage);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const getPageNumbers = () => {
    let pageNumbers = [];
    if (pageCount <= 6) {
      for (let i = 0; i < pageCount; i++) {
        pageNumbers.push(i);
      }
    } else {
      let firstPage = Math.max(0, page - 2);
      let lastPage = Math.min(pageCount - 1, page + 2);
      if (lastPage - firstPage < 4) {
        if (lastPage === pageCount - 1) {
          firstPage = Math.max(0, pageCount - 5);
        } else {
          lastPage = Math.min(pageCount - 1, firstPage + 4);
        }
      }
      for (let i = firstPage; i <= lastPage; i++) {
        pageNumbers.push(i);
      }
      if (firstPage > 1) {
        pageNumbers.unshift("...");
        pageNumbers.unshift(0);
      } else if (firstPage === 1) {
        pageNumbers.unshift(0);
      }
      if (lastPage < pageCount - 2) {
        pageNumbers.push("...");
        pageNumbers.push(pageCount - 1);
      } else if (lastPage === pageCount - 2) {
        pageNumbers.push(pageCount - 1);
      }
    }
    return pageNumbers;
  };

  const renderPageButton = (pageNumber) => {
    return (
      <IconButton
        key={pageNumber}
        sx={{
          fontSize: "14px",
          fontFamily: "Inter-Medium",
          width: "30px",
          height: "30px",
          padding: "6px",
          borderRadius: "6px !important",
          margin: "0 2px",
        }}
        onClick={(e) => handlePageClick(e, pageNumber)}
        className={page === pageNumber ? "activePageButton" : ""}
      >
        {pageNumber === "..." ? "..." : pageNumber + 1}
      </IconButton>
    );
  };

  return (
    <Box className="tableNavigationActionsWrapper">
      <Button
        variant="outlined"
        sx={{ mr: "15px" }}
        color="secondary"
        className="pageChangeButton"
        disabled={page === 0}
        onClick={handleBackButtonClick}
        startIcon={<ArrowBackIcon sx={{ fontSize: "6px" }} />}
      >
        Previous
      </Button>
      {getPageNumbers().map((pageNumber) => renderPageButton(pageNumber))}
      <Button
        variant="outlined"
        color="secondary"
        sx={{ ml: "15px" }}
        className="pageChangeButton"
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        endIcon={<ArrowForwardIcon sx={{ fontSize: "6px" }} />}
      >
        Next
      </Button>
    </Box>
  );
};

export default TablePaginationActions;
