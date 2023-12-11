import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
function Navbar(props) {
   const [data,setdata]=useState(0)
    useEffect(()=>{
      setdata(props.arr.length)
    })
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={"/"} >Home</Link>
        </li>
       
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Menu
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">veg</a></li>
            <li><a class="dropdown-item" href="#">non-veg</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
   

        <li className="nav-item">
                <Link className="nav-link position-relative" to={"/redux"}>
                  {(data !== 0) && (<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {data}
                 <span class="visually-hidden">unread messages</span>
                   </span>) }
                
                <i class="fa-solid fa-cart-shopping"></i>  Cart
                </Link>
                
              </li>
             
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
const cart2=(state)=>({
  arr:state.arr
  
  })

export default connect(cart2)(Navbar)