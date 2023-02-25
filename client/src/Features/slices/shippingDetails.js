import { createSlice } from '@reduxjs/toolkit';

const shippingSlice = createSlice({
  name: 'authslice',
  initialState: {
    shippingInfo: {},
    paymentMethod: '',
  },
  reducers: {
    addShippingDetailToCart: (state, action) => {
      state.shippingInfo = action.payload;
    },
    setThePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
  },
});

export default shippingSlice.reducer;
export const { addShippingDetailToCart, setThePaymentMethod } =
  shippingSlice.actions;
