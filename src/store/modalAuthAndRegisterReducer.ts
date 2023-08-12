import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "../services/AuthService";
import { useSelector } from "react-redux";
import { RootState } from "store";

interface IinitialState {
    isRegister: boolean;
    errorRegister: boolean;
    valueUserNameAuth: string | undefined;
    valuePasswordAuth: string | undefined;
    valueUserNameRegister: string | undefined;
    valuePasswordRegister: string | undefined;
    isVisibleAuth: boolean;
    isLoadingTheAuthButton: boolean;
    isVisibleRegister: boolean;
    isLoadingTheRegisterButton: boolean;
}

const initialState: IinitialState = {
    isRegister: true,
    errorRegister: false,
    valueUserNameAuth: "",
    valuePasswordAuth: "",
    valueUserNameRegister: "",
    valuePasswordRegister: "",
    isVisibleAuth: false,
    isLoadingTheAuthButton: false,
    isVisibleRegister: false,
    isLoadingTheRegisterButton: false,
};

export const modalAuthAndRegisterReducer = createSlice({
    name: "modalAuthAndRegisterReducer",
    initialState,
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
        switchRegistrationToAuth(state) {
            state.isVisibleAuth = false;
            state.isVisibleRegister = true;
            state.isLoadingTheAuthButton = false;
        },
        openModalRegister(state) {
            state.isVisibleRegister = true;
        },
        closeModalRegister(state) {
            state.isVisibleRegister = false;
            state.isLoadingTheRegisterButton = false;
        },
        switchAuthToRegistration(state) {
            state.isVisibleAuth = true;
            state.isVisibleRegister = false;
            state.isLoadingTheRegisterButton = false;
        },
        changePasswordAuth(state, action) {
            state.valuePasswordAuth = action.payload;
        },
        changeUserNameAuth(state, action) {
            state.valueUserNameAuth = action.payload;
        },
        changeUserNameRegister(state, action) {
            state.valueUserNameRegister = action.payload;
        },
        changePasswordRegister(state, action) {
            state.valuePasswordRegister = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoadingTheRegisterButton = true;
                state.errorRegister = false;
                state.isRegister = false;
            })
            .addCase(register.fulfilled, (state) => {
                state.isVisibleRegister = false;
                state.isLoadingTheRegisterButton = false;
                state.isRegister = true;
                state.errorRegister = false;
            })
            .addCase(register.rejected, (state) => {
                state.isLoadingTheRegisterButton = false;
                state.isRegister = false;
                state.errorRegister = true;
            })
            .addCase(auth.pending, (state) => {
                state.isLoadingTheAuthButton = true;
            })
            .addCase(auth.fulfilled, (state) => {
                state.isLoadingTheAuthButton = false;
            });
    },
});

interface IRegister {
    valueUserNameRegister: string;
    valuePasswordRegister: string;
}


export const register = createAsyncThunk(
    "register/register",
    async (valueRegister: IRegister) => {
        console.log("valueRegister: ", valueRegister);

        const { valueUserNameRegister, valuePasswordRegister } = valueRegister;
        try {
            const response = await AuthService.registration(
                valueUserNameRegister,
                valuePasswordRegister
            );

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log("ошибка регистрации: ", e);
            throw e;
        }
    }
);

interface IAuth {
    valueUserNameAuth: string;
    valuePasswordAuth: string;
}

export const auth = createAsyncThunk(
    "auth/auth",
    async (valueAuth: IAuth) => {
        console.log(valueAuth);

        const { valueUserNameAuth, valuePasswordAuth } = valueAuth;
        try {
            const response = await AuthService.login(
                valueUserNameAuth,
                valuePasswordAuth
            );

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
);

export const { actions: AuthActions } = modalAuthAndRegisterReducer;
export const { reducer: AuthReducer } = modalAuthAndRegisterReducer;
