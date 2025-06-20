import { createSlice } from "@reduxjs/toolkit";
import {register, logIn, logOut, refreshUser} from './authOperations';

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const iniitialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    // isLoading: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder 
        // .addCase(register.pending, handlePending )
        .addCase(register.fulfilled, (state, action) => {
            state.isLoading = true
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        // .addCase(register.rejected, handleRejected)
        .addCase(logIn.fulfilled, state => {
            state.user = action.payload.user;
            state.token =action.payload.token;
            state.isLoggedIn = true
        })
    }
})