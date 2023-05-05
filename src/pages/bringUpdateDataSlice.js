
import { createSlice } from '@reduxjs/toolkit';

export const bringUpdateDataSlice = createSlice({
    name: 'bringData',
    initialState: {
        interruptor: {}
    },
    reducers: {
        reload: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        }

    }

});

//exporto las ACCIONES.....
export const { reload } = bringUpdateDataSlice.actions;

export const reloadData = (state) => state.bringData;

export default bringUpdateDataSlice.reducer;