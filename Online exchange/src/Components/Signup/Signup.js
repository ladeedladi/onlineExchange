import React, { useState } from 'react';
import Firebase from '../../firebase/config'
import Logo from '../../olx-logo.png';
import './Signup.css';
import { useHistory } from 'react-router';

export default function Signup() {
  const history=useHistory()
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [password,setPassword]=useState('')
function submitSignUp(e){
  e.preventDefault()
  Firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((results) => {
     console.log(results)
     results.user.updateProfile({displayName:name}).then(()=>{
      Firebase.firestore().collection('user').add({
        username:name,
        phonenumber:phone,
        id:results.user.uid
        }).then(()=>{
          history.push('/login')
        })
     })

     

    
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    
  });



}

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form>
          <label htmlFor="fname">Username</label>
          <br />
          <input
           onChange={(e)=>setName(e.target.value)}
            className="input"
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
            value={name}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            onChange={(e)=>setEmail(e.target.value)}
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            value={email}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
           onChange={(e)=>setPhone(e.target.value)}
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
            value={phone}
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
            value={password}
          />
          <br />
          <br />
          <button onClick={submitSignUp}>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
