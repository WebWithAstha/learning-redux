import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase,decrease,asyncIncreaser } from './store/actions/counterAction'
import { inputChange } from './store/actions/inputAcion'

function App() {
  const {count} = useSelector(state=>state.counterSlice)
  const {input} = useSelector(state=>state.inputSlice)
  const dispatch = useDispatch()
  const changeInput = (e)=>{
    dispatch(inputChange(e.target.value))
    }
      const increaseCounter = ()=>{
        dispatch(increase(count+1))
      }
      const decreaseCounter = ()=>{
        dispatch(decrease(count-1))
      }
      const asyncIncreaseCounter = ()=>{
        dispatch(asyncIncreaser(count+1))
      }


  return (
    <>
      <div className='bg-gray-200 p-4 py-10'>

      <h1 className="read-the-docs ml-6 text-lg mb-2">Name : 
      <span className='font-medium text-xl  text-red-700'> {input}</span>
      </h1>
      <input onChange={changeInput} placeholder='Enter a name' className='px-4  w-56 placeholder:text-red-300 py-2 ml-4 rounded border-2 outline-red-400 border-red-300'/>
      <h1 className="read-the-docs ml-6 text-lg mt-4 mb-2">Count : 
      <span className='font-medium text-xl  text-red-700'> {count}</span>
      </h1>
      <button onClick={increaseCounter} className='px-4 py-2 mb-2 ml-4 rounded bg-red-300 w-56 font-medium'>Increase Count by 1</button>
 
      <button onClick={decreaseCounter} className='px-4 py-2 mb-2 ml-4 rounded bg-red-300 w-56 font-medium'>Decrease Count by 1</button>
   
      <button onClick={asyncIncreaseCounter} className='px-4 py-2 mb-2 ml-4 rounded bg-red-300 w-56 font-medium'>Async Increase by 1</button>
      
      </div>

    </>
  )
}

export default App
