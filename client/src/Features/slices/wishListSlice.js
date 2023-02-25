import { createSlice } from '@reduxjs/toolkit';

const wishListSlice = createSlice({
  name: 'authslice',
  initialState: {
    wishlistItem: [],
  },
  reducers: {
    addToWishList: (state, action) => {
      /*    const existingProductIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (existingProductIndex >= 0) {
        return;
      } else { */
      state.wishlistItem.push(action.payload);
    },
    removeFromWishList: (state, action) => {
      state.wishlistItem = state.wishlistItem.filter(
        (item) => item._id !== action.payload
      );
    },
    clearWishlist: (state) => {
      state.wishlistItem = [];
    },
  },
});

export default wishListSlice.reducer;
export const { addToWishList, clearWishlist, removeFromWishList } =
  wishListSlice.actions;
