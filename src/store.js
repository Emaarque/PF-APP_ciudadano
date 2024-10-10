// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "./services/authApi";
import { reclamoApi } from './services/reclamoApi';
import authReducer from "./features/auth/authSlice";
import reclamoReducer from './features/reclamo/reclamoSlice';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [reclamoApi.reducerPath]: reclamoApi.reducer,
    auth: authReducer,
    reclamo: reclamoReducer,
    // Otros reductores aquí
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, reclamoApi.middleware),
});

setupListeners(store.dispatch);
