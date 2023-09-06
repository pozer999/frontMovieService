import { RootState } from "./index";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "../services/AuthService";
import { validateRegisterData } from "features/RegisterForm/model/services/validateRegisterData";
import axios from "axios";
import { AuthResponse } from "models/response/AuthResponse";
import $api, { API_URL } from "shared/config/http";
import { useSelector } from "react-redux";
import { rolesUsers } from "shared/const/rolesUsers";

export interface IgeneralInitialState {
    isAccess: boolean;
    errorRegister: boolean;
    isVisibleAuth: boolean;
    isVisibleRegister: boolean;
    isVisibleUserAccount: boolean;
    isVisibleCurrentFilm: boolean;
    isRememberMe: boolean;
    isLoadingTheAuthButton: boolean;
    isLoadingTheRegisterButton: boolean;
}

export const generalInitialState: IgeneralInitialState = {
    isAccess: false,
    errorRegister: false,
    isVisibleAuth: false,
    isVisibleRegister: false,
    isVisibleUserAccount: false,
    isVisibleCurrentFilm: false,
    isRememberMe: true,
    isLoadingTheAuthButton: false,
    isLoadingTheRegisterButton: false,
};

export const generalAuthAndRegisterReducer = createSlice({
    name: "generalAuthAndRegisterReducer",
    initialState: generalInitialState,
    reducers: {
        openModalAuth(state, action) {
            state.isVisibleAuth = action.payload;
        },
        closeModalAuth(state) {
            state.isVisibleAuth = false;
            state.isLoadingTheAuthButton = false;
        },
        openModalRegister(state, action) {
            state.isVisibleRegister = action.payload;
        },
        closeModalRegister(state) {
            state.isVisibleRegister = false;
            state.isLoadingTheRegisterButton = false;
        },
        switchRegistrationToAuth(state) {
            state.isVisibleAuth = false;
            state.isVisibleRegister = true;
            state.isLoadingTheAuthButton = false;
        },

        switchAuthToRegistration(state) {
            state.isVisibleAuth = true;
            state.isVisibleRegister = false;
            state.isLoadingTheRegisterButton = false;
        },
        openUserAccount(state) {
            state.isVisibleUserAccount = true;
        },
        closeUserAccount(state) {
            state.isVisibleUserAccount = false;
        },
        openCurrentFilm(state) {
            state.isVisibleCurrentFilm = true;
        },
        closeCurrentFilm(state) {
            state.isVisibleCurrentFilm = false;
        },
        changeRememberMe(state, action) {
            state.isRememberMe = action.payload;
        },
        setAccess(state, action) {
            state.isAccess = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(checkAuth.fulfilled, (state) => {
                state.isLoadingTheAuthButton = false;
                state.isAccess = true;
                state.isVisibleAuth = false;
            })
            .addCase(checkAuth.rejected, (state) => {
                state.isLoadingTheRegisterButton = false;
                state.isAccess = false;
                state.errorRegister = true;
            })
            .addCase(checkAuth.pending, (state) => {
                state.isLoadingTheAuthButton = true;
            })
            .addCase(logout.fulfilled, (state) => {
                state.isAccess = false;
            });
    },
});

export const checkAuth = createAsyncThunk(
    "checkAuth/checkAuth",
    async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        try {
            // const response = await axios.get<AuthResponse>(
            //     `${API_URL}/refresh`,
            //     { withCredentials: true }
            // );
            // console.log("responseCheckAuth: ", response);
            // localStorage.setItem("roles", response.data.roles[0].name);
            // localStorage.setItem("username", response.data.username);
            // localStorage.setItem("token", response.data.accessToken);
            // if (!response.data) {
            //     throw new Error();
                
            // }
            // if (response.data.roles[0].name === rolesUsers.user) {
            //     console.log("АВТОРИЗОВАН КАК ОБЫЧНЫЙ ПОЛЬЗОВАТЕЛЬ");
            // }
            // if (response.data.roles[0].name === rolesUsers.admin) {
            //     console.log("АВТОРИЗОВАН КАК АДМИН");
            // }
            // return response.data;
        } catch (e) {
            rejectWithValue(`ошибка регистрации:${e} `);
        }
    }
);

export const logout = createAsyncThunk("logout/logout", async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
        console.log("logout: ");
        localStorage.clear();
    } catch (e) {
        rejectWithValue(`ошибка регистрации:${e} `);
    }
});
export const { actions: GeneralAuthAndRegisterActions } =
    generalAuthAndRegisterReducer;
export const { reducer: GeneralAuthAndRegisterReducer } =
    generalAuthAndRegisterReducer;
