import '@/styles/globals.css'
import React from 'react';
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from '../context/theme';
export default function App({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = React.useState(false);
  const theme = darkMode ? darkTheme : lightTheme;

  return(<ThemeProvider theme={theme}>
     <CssBaseline />
     <Component {...pageProps} />
     </ThemeProvider>
     )
}
