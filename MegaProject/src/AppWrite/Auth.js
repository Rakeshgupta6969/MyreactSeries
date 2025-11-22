
import Conf from "../Config/Conf";
import { Client, Account, ID } from "appwrite";


export class AuthService{
    
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(Conf. appWriteUrl)
        .setProject(Conf.appWriteProjectId)

        this.account = new Account(this.client)
    }


    async createAccount({email,password,name}){
        try{
         const userAccount   =     await this.account.createEmailPassword( ID.unique(), email, password, name)

         if(userAccount){
              // call another Method.
           return    this.login({email,password});
         }
         else{
              return userAccount;
         }



        }
        catch(error){
             throw error;
        }
    }

  async login({email,password}){
      
    try{
    return   await this.account.createEmailPasswordSession(email,password);
    }
    catch(error){
       throw error; 
    }



  }


  async getCurrentUser(){

    try{
        return await this.account.get();
    }
    catch(error){
        throw error;
    }

  }


    async logout(){

      try{
          await this.account.deleteSessions();
      }
      catch(error){
        throw error;
      }

    }


}


const authService = new AuthService(); // here authService is the object of the AuthServices class.

export default authService;