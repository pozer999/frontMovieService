import { AxiosResponse } from "axios";
import $api from "../shared/config/http";
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthService {
    static async login(username: string | undefined, password: string | undefined): Promise<AxiosResponse<AuthResponse>> {
        console.log("auth: ", username, password);
        return $api.post<AuthResponse>('/auth/login', {username, password})
    }
    static async registration(username: string | undefined, password: string | undefined): Promise<AxiosResponse<AuthResponse>> {
       console.log("reg: ", username, password);
        return $api.post<AuthResponse>('/auth/register', {username, password})
    }
    static async logout(): Promise<void> {
        return $api.post('/auth/logout')
    }
}


