import React,{useState} from 'react';
import { useHistory } from 'react-router';
import Firebase from 'firebase';

import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {

const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const history=useHistory()
function submitLogin(e){
  e.preventDefault()
  Firebase.auth().signInWithEmailAndPassword(email, password)
  .then(() => {
  history.push('/')
    
    
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(`${errorMessage} ${errorCode}`)
  });

}

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            onChange={(e)=>setEmail(e.target.value)}
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
          onChange={(e)=>setPassword(e.target.value)}
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button onClick={submitLogin}>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
