// src/services/reclamoApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as SecureStore from 'expo-secure-store';

export const reclamoApi = createApi({
  reducerPath: 'reclamoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://tuapi.com', // Reemplaza con tu URL de API
    prepareHeaders: async (headers, { getState }) => {
      const token = await SecureStore.getItemAsync('jwt_token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    crearReclamo: builder.mutation({
      query: (reclamoData) => ({
        url: '/reclamos', // Endpoint de tu API para crear reclamos
        method: 'POST',
        body: reclamoData,
        headers: {
            'Content-Type': 'multipart/form-data',
          },
      }),
    }),
    getReclamos: builder.query({
        query: () => '/reclamos', // Endpoint de tu API para obtener reclamos
      }),
      getReclamoById: builder.query({
        query: (id) => `/reclamos/${id}`,
      }),
    // Otros endpoints si es necesario
  }),
});

export const { useCrearReclamoMutation, useGetReclamosQuery, useGetReclamoByIdQuery } = reclamoApi;
