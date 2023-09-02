import { RootState } from "./index";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "../services/AuthService";
import { validateRegisterData } from "features/RegisterForm/model/services/validateRegisterData";
import axios from "axios";
import { AuthResponse } from "models/response/AuthResponse";
import $api, { API_URL } from "shared/config/http";
import { GeneralAuthAndRegisterActions, generalInitialState } from "./generalAuthAndRegister";


interface IinitialState{
    valueUserNameAuth: string | null;
    valuePasswordAuth: string | undefined;
    isVisibleAuth: boolean;
    isLoadingTheAuthButton: boolean;
    isDisabledButtonToAuth: boolean;
}

const modalAuthInitialState: IinitialState  = {
    valueUserNameAuth: "",
    valuePasswordAuth: "",
    isVisibleAuth: generalInitialState.isVisibleAuth,
    isLoadingTheAuthButton: generalInitialState.isLoadingTheAuthButton,
    isDisabledButtonToAuth: true,
};


export const modalAuthReducer = createSlice({
    name: "modalAuthReducer",
    initialState: modalAuthInitialState,
    reducers: {
        openModalAuth(state) {
            state.isVisibleAuth = true;
        },
        okAuth(state) {
            state.isLoadingTheAuthButton = true;
        },
        closeModalAuth(state) {
            state.isVisibleAuth = false;
            state.isLoadingTheAuthButton = false;
        },
        changePasswordAuth(state, action: PayloadAction<string>) {
            state.valuePasswordAuth = action.payload;
        },
        changeUserNameAuth(state, action: PayloadAction<string>) {
            state.valueUserNameAuth = action.payload;
        },
        toggleDisabledButtonToAuth(state, action: PayloadAction<boolean>) {
            state.isDisabledButtonToAuth = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(auth.pending, (state) => {
                state.isLoadingTheAuthButton = true;
            })
            .addCase(auth.fulfilled, (state) => {
                state.isLoadingTheAuthButton = false;
                // state.isRegister = true;
                state.isVisibleAuth = false;
                console.log("auth.fulfilled");
            })
            .addCase(auth.rejected, (state) => {
                state.isLoadingTheAuthButton = false;
                // state.isRegister = false;
                state.isVisibleAuth = true;
                console.log("ошибка auth.rejected");
            })
    },
});

interface IAuth {
    valueUserNameAuth: string;
    valuePasswordAuth: string;
    isRememberMe: boolean;
}

export const auth = createAsyncThunk("auth/auth", async (valueAuth: IAuth, thunkApi) => {
    console.log("valueAuth: ", valueAuth);
    const { valueUserNameAuth, valuePasswordAuth, isRememberMe } = valueAuth;
    const { rejectWithValue, dispatch } = thunkApi;

    try {
        const response = await AuthService.login(
            valueUserNameAuth,
            valuePasswordAuth
        );
        dispatch(GeneralAuthAndRegisterActions.setAccess(true))
        if (!response.data) {
            throw new Error();
        }
        if (isRememberMe) {
            localStorage.setItem("token", response.data.token);
        }

        return response.data;
    } catch (e) {
        console.log("ошибка авторизации", e);
        dispatch(GeneralAuthAndRegisterActions.setAccess(false))
        rejectWithValue(`ошибка регистрации:${e} `);
        throw e;
    }
});

export const { actions: AuthActions } = modalAuthReducer;
export const { reducer: AuthReducer } = modalAuthReducer;
