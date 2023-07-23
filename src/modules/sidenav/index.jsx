import React from 'react'
import { Box, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

const SideNav = () => {
    return(
        <Box 
        sx ={{
            display :'flex',
            flexDirection : 'column',
            width: '300px',
            position: 'sticky',
            alignItems: 'center',
            border: 1
        }}>
            <Typography variant='h3' sx={{mt: 6, mb: 15, fontWeight:'bold', color:"success.main"}}>
                LOGO                
            </Typography>
            <Box 
            sx={{ display : 'flex',
                  flexDirection : 'column',
                  gap : 30,
                  color:"success.main",
        }}
            >
                <Box 
                 sx={{ display : 'flex',
                 flexDirection : 'column',
                 gap : 5
    }}
    >
            <Box component={Link} to = '/home'
            sx={{
                    display: "flex",
                    flexDirection: "row",
                }}
                >
                <HomeIcon />
                <Typography sx={{
                    mx: 2,
                }}>
                     Home 
                </Typography>    
            </Box>
            <Box component={Link} to = '/teachers'
             sx={{
                    display: "flex",
                    flexDirection: "row",
                }}
                >
                <BookIcon />
                <Typography sx={{
                    mx: 2,
                }}>
                     Teachers 
                </Typography>
            </Box>
            <Box component={Link} to = '/students'
            sx={{
                    display: "flex",
                    flexDirection: "row",
                }}
                >
                <AccountBoxIcon />
                <Typography sx={{
                    mx: 2,
                }}>
                     Students 
                </Typography>
            </Box>
            <Box component={Link} to = '/courses'
            sx={{
                    display: "flex",
                    flexDirection: "row",
                }}
                >
                <CollectionsBookmarkIcon />
                <Typography sx={{
                    mx: 2,
                }}>
                     Courses 
                </Typography>
            </Box>
            </Box>
            <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    height: "12vh",
                    color:"error.main"
                }}
                >
                <LogoutIcon />
                <Typography sx={{
                    mx: 2,
                }}>
                     Logout 
                </Typography>
            </Box>
            </Box>
        </Box>
    )
}
export default SideNav;