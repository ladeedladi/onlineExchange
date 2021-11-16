import React, { Fragment ,useState,useContext} from 'react';
import { AddContext } from '../../context';
import './Create.css';
import Header from '../Header/Header';
import { useHistory } from 'react-router';
import Firebase from '../../firebase/config'
const Create = () => {
  const history=useHistory()
  const {user}=useContext(AddContext)
  const [file,setFile]=useState('')
 const [category,setCategory]=useState('')
 const [price,setPrice]=useState('')
 const [name,setFname]=useState('')

function Upload(e){
  e.preventDefault()
  const date=new Date()

Firebase.storage().ref(`/image/${file.name}`).put(file).then(({ref})=>{
  ref.getDownloadURL().then((url)=>{
Firebase.firestore().collection('products').add({
  name,
  price,
  category,
  url,
  userId:user.uid,
  createAt:date.toDateString()

}).then(()=>{
history.push('/')
})
   
  })
}).catch(err=>{
  console.log(err)
})



}

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
            onChange={(e)=>setFname(e.target.value)}
              className="input"
              type="text"
              id="fname"
              name="Name"
              defaultValue="John"
              value={name}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
            onChange={(e)=>setCategory(e.target.value)}
              className="input"
              type="text"
              id="fname"
              name="category"
              defaultValue="John"
              value={category}
            />

            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input onChange={(e)=>setPrice(e.target.value)} className="input" type="number" id="fname" name="Price" value={price}/>
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src={file ?`${URL.createObjectURL(file)}`:''}></img>
          <form>
            <br />
            <input onChange={(e)=>{
              e.preventDefault()
               setFile(e.target.files[0])
            }}  type="file" />
            <br />
            <button onClick={Upload} className="uploadBtn">upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
