import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
  reducerPath: 'adminApi',
  tagTypes: [
    'User',
    'Products',
    'Customers',
    'Transactions',
    'Geography',
    'Sales',
    'dashboardStats',
  ],
  
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `/users/getuser/${id}`,
      providesTags: ['User'],
    }),
    getProducts: build.query({
      query: () => `/products/getallproducts`,
      providesTags: ['Products'],
    }),
    getClients: build.query({
      query: () => `/clients/getclients`,
      providesTags: ['Customers'],
    }),
    getTransaction: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: `/transactions/gettransaction`,
        method: 'GET',
        params: { page, pageSize, search, sort },
      }),
      providesTags: ['Transactions'],
    }),
    getGeography: build.query({
      query: () => `/geography/getgeography`,
      providesTags: ['Geography'],
    }),
    getOverallStat: build.query({
      query: () => `/overallstats/getoverallstats`,
      providesTags: ['Sales'],
    }),
    getDashboardStats: build.query({
      query: () => `/dashboard/dashboarstats`,
      providesTags: ['dashboardStats'],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetClientsQuery,
  useGetTransactionQuery,
  useGetGeographyQuery,
  useGetOverallStatQuery,
  useGetDashboardStatsQuery,
} = api;
