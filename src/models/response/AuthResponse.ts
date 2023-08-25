import { IUser } from "../IUser";



export interface AuthResponse {
    token: string;
    accessToken: string;
    refreshToken: string;
    user: IUser;
}