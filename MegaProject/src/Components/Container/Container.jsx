import React  from "react";


function Container({children}){ // here children ek properties.
   return (
    
    <div  className="w-full max-w-7xl mx-auto ">  {children } </div>

   )

}

export default Container;