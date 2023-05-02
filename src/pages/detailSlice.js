
import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        credentials: {}
    },
    reducers: {
        addChoosen: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        }

    }

});

//exporto las ACCIONES.....
export const { addChoosen} = productSlice.actions;

export const productData = (state) => state.product;

export default productSlice.reducer;