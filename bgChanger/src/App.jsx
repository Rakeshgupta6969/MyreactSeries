import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className=" h-screen w-full duration-200"
    style = {{backgroundColor:color}}>


     <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'></div>

    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-1xl'>

      <button className='outline-none px-4 rounded-md'
       style = {{backgroundColor:"red"}}
      onClick={() =>   setColor("red")}
      >Red</button>
       
        <button className='outline-none px-4 rounded-md'
       style = {{backgroundColor:"green"}} 
        onClick={() =>   setColor("green")}
      >Green</button>

       <button className='outline-none px-4 rounded-md'
       style = {{backgroundColor:"blue"}}
        onClick={() =>   setColor("blue")}
      >Blue</button>

          <button className='outline-none px-4 rounded-md'
       style = {{backgroundColor:"purple"}}
        onClick={() =>   setColor("purple")}
          >Purple</button>

     <button className='outline-none px-4 rounded-md text-white'
       style = {{backgroundColor:"Black"}}
        onClick={() =>   setColor("Black")}
          >Black</button>

      
    </div>
    </div>
  
    </>
  )
}

export default App
