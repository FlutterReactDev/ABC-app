import { baseApi } from "../Base";
import { User } from "./types";

const userApi = baseApi.injectEndpoints({
    endpoints(build) {
        return {
            getProfile: build.query<User, number>({
                query: (userId) => {
                    return {
                        url: "/CRM/user.php",
                        method: "POST",
                        body: {
                            user_id: userId,
                        },
                    };
                },
            }),
        };
    },
});

export const { useGetProfileQuery } = userApi;
