import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    value: {}
}

const sellSlice = createSlice({
    name: 'sell',
    initialState,
    reducers: {
        addArticle: (state, action)=>{
            state.value = action.payload
        }
    }
})

export const {addArticle} = sellSlice.actions;
export default sellSlice.reducer;