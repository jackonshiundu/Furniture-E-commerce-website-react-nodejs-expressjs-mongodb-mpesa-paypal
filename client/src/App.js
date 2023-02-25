import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './pages/Products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setUser } from './Features/slices/AuthSlice';
import SingleProduct from './pages/SingleProduct';
import CartPage from './pages/CartPage';
import Personaldetails from './pages/Personaldetails';
import PrivateRoute from './components/Privateroute';
import ShippingScreen from './pages/shippingScreen';
import 'react-phone-number-input/style.css';
import Payment from './pages/Payment';
import Placeorder from './pages/Placeorder';
import Contact from './pages/Contact';
function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('Profile'));

  useEffect(() => {
    dispatch(setUser(user));
  }, []);
  return (
    <BrowserRouter>
      <div className="z-20">
        <Header />
      </div>
      <ToastContainer position="bottom-center" limit={1} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/buyfurnitures" element={<Products />} />
        <Route path="/buyfurnitures/:id" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/shippingscreen"
          element={
            <PrivateRoute>
              <ShippingScreen />
            </PrivateRoute>
          }
        />
        <Route
          path="/contactus"
          element={
            <PrivateRoute>
              <Contact />
            </PrivateRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <PrivateRoute>
              <Payment />
            </PrivateRoute>
          }
        />
        <Route
          path="/placeorder"
          element={
            <PrivateRoute>
              <Placeorder />
            </PrivateRoute>
          }
        />
        <Route
          path="/rersonaldetails"
          element={
            <PrivateRoute>
              <Personaldetails />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
