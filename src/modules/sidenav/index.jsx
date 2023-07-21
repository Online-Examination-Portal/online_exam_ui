import React from 'react'
import { Box, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import LogoutIcon from '@mui/icons-material/Logout';

const SideNav = () => {
    return(
        <Box 
        sx ={{
            display :'flex',
            flexDirection : 'column',
            width: '300px',
            position: 'sticky',
            alignItems: 'center'
        }}>
            <Typography variant='h4' sx={{mt: 6, mb: 8, fontWeight:'bold'}}>
                LOGO                
            </Typography>
            <Box 
            sx={{ display : 'flex',
                  flexDirection : 'column',
                  gap : 40
        }}
            >
                <Box
                 sx={{ display : 'flex',
                 flexDirection : 'column',
                 gap : 5
    }}
    >
            <Typography sx={{
                    display: "flex",
                    flexDirection: "row",
                }}
                >
                <HomeIcon />
                <Box sx={{
                    mx: 2,
                }}>
                     Home 
                </Box>    
            </Typography>
            <Typography sx={{
                    display: "flex",
                    flexDirection: "row",
                }}
                >
                <BookIcon />
                <Box sx={{
                    mx: 2,
                }}>
                     Teachers 
                </Box>
            </Typography>
            <Typography sx={{
                    display: "flex",
                    flexDirection: "row",
                }}
                >
                <AccountBoxIcon />
                <Box sx={{
                    mx: 2,
                }}>
                     Students 
                </Box>
            </Typography>
            <Typography sx={{
                    display: "flex",
                    flexDirection: "row",
                }}
                >
                <CollectionsBookmarkIcon />
                <Box sx={{
                    mx: 2,
                }}>
                     Courses 
                </Box>
            </Typography>
            </Box>
            <Typography sx={{
                    display: "flex",
                    flexDirection: "row",
                }}
                >
                <LogoutIcon />
                <Box sx={{
                    mx: 2,
                }}>
                     Logout 
                </Box>
            </Typography>
            </Box>
        </Box>
    )
}
export default SideNav;