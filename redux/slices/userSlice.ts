import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
    firstName: string;
    lastName: string;
    entityType: string;
    email: string;
    password: string;
}

const initialState: UserState = {
    firstName: '',
    lastName: '',
    entityType: '',
    email: '',
    password: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<UserState>) => {
            return { ...state, ...action.payload };
        },
        updateUserData: (state, action: PayloadAction<Partial<UserState>>) => {
            return { ...state, ...action.payload };
        },
        clearUserData: (state) => {
            return { ...initialState };
        },
    },
});

export const { setUserData, updateUserData, clearUserData } = userSlice.actions;

export default userSlice.reducer;