import { Search } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from '@mui/x-data-grid';
import React from 'react';
import Flexbetween from './flex';
const DataGridCustomToolbar = ({ searchInput, setSearchInput, setSearch }) => {
  return (
    <GridToolbarContainer>
      <Flexbetween width="100%">
        <Flexbetween>
          <GridToolbarColumnsButton />
          <GridToolbarDensitySelector />
          <GridToolbarExport />
        </Flexbetween>
        <TextField
          label="Search..."
          sx={{ mb: '0.5rem', width: '50rem' }}
          onChange={(e) => setSearchInput(e.target.value)}
          variant="standard"
          value={searchInput}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    setSearch(searchInput);
                    setSearchInput('');
                  }}
                >
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Flexbetween>
    </GridToolbarContainer>
  );
};

export default DataGridCustomToolbar;
