import { useState,useEffect } from 'react'

import './App.css'
import { TodoProvider } from './Contexts/TodoContext';
import { TodoForm, TodoItems } from './Components';

function App() {
  
    const [todos,setTodos] = useState([]);

    const addTodo = (todoTitle) =>{ // here is something  to understands.about the todos updation and addition
         setTodos((prev) =>[{id:Date.now(), ...todoTitle},   ...prev])
    }


    const updatedTodo = (id,todoTitle) =>{

     setTodos((prev) =>   prev.map((prevTodo) =>  (prevTodo.id
         === id ? todoTitle:prevTodo)) )  // here we want to update a single todos.  

    }


    const deleteTodo = (id) =>{
       setTodos((prev) => prev.filter((todo) =>todo.id !== id))  //  think about the filter what about its functionalities.
    }


      // this is about the checkmark of the todos appearance.
    const toggleComplete = (id) =>{ 

      setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ?
       {...prevTodo,completed: !prevTodo.completed}:prevTodo))

    }
       // here completed the basic functionalities of the context API.
       // now the concept of the localstorage.



       useEffect(() =>{
         
     const todos =    JSON.parse(localStorage.getItem("todos"));
         
        if(todos && todos.length>0){
          setTodos(todos);
        }

     
       },[])

       useEffect(() =>{
           localStorage.setItem("todos",JSON.stringify(todos))
       },[todos])



  return (
    <TodoProvider value={{todos,addTodo,updatedTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key ={todo.id}
                           className = 'w-full'
                          >
                          <TodoItems   todo = {todo}/>


                          </div>
                        ))}
                    </div>
                </div>
            </div>
     
    </TodoProvider>
  )
}

export default App
