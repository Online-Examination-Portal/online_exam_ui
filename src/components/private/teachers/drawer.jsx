import React, { useState } from "react";
import { Box, Drawer, Button, Typography, SvgIcon, InputLabel, TextField } from "@mui/material";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const TeacherDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <React.Fragment>
        <Box>
      <Button
        onClick={toggleDrawer}
        sx={{
          color: "white",
          backgroundColor: "#4E90B5",
          "&:hover": {
            backgroundColor: "#194D6B",
          },
        }}
      >
        + Add Teacher
      </Button>
      
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer}
      sx={{  }}
      >
        <Box 
        sx={{
            gap: '400px',
            display: 'flex',
            justifyContent: 'space-between',
            color: '#194D6B',
            padding: '55px 55px 0px 55px '   //top right bottom left
        }}>
        <Typography variant="h4" sx={{fontWeight: 600}}>
            Add / Manage Teachers 
        </Typography>
        <Button onClick={toggleDrawer}>X</Button>
        </Box>

        <Box
        sx={{
            padding: '30px 0px 0px 55px ',
            display: 'flex',
            flexDirection: 'row'
        }}
        >
            <SvgIcon color="primary" 
            sx={{
              width: "50px",
              height: "50px",
              borderRadius: "50px",
              backgroundColor: "#F1FAFF",
            }}
            ><PeopleAltIcon/></SvgIcon>
            <Box  sx={{display: 'flex', flexDirection: 'column', padding:'0px 0px 0px 26px'}}>
            <Typography color='#194D6B' variant="h6" >Invite Teachers</Typography>
            <Typography variant="body1" color='#4E90B5'>Enter the email ids of the teachers you want to add to your organization</Typography>
            </Box>
        </Box>
        <Box 
        sx={{
            padding: '40px 55px 0px 57px',
            width: '85%',
            display: 'flex',
            flexDirection: 'column',
        }}>
        <InputLabel sx={{fontSize: '14px', color:'#4E90B5'  }}>Email Ids</InputLabel>
        <TextField
        id="email"
        placeholder="Enter your email"
        type="email"
        variant="outlined"
        size="small"
        sx={{borderRadius: '8px', border: '1px solid #4E90B5'}}
        />
        </Box>
        <Box sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '30px 66px 0px 55px'
        }}>
        <Button
        sx={{
            backgroundColor: "#4E90B5",
              "&:hover": {
                backgroundColor: "#194D6B",
            },
            borderRadius:'4px',
            color:'white',
            // width: '195px',
            // height: '49px',
            width: '20%',
            height: '100%'
        }}
        >Send Invite</Button>
        </Box>
        <Box sx={{
            padding: '55px 55px 0px 55px',
        }}>
            <Typography variant="h6" color='#194D6B'>Manage Teachers</Typography>
            {/* Ask about break */}
            <Typography variant="caption">You can see the status of all the invites sent to the teachers and their respective role. You can change the role <br></br> or completely remove a teacher from the organization.</Typography>
        </Box>
        <Box sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '200px 66px 0px 55px'
        }}>
        <Button
        sx={{
            backgroundColor: "#F1FAFF",
              "&:hover": {
                backgroundColor: "#4E90B5",
            },
            color: 'black',
            borderRadius:'4px',
            width: '20%',
            height: '100%'
        }}
        >Cancel</Button>
        </Box>
        
      </Drawer>
    </Box>
    </React.Fragment>
    
  );
};

export default TeacherDrawer;
