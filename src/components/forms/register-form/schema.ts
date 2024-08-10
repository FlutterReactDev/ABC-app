import { InferType, object, ref, string } from "yup";

export const registerSchema = object({
    reg_name:string().required(),
    reg_email:string().email().required(),
    reg_tel:string().required(),
    reg_password:string().min(6).required(),
    reg_password2: string()
    .oneOf([ref('reg_password')], 'Passwords must match')
})

export type RegisterType = InferType<typeof registerSchema>