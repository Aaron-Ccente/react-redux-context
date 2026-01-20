import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    value: {
        id_article: 0,
        id_user: 0,
        count: 0
    }
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