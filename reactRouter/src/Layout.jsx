import React from "react";

import Header from "./componets/Header/Header";
import Footer from "./componets/Footer/Footer";


import { Outlet } from "react-router-dom";


function Layout(){


    return(


           <>

         <Header/>
         <Outlet/>
         <Footer/>
    
    </>




    )
    
 


}