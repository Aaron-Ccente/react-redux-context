import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
}

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        addRegister: (state, action)=>{
            state.value.push(action.payload)
        }

    }
})

export const {addRegister} = registerSlice.actions;

export default registerSlice.reducer