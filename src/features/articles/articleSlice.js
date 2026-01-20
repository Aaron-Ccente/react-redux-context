import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    value: {
        id_article: 0,
        name: '',
        description: '',
        price: 0.0
    }
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