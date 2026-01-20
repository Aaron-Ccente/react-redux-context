import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    value: []
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        newUser: (state, action)=>{
            state.value.push(action.payload)
        }
    }  
})

export const {newUser} = userSlice.actions;
export default userSlice.reducer;