import Conf from "../Config/Conf";
import { Client, ID, Databases, Storage, Query } from 'appwrite';


  export class DatabaseService{

      client = new Client();
      databases; // this is for storage of the databases.
      Bucket; // this is the for the file update.

   constructor(){
        this.client
        .setEndpoint(Conf. appWriteUrl)
        .setProject(Conf.appWriteProjectId)
        
        this.databases  = new Databases(this.client);
        this.Bucket  = new Storage(this.client);
    }

    async createPost({tittle,slug,content,featuredImage,status,useId}){
       
        try{
          return  await this.databases.createDocument(
            Conf.appWriteDatabaseId,
            Conf.appWriteCollectionId,
            slug,  // here slug is used  as the id (we can also use the unique() for the code generation)
            {
             tittle,
             content,
             featuredImage,
             status,
             useId,   
            }
          )
        }
        catch(error){
           throw error;
        }
     

    }


      async updatePost( slug, {tittle,content,featuredImage,status}){
        try{

        return  await this.databases.updateDocument(
            Conf.appWriteDatabaseId,
            Conf.appWriteCollectionId,
            slug,
            {
               tittle,
               content, 
               featuredImage,
               status,
            }

        )  // updateDocument is a method to through which we can update the dataBases.

        }
        catch(error){
          console.log("Appwrite servise ::  updatePost:: error", error);
        }
      }  // here slug is nothing but it is the used for the information of the ides.


   async deletePost(slug){
       
      try{
        await  this.databases.deleteDocument(
          Conf.appWriteDatabaseId,
           Conf.appWriteCollectionId,
           slug,

        ) // here deleteDocument is the the method to delete the document in UI.
        return true;
      }
      catch(error){
        throw error;
      }


   } 


      // now want to to excess the particular post of the user Interfaces.
      
      async getPost(slug){
          
        try{
        
          await this.databases.getDocument(
             Conf.appWriteDatabaseId,
             Conf.appWriteCollectionId,
             slug



          )
         return true;


        }
        catch(error){
         
           console.log("appWrite service  :: getPost:: error",error);

           return false;
      
        }




      }

   // now we want to excess those posts which status  has active

   async getPosts(queries = [Query.equal("status","active")]){

         try{
           return await this.databases.listDocuments(

            Conf.appWriteDatabaseId,
            Conf.appWriteCollectionId,
            queries,

           )
         } 
         catch(error){
                console.log("appWrite service  :: getPosts:: error",error);

           return false;
         }


   } 

    // file upload services.


    async uploadFile(file){

      try{
       
       return   await this.Bucket.createFile(

        Conf.appWriteBucketId,
        ID.unique(),
         file,
        )

      }


      catch(error){
     throw error;

      }

    }


   // delete files.

   async deleteFile(fileId){
       

    try{
        await this.Bucket.deleteFile(
          Conf.appWriteBucketId,
         fileId
        )

        return true
    }
    catch(error){
        console.log("this is the main error",error);
        return false;
    }


   }
   


    getFilePreview(fileId){
        return this.Bucket.getFilePreview(
          Conf.appWriteBucketId,
          fileId,
        )
    }

  }

    const Service = new DatabaseService();
  export default Service;