import { useTheme } from '@emotion/react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Hearder = ({ title, subtitle }) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        variant="h2"
        coclor={theme.palette.secondary[100]}
        fontWeight="bold"
        sx={{ mb: '5px' }}
      >
        {title}
      </Typography>
      <Typography
        variant="p"
        coclor={theme.palette.secondary[100]}
        fontWeight="bold"
        sx={{ mb: '5px' }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Hearder;
