import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
       


  let myObj = {

      userName: "RakeshGupta",
      age:21

  }

  let Array = [1,2,3]




  return (
    <>
     <h1 className="text-4xl mb-4 font-bold text-blue-500">Tailwind is working!</h1>
      
       <Card userName = "react series"   btnText = "clicK me"/>
       <Card  btnText = "visit me"/>
           
    </>
  )
}

export default App
