'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import type { Router, Navigation } from '@toolpad/core';
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SettingsIcon from '@mui/icons-material/Settings';
import { InputBase } from '@mui/material';
import Image from 'next/image';
import logo from '../public/logo.png';

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Layouts',
    icon: <DashboardIcon />,
  },
  {
    segment: 'orders',
    title: 'Pages',
    icon: <StarIcon />,
    children: [
      {
        segment: 'home',
        title: 'Home',
      },
      {
        segment: 'aboutus',
        title: 'About Us',
      },
      {
        segment: 'services',
        title: 'Services',
      },
      {
        segment: 'contactus',
        title: 'Contact Us',
      },
    ],
  },
  {
    segment: 'orders',
    title: 'Features',
    icon: <StarIcon />,
  },
  {
    segment: 'orders',
    title: 'User',
    icon: <PersonIcon />,
  },
  {
    segment: 'orders',
    title: 'Pricing',
    icon: <MonetizationOnIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Analytics',
  },
  {
    segment: 'reports',
    title: 'Reports',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'sales',
        title: 'Sales',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'traffic',
        title: 'Traffic',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'settings',
    title: 'Settings',
    icon: <SettingsIcon />,
  },
];


const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

// Styled components for search
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

// Header component with logo and search bar
function Header() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        // justifyContent: 'space-between',
        padding: '16px',
        backgroundColor: 'transparent',
        boxShadow: 1,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
      </Box>
      <Box
        sx={{
          position: 'relative',
          borderRadius: '4px',
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'center',
          alignSelf: 'center',
          width: '100%',
          maxWidth: '600px',
        }}
      >
        <SearchIconWrapper>
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Box>
    </Box>
  );
}

// Main component
export default function DashboardLayoutBasic(props: { window?: () => Window }) {
  const { window } = props;

  const [pathname, setPathname] = React.useState('/dashboard');

  const router = React.useMemo<Router>(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
      branding={{
        logo: <Image src={logo} alt="Logo" width={40} />,
        title: 'Tantrik CMS',
      }}
    >
      <DashboardLayout icon={<DashboardIcon />} title="Dashboard">
        <Header />
        <Box
          sx={{
            py: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Typography>Dashboard content for {pathname}</Typography>
        </Box>
      </DashboardLayout>
    </AppProvider>
  );
}
