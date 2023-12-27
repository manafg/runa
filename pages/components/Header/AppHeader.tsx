import React, { useState } from 'react';
import { AppBar,Box, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Avatar, Stack } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
const TopBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <>
        <Box sx={{display: 'block' , textAlign:'right', width:'100%'}}>
            <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenuOpen}
            color="inherit"
            >
            <Avatar alt="Administrador" src="/path-to-admin-image.jpg" />
            </IconButton>
            </Box>
        <Box sx={{display: 'flex' , width:'13%', alignItems: 'center'}}>
            <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1, color:'#352C60',  }}>
                Empleados 
            </Typography>
            <ChatBubbleOutlineIcon sx={{color:'#F6A623'}}/>
        </Box>
        
        <Box sx={{display: 'block' , width:'100%', textAlign:'right'}}>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>

        <Button sx={{
                backgroundColor: '#00E1C8',
                borderRadius: 20,
                ':hover': { 
                    backgroundColor: '#00E1C8'
                }
            }} variant="contained" color="primary" endIcon={<MoreVertIcon />}>
          Más Acciones
        </Button>
        </Box>
      </>
    </>
  );
};

export default TopBar;
