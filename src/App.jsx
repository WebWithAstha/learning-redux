import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase } from './store/reducers/counterSlice'
import { inputChange } from './store/reducers/inputSlice'

function App() {
  const {count} = useSelector(state=>state.counterSlice)
  const {input} = useSelector(state=>state.inputSlice)
  const dispatch = useDispatch()
  const increaseCounter = ()=>{
    dispatch(increase(count+1))
  }
  const changeInput = (e)=>{
    dispatch(inputChange(e.target.value))
  }


  return (
    <>
      
      <h1 className="read-the-docs ml-6 mt-4 mb-2">Count : 
      <span className='font-medium text-red-700'> {count}</span>
      </h1>
      <button onClick={increaseCounter} className='px-4 py-2 ml-4 rounded bg-red-300'>Increase Count by 1</button>
      
      <h1 className="read-the-docs ml-6 mt-4 mb-2">Name : 
      <span className='font-medium text-red-700'> {input}</span>
      </h1>
      <input onChange={changeInput} placeholder='Enter a name' className='px-4 placeholder:text-red-200 py-2 ml-4 rounded border-2 outline-red-400 border-red-300'/>

    </>
  )
}

export default App
