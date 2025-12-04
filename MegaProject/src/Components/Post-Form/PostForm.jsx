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

     else{ // that means the post is not exits so we want to create the new post

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





         // here Transform id(slug) in the other form of the string
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


 return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appWriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );



}


export default PostForm
