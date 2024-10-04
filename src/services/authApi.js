// src/services/authApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import * as SecureStore from "expo-secure-store";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://tuapi.com", // Reemplaza con tu URL de API
    //comentado momentanemanete para probar otros componentes
    /* prepareHeaders: async (headers, { getState }) => {
      const token = await SecureStore.getItemAsync("jwt_token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    }, */
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      // Cambiamos la implementación de `query` a `async` para manejar lógica personalizada
      async queryFn(credentials) {
        const { email, password } = credentials;
        // Validamos las credenciales directamente
        if (email === 'admin' && password === 'a') {
          // Simulamos una respuesta exitosa del servidor
          return {
            data: {
              token: 'fake-jwt-token',
              user: {
                id: '1',
                name: 'Administrador',
                email: 'admin',
              },
            },
          };
        } else {
          // Simulamos un error de autenticación
          return {
            error: {
              status: 401,
              data: { message: 'Credenciales inválidas' },
            },
          };
        }
      },
    }),
    // Otros endpoints...
  }),

  //comentado momentanemanete para probar otros componentes
  /* endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
    // Otros endpoints
  }), */
});

export const { useLoginMutation } = authApi;
