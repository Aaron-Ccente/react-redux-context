import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/users/userSlice';
import articleReducer from '../features/articles/articleSlice';
import categoryReducer from '../features/categories/CategorySlice';
import sellReducer from '../features/sells/sellSlice';
import registerReducer from '../features/registers/registerSlice'

export const store = configureStore({
    reducer:{
        'user': userReducer,
        'articles': articleReducer,
        'category': categoryReducer,
        'sell': sellReducer,
        'register': registerReducer
    }
})