import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { baseQuery } from "./baseQuery";

export const baseApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: `https://admin.abc-data.ru`,
    }),
    reducerPath: "baseApi",
    endpoints: () => ({}),
});
