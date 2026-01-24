'use client';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary:   { main: '#32CD32' }, 
    secondary: { main: '#3B5323' }, 
    text: {
      primary: '#111111',   
      secondary: '#333333'  
    },
    background: {
      default: '#ffff',  
      paper: '#f9f9f9',      
    },
  }, 
  typography: {
    fontFamily: 'Tajawal, Arial, sans-serif',
    fontSize: 17, 
    h1: { fontSize: '2.5rem', fontWeight: 700 },
    h2: { fontSize: '2rem', fontWeight: 600 },
    h3: { fontSize: '1.9rem' },
    body1: { fontSize: '1.3rem' },  
    body2: { fontSize: '1.2 rem' },      
   },
  shape: {
    borderRadius: 12,
  },
});
