import { AxiosResponse } from "axios";
import $api from "../shared/config/http";
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthService {
    static async login(login: string | undefined, password: string | undefined): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/login', {login, password})
    }
    static async registration(login: string | undefined, password: string | undefined): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/register', {login, password})
    }
    static async logout(): Promise<void> {
        return $api.post('/auth/logout')
    }
}


