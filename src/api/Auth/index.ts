import { baseApi } from "../Base";
import { LoginRequest, RegisterRequest } from "./types";

const authApi = baseApi.injectEndpoints({
    endpoints(build) {
        return {
            login: build.mutation<void, LoginRequest>({
                query: (data) => ({
                    url: "/CRM/login.php",
                    method: "POST",
                    body: JSON.stringify(data),
                }),
            }),
            register: build.mutation<void, RegisterRequest>({
                query: (data) => ({
                    url: "/CRM/register.php",
                    method: "POST",
                    body: JSON.stringify(data),
                }),
            }),
        };
    },
});

export const { useLoginMutation, useRegisterMutation } = authApi;
