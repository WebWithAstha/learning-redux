import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    input:"Change me"
}

export const inputSlice = createSlice({
    name: "input",
    initialState,
    reducers:{
        inputChange:(state,action)=>{
            state.input=action.payload;
        }
    }
})

export default inputSlice.reducer

export const {inputChange} = inputSlice.actions;