import { RootState } from "./index";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "../services/AuthService";
import { validateRegisterData } from "features/RegisterForm/model/services/validateRegisterData";
import axios from "axios";
import { AuthResponse } from "models/response/AuthResponse";
import $api, { API_URL } from "shared/config/http";
import { useSelector } from "react-redux";

interface IvalueRegister {
    valueUserNameRegister: string;
    valuePasswordRegister: string;
}
const valueRegister = {
    valueUserNameRegister: "",
    valuePasswordRegister: "",
};
interface IinitialState {
    isRegister: boolean;
    errorRegister: boolean;
    valueUserNameAuth: string | null;
    valuePasswordAuth: string | undefined;
    valueConfirmPasswordRegister: string | undefined;
    valueUserNameRegister: string | undefined;
    valuePasswordRegister: string | undefined;
    isVisibleAuth: boolean;
    isLoadingTheAuthButton: boolean;
    isVisibleRegister: boolean;
    isLoadingTheRegisterButton: boolean;
    statusInputLoginAndPassword: "error" | "warning" | undefined;
    valueRegister: IvalueRegister;
    isVisibleUserAccount: boolean;
    isVisibleCurrentFilm: boolean;
    isRememberMe: boolean;
}

const initialState: IinitialState = {
    isRegister: false,
    errorRegister: false,
    valueUserNameAuth: "",
    valuePasswordAuth: "",
    valueConfirmPasswordRegister: "",
    valueUserNameRegister: "",
    valuePasswordRegister: "",
    isVisibleAuth: false,
    isLoadingTheAuthButton: false,
    isVisibleRegister: false,
    isLoadingTheRegisterButton: false,
    statusInputLoginAndPassword: undefined,
    valueRegister: valueRegister,
    isVisibleUserAccount: false,
    isVisibleCurrentFilm: false,
    isRememberMe: true,
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
        changeStatusInputLoginAndPassword(state, action) {
            state.statusInputLoginAndPassword = action.payload;
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
        changeConfirmPasswordRegister(state, action) {
            state.valueConfirmPasswordRegister = action.payload;
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
                state.isVisibleRegister = true;
            })
            .addCase(auth.pending, (state) => {
                state.isLoadingTheAuthButton = true;
            })
            .addCase(auth.fulfilled, (state) => {
                state.isLoadingTheAuthButton = false;
                state.isRegister = true;
                state.isVisibleAuth = false;
            })
            .addCase(checkAuth.fulfilled, (state) => {
                state.isLoadingTheAuthButton = false;
                state.isRegister = true;
                state.isVisibleAuth = false;
            })
            .addCase(checkAuth.rejected, (state) => {
                state.isLoadingTheRegisterButton = false;
                state.isRegister = false;
                state.errorRegister = true;
            })
            .addCase(checkAuth.pending, (state) => {
                state.isLoadingTheAuthButton = true;
            })
            .addCase(logout.fulfilled, (state) => {
                state.isRegister = false;
            });
    },
});
interface IRegister {
    valueUserNameRegister: string;
    valuePasswordRegister: string;
    isRememberMe: boolean;
}
export const register = createAsyncThunk(
    "register/register",
    async (valueRegister: IRegister, thunkApi) => {
        const { rejectWithValue } = thunkApi;
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
            if (!response.data) {
                throw new Error();
            }
            if (isRememberMe) {
                localStorage.setItem("token", response.data.token);
            }
            localStorage.setItem("username", valueUserNameRegister);
            return response.data;
        } catch (e) {
            rejectWithValue(`ошибка регистрации:${e} `);
        }
    }
);

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
export const checkAuth = createAsyncThunk(
    "checkAuth/checkAuth",
    async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true});
            console.log("responseCheckAuth: ", response);
            localStorage.setItem("token", response.data.token);
            if (!response.data) {
                throw new Error();
            }
            return response.data;
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
export const { actions: AuthActions } = modalAuthAndRegisterReducer;
export const { reducer: AuthReducer } = modalAuthAndRegisterReducer;
