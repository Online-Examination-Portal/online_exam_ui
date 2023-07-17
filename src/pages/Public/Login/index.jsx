import React from 'react'
import { Box, Typography, TextField, Button} from '@mui/material';

const Login =() => {
    return(
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 6
          }}
        >
        
      <Typography variant="h3" gutterBottom>
        Log in to your account
      </Typography>
      <Typography variant="h7" gutterBottom>
        Welcome back! Please enter your details 
      </Typography>
      <Box
       sx={{
        display: "flex",
        flexDirection: 'column',
        mt: 4,
        width: "50%",        
       }}
       >
       <TextField
            id="email" 
            label="Email"
            type='email'
            variant='outlined'
            InputLabelProps={{
                shrink: true,
            }}
            sx={{mb: 6}}
            />
       <TextField
            id="password" 
            label="Password"
            type='password'
            variant='outlined'
            InputLabelProps={{
                shrink: true,
            }}
            sx={{mb: 6}}
            />
        <Button variant="contained">Sign In</Button>
       </Box>

      </Box>
      
    );
};

export default Login