import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import CakeIcon from '@mui/icons-material/Cake';

function UserCell() {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <Avatar alt="Helena Brauer" src="/path-to-helena-brauer-image.jpg" />
      <Box>
        <Typography sx={{color: "#352C60"}} variant="body1" component="div">
          Helena Brauer
          <Chip
            sx={{marginLeft:1,backgroundColor:'#EAEAFC' , color: '#7A6FF0'}}
            label="¡Cumpleaños hoy!"
            size="small"
            
        />
        </Typography>
        <Typography sx={{color: "#BCC3CC", fontSize: '12px', fontWeight:'400'}}  color="#BCC3CC">
          Product Manager, Producto
        </Typography>
      </Box>
     
    </Box>
  );
}

export default UserCell;
