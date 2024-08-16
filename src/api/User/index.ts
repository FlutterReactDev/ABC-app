import { baseApi } from "../Base";
import { UserResponse } from "./types";

const userApi = baseApi.injectEndpoints({
    endpoints(build) {
        return {
            getProfile: build.query<UserResponse, number>({
                query: (userId) => {
                    return {
                        url: "/CRM/user.php",
                        method: "POST",
                        body: JSON.stringify({
                            user_id: userId,
                        }),
                    };
                },
            }),
        };
    },
});

export const { useGetProfileQuery } = userApi;
