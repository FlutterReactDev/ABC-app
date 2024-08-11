import { baseApi } from "../Base";
import { LoginRequest, RegisterRequest } from "./types";

const authApi = baseApi.injectEndpoints({
    endpoints(build) {
        return {
            login: build.mutation<void, LoginRequest>({
                query: (data) => ({
                    url: "/CRM/login",
                    method: "POST",
                    body: data,
                }),
            }),
            register:build.mutation<void, RegisterRequest>({
                query:(data) => ({
                    url: "/CRM/register",
                    method: "POST",
                    body: data,
                })
            })
        };
    },
});

export const { useLoginMutation, useRegisterMutation } = authApi;
