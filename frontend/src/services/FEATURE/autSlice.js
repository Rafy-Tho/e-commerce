import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : null,
  },
  reducers: {
    setUserCredentials: (state, action) => {
      state.user = action.payload.user;
      localStorage.setItem('user', JSON.stringify(action.payload.user));
    },
    clearUserCredentials: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },
  },
});
export const { setUserCredentials, clearUserCredentials } = authSlice.actions;

export const authReducer = authSlice.reducer;
