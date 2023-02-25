import { configureStore } from '@reduxjs/toolkit';
import menuSlice from './slices/menuSlice';
import authReducer from './slices/AuthSlice';
import productReducer from './slices/productslice';
import cartSlice from './slices/cartSlice';
import wishListSlice from './slices/wishListSlice';
import shippingSlice from './slices/shippingDetails';
import filterSlice from './slices/filterSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};
const reducer = combineReducers({
  auth: authReducer,
  menu: menuSlice,
  cart: cartSlice,
  filter: filterSlice,
  product: productReducer,
  wishList: wishListSlice,
  shipping: shippingSlice,
});
const persistedReducer = persistReducer(persistConfig, reducer);
const Store = configureStore({
  reducer: persistedReducer,
});
export default Store;
