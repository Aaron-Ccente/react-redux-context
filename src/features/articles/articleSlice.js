import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    value: {}
}

const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        addArticle: (state, action)=>{
            state.value = action.payload
        }
    }
})
export const {addArticle} = articleSlice.actions;
export default articleSlice.reducer