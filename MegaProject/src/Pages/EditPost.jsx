import React,{useState,useEffect} from "react";
import { Container,PostForm } from "../Components/Index";
import AppWriteService from "../AppWrite/Config";
import { Navigate, useNavigate, useParams } from "react-router-dom";


function EditPost(){

     const [post,setPosts] = useState(null);
     const {slug}  = useParams();
     const Navigate = useNavigate();

     useEffect(() => {

         if(slug){
          
            AppWriteService.getPost(slug).then((post) => {
                
                if(post){
                    setPosts(post);
                }


            })
         }
         else{
            Navigate('/');
         }


     },[Navigate,slug])

 
   return post? (

     <div  className="py-8">

      <Container>

        <postForm post = {post}/>


      </Container>


     </div>

   ) : null;


}

export default EditPost;
