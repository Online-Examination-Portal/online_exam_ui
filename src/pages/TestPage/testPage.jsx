import { Box, Button} from '@mui/material'
import React, { useEffect, useState} from 'react';
import useGetRoles from '../Public/Signup/data/useGetRoles';

const TestPage = () => {
    const [roles, isRolesError, isRolesLoading, getRoles] = useGetRoles();
    const[roleData, setRoleData] = useState('');

      useEffect(() => {
        if(roles){
            setRoleData(roles)
            console.log('roles: ',roles)
            
        }
      }, [roles, isRolesError, isRolesLoading]);

      const handleSubmit =(e) => {
        e.preventDefault();
        getRoles();
    }

    return(
      <Box>
    
        <Button
            disabled={isRolesError === "" ? false : true}
            variant="contained"
            type="submit"
            onClick={handleSubmit}
          >
            Get role
          </Button>
          
          <Box>
          {roleData && roles ? (
            JSON.stringify(roles)
          ) : null}
          </Box>
      </Box>
    );
};

export default TestPage;