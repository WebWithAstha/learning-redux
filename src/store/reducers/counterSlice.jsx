import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increase:(state,action)=>{
            state.count=action.payload
        },
        decrease:(state,action)=>{
            state.count=action.payload
        },
        asyncIncrease:(state,action)=>{
            state.count=action.payload
        },
    }
})

export default counterSlice.reducer
export const {increase,decrease,asyncIncrease} = counterSlice.actions