import { InferType, object, string } from "yup";

export const loginSchmea = object({
    login_email: string().email().required(),
    login_password: string().min(6).required(),
});


export type LoginType = InferType<typeof loginSchmea>