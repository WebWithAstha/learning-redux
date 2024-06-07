export {increase,decrease} from '../reducers/counterSlice'
import { asyncIncrease } from '../reducers/counterSlice'

export const asyncIncreaser = (v)=>(dispatch,getState)=>{
    setTimeout(()=>dispatch(asyncIncrease(v)),1000)
}
