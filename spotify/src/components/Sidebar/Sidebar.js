import React from 'react';
import { Box, Avatar } from '@mui/material';

function Sidebar({ img }) {
    return (
        <Box container sx={{ margin:'4', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between', height: '100%' }}>
            <Box item sx={{ marginBottom: '10px' }}>
                <Avatar alt="Avatar" src={img} style={{ width: '150px', height: '120px', marginRight: '10px', marginLeft: '10px' }} />
            </Box>
            <Box item sx={{ marginBottom: '50px' }}>
                <Avatar alt="Avatar" src={"ImageSamespace.jpg"} style={{ width: '45px', height: '45px', marginRight: '10px', marginLeft: '10px' }} />
            </Box>
        </Box>
    );
}

export default Sidebar;
