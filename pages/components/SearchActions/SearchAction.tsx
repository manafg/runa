import React from 'react';
import { TextField, InputAdornment, IconButton, Chip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';import ListIcon from '@mui/icons-material/List';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

function SearchAction() {
  // You can replace the placeholders with actual state or props as necessary
  const actions = ['Action 1']; // Placeholders for chip labels

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'space-between' }}>
      {/* Search Input */}
      <div>
      <TextField
         sx={{
            '& .MuiOutlinedInput-root': {
              // Override styles for the root element when focused
              '&.Mui-focused fieldset': {
                borderColor: '#BCC3CC', // Keep the border color the same when focused
              },
              // Override styles for the icon when the parent is focused
              '&.Mui-focused .MuiInputAdornment-root .MuiSvgIcon-root': {
                color: '#BCC3CC', // Keep the icon color the same when focused
              },
            },
          }}
        variant="outlined"
        placeholder="Buscar..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{
                color: '#BCC3CC'
              }}/>
            </InputAdornment>
          ),
        }}
      />
      </div>
      <div>
      {/* Action Chips */}
      {actions.map((action) => (
        <Chip 
        color="primary" label={action}  key={action}  onDelete={()=>{}}/>
      ))}
      {/* Filter Icon */}
      <IconButton >
        <FilterAltOutlinedIcon color='primary' />
      </IconButton>
      {/* More Options Icon */}
      <IconButton >
        <ListIcon color='primary'/>
      </IconButton>
      {/* Notifications Icon */}
      <IconButton>
        <NotificationsNoneIcon  color='primary'/>
      </IconButton>
      </div>
    </div>
  );
}

export default SearchAction;
