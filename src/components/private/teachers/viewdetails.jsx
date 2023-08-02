import React from 'react'
import { Button } from '@mui/material'
import { Typography } from '@mui/material'

function ViewDetails( ){
    return(
        <Button
        variant="contained"
        sx={{
          padding: "4px 8px",
        }}
      >
         <Typography fontWeight="100" fontSize={"10px"}>
         View Details
      </Typography>
      </Button>
    )
}
export default ViewDetails