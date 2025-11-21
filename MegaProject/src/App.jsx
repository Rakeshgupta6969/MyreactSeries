
import  React, { useState,useEffect } from 'react'
import { useDispatch } from "react-redux";
import './App.css';
import authService from './AppWrite/Auth';
import { login,logout } from './DataStore/AuthSlice';
import {Outlet} from 'react-router-dom';
import  {Header,Footer } from './Components'


function App() {
 
       const [loading,setLoading] = useState(true);

       const dispatch = useDispatch();

      
       useEffect(() =>{
           authService.getCurrentUser()
           .then((userData) => {
               
            if(userData){
                 dispatch(login({userData}))
            }
            else{
              dispatch(logout())
            }



           })
           .finally(() =>setLoading(false))
       },[])

         return !loading ? (
          <div className='min-h-screen flex flex-wrap content-between bg-gray-400'> 
          
             <div className='w-full block '>

          <Header/>

            <main>
          Todo:   {/* <Outlet/> */}
            </main>
          <Footer/>


             </div>
          
           </div>
         ): null
}

export default App
