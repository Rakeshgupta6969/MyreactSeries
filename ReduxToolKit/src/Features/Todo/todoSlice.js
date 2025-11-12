import { createSlice,nanoid } from "@reduxjs/toolkit";


const initialState = {
     
    todos:[
    
        {
           id:1,
           text:"hello world",
           
        },

    ]


}


export const todoSlice  = createSlice({
      name:'todo',
      initialState,

      
      reducers:{
     
        addTodo: (state ,action) => {
            
            const todo = {
                 id:nanoid(),
           text:action.payload,
   
            }
         
         state.todos.push(todo)

        }, // here use of the state is that the access of  initial components of tje initialState.


        removeTodo :(state,action) =>{
        

            state.todos  = state.todos.filter((todo)  => todo.id !== action.payload)


        }, // and active give the feature to perform other method like removeTodo

      }


})

export const {addTodo,removeTodo} = todoSlice.actions


export default todoSlice.reducer