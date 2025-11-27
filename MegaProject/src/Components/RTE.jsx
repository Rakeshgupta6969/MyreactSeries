import React from "react";
import {Editor} from '@tinymce/tinymce-react';
import { Controller } from "react-hook-form";



export default function RTE({  // here the work of the Control to control properties of the function and pass to the other function where it is import.
    name,control,label,defaultValue = ""
}){

  return (
    
    <div className="w-full ">

    {label && <label  className="inline-block mb-1 pl-1"  >{label}</label>}

       
  <Controller
  
   name = {name || "content"}
   control={control}

   render = {({field:{onChange}}) =>(
    

    <Editor
    
    initialValue="defaultValue"
    init={{

     initialValue: defaultValue,
     height:500,
     menubar:true,

     plugins:[
         "advlist",
        "autolink",
        "lists",
        "link",
        "image",
        "charmap",
        "preview",
        "anchor",
        "searchreplace",
        "visualblocks",
        "code",
        "fullscreen",
        "insertdatetime",
        "media",
        "table",
        "help",
        "wordcount"
       
  


     ],
     
     toolbar:
      "undo redo | blocks | bold italic | alignleft aligncenter " +
      "alignright alignjustify | bullist numlist outdent indent | " +
      "link image media | code preview fullscreen",


      content_style :"body{font-family:helvetica,Arial,sans-serif;font-size:14px}"


    }}
    
    onEditorChange={onChange}
    
    />




   )}
  
  
  
  />


    </div>
  )
    



}