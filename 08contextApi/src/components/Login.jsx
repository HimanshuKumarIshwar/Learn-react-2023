import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
   const[username, setUsername] = useState("");
   const[password, setPassword] = useState("");

   const {setUser} = useContext(UserContext)

       const  handleSubmit = (e)=> {
        e.preventDefault();
        console.log(username, password);
        setUser({username, password})
        
       }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
      <input type="text" placeholder='enter username' value={username} onChange={(e)=>setUsername(e.target.value) } />
      <br />
       <input type="password" placeholder='enter password' value={password} onChange={(e)=> setPassword(e.target.value)} />
       <br />
       <button>Submit</button>
       </form>
    </div>
  )
}

export default Login