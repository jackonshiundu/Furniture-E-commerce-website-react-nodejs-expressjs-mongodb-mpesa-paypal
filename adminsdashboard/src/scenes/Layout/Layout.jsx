import { Box, useMediaQuery } from '@mui/material';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { useGetUserQuery } from 'state/api';

const Layout = () => {
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const { clientId } = useSelector((state) => ({ ...state.mode }));

  const { data } = useGetUserQuery(clientId);
  return (
    <Box display={isNonMobile ? 'flex' : 'block'} width="100%" height="100%">
      <Sidebar
        user={data || {}}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      ></Sidebar>
      <Box flexGrow={1}>
        <Navbar
          user={data}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
