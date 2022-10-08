import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

//bikin service apinya dinisi
// dan export karena akan digunakan ditempat lain

export const reqresinColorAPI = createApi({
  // definisika semuannya disini
  reducerPath: 'reqresinColorAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://reqres.in/api',
  }),
  endpoints: (builder) => ({
    // GET Colors
    getColors: builder.query({
      // didalam ini akan didefinisikan querynya mau seperti apa
      query: () => '/colors',
    }),
    // GET Color By ID
    getColorId: builder.query({
      query: (id) => `/colors/${id}`,
    }),
    // POST Color
    postColor: builder.mutation({
      query: (newColor) => ({
        url: '/colors',
        method: 'POST',
        body: newColor,
      }),
    }),
    // PUT Color
    putColor: builder.mutation({
      // menerima 2 data, id dan data yang akan di update
      query: ({id, ...newColor}) => ({
        url: `/colors/${id}`,
        method: 'PUT',
        body: newColor,
      }),
    }),
    // DELETE Color
    deleteColor: builder.mutation({
      query: (id) => ({
        url: `/colors/${id}`,
        method: 'DELETE',
      }),
    }),
  })
});

// selajutnya di export untuk digunakan di store.js
export const {
  useGetColorsQuery, 
  useGetColorIdQuery,
  usePostColorMutation,
  usePutColorMutation,
  useDeleteColorMutation,
} = reqresinColorAPI;