import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : null,
    expires: localStorage.getItem('expires')
      ? JSON.parse(localStorage.getItem('expires'))
      : null,
  },
  reducers: {
    setUserCredentials: (state, action) => {
      state.user = action.payload.user;
      state.expires = action.payload.expires;
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('expires', JSON.stringify(action.payload.expires));
    },
    clearUserCredentials: (state) => {
      state.user = null;
      state.expires = null;
      localStorage.removeItem('user');
      localStorage.removeItem('expires');
    },
  },
});
export const { setUserCredentials, clearUserCredentials } = authSlice.actions;

export const authReducer = authSlice.reducer;
