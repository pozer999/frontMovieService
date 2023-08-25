import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "../services/AuthService";
import { validateRegisterData } from "features/RegisterForm/model/services/validateRegisterData";
import axios from "axios";
import { AuthResponse } from "models/response/AuthResponse";
import { API_URL } from "shared/config/http";

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
    valueUserNameAuth: '',
    valuePasswordAuth: "",
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
        changeRememberMe(state) {
            state.isRememberMe = !state.isRememberMe;
        }
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
            });
    },
});
interface IRegister {
    valueUserNameRegister: string;
    valuePasswordRegister: string;
}
export const register = createAsyncThunk(
    "register/register",
    async (valueRegister: IRegister, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        const { valueUserNameRegister, valuePasswordRegister } = valueRegister;
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
            localStorage.setItem('token', response.data.token)
            return response.data;
        } catch (e) {
            rejectWithValue(`ошибка регистрации:${e} `); 
        }
    }
);

interface IAuth {
    valueUserNameAuth: string;
    valuePasswordAuth: string;
}

export const auth = createAsyncThunk("auth/auth", async (valueAuth: IAuth) => {
    console.log(valueAuth);
    const { valueUserNameAuth, valuePasswordAuth } = valueAuth;
    try {
        // // if (isRememberMe) {
        //     localStorage.setItem("valueUserNameAuth", valueUserNameAuth);
        //     localStorage.setItem("valuePasswordAuth", valuePasswordAuth);
        //     // localStorage.setItem("isRememberMe", String(isRememberMe));
        // // }
        
        const response = await AuthService.login(
            valueUserNameAuth,
            valuePasswordAuth
        );
        if (!response.data) {
            throw new Error();
        }
        localStorage.setItem('token', response.data.token)
        return response.data;
    } catch (e) {
        console.log("ошибка авторизации", e);
        throw e;
    }
});
export const checkAuth = createAsyncThunk(
    "checkAuth/checkAuth",
    async ( _,thunkApi) => {
        const { rejectWithValue } = thunkApi;

        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`);
            console.log("responseCheckAuth: ", response);
            
            localStorage.setItem('token', response.data.token)
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            rejectWithValue(`ошибка регистрации:${e} `); 
        }
    }
);

export const { actions: AuthActions } = modalAuthAndRegisterReducer;
export const { reducer: AuthReducer } = modalAuthAndRegisterReducer;