import React from 'react';
import { useTheme } from '@emotion/react';
import { DataGrid } from '@mui/x-data-grid';
import { useGetClientsQuery } from 'state/api';
import Hearder from 'components/Hearder';
import { Box } from '@mui/system';
const Clients = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetClientsQuery();

  console.log(data);
  const columns = [
    { field: '_id', headerName: 'ID', flex: 1 },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    {
      field: 'phoneNumber',
      headerName: 'Phone Number',
      flex: 0.5,
      /* // renderCell:(params)=>{
        return params.value.replace(/^(\d{3})(\d{3})(\d{4}),"($1)$2-$3")
    }  */
    },
    { field: 'city', headerName: 'City', flex: 0.5 },
    { field: 'occupation', headerName: 'Occupation', flex: 1 },
    { field: 'role', headerName: 'Role', flex: 1 },
  ];
  return (
    <Box m="1.5rem 2.5rem">
      <Hearder title="CUSTOMERS" subtitle="list of Customers" />
      <Box
        mt="40px "
        height="75vh"
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
          rows={data || []}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Clients;
