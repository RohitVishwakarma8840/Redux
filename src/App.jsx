import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector } from 'react-redux'

function App() {
 const d = useSelector((state)=>state.counter);
 console.log(d);

  return (
    <>
      
      <div className='m-auto container p-10 mt-5 bg-red-300'>

      <h1 className='text-3xl text-center font-bold text-red-900'>
        Let's Start Redux Toolkit
      </h1>


      </div>





       
    </>
  )
}

export default App
