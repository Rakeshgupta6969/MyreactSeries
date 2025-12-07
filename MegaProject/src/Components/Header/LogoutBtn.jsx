import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../AppWrite/Auth";
import { logout } from "../../DataStore/AuthSlice";

function LogoutBtn(){
        const dispatch = useDispatch();
        const logoutHandler = () =>{
            authService.logout().then(() =>{
                  dispatch(logout())
            })
        }
   return (

     <button className="bg-blue-400 inline-block px-6 py-2 duration-200 hover:bg-blue-500 rounded-full"
     
      onClick={logoutHandler} 
     
     
     >Logout</button>


   )

}

export default LogoutBtn;