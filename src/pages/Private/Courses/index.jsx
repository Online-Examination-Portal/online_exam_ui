import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Banner from '../../../components/private/courses/banner';
import CourseBox from '../../../components/private/courses/courseBox';

const Courses = () => {
    return(
       <Box 
       sx={{
        width: "80%",
        display: "flex",
        height: "100vh",
        bgcolor: "#F1FAFF",
        flexFlow: "column",
        position: 'relative'
       }}> 
  
       <Box sx={{
        positon: 'absolute',
        display: 'flex', 
        flexDirection: 'column',
        overflow:'auto',
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
        display: "none",
        },

       }}>
       <Box sx={{
        display: 'flex',
        justifyContent: 'space-between', 
        padding: '28px 60px 0px 60px',   //top right bottom left
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
            height: '60%',
            borderRadius: '8px',

          }}>+ Add Courses</Button>
       </Box>
        <Banner/>
        <CourseBox/>
       </Box>
       

       </Box>
    );
};

export default Courses