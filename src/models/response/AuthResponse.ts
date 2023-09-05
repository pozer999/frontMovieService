// import { IUser } from "../IFiltersAndSearch";


interface IRolesUser {
    id: number;
    name: string;
}
export interface AuthResponse {
    // token: string;
    username: string;
    accessToken: string;
    refreshToken: string;
    roles: IRolesUser[];
    // user: IUser;
}
