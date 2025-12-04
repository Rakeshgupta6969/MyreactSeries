import React, {useState,useEffect} from "react";
import AppWriteService from "../AppWrite/Config";
import { Container,PostCard } from "../Components/Index";

function AllPosts(){

     

     const [posts,setPosts] = useState([]);

     useEffect(() => {




     },[])

       
     AppWriteService.getPosts([]).then((posts) => {

       
        if(posts){
            setPosts(posts.documents)
        }


     });


     
    return(

    
       


          <div  className="w-full py-8">

            <Container>

               <div className="flex flex-wrap">
               
               {
                posts.map((posts) = (

                    <div key = {posts.$id}  className="p-2 w-1/4">  
                     
                     <PostCard   posts = {posts}/>

                    </div>


                ))
               }


               </div>


            </Container>


          </div>


    )
    
}


export default AllPosts;