import { GeneralAuthAndRegisterReducer } from './generalAuthAndRegister';
import { RegisterReducer } from './modalRegister';
import { configureStore } from "@reduxjs/toolkit";
import { filmsReducer } from "./FilmsSlice";
import { modalFavouritesAndWatchLaterAndSettingsReducer } from "./modalFavouritesAndWatchLaterAndSettingsReducer";
// import { AuthAndRegisterReducer } from "./modalAuthAndRegisterReducer";
import { AuthReducer } from "./modalAuth";

export const store = configureStore({
    reducer: {
        films: filmsReducer,
        // modalAuthAndRegisterReducer: AuthAndRegisterReducer,
        modalFavouritesAndWatchLaterAndSettingsReducer:
            modalFavouritesAndWatchLaterAndSettingsReducer,
        modalAuthReducer: AuthReducer,
        modalRegisterReducer: RegisterReducer,
        generalAuthAndRegisterReducer: GeneralAuthAndRegisterReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
