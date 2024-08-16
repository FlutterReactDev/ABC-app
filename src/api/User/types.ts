export type UserResponse = UserResponseSuccess | UserResponseError;

export interface UserResponseSuccess {
    user_id: number;
    access: "allow";
    name: string;
    surname: string;
    second_name: string;
    city: string;
    tg: string;
    email: string;
    alert: string;
    role: string;
}

export interface UserResponseError {
    access: "block";
    message: string;
}
