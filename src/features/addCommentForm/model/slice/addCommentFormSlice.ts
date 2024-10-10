import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addCommentFormSchema } from '../types/addCommentForm';

const initialState: addCommentFormSchema = {
    error: undefined,
    text: undefined,
};

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(addCommentForm.pending, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(addCommentForm.fulfilled, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(addCommentForm.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
