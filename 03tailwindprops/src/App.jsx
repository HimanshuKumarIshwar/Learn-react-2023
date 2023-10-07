import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
   const obj ={
    userName: "Himanshu",
    age: 12
  }
  let newArray =[1,2,3]

  return (
    <>
     <h1 className='bg-green-400 p-7 rounded-xl'>Tailwind Test</h1>
     <Card userName="Chai aur code" />
     <Card userName="Himanshu"/>
    </>
  )
}

export default App
