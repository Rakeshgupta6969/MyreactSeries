import React, { useDebugValue } from "react";
import { useDispatch, useSelector } from "react-redux";

import { removeTodo } from "../Features/Todo/todoSlice";

  function Todos() {
         const todos =    useSelector(state => state.todos);
         const dispatch = useDispatch();

      return(

   


      <>
  {/* Heading */}
  <div className="text-3xl font-semibold text-center text-indigo-400 my-6 rounded-md bg-gray-600 p-2">
      Your Todos
  </div>

  {/* Todo List */}
  <ul className="space-y-3 max-w-md mx-auto">
    {todos.map((todo) => (
      <li
        key={todo.id}
        className="flex justify-between items-center bg-gray-800 text-gray-100 
                   px-4 py-3 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-200"
      >
        {/* Todo text */}
        <span className="text-base">{todo.text}</span>

        {/* Delete button */}
        <button
          onClick={() => dispatch(removeTodo(todo.id))}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold 
                     px-3 py-1 rounded-md transition-colors duration-200"
        >
          X
        </button>
      </li>
    ))}
  </ul>
</>


      )


}


export default Todos;