import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

interface IinitialState{
  modalIsAuth: boolean,
  loadingAuth: boolean,
  modalIsRegister: boolean,
  loadingRegister: boolean,
}

export const openModalIsAuth = createAction('modal/openModalIsAuth')
export const handleOkAuth = createAction('modal/handleOkAuth')
export const handleCancelAuth = createAction('modal/handleCancelAuth')
export const handleRegisterAuth = createAction('modal/handleRegisterAuth')

export const openModalIsRegister = createAction('modal/openModalIsRegister')
export const handleOkRegister = createAction('modal/handleOkRegister')
export const handleCancelRegister = createAction('modal/handleCancelRegister')
export const handleAuthRegister = createAction('modal/handleAuthRegister')

const initialState: IinitialState = {
  modalIsAuth: false,
  loadingAuth: false,
  modalIsRegister: false,
  loadingRegister: false,
}

export const OpenModalSlice = createReducer(initialState, (builder) => {
  builder
  .addCase(openModalIsAuth, (state, action) => {
    state.modalIsAuth = true
  })
  .addCase(handleOkAuth, (state, action) => {
    state.loadingAuth = true
  })
  .addCase(handleCancelAuth, (state, action) => {
    state.modalIsAuth = false
    state.loadingAuth = false
  })
  .addCase(handleRegisterAuth, (state, action) => {
    state.modalIsAuth = false
    state.modalIsRegister = true
  })



  .addCase(openModalIsRegister, (state, action) => {
    state.modalIsRegister = true
  })
  .addCase(handleOkRegister, (state, action) => {
    state.loadingRegister = true
  })
  .addCase(handleCancelRegister, (state, action) => {
    state.modalIsRegister = false
    state.loadingRegister = false
  })
  .addCase(handleAuthRegister, (state, action) => {
    state.modalIsAuth = true
    state.modalIsRegister = false
  })
  
  }
)
