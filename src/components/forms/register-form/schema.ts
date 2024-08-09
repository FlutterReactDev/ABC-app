import { object, ref, string } from "yup";

export const registerSchema = object({
    name:string().required(),
    email:string().email().required(),
    phone:string().required(),
    password:string().min(6).required(),
    passwordConfirmation: string()
    .oneOf([ref('password')], 'Passwords must match')
})