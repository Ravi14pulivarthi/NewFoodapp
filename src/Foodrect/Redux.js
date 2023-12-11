import React from 'react'
 import { connect } from 'react-redux'
 import Navbar from './Navbar'
function Redux(props) {
  return (

    <div>
          <Navbar/> 
    
      {props.arr.map((value)=>{
              return(
                 <div style={{ display:"flex",paddingLeft:"150px"}}>
                   <div> <img  style={{width: "25rem",height:"20rem",borderRadius:"4px", margin:"50px"}} src={value.img}></img></div>
                 
                <div style={{paddingTop:"100px"}}>
                  <h2>{value.itemName}</h2>
                <p><h4> <i class="fa-solid fa-star"></i> 4.5</h4></p> 
                <h4> <i class="fa-solid fa-indian-rupee-sign"></i>{value.price}</h4>
                
                </div> 


                     

    </div>)
      })}
                       
    </div>
  )
}
const cart2=(state)=>({
arr:state.arr
})

export default connect(cart2)(Redux)