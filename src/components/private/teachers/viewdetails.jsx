import React from 'react'
import { Typography } from '@mui/material'

function ViewDetails( ){
    return(
        <Typography
        variant="caption"
        sx={{
          backgroundColor: "#007CFF",
          borderRadius: "18px",
          color: "#ffffff",
          padding: "4px 8px",
        }}
      >
        View Details
      </Typography>
    )
}
export default ViewDetails