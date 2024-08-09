import { InferType, object, string } from "yup";

export const forgotSchema = object({
    email: string().email().required(),
});


export type ForgotType = InferType<typeof forgotSchema>