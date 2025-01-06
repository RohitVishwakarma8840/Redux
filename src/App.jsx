import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector } from 'react-redux'
import { increment } from './store/reducers/counterSlice'
import { useDispatch } from 'react-redux'
import { decrement } from './store/reducers/counterSlice'
import { incrementByAmount } from './store/reducers/counterSlice'

function App() {
 const {value} = useSelector((state)=>state.counter);
 const dispatch = useDispatch();
  return (
    <>
      
      <div className='m-auto container p-10 mt-5 bg-red-300'>

      <h1 className='mb-5 text-3xl text-center font-bold text-red-900'>
        Counter : {value}
      </h1>

   <div className='text-center'>

  <button 
  onClick={()=> dispatch(increment())}
  className='text-red-900 border-red-900 border-2 rounded bg-transparent px-5 py-2'>Increment</button>

  <button 
  onClick={()=> dispatch(decrement())}
  className='mx-5 text-red-900 border-red-900 border-2 rounded bg-transparent px-5 py-2'>Decrement</button>


  <button 
   onClick={()=> dispatch(incrementByAmount(5))}
  className='mx-5 text-red-900 border-red-900 border-2 rounded bg-transparent px-5 py-2'>Increment by 5</button>



   </div>









      </div>





       
    </>
  )
}

export default App
