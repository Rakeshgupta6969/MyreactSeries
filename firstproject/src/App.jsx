import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //  let counter  = 15;


    // now the first concept of the hooks.

    let [counter,setCounter] = useState(15);






   const addValue  = () =>{
          //  console.log("value added",counter); 
           
              //  counter = counter+1;
              //  setCounter(counter);


             setCounter(prevCounter => prevCounter+1);
            setCounter(prevCounter => prevCounter+1);
            setCounter(prevCounter => prevCounter+1);

            // here after one click of the add button the value of the counter become 18.
             
            


          // now at every place in UI counter is update. 

           // here the main concept of the hooks is arise 
           // in the UI there is No changes of value of counter

           // and with the help of the react we found the multiple reaction on the single click.

           // hence here  come the concept of the hooks.
   }

   const removeValue = () =>{

          if(counter>=1){
           counter = counter -1;
           setCounter(counter);
          }
         
   }

  return (
    <>
  <h1>you are in the react series</h1>
  <h2>counter check:{counter}</h2>
  <button
  onClick = {addValue}>add value{counter}</button>
  <br/>
   <button
   onClick = {removeValue}>remove  value {counter}</button>
    </>
  )
}

export default App
