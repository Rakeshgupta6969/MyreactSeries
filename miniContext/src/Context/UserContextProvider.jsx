import React,{useState} from "react";
import UserContext from "./UserContext";

 

const UserContextProvider = ({children}) =>{  

    const [user,setUser] = useState(null); 
    

   return (
       
    <UserContext.Provider value = {{user,setUser}}>
    
    {children}

    </UserContext.Provider>


   );

}


export default UserContextProvider;

// now we have to excess these store ,we can access it into main.jsx,app.jsx