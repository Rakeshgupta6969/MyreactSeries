import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [length,setLength] = useState(8);
   const [number,setNumber] = useState(false);
   const [character,setCharacter] = useState(false);
   const [password,setPassword]  = useState("")

   // useRef hook: for taking the reference.

   const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(number) str += "0123456789";
    if(character) str +=  "!@#$%^&*()[]_+~{}`";

    for(let i = 1; i<=length; i++){
      let char  = Math.floor(Math.random()*str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
      

  }, [length,number,character,setPassword] )


  const copyPasswordToClipboard = useCallback(() =>{
    passwordRef.current?.select()
     // for selecting the range of the password.
     passwordRef.current?.setSelectionRange(0,100);


     window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,number,character,passwordGenerator])


  
  return (
    <>
       <div className='w-full max-w-md mx-auto   shadow-md rounded-lg px-4 my-8
        text-orange-500  bg-gray-500'> 
        <h1 className='text-white text-center'>password generator </h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input type="text" 
           value = {password}
           className='outline-none w-full py-3 px-3  bg-white'
           placeholder = 'password'
           readOnly
           ref = {passwordRef}
          />
        <button 
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-.5 shrink-0 hover:bg-blue-400'>copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div  className='flex items-center gap-x-1 my-2'>
            <input type="range"
            min = {6}
            max = {100}
            value = {length}
            className='cursor-pointer'
            onChange={(e) =>  {setLength(e.target.value)}}
             />
             <label>length:{length}</label>
          </div>


          <div className='flex items-center gap-x-1' >
           <input 
           type="checkbox"
           defaultChecked  = {number}
           id = "numberInput"

           onChange={()=>{
            setNumber((prev)=> !prev);
           }}
             
           />
            
            <label htmlFor="numberInput">Number</label>
          </div>



            <div className='flex items-center gap-x-1' >
           <input 
           type="checkbox"
           defaultChecked  = {character}
           id = "characterInput"

           onChange={()=>{
            setCharacter((prev)=> !prev);
           }}
             
           />
            
            <label htmlFor="characterInput">character</label>
          </div>


        </div>
        </div>
    </>
  )
}

export default App
