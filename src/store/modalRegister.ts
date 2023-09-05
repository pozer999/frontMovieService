import { RootState } from "./index";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "../services/AuthService";
import { validateRegisterData } from "features/RegisterForm/model/services/validateRegisterData";
import axios from "axios";
import { AuthResponse } from "models/response/AuthResponse";
import $api, { API_URL } from "shared/config/http";
import { useSelector } from "react-redux";
import {
    GeneralAuthAndRegisterActions,
    generalAuthAndRegisterReducer,
    generalInitialState,
} from "./generalAuthAndRegister";
import { rolesUsers } from "shared/const/rolesUsers";

export interface IvalueRegister {
    valueUserNameRegister: string;
    valuePasswordRegister: string;
}
export const valueRegister = {
    valueUserNameRegister: "",
    valuePasswordRegister: "",
};
export interface IinitialState {
    errorRegister: boolean;
    valueConfirmPasswordRegister: string | undefined;
    valueUserNameRegister: string | undefined;
    valuePasswordRegister: string | undefined;
    // isVisibleRegister: boolean;
    isLoadingTheRegisterButton: boolean;
    statusInputLoginAndPassword: "error" | "warning" | undefined;
    valueRegister: IvalueRegister;
    isDisabledButtonToRegister: boolean;
}

export const initialState: IinitialState = {
    errorRegister: generalInitialState.errorRegister,
    valueConfirmPasswordRegister: "",
    valueUserNameRegister: "",
    valuePasswordRegister: "",
    // isVisibleRegister: generalInitialState.isVisibleRegister,
    isLoadingTheRegisterButton: generalInitialState.isLoadingTheRegisterButton,
    statusInputLoginAndPassword: undefined,
    valueRegister: valueRegister,
    isDisabledButtonToRegister: true,
};

export const modalRegisterReducer = createSlice({
    name: "modalAuthAndRegisterReducer",
    initialState,
    reducers: {
        // openModalRegister(state) {
        //     state.isVisibleRegister = true;
        // },
        // closeModalRegister(state) {
        //     state.isVisibleRegister = false;
        //     state.isLoadingTheRegisterButton = false;
        // },

        changeUserNameRegister(state, action: PayloadAction<string>) {
            state.valueUserNameRegister = action.payload;
        },
        changePasswordRegister(state, action: PayloadAction<string>) {
            state.valuePasswordRegister = action.payload;
        },
        changeStatusInputLoginAndPassword(
            state,
            action: PayloadAction<"error" | "warning" | undefined>
        ) {
            state.statusInputLoginAndPassword = action.payload;
        },

        toggleDisabledButtonToRegister(state, action: PayloadAction<boolean>) {
            state.isDisabledButtonToRegister = action.payload;
        },
        changeConfirmPasswordRegister(state, action) {
            state.valueConfirmPasswordRegister = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoadingTheRegisterButton = true;
                state.errorRegister = false;
            })
            .addCase(register.fulfilled, (state) => {
                // state.isVisibleRegister = false;
                state.isLoadingTheRegisterButton = false;
                state.errorRegister = false;
            })
            .addCase(register.rejected, (state) => {
                state.isLoadingTheRegisterButton = false;
                state.errorRegister = true;
                // state.isVisibleRegister = true;
            });
    },
});
export interface IRegister {
    valueUserNameRegister: string;
    valuePasswordRegister: string;
    isRememberMe: boolean;
}
export const register = createAsyncThunk(
    "register/register",
    async (valueRegister: IRegister, thunkApi) => {
        const { rejectWithValue, dispatch } = thunkApi;
        const { valueUserNameRegister, valuePasswordRegister, isRememberMe } =
            valueRegister;
        const errors = validateRegisterData(valueRegister);
        if (errors.length) {
            return rejectWithValue(errors);
        }
        try {
            const response = await AuthService.registration(
                valueUserNameRegister,
                valuePasswordRegister
            );
            dispatch(GeneralAuthAndRegisterActions.setAccess(true));
            dispatch(GeneralAuthAndRegisterActions.closeModalRegister());
            localStorage.setItem("roles", response.data.roles[0].name);
            localStorage.setItem("username", response.data.username);
            if (response.data.roles[0].name === rolesUsers.user) {
                console.log("АВТОРИЗОВАН КАК ОБЫЧНЫЙ ПОЛЬЗОВАТЕЛЬ");
            }
            if (response.data.roles[0].name === rolesUsers.admin) {
                console.log("АВТОРИЗОВАН КАК АДМИН");
            }
            if (!response.data) {
                throw new Error();
            }
            if (isRememberMe) {
                localStorage.setItem("token", response.data.accessToken);
            }
            localStorage.setItem("username", valueUserNameRegister);
            return response.data;
        } catch (e) {
            dispatch(GeneralAuthAndRegisterActions.setAccess(false));
            dispatch(GeneralAuthAndRegisterActions.openModalRegister(true));
            rejectWithValue(`ошибка регистрации:${e} `);
        }
    }
);

export const { actions: RegisterActions } = modalRegisterReducer;
export const { reducer: RegisterReducer } = modalRegisterReducer;
