import React,{useCallback,useEffect} from "react";
import { set, useForm } from "react-hook-form";
import {Button,Input,Select,RTE}  from '..Index';
import appWriteService from "../../AppWrite/Config";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

  

function PostForm({post}){
   
    const {register,handleSubmit,watch,setValue,
        control ,getValues} = useForm({

        defaultValues:{
            title:  post?.title || '',
            slug:post?.slug || '',
            content : post?.content || '',
            status:post?.status || 'active',

        },


        });

      const navigate = useNavigate();
      const userData = useSelector(state => state.user.userData)

     const submit  = async (data) => {

          if(post){ // that means post is exits,we have to update.

        const file = data.image[0]? appWriteService.uploadFile(data.image[0]) : null


            if(file){
                appWriteService.deleteFile(post.featuredImage)
            }
        
            const dbPost = await appWriteService.updatePost(post.$id,{
                ...data,
                featuredImage: file ? file.$id:undefined

         } )

          if (dbPost){
                navigate(`/post/${dbPost.$id}`)
            }
     }

     else{

       const file = await appWriteService.uploadFile(data.image[0])


       if(file){

      const fileId  = file.$id
      data.featuredImage = fileId;


     const  dbPost =  await appWriteService.createPost({
       ...data,
         userId:  userData.$id,

     })

     if(dbPost){
        navigate(`/post/${dbPost.$id}`)
     }
        
       }


     }


     }


    const slugTransform  = useCallback((value) => {

            if(value  && typeof value === "string"){
                return value
                .trim()
                .toLocaleLowerCase()
                .replace(/^[a-z A-Z \d\s]+/g,'-')
                .replace(/\s/g,'-')
            }

            return ''



    },[])  // this is for the id transformation.

   
   useEffect(() => {

      const subscription = watch((value,{name}) =>{

            if(name === 'title'){
                setValue('slug',slugTransform(value.title,
                    {shouldValidate:true}
                ))
            }
      });

      return () =>{
        subscription.unsubscribe()
      }

   },[watch,setValue,slugTransform])


  




  return(

   <div>PostForm</div>


  )



}


export default PostForm
