import { createSlice,nanoid } from "@reduxjs/toolkit";


const initialState = { // initial State of the store
     
    todos:[
    
        {
           id:1,
           text:"Rakesh Gupta that is your first Todos",
           
        },

    ]


}


export const todoSlice  = createSlice({   // Slice is Nothing but it is a big version of the reducer(just like a function.)
      name:'todo',
      initialState,

      
      reducers:{ // it is use for the updation for the Store.
     
        addTodo: (state ,action) => {
            
            const todo = {
                 id:nanoid(),
           text:action.payload, // here payload means what we want to  inter the text for the Todo Creation.
   
            }
         
         state.todos.push(todo)

        }, // here use of the state is that the access of  current  components of the initialState.


        removeTodo :(state,action) =>{
        

            state.todos  = state.todos.filter((todo)  => todo.id !== action.payload)


        }, // and active give the feature to perform other method like removeTodo

      }


})

export const {addTodo,removeTodo} = todoSlice.actions


export default todoSlice.reducer