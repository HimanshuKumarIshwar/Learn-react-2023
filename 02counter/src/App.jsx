import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] =useState(0);
  const addvalue= ()=> {
    if(counter>=20){
      setCounter(counter);
    }else{
      counter =counter+1;
      setCounter(counter);
    }
   

  }

  const removeValue=()=> {
     if(counter<=0){
      setCounter(counter);
     }else{
      setCounter(counter-1);
     }

    
  }

  

  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter value: {counter}</h2>
     <button onClick={addvalue}>AddValue {counter}</button>
     <br />
     <button onClick={removeValue}>RemoveValue {counter}</button>
     <p>Footer: {counter}</p>
     </>    
  )
}

export default App
