import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../api';

export const getSingleProduct = createAsyncThunk(
  'product/getsingleproduct',
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.getSingleProduct(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.data.message);
    }
  }
);
export const getAllProducts = createAsyncThunk(
  'product/getallproducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getAllProducts();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.data.message);
    }
  }
);
const productSlice = createSlice({
  name: 'authslice',
  initialState: {
    allProducts: [],
    singleProduct: {},
    beds: [],
    seats: [],
    storage: [],
    outdoor: [],
    tables: [],
    chairs: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.allProducts = action.payload;
    },
  },
  extraReducers: {
    [getAllProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.allProducts = action.payload;
    },
    [getAllProducts.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [getSingleProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [getSingleProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.singleProduct = action.payload;
    },
    [getSingleProduct.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;
export const {
  setProducts,
  removeFromCart,
} = productSlice.actions;
