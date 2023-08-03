import {
    createAction,
    createAsyncThunk,
    createReducer,
    createSlice,
} from "@reduxjs/toolkit";
import AuthService from "../services/AuthService";
// import { AuthResponse } from "../models/response/AuthResponse";

interface IinitialState {
    valueUserNameAuth: string | undefined;
    valuePasswordAuth: string | undefined;
    valueUserNameRegister: string | undefined;
    valuePasswordRegister: string | undefined;
    isVisibleAuth: boolean;
    isLoadingTheAuthButton: boolean;
    isVisibleRegister: boolean;
    isLoadingTheRegisterButton: boolean;
}

// export const openModalAuth = createAction("modal/openModalAuth");
// export const okAuth = createAction("modal/okAuth");
// export const closeModalAuth = createAction("modal/closeModalAuth");
// export const switchRegistrationToAuth = createAction(
//     "modal/switchRegistrationToAuth"
// );

// export const openModalRegister = createAction("modal/openModalRegister");
// export const okRegister = createAction("modal/okRegister");
// export const closeModalRegister = createAction("modal/closeModalRegister");
// export const switchAuthToRegistration = createAction(
//     "modal/switchAuthToRegistration"
// );

// export const changeUserNameAuth = createAction<any>("modal/changeUserNameAuth");
// export const changePasswordAuth = createAction<any>("modal/changePasswordAuth");

// export const changeUserNameRegister = createAction<any>(
//     "modal/changeUserNameRegister"
// );
// export const changePasswordRegister = createAction<any>(
//     "modal/changePasswordRegister"
// );

const initialState: IinitialState = {
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
            })
            .addCase(register.fulfilled, (state) => {
                state.isLoadingTheRegisterButton = false;
            });
    },
});

export const register = createAsyncThunk(
    "register/register",
    async (data, thunkAPI) => {
        try {
            const response = await AuthService.registration("login1", "password2", 'username3');

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
