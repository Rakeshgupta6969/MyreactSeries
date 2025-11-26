import React from "react";
import appWriteService from "../AppWrite/Config";
import   {Link}  from "react-router-dom";
function PostCard({$id,tittle,featuredImage}){ // here $id id written as id.

  return(
   
     <Link  to = {`/post/${$id}`}>
       <div className="w-full bg-gray-100 rounded-xl p-4">

       <div className="w-full justify-center mb-4">

       <img src={appWriteService.getFilePreview(featuredImage)} alt={tittle} 
       
       className="rounded-xl"


       />

       </div>

       <h2
      
    className="text-xl font-bold"
       
       
       >{tittle}</h2>




       </div>
     </Link>


    
  )


}

export default PostCard;