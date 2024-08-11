import { baseApi } from "../Base";

const userApi = baseApi.injectEndpoints({
    endpoints(build) {
        return {
            getProfile: build.query({
                query: () => {
                    return {
                        url: "/user",
                        method: "POST",
                    };
                },
            }),
        };
    },
});

export const { useGetProfileQuery } = userApi;
