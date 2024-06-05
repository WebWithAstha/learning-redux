import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './reducers/counterSlice'
import inputSlice from './reducers/inputSlice'

export const store = configureStore({
    reducer:{
        counterSlice: counterSlice,
        inputSlice
    }
})