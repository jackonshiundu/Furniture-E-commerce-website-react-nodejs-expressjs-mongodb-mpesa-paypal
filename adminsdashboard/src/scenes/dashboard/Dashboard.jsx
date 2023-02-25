import {
  AddOutlined,
  Close,
  DownloadOutlined,
  Email,
  PersonAdd,
  PointOfSale,
} from '@mui/icons-material';
import {
  Box,
  Button,
  FormGroup,
  Input,
  InputBase,
  InputLabel,
  Modal,
  TextareaAutosize,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Form from 'components/form';
import Hearder from 'components/Hearder';
import { memorixedOverviewchar } from 'components/Overviewchar';
import Statbox from 'components/Statbox';
import React from 'react';
import { useGetDashboardStatsQuery } from 'state/api';
import FlexBetween from '../../components/flex';
const Dashboard = () => {
  const { data, isLoading } = useGetDashboardStatsQuery();
  console.log(data);
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery('min-width:1200px');
  const isNonMobileScreens = useMediaQuery('min-width:600px');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(!open);
  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Hearder title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </FlexBetween>
      <FlexBetween
        sx={{
          '& >button': {
            flexDirection: isNonMobileScreens ? undefined : 'column',
          },
        }}
      >
        <Button
          onClick={handleOpen}
          sx={{
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.alt,
            fontSize: '14px',
            fontWeight: 'bold',
            display: 'flex',
            padding: '10px 20px',
          }}
        >
          <AddOutlined sx={{ mr: '10px' }} />
          Add Product
        </Button>
        {open && (
          <>
            <Box
              sx={{
                position: 'absolute',
                top: '50px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 'fit-content',
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
              }}
            >
              <FlexBetween mb="1.5rem">
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Add A product
                </Typography>
                <Close
                  onClick={handleClose}
                  sx={{
                    fontSize: '2rem',
                    cursor: 'pointer',
                  }}
                />
              </FlexBetween>
              <Form />
            </Box>
          </>
        )}
        <Button
          sx={{
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.alt,
            fontSize: '14px',
            fontWeight: 'bold',
            padding: '10px 20px',
          }}
        >
          <DownloadOutlined sx={{ mr: '10px' }} />
          Download Reports
        </Button>
      </FlexBetween>
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12,1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          '& >  div': {
            gridColumn: isNonMediumScreens ? undefined : 'span 12',
          },
        }}
      >
        {/*ROW*/}

        <Statbox
          title="Total Customers"
          value={data && data.totalCustomers}
          description="Since Lsst Month"
          increase="+14%"
          icon={
            <Email
              sx={{ color: theme.palette.secondary[300], fontSize: '25px' }}
            />
          }
        />
        <Statbox
          title="SalesToday"
          value={data && data?.todayStats?.totalSales}
          increase="+21%"
          description="Since LAst Month"
          icon={
            <PointOfSale
              sx={{ color: theme.palette.secondary[300], fontSize: '25px' }}
            />
          }
        />
        <Statbox
          title="Monthly Sales"
          value={data && data?.thisMonthStats?.totalSales}
          increase="+5%"
          description="Since LAst Month"
          icon={
            <PersonAdd
              sx={{ color: theme.palette.secondary[300], fontSize: '25px' }}
            />
          }
        />
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgoundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
        >
          <memorixedOverviewchar view="sales" isDashboard={true} />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
