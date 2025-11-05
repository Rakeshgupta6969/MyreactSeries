import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './componets/Home/Home.jsx'
import About from './componets/About/About.jsx'
import Contact from './componets/Contact/Contact.jsx'

import Github from './componets/Github/Github.jsx'
import User from './componets/User/User.jsx'

const router = createBrowserRouter([
   {
    path : '/',
    element:<Layout/>,

   children : [
       {
        path: "",
        element:<Home/>
       },

       {
        path: "about",
        element : <About/>
       },
       {
        path:"Contact",
        element:<Contact/>

       },
       {
        path: "Github",
        element:<Github/>
       },
       {
        path:"user/:userid",
        element:<User/>
       }
   ]


   }

])

//   const router  = createBrowserRouter(

//      createRoutesFromElements(
       
    
// <Route  path = '/' element  = {<Layout/>}>

//   <Route path = '' element  = {<Home/>}/>
//    <Route path = 'about' element  = {<About/>}/>
//     <Route path = 'contact' element  = {<Contact/>}/>


// </Route>
//      )


//   )


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>
  </StrictMode>,
)
