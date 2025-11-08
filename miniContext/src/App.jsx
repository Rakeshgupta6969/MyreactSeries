import { useState } from 'react'

import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
 

  return (
      <UserContextProvider>
        <h1>
          this is Rakesh gupta
        </h1>
        <Login/>
        <Profile/>
      </UserContextProvider>
  )
}

export default App
