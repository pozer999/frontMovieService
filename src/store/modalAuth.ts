import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { rolesUsers } from "shared/const/rolesUsers";
import AuthService from "../services/AuthService";
import {
    GeneralAuthAndRegisterActions,
    generalInitialState,
} from "./generalAuthAndRegister";

interface IinitialState {
    valueUserNameAuth: string | null;
    valuePasswordAuth: string | undefined;
    authorizationError: boolean;
    // isVisibleAuth: boolean;
    isLoadingTheAuthButton: boolean;
    isDisabledButtonToAuth: boolean;
}

const modalAuthInitialState: IinitialState = {
    valueUserNameAuth: "",
    valuePasswordAuth: "",
    authorizationError: false,
    // isVisibleAuth: generalInitialState.isVisibleAuth,
    isLoadingTheAuthButton: generalInitialState.isLoadingTheAuthButton,
    isDisabledButtonToAuth: true,
};

export const modalAuthReducer = createSlice({
    name: "modalAuthReducer",
    initialState: modalAuthInitialState,
    reducers: {
        okAuth(state) {
            state.isLoadingTheAuthButton = true;
        },
        // closeModalAuth(state) {
        //     state.isVisibleAuth = false;
        //     state.isLoadingTheAuthButton = false;
        // },
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
                state.authorizationError = false;
                // state.isVisibleAuth = false;
                console.log("auth.fulfilled");
            })
            .addCase(auth.rejected, (state) => {
                state.isLoadingTheAuthButton = false;
                state.authorizationError = true;
                // state.isVisibleAuth = true;
                console.log("ошибка auth.rejected");
            });
    },
});

interface IAuth {
    valueUserNameAuth: string;
    valuePasswordAuth: string;
    isRememberMe: boolean;
}

export const auth = createAsyncThunk(
    "auth/auth",
    async (valueAuth: IAuth, thunkApi) => {
        console.log("valueAuth: ", valueAuth);
        const { valueUserNameAuth, valuePasswordAuth, isRememberMe } =
            valueAuth;
        const { rejectWithValue, dispatch } = thunkApi;

        try {
            const response = await AuthService.login(
                valueUserNameAuth,
                valuePasswordAuth
            );
            dispatch(GeneralAuthAndRegisterActions.setAccess(true));
            dispatch(GeneralAuthAndRegisterActions.openModalAuth(false));
            localStorage.setItem("roles", response.data.roles[0].name);
            localStorage.setItem("username", response.data.username);
            if (!response.data) {
                throw new Error();
            }
            if (isRememberMe) {
                localStorage.setItem("token", response.data.accessToken);
            }
            if (response.data.roles[0].name === rolesUsers.user) {
                console.log("АВТОРИЗОВАН КАК ОБЫЧНЫЙ ПОЛЬЗОВАТЕЛЬ");
            }
            if (response.data.roles[0].name === rolesUsers.admin) {
                console.log("АВТОРИЗОВАН КАК АДМИН");
            }

            return response.data;
        } catch (e) {
            console.log("ошибка авторизации", e);
            dispatch(GeneralAuthAndRegisterActions.setAccess(false));
            dispatch(GeneralAuthAndRegisterActions.openModalAuth(true));

            rejectWithValue(`ошибка регистрации:${e} `);
            throw e;
        }
    }
);

export const { actions: AuthActions } = modalAuthReducer;
export const { reducer: AuthReducer } = modalAuthReducer;
