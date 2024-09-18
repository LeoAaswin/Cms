import React from 'react'
import DashboardLayoutBasic from './components/signinpage';
import { ThemeProvider } from '@mui/material';
import theme from './components/theme';

const page = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <DashboardLayoutBasic />
      </ThemeProvider>
  </div>
  )
}

export default page