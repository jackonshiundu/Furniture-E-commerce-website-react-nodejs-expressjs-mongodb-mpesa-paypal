import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Hearder from 'components/Hearder';
import { memorixedOverviewchar } from 'components/Overviewchar';
import React, { useState } from 'react';

const Overview = () => {
  const [view, setView] = useState('units');
  return (
    <Box m="1.5rem 2.5rem">
      <Hearder
        title="OVERVIEW"
        subtitle="Overview of general revenue and profile"
      />
      <Box height="75vh">
        <FormControl sx={{ mt: '1rem' }}>
          <InputLabel>View</InputLabel>
          <Select
            value={view}
            label="View"
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>
        <memorixedOverviewchar />
      </Box>
    </Box>
  );
};

export default Overview;
