import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_LAST_DESIGN_KEY, USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { User, UserSchema } from '../types/user';
import { setFeatureFlags } from '@/shared/lib/features';
import { saveJsonSettings } from '../services/saveJsonSettings';
import { JsonSettings } from '../types/jsonSettings';
import { initAuthData } from '../services/initAuthData';

const initialState: UserSchema = {
    _inited: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, { payload }: PayloadAction<User>) => {
            state.authData = payload;
            setFeatureFlags(payload.features);
            localStorage.setItem(USER_LOCALSTORAGE_KEY, payload.id);
            localStorage.setItem(
                LOCAL_STORAGE_LAST_DESIGN_KEY,
                payload.features?.isAppRedesigned ? 'new' : 'old',
            );
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
    extraReducers(builder) {
        builder
            .addCase(saveJsonSettings.fulfilled, (state, action: PayloadAction<JsonSettings>) => {
                if (state.authData) {
                    state.authData.jsonSettings = action.payload;
                }
            })

            .addCase(initAuthData.fulfilled, (state, { payload }: PayloadAction<User>) => {
                state.authData = payload;
                setFeatureFlags(payload.features);
                state._inited = true;
            })
            .addCase(initAuthData.rejected, (state) => {
                state._inited = true;
            });
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
