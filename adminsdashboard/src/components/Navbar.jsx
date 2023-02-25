import {
  AppBar,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import {
  ArrowDownwardOutlined,
  DarkModeOutlined,
  LightModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
} from '@mui/icons-material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FlexBetween from './flex';
import { setMode } from 'state';
import profileImage from '../asset/profile.jpg';
import { Box } from '@mui/system';

const Navbar = ({ user, setIsSidebarOpen, isSidebarOpen }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [achorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(achorEl);
  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
  return (
    <AppBar sx={{ position: 'static', background: 'none', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* leftSide */}
        <FlexBetween>
          <IconButton onClick={() => console.log('open')}>
            <MenuIcon onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            gap="3rem"
            p="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>
        {/* Right Side */}
        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === 'dark' ? (
              <DarkModeOutlined sx={{ fontSize: '25px' }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: '25px' }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{ fontSize: '25px' }} />
          </IconButton>
          <FlexBetween>
            <Button
              onClick={handleClick}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                textTransform: 'none',
                gap: '1rem',
              }}
            >
              <Box
                borderRadius="50%"
                component="img"
                alt="profile"
                src={profileImage}
                width="32px"
                height="32px"
                sx={{ objectFit: 'cover' }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.85rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user?.name}
                </Typography>
                <Typography
                  fontWeight="bold"
                  fontSize="0.75rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user?.accupation}
                </Typography>
              </Box>
              <ArrowDownwardOutlined
                sx={{ color: theme.palette.secondary[100], fontSize: '25px' }}
              />
            </Button>
            <Menu
              achorEl={achorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
              <MenuItem onClick={handleClose}>Log out</MenuItem>
            </Menu>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
