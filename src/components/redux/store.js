import {configureStore} from '@reduxjs/toolkit';
import filterReducer from './slices/FilterSlice'
import cartReducer from './slices/CartSlice'
export const store = configureStore({
    reducer:{
       filter:filterReducer,
       cart:cartReducer
    }
})
