import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'openmenu',
  initialState: {
    open: false,
  },
  reducers: {
    openMenu: (state, action) => {
      state.open = true;
    },
    closeMenu: (state, action) => {
      state.open = false;
    },
  },
});

export const { openMenu, closeMenu } = menuSlice.actions;
export default menuSlice.reducer;
