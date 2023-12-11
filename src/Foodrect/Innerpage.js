import React,{useState} from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import { connect } from 'react-redux';
import Navbar from './Navbar'
 let clickpagedata;
  let nav;
function Innerpage(props) {
  const location=useLocation()
  clickpagedata=location.state;
  nav=useNavigate();
  //  console.log(clickpagedata)
  return (
   <div>
       <Navbar/> 
   <div style={{display:"flex" ,gap:"100px",paddingLeft:"100px" ,paddingTop:"100px",border:"1px solid ",width:"900px",height:"500px",marginLeft:"200px",marginTop:"50px"}}>
      
      <div  >
  
         <div><img style={{width: "25rem",height:"20rem",borderRadius:"4px"}} src={clickpagedata.img}></img></div></div>
      
      <div><h2>{clickpagedata.itemName}</h2><br/>
      <h6>Delicious food waiting for you, come and enjoy...........!!! <br/>For Home Delivery Call Us Now -+91-8800725745/8800241091 <br/> or visit - 10/25, U-Block, DL</h6><br/>
      <p><h4> <i class="fa-solid fa-star"></i> 4.5</h4></p> <br/>
       <div><h4> <i class="fa-solid fa-indian-rupee-sign"></i>{clickpagedata.price}</h4></div><br/>
      <button onClick={props.add}>Add cart</button> <button>Order now</button>
      </div>


    </div>
    </div>
  )
}
const cart= (dispatch)=>({
  add:()=>{ dispatch({type:"Add",data:clickpagedata});nav("/redux")}
});
const cart2= (state)=>({
arr:state.arr
});
export default connect(cart2,cart)(Innerpage)