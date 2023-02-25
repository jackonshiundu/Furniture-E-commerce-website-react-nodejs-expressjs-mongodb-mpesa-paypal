import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'authslice',
  initialState: {
    byStock: false,
    byRating: 0,
    searchQuery: '',
    byBrand: '',
    byColor: '',
    price: '',
  },
  reducers: {
    sortByRatings: (state, action) => {
      state.byRating = action.payload;
    },
    sortByPrice: (state, action) => {
      state.price = action.payload;
    },
    sortByBrand: (state, action) => {
      state.byBrand = action.payload;
    },
    sortByStock: (state, action) => {
      state.byStock = action.payload;
    },
    sortByColor: (state, action) => {
      state.byColor = action.payload;
    },
    sortBySearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    clearFilter: (state, action) => {
      state.searchQuery = '';
      state.byStock = false;
      state.byRating = 0;
      state.byBrand = '';
      state.price = '';
    },
  },
});

export default filterSlice.reducer;
export const {
  sortByBrand,
  sortByPrice,
  sortByRatings,
  removeFromCart,
  sortByStock,
  clearFilter,
  sortBySearchQuery,
  sortByColor,
} = filterSlice.actions;
