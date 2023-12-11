import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
function Home() {
      const nav=useNavigate()
      function innerclick(sendingdata){
           nav("/innerpage",{state:sendingdata})
      }
      
    const [data,setdata]=useState([])
         useEffect(()=>{
             fetch("https://yummy-food-xup0.onrender.com/api/foodItems").
              then((response)=> response.json()).
              then( (result)=> setdata(result.data))
         },[])
          
  return (

     <div >
              <Navbar/> 
            <div  style={{display:"flex",gap:"15px",flexWrap:"wrap",paddingLeft:"150px"}}> {
                 data.map((values)=>{
                      return(
                         <div >
                             
                  {/* <div><h5>{values.category}</h5></div> */}
                       <div><img onClick={ function (){innerclick(values)}} style={{width: "25rem",height:"20rem",borderRadius:"4px"}} src={values.img}></img></div>
                       <div><h2>{values.itemName}</h2></div> 
                       <p><h4> <i class="fa-solid fa-star"></i> 4.5</h4></p> 
                       <div><h4> <i class="fa-solid fa-indian-rupee-sign"></i>{values.price}</h4></div> 
         
                  
                      </div>)})
            }</div>
            </div>
          )
  
}

export default Home


