import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './FEATURE/autSlice';
import { apiSlice } from './API/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: import.meta.env.VITE_DEV_TOOLS === 'true',
});

setupListeners(store.dispatch);
export default store;
