import { useMemo } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { themeSettings } from 'theme';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from 'scenes/dashboard/Dashboard';
import Layout from 'scenes/Layout/Layout';
import Products from 'scenes/products/Products';
import Clients from 'scenes/clients/Clients';
import TRansactions from './scenes/transaction/TRansactions';
import Geography from 'scenes/geography/Geography';
import Overview from 'scenes/overview/Overview';
import Daily from 'scenes/daily/Daily';
import Monthly from 'scenes/monthly/Monthly';
function App() {
  const { mode } = useSelector((state) => ({ ...state.mode }));
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/transactions" element={<TRansactions />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/monthly" element={<Monthly />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
