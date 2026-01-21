import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        addCategory: (state, action)=>{
            state.value.push(action.payload)
        }
    }
})

export const {addCategory} = categorySlice.actions;

export default categorySlice.reducer;