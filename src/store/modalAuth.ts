import { RootState } from "./index";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "../services/AuthService";
import { validateRegisterData } from "features/RegisterForm/model/services/validateRegisterData";
import axios from "axios";
import { AuthResponse } from "models/response/AuthResponse";
import $api, { API_URL } from "shared/config/http";
import { generalInitialState } from "./generalAuthAndRegister";


interface IinitialState{
    // isRegister: boolean;
    valueUserNameAuth: string | null;
    valuePasswordAuth: string | undefined;
    isVisibleAuth: boolean;
    isLoadingTheAuthButton: boolean;
    isDisabledButtonToAuth: boolean;
}

const modalAuthInitialState: IinitialState  = {
    // isRegister: generalInitialState.isRegister,
    valueUserNameAuth: "",
    valuePasswordAuth: "",
    isVisibleAuth: generalInitialState.isVisibleAuth,
    isLoadingTheAuthButton: generalInitialState.isLoadingTheAuthButton,
    isDisabledButtonToAuth: true,
};


export const modalAuthReducer = createSlice({
    name: "modalAuthReducer",
    initialState: {modalAuthInitialState, generalInitialState},
    reducers: {
        openModalAuth(state) {
            state.modalAuthInitialState.isVisibleAuth = true;
        },
        okAuth(state) {
            state.modalAuthInitialState.isLoadingTheAuthButton = true;
        },
        closeModalAuth(state) {
            state.modalAuthInitialState.isVisibleAuth = false;
            state.modalAuthInitialState.isLoadingTheAuthButton = false;
        },
        changePasswordAuth(state, action: PayloadAction<string>) {
            state.modalAuthInitialState.valuePasswordAuth = action.payload;
        },
        changeUserNameAuth(state, action: PayloadAction<string>) {
            state.modalAuthInitialState.valueUserNameAuth = action.payload;
        },
        toggleDisabledButtonToAuth(state, action: PayloadAction<boolean>) {
            state.modalAuthInitialState.isDisabledButtonToAuth = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(auth.pending, (state) => {
                state.modalAuthInitialState.isLoadingTheAuthButton = true;
            })
            .addCase(auth.fulfilled, (state) => {
                state.modalAuthInitialState.isLoadingTheAuthButton = false;
                state.generalInitialState.isRegister = true;
                state.modalAuthInitialState.isVisibleAuth = false;
                console.log("auth.fulfilled");
            })
            .addCase(auth.rejected, (state) => {
                state.modalAuthInitialState.isLoadingTheAuthButton = false;
                state.generalInitialState.isRegister = false;
                state.modalAuthInitialState.isVisibleAuth = true;
                console.log("ошибка auth.rejected");
            })
    },
});

interface IAuth {
    valueUserNameAuth: string;
    valuePasswordAuth: string;
    isRememberMe: boolean;
}

export const auth = createAsyncThunk("auth/auth", async (valueAuth: IAuth) => {
    console.log("valueAuth: ", valueAuth);
    const { valueUserNameAuth, valuePasswordAuth, isRememberMe } = valueAuth;
    try {
        const response = await AuthService.login(
            valueUserNameAuth,
            valuePasswordAuth
        );
        if (!response.data) {
            throw new Error();
        }
        if (isRememberMe) {
            localStorage.setItem("token", response.data.token);
        }

        return response.data;
    } catch (e) {
        console.log("ошибка авторизации", e);
        throw e;
    }
});

export const { actions: AuthActions } = modalAuthReducer;
export const { reducer: AuthReducer } = modalAuthReducer;
