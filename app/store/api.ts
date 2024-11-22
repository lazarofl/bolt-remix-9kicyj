import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface ContactFormData {
  name: string;
  email: string;
  reason: string;
  message: string;
}

interface LoginFormData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data?: unknown;
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ 
    baseUrl: '/api',
    validateStatus: (response, body) => {
      return response.status >= 200 && response.status < 300;
    },
  }),
  endpoints: (builder) => ({
    submitContact: builder.mutation<ApiResponse, ContactFormData>({
      query: (data) => ({
        url: '/contact',
        method: 'POST',
        body: data,
      }),
    }),
    login: builder.mutation<ApiResponse, LoginFormData>({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useSubmitContactMutation, useLoginMutation } = api;