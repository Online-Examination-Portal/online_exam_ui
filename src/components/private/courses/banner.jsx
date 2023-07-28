import React from 'react'
import { Box, TextField, Typography } from '@mui/material';
import courses from "../../../assets/image/courses.png";
import './course.css'

const Banner = () => {
    return(
       <Box 
       sx={{
        padding: '56px 60px 0px 60px',
        display: 'flex',
        flexDirection: 'row',
       }}>
        <img src={courses} alt='courses' className='course_img'/>
        <Box>
        <Box sx={{
            // borderRadius: '500px 8px 8px 500px',
            borderRadius: '8px 8px 8px 8px',
            background: 'linear-gradient(270deg, #FF40B2 0%, #570076 75.52%)',
            boxShadow: '0px 0px 5px 0px rgba(7, 128, 0, 0.43)',
            color: 'white',
            display: 'flex',
            padding: '20px 20px 20px 60px',
        }}>
        <Typography variant='body1' sx={{"& span": {fontWeight: 600, fontSize: '24px', display: 'flex', flexDirection: 'column'}}}>
         Get the details of all the courses in your organization. You can edit and create new courses
         here. Manage teacher and students teaching and enrolled in the respective courses. <span>Total Active Courses: 09 </span> 
         </Typography>
        </Box>
        <Box sx={{padding: '28px 60px 0px 407px',}}>
        <TextField
            id="search"
            placeholder="search"
            type="search"
            size="small"
            variant="outlined"
            sx={{
                width: '80%',
                borderRadius: '8px',
                border: '1px solid #4E90B5',
                background: '#FFF',
            }}
        />
        </Box>
        
        </Box>
        
         
       </Box>
    )
}

export default Banner