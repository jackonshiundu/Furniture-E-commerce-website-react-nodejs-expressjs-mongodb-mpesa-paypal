import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../api';

export const signupUsers = createAsyncThunk(
  'auth/signup',
  async ({ formData, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.signup(formData);
      navigate('/');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const signinUsers = createAsyncThunk(
  'auth/signin',
  async ({ formData, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.signin(formData);
      navigate('/');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const UpdateUser = createAsyncThunk(
  'auth/updateuser',
  async ({ formData, id, toast }, { rejectWithValue }) => {
    try {
      const response = await api.updateUser({ id, formData });
      toast.success('Saved Successfully');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const deleteUser = createAsyncThunk(
  'auth/deleteuser',
  async ({ id, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.deleteUser(id);
      navigate('/');
      console.log('done');
      toast.success(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);
const authSlice = createSlice({
  name: 'authslice',
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state, action) => {
      state.user = null;
      state.error = null;
      localStorage.clear();
    },
  },
  extraReducers: {
    [signupUsers.pending]: (state, action) => {
      state.loading = true;
    },
    [signupUsers.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem('Profile', JSON.stringify({ ...action.payload }));
      state.user = action.payload;
      state.error = null;
    },
    [signupUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [signinUsers.pending]: (state, action) => {
      state.loading = true;
    },
    [signinUsers.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem('Profile', JSON.stringify({ ...action.payload }));
      state.user = action.payload;
      state.error = null;
    },
    [signinUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [UpdateUser.pending]: (state, action) => {
      state.loading = true;
    },
    [UpdateUser.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem('Profile', JSON.stringify({ ...action.payload }));
      state.user = action.payload;
      state.error = null;
    },
    [UpdateUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [deleteUser.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.clear();
      state.user = null;
    },
    [deleteUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { logoutUser, setUser } = authSlice.actions;
