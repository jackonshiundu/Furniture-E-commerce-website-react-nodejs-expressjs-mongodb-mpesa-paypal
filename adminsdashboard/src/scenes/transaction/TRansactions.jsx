import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import DataGridCustomToolbar from 'components/DataGridCustomToolbar';
import Hearder from 'components/Hearder';
import React, { useState } from 'react';
import { useGetTransactionQuery } from 'state/api';

const TRansactions = () => {
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(40);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const { data, isLoading } = useGetTransactionQuery({
    page,
    pageSize,
    sort: JSON.stringify(sort),
    search,
  });
  const columns = [
    { field: '_id', headerName: 'ID', flex: 1 },
    { field: 'userId', headerName: 'User Id', flex: 1 },
    { field: 'createdAt', headerName: 'CreatedAt', flex: 1 },
    {
      field: 'product',
      headerName: 'Number of Products',
      flex: 1,
      sortable: false,
      renderCell: (params) => params.value.length,
    },
    {
      field: 'cost',
      headerName: 'Cost',
      flex: 1,
      renderCell: (params) => `Ksh${Number(params.value).toFixed(2)}`,
    },
  ];
  return (
    <Box m="1.5rem 2.5rem">
      <Hearder title="TRANSACTIONS" subtitle="Entire list of Transactions" />
      <Box
        height="80vh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .MuiDataGrid-columnHeaders': {
            borderBottom: 'none',
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: theme.palette.primary.light,
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
          },
          '& .MuiDataGrid-toolbarContainer .MuiDataGrid-text': {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={(data && data.transaction) || []}
          columns={columns}
          rowCount={(data && data.total) || 0}
          pagination
          page={page}
          rowsPerPageOptions={[20, 50, 100]}
          pageSize={pageSize}
          paginationMode="server"
          sortingMode="server"
          onPageChange={(newPage) => setPage(newPage)}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          onSortModelChange={(newSortModel) => setSort(newSortModel)}
          components={{ Toolbar: DataGridCustomToolbar }}
          componentsProps={{
            toolbar: { searchInput, setSearchInput, setSearch },
          }}
        ></DataGrid>
      </Box>
    </Box>
  );
};

export default TRansactions;
