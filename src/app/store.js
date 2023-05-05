import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../pages/userSlice';
import productSlice from '../pages/detailSlice';
import shoppingcartSlice from '../pages/shoppingcartSlice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import bringUpdateDataSlice from '../pages/bringUpdateDataSlice';


const reducers = combineReducers({
    user: userSlice,
    product: productSlice,
    shoppingcart: shoppingcartSlice,
    bringData: bringUpdateDataSlice

})
const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers);



export default configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});