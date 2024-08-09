import { InferType, object, string } from "yup";

export const loginSchmea = object({
    email: string().email().required(),
    password: string().min(6).required(),
});


export type LoginType = InferType<typeof loginSchmea>