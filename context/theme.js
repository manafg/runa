import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#7972EB', // Main color for headers
    },
    text: {
      primary: '#352C60', // Constant color for TextField labels and body text
      secondary: '#7A6FF0', // Color for subtitle text
    },
    action: {
      active: '#F6A623', // Color for focused TextField border and action buttons
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          padding: '12px 14px !important', // Adjust the padding as needed
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputLabel-root': {
            color: '#352C60', // Label color
            position: 'relative',
            transform: 'none',
            marginBottom: '8px', // 8px spacing between label and input
            '& .Mui-focused': {
              color: '#352C60', // Maintain label color on focus
            },
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiInputLabel-root': {
            color: '#352C60', // Maintain label color on focus
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(0, 0, 0, 0.23)', // default border color
              top: 0, // Adjust position to remove the gap
            },
            '&:hover fieldset': {
              borderColor: 'rgba(0, 0, 0, 0.23)', // border color on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: '#F6A623', // border color on focus
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#F6A623', // Background color for buttons
          color: '#FFF', // Text color for buttons
          '&:hover': {
            backgroundColor: '#F6A623',
          },
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#75E6DA',
      secondary: '#000080',
      light:"#0B0BFF",
    },
  },
});
