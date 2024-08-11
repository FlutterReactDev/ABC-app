export interface LoginRequest {
    login_password: string;
    login_email: string;
}

export interface RegisterRequest {
    reg_name: string;
    reg_email: string;
    reg_tel: string;
    reg_tg: string;
    reg_password: string;
    reg_password2: string;
}
