'use client';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let baseTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#32CD32' },
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
    h1: { fontSize: '3.2rem', fontWeight: 800 },
    h2: { fontSize: '2.7rem', fontWeight: 700 },
    h3: { fontSize: '2.2rem', fontWeight: 700 },
    h4: { fontSize: '1.75rem', fontWeight: 600 },
    h5: { fontSize: '1.4rem', fontWeight: 600 },
    h6: { fontSize: '1.25rem', fontWeight: 600 },
    body1: { fontSize: '1.15rem', fontWeight: 500 },
    body2: { fontSize: '1rem', fontWeight: 400 },
    subtitle1: { fontSize: '1.25rem', fontWeight: 500 },
    subtitle2: { fontSize: '1.05rem', fontWeight: 400 },
    button: { fontSize: '1.1rem', fontWeight: 600, textTransform: 'none' },
  },
  shape: {
    borderRadius: 12,
  },
});

export const theme = responsiveFontSizes(baseTheme);
