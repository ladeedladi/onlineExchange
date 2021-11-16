import React,{useContext,useState} from 'react';
import Firebase from 'firebase';
import { dataContext } from '../../dataContext';
import {ProductContext} from '../../ProductContext'
import Heart from '../../assets/Heart';
import './Post.css';
import {Postcontext} from '../../Postcontext'
import {useHistory} from 'react-router-dom'
function Posts(props) {
  const {setProduct}=useContext(ProductContext)
  const history=useHistory()
const {state,setState}=useContext(Postcontext)
  function fetchId(res){

 console.log(res.userId)
 Firebase.firestore().collection('user').where('id','==',res.userId).get().then(result=>{
 result.forEach(id=>{
 
   setState(id.data())
  
  })
  history.push('/view')
 })
 
  }
const {card}=useContext(dataContext)

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div 
        className="cards">
          {card.map((res)=>{return(<div
           
            className="card"
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img onClick={()=>{
                setProduct(res)
                fetchId(res)
              }} src={res.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {res.price}</p>
              <span className="kilometer">{res.category}</span>
              <p className="name"> {res.name}</p>
            </div>
            <div className="date">
              <span>{res.createAt}</span>
            </div>
          </div>)})}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
