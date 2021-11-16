import React,{useEffect,useContext} from 'react';
import Firebase from 'firebase';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';

import { dataContext } from '../dataContext';
import Posts from '../Components/Posts/Posts';
import Footer from '../Components/Footer/Footer';

function Home(props) {
  
const {setCard}=useContext(dataContext)
  useEffect(() => {
    
   Firebase.firestore().collection('products').get().then(res=>{
  const datas=res.docs.map((product)=>{
    return {...product.data(),id:product.id}
  })
  
  setCard(datas)
  console.log(datas)
   })
  }, [])
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
     <Posts />
      <Footer />
    </div>
  );
}

export default Home;
 
