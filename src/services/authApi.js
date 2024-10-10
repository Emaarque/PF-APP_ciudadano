// src/services/authApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import * as SecureStore from "expo-secure-store";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.1.12:8080/sgp-rfs", //"https://tuapi.com", // Reemplaza con tu URL de API //192.168.1.13
    //comentado momentanemanete para probar otros componentes
    /* prepareHeaders: async (headers, { getState }) => {
      headers.set("Content-Type", "application/json");
      headers.set("Accept", "application/json");
      const token = await SecureStore.getItemAsync("jwt_token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    }, */
  }),
  endpoints: (builder) => ({
    //prueba sin autenticarse */
    login: builder.mutation({
      // Cambiamos la implementación de `query` a `async` para manejar lógica personalizada
      async queryFn(credentials) {
        const { alias, password } = credentials;
        // Validamos las credenciales directamente
        if (alias === 'admin' && password === 'a') {
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
        url: "/authenticate",
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response, meta) => {
        // Extraemos el token del header 'Authorization'
        const authorizationHeader = meta.response.headers.get('authorization');
        let token = null;
        if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
          token = authorizationHeader.substring(7); // Removemos 'Bearer ' para obtener el token
        }

        // Retornamos el token y los datos del usuario (si vienen en la respuesta)
        return { token, user: response };
      },
    }),
    // Otros endpoints
  }), */
});

export const { useLoginMutation } = authApi;
