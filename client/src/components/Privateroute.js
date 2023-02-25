import React from 'react';
import { useSelector } from 'react-redux';
import LoadingtoRedirect from './Loadingtoredirect';

const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  return user ? children : <LoadingtoRedirect />;
};

export default PrivateRoute;
