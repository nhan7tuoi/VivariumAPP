import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        accessToken: '',
        user: {},
    },
    reducers: {
        setAuth: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
        },
        removeAuth: (state) => {
            state.accessToken = '';
            state.user = {};
        },
    },
});

export const {setAuth, removeAuth} = authSlice.actions;
export default authSlice.reducer;