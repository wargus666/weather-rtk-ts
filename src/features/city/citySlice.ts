import {createSlice} from "@reduxjs/toolkit";

const citySlice = createSlice({
    name: 'city',
    initialState: '',
    reducers: {
        setCity: (_state: string, action) => action.payload,
        clearCity: () => ''
    }
})

export const {setCity, clearCity} = citySlice.actions;
export default citySlice.reducer;