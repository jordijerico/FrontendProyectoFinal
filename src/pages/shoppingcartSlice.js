
import { createSlice } from '@reduxjs/toolkit';

export const shoppingcartSlice = createSlice({
    name: 'shoppingcart',
    initialState: {
        ProductCart: []
    },
    reducers: {
        addProductCart: (state, action) => {
            return {
                ...state,
                ProductCart: [...state.ProductCart, action.payload]
            }
        }

    }

});

//exporto las ACCIONES.....
export const { addProductCart } = shoppingcartSlice.actions;

export const productCartData = (state) => state.shoppingcart;

export default shoppingcartSlice.reducer;