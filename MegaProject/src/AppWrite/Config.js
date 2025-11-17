import Conf from "../Config/Conf";
import { Client,  ID,Databases,Storage,Query } from "appwrite";


  export class DatabasesService{

      client = new Client();
      databases;
      Bucket;

   constructor(){
        this.client
        .setEndpoint(Conf. appWriteUrl)
        .setProject(Conf.appWriteProjectId)
        
        this.databases  = new Databases(this.client);
        this.Bucket  = new Storage(this.client);
    }

    async createPost({tittle,slug,content,featuredImage,status,useId}){
       
        try{
          return this.databases.createDocument(
            Conf.appWriteDatabaseId,
            Conf.appWriteCollectionId,
            slug,
            {
             tittle,
             slug,
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

  }

    const Service = new DatabasesService();
  export default Service;