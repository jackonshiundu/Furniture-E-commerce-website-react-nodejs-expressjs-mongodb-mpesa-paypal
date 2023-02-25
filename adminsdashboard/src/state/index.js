import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'dark',
  clientId: '63701cc1f03239c72c000182',
};

const darkLightmode = createSlice({
  name: 'darkmodeSlice',
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

export default darkLightmode.reducer;
export const { setMode } = darkLightmode.actions;
