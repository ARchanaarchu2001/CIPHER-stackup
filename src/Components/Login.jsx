//Login.jsx
import React, { useState } from 'react';
import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';


import {useNavigate} from 'react-router-dom'


const Login = () => {
  const navigate =useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
   
    signInWithEmailAndPassword(auth,email, password)
    .then((userCredential)=>{
        const user = userCredential.user;
    window.alert("successful")
    console.log("success" ,user);
    navigate("/ContactList")

      // Redirect or perform actions after successful login
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Error logging in:', error);
    console.error('Error Messagre:', errorMessage);
    
    window.alert(errorMessage)
  });

  };

  return (
    <div  style={{ textAlign:'center'}}>
      <h2>LOGIN</h2>
      <form  style={{ display: 'flex' ,flexDirection: 'column' , alignItems:'center'}}onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom:'10px'}}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom:'10px'}}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
  };

export default Login