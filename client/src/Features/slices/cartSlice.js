import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'authslice',
  initialState: {
    cartItems: [],
    totalQuantity: {},
    amount: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingProductIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (existingProductIndex >= 0) {
        state.cartItems[existingProductIndex].quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeQuantity: (state, action) => {
      const existingProductIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (existingProductIndex >= 0) {
        state.cartItems[existingProductIndex].quantity -= 1;
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
    },
    filterByRating: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.rating === action.payload
      );
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, filterByRating, removeFromCart, removeQuantity } =
  cartSlice.actions;
