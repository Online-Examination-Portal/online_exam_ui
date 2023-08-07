import React from 'react'
import { Button } from '@mui/material'
import { Typography } from '@mui/material';
import * as classes from './styles'

function ViewDetails( ){
    return(
        <Button
        variant="contained"
        sx={classes.viewDetailsBtn}
      >
         <Typography fontWeight="100" fontSize={"10px"}>
         View Details
      </Typography>
      </Button>
    ) 
}
export default ViewDetails