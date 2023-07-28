import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Banner from '../../../components/private/courses/banner';

const Courses = () => {
    return(
       <Box 
       sx={{
        width: "80%",
        display: "flex",
        height: "100vh",
        bgcolor: "#F1FAFF",
        flexFlow: "column"
       }}> 

       <Box sx={{
        display: 'flex',
        justifyContent: 'space-between', 
        padding: '48px 60px 0px 60px',   //top right bottom left
       }}>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
        }}>
        <Typography variant='h3' color='secondary' fontWeight={700}>
            Courses
        </Typography>
        <Typography variant='h6' color='primary' >
        Track your courses details here.
        </Typography>
        </Box>
        
        <Button sx={{
            color: "white",
            backgroundColor: "#4E90B5",
            "&:hover": {
              backgroundColor: "#194D6B",
            },
            width: '15%',
            height: '70%',
            borderRadius: '8px',

          }}>+ Add Courses</Button>
       </Box>
        <Banner/>
       </Box>
    );
};

export default Courses