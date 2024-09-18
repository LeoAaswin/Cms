'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Set the mode to dark
    primary: {
      main: '#0D47A1', // Dark blue primary color
    },
    secondary: {
      main: '#FF4081', // Secondary color can remain the same, or adjust if needed
    },
    background: {
      default: '#121212', // Dark background color
      paper: '#1E1E1E', // Paper background for cards and modals
    },
    text: {
      primary: '#E0E0E0', // Light color for text in dark mode
      secondary: '#B0BEC5', // Slightly dimmed text for secondary text
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Arial", sans-serif', // Your preferred font
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#E3F2FD', // Light color for headers
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      color: '#BBDEFB', // Light color for headers
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      color: '#E0E0E0', // Light body text
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Customize button border radius
          textTransform: 'none', // Disable uppercase text for buttons
        },
        containedPrimary: {
          backgroundColor: '#0D47A1', // Primary button color
          '&:hover': {
            backgroundColor: '#0B3D91', // Darker blue on hover
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#1E1E1E', // Dark background for Paper components
          padding: '16px', // Customize padding
        },
      },
    },
  },
});

export default theme;
